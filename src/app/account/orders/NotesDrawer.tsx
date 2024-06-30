"use client"

import React from 'react';
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer";

const NotesDrawer = ({transaction}) => {

    return (
        <Drawer >
            <DrawerTrigger
                className="bt mt-5 h-12 w-10/12">
                Buyer Notes
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className={"px-14"}>
                    <div className={"flex justify-center"}>
                        <DrawerTitle>Buyer Notes</DrawerTitle>
                    </div>
                    <DrawerDescription className="flex justify-center text-xl pt-6 pb-16 px-56">
                        <p className={"font-bold text-black font-mono text-3xl"}>{transaction.buyer_notes}</p>
                    </DrawerDescription>
                </DrawerHeader>
            </DrawerContent>
        </Drawer>
    );
};

export default NotesDrawer;