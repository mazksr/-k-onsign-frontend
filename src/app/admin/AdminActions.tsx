"use server"

import {cookies} from "next/headers";
import {revalidatePath} from "next/cache";
import {z} from "zod";

const userSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    username: z
        .string()
        .min(1, "Username is required")
        .regex(/^\S*$/, "Username cannot contain spaces"),
    password: z.string().optional().refine((val) => !val || val.length >= 8, {
        message: "Password must be at least 8 characters long",
    }),
    address: z.string().min(1, "Address is required"),
    phone_number: z.string().regex(/^\d{10,15}$/, "Phone number Invalid, please make sure you have entered a valid phone number")
});

const productSchema = z.object({
    image_url: z.string().url("Image URL is invalid, please make sure you have uploaded an image"),
    name: z.string().min(1, "Name is required"),
    description: z.string().optional(),
    price: z.number().positive("Price must be at least one"),
    stock: z.number().int().positive("Stock must be at least one"),
    condition: z.enum(["baru", "bekas"], {
        invalid_type_error: "Condition must be 'baru' (new) or 'bekas' (used)",
    }),
});

const productEditSchema = z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string().optional(),
    price: z.number().positive("Price must be a positive number"),
    stock: z.number().int().nonnegative("Stock must be 0 or greater"),
    condition: z.enum(["baru", "bekas"], {
        invalid_type_error: "Condition must be 'baru' (new) or 'bekas' (used)",
    }),
});

const sellerSchema = z.object({
    bank: z.string().min(1, "Bank is required"),
    bank_number: z.string().min(1, "Bank number is required"),
    ewallet_number: z.string().optional().refine((val) => !val || !val || val.length >= 10 && val.length <= 15, {
        message: "Phone number must be between 10 and 15 digits",
    }),
});


export async function editAccount(prevState: any, formData: FormData) {
    const name = formData.get("name")
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

    const post = await fetch("http://localhost:4000/user/current", {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${cookies().get("access-token")?.value}`
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
        return {message: response.message, success: true}
    } else {
        return {message: response.message, success: false}
    }
}

export async function addProduct(prevState: any, formData: FormData) {
    const name = formData.get("name");
    const image_url = formData.get("image_url");
    const description = formData.get("description");
    const priceEntry = formData.get("price");
    const stockEntry = formData.get("stock");
    const condition = formData.get("condition");

    const price = typeof priceEntry === 'string' ? parseInt(priceEntry, 10) : priceEntry;
    const stock = typeof stockEntry === 'string' ? parseInt(stockEntry, 10) : stockEntry;

    const validate = productSchema.safeParse({
        image_url, name, description, price, stock, condition
    })
    if (!validate.success) {
        console.log(validate.error.errors)
        return {message: validate.error.errors[0].message, success: false}
    }

    const post = await fetch("http://localhost:4000/product/current", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${cookies().get("access-token")?.value}`
        },
        body: JSON.stringify({
            name,
            image_url,
            description,
            price,
            stock,
            condition,
        })
    })
    const response = await post.json();
    if (post.ok) {
        revalidatePath("/account/products")
        return {message: response.message, success: true}
    } else {
        return {message: response.message, success: false}
    }
}

export async function editProduct(prevState: any, formData: FormData) {
    const id = formData.get("id");
    const name = formData.get("name");
    const image_url = formData.get("image_url");
    const description = formData.get("description");
    const priceEntry = formData.get("price");
    const stockEntry = formData.get("stock");
    const condition = formData.get("condition");

    const price = typeof priceEntry === 'string' ? parseInt(priceEntry, 10) : priceEntry;
    const stock = typeof stockEntry === 'string' ? parseInt(stockEntry, 10) : stockEntry;

    const validate = productEditSchema.safeParse({
        name, description, price, stock, condition
    })
    if (!validate.success) {
        return {message: validate.error.errors[0].message, success: false}
    }

    const post = await fetch(`http://localhost:4000/product/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${cookies().get("access-token")?.value}`
        },
        body: JSON.stringify({
            name,
            image_url,
            description,
            price,
            stock,
            condition,
        })
    })
    const response = await post.json();
    if (post.ok) {
        revalidatePath("/account/products")
        return {message: response.message, success: true}
    } else {
        return {message: response.message, success: false}
    }
}

export async function deleteProduct(id: number) {
    const post = await fetch(`http://localhost:4000/product/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${cookies().get("access-token")?.value}`
        },
    })
    const response = await post.json();
    if (post.ok) {
        revalidatePath("/account/products")
        return {message: response.message, success: true}
    } else {
        return {message: response.message, success: false}
    }
}

export async function editSeller(prevState: any, formData: FormData) {
    const bank = formData.get("bank");
    const bank_number = formData.get("bank_number");
    const ewallet_number = formData.get("ewallet_number");

    const validate = sellerSchema.safeParse({
        bank, bank_number, ewallet_number
    })
    if (!validate.success) {
        return {message: validate.error.errors[0].message, success: false}
    }

    const post = await fetch("http://localhost:4000/seller/current", {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${cookies().get("access-token")?.value}`
        },
        body: JSON.stringify({
            bank, bank_number, ewallet_number
        })
    })
    const response = await post.json();
    if (post.ok) {
        return {message: response.message, success: true}
    } else {
        return {message: response.message, success: false}
    }
}

export async function confirmOrder(id: number) {
    const post = await fetch(`http://localhost:4000/transaction/confirm/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${cookies().get("access-token")?.value}`
        }
    })
    const response = await post.json();
    if (post.ok) {
        revalidatePath("/admin/orders")
        return {message: response.message, success: true}
    } else {
        return {message: response.message, success: false}
    }
}

export async function deleteOrder(id: number) {
    const post = await fetch(`http://localhost:4000/transaction/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${cookies().get("access-token")?.value}`
        }
    })
    const response = await post.json();
    if (post.ok) {
        revalidatePath("/admin/orders")
        return {message: response.message, success: true}
    } else {
        return {message: response.message, success: false}
    }
}

export async function cancelOrder(id: number) {
    const post = await fetch(`http://localhost:4000/transaction/cancel/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${cookies().get("access-token")?.value}`
        }

    })
    const response = await post.json();
    if (post.ok) {
        revalidatePath("/admin/orders")
        return {message: response.message, success: true}
    } else {
        return {message: response.message, success: false}
    }
}


