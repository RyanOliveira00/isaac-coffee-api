import { Product } from "../../@types/product";
import { productsRepository } from "../../repositories/products-repository";

export function buyProduct(id: string, quantity: number): Product | undefined {
  const product = productsRepository.findById(id);

  if (!product || product.stock < quantity) {
    return undefined;
  }

  const updatedProduct = {
    ...product,
    stock: product.stock - quantity,
    updatedAt: new Date(),
  };

  productsRepository.update(id, updatedProduct);
  return updatedProduct;
}
