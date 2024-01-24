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
            Everything for woman
          </NavigationMenuTrigger>
          <NavigationMenuContent className="border-none">
            <div className="grid grid-cols-2 gap-6 p-4 w-[560px] h-[400px]   ">
              <div className="relative w-[240px] h-[360px]">
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
                    className="uppercase "
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
          <Link href="/docs" legacyBehavior passHref>
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
