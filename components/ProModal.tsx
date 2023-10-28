"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, ImageIcon, VideoIcon, Music, Code, Check, Zap } from "lucide-react";

import { useProModal } from "@/hooks/UseProModel";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-red-700",
    bgColor: "bg-violet-500/10",
  },
];

function ProModal() {
  const proModal = useProModal();
  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold py-1">
              Upgrade to Premium
              <Badge variant={"premuim"} className="uppercase">
                Premium
              </Badge>
            </div>
          </DialogTitle>

          <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
            {tools.map((tool) => (
                <Card
                className="p-3 border-black/5 flex items-center justify-between"
                key={tool.label}>
                    <div className="flex items-center gap-x-4">
                        <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                            <tool.icon className="w-6 h-6"/>
                        </div>
                        <div className="font-semibold text-sm">
                            {tool.label}
                        </div>
                    </div>
                    <Check className="text-primary w-5 h-5"/>
                </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
            <Button
            size={"lg"}
            variant={"premuim"}
            className="w-full"
            >
                Upgrade
                <Zap className="w-4 h-4 ml-2"/>
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ProModal;
