"use client";

import usePreviewModal from "@/zustand-store/use-preview-modal";
import Modal from "./modal";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import useCart from "@/zustand-store/use-cart";

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function PreviewModal() {
  const { isOpen, onClose } = usePreviewModal();
  const cart = useCart();

  const product = usePreviewModal((state) => state.data);

  if (!product) {
    return null;
  }
  const onAddtoCart /* : MouseEventHandler<HTMLButtonElement> */ = () => {
    // event.stopPropagation();

    cart.addItem(product);
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="flex w-full h-48 items-start gap-6  bg-gray-100">
      
        <div className="relative flex-1 w-full h-full -mt-2">
          <Image
            src={product.images[0].url}
            fill
            alt="pic"
            className="absolute object-cover"
          />
        </div>

        {/* ..... */}
        <div className="flex-1 -mt-2">
          <h1 className="text-lg capitalize "> {product.name} </h1>

          <div className="mt-2 flex  justify-start items-center gap-x-2 ">
            <div className=" ">
              <div className="font-semibold">
                {formatter.format(Number(product?.price))}
              </div>
            </div>
            <p className="text-neutral-600 text-xs ">* inc. VAT</p>
          </div>

          <hr className="my-1" />
          <div className="flex items-center  gap-x-2">
            <h3 className="text-xs">Size: </h3>

            <div className="py-1 ">{product?.size?.name}</div>
          </div>
          <div className="flex items-center gap-x-2 my-1">
            <h3 className="text-xs">Selected Color: </h3>
            <div
              className="h-6 w-6 rounded-full border border-gray-600"
              style={{ backgroundColor: product?.color?.value }}
            ></div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-x-3 w-full">
            <button
              onClick={onAddtoCart}
              className="flex items-center  justify-center gap-1  
        rounded bg-gray-300 p-1 transition duration-500 hover:bg-gray-400 w-full   whitespace-nowrap "
            >
              <p>Add To Cart </p>
              <ShoppingCart />
            </button>
          </div>
        </div>

        {/*  */}
      </div>
    </Modal>
  );
}

export default PreviewModal;
