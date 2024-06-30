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

const ShowTrackingDrawer = ({transaction}) => {

    return (

        <Drawer >
            <DrawerTrigger
                className="bt mt-5 h-12 w-10/12">
                Tracking Number
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className={"px-14"}>
                    <div className={"flex justify-center"}>
                        <DrawerTitle>Tracking Number</DrawerTitle>
                    </div>
                    <DrawerDescription className="flex justify-center text-xl pt-6 pb-16 px-56">
                        <p className={"font-bold text-black font-mono text-3xl"}>Tracking Number: {transaction.tracking_number}</p>
                    </DrawerDescription>
                </DrawerHeader>
            </DrawerContent>
        </Drawer>
    );
};

export default ShowTrackingDrawer;