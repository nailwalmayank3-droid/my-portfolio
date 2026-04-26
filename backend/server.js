const express = require("express");
const app = express();

app.use(express.json());

let messages = [];

// GET messages
app.get("/api/message", (req, res) => {
  res.json(messages);
});

// POST message
app.post("/api/message", (req, res) => {
  messages.push({ text: req.body.text });
  res.sendStatus(200);
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});