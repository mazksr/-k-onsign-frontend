import "./account.css"
import AccountSidebar from "@/app/account/AccountSidebar";
import {Suspense} from "react";
import Loading from "@/app/components/Loading/loading";
import LogoutButton from "@/app/components/LogoutButton";
import AccountAsync from "@/app/account/AccountAsync";

const Page = async() => {

    return (
        <div className="flex h-screen overflow-hidden justify-start items-start ">
            <AccountSidebar selected={0}/>
            <div className="flex justify-center grow">
                <div className="w-11/12">
                    <div className="fixed right-2 top-4">
                        <LogoutButton/>
                    </div>
                    <div className="h-screen flex justify-center mt-10">
                        <div className="w-full h-full max-w-screen-lg p-5 bg-white rounded-lg font-mono">
                            <div>
                                <Suspense fallback={<Loading/>}>
                                    <AccountAsync/>
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;