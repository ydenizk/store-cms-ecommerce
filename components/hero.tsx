import React from "react";
import Container from "./ui/container";
import Image from "next/image";
import { HeroCarousel } from "./hero-carousel";

const HeroSection = () => {
  return (
    <div className="w-full lg:py-6 md:py-10 py-8   ">
      <Container>
        <div className="grid   md:grid-cols-2 gap-2 md:gap-6 w-full px-10  lg:px-4 order-last md:order-first ">
          <div className="w-full h-full  ">
            <HeroCarousel />
          </div>

          <div className="grid   md:grid-cols-2    gap-2 w-full  h-96 lg:h-[640px] md:h-[540px] ">
            <div className="relative w-full h-full ">
              <Image
                src="/01.jpg"
                alt="pic"
                fill
                className="absolute object-cover object-center rounded-md "
              />
            </div>
            <div className="relative w-full h-full opacity-95">
              <Image
                src="/10.jpg"
                alt="pic"
                fill
                className="absolute object-cover rounded-md "
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
