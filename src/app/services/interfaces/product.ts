export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  taxRate: number;
  currency: "USD"|"EUR"|"GBP";
  username: string;
}

export type ProductRequest = Omit<Product,"id"> & {username: string};

export type ProductResponse = Omit<Product,"id" | "taxRate">
