import Router from "express";
import {
  createOneTransaction,
  getAllTransactions,
  getOneTransaction,
  updateOneTransaction,
  deleteOneTransaction,
} from "./todo.controller.js.js";

const router = new Router();

router.post("/todos", createOneTransaction);
router.get("/todos", getAllTransactions);
router.get("/todos/:id", getOneTransaction);
router.put("/todos", updateOneTransaction);
router.delete("/todos/:id", deleteOneTransaction);

export default router;
