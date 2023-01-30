import { validationResult } from "express-validator";
import {
  registrationService,
  loginService,
  logoutService,
  refreshService,
  getAllUsers,
} from "../services/user.service.js";
import ApiError from "../exceptions/api.error.js";

export const registration = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const userData = await registrationService(username, password);
    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.json(userData);
  } catch (e) {
    next(e);
  }
};

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const userData = await loginService(username, password);
    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.json(userData);
  } catch (e) {
    next(e);
  }
};

export const logout = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    const token = await logoutService(refreshToken);
    res.clearCookie("refreshToken");
    return res.json(token);
  } catch (e) {
    next(e);
  }
};

export const refresh = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    const userData = await refreshService(refreshToken);
    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.json(userData);
  } catch (e) {
    next(e);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await getAllUsers();
    return res.json(users);
  } catch (e) {
    next(e);
  }
};
