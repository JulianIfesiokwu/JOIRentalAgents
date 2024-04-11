import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: " All fields are required" });
  }

  // HASH THE PASSWORD
  const hashedPassword = bcrypt.hashSync(password, 10);

  // CREATE NEW USER
  const newUser = new User({
    username: username,
    email: email,
    // SAVE THE HASHED PASSWORD
    password: hashedPassword,
  });

  try {
    // SAVE USER TO DATABASE
    await newUser.save();

    // MUST HAVE A RESPONSE TO CLOSE THE REQUEST CONNECTION
    res.json("User signed up successfully");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email: email });

    // IF THE USER DOESNT EXIST
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }

    const validPassword = bcrypt.compareSync(password, validUser.password);

    // IF PASSWORD IS WRONG
    if (!validPassword) {
      return next(errorHandler(401, "Wrong credentials"));
    }

    // IF PASSWORD IS OK CREATE TOKEN AND SAVE AS COOKIE
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 24 * 60 * 60),
      })
      .status(200)
      .json(rest);
  } catch (error) {
    console.log(error);
  }
};
