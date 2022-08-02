const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        FirsName: {
            type: String,
            required: true,
            unique: true,
        },
        LastName: {
            type: String,
            required: true,
            unique: true,
        },
        Email: {
            type: String,
            required: true,
            unique: true,
        },
        Age: {
            type: Number,
            required: true,
            unique: true,
        },
        Phone: {
            type: Number,
            required: true,
            unique: true,
        },
        Password: {
            type: String,
            required: true,
        },
    },
    { timeseries: true },
)

module.exports = mongoose.model('User', UserSchema)