const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');

const corsOptions = {
    origin: ['http://localhost:3000', 'http://88.198.112.156:3000', 'http://88.198.112.156:8080'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true,
    optionsSuccessStatus: 200
};

// Global middlewares
app.use(cors(corsOptions))
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 8080;

// API Routes

app.listen(PORT, () => {
    console.log(`Server running on PORT No ${PORT}`)
});


