import { model, Schema } from "mongoose";

const WalletsSchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: "User" },
    walletName: { type: String, required: true },
    initialSum: { type: Number, require: true },
    total: { type: Number, require: true },
  },
  { timestamps: true } //createdAt, updatedAt
);

export const WalletsModel = model("Wallets", WalletsSchema);
