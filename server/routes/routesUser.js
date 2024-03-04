const UserController = require("../controllers/controllerUser");
// authenticate need to match with jwt.config
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
  app.post("/api/register", UserController.registerNewUser);
  app.post("/api/login", UserController.loginUser);
  // we don't want to logout someone else
  app.post("/api/logout", authenticate, UserController.logout);
  // app.get("/api/users", UserController.getAllUsers);
};
// FOR ALL OTHER ROUTES THAT REQUIRE YOU TO BE LOGGED IN, YOU MUST AUTHENTICATE TO MAKE SURE YOU'RE REALLY YOU ARE
