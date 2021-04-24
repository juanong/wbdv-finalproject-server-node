const usersModel = require("../models/users/users-model")

const findAllUsers = () => {
    return usersModel.find()
}
const findUserById = (userId) => {
    return usersModel.findById(userId)
}

const findUserByUsername = (username) => {
    return usersModel.findOne({username: username})
}

const findUserByCredentials = (credentials) => {
    return usersModel.findOne({username: credentials.username, password: credentials.password})
}

const createUser = (newUser) => {
    try {
        return usersModel.create(newUser)
    } catch (error) {
        return "-1"
    }
}
const deleteUserById = (userId) => {
    return usersModel.remove({_id: userId})
}
const updateUser = (updatedUser) => {
    try {
        return usersModel.updateOne({_id: updatedUser._id}, {$set: updatedUser})
    } catch {
        return "-1"
    }
}

module.exports = {
    findAllUsers,
    findUserById,
    findUserByUsername,
    createUser,
    deleteUserById,
    updateUser,
    findUserByCredentials
}