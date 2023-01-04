const { check } = require('express-validator')
const { validateResult } = require('../helpers/validateHelper')

const validateCreate = [
  check('username')
    .exists()
    .isLength({ min: 5 })
    .withMessage('Username must have a minimum of 5 characters')
    .not()
    .isEmpty(),

  check('username').exists().isLength({ min: 5 }).not().isEmpty(),

  check('email').exists().isEmail().not().isEmpty(),
  check('password').exists().not().isEmpty(),
  (req, res, next) => {
    validateResult(req, res, next)
  },
]

const validateLogin = [
  check('email').exists().isEmail().not().isEmpty(),
  check('password').exists().not().isEmpty(),
  (req, res, next) => {
    validateResult(req, res, next)
  },
]

const validateProduct = [
  check('code').exists().not().isEmpty(),
  check('name').exists().not().isEmpty(),
  check('description').exists().not().isEmpty(),
  check('price').exists().not().isEmpty(),
  check('stock').exists().not().isEmpty(),
  check('colors').exists().not().isEmpty(),
  check('weight').exists().not().isEmpty(),
  check('freeshipping').exists().not().isEmpty(),
  check('averageRating').exists().not().isEmpty(),
  check('numOfReviews').exists().not().isEmpty(),
  (req, res, next) => {
    validateResult(req, res, next)
  },
]
module.exports = { validateCreate, validateLogin, validateProduct }

/*
"code":"12a",
"name":"Taza",
"description":"Taza de porcelana con diseño de Picasso",
"price":"5",
"stock":"10",
"colors":"white",
"weight":"1kg",
"freeshipping":true,
"averageRating":"5",
"numOfReviews":"0",




*/
