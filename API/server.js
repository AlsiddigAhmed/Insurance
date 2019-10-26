const express = require("express");
const path = require("path");
const { handle404Errors, handleErrors } = require("./utils");

// IIFEs Modules
require("./fs_setup");
// require external modules;
const Registration = require("./Routes/Registration");
const Profile = require("./Routes/Profile");
const Gig = require("./Routes/Gig");
const Insurance = require("./Routes/Insurance");
const Requests = require("./Routes/Requests");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// use a middleware
app.use(cors());
// use global directory
app.use("/upload/", express.static(path.join(__dirname, "upload")));

app.use(Registration); // the login route
app.use("/api", Profile);
app.use("/api", Gig);
app.use("/api", Insurance);
app.use("/api", Requests);

// catch 404 and forward to error handler
app.use(handle404Errors);
// error handler
app.use(handleErrors);

module.exports = app;
