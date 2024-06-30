 "use server"

 import {cookies} from "next/headers";
 import {redirect} from "next/navigation";

 export async function loginAction(prevState: any, formData: FormData) {
     const email = formData.get("email");
     const password = formData.get("password");

     const post = await fetch("http://localhost:4000/login", {
         method: "POST",
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify({
             email,
             password
         })
     })
     const response = await post.json();
     if (post.ok) {
         cookies().set("access-token", response.access_token)
         redirect("/")
         return { message: response.message, success: true }
     } else {
         return { message: response.message, success: false }
     }

 }