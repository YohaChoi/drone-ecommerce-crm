// services/products.ts
"use server";

import { IProduct, Product } from "../models/product.model";
import { connectToDB } from "../mongo";

// Create a product
interface CreateProductParams {
  name: string;
  subtitle: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
}

export async function createProduct({
  name,
  subtitle,
  description,
  price,
  stock,
  imageUrl,
}: CreateProductParams): Promise<void> {
  try {
    console.log('llego')
    connectToDB();

     await Product.create({
      name,
      subtitle,
      description,
      price,
      stock,
      imageUrl,
    })
  } catch (error: any) {
    throw new Error(`Failed to create product: ${error.message}`);
  }
}

// Fetch all products
export async function getProducts() {
  try {
    connectToDB();

    return await Product.find({});
  } catch (error: any) {
    throw new Error(`Failed to fetch products: ${error.message}`);
  }
}

// Fetch a single product by ID
export async function getProduct(productId: string) {
  try {
    connectToDB();

    return await Product.findById(productId);
  } catch (error: any) {
    throw new Error(`Failed to fetch product: ${error.message}`);
  }
}
