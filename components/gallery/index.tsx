"use client";

import React from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { Image as ImageType } from "@/app/types";
import GalleryTab from "./galleryTab";

//npm i @headlessui/react   böyle bir paketi yukluoruz burda

interface GalleryProps {
  images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse ">
      <div className="mx-auto mt-6 w-full max-w-2xl hidden sm:block">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => {
            return <GalleryTab key={image.id} image={image} />;
          })}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full ">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="aspect-square relative h-full w-full overflow-hidden">
              <Image
                src={image.url}
                alt="image"
                fill
                className="object-cover object-center "
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
