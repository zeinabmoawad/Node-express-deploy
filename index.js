// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for JSON responses
app.use(express.json());

// Simple route
app.get('/api', (req, res) => {
  res.json({ status: 'success', message: 'API is working!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
