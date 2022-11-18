const { signUp } = require('../controllers/auth')
const { validateCreate } = require('../middlewares/validators')

const authRouter = require('express').Router()

authRouter.post('/register', validateCreate, signUp)
module.exports = authRouter
