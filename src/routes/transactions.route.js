import { Router } from "express";
import {
  createOneTransaction,
  getAllTransactions,
  getOneTransaction,
  updateOneTransaction,
  deleteOneTransaction,
} from "../controllers/transactions.controller.js";

const transactionsRoutes = new Router();

transactionsRoutes.post("/", createOneTransaction);
transactionsRoutes.get("/", getAllTransactions);
transactionsRoutes.get("/:id", getOneTransaction);
transactionsRoutes.put("/", updateOneTransaction);
transactionsRoutes.delete("/:id", deleteOneTransaction);

export default transactionsRoutes;
