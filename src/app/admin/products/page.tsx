import React from 'react';
import AdminSidebar from "@/app/admin/AdminSidebar";
import SearchField from "@/app/components/SearchField";
import {cookies} from "next/headers";
import { EdgeStoreProvider } from '@/app/account/consignment/EdgeStore';
import ConsignmentTable from "@/app/admin/products/ConsignmentTable";
import NewProductDrawer from "@/app/admin/products/NewProductDrawer";
import SellerDrawer from "@/app/admin/products/SellerDrawer";

const Page = async({searchParams}: {searchParams?: { search?: string; } }) => {
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
        <div className="flex h-screen justify-start items-start ">
            <AdminSidebar selected={2}/>
            <div className="flex justify-center grow">
                <div className="w-11/12 ">
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
                    <div className="h-[calc(100vh-90px)] overflow-auto"><ConsignmentTable search={searchParams.search}/></div>

                </div>
            </div>
        </div>
    );
};

export default Page;