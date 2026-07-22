"use client";

import { LockKeyhole, RotateCcw } from "lucide-react";
export default function ResetPassword(){
    return(
        <div className="flex flex-row justify-center items-center h-screen">
            <div className="w-[450px] h-[300px] shadow-md bg-white rounded-xl p-2">
                <h3 className="text-[20px] tracking-[2px] text-center">Reset Your Password</h3>

                <div className="w-full flex flex-col justify-center m-8">
                    <label className="tracking-[2px] text-[13px]"> New Password</label>
                     <div className="flex flex-row mt-2 outline outline-1 outline-gray-300 outline-offset-1 focus-within:outline-2 focus-within:outline-black-300 focus-within:outline-offset-2 rounded-sm w-[350px] p-1 items-center">
                        <LockKeyhole className="h-[20px] w-[30px]"/>
                        <input type="password" className="outline-none border-none" />
                     </div>

                     <label className="tracking-[2px] text-[13px] mt-5">Confirm New Password</label>
                     <div className="flex flex-row mt-2 outline outline-1 outline-gray-300 outline-offset-1 focus-within:outline-2 focus-within:outline-black-300 focus-within:outline-offset-2 rounded-sm w-[350px] p-1 items-center">
                        <LockKeyhole className="h-[20px] w-[30px]"/>
                        <input type="password" className="outline-none border-none" />
                     </div>
                </div>
                <div className="flex flex-row mt-8 w-full items-center justify-center">
                    <div className="p-2 rounded-md bg-blue-600 flex flex-row flex flex-row items-center">
                        <RotateCcw className="h-[20px] w-[30px] text-white"/>
                        <button className="text-white cursor-pointer">Reset Password</button>
                    </div>                     
                </div>
            </div>
        </div>
    )
}