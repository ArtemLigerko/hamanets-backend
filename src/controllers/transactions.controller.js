import {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
} from "../services/transactions.services.js";

export const createOneTransaction = async (req, res) => {
  try {
    const response = await createOne(req.body);
    return res.json(response);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const getAllTransactions = async (req, res) => {
  try {
    const response = await getAll();
    return res.json(response);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const getOneTransaction = async (req, res) => {
  try {
    const response = await getOne(req.params.id);
    return res.json(response);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const updateOneTransaction = async (req, res) => {
  try {
    const response = await updateOne(req.body);
    return res.json(response);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const deleteOneTransaction = async (req, res) => {
  try {
    const response = await deleteOne(req.params.id);
    return res.json(response);
  } catch (e) {
    res.status(500).json(e.message);
  }
};
