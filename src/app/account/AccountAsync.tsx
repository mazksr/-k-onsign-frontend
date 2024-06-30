import React from 'react';
import {cookies} from "next/headers";
import AccountEditForm from "@/app/account/AccountEditForm";

const AccountAsync = async () => {
    const post = await fetch("http://localhost:4000/user/current", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${cookies().get("access-token")?.value}`
        }
    })
    const user = await post.json();

    return (
        <AccountEditForm user={user}/>
    );
};

export default AccountAsync;