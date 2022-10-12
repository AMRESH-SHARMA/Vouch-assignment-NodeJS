const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");


if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "./backend/config/config.env" });
}

//____
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//____
const contact = require("./routes/contact.route");
const genjwt = require("./routes/jwt.route");
//____
app.use("/", genjwt);
app.use("/api/v1", genjwt);
app.use("/api/v1", contact);

module.exports = app
