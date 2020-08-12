const Express = require('express')

// Import dependency injected controller objects
const { controllers, qufl } = require('../dependencies');

let router = Express.Router()

router.post('/signin', async (req, res, next) => {
    try {
        let { username, password } = req.body;
        // Use controller to validate user credentials
        let user = await controllers.users.signIn(username, password)
        // Generate a token and a refresh token using the user's ID
        let tokens = qufl.signToken({ sub: user.id })
        res.send(tokens)
    } catch (e) {
        next(e);
    }
})

router.post('/signup', async (req, res, next) => {
    try {
        let { username, password } = req.body
        // Use controller to attempt registering the user
        let user = await controllers.users.signUp(username, password)
        let tokens = qufl.signToken({ sub: user.id })
        res.send(tokens)
        
    } catch (e) {
        next(e);
    }
})

router.post('/signout', qufl.getValidator(), async (req, res, next) => {
    try {
        // The validator decodes the token and inserts it into the request under the qufl attribute
        // we use the decoded token to invalidate the user's refresh token
        qufl.removeToken(req.qufl)
        res.status(200).send()
    } catch (e) {
        next(e);
    }
})

router.get('/refresh', qufl.getValidator({ type: "refresh" }), async (req, res, next) => {
    try {
        // Use the decoded token to check if there's a valid refresh token, if so, give back a new token
        let token = await qufl.refreshToken(req.qufl);
        res.send(token);
    } catch (e) {
        next(e);
    }
})


module.exports = router;