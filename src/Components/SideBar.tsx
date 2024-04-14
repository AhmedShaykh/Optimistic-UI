"use client";
import { useEffect, useState } from "react";
import { useSideBarToggle } from "@/hooks/useSideBarToggle";
import SideBarMenuGroup from "./SideBarMenuGroup";
import { SIDENAV_ITEMS } from "@/app/constants";
import SideBarLogo from "./SideBarLogo";
import classNames from "classnames";

const SideBar = () => {

    const [mounted, setMounted] = useState(false);

    const { toggleCollapse } = useSideBarToggle();

    const asideStyle = classNames("sidebar overflow-y-auto overflow-x-auto fixed bg-sidebar h-full shadow-sm shadow-slate-500/40 transition duration-300 ease-in-out z-[99999]", {
        ["w-[16rem]"]: !toggleCollapse,
        ["sm:w-[5.4rem] sm:left-0 left-[-100%]"]: toggleCollapse
    });

    useEffect(() => setMounted(true), []);

    return (
        <aside className={asideStyle}>
            <div className="sidebar-top relative flex items-center px-3.5 pb-7 pt-3">
                {mounted && <SideBarLogo />}

                <h3 className={classNames("pl-2 font-bold text-2xl min-w-max text-sidebar-foreground", { hidden: toggleCollapse })}>
                    Dashboard
                </h3>
            </div>

            <nav className="flex flex-col gap-2 transition duration-300 ease-in-out">
                <div className="flex flex-col gap-2 px-4">
                    {SIDENAV_ITEMS.map((item, idx) => {
                        return <SideBarMenuGroup
                            key={idx}
                            menuGroup={item}
                        />;
                    })}
                </div>
            </nav>
        </aside>
    )
};

export default SideBar;