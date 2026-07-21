import nodemailer from "nodemailer";

//email service untuk setup service email menggunakan "gmail"
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
});

//function untuk hantar email
export async function sendResetEmail(email:string, resetLink:string){
    try{
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Reset Password",
            html: `<p>Click link below to reset your password</p>
        <a href="${resetLink}">Reset Password</a>`
        })
    }catch(error){
        console.log(error);
        alert("Email error");
    }
}