const {
  getAllUsers,
  getUserByEmail,
  getUserById,
  getUserByUsername,
} = require('../controllers/user')
const { validateCreate } = require('../middlewares/validators')

const userRouter = require('express').Router()

userRouter.get('/users', getAllUsers)
userRouter.post('/users', getUserByEmail)
userRouter.post('/users/:id', getUserById)
// userRouter.post('/users/:username', getUserByUsername)

module.exports = userRouter