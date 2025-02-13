import express from "express";
import {
  comparePassword,
  hashPassword,
} from "../middlewares/argon2.middleware";
import { getUserByEmail } from "../middlewares/user.middleware";
import { login } from "../modules/authentication/authActions";

const router = express.Router();

router.post("/api/auth", getUserByEmail, comparePassword, login);

export default router;
