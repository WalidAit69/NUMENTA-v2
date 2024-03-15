import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Mobilesidebar from "@/components/mobile-sidebar";
import { getApiLimitCount } from "@/lib/apiLimit";
import { checkSubscription } from "@/lib/subscription";
import { cn } from "@/lib/utils";

const Dashboardlayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  const isPremium = await checkSubscription();

  return (
    <div className={cn("h-full relative")}>
      <div
        className="hidden w-10 h-full md:flex md:w-[20rem] md:flex-col
            md:fixed md:inset-y-0"
      >
        <Sidebar apiLimitCount={apiLimitCount} isPremium={isPremium} />
      </div>

      <main className="md:pl-[20rem] h-full w-full flex flex-col">
        <div className="md:hidden absolute left-5 top-5 max-[500px]:right-3 max-[500px]:top-3">
          <Mobilesidebar apiLimitCount={apiLimitCount} isPremium={isPremium} />
        </div>
        <div className="absolute right-3 top-3 max-[500px]:right-1 max-[500px]:top-1">
          <Navbar />
        </div>
        {children}
      </main>
    </div>
  );
};

export default Dashboardlayout;
