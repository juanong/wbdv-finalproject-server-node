const mongoose = require("mongoose")
const reviewsSchema = require("./reviews-schema")

const reviewsModel = mongoose.model(
    "Reviews",
    reviewsSchema
)

module.exports = reviewsModel