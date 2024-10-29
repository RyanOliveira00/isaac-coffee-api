import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { productsController } from "./controllers/products.controller";

const app = new Elysia()
  .use(
    swagger({
      documentation: {
        info: {
          title: "Isaac Coffee API",
          version: "1.0.0",
          description: "API for managing coffee shop products",
        },
        tags: [{ name: "products", description: "Product management endpoints" }],
      },
    }),
  )
  .use(productsController)
  .listen(3000);

console.log(`🚀 Server running at ${app.server?.hostname}:${app.server?.port}`);
