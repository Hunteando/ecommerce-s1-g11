const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/environment");

const verificarPermisoSuperAdmin = (req, res, next) => {
  try {
    const decodificar = jwt.verify(req.headers.authorization, jwtSecret);
    if (decodificar?.role === "superAdmin") {
      next();
    } else {
      return res.status(400).send("Sin permisos de administrador");
    }
  } catch (error) {
    return res.status(400).send("Sin permisos de super-administrador");
  }
};

const verificarPermisoAdmin = (req, res, next) => {
  try {
    const decodificar = jwt.verify(req.headers.authorization, jwtSecret);
    if (decodificar?.role === "admin" || decodificar?.role === "superAdmin") {
      next();
    } else {
      return res.status(400).send("Sin permisos de administrador");
    }
  } catch (error) {
    return res.status(400).send("Sin permisos de administrador");
  }
};

const verificarPermisoUsuario = (req, res, next) => {
  try {
    const decodificar = jwt.verify(req.headers.authorization, jwtSecret);
    if (decodificar?.id === parseInt(req.params.id)) {
      req.user = decodificar;
      next();
    } else {
      return res.status(400).send("Sin permiso de usuario");
    }
  } catch (e) {
    return res.status(400).send("Sin permiso de usuario");
  }
};

module.exports = {
  verificarPermisoSuperAdmin,
  verificarPermisoAdmin,
  verificarPermisoUsuario,
};
