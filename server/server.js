const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const authRoute = require('./routes/auth');

const app = express();
dotenv.config();

const PORT = process.env.PORT;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NANE = process.env.DB_NANE;

app.use(cors())
app.use(express.json())
app.listen(PORT, () => console.log(`Running on port: ${PORT}`))

app.get('/', (req, res) => {
    res.json('Connected')
})

app.use('/api/auth', authRoute)

async function start() {
    try {
        await mongoose.connect(
            `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.g4cql.mongodb.net/${DB_NANE}?retryWrites=true&w=majority`,
            console.log('MongoDB connected')
        )
    } catch (error) {
        console.log(error)
    }
}
start()

