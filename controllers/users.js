const { UserNotFound, InvalidCredentials, MissingUserData } = require('../excreptions/user');

class UserController {
    constructor(UserModel) {
        this.UserModel = UserModel;
    }

    async signUp(username, password) {
        if (!username || !password) throw new MissingUserData([!password? "password": undefined, !username? "username": undefined]);
        let [user] = await this.UserModel.create(username, password)
        return user
    }

    async signIn(username, password) {
        if (!username || !password) throw `Missing input: ${username ? username: ""} ${password ? password: ""}`;
        let [user] = await this.UserModel.find(username);
        if (!user) throw new UserNotFound();
        let check = await this.UserModel.comparePassword(password, user.password);
        if (!check) throw new InvalidCredentials();
        return user;
    }

}

module.exports = UserController