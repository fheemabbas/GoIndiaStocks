import Image from "next/image";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HeaderLink from "./HeaderLink";
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import CompaniesTreadSlider from "./CompaniesTreadSlider";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

function Header() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme, theme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  console.log("Current theme is", theme);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white dark:bg-[#1D2226] flex items-center justify-around py-1.5 max-sm:px-0 px-3 focus-within:shadow-lg">
        {/* Left */}
        <div className="max-sm:w-1/3">
          <Image src="/images/gostock.png" width={100} height={55} />
        </div>
        <div className="flex items-center space-x-2 w-full max-sm:w-1/3 md:max-w-xs">
          <div className="flex items-center bg-[#7FFFD4] dark:md:bg-gray-700 dark:text-black py-2.5 max-sm:px-0 px-4  rounded-lg">
            <input
              type="text"
              placeholder="Search"
              className=" bg-transparent text-sm focus:outline-none md:w-10/12 px-1 sm:w-full placeholder-black/70 dark:placeholder-black flex-grow"
            />
            <SearchRoundedIcon className="dark:text-white" />
          </div>
        </div>
        {/* Right */}

        <div className="flex items-center max-sm:w-1/3 max-sm:justify-end">
          <HeaderLink text="Home" feed active />
          <div className="pl-20 hidden md:flex">
            <button
              className="text-blue-700 font-semibold border border-blue-700 px-5 py-1.5 transition-all hover:border-2 hidden md:block"
            // onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Sign Up
            </button>
          </div>
          <div className="ml-4 hidden md:flex">
            <button
              className="text-blue-700 font-semibold border border-blue-700 px-5 py-1.5 transition-all hover:border-2 hidden md:block"
            // onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Sign in
            </button>
          </div>
          {/* Dark mode toggle */}
          {mounted && (
            <div
              className={`bg-gray-600 flex items-center px-0.5 ml-4 rounded-full h-6 w-12 cursor-pointer flex-shrink-0 relative ${resolvedTheme === "dark" ? "justify-end" : "justify-start"
                }`}
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
            >
              <span className="absolute left-0">🌜</span>
              <motion.div
                className="w-5 h-5 bg-white rounded-full z-40"
                layout
                transition={spring}
              />

              <span className="absolute right-0.5">🌞</span>
            </div>
          )}
        </div>
      </header>
      {/* <CompaniesTreadSlider /> */}
    </>
  );
}

export default Header;
