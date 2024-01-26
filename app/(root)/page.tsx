import EventlistCard from "@/components/shared/EventListCard";
import ExplorePlaceCard from "@/components/shared/ExplorePlaceCard";
import HeroSection from "@/components/shared/HeroSection";
import MediaPartner from "@/components/shared/Mediapartner";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <HeroSection />
      <EventlistCard />
      <ExplorePlaceCard />

      <section>
        <div className=" flex flex-col items-center text-white w-full h-72 text-center mt-16 bg-gradient-to-tr from-purple-800 via-blue-500 to-slate-500">
          <h1 className="text-5xl font-bold mt-10">FlashTix - Flash,Secure,Unforgotable!</h1>
          <p className="text-xl mt-4">
            ⚡️ Swift bookings, ironclad security.FlashTix: Where speed meets peace of mind. <br /> Elevate your event experience instantly. 🚀 #FastAndSecure
          </p>
          <Button size="lg" asChild className="button w-full sm:w-fit mt-8">
            <Link href="#events">Explore Now</Link>
          </Button>
        </div>
      </section>
      <section className="flex flex-col mx-16 mt-12">
        <h2 className="text-2xl font-semibold">Discover What's Next</h2>
        <div className="flex mt-10 flex-col  text-white relative bg-cover bg-center h-[80vh] w-full rounded-3xl" style={{ backgroundImage: 'url("/assets/images/hero3.jpg")' }}>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-3xl"></div>
          <div className="flex flex-col z-10 mt-24 ml-40">
            <h1 className="text-5xl font-bold">Coldplay</h1>
            <h3 className="mt-3">California, USA</h3>
            <div className="flex flex-row justify-between mr-20 mt-60">
              <Link href="#events">Explore Now</Link>
              <p>February 29,2024</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-start mx-16 mt-16">
        <h2 className="flex text-2xl font-semibold mb-10">Discover What's Next</h2>
        <MediaPartner />
      </section>
      <div className=" flex flex-col items-center text-white w-full h-80 text-center mt-16 bg-gradient-to-tr from-purple-800 via-blue-500 to-slate-500"></div>
    </div>
  );
}
