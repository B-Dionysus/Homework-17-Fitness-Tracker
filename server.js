const express = require("express");
// const mongojs = require("mongojs");
const mongoose = require("mongoose");
const logger = require("morgan");
const PORT = process.env.PORT || 3000;
const db = require("./models");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDB", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

app.listen(PORT, () => {
  console.log("App running on http://localhost:"+PORT+" !");
});
