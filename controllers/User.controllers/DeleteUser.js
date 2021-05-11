// import User model
User = require("../../models/User");

exports.deleteUser = async (request, response) => {
    try {
        const {email} = request.body;
        if (email) {
            // get user object;
            await User.findOneAndDelete({ email });
            // response
            response.status(200).json({
                message: "User deleted successfully!",
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