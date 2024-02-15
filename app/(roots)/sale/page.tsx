
import React from "react";
import { Product } from "@/app/types";
import getAllProducts from "@/actions/getAllProducts";
import SalesClient from "./salesClient";  

export const revalidate = 0;

interface SalesProps {
  products?: Product[];

}

function getMultipleRandom<T>(arr: T[], num: number): T[] {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

const SalePage: React.FC<SalesProps> = async () => {
  const allproducts = await getAllProducts();

  const products = getMultipleRandom(allproducts, 4);

  return (
    <div className="bg-white p-4 w-full">
   <SalesClient products={products} />
    </div>
  );
};


export default SalePage


