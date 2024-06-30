import React, {Suspense} from 'react';
import AccountSidebar from "@/app/account/AccountSidebar";
import ConsignmentTable from "@/app/account/consignment/ConsignmentTable";
import TopComponent from "@/app/account/consignment/TopComponent";
import Loading from "@/app/components/Loading/loading";

const Page = ({searchParams}: {searchParams?: { search?: string; } }) => {

    return (
        <div className="flex h-screen justify-start items-start ">
            <AccountSidebar selected={2}/>
            <div className="flex justify-center grow">
                <div className="w-11/12 ">
                    <TopComponent/>
                    <div className="h-[calc(100vh-90px)] overflow-auto">
                        <Suspense fallback={<Loading/>}>
                            <ConsignmentTable search={searchParams.search}/>
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;