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
    updateUserById,
    findUserByCredentials
}