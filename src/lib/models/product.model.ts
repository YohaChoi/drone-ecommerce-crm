// models/product.model.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  subtitle: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
}

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  imageUrl: { type: String, required: true },
});

export const Product = mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema);

