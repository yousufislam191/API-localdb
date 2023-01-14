const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const userRouter = require("./routes/users.route");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", userRouter);

module.exports = app;
