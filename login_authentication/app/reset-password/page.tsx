"use client";

export default function ResetPassword(){
    return(
        <div className="flex flex-row justify-center items-center h-screen">
            <div className="w-[500px] h-[300px] shadow-md bg-white rounded-xl p-2">
                <h3 className="text-[20px] tracking-[2px] text-center">Reset Your Password</h3>

                <div className="w-full flex flex-row justify-start mt-5 ml-5">
                    <label className="tracking-[2px] text-[13px]"> New Password</label>
                    
                </div>
            </div>
        </div>
    )
}