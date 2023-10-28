import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { getApiLimitCount } from "@/lib/apiLimit";
import { checkSubscription } from "@/lib/subscription";

const Dashboardlayout = async ({ children }: { children: React.ReactNode }) => {

  const apiLimitCount = await getApiLimitCount();
  const isPremium = await checkSubscription();
  
 
  return (
    <div className="h-full relative">
      <div
        className="hidden w-10 h-full md:flex md:w-64 md:flex-col
            md:fixed md:inset-y-0 bg-gray-900"
      >
        <Sidebar apiLimitCount={apiLimitCount} isPremium={isPremium}/>
      </div>

      <main className="md:pl-64">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default Dashboardlayout;
