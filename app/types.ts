export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
  products: Product[]; // Assuming the latest version includes products within categories
}


export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  discountedPrice: string; // Included in the latest version
  description: string; // Included in the latest version
  isFeatured: boolean;
  size: Size;
  sizeId: string; // Included in the latest version
  colorId: string; // Included in the latest version
  brandId: string; // Included in the latest version
  color: Color;
  brand: Brand; // Assuming Brand is a part of the product model in the latest version
  images: Image[];

}

export interface Image {
  id: string;
  url: string;
}

export interface Size {
  id: string;
  name: string;
  category: Category; // Included assuming sizes are category-specific in the latest version
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}

export interface Brand {
  id: string;
  name: string;
  value: string;
}
