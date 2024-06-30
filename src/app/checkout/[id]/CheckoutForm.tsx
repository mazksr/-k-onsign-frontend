"use client"

import React from 'react';
import {checkoutAction} from "@/app/checkout/[id]/CheckoutActions";
import {useFormState} from "react-dom";

interface Product {
    "id": number,
    "name": string,
    "description": string,
    "price": number,
    "stock": number,
    "condition": string,
    image_url: string,
    own_product: boolean,
    consignment_id: number
}

const CheckoutForm = ({product}: {product: Product}) => {
    const [state, formAction] = useFormState(checkoutAction, {message:""})
    return (
        <form action={formAction}>
            <input type="text" className={"hidden"} name={"consignment_id"} defaultValue={product.consignment_id}/>
            <input type="text" className={"hidden"} name={"price"} defaultValue={product.price}/>
            <label className="block text-gray-700 text-sm font-bold mb-2"
            >Amount</label>
            <input
                className="mb-4 text-sm custom-input w-44 px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                type="number"
                name={"amount"}
                required={true}
                defaultValue="1"
                step="1" min="1" max={product.stock}
                placeholder="Amount"/>

            <div className="radio-input">
                <div className="info">
                    <span className="question font-bold mt-5 text-gray-700">Pilih Metode Pembayaran</span>
                </div>
                <input type="radio" id="value-1" name="payment" value="BNI"/>
                <label htmlFor="value-1">Transfer BNI</label>
                <input type="radio" id="value-2" name="payment" value="BRI"/>
                <label htmlFor="value-2">Transfer Mandiri</label>
                <input type="radio" id="value-3" name="payment" value="e-wallet"/>
                <label htmlFor="value-3">Transfer DANA/OVO/Go-Pay</label>
            </div>

            <label className="block text-gray-700 text-sm font-bold mb-2 mt-4"
                   htmlFor="notes_field">Notes</label>
            <textarea
                className="mb-4 h-24 resize-none text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                id="notes_field"
                name={"buyer_notes"}
                rows={4}
                style={{maxLines: 4}}
                placeholder="Enter additional notes"/>
            <input type="submit" value="Confirm" className="btnnn"/>
        </form>
    );
};

export default CheckoutForm;