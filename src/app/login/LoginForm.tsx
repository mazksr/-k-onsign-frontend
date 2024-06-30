"use client"

import React from 'react';
import {loginAction} from "./LoginAction"
import {useFormState} from "react-dom"

const initialState = {
    success: true,
    message: ""
}

function LoginForm(props) {
    const [state, formAction] = useFormState(loginAction, initialState);

    return (
        <>
            <p className={state.success ? 'mb=5' : 'text-red-500 mb-5'}>{state.message}</p>

            <form action={formAction}>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email_field"
                >Email</label
                >
                <input
                    className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                    placeholder="your@email.com"
                    type="email"
                    name={"email"}
                    id="email_field"
                />
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password_field"
                >Password</label>
                <input
                    className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                    placeholder="********"
                    name={"password"}
                    type="password"
                    id="password_field"
                />
                <button type={"submit"} className='button mt-5'>Login</button>
            </form>
        </>
    );
}

export default LoginForm;