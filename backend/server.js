const express = require("express");
const app = express();

app.use(express.json());

let messages = [];

// API routes
app.get("/api/message", (req, res) => {
  res.json(messages);
});

app.post("/api/message", (req, res) => {
  messages.push({ text: req.body.text });
  res.sendStatus(200);
});

// health check (for later DevOps feature)
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});