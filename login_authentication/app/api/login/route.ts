import {NextResponse, NextRequest} from "next/server";
import {prisma} from "@/app/lib/prisma";
import bcrypt from "bcryptjs";

//nak bagitahu body request
type LoginRequest = {
    email?:string;
    password?:string;
}

export async function POST(request: NextRequest){
    try{
        const body = await request.json() as LoginRequest;

        const email = body.email?.trim();
        const password = body.password;

        //check validation if fill empty
        if(!email || !password){
            return NextResponse.json({
                success:false,
                message:"Please fill all field!",
            },
        {status:400} //bad request
        )
        }

        //cari user dalam database
        const users = await prisma.user.findUnique({
            where:{
                email,
            }
        });

        //check if user takde
        if(!users){
            return NextResponse.json({
                success: false,
                message: "Invalid email or password"
            },
            {status:401} //unathourized
        )
        };

        const passwordMatch = await bcrypt.compare(
            password,
            users.password
        )

        if(!passwordMatch){
            return NextResponse.json({
                success:false,
                message:"Invalid email or password"
            },
            {status:401} //unathourized
        )
        }

        return NextResponse.json({
            success:true,
            message: "Login Success"
        })


    }catch(error){
        console.error("Login Error", error);
        return NextResponse.json({
            success:false,
            message:"Server error"
        },
        {status:500} //internal server error
    )
    }
}