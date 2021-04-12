const mongoose = require("mongoose")

// Every recipe created through Spoonful has to follow this schema
const recipesSchema = mongoose.Schema({
    author_id: mongoose.ObjectId,
    title: String,
    picture_url: String,
    servings: Number,
    prep_time: Number,
    cook_time: Number,
    description: String,
    ingredients: [String],
    instructions: [String]
}, {collection: "recipes"})

module.exports = recipesSchema