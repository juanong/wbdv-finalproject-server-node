const mongoose = require("mongoose")
const recipesSchema = require("./recipes-schema")

// This model allows us to read and write this users schema
const recipesModel = mongoose.model(
    "Recipes",
    recipesSchema
)

module.exports = recipesModel