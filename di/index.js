const UserController = require('../controllers/users');


function controllerInitializer(models) {
    return {
        users: new UserController(models.UserModel)
    }
}

module.exports = { controllerInitializer };