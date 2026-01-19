import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

  //  SIGNUP CONTROLLER
export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    // validation
    if (!fullName || !username || !password || !confirmPassword || !gender) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    if (!["Male", "Female"].includes(gender)) {
      return res.status(400).json({ error: "Invalid gender value" });
    }

    const normalizedUsername = username.toLowerCase();

    // Check existing user
    const existingUser = await User.findOne({ username: normalizedUsername });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Avatar logic
    const profilePic =
      gender === "Male"
        ? `https://api.dicebear.com/7.x/avataaars/svg?seed=${normalizedUsername}`
        : `https://api.dicebear.com/7.x/personas/svg?seed=${normalizedUsername}`;

    // Create user
    const newUser = new User({
      fullName,
      username: normalizedUsername,
      password: hashedPassword,
      gender,
      profilePic,
    });

    await newUser.save();

    // Generate JWT
    generateTokenAndSetCookie(newUser._id, res);

    return res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      profilePic: newUser.profilePic,
    });
  } catch (error) {
    console.error("Error in Signup Controller:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

  //  LOGIN CONTROLLER
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const normalizedUsername = username.toLowerCase();

    const user = await User.findOne({ username: normalizedUsername });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    generateTokenAndSetCookie(user._id, res);

    return res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.error("Error in Login Controller:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

  //  LOGOUT CONTROLLER
export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", {
      maxAge: 0,
      httpOnly: true,
      sameSite: "strict",
    });

    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Error in Logout Controller:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
