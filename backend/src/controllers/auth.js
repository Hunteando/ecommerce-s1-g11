const User = require('../models/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config/environment')
const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body

    const user = await User.create({
      username,
      email,
      password: await encrypt(password),
    })
    generateAuthData(res, user)
  } catch (error) {
    console.log(error)
    return res.json({
      error,
    })
  }
}

const encrypt = async (password) => {
  const salt = await bcrypt.genSalt()
  const hash = await bcrypt.hash(password, salt)
  return hash
}

const compare = async (password, hash) => {
  try {
    return bcrypt.compare(password, hash)
  } catch (error) {
    return false
  }
}
const signIn = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({
      where: {
        email,
      },
    })
    if (user && (await compare(password, user.toJSON().password))) {
      generateAuthData(res, user)
    } else throw new Error('Credentials incorrect')
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.message,
    })
  }
}
const generateAuthData = (res, userData) => {
  const user = {
    id: userData.toJSON().id,
    email: userData.toJSON().email,
    username: userData.toJSON().username,
    role: userData.toJSON().role,
  }
  return res.status(200).json({
    success: true,
    user,
    token: createToken(user),
  })
}
const logout = async () => {}
module.exports = { signUp, signIn, logout }

const createToken = (data) => {
  return jwt.sign(data, jwtSecret, {
    expiresIn: '7d',
  })
}
