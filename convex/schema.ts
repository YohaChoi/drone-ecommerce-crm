import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  clients: defineTable({
    email: v.string(),
    gender: v.string(),
    name: v.string(),
    phoneNumber: v.string(),
  }),
  products: defineTable({
    description: v.string(),
    imageUrl: v.string(),
    name: v.string(),
    price: v.float64(),
    stock: v.float64(),
    subtitle: v.string(),
  }),
  sellers: defineTable({
    commisionPercentage: v.float64(),
    email: v.string(),
    gender: v.string(),
    name: v.string(),
    phoneNumber: v.string(),
  }),
  orders: defineTable({
    byClientId: v.string(),
    productId: v.string(),
    productName: v.string(),
    clientName: v.string(),
    quantity: v.number(),
    total: v.number(),
    status: v.string(),
  })
});