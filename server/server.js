const express = require("express");
const cors = require("cors");
const app = express();

const port = 8000;
app.use(cors()); // Enable CORS for all routes
app.use(express.json(), express.urlencoded({ extended: true }));
require("./config/configMongoose");
const Authentication = require("./routes/routesUser");

Authentication(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
