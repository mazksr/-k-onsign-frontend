import React, {Suspense} from 'react';
import SearchField from "@/app/components/SearchField";
import AccountSidebar from "@/app/account/AccountSidebar";
import OrdersTable from "@/app/account/orders/OrdersTable";
import Loading from "@/app/components/Loading/loading";


const Page = ({searchParams}: {searchParams?: { search?: string; } }) => {
    const search = searchParams?.search || '';

    return (
        <div className="flex h-screen justify-start items-start ">
            <div className={"h-full w-fit"}>
                <AccountSidebar selected={3}/>
            </div>
            <div className="flex h-full justify-center grow">
                <div className="w-11/12">
                    <div className="my-5">
                        <SearchField placeholder="Search Item Name"/>
                    </div>
                    <Suspense fallback={<Loading/>}>
                        <OrdersTable search={search}/>
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default Page;