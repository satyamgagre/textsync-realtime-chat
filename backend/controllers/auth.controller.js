import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const maleAvatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`;
    const femaleAvatar = `https://api.dicebear.com/7.x/personas/svg?seed=${username}`;

    const newUser = new User({
    fullName,
    username,
    password: hashedPassword,
    gender,
    profilePic: gender === "Male" ? maleAvatar : femaleAvatar,
    });


    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      profilePic: newUser.profilePic,
    });
  } catch (error) {
    console.error("Error in Signup Controller:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = (req, res) => {
  console.log("loginUser");
  res.send("Login User");
};

export const logout = (req, res) => {
  console.log("logoutUser");
  res.send("Logout User");
};
