// import User model
User = require("../../models/User");

exports.updateUser = async (request, response) => {
    try {
        const oldEmail = request.params.email;
        const {name, email, country} = request.body;
        if (oldEmail) {
            // get user object;
            const updatedUser = await User.findOneAndUpdate(
                { email: oldEmail }, 
                {name, email, country},
                {
                    new: true,
                    omitUndefined: true
                },
            );
            if (updatedUser) {
                // response
                response.status(201).json({
                    message: "User updated successfully!",
                    data: updatedUser,
                });
            } else {
                response.status(404).json({
                    error: "User does not exist!"
                });
            }
        } else {
            response.status(400).json({
                error: "Missing field(s)!",
            });
        }
    } catch (error) {
        // console.log(error);
        response.status(500).json({
            error: error.message,
        })
    }
}