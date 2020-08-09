const Express = require('express')
const { qufl, controllers } = require('../server/boot');

let router = Express.Router()

router.post('/signin', async (req, res, next) => {
    try {
        let { username, password } = req.body;
        let result = await controllers.users.signIn(username, password)
        return {result}
    } catch (e) {
        next(e);
    }
})

router.post('/signup', async (req, res, next) => {
    try {
        
    } catch (e) {
        next(e);
    }
})

router.post('/signout', async (req, res, next) => {
    try {

    } catch (e) {
        next(e);
    }
})

router.get('/refresh', qufl.getValidator({ type: "refresh" }), async (req, res, next) => {
    try {
        let token = await qufl.refreshToken(req.qufl);
        res.send(token);
    } catch (e) {
        next(e);
    }
})


module.exports = router;