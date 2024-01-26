import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ComboboxDemo } from "./ComoBox";
import { imageCardData } from "@/constant";
import CardImageComponent from "./CardImage";

export default function EventlistCard() {
  return (
    <section id="events" className="flex flex-col mt-12 mx-16">
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

      <div className="flex flex-wrap justify-between">
        {imageCardData.map((data, index) => (
          <CardImageComponent key={index} {...data} />
        ))}
      </div>

      <Button size="lg" asChild className="button w-full sm:w-fit mt-12 flex mx-auto">
        <Link href="#events">Explore More</Link>
      </Button>
    </section>
  );
}
