const mongoose = require("mongoose")

// Every user must follow this structure
const usersSchema = mongoose.Schema({
    // Id is created automatically
    username: String,
    firstName: String,
    lastName: String,
    password: String,
    userType: {type: String, enum: ["CHEF", "HOME_COOK"]},
    profilePic_url: String,
    preferences: [String]
}, {collection: "users"})

module.exports = usersSchema
