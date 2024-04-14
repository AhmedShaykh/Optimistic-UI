"use client";
import { ReactNode } from "react";
import { useSideBarToggle } from "@/hooks/useSideBarToggle";
import classNames from "classnames";

const PageWrapper = ({ children }: { children: ReactNode }) => {

    const { toggleCollapse } = useSideBarToggle();

    const bodyStyle = classNames("bg-background flex flex-col mt-16 py-4 p-4 h-full overflow-y-auto", {
        ["sm:pl-[17.2rem]"]: !toggleCollapse,
        ["sm:pl-[6.4rem]"]: toggleCollapse,
    });

    return (
        <div className={bodyStyle}>
            {children}
        </div>
    )
};

export default PageWrapper;