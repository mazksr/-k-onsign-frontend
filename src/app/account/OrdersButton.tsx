import React from 'react';
import SidebarButton from "@/app/account/SidebarButton";
import {cookies} from "next/headers";

const OrdersButton = async({className}: {className: string}) => {
    const req = await fetch("http://localhost:4000/seller/current", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${cookies().get("access-token")?.value}`
        }
    })
    if (!req.ok) return null;
    return (
    <SidebarButton
        path={"M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h80q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm280-320q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85Z"}
        label={"Incoming Orders"} href={"/account/orders"}
        className={className}/>
    );
};

export default OrdersButton;