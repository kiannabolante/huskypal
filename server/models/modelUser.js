const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: [true, "Username already exists"],
    trim: true,
    minlength: [3, "Username must be at least 3 characters long"],
    maxlength: [30, "Username cannot more than  30 characters"],
    match: [
      /^[a-zA-Z0-9_-]+$/,
      "Username can only contain alphanumeric characters, underscores, and hyphens",
    ],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters long"],
  },
});

userSchema.pre("save", async function (next) {
  try {
    const user = this;

    // Only hash the password if it's modified or new
    if (!user.isModified("password")) return next();

    // Generate a salt
    const salt = await bcrypt.genSalt(10);

    // Hash the password along with the new salt
    const hashedPassword = await bcrypt.hash(user.password, salt);

    // Override the plaintext password with the hashed one
    user.password = hashedPassword;

    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
