import CardImage from "@/components/shared/CardImage";
import { ComboboxDemo } from "@/components/shared/ComoBox";
import Dropdown from "@/components/shared/Dropdown";
import { Button } from "@/components/ui/Button";

// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 mx-16 md:py-10">
        <div className="">
          <div className="flex flex-row gap-5">
            <Dropdown />
            <Dropdown />
            <Dropdown />
            <Dropdown />
            <Dropdown />
          </div>
          <div className="flex flex-col justify-center gap-8 mt-8 text-center items-center">
            <p className="p-regular-20 md:p-regular-24 mt-8">
              Welcome to FlashTix,
              <br /> Your Ultimate Event Ticketing Platform!
            </p>
            <h1 className="h1-bold mt-8">
              Discover, Book and Host <br />
              Unforgotable Events
            </h1>
            <Button size="lg" asChild className="button w-full sm:w-fit mt-12">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>

          {/* <Image src="/assets/images/hero.png" alt="hero" width={1000} height={1000} className="max-h-[70vh] object-contain object-center 2xl:max-h[50vh]" /> */}
        </div>
      </section>

      <section id="events" className="flex flex-col mt-16 mx-16">
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Browse Events In</h2>
          </div>
          <div className="flex gap-5">
            <ComboboxDemo />
            <ComboboxDemo />
            <ComboboxDemo />
          </div>
        </div>
        <div className="flex mt-16">
          <div className="flex flex-wrap justify-between">
            <CardImage />
            <CardImage />
            <CardImage />
            <CardImage />
            <CardImage />
            <CardImage />
          </div>
        </div>
        <Button size="lg" asChild className="button w-full sm:w-fit mt-12 flex mx-auto">
          <Link href="#events">Explore More</Link>
        </Button>
      </section>
      <section id="trendingplace" className="mx-16 mt-16">
        <div>
          <h2 className="text-2xl font-semibold mt-16">Explore Beautifull Place In</h2>
        </div>
        <div className="flex flex-row mt-16 justify-around">
          <CardImage />
          <CardImage />
          <CardImage />
        </div>
      </section>
      <section>
        <div className="bg-gray-500 w-full h-72 mt-16"></div>
      </section>
      <section>{/* <Image /> */}</section>
    </>
  );
}
