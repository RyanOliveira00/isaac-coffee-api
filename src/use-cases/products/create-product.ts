import { Product } from "../../@types/product";
import { productsRepository } from "../../repositories/products-repository";

export function createProduct(product: Omit<Product, "id" | "createdAt" | "updatedAt">): Product {
  const newProduct: Product = {
    ...product,
    id: crypto.randomUUID(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  productsRepository.add(newProduct);
  return newProduct;
}
