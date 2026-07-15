"use client";

import { SquareArrowRightEnter, User, LockKeyhole } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from "next/link";

export default function Login() {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <div className="flex justify-center items-center min-h-screen">
           <div className="w-[500px] h-[400px] shadow-md rounded-xl p-4 flex flex-col justify-center items-center">
                <h3 className="font-bold text-[25px] tracking-[2px] mt-5">Login</h3>
                <div>
                    <form onSubmit={handleSubmit} className="h-[350px] w-[350px] mt-5 flex flex-col">
                        {/* username */}
                        <label className="tracking-[3px] font-medium"> Username</label>
                        <div className="mt-2 flex flex-row outline outline-1 outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-gray-400 rounded-md p-2 tracking-[2px]">
                            <User className=''/>
                           <input 
                            type="text" placeholder="username" 
                           className='ml-2 w-full h-full border-none outline-none'
                            /> 
                        </div>
                        
                        {/* Password */}
                        <label className="tracking-[3px] font-medium mt-5"> Password</label>
                        <div className="mt-2 flex flex-row outline outline-1 outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-gray-400 rounded-md p-2 tracking-[2px]">
                            <LockKeyhole/>
                            <input 
                            type="password" placeholder="password" 
                            className='ml-3 h-full w-full outline-none border-none'
                            />
                        </div>
                        
                        <div className='w-full flex justify-center mt-3'>
                            <button type='submit' className="bg-blue-700 mt-5 w-32 h-[40px] rounded-md flex flex-row justify-center items-center text-white cursor-pointer gap-2">
                            <SquareArrowRightEnter/>
                            Login
                            </button>
                        </div>
                        <div className='w-full flex justify-center'>
                            <p className='mt-5 text-[15px]'>Already have an account? <Link href="/register" className='text-blue-700 cursor-pointer'>Sign in</Link></p>
                        </div>
                       
                    </form>
                </div>
           </div>
        </div>
    )
}