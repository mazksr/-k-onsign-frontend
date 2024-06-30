import Navbar from "@/app/components/Navbar";
import React from "react";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Navbar buttonsVisibility={"show"}></Navbar>
            <div
                className={"backgg fixed animate-ping animate-infinite animate-duration-[10000ms] animate-ease-in mt-24 left-3 w-screen h-[calc(100vh-160px)]"}/>
            <div className='flex lg:px-10 md:px-5 sm:px-5 px-5'>
                <div className='w-fit mt-40 max-w-screen-sm bg-white'>
                    <h1 className='animate-fade-down animate-duration-700 font-bold text-black text-4xl'>About
                        (K)onsign</h1>
                    <p className='animate-fade-right animate-delay-200 mt-3 text-black text-justify'>
                        (K)onsign adalah platform consignment terdepan yang memberikan kemudahan bagi Anda untuk
                        menjual
                        barang-barang dengan cepat dan aman. Kami berkomitmen untuk memberikan pengalaman penjualan
                        terbaik melalui layanan yang cepat, transparan, dan didukung oleh customer service yang siap
                        membantu Anda 24/7.
                        <br/><br/>
                        Dengan (K)onsign, menjual dan mencari barang tidak pernah semudah dan secepat ini.
                        Bergabunglah
                        dengan kami sekarang dan nikmati kemudahan penjualan dan pembelian barang dengan layanan yang
                        terpercaya.
                    </p>
                    <Link href='/products'>
                        <button
                                className={"animate-fade-up animate-delay-[400ms] mt-20 animate-once bg-black text-white h-14 w-32 font-bold mx-3 rounded-2xl"}>Get
                            Started
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}
