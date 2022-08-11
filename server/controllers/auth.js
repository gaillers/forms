const User = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register
module.exports.register = async (req, res) => {
    try {
        const { FirsName, LastName, Email, Age, Phone, Password } = req.body

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

        await newUser.save()

        res.json({
            newUser, message: 'The registration was successful'
        })

    } catch (error) {
        res.json({ message: 'Registration error' })
    }
}

// Login 
module.exports.login = async (req, res) => {
    try {
        const { Email, Password } = req.body

        const user = await User.findOne({ Email })
        if (!user) {
            return res.json({
                message: "The user already there's"
            })
        }

        const isPasswordCorrect = await bcrypt.compare(Password, user.Password)
        if (!isPasswordCorrect) {
            return res.json({
                message: 'Error passwords',
            })
        }

    } catch (error) {
        res.json({ message: 'Login error' })
    }

    const token = jwt.sing({
        id: user._id,
        Email, 
    })
}

// Get ME
module.exports.getMe = async (req, res) => {
    try {
    } catch (error) { }
}