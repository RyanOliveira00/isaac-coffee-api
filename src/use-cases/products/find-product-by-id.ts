import { Product } from "../../@types/product";
import { productsRepository } from "../../repositories/products-repository";

export function findProductById(id: string): Product | undefined {
  return productsRepository.findById(id);
}
