import { Router } from "express";

export const requestRouter = Router();

requestRouter.post("/send-request", (req, res) => {
  res.json({
    message: "Ignore/ Send request ''/random user",
  });
});

requestRouter.post("/overview-req", (req, res) => {
  res.json({
    message: "Accept or reject the request's",
  });
});

requestRouter.get("/requests", (req, res) => {
  res.json({
    message: "Show all the requests",
  });
});

requestRouter.get("/connections", (req, res) => {
  res.json({
    message: "Show all my connections/ friends whom i accepted requests",
  });
});
