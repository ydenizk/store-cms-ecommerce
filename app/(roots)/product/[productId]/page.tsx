import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/ui/productList";
import Container from "@/components/ui/container";
import React from "react";
import Gallery from "@/components/gallery";
import InfoSection from "@/components/ui/info";

interface SingleProductProps {
  params: { productId: string };
}

const SingleProduct: React.FC<SingleProductProps> = async ({ params }) => {
  const product = await getProduct(params.productId);

  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,

  });


  return (
    <div className="bg-white my-10">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-start gap-x-6">
            {/* gallery */}
          <Gallery images={product.images} />
            <div className="mt-10 px-4  sm:mt-16 ">
              {/* info */}
      <InfoSection data={product} />
            </div>
          </div>
          <hr className="my-16 md:my-10 " />
          <ProductList title="Related items" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default SingleProduct;
