const {
  getAllUsers,
  userDetails,
  updateRoleUser,
  updateDataUser,
  getUserByEmail,
  getUserById,
  getUserByUsername,
  dashboardUser,
} = require("../../controllers/user");
const {
  verificarPermisoSuperAdmin,
  verificarPermisoAdmin,
  verificarPermisoUsuario,
} = require("../../middlewares/authMiddleware");
const { validateCreate } = require("../../middlewares/validators");

const userRouter = require("express").Router();

userRouter.get("/", verificarPermisoAdmin, getAllUsers);
userRouter.get("/userdetail/:id", verificarPermisoAdmin, userDetails);
userRouter.get("/updaterole/:id", verificarPermisoSuperAdmin, updateRoleUser);

// dashboard cliente
userRouter.post("/updateuser/:id", verificarPermisoUsuario, updateDataUser);

// no se usan
userRouter.post("/", verificarPermisoAdmin, getUserByEmail);
userRouter.post("/users/:id", getUserById);
userRouter.post("/users/dashboard/:id", dashboardUser);

// userRouter.post('/users/:username', getUserByUsername)

module.exports = userRouter;
