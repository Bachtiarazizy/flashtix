// import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import NavItems from "../../../components/shared/NavItems";
import MobileNav from "../../../components/shared/MobileNav";
import { Button } from "../../../components/ui/button";
import DashboardNav from "@/app/(platform)/(dashboard)/_components/DashboardNav";

export default function Header() {
  return (
    <header className="top-0 w-full px-16 py-6 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <div className="text-2xl black">
          <h2>FlashTix</h2>
        </div>

        <div className="flex justify-end gap-3">
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
          <MobileNav />
          <div className=" space-x-4 md:block md:w-auto flex items-center justify-between w-full"></div>
          <Button asChild className="rounded-full border-2 bg-transparent text-black hover:bg-slate-100" size="lg">
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button asChild className="rounded-full" size="lg">
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
