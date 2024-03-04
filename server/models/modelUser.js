const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      minlength: [2, "First name must be 2 or more characters"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      minlength: [2, "Last name must be 2 or more characters"],
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      minlength: [4, "Username must be 4 or more characters"],
    },
    instagram: {
      type: String,
      required: [true, "Instagram is required"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      validate: [
        {
          validator: (val) => {
            return /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val);
          },
          message: "Email must be in proper format",
        },
        {
          validator: async (val) => {
            let foundUser = await mongoose.models.User.findOne({ email: val });
            return !foundUser;
          },
          message: "Someone already registered with this email",
        },
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be 8 or more characters"],
    },
  },
  { timestamps: true }
);

// check if the password is matching
UserSchema.virtual("confirmPassword")
  .get(function () {
    return this._confirmPassword;
  })
  .set(function (value) {
    this._confirmPassword = value;
  });

UserSchema.pre("validate", async function (next) {
  // Hash the password before saving to the database
  if (this.isModified("password")) {
    try {
      const hashedPassword = await bcrypt.hash(this.password, 10);
      this.password = hashedPassword;
      console.log("Password hashed before saving:", hashedPassword);
    } catch (error) {
      console.error("Error hashing the password:", error);
      return next(error);
    }
  }
  next();
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
