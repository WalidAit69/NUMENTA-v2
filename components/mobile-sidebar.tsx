"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";

interface SidebarProps {
  apiLimitCount: number;
  isPremium: boolean;
}

function Mobilesidebar({ apiLimitCount, isPremium = false }: SidebarProps) {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="hover:bg-accent p-2 rounded" size={40} />
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0 w-[20rem] max-[500px]:w-full">
        <Sidebar apiLimitCount={apiLimitCount} isPremium={isPremium} />
        <div className="absolute top-0 right-0 p-2">
          <button className="text-[#dfdfe0] focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Mobilesidebar;
