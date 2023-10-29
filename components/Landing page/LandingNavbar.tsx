"use client";

import { ArrowDownRight } from "lucide-react";
import { Button } from "../ui/button";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="flex items-center justify-between py-4 z-40">
      <h1 className="font-extralight text-2xl cursor-pointer">
        Better
        <span className="font-medium">AI</span>
      </h1>

      <div>
        <ul className=" items-center gap-x-6 text-base hidden sm:flex">
          <li className="cursor-pointer hover:font-medium hover:underline">
            SERVICES
          </li>
          <li className="cursor-pointer hover:font-medium hover:underline">
            PRICING
          </li>
        </ul>
      </div>

      <Link href={isSignedIn ? "/dashboard" : "sign-up"}>
        <Button
          className="flex items-center text-base hover:bg-[#948576]"
          variant={"ghost"}
        >
          Get Started
          <ArrowDownRight className="w-5 h-5"></ArrowDownRight>
        </Button>
      </Link>
    </div>
  );
};

export default LandingNavbar;
