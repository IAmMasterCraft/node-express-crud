// import User model
User = require("../../models/User");

exports.createUser = async (request, response) => {
    console.log(request.body);
    try {
        const {name, email, country} = request.body;
        const newUser = new User({
            name,
            email,
            country,
        });
        // save user
        const savedUser = await newUser.save();
        response.status(201).json({
            message: "New user created successfully!",
            data: savedUser,
        });
    } catch (error) {
        console.log(error);
        response.status(500).json({
            message: error.message,
        })
    }
}