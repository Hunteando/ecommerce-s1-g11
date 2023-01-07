const {
  getAllUsers,
  getUserByEmail,
  getUserById,
  getUserByUsername,
  updateRoleUser,
  dashboardUser,
  userDetails,
} = require("../../controllers/user");
const {
  verificarPermisoSuperAdmin,
  verificarPermisoAdmin,
} = require("../../middlewares/authMiddleware");
const { validateCreate } = require("../../middlewares/validators");

const userRouter = require("express").Router();

userRouter.get("/", verificarPermisoAdmin, getAllUsers);
userRouter.post("/", verificarPermisoAdmin, getUserByEmail);
userRouter.post("/users/:id", getUserById);
userRouter.get("/updaterole/:id", verificarPermisoSuperAdmin, updateRoleUser);
userRouter.get("/userdetail/:id", verificarPermisoSuperAdmin, userDetails);
userRouter.post("/users/dashboard/:id", dashboardUser);

// userRouter.post('/users/:username', getUserByUsername)

module.exports = userRouter;
