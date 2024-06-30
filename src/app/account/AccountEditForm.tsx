"use client"

import {useFormState} from "react-dom";
import {editAccount} from "@/app/account/AccountActions";

const intialState = {
    message: ""
}

function AccountEditForm({user}) {


    const [state, formAction] = useFormState(editAccount, intialState);

    return (
        <form action={formAction}>

            {/* Email Field */}
            <label className="block text-gray-700 text-sm font-bold mb-2"
                   htmlFor="email_field">Email</label>
            <input
                className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                type="email"
                id="email_field"
                placeholder="your@email.com"
                name={"email"}
                defaultValue={user.email}/>
            <div className="flex">
                <div className="w-1/2 mr-1">
                    {/* Name Field */}
                    <label className="block text-gray-700 text-sm font-bold mb-2"
                           htmlFor="name_field">Name</label>
                    <input
                        className="mb-4 items-start text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                        type="text"
                        id="name_field"
                        placeholder="Enter fullname"
                        name={"name"}
                        defaultValue={user.name}/>
                </div>
                <div className="w-1/2 ml-1">
                    {/* Username Field */}
                    <label className="block text-gray-700 text-sm font-bold mb-2"
                           htmlFor="username_field">Username</label>
                    <input
                        className="mb-4 text-sm mr-2 custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                        type="text"
                        id="username_field"
                        placeholder="Enter username"
                        name={"username"}
                        defaultValue={user.username}/>
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
                placeholder="********"/>

            {/* Address Field */}
            <label className="block text-gray-700 text-sm font-bold mb-2"
                   htmlFor="address_field">Address</label>
            <textarea
                className="mb-4 h-24 resize-none text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                id="address_field"
                rows={4}
                style={{maxLines: 4}}
                placeholder="Enter address"
                name={"address"}
                defaultValue={user.address}/>

            {/* Phone Number Field */}
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone_field">Phone
                Number</label>
            <input
                className="mb-4 text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                type="text"
                id="phone_field"
                placeholder="Enter phone number"
                name={"phone_number"}
                defaultValue={user.phone_number}/>
            <button className='butt max-w-48 mt-16'>Save Changes</button>
            <p className="mt-5">{state.message}</p>
        </form>
    );
}

export default AccountEditForm;