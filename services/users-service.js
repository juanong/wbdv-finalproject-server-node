const usersModel = require("../models/users/users-model")

const findAllUsers = () => {
    return usersModel.find()
}
const findUserById = (userId) => {
    return usersModel.findById(userId)
}
const createUser = () => {}
const deleteUserById = (userId) => {
    return usersModel.remove({_id: userId})
}
const updateUserById = () => {}

module.exports = {
    findAllUsers,
    findUserById,
    createUser,
    deleteUserById,
    updateUserById
}