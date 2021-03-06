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

    const findRecipesByAuthor = (req, res) => {
        const author = req.params['username']
        recipesService.findRecipesByAuthor(author)
            .then(recipes => res.send(recipes))
    }

    const findRecipeById = (req, res) => {
        const recipeId = req.params.recipeId
        if (recipeId.match(/^[0-9a-fA-F]{24}$/)) {
            recipesService.findRecipeById(recipeId)
                .then(recipe => {
                    if (recipe) {
                        res.send(recipe)
                    } else {
                        res.send("0")
                    }
                })
        } else {
            res.send("0")
        }
    }

    const findLatestRecipes = (req, res) => {
        const limit = req.query.limit !== undefined ? req.query.limit : 4;
        recipesService.findLatestRecipes(limit)
            .then(recipes => res.send(recipes))
    }

    const findLatestRecipesForAuthor = (req, res) => {
        const limit = req.query.limit !== undefined ? req.query.limit : 4;
        const author_id = req.params.username
        recipesService.findLatestRecipesForAuthor(limit, author_id)
            .then(recipes => res.send(recipes))
    }

    app.post('/api/internal/users/:username/create-recipe', createRecipe)
    app.get('/api/internal/search', findAllRecipesByTitle)
    app.get('/api/internal/recipes/latest', findLatestRecipes)
    app.get('/api/internal/recipes/:recipeId', findRecipeById)
    app.get('/api/internal/users/:username/recipes', findRecipesByAuthor)
    app.get('/api/internal/users/:username/recipes/latest', findLatestRecipesForAuthor)
}