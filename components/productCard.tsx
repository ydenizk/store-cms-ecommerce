"use client";

import React, { MouseEventHandler } from "react";
import { Product } from "@/app/types";
import Image from "next/image";
import { Expand } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/zustand-store/use-preview-modal";
import useCart from "@/zustand-store/use-cart";

interface ProductCard {
  data: Product;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const router = useRouter();
  const previeww = usePreviewModal();
  const cart = useCart();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previeww.onOpen(data);
  };
  //product cardda genel bir onclick vr zaten..stop propogation..overwrite yapıor,o yıuzden yazıoruz

  const onAddtoCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  return (
    <div
      onClick={handleClick}
      className=" group cursor-pointer  relative h-auto rounded  w-full  border-b "
    >
      {/* Images and actions  */}
      <div className="w-full h-96 rounded  relative ">
        <Image
          src={data?.images?.[0]?.url}
          fill
          alt="pic"
          className="absolute object-cover object-center rounded"
        />
        {/* BUARADA GRUP VE GROUP HOVER KULLLANAIYORUZ. ANA DİV İÇİNE HOVER DA GTOUP:HOVER DEDİKLERİMİZ GÖZÜKECEK.. */}
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-2 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <button
              onClick={onPreview}
              className="rounded-full flex items-center justify-center border bg-white shadow-md hover:scale-110 transition p-2 "
            >
              <Expand size={20} className="text-gray-600" />
            </button>
            <button
              onClick={onAddtoCart}
              className="rounded-full flex items-center justify-center border bg-white shadow-md hover:scale-110 transition p-2 "
            >
              <ShoppingCart size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
      {/* DESCRIPTION........ */}
      <div className="my-2 px-1">
        <p className="font-light text-lg ">{data.name} </p>
        <p className="text-gray-600 text-xs ">{data.category?.name} </p>
      </div>
      {/* price */}{" "}
      {/* eğer hydration problemı yaratırsa,currency die yarı bir component aç ve mounted trick i yap */}
      <div className="flex items-center justify-end px-2">
        <div className="font-semibold">
          {formatter.format(Number(data?.price))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
