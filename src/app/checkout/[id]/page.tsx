import React, {Suspense} from "react";
import Navbar from "@/app/components/Navbar";
import "./checkout.css"
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {checkLoggedIn} from "@/app/ServerFunctions";
import CheckoutForm from "@/app/checkout/[id]/CheckoutForm";
import CheckoutInfo from "@/app/checkout/[id]/CheckoutInfo";
import Loading from "@/app/components/Loading/loading";

interface Product {
    "id": number,
    "name": string,
    "description": string,
    "price": number,
    "stock": number,
    "condition": string,
    image_url: string,
    own_product: boolean,
    consignment_id: number
}

const Page = ({params}: { params: { id: number } }) => {

    return (
        <>
            <Navbar buttonsVisibility={"hide"}/>
            <div className="animate-fade-up animate-once animate-duration-700 flex justify-center items-center mt-24">
                <div>
                    <Suspense fallback={<Loading/>}>
                        <CheckoutInfo id={params.id}/>
                    </Suspense>
                </div>
            </div>
        </>
    );
};

export default Page;