export interface Billboard {
    id: string;
    label: string;
    imageUrl: string;
  }
  export interface Category {
    id: string;
    name: string;
    billboard: Billboard;
    products:Product[]
  }
  export interface Gender {
    id: string;
    genderName: string;

  }
  
  export interface Product {
    id: string;
    category: Category;
    name: string;
    price: string;
    discountedPrice:string,
    description:string;
    isFeatured: boolean;
    size: Size;
    sizeId:string;
    brandId:string;
    colorId:string
    color: Color;
    brand:Brand;
    images: Image[];
  }
  
  export interface Image {
    id: string;
    url: string;
  }
  export interface Size {
    id: string;
    name: string;
    category:Category;
    value: string;
  }
  export interface Color {
    id: string;
    name: string;
    value: string;
  }
  export interface Brand  {
    id: string;
    name: string;

  }
  