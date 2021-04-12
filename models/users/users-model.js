const mongoose = require("mongoose")
const usersSchema = require("./users-schema")

// This model allows us to read and write this users schema
const usersModel = mongoose.model(
    "Users",
    usersSchema
)

module.exports = usersModel