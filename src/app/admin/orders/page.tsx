import React from 'react';
import SearchField from "@/app/components/SearchField";
import AdminSidebar from "@/app/admin/AdminSidebar";
import OrdersTable from "@/app/admin/orders/OrdersTable";


const Page = ({searchParams}: {searchParams?: { search?: string; } }) => {
    const search = searchParams?.search || '';

    return (
        <div className="flex h-screen justify-start items-start ">
            <div className={"h-full w-fit"}>
                <AdminSidebar selected={3}/>
            </div>
            <div className="flex h-full justify-center grow">
                <div className="w-11/12">
                    <div className="my-5">
                        <SearchField placeholder="Search Item Name"/>
                    </div>
                    <OrdersTable search={search}/>
                </div>
            </div>
        </div>
    );
};

export default Page;