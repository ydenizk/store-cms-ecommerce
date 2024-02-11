"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Merged image array with unique images from both versions, ensuring no duplicates and a comprehensive set.
const images = [
  { id: 1, link: "/1.jpg" },
  { id: 2, link: "/2.jpg" },
  { id: 3, link: "/3.jpg" }, // Assuming "/3.jpg" was intended to be included as it's unique
  { id: 4, link: "/4.jpg" },
  { id: 5, link: "/5.jpg" }, // Assuming "/5.jpg" was intended to be included as it's unique
  { id: 6, link: "/6.jpg" },
];

export function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full relative" // Keeping the 'relative' class for any positioned children
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      {/* Conditional rendering for additional content based on design requirements */}
      <div className="absolute text-3xl md:text-4xl lg:text-5xl max-w-4xl p-8 w-full h-full top-1/2 leading-none md:leading-[4rem] text-neutral-100 uppercase font-bold z-50">
        All camping equipment you need.
      </div>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-80 lg:h-[640px] md:h-[540px] rounded-md"> {/* Conditional 'rounded-md' based on design preference */}
              <Image
                src={image.link}
                alt={`Carousel image ${index + 1}`}
                fill
                className="absolute object-cover object-center rounded-md" // Keeping 'rounded-md' for consistency with the container
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-[2%] opacity-60 text-neutral-400" />
      <CarouselNext className="right-[2%] opacity-60 text-neutral-400" />
    </Carousel>
  );
}
