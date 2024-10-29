import { Product } from "../@types/product";

class ProductsRepository {
  private products: Product[] = [
    {
      id: "1",
      name: "Café Espresso",
      price: 5.0,
      description: "Café espresso tradicional",
      category: "coffee",
      stock: 100,
      imageUrl: "https://storage.googleapis.com/isaac-coffee/espresso.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  findAll(): Product[] {
    return this.products;
  }

  add(product: Product): void {
    this.products.push(product);
  }

  remove(id: string): boolean {
    const initialLength = this.products.length;
    this.products = this.products.filter((product) => product.id !== id);
    return this.products.length !== initialLength;
  }

  clear(): void {
    this.products = [];
  }

  findById(id: string): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  update(id: string, updates: Partial<Product>): void {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...updates };
    }
  }
}

export const productsRepository = new ProductsRepository();
