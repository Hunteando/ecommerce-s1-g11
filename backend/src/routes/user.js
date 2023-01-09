const { user } = require('pg/lib/defaults')
const {
  getAllUsers,
  getUserByEmail,
  getUserById,
  getUserByUsername,
  updateRoleUser,
  dashboardUser,
} = require('../controllers/user')
const authMiddleware = require('../middlewares/authMiddleware')
const { validateCreate } = require('../middlewares/validators')

const userRouter = require('express').Router()

userRouter.get('/users', authMiddleware('user'), getAllUsers)
userRouter.post('/users', getUserByEmail)
userRouter.post('/users/:id', getUserById)
userRouter.post('/users/update/:id', updateRoleUser)
userRouter.post('/users/dashboard/:id', dashboardUser)

// userRouter.post('/users/:username', getUserByUsername)

module.exports = userRouter
