const usersService = require("../services/users-service")

// Jose just has a single function called register, which checks if the user exists and also creates the user

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

    const register = (req, res) => {
        const credentials = req.body
        usersService.findUserByUsername(credentials.username)
            .then(actualUser => {
                // If this username is taken, send back some message
                if (actualUser) {
                    res.send("0")
                } else {
                    usersService.createUser(credentials)
                        .then(newUser => {
                            // Anyone in the profile is logged in
                            req.session['profile'] = newUser
                            res.send(newUser)
                        })
                }
            })
    }

    const login = (req, res) => {
        const credentials = req.body
        usersService.findUserByCredentials(credentials)
            .then(actualUser => {
                if (actualUser) {
                    req.session['profile'] = actualUser
                    res.send(actualUser)
                } else {
                    res.send("0")
                }
            })
    }

    const logout = (req, res) =>
        req.session.destroy().then(res.send("OK"))

    const deleteUserById = (req, res) => {
        const userId = req.params['userId']
        usersService.deleteUserById(userId)
            .then(res.send("OK"))
    }
    const updateUser = (req, res) => {
        const updatedUser = req.body
        usersService.updateUser(updatedUser)
            .then(response => {
                req.session['profile'] = updatedUser
                return res.send(response)
            })
    }

    const profile = (req, res) => {
        const currUser = req.session["profile"]
        res.send(currUser)
    }

    app.get('/api/internal/users', findAllUsers)
    app.get('/api/internal/users/:userId', findUserById)
    app.get('/api/internal/users/username/:username', findUserByUsername)
    app.post('/api/internal/users/login', login)
    app.delete('/api/internal/users/:userId', deleteUserById)
    app.post('/api/internal/users', register)
    app.post('/api/internal/users/profile', profile)
    app.post('/api/internal/users/logout', logout)
    app.put('/api/internal/users', updateUser)
}
