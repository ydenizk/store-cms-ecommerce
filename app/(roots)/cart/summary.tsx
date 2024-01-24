"use client";

import React, { useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import useCart from "@/zustand-store/use-cart";
import toast from "react-hot-toast";

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed..");
      removeAll();
    }
    if (searchParams.get("canceled")) {
      toast.error("Something went wrong..");
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  // Calculate delivery cost
  const deliveryCost = totalPrice > 200 ? totalPrice * 0.15 : 0;
  // Calculate total cost including delivery
  const finalTotal = totalPrice + deliveryCost;

  const onCheckout = async () => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      { productIds: items.map((item) => item.id) }
    );

    window.location = res.data.url;
  };

  return (
    <div className="mt-4 col-span-4  rounded bg-gray-100 px-4 p-6  h-full max-w-6xl">
      <div className="flex justify-start items-center gap-x-2">
        <h2 className="text-lg  font-semibold ">Order Summary </h2>
        <p className="text-gray-500">({items.length} items)</p>
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex items-center justify-between border-t border-gray-300 pt-4">
          <div className="">Sub Total</div>
          <div className="font-semibold text-black">
            {formatter.format(Number(totalPrice))}
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="">Delivery Cost</div>
          <div className="font-semibold text-black">
            {formatter.format(deliveryCost)}
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-8">
          <div className="text-lg font-semibold">Total</div>
          <div className="font-semibold text-black">
            {formatter.format(finalTotal)}
          </div>
        </div>
      </div>
      <button
        onClick={onCheckout}
        className="w-full mt-12 p-2 bg-[#88AB8E] text-gray-900 rounded cursor-pointer text-lg hover:opacity-90 
        transition duration-500"
      >
        Checkout
      </button>
    </div>
  );
};

export default Summary;
