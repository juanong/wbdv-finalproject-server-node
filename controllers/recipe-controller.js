const recipesService = require("../services/recipe-service")

module.exports = (app) => {
    // const findRecipeById = (req, res) => {
    //     recipesService.findRecipeById()
    // }

    const createRecipe = (req, res) => {
        const userId = req.params.username
        const newRecipe = req.body
        recipesService.createRecipeForUser(userId, newRecipe).then(
            (status) => res.send(status)
        )
    }

    const findAllRecipesByTitle = (req, res) => {
        const title = req.query.title
        if (title !== undefined) {
            recipesService.findAllRecipesByTitle(title)
                .then((recipes) => res.send(recipes))
        }
    }

    const findRecipeById = (req, res) => {
        const recipeId = req.params.recipeId
        recipesService.findRecipeById(recipeId)
            .then(recipe => {
                if (recipe) {
                    res.send(recipe)
                } else {
                    res.send("0")
                }
            })
    }

    app.post('/api/internal/users/:username/create-recipe', createRecipe)
    app.get('/api/internal/search', findAllRecipesByTitle)
    app.get('/api/internal/recipes/:recipeId', findRecipeById)
}