import { Elysia } from "elysia";
import {
  ProductDto,
  BuyProductDto,
  ProductsResponseDto,
  ProductResponseDto,
  MessageResponseDto,
} from "../models/product.model";
import { generateId } from "../libs/utils";
import { productsRepository } from "../repositories/products-repository";

export const productsController = new Elysia({ prefix: "/products", tags: ["Products"] })
  .get("/", () => productsRepository.findAll(), {
    response: ProductsResponseDto,
    detail: {
      summary: "List all products",
      tags: ["products"],
    },
  })

  .get(
    "/:id",
    ({ params: { id } }) => {
      const product = productsRepository.findById(id);
      if (!product) throw new Error("Product not found");
      return product;
    },
    {
      response: ProductResponseDto,
      detail: {
        summary: "Find product by ID",
        tags: ["products"],
      },
    },
  )

  .get(
    "/search/:name",
    ({ params: { name } }) => {
      const product = productsRepository.findByName(name);
      if (!product) throw new Error("Product not found");
      return product;
    },
    {
      response: ProductResponseDto,
      detail: {
        summary: "Find product by name",
        tags: ["products"],
      },
    },
  )

  .post(
    "/",
    ({ body }) => {
      const product = {
        ...body,
        id: generateId(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      productsRepository.add(product);
      return product;
    },
    {
      body: ProductDto,
      response: ProductResponseDto,
      detail: {
        summary: "List all products",
        tags: ["products"],
      },
    },
  )

  .put(
    "/:id",
    ({ params: { id }, body }) => {
      const product = productsRepository.findById(id);
      if (!product) throw new Error("Product not found");

      const updatedProduct = {
        ...product,
        ...body,
        updatedAt: new Date(),
      };

      productsRepository.update(id, updatedProduct);
      return updatedProduct;
    },
    {
      body: ProductDto,
      response: ProductResponseDto,
      detail: {
        summary: "Update product by ID",
        tags: ["products"],
      },
    },
  )

  .delete(
    "/:id",
    ({ params: { id } }) => {
      const removed = productsRepository.remove(id);
      if (!removed) throw new Error("Product not found");
      return { message: "Product removed successfully" };
    },
    {
      response: MessageResponseDto,
      detail: {
        summary: "Remove product by ID",
        tags: ["products"],
      },
    },
  )

  .post(
    "/:id/buy",
    ({ params: { id }, body }) => {
      const product = productsRepository.findById(id);
      if (!product) throw new Error("Product not found");
      if (product.stock < body.quantity) throw new Error("Insufficient stock");

      const updatedProduct = {
        ...product,
        stock: product.stock - body.quantity,
        updatedAt: new Date(),
      };

      productsRepository.update(id, updatedProduct);
      return updatedProduct;
    },
    {
      body: BuyProductDto,
      response: ProductResponseDto,
      detail: {
        summary: "Buy product",
        tags: ["products"],
      },
    },
  );
