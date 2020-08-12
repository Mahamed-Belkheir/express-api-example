
// Register routes to the express app, add new routes here
function bootRoutes(expressApp) {    
    expressApp.use('/users', require('../routes/users'))



    //central error handler, register last
    expressApp.use(require('../excreptions/handler'))
}



module.exports = { bootRoutes }