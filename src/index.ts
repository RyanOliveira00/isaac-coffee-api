import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";

import { listProducts } from "./use-cases/products/list-products";
import { findProductById } from "./use-cases/products/find-product-by-id";
import { findProductByName } from "./use-cases/products/find-product-by-name";
import { createProduct } from "./use-cases/products/create-product";
import { updateProduct } from "./use-cases/products/update-product";
import { removeProduct } from "./use-cases/products/remove-product";
import { buyProduct } from "./use-cases/products/buy-product";

const app = new Elysia()
  .use(
    swagger({
      documentation: {
        info: {
          title: "Isaac Coffee API",
          version: "1.0.0",
        },
      },
    }),
  )
  .get("/products", () => listProducts())
  .get("/products/:id", ({ params: { id } }) => {
    const product = findProductById(id);
    if (!product) throw new Error("Product not found");
    return product;
  })
  .get("/products/search/:name", ({ params: { name } }) => {
    const product = findProductByName(name);
    if (!product) throw new Error("Product not found");
    return product;
  })
  .post("/products", ({ body }) => createProduct(body), {
    body: t.Object({
      name: t.String(),
      price: t.Number(),
      description: t.String(),
      category: t.Union([t.Literal("coffee"), t.Literal("food"), t.Literal("merchandise")]),
      imageUrl: t.String(),
      stock: t.Number(),
    }),
  })
  .put(
    "/products/:id",
    ({ params: { id }, body }) => {
      const product = updateProduct(id, body);
      if (!product) throw new Error("Product not found");
      return product;
    },
    {
      body: t.Partial(
        t.Object({
          name: t.String(),
          price: t.Number(),
          description: t.String(),
          category: t.Union([t.Literal("coffee"), t.Literal("food"), t.Literal("merchandise")]),
          stock: t.Number(),
        }),
      ),
    },
  )
  .delete("/products/:id", ({ params: { id } }) => {
    const removed = removeProduct(id);
    if (!removed) throw new Error("Product not found");
    return { message: "Product removed successfully" };
  })
  .post(
    "/products/:id/buy",
    ({ params: { id }, body }) => {
      const product = buyProduct(id, body.quantity);
      if (!product) throw new Error("Product not found or insufficient stock");
      return product;
    },
    {
      params: t.Object({
        id: t.String(),
      }),
      body: t.Object({
        quantity: t.Number(),
      }),
    },
  )
  .listen(3000);

console.log(`🚀 Server running at ${app.server?.hostname}:${app.server?.port}`);
