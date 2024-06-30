import React from 'react';
import {checkLoggedIn} from "@/app/ServerFunctions";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import Link from "next/link";
import OnSelectedGrid from "@/app/products/[productId]/OnSelectedGrid";

const OnSelectedProduct = async ({id}) => {
    const isLoggedIn = await checkLoggedIn();
    const req = await fetch("http://localhost:4000/product", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            ...(isLoggedIn && {
                "Authorization": `Bearer ${cookies().get("access-token")?.value}`
            })
        }
    });
    const productsList: Product[] = await req.json();

    let product: Product = productsList.find(p1 => p1.id == id);
    const products = productsList.filter(product => !(product.stock <= 0) && product.id != id);

    if (!product || product.stock < 1) {
        product = {
            id: -1,
            "name": "Not Found",
            image_url: "",
            "price": 0,
            "condition": "Not Found",
            "description": "Not Found",
            stock: 0,
            own_product: false
        }
    } else if (product.own_product) {
        redirect("/products")
    }

    return (
        <div>
            <div className="animate-fade-up animate-duration-300 flex justify-center items-center h-96 mt-20">
                <div className="h-full x w-1/2 max-w-[775px]">
                    <Link href="/products">
                        <button
                            className="group cursor-pointer outline-none hover:rotate-90 duration-300"
                            title="Cancel"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960"
                                 width="48px" fill="#000000">
                                <path
                                    d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
                            </svg>
                        </button>
                    </Link>


                    <div className="flex justify-center min-w-[600px] h-full items-center">
                        <div className="flex w-full h-full justify-center">
                            <div className="w-96 overflow-hidden">
                                <img alt="img" src={product.image_url}
                                     className="object-contain rounded-lg w-full"/>
                            </div>
                            <div className="w-1/2 pl-6">
                                <div className='h-5/6 overflow-hidden'>
                                    <h1 className='font-bold text-black text-4xl'>{product.name}</h1>
                                    <p className="text-gray-500">{product.condition}</p>
                                    <p className="mt-3">${product.price}</p>
                                    <p className="mt-5 break-words">Description:<br/>{product.description}</p>
                                </div>
                                <Link href={!product.own_product ? `/checkout/${product.id}` : "/products"}>
                                    <div className="btnn">
                                        Buy
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <OnSelectedGrid p={products}/>
        </div>
    );
};

export default OnSelectedProduct;