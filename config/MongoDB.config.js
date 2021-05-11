// import utility functions
const {decode} = require("../utilities/Utilities");

module.exports = {
    mongoURI: utilityFunction.decode(process.env.MONGO_URI),
    mongoSetup: {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }
}