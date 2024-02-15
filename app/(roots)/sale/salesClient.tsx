import React from 'react'
import Container from '@/components/ui/container';
import ProductCard from '@/components/productCard';
import { Product } from "@/app/types";

interface SalesProps {
    products?: Product[];
    showDiscount?:boolean,
  }

const SalesClient:React.FC<SalesProps> = ({products=[]}) => {
  return (
    <div className="bg-white p-4 w-full">
      <Container>
        <div className="p-4 rounded-md overflow-hidden">
          <div
            className="rounded-md relative  overflow-hidden bg-cover bg-center h-96 max-h-96 w-full"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1476979735039-2fdea9e9e407?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            }}
          >
            <div className="h-full w-full flex justify-end items-start p-8 opacity-90  ">
              <button
                className="font-bold  text-4xl text-right max-w-sm 
          uppercase text-gray-200 px-1 border-r-2  border-l-2 "
              >
                Garage Sale Products
              </button>
            </div>
          </div>
        </div>

        <div className="px-4 my-16">

            <h1 className="text-3xl font-bold ">Garage Sales  </h1>
          <div className="w-full flex gap-8">
            <div className="  w-full my-10 ">
              <div className="  gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center w-full">
                {products.map((product) => {
                  return <ProductCard data={product} key={product.id} showDiscount={true} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SalesClient