import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  // wallets: { types: Schema.Types.ObjectId, ref: "Wallets" },
  // transactions: { types: Schema.Types.ObjectId, ref: "Transactions" },
});

export const UserModel = model("User", UserSchema);
