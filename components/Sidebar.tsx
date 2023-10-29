"use client";

import Image from "next/image";
import Link from "next/link";
import { Montserrat } from 'next/font/google';
import {LayoutDashboard , MessageSquare , ImageIcon , VideoIcon , Music , Code , Settings} from "lucide-react";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Freecounter from "./Freecounter";


const montserrat = Montserrat({
    subsets: ['latin'],
    weight:'600'
})

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        path: "/dashboard",
        color:"text-sky-500"
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        path: "/conversation",
        color:"text-violet-500"
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        path: "/image",
        color:"text-pink-700"
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        path: "/video",
        color:"text-orange-700"
    },
    {
        label: "Music Generation",
        icon: Music,
        path: "/music",
        color:"text-emerald-500"
    },
    {
        label: "Code Generation",
        icon: Code,
        path: "/code",
        color:"text-red-700"
    },
    {
        label: "Settings",
        icon: Settings,
        path: "/settings",
    },
]

interface SidebarProps{
  apiLimitCount:number;
  isPremium:boolean;
}

const Sidebar = ({apiLimitCount , isPremium = false}:SidebarProps) => {
  const pathname = usePathname();
  

  return (
    <div
      className="space-y-4 py-4 flex flex-col h-full
      bg-[#dfdfe0] text-black"
    >
      <div className="px-3 py-2 flex-1">

        <Link href={"/dashboard"} className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="logo" src="/logo.svg"></Image>
          </div>
          <h1 className={cn("text-2xl font-bold" , montserrat.className)}>Better Ai</h1>
        </Link>

        <div className="space-y-1">
            {routes.map((route) => (
                <Link href={route.path} key={route.label} 
                className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-black hover:bg-black/25 rounded-md" ,
                pathname === route.path ? "text-black bg-black/25" : "text-zinc-400")}>
                    <div className="flex items-center flex-1 transition">
                        <route.icon className={cn("w-5 h-5 text-black")} />
                        <span className="ml-2">{route.label}</span>
                    </div>
                </Link>
            ))}
        </div>

      </div>

      <Freecounter apiLimitCount={apiLimitCount} isPremium={isPremium}/>
    </div>
  );
};

export default Sidebar;
