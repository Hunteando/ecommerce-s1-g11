const { signUp, signIn, tokenVerify } = require('../controllers/auth')
const { validateCreate, validateLogin } = require('../middlewares/validators')

const authRouter = require('express').Router()

authRouter.post(
  '/register',
  //   validateCreate,
  signUp
)
authRouter.post(
  '/login',
  // validateLogin,
  signIn
)
authRouter.post('/verifyToken', tokenVerify)
module.exports = authRouter
