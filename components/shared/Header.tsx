import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "./NavItems";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <div className="z-50 top-0 w-full h-16 px-6 border-b shadow-sm bg-white flex items-center justify-between py-6">
      <div className="hidden md:flex">
        <h2>Flashtix</h2>
      </div>
      <div className="flex md:gap-x-4 ">
        <div className="md:flex-between hidden w-full max-w-xs">
          <NavItems />
          <div className="flex md:hidden ">
            <MobileNav />
          </div>
        </div>

        <SignedIn>
          {/* Menampilkan UserButton setelah pengguna masuk */}
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: {
                  height: 30,
                  width: 30,
                },
              },
            }}
          />
        </SignedIn>
        <SignedOut>
          <div>
            {/* Tombol login hanya muncul jika pengguna belum masuk */}
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
            <div className="flex md:hidden ">
              <MobileNav />
            </div>
          </div>
        </SignedOut>
      </div>
    </div>
  );
};

export default Header;
