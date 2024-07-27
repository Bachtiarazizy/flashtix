import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="bottom-0  w-full px-16 py-6 border-b shadow-sm bg-slate-100 flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <div className="w-2 h5"></div>
        <div className=" md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="ghost">
            Privacy Policy
          </Button>
          <Button size="sm" variant="ghost">
            Terms of Service
          </Button>
        </div>
      </div>
    </footer>
  );
}
