import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Login",
    description: "This page for user to login"
};

export default function LoginLayout({children} : Readonly <{
    children : React.ReactNode;
}>){
    <div>
        {children}
    </div>
}