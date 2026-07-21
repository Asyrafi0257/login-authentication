import {Metadata} from "next";

export const metadata: Metadata ={
    title: "reset password",
    description : "This page allow user to reset their password"
};

export default function LayoutReset({children} : Readonly <{children: React.ReactNode}>){
    return(
        <div>
            {children}
        </div>
    )
}