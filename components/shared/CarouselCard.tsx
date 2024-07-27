import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function HeroCarousel() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="flex mt-5 flex-col justify-center text-center text-white items-center relative bg-cover bg-center h-[70vh] w-full rounded-3xl overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-3xl z-20"></div>
      <Carousel plugins={[plugin.current]} className="w-full h-[90vh]" onMouseEnter={plugin.current.stop} onMouseLeave={plugin.current.reset}>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center  relative z-30">
                    <Image src={`/assets/images/hero${index + 1}.jpg`} alt={`Hero Image ${index + 1}`} layout="fill" objectFit="cover" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
