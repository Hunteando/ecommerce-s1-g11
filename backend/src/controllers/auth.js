const Users = require("../models/users");
const UserDetails = require("../models/usersdetails");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/environment");
const Cart = require("../models/cart");

const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await Users.create({
      username,
      email,
      password: await encrypt(password),
    });
    await UserDetails.create({
      UserId: user.id,
      country: "",
      city: "",
      province: "",
    });
    await Cart.create({
      UserId: user.id,
    });
    generateAuthData(res, user);
  } catch (error) {
    // const { message } = error.errors[0];
    return res.status(400).json({
      // message,
      error,
    });
  }
};

const encrypt = async (password) => {
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

const compare = async (password, hash) => {
  try {
    return bcrypt.compare(password, hash);
  } catch (error) {
    return false;
  }
};
const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({
      where: {
        email,
      },
      attributes: {
        exclude: ["updateAt", "createdAt", "destroyAt"],
      },
      include: {
        model: UserDetails,
        attributes: {
          exclude: ["id", "UserId", "createdAt", "updatedAt"],
        },
      },
    });
    if (user && (await compare(password, user.toJSON().password))) {
      generateAuthData(res, user);
    } else throw new Error("Credentials incorrect");
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};
const generateAuthData = (res, userData) => {
  const user = {
    id: userData.toJSON().id,
    email: userData.toJSON().email,
    username: userData.toJSON().username,
    role: userData.toJSON().role,
    firstname: userData.UserDetail?.firstname || "",
    lastname: userData.UserDetail?.lastname || "",
  };
  return res.status(200).json({
    success: true,
    user,
    token: createToken(user),
  });
};
const logout = async () => {};

const verificarLogueoToken = async (req, res, next) => {
  try {
    const usuarioDecodificado = await jwt.verify(req.params?.token, jwtSecret);
    const user = await Users.findOne({
      where: {
        id: usuarioDecodificado.id,
      },
      attributes: {
        exclude: ["password", "updateAt", "createdAt", "destroyAt"],
      },
      include: {
        model: UserDetails,
        attributes: {
          exclude: ["id", "UserId", "createdAt", "updatedAt"],
        },
      },
    });
    generateAuthData(res, user);
  } catch (error) {
    res.status(401).send("Token invalido");
  }
};

module.exports = {
  signUp,
  signIn,
  logout,
  encrypt,
  verificarLogueoToken,
  generateAuthData,
};

const createToken = (data) => {
  return jwt.sign(data, jwtSecret, {
    expiresIn: "7d",
  });
};
