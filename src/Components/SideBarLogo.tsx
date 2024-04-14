import { useTheme } from "next-themes";
import Image from "next/image";

const SideBarLogo = () => {

    const { theme } = useTheme();

    return <Image
        className="w-12 mx-3.5 min-h-fit"
        width={35}
        height={35} src={theme === "dark" || theme === "custom" ? "/DZ-logos_white.png" : "/DZ-logos_black.png"}
        alt="Logo"
    />
};

export default SideBarLogo;