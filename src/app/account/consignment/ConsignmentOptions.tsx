"use client"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import EditProductDrawer from "@/app/account/consignment/EditProductDrawer";
import { EdgeStoreProvider } from '@/app/account/consignment/EdgeStore';
import {deleteProduct} from "@/app/account/AccountActions";

export default function ConsignmentOptions({product}) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                        <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"/>
                    </svg>
                </button>
            </PopoverTrigger>
            <PopoverContent className="flex justify-center pl-9 rounded-2xl items-center w-[258px]">
                <div className="w-full">
                    <EdgeStoreProvider>
                        <EditProductDrawer product={product}/>
                    </EdgeStoreProvider>
                    {product.stock == 0 && <button className={"bt w-10/12 h-12 mt-3"} onClick={() => deleteProduct(product.id)}>Delete</button>}
                </div>
            </PopoverContent>
        </Popover>
    )
}
