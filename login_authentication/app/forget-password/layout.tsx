import { Metadata } from "next";

export const medatadata:Metadata = {
    title: "Forget Password",
    description: "User can reset their password if they forgot"
}

export default function LayoutForget({children} : Readonly <{children: React.ReactNode}>){
    return (
        <div>{children}</div>
    )
}