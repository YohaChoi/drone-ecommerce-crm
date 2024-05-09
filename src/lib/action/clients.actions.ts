"use server";

import { Client } from "../models/client.model";
import { connectToDB } from "../mongo";

// Create a product
interface CreateClientParams {
  name: string;
  phoneNumber: string;
  email: string;
  gender: string;
}

export async function createClient({
  name,
  phoneNumber,
  email,
  gender
}: CreateClientParams): Promise<void> {
  try {
    console.log('llego')
    connectToDB();

     await Client.create({
      name,
      phoneNumber,
      email,
      gender
    })
  } catch (error: any) {
    throw new Error(`Failed to create client: ${error.message}`);
  }
}

// Fetch all products
export async function getClients() {
  try {
    connectToDB();

    return await Client.find({});
  } catch (error: any) {
    throw new Error(`Failed to fetch products: ${error.message}`);
  }
}

// Fetch a single product by ID
export async function getClient(clientId: string) {
  try {
    connectToDB();

    return await Client.findById(clientId);
  } catch (error: any) {
    throw new Error(`Failed to fetch product: ${error.message}`);
  }
}
