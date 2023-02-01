import { Schema, model } from "mongoose";

const TransactionsSchema = new Schema(
  {
    wallet_id: { type: Schema.Types.ObjectId, ref: "Wallets" },
    walletName: { type: String, required: true },
    type: { type: String, required: true },
    category: { type: String, required: true },
    sum: { type: Number },
  },
  { timestamps: true }
);

export const TransactionsModel = model("Transactions", TransactionsSchema);
