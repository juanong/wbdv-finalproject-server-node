const usersModel = require("../models/users/users-model")

const findAllUsers = () => {
    return usersModel.find()
}
const findUserById = (userId) => {
    return usersModel.findById(userId)
}

const findUserByUsername = (username) => {
    return usersModel.find({username: username})
}

const createUser = (post) => {
    try {
        const newUser = new usersModel(post)
        return usersModel.save(newUser)
    } catch (error) {
        return "404"
    }
}
const deleteUserById = (userId) => {
    return usersModel.remove({_id: userId})
}
const updateUserById = () => {}

module.exports = {
    findAllUsers,
    findUserById,
    findUserByUsername,
    createUser,
    deleteUserById,
    updateUserById
}