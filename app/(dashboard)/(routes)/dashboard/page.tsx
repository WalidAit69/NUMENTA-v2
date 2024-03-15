"use client";

import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import useSwitch from "@/store/Switch";
import {
  ArrowRight,
  MessageSquare,
  ImageIcon,
  Music,
  Code,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { IoMdPlayCircle } from "react-icons/io";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    path: "/conversation",
    color: "text-[#3e90f0]",
    bgColor: "bg-[#1c3852]",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    path: "/image",
    color: "text-[#8e55ea]",
    bgColor: "bg-[#393349]",
  },
  {
    label: "Video Generation",
    icon: IoMdPlayCircle,
    path: "/video",
    color: "text-[#d84c10]",
    bgColor: "bg-[#472d22]",
  },
  {
    label: "Music Generation",
    icon: Music,
    path: "/music",
    color: "text-[#e68a1d]",
    bgColor: "bg-[#4d402e]",
  },
  {
    label: "Code Generation",
    icon: Code,
    path: "/code",
    color: "text-[#52ba69]",
    bgColor: "bg-[#2c4334]",
  },
];

export default function DashboardPage() {
  const { isDark } = useSwitch();
  const router = useRouter();

  return (
    <section
      className={cn("h-full w-full flex bg-[#dfdfe0]", isDark && "bg-black")}
    >
      <div
        className={cn(
          "my-auto h-[98%] w-full rounded-3xl mx-2 flex flex-col justify-center bg-[#bbbbbb]",
          isDark && "bg-[#232627]"
        )}
      >
        <div className={cn("mb-8 space-y-4", isDark && "text-white")}>
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            Unlock the power of AI
          </h2>
          <p
            className={cn(
              "text-muted-foreground font-light text-sm md:text-lg text-center text-zinc-600",
              isDark && "text-zinc-400"
            )}
          >
            Chat with the smartest AI - Experience the power of AI
          </p>
        </div>

        <div className="px-4 space-y-4 md:px20 lg:px-32 flex flex-col items-center">
          {tools.map((tool) => (
            <Card
              onClick={() => router.push(tool.path)}
              key={tool.path}
              className={cn(
                "p-4 w-[70%] max-[600px]:w-full bg-transparent border-black/10 flex items-center justify-between hover:shadow-md transition cursor-pointer",
                isDark && "border-white/5 text-white"
              )}
            >
              <div className="flex items-center gap-x-4">
                <div className={cn("p-4 w-fit rounded-md", tool.bgColor)}>
                  <tool.icon className={cn("w-6 h-6", tool.color)} />
                </div>

                <div className="font-semibold">{tool.label}</div>
              </div>

              <ArrowRight className="w-5 h-5" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
