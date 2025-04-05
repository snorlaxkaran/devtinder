import { Router } from "express";

export const profileRouter = Router();

profileRouter.get("/", (req, res) => {
  res.json({ profile: "user 1" });
});

profileRouter.post("/", (req, res) => {
  res.json({
    message: "Post user 1",
  });
});

profileRouter.patch("/", (req, res) => {
  res.json({
    message: "Patch user 1",
  });
});

profileRouter.delete("/", (req, res) => {
  res.json({
    message: "Delete user 1",
  });
});
