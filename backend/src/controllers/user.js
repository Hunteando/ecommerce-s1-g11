const User = require("../models/users");
const UserDetails = require("../models/usersdetails");
const Addresses = require("../models/addresses");
const Cart = require("../models/cart");
const Products = require("../models/products");
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      // include: {
      //   model: UserDetails,
      //   include: [{ model: Cart, include: Products }],
      // },
      attributes: {
        exclude: ["password", "created_date", "update_date", "destroyTime"],
      },
      order: [["id", "ASC"]],
    });
    return res.json({
      message: "succesfully",
      users,
    });
  } catch (error) {
    return res.status(400).json({
      message: "succesfully",
    });
  }
};
const getUserByUsername = async (req, res) => {
  const { username } = req.params;
  try {
    const user = await User.findOne({
      where: {
        username,
      },
    });
    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "User not exist",
    });
  }
};

const getUserByEmail = async (req, res) => {
  const email = req.body.email;
  console.log(email);
  try {
    const user = await User.findOne({
      where: { email: email },
    });
    if (user) {
      const newUser = user.toJSON();
      delete user.password;

      return res.status(200).json({
        success: true,
        user: newUser,
      });
    } else throw new Error("User not exist");
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const user = await User.findOne({
      where: {
        id,
      },
      include: {
        model: UserDetails,
        include: [{ model: Cart, include: Products }],
      },
    });
    console.log(user);
    if (user) {
      const newUser = user.toJSON();
      delete newUser.password;
      return res.status(200).json({
        success: true,
        newUser,
      });
    } else throw new Error("User not exist");
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const dashboardUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { password, firstName, lastName, country, city, province } = req.body;
    const result = await User.update(password, {
      where: {
        id,
      },
    });
    //     await Image.create({ url, ProductId: id })
    const userDetails = await UserDetails.create({
      firstName,
      lastName,
      UserId: id,
    });
    // UserDetailId
    await Addresses.upd({
      country,
      city,
      province,
      UserDetailId: userDetails.id,
    });
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
    });
  }
};

const updateRoleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.query;
    const user = await User.findOne({
      where: {
        id,
      },
    });
    if (user) {
      user.role = role;
      await user.save();
    }
    const users = await User.findAll({
      attributes: {
        exclude: ["password", "created_date", "update_date", "destroyTime"],
      },
      order: [["id", "ASC"]],
    });
    return res.status(200).json({
      users,
    });
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};

const userDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id, {
      attributes: {
        exclude: ["password", "update_date", "created_date", "destroyTime"],
      },
      include: {
        model: UserDetails,
        attributes: {
          exclude: ["id", "UserId", "createdAt", "updatedAt"],
        },
      },
    });
    res.status(200).json({ user });
  } catch (e) {
    console.log(e);
    res.status(400).send(e.message);
  }
};

module.exports = {
  getAllUsers,
  getUserByEmail,
  getUserById,
  getUserByUsername,
  updateRoleUser,
  dashboardUser,
  userDetails,
};
