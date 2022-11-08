require("dotenv").config();
const express = require("express");
const cors = require("cors");
const corsOptions = require('./config/corsOptions');
const morgan = require("morgan");
const pkg = require("../package.json");

const app = express();

app.set("pkg", pkg);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").authors,
    description: app.get("pkg").description,
    version: app.get("pkg").version,
  });
});
app.use("/api",require("./routes"));


module.exports = app;