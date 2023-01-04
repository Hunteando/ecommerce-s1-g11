const { signUp, signIn } = require("../controllers/auth");
const { validateCreate, validateLogin } = require("../middlewares/validators");

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
module.exports = authRouter;
