import { TransactionsModel } from "../models/transactions.model.js";

export const createOne = async (transaction) => {
  const createdTransaction = await TransactionsModel.create(transaction);
  return createdTransaction;
};

export const getAll = async (id) => {
  if (!id) {
    throw new Error("Id not found");
  }
  const transactions = await TransactionsModel.find({
    user_id: id,
    $sort: { updatedAt: -1 },
  });
  return transactions;
};

export const getOne = async (id) => {
  if (!id) {
    throw new Error("Id not found");
  }
  const transaction = await TransactionsModel.findById({ user_id: id });
  return transaction;
};

export const updateOne = async (transaction) => {
  if (!transaction._id) {
    throw new Error("Id not found");
  }
  const updatedTransaction = await TransactionsModel.findByIdAndUpdate(
    transaction._id,
    transaction,
    {
      new: true,
    }
  );
  return updatedTransaction;
};

export const deleteOne = async (id) => {
  if (!id) {
    throw new Error("Id not found!");
  }
  const deletedTransaction = await TransactionsModel.findByIdAndDelete(id);
  return deletedTransaction;
};
