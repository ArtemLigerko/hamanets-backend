import { Router } from "express";
import authRouter from "./auth.route.js";
import transactionsRoutes from "./transactions.route.js";
import walletsRoutes from "./wallets.route.js";

const router = new Router();

router.use("/auth", authRouter);
router.use("/transactions", transactionsRoutes);
router.use("/wallets", walletsRoutes);

export default router;
