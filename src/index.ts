import express from "express";
const PORT = process.env.PORT || 3000;
const app = express();

app.get("/signup", (req, res) => {
  res.json({ message: "Hell from the server" });
});

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
