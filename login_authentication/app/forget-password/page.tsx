"use client";

import { Mail } from "lucide-react";
import { useState } from "react";

export default function ForgetPassword(){
    const [email, setEmail] = useState("");

    const handleReset = async () => {

        try{
            const request = await fetch("/api/forget-password", {
                method: "POST",
                headers: {
                    "Content-Type" : "application-json"
                },
                body:JSON.stringify({
                    email
                })
            });

            const emailUser = await request.json();

            if(!request.ok){
                alert(emailUser.message);
                return;
            }

            return alert("Please check your email inbox to reset your password!")
        }catch(error){
            alert("Something went wrong, please check again!");
        }
    }

    return (
        <div className="flex flex-row h-screen justify-center items-center">
            <div className="w-[500px] h-[300px] shadow-md rounded-md bg-white flex flex-col items-center">
                <h3 className=" text-center text-[20px] tracking-[2px]">Forget Password</h3>
                
                <div className="flex flex-col mt-3 justify-center h-[200px]">
                    <label className="tracking-[3px] text-[15px]">Email</label>
                    <div className="mt-2 outline outline-1 outline-gray-300 outline-offset-1 focus-within:outline-2 focus-within:outline-black-300 focus-within:outline-offset-2 w-[300px] rounded-sm p-1 flex flex-row">
                        <Mail/>  
                        <input type="text" placeholder="Your Email" className="border-none outline-none w-full ml-2" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>

                <div className="w-full flex flex-row justify-center ">
                    <button className="bg-blue-500 text-white p-2 rounded-sm cursor-pointer" onClick={handleReset}>Send Reset</button>
                </div>
                
            </div>
        </div>
    )
}