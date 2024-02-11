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
<<<<<<< HEAD
    link: "/2.jpg",
  },
  {
    id: 2,
    link: "/1.jpg",
  },
  {
    id: 3,
    link: "/5.jpg",
  },
  {
    id: 4,
    link: "/4.jpg",
  },
  {
    id: 5,
    link: "/6.jpg",
=======
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
>>>>>>> origin/main
  },

];

export function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
<<<<<<< HEAD
      className="w-full relative"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
            <div className="absolute text-3xl  md:text-4xl lg:text-5xl max-w-4xl p-8 w-full h-full top-1/2 leading-none md:leading-[4rem] text-neutral-100 
              uppercase font-bold z-50">All camping equipment you need. </div>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-80 lg:h-[640px] md:h-[540px] rounded-md">
=======
      className="w-full "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-80 lg:h-[640px] md:h-[540px]">
>>>>>>> origin/main
              <Image
                src={image.link}
                alt="pic"
                fill
<<<<<<< HEAD
                className="absolute object-cover object-center rounded-md"
              />
        
=======
                className="absolute object-cover object-center"
              />
>>>>>>> origin/main
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" left-[2%] opacity-60 text-neutral-400" />
      <CarouselNext className=" right-[2%] opacity-60 text-neutral-400" />
    </Carousel>
  );
}
