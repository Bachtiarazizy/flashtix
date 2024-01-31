import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ComboboxDemo } from "./ComoBox";
import { imageCardData } from "@/constant";
import CardImageComponent from "./CardImage";

export default function EventlistCard() {
  return (
    <section id="events" className="flex flex-col mt-8 md:mt-12 mx-4 md:mx-16">
      <div className="flex flex-col md:flex-row justify-between mt-4 md:mt-8">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-semibold">Browse Events In</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-5">
          <ComboboxDemo />
          <ComboboxDemo />
          <ComboboxDemo />
        </div>
      </div>

      <div className="flex flex-wrap justify-center md:justify-between mt-8">
        {imageCardData.map((data, index) => (
          <CardImageComponent key={index} {...data} />
        ))}
      </div>

      <Button size="lg" asChild className="button w-full sm:w-auto mt-8 md:mt-12 flex mx-auto">
        <Link href="#events">Explore More</Link>
      </Button>
    </section>
  );
}
