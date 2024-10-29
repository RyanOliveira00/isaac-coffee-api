import { productsRepository } from "../../repositories/products-repository";

export function removeProduct(id: string): boolean {
  return productsRepository.remove(id);
}
