import { model, Schema } from "mongoose";

const WalletsSchema = new Schema({
  id: { type: String, required: true },
  walletId: { type: String, required: true },
  walletName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatededAt: { type: Date, default: Date.now },
  sum: { type: Number },
});

export const WalletsModel = model("Wallets", WalletsSchema);
