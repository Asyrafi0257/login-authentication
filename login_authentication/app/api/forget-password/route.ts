import {NextResponse, NextRequest} from "next/server";
import {prisma} from "@/app/lib/prisma";
import { sendResetEmail } from "@/app/lib/email";

export async function POST(request:NextRequest){
    try{
        const {email} = await request.json();

        if(!email){
            return NextResponse.json({
                success:false,
                message:"Email is required!"
            },
            {status:400}
        )
        };

        const emailUser = await prisma.user.findUnique({
            where:{
                email,
            }
        });

        if(!emailUser){
            return NextResponse.json({
                success:false,
                message:"Email doesn't exist!"
            },
            {status:401}
        )
        }

        //buat link untuk untuk reset password
        const urlReset = "http://localhost:3000/reset-password";

        //kita send to email
        await sendResetEmail(email, urlReset);

        return NextResponse.json({
            success:true,
            message: "Password reset link has been sent"
        },
        {status:200}
    )
        
    }catch(error){
        return NextResponse.json({
            success:false,
            message:"Something went wrong"
        },
        {status: 500}
    )
    }
}
