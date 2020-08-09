class UserController {
    constructor(UserModel) {
        this.UserModel = UserModel;
    }

    async signUp(username, password) {
        let check = await this.UserModel.find(username);
        if (check) throw "User already exists";
        return this.UserModel.create(username, password)
    }

    async signIn(username, password) {
        let user = await this.UserModel.find(username);
        if (!user) throw "User not found";
        let check = await this.UserModel.comparePassword(password, user.password);
        if (!check) throw "Invalid password";
        return user;
    }

}

module.exports = UserController