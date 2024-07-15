// server.js
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Middleware to allow CORS (for development purposes)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/api/sweden-gdp', async (req, res) => {
    try {
        const api_key = '1efd7ba69f38454:oq3f1l41uvwdvgq';
        const swedenUrl = `https://api.tradingeconomics.com/historical/country/Sweden/indicator/gdp?c=${api_key}`;

        const response = await axios.get(swedenUrl);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching Sweden GDP data:', error.message);
        res.status(500).json({ error: 'Failed to fetch Sweden GDP data' });
    }
});

app.get('/api/mexico-gdp', async (req, res) => {
    try {
        const api_key = '1efd7ba69f38454:oq3f1l41uvwdvgq';
        const mexicoUrl = `https://api.tradingeconomics.com/historical/country/mexico/indicator/gdp?c=${api_key}`;

        const response = await axios.get(mexicoUrl);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching Mexico GDP data:', error.message);
        res.status(500).json({ error: 'Failed to fetch Mexico GDP data' });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
