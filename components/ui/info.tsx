"use client";
<<<<<<< HEAD
import React, { MouseEventHandler } from "react";
=======
import React,{MouseEventHandler} from "react";
>>>>>>> origin/main

import { Product } from "@/app/types";
import { ShoppingCart } from "lucide-react";
import useCart from "@/zustand-store/use-cart";

interface InfoProps {
  data: Product;
<<<<<<< HEAD
  // onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
=======
 // onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
>>>>>>> origin/main
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const InfoSection: React.FC<InfoProps> = ({ data }) => {
<<<<<<< HEAD
  const cart = useCart();
  const onAddtoCart /* : MouseEventHandler<HTMLButtonElement> */ = () => {
    // event.stopPropagation();
=======

  const cart=useCart()
  const onAddtoCart/* : MouseEventHandler<HTMLButtonElement> */ = () => {
   // event.stopPropagation();
>>>>>>> origin/main

    cart.addItem(data);
  };

<<<<<<< HEAD
=======




>>>>>>> origin/main
  return (
    <div className="">
      <p className="text-neutral-400 text-xs mb-4  f w-full text-right ">
        Item Code: {data.id.slice(27)}{" "}
      </p>

      <h1 className="text-2xl uppercase "> {data.name} </h1>

      <div className="mt-8 flex  justify-start items-center gap-x-4 ">
        <div className="text-2xl ">
          <div className="font-semibold">
            {formatter.format(Number(data?.price))}
          </div>
        </div>
        <p className="text-neutral-600 text-xs ">* inc. VAT</p>
      </div>

      <hr className="my-4 md:my-8" />
      <div className="flex items-center  gap-x-4">
        <h3 className="text-sm">Size: </h3>

        <div className="py-2 w-24 text-center border border-gray-100">
          {data?.size?.name}
        </div>
      </div>
      <div className="flex items-center gap-x-4 my-4">
        <h3 className="text-sm">Selected Color: </h3>
        <div
          className="h-6 w-6 rounded-full border border-gray-600"
          style={{ backgroundColor: data?.color?.value }}
        ></div>
      </div>
      <div className="mt-8 lg:mt-16 flex items-center justify-center gap-x-3 w-full">
        <button
<<<<<<< HEAD
          onClick={onAddtoCart}
=======
        onClick={onAddtoCart}
>>>>>>> origin/main
          className="flex items-center text-neutral-800 justify-center gap-2 
        rounded bg-[#88AB8E] p-3 transition duration-500 hover:opacity-90 w-full md:w-2/3 whitespace-nowrap "
        >
          <p>Add To Cart </p>
          <ShoppingCart />
        </button>
      </div>
<<<<<<< HEAD
      <div className="mt-12">
        <h2 className="text-neutral-800 border-b">Specifications</h2>
        <p className="text-neutral-500 mt-4 "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odit dolorum eveniet adipisci molestiae ullam enim reiciendis quos neque doloribus accusantium, dolorem cumque dolor aut, magni omnis. Obcaecati, inventore odit. </p>
      </div>
=======
>>>>>>> origin/main
    </div>
  );
};

export default InfoSection;
