"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileRouter = void 0;
const express_1 = require("express");
exports.profileRouter = (0, express_1.Router)();
exports.profileRouter.get("/", (req, res) => {
    res.json({ profile: "user 1" });
});
exports.profileRouter.post("/", (req, res) => {
    res.json({
        message: "Post user 1",
    });
});
exports.profileRouter.patch("/", (req, res) => {
    res.json({
        message: "Patch user 1",
    });
});
exports.profileRouter.delete("/", (req, res) => {
    res.json({
        message: "Delete user 1",
    });
});
