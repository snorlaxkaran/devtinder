import express from "express";
import { userRouter } from "./routes/user";
import { profileRouter } from "./routes/profile";
import { requestRouter } from "./routes/request";
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/profile", profileRouter);
app.use("/api/v1/request", requestRouter);

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
