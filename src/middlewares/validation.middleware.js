import { body, validationResult } from "express-validator";
import ApiError from "../exceptions/api.error.js";

export const registerValidation = () => {
  return [
    body("username")
      .isLength({ min: 3, max: 32 })
      .withMessage("must be at least 3 chars long, max 32")
      .isLowercase()
      .withMessage("must be a lowercase chars"),
    body("email").toLowerCase().isEmail().withMessage("Type correct email"),
    body("password")
      .isLength({ min: 5, max: 32 })
      .withMessage("must be at least 5 chars long, max 32"),
  ];
};

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  return next(ApiError.BadRequest("Validation error", errors.array()));
};
