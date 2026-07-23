import {NextResponse, NextRequest} from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/app/lib/prisma";

export async function POST(request: NextRequest){
    try{
        const {password, email} = await request.json();

        //check field password empty or not
        if(!password){
            return NextResponse.json({
                success:false,
                message: "Please fill the field!"
            },
            {status:400}
        )
        };

        //kita check if password tu kurang daripada 8 character
        if(password < 8){
            return NextResponse.json({
                success: false,
                message:"Password at least 8 characters length"
            },
            {status:400}
        )
        };

        //hash new password
        const hashNewPassword = await bcrypt.hash(password, 10);

        //update new password
        await prisma.user.update({
            where:{
                email,
            },
           data: {
            password:hashNewPassword,
           }
        });

        return NextResponse.json({
            success:true,
            message:"Password Reset successfully"
        },
        {status:200}
    )

    }catch(error){
        return NextResponse.json({
            success:false,
            message:"Server Error"
        },
        {status:500}
    )
    }
}