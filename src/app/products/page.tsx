import React, {Suspense} from 'react';
import ProductItem from "@/app/components/ProductItem";
import Navbar from "@/app/components/Navbar";
import {checkLoggedIn} from "@/app/ServerFunctions";
import {cookies} from "next/headers";
import Loading from "@/app/components/Loading/loading";
import ProductGrid from "@/app/products/ProductGrid";

const Function = () => {

    return (
        <>
            <Navbar buttonsVisibility={"show"}/>
            <div className="flex justify-center">
                <div className={`mt-20 max-w-screen-2xl min-w-[780px] w-full px-10`}>
                    <h1 className='animate-fade-right animate-duration-700 font-bold text-black text-4xl'>Products</h1>
                    <Suspense fallback={<Loading/>}>
                        <ProductGrid/>
                    </Suspense>
                </div>

            </div>
        </>
    );
};

export default Function;