import { WalletsModel } from "../models/wallets.model.js";

export const createOne = async (wallet) => {
  const createdWallet = await WalletsModel.create(wallet);
  return createdWallet;
};

export const getAll = async () => {
  const Wallets = await WalletsModel.find();
  return Wallets;
};

// export const getOne = async (id) => {
//   if (!id) {
//     throw new Error("Id not found");
//   }
//   const Wallet = await WalletsModel.findById(id);
//   return Wallet;
// };

// export const updateOne = async (wallet) => {
//   if (!wallet._id) {
//     throw new Error("Id not found");
//   }
//   const updatedWallet = await WalletsModel.findByIdAndUpdate(
//     wallet._id,
//     wallet,
//     {
//       new: true,
//     }
//   );
//   return updatedWallet;
// };

export const deleteOne = async (id) => {
  if (!id) {
    throw new Error("Id not found!");
  }
  const deletedWallet = await WalletsModel.findByIdAndDelete(id);
  return deletedWallet;
};
