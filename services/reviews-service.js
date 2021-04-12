const reviewsModel = require("../models/reviews/reviews-model")

const findAllReviews = () => {
    return reviewsModel.find()
}

const findReviewById = (reviewId) => {
    return reviewsModel.findById(reviewId)
}

const findReviewsForRecipe = (recipeId) => {
    return reviewsModel.find({recipe_id: recipeId})
}

const createReviewForRecipe = (newReview, recipeId) => {}

const deleteReview = (reviewId) => {}

const updateReview = (reviewId) => {}

module.exports = {
    findAllReviews,
    findReviewById,
    findReviewsForRecipe,
    createReviewForRecipe,
    deleteReview,
    updateReview
}