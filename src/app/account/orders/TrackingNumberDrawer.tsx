"use client"

import React, {createRef, useEffect, useState} from 'react';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer";
import {useFormState} from "react-dom";
import {addProduct, editProduct, inputTrackingNumber} from "@/app/account/AccountActions";
import {useEdgeStore} from "@/app/account/consignment/EdgeStore";

const intialState = {
    message: ""
}

const NewProductDrawer = ({transaction}) => {
    const [state, formAction] = useFormState(inputTrackingNumber, intialState);
    const [value, setValue] = useState(false);

    return (

        <Drawer onClose={() => {
            setValue(false)
        }}>
            <DrawerTrigger
                className="bt h-12 mt-5 w-10/12">
                Input Tracking
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className={"px-14"}>
                    <div className={"flex justify-center"}>
                        <DrawerTitle>Input Tracking Number</DrawerTitle>
                    </div>
                    <DrawerDescription className="text-xl pt-6 pb-16 px-56">
                        <form action={formAction}>
                            <input type="number" className="hidden" name={"id"} defaultValue={transaction.id}/>
                            <label className="block text-gray-700 text-sm font-bold mb-2"
                            >Tracking Number</label>
                            <input
                                className="mb-4 items-start text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                                type="text"
                                required={true}
                                placeholder="Enter Tracking Number"
                                name={"tracking_number"}
                            />
                            <label className="block text-gray-700 text-sm font-bold mb-2"
                            >Carrier Company</label>
                            <input
                                className="mb-4 items-start text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                                type="text"
                                required={true}
                                placeholder="Enter Carrier Company Name"
                                name={"carrier_company"}
                            />
                            <div className="flex items-center font-mono mt-16">

                                <button className='butt max-w-48 mr-5' onClick={() => setValue(true)}>Submit</button>

                                {value && <p>{state.message}</p>}
                            </div>
                        </form>
                    </DrawerDescription>
                </DrawerHeader>
            </DrawerContent>
        </Drawer>
    );
};

export default NewProductDrawer;