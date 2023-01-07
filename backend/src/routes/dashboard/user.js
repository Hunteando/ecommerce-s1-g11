const {
  getAllUsers,
  getUserByEmail,
  getUserById,
  getUserByUsername,
  updateRoleUser,
  dashboardUser,
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
userRouter.get(
  "/users/updaterole/:id",
  verificarPermisoSuperAdmin,
  updateRoleUser
);
userRouter.post("/users/dashboard/:id", dashboardUser);

// userRouter.post('/users/:username', getUserByUsername)

module.exports = userRouter;
