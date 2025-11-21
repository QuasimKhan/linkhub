import express from "express";
import {
    login,
    signup,
    verifyEmail,
    googleAuthRedirect,
    googleAuthCallback,
    getMe,
    logout,
} from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.get("/verify", verifyEmail);
authRouter.post("/login", login);
authRouter.get("/google", googleAuthRedirect);
authRouter.get("/google/callback", googleAuthCallback);
authRouter.get("/me", getMe);
authRouter.get("/logout", logout);
export default authRouter;
