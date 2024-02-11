import getProducts from "@/actions/get-products";
import FeaturedProList from "@/components/featuredProLİst";
import HeroSection from "@/components/hero";
import { Newsletter } from "@/components/newsletter";
import SubHero from "@/components/subHero";

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
          <h1 className="text-lg md:text-2xl font-normal">
            Shipping cost free
          </h1>
          <h1 className="text-lg md:text-2xl font-normal">
            Shipping cost free
          </h1>
          origin/main
          <p className=" font-serif italic">
            Free delivery for over 200.0 Eur orders.
          </p>
        </div>
        <div className="font-light">
          <h1 className="text-lg md:text-2xl font-normal">
            Quality of Service
          </h1>

          <h1 className="text-lg md:text-2xl font-normal">
            Quality of Service
          </h1>

          <p className=" font-serif italic">Easy returns and changes</p>
        </div>
      </div>
      {/* Ad.....END */}

      <FeaturedProList title="Recently Released" items={products} />
      <SubHero />

      <div className="flex flex-col gap-8 items-center justify-center w-full max-w-4xl mx-auto my-12  text-center my">
        <div className=" w-full  border-t pt-8 font-light  text-black">
          We believe the outdoors is there for everyone to enjoy. Whether you
          are blazing a new trail or just want to add a little fresh-air time to
          your hectic schedule, the outside world is waiting for you. We make
          the gear that will get you there.Get the latest news and offers via
          our newsletter
        </div>
        <Newsletter />
      </div>
    </div>
  );
}
