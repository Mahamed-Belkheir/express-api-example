const Qufl = require('qufl');
const jwt = require('jsonwebtoken');
const { Controllers } = require('../di/index')

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
    const UserModel = require('../models/psql/user');
    let controllers = new Controllers({
        UserModel,
    })
    return { controllers };
}

module.exports = { qufl, bootRoutes, ...dependencyInjection() }