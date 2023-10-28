import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { UserButton } from "@clerk/nextjs";
import Mobilesidebar from "./mobile-sidebar";

export default function Navbar() {
  return (
    <div className="flex items-center p-4">
      <div className="md:hidden">
        <Mobilesidebar />
      </div>

      <div className="flex w-full justify-end">
        <UserButton />
      </div>
    </div>
  );
}
