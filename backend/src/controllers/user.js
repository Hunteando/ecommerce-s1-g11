const User = require('../models/users')

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      // where: {
      //   role: 'admin',
      // },
    })
    return res.json({
      message: 'succesfully',
      users,
    })
  } catch (error) {
    console.log(error)
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
      message: 'Successfully',
      user,
    })
  } catch (error) {
    return res.status(404).json({
      Error: 'User not exist',
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
    console.log(user)
    return res.status(200).json({
      message: 'Successfully',
      user,
    })
  } catch (error) {
    console.log(error)
    res.json({
      message: 'Error ocurred',
      error,
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

    delete user.password
    res.status(200).json({
      message: 'Successfully',
      user,
    })
  } catch (error) {
    console.log(error)
    res.status(404).json({
      Error: 'User not exist',
    })
  }
}

module.exports = { getAllUsers, getUserByEmail, getUserById, getUserByUsername }
