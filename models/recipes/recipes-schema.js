const mongoose = require("mongoose")

// Every recipe created through Spoonful has to follow this schema
const recipesSchema = mongoose.Schema({
    author_id: String, // username
    title: String,
    image: String,
    servings: Number,
    preparationMinutes: Number,
    cookingMinutes: Number,
    summary: String,
    extendedIngredients: [],
    instructions: String,
    api_source: {type: String, default: "internal"}
}, {collection: "recipes"})

module.exports = recipesSchema