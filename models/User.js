// import mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create User Schema
const User = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        index: { unique: true },
    },
    country: {
        type: String,
        require: true,
    },
    dateGenerated: {
        type: Date,
        default: Date.now()
    },
    dateUpdated: {
        type: Date,
    },
});

module.exports = mongoose.model("User", User);