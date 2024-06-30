"use server"

import {redirect} from "next/navigation";
import {z} from "zod";

const userSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    username: z
        .string()
        .min(1, "Username is required")
        .regex(/^\S*$/, "Username cannot contain spaces"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    address: z.string().min(1, "Address is required"),
    phone_number: z.string().regex(/^\d{10,15}$/, "Phone number must be between 10 and 15 digits")
});

export async function registerAction(prevState: any, formData: FormData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const username = formData.get("username");
    const password = formData.get("password");
    const address = formData.get("address");
    const phone_number = formData.get("phone_number");

    const validate = userSchema.safeParse({
        name, email, username, password, address, phone_number
    })
    if (!validate.success) {
        return {message: validate.error.errors[0].message, success: false}
    }

    const post = await fetch("http://localhost:4000/user", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            username,
            password,
            address,
            phone_number
        })
    })
    const response = await post.json();
    if (post.ok) {
        redirect("/login")
        return {message: response.message, success: true}
    } else {
        return {message: response.message, success: false}
    }
}