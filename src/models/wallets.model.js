import { model, Schema } from "mongoose";

const WalletsSchema = new Schema({
  id: { type: String, required: true },
  walletName: { type: String, required: true },
  createdAt: { type: Date },
  updatededAt: { type: Date },
  initialSum: { type: Number, require: true },
  total: { type: Number, require: true },
});

export const WalletsModel = model("Wallets", WalletsSchema);
