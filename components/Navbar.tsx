"use client";

import { cn } from "@/lib/utils";
import useSwitch from "@/store/Switch";
import { UserButton } from "@clerk/nextjs";
import { Settings } from "lucide-react";
import Link from "next/link";

export default async function Navbar() {
  return (
    <div className="flex items-center p-4">
      <div className="flex gap-4 items-center">
        <UserButton afterSignOutUrl="https://better-ai-five.vercel.app" />
        <Link href={"/settings"}>
          <Settings className={cn("text-zinc-500")} />
        </Link>
      </div>
    </div>
  );
}
