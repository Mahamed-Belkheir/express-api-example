const { controllerInitializer } = require('./controller')
const Qufl = require('qufl');
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET || "my jwt secret";

// Initialize the qufl object and export it to be used elsewhere
let 

/*
  Handles dependency injection and initialization of dependant objects.
  for example, the chosen model implementation is psql, and thus we import
  the needed models, and initalize our controller with the chosen dependency here.
 */
function dependencyInjection() {
    const models = {
        UserModel: require('../models/psql/user')
    }
    return {
        controllers: controllerInitializer(models),
        qufl: new Qufl({ jwt: jwt, secret: jwtSecret, timeout: "15m" })
    }
}

module.exports = {...dependencyInjection()}