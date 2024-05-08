const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
// Define your routes here

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
