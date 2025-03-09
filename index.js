require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");

const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const addEventRoutes = require("./routes/addEvent");
const deleteEventRoutes = require("./routes/deleteEvent");
const updateEventRoutes = require("./routes/updateEvent");
const getEventRoutes = require("./routes/getEvents");
// database connection
connection();

// middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/addEvent",addEventRoutes);
app.use("/api/deleteEvent",deleteEventRoutes);
app.use("/api/updateEvent",updateEventRoutes);
app.use("/api/getEvent",getEventRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
