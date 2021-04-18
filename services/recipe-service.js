const recipeModel = require("../models/recipes/recipes-model")
const userService = require("../services/users-service")

const createRecipeForUser = (username, newRecipe) => {
    try {
        const newRecipeAdded = recipeModel.create(newRecipe);
        userService.findUserByUsername(username)
            .then((user) => {
                user.recipes.push(newRecipe);
                user.save();
            });

        return newRecipeAdded
    } catch (error) {
        return -1;
    }
}

const updateRecipe = (recipeId) => {

}

const findRecipeById = (recipeId) => {
    return recipeModel.find({_id: recipeId})
}

const findAllRecipesByTitle = (titleToFilter) => {
    return recipeModel.find({title: titleToFilter})
}

module.exports = {
    createRecipeForUser,
    updateRecipe,
    findRecipeById,
    findAllRecipesByTitle
}