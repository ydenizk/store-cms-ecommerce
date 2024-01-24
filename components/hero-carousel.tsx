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

const images = [
  {
    id: 1,
    link: "/1.jpg",
  },
  {
    id: 2,
    link: "/6.jpg",
  },
  {
    id: 3,
    link: "/3.jpg",
  },
  {
    id: 4,
    link: "/2.jpg",
  },
  {
    id: 5,
    link: "/4.jpg",
  },

];

export function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-80 lg:h-[640px] md:h-[540px]">
              <Image
                src={image.link}
                alt="pic"
                fill
                className="absolute object-cover object-center"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" left-[2%] opacity-60 text-neutral-400" />
      <CarouselNext className=" right-[2%] opacity-60 text-neutral-400" />
    </Carousel>
  );
}
