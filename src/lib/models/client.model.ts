import mongoose, { Schema, Document } from "mongoose";

export interface IClient extends Document {
  name: string;
  phoneNumber: string;
  email: string;
  gender: string;
}

const clientSchema = new Schema<IClient>({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true},
  email: { type: String, required: true},
  gender: { type: String, required: true}
});

export const Client = mongoose.models.Client || mongoose.model<IClient>("Client", clientSchema);

