import { Button } from "@/components/ui/button";
import Link from "next/link";

function LandingPage() {
  return (
    <div>
      <Link href={"/sign-in"}>
        <Button>Sign in</Button>
      </Link>

      <Link href={"/sign-up"}>
        <Button>Register</Button>
      </Link>
    </div>
  );
}

export default LandingPage;
