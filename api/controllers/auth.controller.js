import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

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
