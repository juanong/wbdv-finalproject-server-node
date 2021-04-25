const mongoose = require("mongoose")


const reviewsSchema = mongoose.Schema({
    recipe_id: String,
    recipe_title: String,
    author: {type: String, ref: "Users"},
    star_rating: Number,
    review_body: String
}, {collection: "reviews"})

module.exports = reviewsSchema