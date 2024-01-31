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
      <section className="flex flex-col items-center text-white w-full h-72 text-center mt-8 sm:mt-16 bg-gradient-to-tr from-purple-800 via-blue-500 to-slate-500">
        <h1 className="text-3xl sm:text-5xl font-bold mt-4 sm:mt-10">FlashTix - Flash, Secure, Unforgettable!</h1>
        <p className="text-base sm:text-xl mt-2 sm:mt-4">
          ⚡️ Swift bookings, ironclad security. FlashTix: Where speed meets peace of mind. <br /> Elevate your event experience instantly. 🚀 #FastAndSecure
        </p>
        <Button size="lg" asChild className="button w-full sm:w-auto mt-4 sm:mt-8">
          <Link href="#events">Explore Now</Link>
        </Button>
      </section>

      <section className="flex flex-col mx-4 sm:mx-16 mt-8 sm:mt-12">
        <h2 className="text-xl sm:text-2xl font-semibold">Discover What's Next</h2>
        <div className="flex flex-col mt-4 sm:mt-10 text-white relative bg-cover bg-center h-[60vh] sm:h-[80vh] w-full rounded-3xl" style={{ backgroundImage: 'url("/assets/images/hero3.jpg")' }}>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-3xl"></div>
          <div className="flex flex-col z-10 mt-4 sm:mt-24 sm:ml-40 text-center sm:text-left">
            <h1 className="text-3xl sm:text-5xl font-bold">Coldplay</h1>
            <h3 className="text-base sm:text-xl mt-2 sm:mt-3">California, USA</h3>
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between mt-4 sm:mt-10 sm:mr-20">
              <Link href="#events" className="text-white hover:underline">
                Explore Now
              </Link>
              <p className="text-base sm:text-xl mt-2 sm:mt-0">February 29, 2024</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-start mx-16 mt-16">
        <h2 className="flex text-2xl font-semibold mb-10">Discover What's Next</h2>
        <MediaPartner />
      </section>
      <div className="flex flex-col items-center text-white w-full h-60 sm:h-80 text-center mt-8 sm:mt-16 bg-gradient-to-tr from-purple-800 via-blue-500 to-slate-500"></div>
    </div>
  );
}
