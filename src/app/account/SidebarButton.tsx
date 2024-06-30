"use client"

import React from 'react';
import {useRouter} from "next/navigation";

interface Prop {
    path: string;
    label: string;
    href: string;
    className?: string;
}

function SidebarButton(props: Prop) {
    const router = useRouter();


    return (
        <button onClick={() => router.push(props.href)} className={`flex h-12 justify-start items-center w-full hover:bg-gray-200 rounded-xl ${props.className}`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                  className="ml-5">
                <path
                    d={props.path}/>
            </svg>
            <p className={"ml-3"}>{props.label}</p>
        </button>
    );
}

export default SidebarButton;