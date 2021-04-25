const reviewsModel = require("../models/reviews/reviews-model")

const findAllReviews = () => {
    return reviewsModel.find()
}

const findReviewById = (reviewId) => {
    return reviewsModel.findById(reviewId)
}

const findReviewsForRecipe = (recipeId) => {
    return reviewsModel.find({recipe_id: recipeId})
        //.populate('author', 'username')
}

const findReviewsByAuthor = (username) => {
    return reviewsModel.find({author: username})
}

const createReviewForRecipe = (newReview) => {
    try {
        return reviewsModel.create(newReview)
    }
    catch {
        return "-1"
    }
}

const deleteReview = (reviewId) => {}

const updateReview = (reviewId) => {}

module.exports = {
    findAllReviews,
    findReviewById,
    findReviewsForRecipe,
    findReviewsByAuthor,
    createReviewForRecipe,
    deleteReview,
    updateReview
}