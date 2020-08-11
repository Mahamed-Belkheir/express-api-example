const Qufl = require('qufl');
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET || "my jwt secret";

// Initialize the qufl object and export it to be used elsewhere
let qufl = new Qufl({
    jwt: jwt,
    secret: jwtSecret,
    timeout: "15m"
});

// Register routes to the express app, add new routes here
function bootRoutes(expressApp) {    
    expressApp.use('/users', require('../routes/users'))
}



module.exports = { qufl, bootRoutes }