import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header className="w-full border-b py-4 px-6">
      <div className="wrapper flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="w-full flex items-center">
            <Image src="/assets/images/logo.svg" width={24} height={24} alt="flashtix" className="mr-2" />
            <p className="text-xl italic font-semibold">Flashtix</p>
          </Link>
        </div>

        <SignedIn>
          <nav className="md:flex-between w-full max-w-xs">
            <div className="hidden md:block">
              <NavItems />
            </div>
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <nav className="md:flex-between hidden  max-w-xs mr-10">
              <NavItems />
            </nav>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
            <MobileNav />
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
