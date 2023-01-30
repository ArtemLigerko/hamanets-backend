import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { sendActivationMail } from "./mail.service.js";
import {
  generateTokens,
  saveToken,
  removeToken,
  validateRefreshToken,
  findToken,
} from "./token.service.js";
import UserModel from "../models/user.model.js";
import UserDto from "../dtos/user.dtos.js"; //Dto - data transfer object
import ApiError from "../exceptions/api.error.js";

export const registrationService = async (username, password) => {
  const candidate = await UserModel.findOne({ username });
  if (candidate) {
    // throw new Error(`User with email "${email}" already exist`);
    throw ApiError.BadRequest(`User with user name ${username} already exist`);
  }
  const hashPassword = await bcrypt.hash(password, 3);
  const activationLink = uuidv4();
  console.log(activationLink);

  const user = await UserModel.create({
    username,
    password: hashPassword,
    activationLink,
  });

  const userDto = new UserDto(user); // id, username
  const tokens = generateTokens({ ...userDto });
  await saveToken(userDto.id, tokens.refreshToken);
  return { ...tokens, user: userDto };
};

export const loginService = async (username, password) => {
  const user = await UserModel.findOne({ username });
  if (!user) {
    throw ApiError.BadRequest(`User with login ${username} not found`);
  }
  const isPassEquals = await bcrypt.compare(password, user.password);
  if (!isPassEquals) {
    throw ApiError.BadRequest(`Wrong password`);
  }
  const userDto = new UserDto(user);
  const tokens = generateTokens({ ...userDto });
  await saveToken(userDto.id, tokens.refreshToken);
  return { ...tokens, user: userDto };
};

export const logoutService = async (refreshToken) => {
  const token = await removeToken(refreshToken);
  return token;
};

export const refreshService = async (refreshToken) => {
  if (!refreshToken) {
    throw ApiError.UnauthorizedError();
  }
  const userData = validateRefreshToken(refreshToken);
  const tokenFromDb = await findToken(refreshToken);
  if (!userData || !tokenFromDb) {
    throw ApiError.UnauthorizedError();
  }
  const user = await UserModel.findById(userData.id);
  const userDto = new UserDto(user);
  const tokens = generateTokens({ ...userDto });
  await saveToken(userDto.id, tokens.refreshToken);
  return { ...tokens, user: userDto };
};

export const getAllUsers = async () => {
  const users = await UserModel.find();
  return users;
};
