const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
mongoose
  .connect("mongodb://localhost:27017/employees")
  .then(() => console.log("DB is good"))
  .catch((err) => console.log(err));


app.use("/register", require("./routes/user.route"));
app.use("/login",require("./routes/user.route"))
app.listen(3001, () => {
  console.log("server is lissten in port 3001");
});
