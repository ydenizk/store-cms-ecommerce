import React from "react";
import Container from "./ui/container";
import Link from "next/link";
import NavLinks from "./navLinks";
import NavCart from "./navCart";
//import { useResponsive } from "@/zustand-store/use-responsive";
import NavSmall from "./ui/navSmall";
import getCategories from "@/actions/get-categories";
import NavButton from "./ui/navButton";

import getAllProducts from "@/actions/getAllProducts";

<<<<<<< HEAD
=======





>>>>>>> origin/main
const Navbar = async () => {
  //const { isOpen, onClose, onOpen } = useResponsive();

  const categories = await getCategories();
<<<<<<< HEAD
  const products = await getAllProducts();
=======
  const products=await getAllProducts()
>>>>>>> origin/main

  return (
    <div className="w-full border-b relative   ">
      <Container>
        <div className="flex items-center  px-4 h-12 w-full ">
          <Link href="/" className=" uppercase text-2xl font-semibold  mr-6">
<<<<<<< HEAD
            ludo outdoor
=======
            ludo
>>>>>>> origin/main
          </Link>
          <NavLinks categories={categories} />
          <NavButton />
          <NavCart products={products} />
        </div>
        <NavSmall categories={categories} />
      </Container>
    </div>
  );
};

export default Navbar;
