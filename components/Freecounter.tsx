"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { MAX_FREE_COUNTS } from "@/constants";
import { Progress } from "@/components/ui/progress";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import { useProModal } from "@/hooks/UseProModel";

interface SidebarProps {
  apiLimitCount: number;
}

function Freecounter({ apiLimitCount }: SidebarProps) {
  const proModal = useProModal();
  const [mounted, setmounted] = useState(false);

  useEffect(() => {
    setmounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6">
          <div className="text-center text-sm text-white font-light mb-4 space-y-2">
            <p>
              <span className="">
                {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
              </span>
            </p>
            <Progress
              className="h-2 border"
              value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
            />
          </div>
          <Button
            onClick={proModal.onOpen}
            variant={"premuim"}
            className="flex w-full"
          >
            Upgrade
            <Zap className="w-4 h-4 ml-2 " />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Freecounter;
