const User = require("../models/user")
const asyncHandler = require("express-async-handler");

const CreateUser = asyncHandler(async (req, res) => {
    const { userName, password } = req.body

    if (!userName) throw new Error("User already exists")
    const response = await User.create({ userName, password })
    return res.status(200).json({
        success: response ? true : false,
        createdUser: response ? response : "Cannot create new user"
    })
})

const login = asyncHandler(async (req, res) => {
    const { userName, password } = req.body

    const isUser = await User.findOne({ userName })

    if (!isUser) throw new Error("User not found")

    return res.status(200).json({
        message: "Login Successfully"
    })
})

module.exports = {
    CreateUser,
    login
}