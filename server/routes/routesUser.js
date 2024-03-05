const UserController = require("../controllers/controllerUser");
// authenticate need to match with jwt.config
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
  app.post("/api/register", UserController.registerNewUser);
  app.post("/api/login", UserController.loginUser);
  // we don't want to logout someone else
  app.post("/api/logout", authenticate, UserController.logout);
  // Add debug logs
  app.get("/api/users", (req, res) => {
    console.log("Authenticated user:", req.user); // Assuming your authenticate middleware sets user information in the request
    UserController.getAllUsers(req, res);
  });
};
// FOR ALL OTHER ROUTES THAT REQUIRE YOU TO BE LOGGED IN, YOU MUST AUTHENTICATE TO MAKE SURE YOU'RE REALLY YOU ARE
