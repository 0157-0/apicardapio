const express = require("express");
const bcrypt = require("bcryptjs");
const UserModel = require("../models/User");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");
const router = express.Router();

const generateToken = (user = {}) => {
  return jwt.sign(
    {
      id: user.id,
      name: user.name,
    },
    authConfig.secret,
    {
      expiresIn: 86400,
    }
  );
};

router.post("/register", async (req, res) => {
  //verificando se tem usuario com o mesmo email
  const { email } = req.body;

  if (await UserModel.findOne({ email })) {
    return res.status(400).json({
      error: true,
      message: "User already exists",
    });
  }

  //criando o usuario
  const user = await UserModel.create(req.body);

  user.password = undefined;

  return res.json({
    error: false,
    message: "Registred with success!",
    data: user,
    token: generateToken(user),
  });
});

//login
router.post("/authenticate", async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email }).select("+password");

  if (!user) {
    return res.status(400).json({
      error: true,
      message: "User not found!",
    });
  }

  if (!(await bcrypt.compare(password, user.password))) {
    return res.status(400).send({
      error: true,
      message: "Invalid password",
    });
  }

  user.password = undefined;

  return res.json({
    user,
    token: generateToken(user),
  });
});

module.exports = router;
