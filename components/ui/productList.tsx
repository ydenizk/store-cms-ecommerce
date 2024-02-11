"use client";

import React from "react";
import { Product } from "@/app/types";
import { NoResults } from "./no-results";
import ProductCard from "../productCard";


interface ProductListProps {
  title: string;
  items: Product[];
<<<<<<< HEAD
  showNew?: boolean;
  showDiscount?:boolean

=======
>>>>>>> origin/main
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  return (
    <section className="space-y-4">
      <div className="mx-8">
        <h3 className="font-bold text-3xl my-4"> {title} </h3>
        {items.length === 0 && <NoResults />}
        <div
          className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 gap-8"
        >
          {items.map((item) => {
<<<<<<< HEAD
            return <ProductCard key={item.id} data={item} showNew={false} showDiscount={false} />;
=======
            return <ProductCard key={item.id} data={item} />;
>>>>>>> origin/main
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductList
