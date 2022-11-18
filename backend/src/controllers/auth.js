const User = require('../models/users')

const { body, validationResult } = require('express-validator')
const signUp = async (req, res) => {
  console.log(req.body)
  try {
    const { username, email, password } = req.body
    const user = await User.create({
      username,
      email,
      password,
    })
    return res.json({
      user,
    })
  } catch (error) {
    console.log(error)
    return res.json({
      message,
    })
  }
}

const signIn = async () => {}

const logout = async () => {}
module.exports = { signUp, signIn, logout }
