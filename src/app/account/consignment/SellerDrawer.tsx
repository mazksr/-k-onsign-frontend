"use client"

import React, {useState} from 'react';
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer";
import {useFormState} from "react-dom";
import {editSeller} from "@/app/account/AccountActions";

const intialState = {
    message: ""
}

const SellerDrawer = ({seller}) => {
    const [state, formAction] = useFormState(editSeller, intialState);
    const [value, setValue] = useState(false);

    return (
        <Drawer onClose={() => {
            setValue(false)
        }}>
            <DrawerTrigger className="btnnn h-14 mr-1 w-40">Seller Details</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className={"px-14 pb-10"}>
                    <div className={"flex justify-center"}>
                        <DrawerTitle>Seller Details</DrawerTitle>
                    </div>
                    <DrawerDescription className="text-xl pt-6 pb-24 px-56">
                        <form action={formAction}>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Bank</label>
                            <input
                                className="mb-4 items-start text-sm custom-input w-96 px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                                type="text"

                                placeholder="BNI, Mandiri dll. (Pilih Satu)"
                                name={"bank"}
                                defaultValue={seller.bank}
                            />
                            <div className="flex">
                                <div className="w-40 mr-1">
                                    <label className="block text-gray-700 text-sm font-bold mb-2"
                                    >Nomor Rekening</label>
                                    <input
                                        className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                                        type="text"
                                        name={"bank_number"}
                                        step="1" min="1"
                                        placeholder="Nomor Rekening"
                                        defaultValue={seller.bank_number}/>
                                </div>
                                <div className="w-40 ml-1">
                                    <label className="block text-gray-700 text-sm font-bold mb-2"
                                    >Nomor E-Wallet</label>
                                    <input
                                        className="mb-4 text-sm mr-2 custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                                        type="text"
                                        placeholder="08xxxxxxxx"
                                        name={"ewallet_number"}
                                        defaultValue={seller.ewallet_number}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center font-mono mt-5">
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

export default SellerDrawer;