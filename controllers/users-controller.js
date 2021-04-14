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

    const findUserByUsername = (req, res) => {
        const username = req.params['username']
        usersService.findUserByUsername(username)
            .then(user => {
                res.send(user)
            })
    }

    const createUser = (req, res) => {
        usersService.createUser(req.body)
            .then(response => res.send(response))
    }

    const deleteUserById = (req, res) => {
        const userId = req.params['userId']
        usersService.deleteUserById(userId)
            .then(res.send("OK"))
    }
    const updateUserById = (req, res) => {}

    app.get('/api/internal/users', findAllUsers)
    app.get('/api/internal/users/:userId', findUserById)
    app.get('/api/internal/users/username/:username', findUserByUsername)
    app.delete('/api/internal/users/:userId', deleteUserById)
    app.post('/api/internal/users', createUser)
}
