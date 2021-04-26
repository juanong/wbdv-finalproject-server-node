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

const findAllFollowersForUser = (username) => {
    return usersModel.find({username: username}, {followers: 1})
}

const findAllFollowingForUser = (username) => {
    return usersModel.find({username: username}, {following: 1})
}

const findFilteredUser = (users) => {
    return usersModel.find({
        username: {
            $in: users
        }
    })
}

const followUser = (username, userGettingFollowed) => {

    return usersModel.update(
        {username: userGettingFollowed},
        {
            $push: {
                followers: username
            }
        }
    )
        .then(status => usersModel.update(
            {username: username},
            {
                $push: {
                    following: userGettingFollowed
                }
            }
        ))
}


module.exports = {
    findAllUsers,
    findUserById,
    findUserByUsername,
    createUser,
    deleteUserById,
    updateUser,
    findUserByCredentials,
    findAllFollowersForUser,
    findAllFollowingForUser,
    followUser,
    findFilteredUser
}