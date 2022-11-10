const User = require("../models/User");
require("dotenv").config();
const { JWT_SECRET } = process.env;
const jwt = require("jsonwebtoken");
const { tokenSign, verifyToken} = require("../utils/handleJwt");
const { encrypt, compare } = require("../utils/handlePassword");
const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleError");

/**
 * Este controlador es el encargado de registrar un usuario
 * @param {*} req
 * @param {*} res
 */
const registerCtrl = async (req, res) => {
  try {
    req = matchedData(req);
    const password = await encrypt(req.password);
    const body = {...req, password};
    const dataUser = await usersModel.create(body);
    dataUser.set("password", undefined, {strict: false});

    const data = {
      token: await tokenSign(dataUser),
      user: dataUser
    }

    res.send({ data });

  } catch (e) {
    handleHttpError(res, "ERROR_REGISTER_USER");
  }

};


/**
 * CONTROLADOR LOGIN
 */




module.exports = {
    registerCtrl,
};
