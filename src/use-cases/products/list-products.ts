import { Product } from "../../@types/product";
import { productsRepository } from "../../repositories/products-repository";

export function listProducts(): Product[] {
  return productsRepository.findAll();
}
