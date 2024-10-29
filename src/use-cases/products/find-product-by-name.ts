import { Product } from "../../@types/product";
import { productsRepository } from "../../repositories/products-repository";

export function findProductByName(name: string): Product | undefined {
  return productsRepository.findAll().find((product) => product.name.toLowerCase().includes(name.toLowerCase()));
}
