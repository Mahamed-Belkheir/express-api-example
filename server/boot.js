const Qufl = require('qufl');
const jwt = require('jsonwebtoken');
const { controllerInitializer } = require('../di/index')

const jwtSecret = process.env.JWT_SECRET || "my jwt secret";

let qufl = new Qufl({
    jwt: jwt,
    secret: jwtSecret,
    timeout: "15m"
});

function bootRoutes(expressApp) {    
    expressApp.use('/users', require('../routes/users'))
}

function dependencyInjection() {
    const models = {
        UserModel: require('../models/psql/user')
    }
    return {
        controllers: controllerInitializer(models)
    }
}

module.exports = { qufl, bootRoutes, ...dependencyInjection() }