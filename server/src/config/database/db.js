const mongoose = require("mongoose");
const env = require("../environments/env");
const connectDB = async () => {
    try {
        if (!env.MONGODB_URL) {
            throw new Error("MONGODB_URL is missing from server/.env");
        }
        await mongoose.connect(env.MONGODB_URL)
        console.log("MongoDB Connected.")
    } catch (error) {
        throw new Error(`DB ERROR: ${error.message}`)
    }
}
module.exports = connectDB;