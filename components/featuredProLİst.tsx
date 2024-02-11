"use client";

import React, { useRef, useEffect } from "react";
import { Product } from "@/app/types";
import { NoResults } from "./ui/no-results";
import ProductCard from "./productCard";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

interface ProfuctListProps {
  title: string;
  items: Product[];
}

const FeaturedProList: React.FC<ProfuctListProps> = ({ title, items }) => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-180vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "1728 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <section className="space-y-4">
      <div ref={triggerRef} className="mx-8">
        <h3 className="font-bold text-3xl"> {title} </h3>
        {items.length === 0 && <NoResults />}
        <div
          ref={sectionRef}
          className="h-[100%] mx-4 gap-8 py-16 pt-36  flex
           relative"
          style={{ width: "240vw" }}
        >
          {items.map((item) => {

            return <ProductCard key={item.id} data={item} showNew={true} showDiscount={false} />;

          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProList;
