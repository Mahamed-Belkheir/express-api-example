const UserController = require('../controllers/users');

// Initializes instances of controllers with the provided model dependencies
function controllerInitializer(models) {
    return {
        users: new UserController(models.UserModel)
    }
}

module.exports = { controllerInitializer };