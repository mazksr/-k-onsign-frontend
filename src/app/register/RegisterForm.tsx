"use client"
import React from 'react';
import {useFormState} from "react-dom";
import {registerAction} from "@/app/register/RegisterAction";

const initialState = {
    message: "",
    success: true
}

function RegisterForm(props) {
    const [state, formAction] = useFormState(registerAction, initialState);


    return (
        <>
            <p className={state.success ? 'mb-5' : 'text-red-500 mb-5'}>{state.message}</p>
            <form action={formAction}>
                {/* Email Field */}
                <label className="block text-gray-700 text-sm font-bold mb-2"
                       htmlFor="email_field">Email</label>
                <input
                    className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                    type="email"
                    name={"email"}
                    id="email_field"
                    placeholder="your@email.com"

                />
                <div className="flex">
                    <div className="w-1/2 mr-1">
                        {/* Name Field */}
                        <label className="block text-gray-700 text-sm font-bold mb-2"
                               htmlFor="name_field">Full Name</label>
                        <input
                            className="mb-4 items-start text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            type="text"
                            id="name_field"
                            name={"name"}
                            placeholder="Enter full name"
                        />
                    </div>
                    <div className="w-1/2 ml-1">
                        {/* Username Field */}
                        <label className="block text-gray-700 text-sm font-bold mb-2"
                               htmlFor="username_field">Username</label>
                        <input
                            className="mb-4 text-sm mr-2 custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                            type="text"
                            id="username_field"
                            name={"username"}
                            placeholder="Enter username"
                        />
                    </div>
                </div>

                {/* Password Field */}
                <label className="block text-gray-700 text-sm font-bold mb-2"
                       htmlFor="password_field">Password</label>
                <input
                    className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                    type="password"
                    id="password_field"
                    name={"password"}
                    placeholder="********"
                />

                {/* Address Field */}
                <label className="block text-gray-700 text-sm font-bold mb-2"
                       htmlFor="address_field">Address</label>
                <textarea
                    className="mb-4 h-24 resize-none text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                    id="address_field"
                    rows={4}
                    style={{maxLines: 4}}
                    name={"address"}
                    placeholder="Enter address"/>

                {/* Phone Number Field */}
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone_field">Phone
                    Number</label>
                <input
                    className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                    type="text"
                    id="phone_field"
                    name={"phone_number"}
                    placeholder="Enter phone number"/>
                <button type={"submit"} className='button mt-5'>Register</button>
            </form>
        </>
    );
}

export default RegisterForm;