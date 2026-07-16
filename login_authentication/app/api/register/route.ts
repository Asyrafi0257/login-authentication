import { NextResponse, NextRequest } from "next/server"; // request => yang client anta, response => apa yang kita anta balik
import bcrypt from "bcryptjs"; //kita nak encrypt or hash password
import {prisma} from "@/app/lib/prisma"; // prisma digunakan untuk communicate dengan database

//Type => ia adalah TypeScript Type then dia bagitahu body request
//simbol ? digunakan bermaksud field itu optional 
type RegisterBody = {
    name?: string;
    email?: string;
    phone?: string;
    state?: string;
    password?: string;
};

//api route untuk method POST
export async function POST(request: NextRequest) {
    //use try catch for handle error. For example database error or connection failed then it directly go to catch block
    try{
        //ambil data => request.json() akan tukarkan JSON kepada object Javascript
        //as RegisterBody => bagitahu TypeScript bahawa body itu akan ikut bentuk RegisterBody
        const body = (await request.json()) as RegisterBody;

        const name = body.name?.trim();
        const email = body.email?.trim().toLowerCase();
        const phone = body.phone?.trim();
        const state = body.state?.trim();
        const password = body.password;

        //check if field tak diisi semua
        if(!name || !email || !phone || !state || !password){
            return NextResponse.json(
                {
                    success: false,
                    message: "Please fill all field!"
                },
                {status:400} //bad request
            )
        }

        //check lengh password
        if(password.length < 8){
            return NextResponse.json(
                {
                    success:false,
                    message: "At least password must be 8 "
                },
                {status: 400}
            )
        }

        //prisma akan ke database untuk cari email
        const existingUser = await prisma.user.findUnique({
            where: {
                email,
            }
        });

        //check email if ada ke tak
        if(existingUser) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Email already registered"
                },
                {status: 409} // conflict means email already used.
                
            )
        }

        //encrypt or hash password
        const hashedPassword = await bcrypt.hash(password, 12);

        //simpan user
        const user = await prisma.user.create({
            //data yang kita nak simpan
            data : {
                name,
                email,
                phone,
                state,
                password: hashedPassword,
            },

            //why we use select? => sbb kita taknk hantar balik password kepada client, then yang kita pulang ke user adalah seperti dibawah
            select : {
                id: true,
                name: true,
                email: true,
                phone: true,
                state: true,
                createdAt: true,
                updatedAt: true,
            }
        });

        return NextResponse.json(
            {
                success: true,
                message: "Your account successfully registered",
                user,
            },
            {status: 201} // means successfully create
        );

    } catch(error){
        console.error("Register erro:", error);

        return NextResponse.json(
            {
                success:false,
                message: " Server error, register failed",
            },
            {status:500} // internal server error
        )
    }
}

