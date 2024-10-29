import { t } from "elysia";

export const ProductDto = t.Object({
  name: t.String(),
  price: t.Number(),
  description: t.String(),
  category: t.Union([t.Literal("coffee"), t.Literal("food"), t.Literal("merchandise")]),
  stock: t.Number(),
  imageUrl: t.String(),
});

export const ProductResponseDto = t.Object({
  id: t.String(),
  name: t.String(),
  price: t.Number(),
  description: t.String(),
  category: t.Union([t.Literal("coffee"), t.Literal("food"), t.Literal("merchandise")]),
  stock: t.Number(),
  imageUrl: t.String(),
  createdAt: t.Date(),
  updatedAt: t.Date(),
});

export const BuyProductDto = t.Object({
  quantity: t.Number(),
});

export const ProductsResponseDto = t.Array(ProductResponseDto);
export const MessageResponseDto = t.Object({
  message: t.String(),
});
