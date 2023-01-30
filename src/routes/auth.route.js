import Router from "express";
import {
  registration,
  login,
  logout,
  refresh,
  getUsers,
} from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import {
  registerValidation,
  validate,
} from "../middlewares/validation.middleware.js";

const authRouter = new Router();

authRouter.post("/registration", registerValidation(), validate, registration);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.get("/refresh", refresh);
authRouter.get("/users", authMiddleware, getUsers);

export default authRouter;
