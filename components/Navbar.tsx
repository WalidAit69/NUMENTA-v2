
import { UserButton } from "@clerk/nextjs";
import Mobilesidebar from "./mobile-sidebar";
import { getApiLimitCount } from "@/lib/apiLimit";
import { checkSubscription } from "@/lib/subscription";

export default async function Navbar() {

  const apiLimitCount = await getApiLimitCount();
  const isPremium = await checkSubscription();

  return (
    <div className="flex items-center p-4">
      <div className="md:hidden">
        <Mobilesidebar apiLimitCount={apiLimitCount} isPremium={isPremium}/>
      </div>

      <div className="flex w-full justify-end">
        <UserButton />
      </div>
    </div>
  );
}
