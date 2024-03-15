import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
  textColor?: string;
}

function Heading({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
  textColor,
}: HeadingProps) {
  return (
    <>
      <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
        <div className={cn("p-2 w-fit rounded-md", bgColor)}>
          <Icon className={`${iconColor}`} />
        </div>

        <div>
          <h2 className={cn("text-3xl font-semibold", textColor)}>{title}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </>
  );
}

export default Heading;
