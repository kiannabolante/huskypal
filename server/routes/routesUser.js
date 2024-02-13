const AuthController = require("../controllers/controllerUser");
module.exports = (app) => {
  app.post("/register", AuthController.registerUser);
  app.post("/login", AuthController.loginUser);
};
