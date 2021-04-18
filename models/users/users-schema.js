const mongoose = require("mongoose")
const recipeSchema = require("../recipes/recipes-schema")

// Every user must follow this structure
const usersSchema = mongoose.Schema({
    // Id is created automatically
    username: String,
    firstName: String,
    lastName: String,
    password: String,
    userType: {type: String, enum: ["CHEF", "HOME_COOK"]},
    profilePic_url: String,
    preferences: [String],
    recipes: [recipeSchema]
}, {collection: "users"})

module.exports = usersSchema
