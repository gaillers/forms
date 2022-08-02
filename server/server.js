const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const authRoute = require('./routes/auth');

const app = express();
dotenv.config();

// Constants
const PORT = process.env.PORT;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NANE = process.env.DB_NANE;

// Middleware
app.use(cors())
app.use(express.json())

// Routers
app.use('/api/auth', authRoute)

async function start() {
    try {
        await mongoose.connect(
            `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.g4cql.mongodb.net/${DB_NANE}?retryWrites=true&w=majority`,
            console.log('MongoDB connected')
        )
        
        app.listen(PORT, () => console.log(`Running on port: ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}
start()

module.exports = app;

