const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const { User } = require('./models'); // Adjust the import according to your structure

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

app.post('/users', async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).json(user);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
