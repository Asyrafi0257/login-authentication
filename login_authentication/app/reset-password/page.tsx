"use client";

import { LockKeyhole, Mail, RotateCcw } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ResetPassword(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const router = useRouter();

    const handleReset = async() => {
        try{
            if(!email || !password || !confirmPassword){
                return alert("Please fill all the field");
            }

            if(password !== confirmPassword){
                return alert("Password and confirm password not matched!")
            }
            
            if(password.length < 8 || confirmPassword.length < 8){
                return alert("Password or confirm password at least 8 character length");
            }

            const response = await fetch("/api/reset-password", {
                method: "POST",
                headers: {
                    "Content-Type" : "application-json"
                },
                body:JSON.stringify({
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
            setConfirmPassword("");
            router.push("/login");
            alert("Reset Password successfully");
            return;

        }catch(error){
            console.error("Server Problem");
            alert("Server Problem, Please try again!")
        }
    }

    return(
        <div className="flex flex-row justify-center items-center h-screen">
            <div className="w-[450px] h-[380px] shadow-md bg-white rounded-xl p-2">
                <h3 className="text-[20px] tracking-[2px] text-center">Reset Your Password</h3>

                <div className="w-full flex flex-col justify-center m-8">
                    <label className="tracking-[2px] text-[13px]"> Email</label>
                     <div className="flex flex-row mt-2 outline outline-1 outline-gray-300 outline-offset-1 focus-within:outline-2 focus-within:outline-black-300 focus-within:outline-offset-2 rounded-sm w-[350px] p-1 items-center">
                        <Mail className="h-[20px] w-[30px]"/>
                        <input type="email" className="outline-none border-none" value={email} onChange={(e) => setEmail(e.target.value)}/>
                     </div>

                    <label className="tracking-[2px] text-[13px] mt-5"> New Password</label>
                     <div className="flex flex-row mt-2 outline outline-1 outline-gray-300 outline-offset-1 focus-within:outline-2 focus-within:outline-black-300 focus-within:outline-offset-2 rounded-sm w-[350px] p-1 items-center">
                        <LockKeyhole className="h-[20px] w-[30px]"/>
                        <input type="password" className="outline-none border-none" value={password} onChange={(e) => setPassword(e.target.value)}/>
                     </div>

                     <label className="tracking-[2px] text-[13px] mt-5">Confirm New Password</label>
                     <div className="flex flex-row mt-2 outline outline-1 outline-gray-300 outline-offset-1 focus-within:outline-2 focus-within:outline-black-300 focus-within:outline-offset-2 rounded-sm w-[350px] p-1 items-center">
                        <LockKeyhole className="h-[20px] w-[30px]"/>
                        <input type="password" className="outline-none border-none" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} />
                     </div>
                </div>
                <div className="flex flex-row mt-8 w-full items-center justify-center">
                    <div className="p-2 rounded-md bg-blue-600 flex flex-row flex flex-row items-center">
                        <RotateCcw className="h-[20px] w-[30px] text-white"/>
                        <button className="text-white cursor-pointer" onClick={handleReset}>Reset Password</button>
                    </div>                     
                </div>
            </div>
        </div>
    )
}