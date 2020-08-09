const Express = require('express')
const e = require('express')

let router = Express.Router()

router.post('/signin', async (req, res, next) => {
    try {

    } catch (e) {
        next(e)
    }
})

router.post('/signup', async (req, res, next) => {
    try {

    } catch (e) {
        next(e)
    }
})

router.post('/signout', async (req, res, next) => {
    try {

    } catch (e) {
        next(e)
    }
})

router.get('/refresh', async (req, res, next) => {
    try {

    } catch (e) {
        next(e)
    }
})


module.exports = router;