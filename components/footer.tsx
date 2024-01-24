import React from "react";
import { ImTwitter, ImFacebook } from "react-icons/im";
import { FaInstagramSquare, FaTripadvisor } from "react-icons/fa";
import Link from "next/link";
import getCategories from "@/actions/get-categories";

const Footer = async () => {
  const categories = await getCategories();

  return (
    <div className="   w-full  p-8 py-24 shadow-t-md border-t mx-auto ">
      <div className=" mx-auto w-full flex items-center  justify-evenly">
        <div className=" flex justify-evenly items-start h-full w-full">
          <div className="   ">
            <h1 className="uppercase text-xl font-bold tracking-wide mb-3  ">
              THE BRAND
            </h1>

            <ul className="  ">
              <li className="px-1 tracking-wide">
                <Link href="/contact" className="whitespace-nowrap">
                  Contact us
                </Link>
              </li>
              <li className="px-1 tracking-wide  ">
                <Link href="">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="h-full  ">
            <h1 className="uppercase text-xl font-bold tracking-wide mb-3  ">
              CHECKOUT
            </h1>

            <ul className="  ">
              {categories.map((category) => {
                return (
                  <li key={category.id} className="px-2 tracking-wide ">
                    <Link href={`/category/${category.id}`}>
                      {" "}
                      {category.name}{" "}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className=" h-full text-center w-full">
          <h1 className="mb-4  text-neutral-700">
            Follow us on social networks
          </h1>
          <div className=" w-full flex justify-center items-center gap-8 xs:gap-2 ">
            <Link href="https://twitter.com/home" className="">
              <ImTwitter className="text-neutral-800 text-2xl transition hover:text-neutral-600 duration-500 " />
            </Link>
            <Link href="https://tripadvisor.com/home" className="">
              <FaTripadvisor className="text-neutral-800 text-2xl transition hover:text-neutral-600 duration-500 " />
            </Link>

            <Link href="https://www.facebook.com" className="">
              <ImFacebook className="text-neutral-800 text-2xl  transition hover:text-neutral-600 duration-500" />
            </Link>
            <Link href="https://instagram.com/" className="">
              <FaInstagramSquare className="text-neutral-800 text-2xl transition hover:text-neutral-600 duration-500" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
