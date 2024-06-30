import React from 'react';
import ProductItem from "@/app/components/ProductItem";
import {checkLoggedIn} from "@/app/ServerFunctions";
import {cookies} from "next/headers";

interface Products {
    userId: number,
    "id": number,
    "name": string,
    "description": string,
    "price": number,
    "stock": number,
    "condition": string,
    image_url: string,
    own_product: boolean
}

const ProductGrid = async() => {
    const isLoggedIn = await checkLoggedIn();
    const req = await fetch("http://localhost:4000/product",  {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            ...(isLoggedIn && {
                "Authorization": `Bearer ${cookies().get("access-token")?.value}`
            })
        }
    });

    const productsList: Products[] = await req.json();
    const products = productsList.filter(product => !(product.stock<=0));

    return (
        <div className='grid xx grid-cols-2 3:grid-cols-3 4:grid-cols-4 h-fit'>
            {products.map((product) => (
                <div key={product.name}
                     className={"animate-fade-up animate-once animate-duration-500 w-fit h-fit"}>
                    <ProductItem key={product.name} product={product}/>
                </div>
            ))}
        </div>
    );
};

export default ProductGrid;