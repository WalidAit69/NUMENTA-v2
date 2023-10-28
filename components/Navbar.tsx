
import { UserButton } from "@clerk/nextjs";
import Mobilesidebar from "./mobile-sidebar";
import { getApiLimitCount } from "@/lib/apiLimit";

export default async function Navbar() {

  const apiLimitCount = await getApiLimitCount();

  return (
    <div className="flex items-center p-4">
      <div className="md:hidden">
        <Mobilesidebar apiLimitCount={apiLimitCount} />
      </div>

      <div className="flex w-full justify-end">
        <UserButton />
      </div>
    </div>
  );
}
