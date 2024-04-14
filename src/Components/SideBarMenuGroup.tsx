import { useSideBarToggle } from "@/hooks/useSideBarToggle";
import SideBarMenuItem from "./SideBarMenuItem";
import { SideNavItemGroup } from "@/Type";
import classNames from "classnames";

const SideBarMenuGroup = ({ menuGroup }: { menuGroup: SideNavItemGroup }) => {

    const { toggleCollapse } = useSideBarToggle();

    const menuGroupTitleSyle = classNames("py-4 tracking-[.1rem] font-medium uppercase text-sm text-sm text-sidebar-foreground", {
        "text-center": toggleCollapse
    });

    return (
        <>
            <h3 className={menuGroupTitleSyle}>{!toggleCollapse ? menuGroup.title : "..."}</h3>

            {menuGroup.menuList?.map((item, index) => {
                return <SideBarMenuItem key={index} item={item} />
            })}
        </>
    )
}

export default SideBarMenuGroup;