// import mongoose
const mongoose = require("mongoose");
// import utility functions to validate email
const {isValidEmail} = require("../utilities/Utilities");
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
        validate: {
            validator: isValidEmail(email),
            message: props => `${props.value} is not a valid email address!`
        },
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