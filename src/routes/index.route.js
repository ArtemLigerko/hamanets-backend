import { Router } from "express";
import transactionsRoutes from "./transactions.route.js";
import walletsRoutes from "./wallets.route.js";

const router = new Router();

router.use("/transactions", transactionsRoutes);
router.use("/wallets", walletsRoutes);

export default router;
