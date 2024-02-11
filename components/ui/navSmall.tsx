"use client";

import React from "react";
import Link from "next/link";
import { useResponsive } from "@/zustand-store/use-responsive";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Category } from "@/app/types";
import Image from "next/image";

interface NavSmallProps {
  categories: Category[];
}

const NavSmall: React.FC<NavSmallProps> = ({ categories }) => {
  const { isOpen, onClose, onOpen } = useResponsive();

  const variant1 = {
    open: {
      width: "100%",

      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    close: {
      width: 0,

      transition: { duration: 0.8, delay: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
  };
  const variant2 = {
    open: { opacity: 1, transition: { duration: 1, delay: 0.7 } },
    close: { opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="close"
      variants={variant1}
      animate={isOpen ? "open" : "close"}
      className=" h-screen bg-gray-100 z-10  absolute mx-auto  overflow-hidden   "
    >
      <div className=" text-right m-5">
        <button onClick={() => onClose()} className=" cursor-pointer">
          <X />
        </button>
      </div>

      {/* contenttt */}

      <motion.div
        variants={variant2}
        animate={isOpen ? "open" : "close"}
        className="grid  gap-6 p-4 font-light w-1/2  "
      >
        <ul className="flex flex-col gap-2 text-lg   ">
          <li>
            <h1 className="uppercase  border-b text-gray-900 font-semibold text-base border-gray-300">
<<<<<<< HEAD
       Categories
=======
              Woman
>>>>>>> origin/main
            </h1>
          </li>

          {categories?.map((category) => {
            return (
              <li key={category.id}>
                <Link href={`/category/${category.id}`} className="text-black">
                  {category.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-col gap-2 text-lg mt-8  ">
          <Link
            href="/sale"
            className="uppercase  border-b text-gray-900 font-semibold text-base border-gray-300"
          >
            Sale
          </Link>
          <div className=" h-72 relative mt-4">
            <Image
              src="/sale.jpg"
              alt="pic"
              fill
              className="absolute object-cover object-right opacity-80"
            />
          </div>
        </div>
      </motion.div>
      {/* contenttt  END*/}
    </motion.div>
  );
};

export default NavSmall;
