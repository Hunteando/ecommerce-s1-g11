const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/environment");

const verificarPermisoAdmin = (req, res, next) => {
  const decodificar = jwt.verify(req.headers.authorization, jwtSecret);
  if (decodificar?.role === "admin") {
    next();
  } else {
    return res.status(400).send("Sin permisos de administrador");
  }
};

module.exports = {
  verificarPermisoAdmin,
};
