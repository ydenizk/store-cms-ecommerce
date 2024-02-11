"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { Category } from "@/app/types";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  ListItem,
} from "@/components/ui/navigation-menu";

interface NavLinksProps {
  categories: Category[];
}

const NavLinks: React.FC<NavLinksProps> = ({ categories }) => {


  return (
    <NavigationMenu className="hidden sm:block">
      <NavigationMenuList className="">
        {/*      <NavigationMenuItem className="">
          <NavigationMenuTrigger className="uppercase">
            Men
          </NavigationMenuTrigger>
          <NavigationMenuContent className="border-none  ">
            <div className="grid grid-cols-2 gap-6 p-4  w-[560px] h-[400px]   ">
              <div className="relative w-full h-full">
                <Image
                  src="/1.jpg"
                  alt="pic"
                  fill
                  className="object-cover object-center absolute"
                />
              </div>
              <ul >
                <ListItem
                  href="/docs"
                  title="Introduction"
                  className=""
                ></ListItem>
                <ListItem
                  href="/docs/installation"
                  title="Installation"
                ></ListItem>
                <ListItem
                  href="/docs/primitives/typography"
                  title="Typography"
                ></ListItem>
                
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
 */}
     

        <NavigationMenuItem className="hidden sm:block">
          <NavigationMenuTrigger className="uppercase">
<<<<<<< HEAD
            Everything for camping
          </NavigationMenuTrigger>
          <NavigationMenuContent className="border-none ">
            <div className="grid grid-cols-2 gap-6 p-4 sm:w-[440px] md:w-[540px] h-[360px]  ">
              <div className="relative sm:w-[210px] md:w-[240px] h-[320px]">
=======
            Everything for woman
          </NavigationMenuTrigger>
          <NavigationMenuContent className="border-none">
            <div className="grid grid-cols-2 gap-6 p-4 w-[560px] h-[400px]   ">
              <div className="relative w-[240px] h-[360px]">
>>>>>>> origin/main
                <Image
                  src="/4.jpg"
                  alt="pic"
                  fill
                  className="object-cover object-center absolute"
                />
              </div>
              <ul>
                {categories?.map((category) => {
                  return (
                    <ListItem
<<<<<<< HEAD
                    className="uppercase hover:opacity-80 transition duration-300"
=======
                    className="uppercase "
>>>>>>> origin/main
                      key={category.id}
                      href={`/category/${category.id}`}
                      title={category.name}
                    ></ListItem>
                  );
                })}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
<<<<<<< HEAD
          <Link href="/sale" legacyBehavior passHref>
=======
          <Link href="/docs" legacyBehavior passHref>
>>>>>>> origin/main
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              SALE
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavLinks;
