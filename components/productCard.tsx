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
<<<<<<< HEAD
  showNew?: boolean;
  showDiscount?: boolean;
=======
>>>>>>> origin/main
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

<<<<<<< HEAD
const ProductCard: React.FC<ProductCard> = ({
  data,
  showNew,
  showDiscount,
}) => {
=======
const ProductCard: React.FC<ProductCard> = ({ data }) => {
>>>>>>> origin/main
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
<<<<<<< HEAD
      className=" group cursor-pointer bg-neutral-100 relative h-auto rounded  w-full max-w-80  p-8  "
    >
      {showNew && (
        <div
          className="absolute p-1 px-2  text-center  z-20 bg-blue-500 opacity-90 text-white 
uppercase text-sm top-5 left-5"
        >
          NEW
        </div>
      )}
      {/* Images and actions  */}
      <div className="w-full h-80 rounded  relative ">
=======
      className=" group cursor-pointer  relative h-auto rounded  w-full  border-b "
    >
      {/* Images and actions  */}
      <div className="w-full h-96 rounded  relative ">
>>>>>>> origin/main
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
<<<<<<< HEAD
              className="rounded-full flex items-center justify-center border bg-gray-200 shadow-md hover:scale-110 transition p-2 "
=======
              className="rounded-full flex items-center justify-center border bg-white shadow-md hover:scale-110 transition p-2 "
>>>>>>> origin/main
            >
              <Expand size={20} className="text-gray-600" />
            </button>
            <button
              onClick={onAddtoCart}
<<<<<<< HEAD
              className="rounded-full flex items-center justify-center border bg-gray-200 shadow-md hover:scale-110 transition p-2 "
=======
              className="rounded-full flex items-center justify-center border bg-white shadow-md hover:scale-110 transition p-2 "
>>>>>>> origin/main
            >
              <ShoppingCart size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
      {/* DESCRIPTION........ */}
<<<<<<< HEAD
      <div className="my-2 mt-8 px-1">
=======
      <div className="my-2 px-1">
>>>>>>> origin/main
        <p className="font-light text-lg ">{data.name} </p>
        <p className="text-gray-600 text-xs ">{data.category?.name} </p>
      </div>
      {/* price */}{" "}
      {/* eğer hydration problemı yaratırsa,currency die yarı bir component aç ve mounted trick i yap */}
<<<<<<< HEAD
      <div className="flex items-center justify-between px-1">
        <div
          className={`h-5 w-5 rounded-full opacity-90 `}
          style={{ backgroundColor: `${data?.color.value}` }}
        ></div>

        {showDiscount ? (
          <div className="font-semibold flex items-center gap-2">
            <div className="line-through text-neutral-500 text-sm font-normal">
              {formatter.format(Number(data?.price) * 1.1)}
            </div>
            <div>{formatter.format(Number(data?.price))}</div>
          </div>
        ) : (
          <div className="font-semibold">
            {formatter.format(Number(data?.price))}
          </div>
        )}
=======
      <div className="flex items-center justify-end px-2">
        <div className="font-semibold">
          {formatter.format(Number(data?.price))}
        </div>
>>>>>>> origin/main
      </div>
    </div>
  );
};

export default ProductCard;
