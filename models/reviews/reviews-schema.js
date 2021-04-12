const mongoose = require("mongoose")

const reviewsSchema = mongoose.Schema({
    recipe_id: mongoose.ObjectId,
    post_date: Date,
    star_rating: Number,
    review_body: String
}, {collection: "reviews"})

module.exports = reviewsSchema