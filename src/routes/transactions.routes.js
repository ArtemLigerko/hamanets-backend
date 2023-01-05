import Router from "express";
import {
  createOneTransaction,
  getAllTransactions,
  getOneTransaction,
  updateOneTransaction,
  deleteOneTransaction,
} from "../controllers/transactions.controller.js";

const router = new Router();

router.post("/transactions", createOneTransaction);
router.get("/transactions", getAllTransactions);
router.get("/transactions/:id", getOneTransaction);
router.put("/transactions", updateOneTransaction);
router.delete("/transactions/:id", deleteOneTransaction);

export default router;
