import { Metadata } from "next";

export const metadata:Metadata = {
    title: "Dashboard",
    description:"Main page for user"
};

export default function LayoutDashboard({children} : Readonly <{
    children: React.ReactNode
}>){
    return (
        <div>
            {children}
        </div>
    )
}