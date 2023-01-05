import mongoose, { Schema, model } from "mongoose";

const TransactionsSchema = new Schema({
  // id: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatededAt: { type: Date, default: Date.now },
  type: { type: String, required: true },
  category: { type: String, required: true },
  sum: { type: Number },
});

export const TransactionsModel = model("Transactions", TransactionsSchema);
