"use client";

import { Search, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import useCart from "@/zustand-store/use-cart";
import { Product } from "@/app/types";
import Link from "next/link";
import Image from "next/image";

interface NavCartProps {
  products: Product[];
}

const NavCart: React.FC<NavCartProps> = ({ products }) => {
  const router = useRouter();
  const cart = useCart();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); //search

  useEffect(() => {
    setIsMounted(true);
  }, []);

  //search functionality

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-3">
      <div className="flex relative">
        <input
          type="text"
          placeholder="Search "
          className={`outline-none w-36 sm:w-auto  border-b text-sm h-8 border-gray-300  text-gray-600 ${
            isSearchVisible ? "visible" : "hidden"
          }`}
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          onClick={() => setIsSearchVisible(!isSearchVisible)}
          className=" p-2  rounded-full transition hover:bg-gray-100"
        >
          <Search size={20} />
        </button>
        {/* render search results here */}
        <ul className="absolute top-10 shadow-md bg-white  z-50">
          {isSearchVisible &&
            searchTerm.trim().length > 0 &&
            filteredProducts.map((product) => {
              return (
                <li
                  key={product.id}
                  className="p-2 flex items-center gap-x-2  transition hover:bg-gray-100 z-50"
                >
                  <Image
                    src={product.images[0].url}
                    alt="pic"
                    width={30}
                    height={36}
                  />
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setIsSearchVisible(false);
                      router.push(`/product/${product.id}`);
                    }}
                    className=" text-sm"
                  >
                    {product.name}{" "}
                  </button>
                </li>
              );
            })}
        </ul>
      </div>

      <button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full relative  text-black p-2 transition hover:bg-gray-100"
      >
        <ShoppingCart size={22} color="#222" />
        <span className="text-black text-xs absolute top-1 -right-[6px]">
          ({cart.items.length})
        </span>
      </button>
    </div>
  );
};

export default NavCart;
