
// Register routes to the express app, add new routes here
function bootRoutes(expressApp) {    
    expressApp.use('/users', require('../routes/users'))
}



module.exports = { bootRoutes }