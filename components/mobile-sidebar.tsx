"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";

interface SidebarProps{
  apiLimitCount:number;
  isPremium:boolean;
}

function Mobilesidebar({apiLimitCount , isPremium = false}:SidebarProps) {
  return (
    <Sheet>
      <SheetTrigger>
          <Menu className="hover:bg-accent p-2 rounded" size={40}/>
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0 w-60">
        <Sidebar apiLimitCount={apiLimitCount} isPremium={isPremium}/>
      </SheetContent>
    </Sheet>
  );
}

export default Mobilesidebar;
