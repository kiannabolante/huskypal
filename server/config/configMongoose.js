// const mongoose = require("mongoose");
// require("dotenv").config(); // Load environment variables from .env file

// const MONGODB_URI =
//   process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/husky_db";

// mongoose
//   .connect(MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Established a connection to the database"))
//   .catch((err) =>
//     console.log("Something went wrong when connecting to the database ", err)
//   );

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/husky_pal", {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => console.log("Connection failed!", err));
