import ApiError from "../exceptions/api.error.js";

const errorMiddleware = (err, req, res, next) => {
  console.log("Error by middleware:");
  console.log(err);
  if (err instanceof ApiError) {
    return res
      .status(err.status)
      .json({ message: err.message, errors: err.errors });
  }
  return res.status(500).json({ message: "Unexpected error" });
};

export default errorMiddleware;
