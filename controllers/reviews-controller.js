const reviewsService = require("../services/reviews-service")

module.exports = (app) => {
    const findAllReviews = (req, res) => {
        reviewsService.findAllReviews()
            .then(reviews => {
                res.send(reviews)
            })
    }

    const findReviewById = (req, res) => {
        const reviewId = req.params['reviewId']
        reviewsService.findReviewById(reviewId)
            .then(review => {
                res.json(review)
            })
    }

    const findReviewsForRecipe = (req, res) => {
        const recipeId = req.params['recipeId']
        reviewsService.findReviewsForRecipe(recipeId)
            .then(reviews => {
                res.send(reviews)
            })
    }

    const createReviewForRecipe = (req, res) => {}

    const deleteReview = (req, res) => {}

    const updateReview = (req, res) => {}

    app.get('/api/internal/reviews', findAllReviews)
    app.get('/api/internal/reviews/:reviewId', findReviewById)
    app.get('/api/internal/recipes/:recipeId/reviews', findReviewsForRecipe)
}
