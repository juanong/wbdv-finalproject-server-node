const mongoose = require("mongoose")

// Every recipe created through Spoonful has to follow this schema
const recipesSchema = mongoose.Schema({
    author_id: String, // username
    title: String,
    picture_url: String,
    servings: Number,
    prep_time: Number,
    cook_time: Number,
    description: String,
    extendedIngredients: [],
    instructions: String
}, {collection: "recipes"})

const ingredientSchema = {
    originalString : String
}

module.exports = recipesSchema