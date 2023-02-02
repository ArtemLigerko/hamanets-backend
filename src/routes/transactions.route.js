import { Router } from "express";
import {
  createOneTransaction,
  getAllTransactions,
  getOneTransaction,
  updateOneTransaction,
  deleteOneTransaction,
} from "../controllers/transactions.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const transactionsRoutes = new Router();

transactionsRoutes.post("/", authMiddleware, createOneTransaction);
transactionsRoutes.get("/", authMiddleware, getAllTransactions);
transactionsRoutes.get("/:id", authMiddleware, getOneTransaction);
transactionsRoutes.put("/", authMiddleware, updateOneTransaction);
transactionsRoutes.delete("/:id", authMiddleware, deleteOneTransaction);

export default transactionsRoutes;
