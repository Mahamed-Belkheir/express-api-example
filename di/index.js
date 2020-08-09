const UserController = require('../controllers/users');

class Controllers {

    constructor(models) {
        this.UserModel = models.UserModel;
        this.userInstance = null;
    }

    get users() {
        if (this.userInstance) return this.userInstance;
        this.userInstance = new UserController(this.UserModel);
        return this.userInstance;
    }
}

module.exports = { Controllers };