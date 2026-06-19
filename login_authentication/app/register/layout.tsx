import { Metadata } from "next";

export const metadata : Metadata = {
    title : "Register",
    description: "This page for user to register their account"
}

export default function RegisterLayout({children}: Readonly<{
    children: React.ReactNode;
}>){
    return(
        <div>
            {children}
        </div>
    )
}