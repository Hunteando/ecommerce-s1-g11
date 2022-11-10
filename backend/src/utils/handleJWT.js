const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;


/**
 * Debes de pasar el objeto del usuario
 * @param {*} user
 * @returns
 */
const tokenSign = async (user) => {
  const sign = jwt.sign(
    {
      id: user.id,
      role: user.role
    },
    JWT_SECRET,
    {
      expiresIn: "2h"
    }
  );

  return sign;
};

/**
 * Debes de pasar el token de sesion del JWT
 * @param {*} tokenJwt
 * @returns
 */
const verifyToken = async (tokenJwt) => {
  try {
    return jwt.verify(tokenJwt, JWT_SECRET);
  } catch (e) {
    return null;
  }
};


module.exports = { tokenSign, verifyToken };
