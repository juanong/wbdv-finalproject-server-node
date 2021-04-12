module.exports = (app) => {
    const add = (req, res) => {
        const a = parseInt(req.params['paramA'])
        const b = parseInt(req.params['paramB'])
        // Response MUST send back a string
        res.send(`${a + b}`)
    }

    const getObject = (req, res) =>{
        const object = {id: "123"}
        res.json(object)
    }

    /*
    This is a sample GET request - with a URL '/', invoke the function in the second param.
    Every function we give to the express app needs a req and res argument.
     */
    app.get('/', function (req, res) {
        res.send('Hello World')
    })

    app.get('/add/:paramA/:paramB', add)

    app.get('/get/object', getObject)
}