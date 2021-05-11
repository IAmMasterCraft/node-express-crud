// import User model
User = require("../../models/User");

exports.createUser = async (request, response) => {
    try {
        const {name, email, country} = request.body;
        if (name && email && country) {
            // new user object;
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
        } else {
            response.status(400).json({
                error: "Missing field(s)!",
            });
        }
    } catch (error) {
        console.log(error);
        response.status(500).json({
            error: error.message,
        })
    }
}