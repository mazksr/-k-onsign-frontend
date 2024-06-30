import React from 'react';
import SearchField from "@/app/components/SearchField";
import SellerDrawer from "@/app/account/consignment/SellerDrawer";
import {EdgeStoreProvider} from "@/app/account/consignment/EdgeStore";
import NewProductDrawer from "@/app/account/consignment/NewProductDrawer";
import {cookies} from "next/headers";

const TopComponent = async() => {
    const req = await fetch("http://localhost:4000/seller/current", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${cookies().get("access-token")?.value}`
        }
    })
    //shorthand statement
    const seller = req.ok ? await req.json() : {user_id: -1, seller_balance: 0};

    return (
        <div className="my-5 flex justify-between items-center">
            <div className={"flex items-center"}>
                <SearchField placeholder="Search Product Name"/>
                {seller &&
                    <p className={"mx-6 font-sans font-bold"}>Balance: ${seller.seller_balance}</p>}
            </div>
            <div className="flex justify-center items-center">
                {seller && seller.user_id !== -1 && <SellerDrawer seller={seller}/>}
                <EdgeStoreProvider><NewProductDrawer/></EdgeStoreProvider>
            </div>
        </div>
    );
};

export default TopComponent;