// import User model
User = require("../../models/User");

exports.readUsers = async (request, response) => {
    try {
        const email = request.params.email;
        // get user object;
        const userData = (email) ? await User.find({ email: email }).sort({dateGenerated: -1}) : await User.find().sort({dateGenerated: -1});
        if (userData.length > 0) {
            response.status(200).json({
                message: "User Data fetched successfully!",
                data: userData,
            });
        } else {
            response.status(404).json({
                error: "User Data does not found!"
            });
        }
        
    } catch (error) {
        console.log(error);
        response.status(500).json({
            error: error.message,
        })
    }
}