// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db');
const Scheme = require('./models/Scheme');

// Initialize Express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
// Get all schemes
app.get('/schemes', async (req, res) => {
    try {
        const schemes = await Scheme.find();
        res.json(schemes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new scheme
app.post('/schemes', async (req, res) => {
    const { name, risk, horizon, tax, investmentType, description } = req.body;

    const scheme = new Scheme({
        name,
        risk,
        horizon,
        tax,
        investmentType,
        description,
    });

    try {
        const newScheme = await scheme.save();
        res.status(201).json(newScheme);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
