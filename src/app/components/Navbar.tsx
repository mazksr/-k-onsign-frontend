import React from "react";
import Link from "next/link";
import './components.css'
import {checkLoggedIn} from "@/app/ServerFunctions";
import LogoutButton from "@/app/components/LogoutButton";

async function Navbar ({buttonsVisibility}) {
    const isLoggedIn = await checkLoggedIn();
    const buttonsList = [
        {'href': '/products', 'text': 'Products'},
        {'href': '/account', 'text': 'Account'}
    ]
    const buttons = isLoggedIn ? buttonsList : [{'href': '/products', 'text': 'Products'}, {'href': '/register', 'text': 'Register'}];

    return (
        <nav
            className='h-20 w-full bg-white flex flex-grow py-2 fixed top-0 z-10 items-center justify-between lg:px-10 md:px-5 sm:px-5 px-5'>
            <Link href='/' className='font-bold text-black align-middle justify-center'>(K)onsign</Link>


            {buttonsVisibility !== 'hide' &&
                <div className="flex items-center">
                    {buttons.map((button) => (
                        <Link href={button.href} key={button.text} className="mx-3 text-black font-bold text-justify">
                            {button.text}
                        </Link>
                    ))}

                    {!isLoggedIn ? <Link href="/login" className="font-bold mx-3 btn">
                        Login
                    </Link> : <LogoutButton/>}
                </div>}
        </nav>
    );
}


export default Navbar;