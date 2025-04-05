import { Router } from "express";

export const userRouter = Router();

userRouter.post("/sign-up", (req, res) => {
  res.json({ message: "Hello sign up" });
});
// - POST /sign-in

userRouter.post("/sign-in", (req, res) => {
  res.json({ message: "Hello sign in" });
});
