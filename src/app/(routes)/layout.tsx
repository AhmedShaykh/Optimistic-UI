import { ReactNode } from "react";
import PageWrapper from "@/Components/PageWrapper";
import SideBar from "@/Components/SideBar";
import Header from "@/Components/Header";

export default function DashboardLayout({
    children
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <>
            <SideBar />
            <div className="flex flex-col h-full w-full">
                <Header />
                <PageWrapper
                    children={children}
                />
            </div>
        </>
    )
};