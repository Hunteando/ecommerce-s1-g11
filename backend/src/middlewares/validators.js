const { check, oneOf, validationResult } = require('express-validator')
const { validateResult } = require('../helpers/validateHelper')

const validateCreate = [
  check('username').exists().isLength({ min: 5 }).not().isEmpty(),
  check('email').exists().isEmail().not().isEmpty(),
  check('password').exists().not().isEmpty(),
  (req, res, next) => {
    validateResult(req, res, next)
  },
]

module.exports = { validateCreate }
