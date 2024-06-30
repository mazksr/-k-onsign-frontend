import "./account.css"
import AdminSidebar from "@/app/admin/AdminSidebar";
import AdminEditForm from "@/app/admin/AdminEditForm";
import {cookies} from "next/headers";
import {Suspense} from "react";
import Loading from "@/app/components/Loading/loading";
import LogoutButton from "@/app/components/LogoutButton";

const Page = async() => {
    const post = await fetch("http://localhost:4000/user/current", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${cookies().get("access-token")?.value}`
        }
    })

    const user = await post.json();

    return (
        <div className="flex h-screen overflow-hidden justify-start items-start ">
            <AdminSidebar selected={0}/>
            <div className="flex justify-center grow">
                <div className="w-11/12">
                    <div className="fixed right-2 top-4">
                        <LogoutButton/>
                    </div>
                    <div className="h-screen flex justify-center mt-10">
                        <div className="w-full h-full max-w-screen-lg p-5 bg-white rounded-lg font-mono">
                            <div>
                                <Suspense fallback={<Loading/>}>
                                    <AdminEditForm user={user}/>
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