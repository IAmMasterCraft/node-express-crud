const utilityFunction = require("../utils/Utilities");

module.exports = {
    mongoURI: utilityFunction.decode(process.env.MONGO_URI),
    mongoSetup: {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }
}