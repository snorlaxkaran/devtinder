"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post("/sign-up", (req, res) => {
    res.json({ message: "Hello sign up" });
});
// - POST /sign-in
exports.userRouter.post("/sign-in", (req, res) => {
    res.json({ message: "Hello sign in" });
});
