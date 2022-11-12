const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");


/**
 * VALIDACION REGISTRO
 */
const validatorRegister = [
  check("username")
  .exists()
  .notEmpty()
  .isLength({min:6, max:16}),
  check("email")
  .exists()
  .notEmpty()
  .isEmail(),
  check("password")
  .exists()
  .notEmpty()
  .isLength({min:3, max:15}),
  check("rol")
  .exists()
  .notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
];

/**
 * VALIDACION LOGIN
 */




module.exports = { validatorRegister };
