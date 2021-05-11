// importing dotenv and calling the config method for .env access and usage
require('dotenv').config();
// import express
const express = require("express");
// import cors
const cors = require("cors");
// import mongoose
const mongoose = require("mongoose");
// import MongoDB config
const dbConfiguration = require("./config/MongoDB.config");
// initialise express app
const app = express();
// setting port number
const PORT = process.env.PORT ?? 5000;
// cors setup for express app
app.use(cors());

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