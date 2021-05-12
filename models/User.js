// import mongoose
const mongoose = require("mongoose"),
    // import utility functions to validate email
    {isValidEmail} = require("../utilities/Utilities"),
    { catchDuplicateIndex } = require("../middlewares/DuplicateIndex.middleware"),
    Schema = mongoose.Schema;

//create User Schema
const User = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        lowercase: true,
        index: { unique: true },
        validate: {
            validator: isValidEmail,
            message: props => `${props.value} is not a valid email address!`
        },
    },
    country: {
        type: String,
        require: [true, "Country is required"],
    },
    dateGenerated: {
        type: Date,
        default: new Date()
    },
    dateUpdated: {
        type: Date,
    },
});

// apply middlewares
User.post("save", catchDuplicateIndex);

module.exports = mongoose.model("ZuriUser", User);