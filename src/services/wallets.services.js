import { WalletsModel } from "../models/wallets.model.js";

export const createOne = async (wallet) => {
  const createdWallet = await WalletsModel.create(wallet);

  return createdWallet;
};

export const getAll = async (id) => {
  if (!id) {
    throw new Error("Id not found");
  }
  const Wallets = await WalletsModel.find({ user_id: id });
  return Wallets;
};

// export const getOne = async (id) => {
//   if (!id) {
//     throw new Error("Id not found");
//   }
//   const Wallet = await WalletsModel.findById(id);
//   return Wallet;
// };

export const updateOne = async (wallet) => {
  if (!wallet.id) {
    throw new Error("Id not found");
  }
  const updatedWallet = await WalletsModel.findOneAndUpdate(
    { _id: wallet.id },
    { $inc: { total: wallet.total } }, // increase wallet total by transaction sum
    {
      new: true,
    }
  );
  return updatedWallet;
};

export const deleteOne = async (id) => {
  if (!id) {
    throw new Error("Id not found!");
  }
  const deletedWallet = await WalletsModel.findOneAndDelete({ _id: id });
  return deletedWallet;
};
