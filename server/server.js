// const express = require("express");
// const jwt = require("jsonwebtoken");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");
// const bcrypt = require("bcrypt"); // Import bcrypt

// const app = express();

// require("dotenv").config();

// // now we have add credentials which means that we required the user to logged in, to access
// // our application

// app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// // Import mongoose and set up other configurations as needed
// require("./config/configMongoose");

// // Import your routes
// const allRoutes = require("./routes/routesUser");
// allRoutes(app);

// // Add error handling middleware for JSON parsing errors
// app.use((error, req, res, next) => {
//   if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
//     return res.status(400).json({ error: "Invalid JSON format" });
//   }
//   next();
// });

// app.listen(8000, () => {
//   console.log("Listening at Port 8000");
// });

const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt"); // Import bcrypt

const app = express();

require("dotenv").config();

// now we have add credentials which means that we required the user to be logged in to access our application

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Import mongoose and set up other configurations as needed
require("./config/configMongoose");

// Import your routes
const allRoutes = require("./routes/routesUser");
allRoutes(app);

// Add debug logs for incoming requests
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

// Add error handling middleware for JSON parsing errors
app.use((error, req, res, next) => {
  console.error("Error handling middleware:", error);
  if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
    return res.status(400).json({ error: "Invalid JSON format" });
  }
  next();
});

app.listen(8000, () => {
  console.log("Listening at Port 8000");
});
