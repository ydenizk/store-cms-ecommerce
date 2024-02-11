"use client";

import Container from "@/components/ui/container";
import useCart from "@/zustand-store/use-cart";
import React, { useState, useEffect } from "react";
import CartItem from "./cartItem";
import Summary from "./summary";

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className=" ">
      <Container>
        <div className="px-4 py-16 w-full mx-auto">
          <h1 className="text-3xl font-bold text-black border-b pb-2">My Shopping Cart</h1>
          
          <div className="mt-12 gap-x-12 grid grid-cols-1 md:grid-cols-12  ">
            <div className="md:col-span-8">
              {cart.items.length === 0 && (
                <p className="text-gray-700  text-xl w-full text-center my-8 md:my-12">
                  Your Cart is empty!
                </p>
              )}
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>

            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
