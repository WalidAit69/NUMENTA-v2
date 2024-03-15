"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { MAX_FREE_COUNTS } from "@/constants";
import { useProModal } from "@/hooks/UseProModel";
import { checkSubscription } from "@/lib/subscription";
import { useUser } from "@clerk/nextjs";
import useSwitch from "@/store/Switch";
import { cn } from "@/lib/utils";

interface SidebarProps {
  apiLimitCount: number;
  isPremium: boolean;
}

function Freecounter({ apiLimitCount = 0, isPremium = false }: SidebarProps) {
  const proModal = useProModal();
  const [mounted, setmounted] = useState(false);
  const { user } = useUser();
  const { isDark } = useSwitch();

  useEffect(() => {
    setmounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (!user) {
    return null;
  }

  const { fullName, imageUrl, emailAddresses } = user;

  return (
    <div className="px-3">
      <Card
        className={cn(
          "bg-[#232627] border-0 w-full h-fit",
          !isDark && "bg-[#bbbbbb]"
        )}
      >
        <CardContent className="pt-5 pb-3">
          <div className="text-center text-sm text-white font-light mb-4 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-11 h-10 relative">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={imageUrl}
                  alt=""
                />
                <div
                  className={cn(
                    "absolute bottom-0 right-0 h-[17px] w-[15px] bg-[#232627] rounded-full flex items-center justify-center",
                    !isDark && "bg-[#bbbbbb]"
                  )}
                >
                  <div className="h-[10px] w-[10px] rounded-full bg-[#3fdc78]"></div>
                </div>
              </div>
              <div className="flex text-start justify-between w-full">
                <div>
                  <h2
                    className={cn(
                      "text-white font-bold",
                      !isDark && "text-black"
                    )}
                  >
                    {fullName}
                  </h2>
                  <p
                    className={cn(
                      "text-zinc-400 text-sm font-light",
                      !isDark && "text-zinc-600"
                    )}
                  >
                    {emailAddresses[0]?.emailAddress}
                  </p>
                </div>

                {!isPremium && (
                  <div className="font-bold text-sm h-fit py-[.1rem] px-2 rounded-md flex items-center justify-center text-black bg-[#3fdc78]">
                    Free
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            {!isPremium && (
              <button
                onClick={proModal.onOpen}
                className={cn(
                  "flex items-center justify-center w-full text-white font-medium bg-transparent border-[1.5px] border-[#444444] py-2 rounded-[11px] hover:bg-[#444444] transition-all",
                  !isDark && "text-black border-[#ddd9d9] hover:bg-[#ddd9d9]"
                )}
              >
                Upgrade to Pro
              </button>
            )}

            {!isPremium && (
              <p
                className={cn(
                  "text-zinc-400 text-[.8rem] pt-2 text-center",
                  !isDark && "text-zinc-600"
                )}
              >
                {MAX_FREE_COUNTS - apiLimitCount} Generations left
              </p>
            )}

            <div className="flex items-end justify-end">
              <span
                className={cn(
                  "font-bold text-sm h-fit py-[.1rem] px-2 rounded-md flex items-center justify-center text-[#8e55ea] bg-[#393349]"
                )}
              >
                Premium
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Freecounter;
