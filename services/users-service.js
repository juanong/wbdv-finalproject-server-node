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

const createUser = (newUser) => {
    try {
        const response = usersModel.create(newUser)
        console.log(response)
        return response
    } catch (error) {
        return -1
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