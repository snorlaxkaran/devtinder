"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("./routes/user");
const profile_1 = require("./routes/profile");
const request_1 = require("./routes/request");
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/v1/user", user_1.userRouter);
app.use("/api/v1/profile", profile_1.profileRouter);
app.use("/api/v1/request", request_1.requestRouter);
app.listen(PORT, () => {
    console.log(`App is listening to port ${PORT}`);
});
