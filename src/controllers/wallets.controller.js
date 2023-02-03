import {
  createOne,
  getAll,
  // getOne,
  updateOne,
  deleteOne,
} from "../services/wallets.services.js";

export const createOneWallet = async (req, res) => {
  try {
    const response = await createOne(req.body);
    return res.json(response);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const getAllWallets = async (req, res) => {
  try {
    const response = await getAll(req.user.id);
    return res.json(response);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

// export const getOneWallet = async (req, res) => {
//   try {
//     const response = await getOne(req.params.id);
//     return res.json(response);
//   } catch (e) {
//     res.status(500).json(e.message);
//   }
// };

export const updateOneWallet = async (req, res) => {
  try {
    const response = await updateOne(req.body);
    return res.json(response);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const deleteOneWallet = async (req, res) => {
  try {
    const response = await deleteOne(req.params.id);
    return res.json(response);
  } catch (e) {
    res.status(500).json(e.message);
  }
};
