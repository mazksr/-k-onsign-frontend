"use server"

import {cookies} from "next/headers";
import {redirect} from "next/navigation";

export async function checkoutAction(prevState: any, formData: FormData) {
    const consignment_id = formData.get("consignment_id");
    const amountEntry = formData.get("amount");
    const price = formData.get("price");
    const buyer_notes = formData.get("buyer_notes");
    const payment = formData.get("payment");

    let total_price: number
    let amount: number

    if (typeof amountEntry === "string" && typeof price === "string") {
        amount = parseInt(amountEntry, 10)
        total_price = parseInt(price, 10) * amount
    } else {
        amount = 0
        total_price = 0
    }

    const post = await fetch("http://localhost:4000/transaction", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${cookies().get("access-token")?.value}`
        },
        body: JSON.stringify({
            consignment_id, amount, total_price, buyer_notes, payment
        })
    })
    const response = await post.json();
    if (post.ok) {
        redirect("/account/transaction")
        return { message: response.message, success: true }
    } else {
        return { message: response.message, success: false }
    }

}