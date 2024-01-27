"use client";

import Dropdown from "@/components/shared/Dropdown";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CarouselCard from "./CarouselCard";
import { Ticket } from "lucide-react";
import { dropdownItems } from "@/constant";
import DropdownComponent from "@/components/shared/Dropdown";

export default function HeroSection() {
  return (
    <>
      <section className="flex flex-col sm:flex-row items-center top-0 bg-blue-600 p-2 sm:p-6 md:p-2 lg:p-10 xl:p-2 ">
        {dropdownItems.map((dropdown, index) => (
          <DropdownComponent key={index} label={dropdown.label} items={dropdown.items} />
        ))}
      </section>

      <section className=" mx-16 mt-6">
        <div className="flex  flex-col relative ">
          <CarouselCard />
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
// style={{ backgroundImage: 'url("/assets/images/company.jpg")' }}
