import getProducts from "@/actions/get-products";
import FeaturedProList from "@/components/featuredProLİst";
import HeroSection from "@/components/hero";
import { Newsletter } from "@/components/newsletter";
import SubHero from "@/components/subHero";

import Image from "next/image";

export default async function Home() {
  const products = await getProducts({ isFeatured: true });

  return (
    <div className="w-full h-full">
      <HeroSection />
      {/* Ad */}
      <div className="w-full mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-evenly text-center h-56 my-12">
        <div className="font-light">
          <h1 className="text-lg md:text-2xl font-normal ">Secured payment</h1>
          <p className=" font-serif italic ">By debit card or credit card</p>
        </div>
        <div className="font-light">
          <h1 className="text-lg md:text-2xl font-normal">Shipping cost free</h1>
          <p className=" font-serif italic">
            Free delivery for over 200.0 Eur orders.
          </p>
        </div>
        <div className="font-light">
          <h1 className="text-lg md:text-2xl font-normal">Quality of Service</h1>
          <p className=" font-serif italic">Easy returns and changes</p>
        </div>
      </div>
      {/* Ad.....END */}

      <FeaturedProList title="Recently Released" items={products} />
      <SubHero />

      <div className="flex flex-col gap-8 items-center justify-center w-full max-w-4xl mx-auto my-12  text-center my">
        <div className=" w-full  border-t pt-8 font-light  text-black">
          Browse the latest looks and most stylish trends in our women's dresses
          collection. From minimalist to modish, polished to preppy, the premium
          pieces here are sure to suit the most discerning of tastes.Whatever
          you need, you'll find it here.Sign up for newsletter and hear about exclusive offers and latest news.
        </div>
        <Newsletter />
      </div>




    </div>
  );
}
