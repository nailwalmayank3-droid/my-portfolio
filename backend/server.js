const express = require('express');

const app = express();

app.get('/api/message', (req, res) => {
    res.json({ message: "Hello from Backend 🚀" });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});