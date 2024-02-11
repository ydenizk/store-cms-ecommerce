"use client";

import { Product } from "@/app/types";
import React from "react";
import toast from "react-hot-toast";
import { X } from "lucide-react";
import useCart from "@/zustand-store/use-cart";
import Image from "next/image";

interface CartItemProps {
  data: Product;
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="flex py-4  md:py-6 border-b">
      <div className="relative  rounded overflow-hidden w-36 h-36 md:w-48 md:h-48">
        <Image
          src={data.images[0].url}
          fill
          alt="xx"
          className="object-cover object-center border rounded border-gray-100"
        />
      </div>

      <div className="relative ml-4 flex flex-1 flex-col justify-between  ">
        <div className="absolute z-10 right-0 top-1">
          <button onClick={onRemove}>
         
            <X />
          </button>
        </div>
        <div className="relative pr-9  grid grid-cols-2 gap-x-4 md:gap-x-6">
          <div className="flex justify-between">
            <p className="md:text-lg font-semibold text-black capitalize">
        
              {data.name}{" "}
            </p>
          </div>

          <div className="mt-1 flex text-sm">
            <p className="text-gray-500 capitalize"> {data.color.name} </p>
            <p className="text-gray-500 ml-4 border-l pl-4 border-gray-200">
              {data.size.name}
            </p>
          </div>
          <div className="font-semibold">
            {formatter.format(Number(data?.price))}
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
 