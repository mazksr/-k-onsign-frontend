import Navbar from "@/app/components/Navbar";
import "./register.css"
import Link from "next/link";
import RegisterForm from "@/app/register/RegisterForm";

const Page = () => {


    return (
        <>
            <Navbar buttonsVisibility={"hide"}/>

            <div className=" h-screen flex justify-center items-center">
                <div className="animate-jump animate-once  lg:px-10 md:px-5 sm:px-5 px-5">
                    <div className='flex'>
                        <div className='w-fit max-w-screen-sm'>
                            <h1 className='font-bold text-black text-4xl'>Register</h1>
                            <p className='mt-3 text-gray-500 text-justify'>
                                Silahkan Masukkan email dan password kamu
                            </p>
                        </div>
                    </div>
                    <div className="w-full max-w-sm p-5 bg-white rounded-lg font-mono">
                        <RegisterForm/>
                        <Link href="/login"
                              className="active:opacity-50 font-bold font-sans flex items-center justify-center mt-4">Already
                            have an account?</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;