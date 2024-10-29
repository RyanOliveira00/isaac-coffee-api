export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: "coffee" | "food" | "merchandise";
  stock: number;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
};
