const usersService = require("../services/users-service")

module.exports = (app) => {
    const findAllUsers = (req, res) => {
        usersService.findAllUsers()
            .then(users => {
                res.send(users)
            })
    }
    const findUserById = (req, res) => {
        const userId = req.params['userId']
        usersService.findUserById(userId)
            .then(user => {
                res.json(user)
            })
    }

    const createUser = (req, res) => {
    }

    const deleteUserById = (req, res) => {
        const userId = req.params['userId']
        usersService.deleteUserById(userId)
            .then(res.send("OK"))
    }
    const updateUserById = (req, res) => {}

    app.get('/api/internal/users', findAllUsers)
    app.get('/api/internal/users/:userId', findUserById)
    app.delete('/api/internal/users/:userId', deleteUserById)
}
