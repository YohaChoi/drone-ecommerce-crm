import mongoose, { Schema, Document } from "mongoose";

export interface ISeller extends Document {
  name: string;
  phoneNumber: string;
  email: string;
  gender: string;
}

const sellerSchema = new Schema<ISeller>({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true},
  email: { type: String, required: true},
  gender: { type: String, required: true}
});

export const Seller = mongoose.models.Seller || mongoose.model<ISeller>("Seller", sellerSchema);

