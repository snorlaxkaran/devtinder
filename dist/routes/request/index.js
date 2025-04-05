"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestRouter = void 0;
const express_1 = require("express");
exports.requestRouter = (0, express_1.Router)();
exports.requestRouter.post("/send-request", (req, res) => {
    res.json({
        message: "Ignore/ Send request ''/random user",
    });
});
exports.requestRouter.post("/overview-req", (req, res) => {
    res.json({
        message: "Accept or reject the request's",
    });
});
exports.requestRouter.get("/requests", (req, res) => {
    res.json({
        message: "Show all the requests",
    });
});
exports.requestRouter.get("/connections", (req, res) => {
    res.json({
        message: "Show all my connections/ friends whom i accepted requests",
    });
});
