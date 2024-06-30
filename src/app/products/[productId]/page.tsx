import React, { Suspense } from 'react';
import Navbar from "@/app/components/Navbar";
import "./productsId.css"
import OnSelectedProduct from "@/app/products/[productId]/OnSelectedProduct";
import Loading from "@/app/components/Loading/loading";

const Function = ({params}: {params: {productId: number}}) => {

    return (
        <>
            <Navbar buttonsVisibility={"show"}/>
            <Suspense fallback={<Loading/>}>
                <OnSelectedProduct id={params.productId}/>
            </Suspense>
        </>
    );
};

export default Function;