"use client";

import { SquareArrowRightEnter } from 'lucide-react';

export default function Login() {
    return (
        <div className="flex justify-center items-center min-h-screen">
           <div className="w-[500px] h-[400px] shadow-md rounded-xl p-4 flex flex-col justify-center items-center">
                <h3 className="font-bold text-[25px] tracking-[2px] mt-5">Login</h3>
                <div>
                    <form action="" className="h-[350px] w-[350px] mt-5 flex flex-col">
                        {/* username */}
                        <label className="tracking-[3px] font-medium"> Username</label>
                        <input 
                            type="text" placeholder="username" 
                            className="mt-2 outline outline-1 outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-gray-400 rounded-md p-2 tracking-[2px]"
                            />
                        {/* Password */}
                        <label className="tracking-[3px] font-medium mt-5"> Password</label>
                        <input 
                            type="password" placeholder="password" 
                            className="mt-2 outline outline-1 outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-gray-400 rounded-md p-2 tracking-[2px]"
                            />
                        <div className='w-full flex justify-center mt-3'>
                            <button className="bg-blue-700 mt-5 w-32 h-[40px] rounded-md flex flex-row justify-center items-center text-white cursor-pointer gap-2">
                            <SquareArrowRightEnter/>
                            Login
                            </button>
                        </div>
                        <div className='w-full flex justify-center'>
                            <p className='mt-5 text-[15px]'>Already have an account? <span className='text-blue-700 cursor-pointer'>Sign in</span></p>
                        </div>
                       
                    </form>
                </div>
           </div>
        </div>
    )
}