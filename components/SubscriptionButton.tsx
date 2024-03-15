"use client";

import { Zap } from "lucide-react";
import { Button } from "./ui/button";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

interface SubscriptionButtonProps {
  isPremium: boolean;
}
function SubscriptionButton({ isPremium }: SubscriptionButtonProps) {
  const [loading, setloading] = useState(false);

  const onClick = async () => {
    try {
      setloading(true);
      const res = await axios.get("/api/stripe");

      window.location.href = res.data.url;
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setloading(false);
    }
  };

  return (
    <Button
      className="w-fit text-white font-bold border-[1.5px] border-[#444444] py-2 px-10 bg-[#282828] hover:scale-[1.02] transition-all"
      onClick={onClick}
      disabled={loading}
    >
      {isPremium ? "Manage Subscription" : "Upgrade to Pro"}
    </Button>
  );
}

export default SubscriptionButton;
