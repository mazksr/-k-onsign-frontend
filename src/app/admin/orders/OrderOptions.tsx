"use client"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import "@/app/admin/account.css"
import {confirmOrder, deleteOrder} from "@/app/admin/AdminActions";
import {cancelOrder} from "@/app/admin/AdminActions";
import ShowTrackingDrawer from "@/app/account/transaction/ShowTrackingDrawer";

export default function OrderOptions({transaction}) {
    const isCancelable = transaction.order_status === "waiting payment" || transaction.order_status === "seller notified";
    const isDeleteable = transaction.order_status === "completed" || transaction.order_status === "canceled";

    return (
        <Popover>
            <PopoverTrigger asChild>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                        <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"/>
                    </svg>
                </button>
            </PopoverTrigger>
            <PopoverContent className="flex justify-center pl-8 rounded-2xl items-center w-[258px]">
                <div className={"w-full"}>
                    {isDeleteable && <button className={"bt w-10/12 h-12 mt-3"} onClick={() => deleteOrder(transaction.id)}>Delete</button>}
                    {transaction.order_status === "shipping" && <ShowTrackingDrawer transaction={transaction}/>}
                    {transaction.order_status === "waiting payment" &&
                        <button className={"bt w-10/12 h-12 mt-3"} onClick={() => confirmOrder(transaction.id)}>Confirm Payment</button>}
                    {isCancelable &&
                        <button className={"bt w-10/12 h-12 mt-3"} onClick={() => cancelOrder(transaction.id)}>Cancel</button>}
                </div>
            </PopoverContent>
        </Popover>
    )
}
