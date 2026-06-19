"use client";

import { UserPlus } from "lucide-react";

export default function Register(){
    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <div className="flex flex-row justify-center items-center min-h-screen">
            <div className="w-[600px] h-[450px] bg-white shadow-xl rounded-xl flex flex-col p-5 items-center">
                <h2 className="text-[25px] tracking-[3px] font-bold uppercase mt-3 mb-3">Register</h2>

                <div className="w-full mt-3">
                    <form onSubmit={handleRegister}>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="col-span-1 flex flex-col justify-center">
                           <label className="tracking-[3px] text-[13px] mb-3 uppercase"> User name</label> 
                           <input type="text" className="outline outline-1 outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-black-300 p-2 rounded-md " placeholder="Your Username" />
                        </div>
                        <div className="col-span-1 flex flex-col justify-center">
                            <label className="tracking-[3px] text-[13px] mb-3 uppercase"> Email</label> 
                            <input type="email" className="outline outline-1 outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-black-300 p-2 rounded-md " placeholder="Email" />
                        </div>
                    </div>  

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="col-span-1 flex flex-col justify-center">
                           <label className="tracking-[3px] text-[13px] mb-3 uppercase"> No. Phone</label> 
                           <input type="text" className="outline outline-1 outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-black-300 p-2 rounded-md " placeholder="Your Number Phone" />
                        </div>
                        <div className="col-span-1 flex flex-col justify-center">
                            <label className="tracking-[3px] text-[13px] mb-3 uppercase"> State</label> 
                            <input type="email" className="outline outline-1 outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-black-300 p-2 rounded-md " placeholder="State" />
                        </div>
                    </div> 

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="col-span-1 flex flex-col justify-center">
                           <label className="tracking-[3px] text-[13px] mb-3 uppercase"> Password</label> 
                           <input type="text" className="outline outline-1 outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-black-300 p-2 rounded-md " placeholder="Your Password" />
                        </div>
                        <div className="col-span-1 flex flex-col justify-center">
                            <label className="tracking-[3px] text-[13px] mb-3 uppercase"> Confirm Password</label> 
                            <input type="email" className="outline outline-1 outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-black-300 p-2 rounded-md " placeholder="Confirm Password" />
                        </div>
                    </div> 

                    <div className="flex flex-row justify-end w-full mt-10">
                        <button className="bg-blue-600 w-[100px] h-[40px] rounded-lg text-white flex flex-row items-center justify-center cursor-pointer p-2">
                            <UserPlus size={20} className="mr-1"/>
                            Register
                        </button>
                    </div>
                    </form>
                    
                    
                </div>
            </div>
        </div>
    )
}