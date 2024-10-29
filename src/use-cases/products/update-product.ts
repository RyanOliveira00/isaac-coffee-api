import { Product } from "../../@types/product";
import { productsRepository } from "../../repositories/products-repository";

export function updateProduct(
  id: string,
  updates: Partial<Omit<Product, "id" | "createdAt" | "updatedAt">>,
): Product | undefined {
  const product = productsRepository.findById(id);
  if (!product) return undefined;

  const updatedProduct = {
    ...product,
    ...updates,
    updatedAt: new Date(),
  };

  productsRepository.update(id, updatedProduct);
  return updatedProduct;
}
