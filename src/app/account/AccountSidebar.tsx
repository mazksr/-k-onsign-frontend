import SidebarButton from "@/app/account/SidebarButton";
import React from "react";
import OrdersButton from "@/app/account/OrdersButton";

interface Select {
    selected?: number;
}

const AccountSidebar = (props: Select) => {
    const onSelected = "bg-green-400 hover:bg-green-500 text-white fill-white"

    return (
        <div className="border-r-2 border-gray-50 h-full w-60 pb-2 pt-5">
            <h1 className="ml-5 text-start items-start font-sans font-bold text-4xl">Account</h1>
            <div className="h-[calc(100%-88px)] pt-11 font-sans w-full">
                {/*Tombol Akun*/}
                <SidebarButton
                    path={"M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"}
                    label={"Akun"} href={"/account"} className={props.selected === 0 ? onSelected : ""}/>


                {/*  Tombol Transaksi  */}
                <SidebarButton
                    path={"M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"}
                    label={"Transaksi"} href="/account/transaction" className={props.selected === 1 ? onSelected : ""}/>

                {/*  Tombol Consignment  */}
                <SidebarButton
                    path={"M841-518v318q0 33-23.5 56.5T761-120H201q-33 0-56.5-23.5T121-200v-318q-23-21-35.5-54t-.5-72l42-136q8-26 28.5-43t47.5-17h556q27 0 47 16.5t29 43.5l42 136q12 39-.5 71T841-518Zm-272-42q27 0 41-18.5t11-41.5l-22-140h-78v148q0 21 14 36.5t34 15.5Zm-180 0q23 0 37.5-15.5T441-612v-148h-78l-22 140q-4 24 10.5 42t37.5 18Zm-178 0q18 0 31.5-13t16.5-33l22-154h-78l-40 134q-6 20 6.5 43t41.5 23Zm540 0q29 0 42-23t6-43l-42-134h-76l22 154q3 20 16.5 33t31.5 13ZM201-200h560v-282q-5 2-6.5 2H751q-27 0-47.5-9T663-518q-18 18-41 28t-49 10q-27 0-50.5-10T481-518q-17 18-39.5 28T393-480q-29 0-52.5-10T299-518q-21 21-41.5 29.5T211-480h-4.5q-2.5 0-5.5-2v282Zm560 0H201h560Z"}
                    label={"Consignment"} href={"/account/consignment"}
                    className={props.selected === 2 ? onSelected : ""}/>

                <OrdersButton className={props.selected === 3 ? onSelected : ""}/>


            </div>
            {/*  Go Back  */}
            <SidebarButton
                path={"M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z"}
                label={"Home"} href={"/"}/>

        </div>
    );
};

export default AccountSidebar;