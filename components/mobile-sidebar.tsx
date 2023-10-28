"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";

function Mobilesidebar() {
  return (
    <Sheet>
      <SheetTrigger>
          <Menu className="hover:bg-accent p-2 rounded" size={40}/>
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0 w-60">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}

export default Mobilesidebar;
