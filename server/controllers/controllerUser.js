const User = require("../models/modelUser");
const secret_key = process.env.SECRET_KEY;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const registerNewUser = async (req, res) => {
  console.log("Received registration request:", req.body);

  try {
    const {
      firstName,
      lastName,
      email,
      username,
      password,
      confirmPassword,
      instagram,
    } = req.body;

    console.log("Received registration request:", req.body);
    console.log("Instagram:", instagram);

    if (!instagram) {
      return res.status(400).json({ error: "Instagram is required" });
    }

    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ error: "Password must match confirm password" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      username,
      password: hashedPassword,
      instagram,
    });

    try {
      await newUser.validate();
    } catch (validationError) {
      const validationErrors = {};
      for (const key in validationError.errors) {
        validationErrors[key] = validationError.errors[key].message;
      }
      return res.status(400).json({ errors: validationErrors });
    }

    const existingUserWithEmail = await User.findOne({ email });
    const existingUserWithUsername = await User.findOne({ username });

    if (existingUserWithEmail) {
      return res
        .status(400)
        .json({ error: "Someone already registered with this email" });
    }

    if (existingUserWithUsername) {
      return res.status(400).json({ error: "Username is already taken" });
    }

    const savedUser = await User.create({
      firstName,
      lastName,
      email,
      username,
      instagram,
      password: hashedPassword,
    });

    const userToken = jwt.sign({ id: savedUser._id }, secret_key, {
      expiresIn: "2h",
    });

    res
      .cookie("usertoken", userToken, { httpOnly: true, expiresIn: "2h" })
      .status(201)
      .json(savedUser);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Internal server error during registration." });
  }
};
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email is present and valid
    if (!email || typeof email !== "string" || password === undefined) {
      console.log("Invalid email or password format");
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Convert entered email to uppercase for case-insensitive query
    const enteredEmail = email.toUpperCase();

    console.log("Entered Email:", enteredEmail);

    // Find the user using the case-insensitive query
    const user = await User.findOne({
      email: { $regex: new RegExp(`^${enteredEmail}$`, "i") },
    });

    console.log("Retrieved User:", user);

    if (!user) {
      console.log(
        "Invalid login credentials - User not found for email:",
        enteredEmail
      );
      return res.status(400).json({ message: "Invalid login credentials" });
    }

    // Use bcrypt.compare with trimmed password
    const isPasswordMatch = await bcrypt.compare(
      password.trim(),
      user.password
    );

    console.log("Entered Password:", password);
    console.log("Hashed Password in DB:", user.password);
    console.log("isPasswordMatch:", isPasswordMatch);

    if (isPasswordMatch) {
      const userToken = jwt.sign({ id: user._id }, secret_key, {
        expiresIn: "2h",
      });

      console.log("User authenticated - Token generated:", userToken);

      return res
        .cookie("usertoken", userToken, { httpOnly: true, expiresIn: "2h" })
        .status(200)
        .json({ message: "Login successful", user });
    } else {
      console.log("Invalid login credentials - Incorrect password");
      return res.status(400).json({ message: "Invalid login credentials" });
    }
  } catch (err) {
    console.error("Error during login:", err);
    return res
      .status(500)
      .json({ error: "Internal server error during login." });
  }
};

const logout = (req, res) => {
  res
    .status(200)
    .clearCookie("usertoken")
    .json({ message: "You have logged out successfully" });
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (err) {
    console.error("Error while fetching users:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = { registerNewUser, loginUser, getAllUsers, logout };
