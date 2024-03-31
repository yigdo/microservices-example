const mongoose = require("mongoose");

module.exports = () => {
    mongoose.connect(process.env.MONGODB_URI || "")
        .then(() => {
            console.info("[INFO]: Successfully connected to MongoDB");
        })
        .catch((e) => {
            console.error("[INFO]: There was an error while connecting to MongoDB: " + e);
        });
}