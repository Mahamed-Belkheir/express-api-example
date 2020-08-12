const Qufl = require('qufl');
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET || "my jwt secret";

// Initialize the qufl object and export it to be used elsewhere
let qufl = new Qufl({
    jwt: jwt,
    secret: jwtSecret,
    timeout: "15m"
});


module.exports = qufl;