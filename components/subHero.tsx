import React from "react";
import Link from "next/link";
import getCategories from "@/actions/get-categories";

const SubHero = async () => {
  const categories = await getCategories();
  return (
    <div className="w-full h-96 px-6 mx-auto my-16">
      <div
        className="rounded relative  overflow-hidden bg-cover opacity-90  bg-center w-full h-96 mx-auto  "
        style={{ backgroundImage: `url(/sub-2.jpg)` }}
      >
        <div className="p-8 flex flex-col flex-wrap w-auto h-full justify-start  gap-4 absolute  top-0 left-0">
          {categories.map((category) => {
            return (
              <Link
                href={`/category/${category.id}`}
                key={category.id}
                className="border border-neutral-300 text-neutral-200 text-lg 
            font-extralight tracking-wide p-4 w-48 text-center transition-all 
             hover:opacity-80 hover:translate-x-1 hover:-translate-y-1 "
              >
                {category.name}
              </Link>
            );
          })}
    
        </div>
      </div>
    </div>
  );
};

export default SubHero;
