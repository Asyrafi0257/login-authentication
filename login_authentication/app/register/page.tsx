"use client";

import { UserPlus, User, Mail, Phone, MapPinHouse, LockKeyhole  } from "lucide-react"
import { useState } from "react";

export default function Register(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [state, setState] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        //check if semua fill tak diisi then kena display error
        if(!name || !email || !phone || !state || !password || !confirmPassword) return alert("Please fill all fields!");
        
        //check if password tak sama dengan confirm password
        if(password !== confirmPassword){
           alert("Password and confirm password not match"); 
           return;
        }
        
        //check if panjang password tak lebih daripada 8 character then dia akan display error
        if(password.length < 8){
            alert("Password at least 8 length!");
            return;
        }
        
        
        
        try{
            const dataUser = await fetch("/api/register", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({
                    name,
                    email,
                    phone,
                    state,
                    password
                })
            })

            const data = await dataUser.json();

            if(!dataUser.ok){
                alert(data.message);
                return;
            }

            
                setName("");
                setEmail("");
                setPhone("");
                setState("");
                setPassword("");
                setConfirmPassword("");

                return alert("Register successfully"); 
            
        }catch(error){
            alert("server problem, Please try again!");
        }


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
                           <div className="flex flex-row outline outline-1 outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-black-300 p-2 rounded-md">
                            <User/>
                            <input 
                                type="text"
                                placeholder="Your Username"
                                className="ml-2 border-none outline-none"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                  />
                           </div>
                           
                        </div>
                        <div className="col-span-1 flex flex-col justify-center">
                            <label className="tracking-[3px] text-[13px] mb-3 uppercase"> Email</label> 
                             <div className="flex flex-row outline outline-1 outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-black-300 p-2 rounded-md ">
                                <Mail/>
                                <input 
                                    type="email" 
                                    placeholder="Email"
                                    className="ml-2 border-none outline-none"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    />

                             </div>
                            
                        </div>
                    </div>  

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="col-span-1 flex flex-col justify-center">
                           <label className="tracking-[3px] text-[13px] mb-3 uppercase"> No. Phone</label> 
                           <div className="flex flex-row outline outline-1 outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-black-300 p-2 rounded-md" >
                                <Phone/>
                                <input 
                                type="text" 
                                placeholder="Your Number Phone" 
                                className="ml-2 border-none outline-none"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                />
                           </div>
                           
                        </div>
                        <div className="col-span-1 flex flex-col justify-center">
                            <label className="tracking-[3px] text-[13px] mb-3 uppercase"> State</label> 
                            <div  className="flex flex-row outline outline-1 outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-black-300 p-2 rounded-md ">
                                <MapPinHouse/>
                               <input 
                                type="text" 
                                placeholder="State" 
                                className="ml-2 border-none outline-none"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                /> 
                            </div>
                            
                        </div>
                    </div> 

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="col-span-1 flex flex-col justify-center">
                           <label className="tracking-[3px] text-[13px] mb-3 uppercase"> Password</label> 
                           <div className="flex flex-row outline outline-1 outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-black-300 p-2 rounded-md ">
                                <LockKeyhole/>
                                <input 
                                    type="password"  
                                    placeholder="Your Password" 
                                    className="ml-2 border-none outline-none"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    />
                           </div>
                           
                        </div>
                        <div className="col-span-1 flex flex-col justify-center">
                            <label className="tracking-[3px] text-[13px] mb-3 uppercase"> Confirm Password</label> 
                            <div className=" flex flex-row outline outline-1 outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-black-300 p-2 rounded-md ">
                                <LockKeyhole/>
                                <input 
                                    type="password"  
                                    placeholder="Confirm Password" 
                                    className="ml-2 border-none outline-none"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                            </div>
                            
                        </div>
                    </div> 

                    <div className="flex flex-row justify-end w-full mt-10">
                        <button className="bg-blue-600 w-full h-[40px] rounded-lg text-white flex flex-row items-center justify-center cursor-pointer p-2">
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