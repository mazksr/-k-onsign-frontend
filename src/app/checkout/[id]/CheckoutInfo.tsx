import React from 'react';
import {checkLoggedIn} from "@/app/ServerFunctions";
const CheckoutInfo = async({id}) => {
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
    const products: Product[] = await req.json();
    let product: Product = products.find(p1 => p1.id == id);
    if (!product || product.stock < 1) {
        product = {id:-1, "name":"Not Found", image_url:"/night.jpg", "price": 0, "condition":"Not Found", "description":"Not Found", stock: 0, own_product: false, consignment_id: -1}
    } else if (product.own_product) {
        redirect("/products")
    }

    return (
        <>
            <div className="flex justify-center max-h-96">
                <div className="flex justify-center">
                    <div className="max-w-96">
                        <img src={product?.image_url} className="object-top w-full"/>
                    </div>
                    <div className="pl-6">
                        <div className=' max-w-sm h-60 overflow-hidden mb-6'>
                            <h1 className='font-bold text-black text-4xl'>{product?.name}</h1>
                            <p className="text-gray-500">{product?.condition}</p>
                            <p className="mt-3">${product?.price}</p>
                            <p className="mt-5 break-words">Description:<br/>{product?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-lg font-sans">
                <CheckoutForm product={product}/>
            </div>
        </>

    );
};
import {cookies} from "next/headers";

import {redirect} from "next/navigation";
import CheckoutForm from "@/app/checkout/[id]/CheckoutForm";

export default CheckoutInfo;