import { SideNavItemGroup } from "@/Type";
import {
    BsEnvelope,
    BsGear,
    BsHouseDoor,
    BsKanban,
    BsListUl,
    BsQuestionCircle
} from "react-icons/bs";

export const SIDENAV_ITEMS: SideNavItemGroup[] = [
    {
        title: "Dashboards",
        menuList: [{
            title: "Dashboard",
            path: "/dashboard",
            icon: <BsHouseDoor size={20} />,
        }]
    },
    {
        title: "Manage",
        menuList: [
            {
                title: "Products",
                path: "/dashboard",
                icon: <BsKanban size={20} />,
                submenu: true,
                subMenuItems: [
                    { title: "All", path: "/dashboard" },
                    { title: "New", path: "/dashboard" },
                ],
            },
            {
                title: "Orders",
                path: "/dashboard",
                icon: <BsListUl size={20} />,
            },
            {
                title: "Feedbacks",
                path: "/dashboard",
                icon: <BsEnvelope size={20} />,
            }
        ]
    },
    {
        title: "Others",
        menuList: [
            {
                title: "Account",
                path: "/dashboard",
                icon: <BsGear size={20} />,
            },
            {
                title: "Help",
                path: "/dashboard",
                icon: <BsQuestionCircle size={20} />,
            }
        ]
    }
];