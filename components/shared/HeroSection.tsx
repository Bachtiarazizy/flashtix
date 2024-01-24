"use client";

import Dropdown from "@/components/shared/Dropdown";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CarouselCard from "./CarouselCard";

export default function HeroSection() {
  return (
    <section className=" mx-16 md:py-10 ">
      <div className="flex flex-row gap-5">
        <Dropdown />
        <Dropdown />
        <Dropdown />
        <Dropdown />
        <Dropdown />
      </div>

      <div className="flex mt-5 flex-col relative">
        <CarouselCard />
        <div className="z-50 p-8 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center">
          <p className="p-regular-20 md:p-regular-24 text-white">
            Welcome to FlashTix,
            <br /> Your Ultimate Event Ticketing Platform!
          </p>
          <h1 className="h1-bold mt-8 text-white">
            Discover, Book, and Host <br />
            Unforgettable Events
          </h1>
          <Button size="lg" asChild className="button w-full sm:w-fit mt-14">
            <Link href="#events">Explore Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
// style={{ backgroundImage: 'url("/assets/images/company.jpg")' }}
