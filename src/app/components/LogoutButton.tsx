"use client"

import React from 'react';
import "./components.css"
import {logOut} from "@/app/ServerFunctions";

function LogoutButton(props) {
    return (
        <button onClick={() => logOut()} className="font-bold mx-3 btn">
            Logout
        </button>
    );
}

export default LogoutButton;