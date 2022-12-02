const User = require('../models/users')

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    return res.json({
      message: 'succesfully',
      users,
    })
  } catch (error) {
    return {
      message: error,
    }
  }
}
const getUserByUsername = async (req, res) => {
  const { username } = req.params
  try {
    const user = await User.findOne({
      where: {
        username,
      },
    })
    return res.status(200).json({
      success: true,
      user,
    })
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: 'User not exist',
    })
  }
}

const getUserByEmail = async (req, res) => {
  const email = req.body.email
  console.log(email)
  try {
    const user = await User.findOne({
      where: { email: email },
    })
    if (user) {
      const newUser = user.toJSON()
      delete user.password

      return res.status(200).json({
        success: true,
        user: newUser,
      })
    } else throw new Error('User not exist')
  } catch (error) {
    console.log(error)
    res.json({
      success: false,
      message: error.message,
    })
  }
}

const getUserById = async (req, res) => {
  try {
    const { id } = req.params
    console.log(id)
    const user = await User.findOne({
      where: {
        id,
      },
    })

    if (user) {
      const newUser = user.toJSON()
      delete newUser.password
      return res.status(200).json({
        success: true,
        newUser,
      })
    } else throw new Error('User not exist')
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    })
  }
}
const getUserData = (user) => {}

module.exports = { getAllUsers, getUserByEmail, getUserById, getUserByUsername }
