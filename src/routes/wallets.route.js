import { Router } from "express";
import {
  createOneWallet,
  getAllWallets,
  // getOneWallet,
  updateOneWallet,
  deleteOneWallet,
} from "../controllers/wallets.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const walletsRoutes = new Router();

walletsRoutes.post("/", authMiddleware, createOneWallet);
walletsRoutes.get("/", authMiddleware, getAllWallets);
// walletsRoutes.get("/:id", getOneWallet);
walletsRoutes.put("/", authMiddleware, updateOneWallet);
walletsRoutes.delete("/:id", authMiddleware, deleteOneWallet);

export default walletsRoutes;
