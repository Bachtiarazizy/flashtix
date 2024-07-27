"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

import { Ticket } from "lucide-react";
import { dropdownItems } from "@/constant";
import HeroCarousel from "./CarouselCard";

export default function HeroSection() {
  return (
    <>
      <section className=" mx-16 mt-6">
        <div className="flex  flex-col relative ">
          <HeroCarousel />
          <div className="z-50 p-8 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center mt-2">
            <p className="p-regular-20 md:p-regular-24 text-white">
              Welcome to FlashTix,
              <br /> Your Ultimate Event Ticketing Platform!
            </p>
            <Ticket className="text-white font-bold mt-1" />
            <h1 className="h1-bold  text-white">
              Discover, Book, and Host <br />
              Unforgettable Events
            </h1>
            <Button size="lg" asChild className="button w-full mt-2 sm:w-fit ">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
