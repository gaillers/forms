const User = require('../models/Users');
const bcrypt = require('bcrypt');

// Register
module.exports.register = async (req, res) => {
    try {
        const { FirsName, LastName, Email, Age, Phone, Password} = req.body

        const isUsed = await User.findOne({ Email })

        if (isUsed) {
            return res.json({
                message: "The user already there's"
            })
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(Password, salt)

        const newUser = new User({
            Email,
            Password: hash,
        })

    } catch (error) { }
}

// Login 
module.exports.login = async (req, res) => {
    try {
    } catch (error) { }
}

// Get ME
module.exports.getMe = async (req, res) => {
    try {
    } catch (error) { }
}