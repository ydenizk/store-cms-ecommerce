import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getBrands from "@/actions/get-brands";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import React from "react";
import Filter from "./filter";
import { NoResults } from "@/components/ui/no-results";
import ProductCard from "@/components/productCard";
import FilterColor from "./filterColor";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
    brandId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
    brandId: searchParams.brandId,
  });

  const sizes = await getSizes({ categoryId: params.categoryId });
  const brands = await getBrands();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);




  return (
    <div className="bg-white p-4 w-full">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 my-16">
          <div className="w-full flex gap-8">
            <div className="block w-1/4 border-r pr-1">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="brandId" name="Brands" data={brands} />
              <FilterColor valueKey="colorId" name="Colors" data={colors} />
            </div>

            <div className="  w-full my-10 ">
              {products.length === 0 && <NoResults />}
              <div className="  gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center w-full">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
