import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function MediaPartner() {
  // Array of hero image URLs
  const heroImageUrls = [
    "/assets/images/hero1.jpg",
    "/assets/images/hero2.jpg",
    "/assets/images/hero3.jpg",
    "/assets/images/hero4.jpg",
    "/assets/images/hero5.jpg",
    "/assets/images/hero6.jpg",
    "/assets/images/hero7.jpg",
    "/assets/images/hero8.jpg",
  ];

  const totalImages = heroImageUrls.length;

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-screen"
    >
      <CarouselContent>
        {Array.from({ length: totalImages * 2 }).map((_, index) => {
          const imageIndex = index % totalImages;
          return (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
              <div className="p-1">
                <Card className="relative aspect-square overflow-hidden">
                  <img src={heroImageUrls[imageIndex]} alt={`Hero Image ${imageIndex + 1}`} className="absolute inset-0 w-full h-full object-cover object-center" />
                  <CardContent className="absolute inset-0 flex items-center justify-center p-6"></CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
