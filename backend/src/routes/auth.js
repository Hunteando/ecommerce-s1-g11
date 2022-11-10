const express = require("express");
const router = express.Router();
const { registerCtrl } = require("../controllers/auth");
// const { authentication, authorization } = require("../middleware");
const { validatorRegister } = require("../validators/auth");

/**
 * Crear un registro
 */
router.post("/register", validatorRegister, registerCtrl);

/**
 * Login de usuario
 */



module.exports = router;
