// importing dotenv and calling the config method for .env access and usage
require("dotenv").config();
// import express
const express = require("express"),
    // import cors
    cors = require("cors"),
    // import mongoose
    mongoose = require("mongoose"),
    // import MongoDB config
    dbConfiguration = require("./config/MongoDB.config"),
    // initialise express app
    app = express(),
    // setting port number
    PORT = process.env.PORT ?? 5000,
    // import User routes
    userRoutes = require("./routes/User.routes");

// cors setup for express app
app.use(cors());
// use routes
app.use(process.env.API_VERSION, userRoutes);

// connect to mongoose DB
mongoose.connect(dbConfiguration.mongoURI, dbConfiguration.mongoSetup)
    .then(() => console.log("MongoDb connected...\n"))
    .catch(error => console.log(error.message));

// start server
app.listen(
    PORT, (
        () => console.log(`Server started on port ${PORT}\n`)
    )
);