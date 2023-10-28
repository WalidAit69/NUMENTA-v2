import Heading from "@/components/Heading";
import SubscriptionButton from "@/components/SubscriptionButton";
import { checkSubscription } from "@/lib/subscription";
import { Settings } from "lucide-react";

async function SettingsPage() {
  const isPremium = await checkSubscription();

  return (
    <div>
      <Heading
        title="Settings"
        description="Manage Account Settings"
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm flex flex-col gap-y-2">
          {isPremium
            ? "You are currently a Premium Member"
            : "You are currently on a free plan"}
          <SubscriptionButton isPremium={isPremium} />
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
