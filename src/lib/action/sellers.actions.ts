"use server";

import { Seller } from "../models/seller.model";
import { connectToDB } from "../mongo";

interface CreateSellerParams {
  name: string;
  phoneNumber: string;
  email: string;
  gender: string;
}

export async function createSeller({
  name,
  phoneNumber,
  email,
  gender
}: CreateSellerParams): Promise<void> {
  try {
    console.log('llego')
    connectToDB();

     await Seller.create({
      name,
      phoneNumber,
      email,
      gender
    })
  } catch (error: any) {
    throw new Error(`Failed to create seller: ${error.message}`);
  }
}

// Fetch all products
export async function getSellers() {
  try {
    connectToDB();

    return await Seller.find({});
  } catch (error: any) {
    throw new Error(`Failed to fetch sellers: ${error.message}`);
  }
}

// Fetch a single product by ID
export async function getSeller(sellerId: string) {
  try {
    connectToDB();

    return await Seller.findById(sellerId);
  } catch (error: any) {
    throw new Error(`Failed to fetch sellers: ${error.message}`);
  }
}
