const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/mydb')
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Schema
const Message = mongoose.model('Message', {
  text: String
});

// Save message
app.post('/api/message', async (req, res) => {
  const msg = new Message({ text: req.body.text });
  await msg.save();
  res.send("Saved");
});

// Get messages
app.get('/api/message', async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});