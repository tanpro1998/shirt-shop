import express from "express";
const authRouter = express.Router();

import {
  register,
  login,
  refresh,
  logout,
} from "../controllers/authController.js";

authRouter.post("/register", register);

authRouter.post("/login", login);

authRouter.post("/refresh", refresh);

authRouter.post("/logout", logout);

export default authRouter;
