require("./config/db");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoutes");
const doctorsRoutes = require("./routes/doctorsRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: false })); // To parse URL-encoded bodies
app.use(cookieParser());

// Routes
app.use("/api/user", userRoutes);
app.use("/api/doctor", doctorsRoutes);

module.exports = app;
