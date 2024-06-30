"use server"

import {cookies} from "next/headers";
import {redirect} from "next/navigation";


export async function logOut() {
    cookies().set("access-token", "");
    cookies().set("user_id", "");
    redirect("/");
}

export async function checkLoggedIn() {
    if (!cookies().get("access-token")) {
        return false;
    }
    const post = await fetch("http://localhost:4000/profile", {
        cache: "no-store",
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${cookies().get("access-token")?.value}`
        }
    })

    return post.ok
}


