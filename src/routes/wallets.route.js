import { Router } from "express";
import {
  createOneWallet,
  getAllWallets,
  // getOneWallet,
  updateOneWallet,
  deleteOneWallet,
} from "../controllers/wallets.controller.js";

const walletsRoutes = new Router();

walletsRoutes.post("/", createOneWallet);
walletsRoutes.get("/", getAllWallets);
// walletsRoutes.get("/:id", getOneWallet);
walletsRoutes.put("/", updateOneWallet);
walletsRoutes.delete("/:id", deleteOneWallet);

export default walletsRoutes;
