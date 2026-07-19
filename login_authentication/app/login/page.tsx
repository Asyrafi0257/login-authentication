"use client";

import { SquareArrowRightEnter, User, LockKeyhole } from 'lucide-react';
import Link from "next/link";
import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //check if field empty
        if(!email || !password) return alert("Please fill all field!");

        try{
            const response = await fetch("/api/login", {
                method:"POST",
                headers: {
                    "Content-Type" : "application-json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            const data = await response.json();

            if(!response.ok){
                return alert(data.message);
            }

            setEmail("");
            setPassword("");

            return alert("Login successfully");

        }catch(error){
            return alert("server error");
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
           <div className="w-[500px] h-[400px] shadow-md rounded-xl p-4 flex flex-col justify-center items-center">
                <h3 className="font-bold text-[25px] tracking-[2px] mt-5">Login</h3>
                <div>
                    <form onSubmit={handleSubmit} className="h-[350px] w-[350px] mt-5 flex flex-col">
                        {/* username as email */}
                        <label className="tracking-[3px] font-medium"> Email</label>

                        <div className="mt-2 flex flex-row outline outline-1 outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-gray-400 rounded-md p-2 tracking-[2px]">
                            <User className=''/>
                           <input 
                            type="email" placeholder="Your Email" 
                           className='ml-2 w-full h-full border-none outline-none'
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                            /> 
                        </div>
                        
                        {/* Password */}
                        <label className="tracking-[3px] font-medium mt-5"> Password</label>
                        <div className="mt-2 flex flex-row outline outline-1 outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-gray-400 rounded-md p-2 tracking-[2px]">
                            <LockKeyhole/>
                            <input 
                            type="password" placeholder="password" 
                            className='ml-3 h-full w-full outline-none border-none'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        
                        {/* forget password */}
                        <div className="w-full mt-2 flex flex-row justify-end">
                            <Link href="/forget-password" className='text-blue-600 tracking-[3px] text-[12px]'>Forget Password</Link>
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