const { signUp, signIn, verificarLogueoToken } = require("../controllers/auth");
const { validateCreate, validateLogin } = require("../middlewares/validators");
const { verificarPermisoAdmin } = require("../middlewares/authMiddleware");

const authRouter = require("express").Router();

authRouter.post(
  "/register",
  //   validateCreate,
  signUp
);
authRouter.post(
  "/login",
  // validateLogin,
  signIn
);
authRouter.get("/login/:token", verificarLogueoToken);
module.exports = authRouter;
