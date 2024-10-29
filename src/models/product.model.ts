import { t } from "elysia";

export const ProductDto = t.Object({
  name: t.String(),
  price: t.Number(),
  description: t.String(),
  category: t.Union([t.Literal("coffee"), t.Literal("food"), t.Literal("merchandise")]),
  stock: t.Number(),
  imageUrl: t.String(),
});

export const BuyProductDto = t.Object({
  quantity: t.Number(),
});
