"use client";

import Image from "next/image";
import Link from "next/link";
import {
  LayoutDashboard,
  MessageSquare,
  ImageIcon,
  Music,
  Code,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Freecounter from "./Freecounter";
import ModeSwitch from "./dashboard/ModeSwitch";
import useSwitch from "@/store/Switch";
import { IoMdPlayCircle } from "react-icons/io";

interface SidebarProps {
  apiLimitCount: number;
  isPremium: boolean;
}

const Sidebar = ({ apiLimitCount, isPremium = false }: SidebarProps) => {
  const { isDark } = useSwitch();

  const pathname = usePathname();

  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
      color: !isDark ? "text-black" : "text-white",
      background:
        "bg-gradient-to-r from-black/20 via-transparent to-transparent",
    },
    {
      label: "Conversation",
      icon: MessageSquare,
      path: "/conversation",
      color: "text-[#3e90f0]",
      background:
        "bg-gradient-to-r from-[#3e90f052] via-transparent to-transparent",
    },
    {
      label: "Image Generation",
      icon: ImageIcon,
      path: "/image",
      color: "text-[#8e55ea]",
      background:
        "bg-gradient-to-r from-[#8e55ea4a] via-transparent to-transparent",
    },
    {
      label: "Video Generation",
      icon: IoMdPlayCircle,
      path: "/video",
      color: "text-[#d84c10]",
      background:
        "bg-gradient-to-r from-[#da4d0f57] via-transparent to-transparent",
    },
    {
      label: "Music Generation",
      icon: Music,
      path: "/music",
      color: "text-[#e68a1d]",
      background:
        "bg-gradient-to-r from-[#e68a1d66] via-transparent to-transparent",
    },
    {
      label: "Code Generation",
      icon: Code,
      path: "/code",
      color: "text-[#52ba69]",
      background:
        "bg-gradient-to-r from-[#4ca8615c] via-transparent to-transparent",
    },
  ];

  return (
    <div
      className={cn(
        "space-y-4 py-4 flex flex-col h-full bg-[#dfdfe0] text-black w-full",
        isDark && "bg-[#000] text-white"
      )}
    >
      <div className="px-3 py-2 flex-1">
        <Link href={"/dashboard"} className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            {isDark ? (
              <Image fill alt="logo" src="/Midjourney-white.png"></Image>
            ) : (
              <Image fill alt="logo" src="/Midjourney-black.png"></Image>
            )}
          </div>
          <h1 className={cn("text-2xl font-bold")}>MidJourney</h1>
        </Link>

        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.path}
              key={route.label}
              className={cn(
                "relative text-sm group flex p-3 w-full justify-start font-medium cursor-pointer rounded-md",
                {
                  "hover:text-black hover:bg-black/5": !isDark,
                  "hover:text-white hover:bg-white/5": isDark,
                  "text-black side-bg": pathname === route.path && !isDark,
                  "text-white side-bg-white": pathname === route.path && isDark,
                  [route.background]: pathname === route.path,
                  "text-zinc-500": pathname !== route.path && !isDark,
                  "text-zinc-400": pathname !== route.path && isDark,
                }
              )}
            >
              <div className="flex items-center flex-1 transition">
                <route.icon className={cn("w-5 h-5", route.color)} />
                <span className={cn("ml-2")}>{route.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Freecounter apiLimitCount={apiLimitCount} isPremium={isPremium} />

      <ModeSwitch />
    </div>
  );
};

export default Sidebar;
