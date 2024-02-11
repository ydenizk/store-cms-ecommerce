export interface Billboard {
    id: string;
    label: string;
    imageUrl: string;
  }
  export interface Category {
    id: string;
    name: string;
    billboard: Billboard;
<<<<<<< HEAD
    products:Product[]
=======
>>>>>>> origin/main
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
<<<<<<< HEAD
    discountedPrice:string,
    description:string;
    isFeatured: boolean;
    size: Size;
    sizeId:string;
    brandId:string;
    colorId:string
    color: Color;
    brand:Brand;
=======
    isFeatured: boolean;
    genderName:string
    size: Size;
    color: Color;
>>>>>>> origin/main
    images: Image[];
  }
  
  export interface Image {
    id: string;
    url: string;
  }
  export interface Size {
    id: string;
    name: string;
<<<<<<< HEAD
    category:Category;
=======
>>>>>>> origin/main
    value: string;
  }
  export interface Color {
    id: string;
    name: string;
    value: string;
  }
<<<<<<< HEAD
  export interface Brand  {
    id: string;
    name: string;

  }
=======
>>>>>>> origin/main
  