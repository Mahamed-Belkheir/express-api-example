class UserController {
    constructor(UserModel) {
        this.UserModel = UserModel;
    }

    async signUp(username, password) {
        if (!username || !password) throw `Missing input: ${username ? username: ""} ${password ? password: ""}`;
        let [user] = await this.UserModel.create(username, password)
        return user
    }

    async signIn(username, password) {
        if (!username || !password) throw `Missing input: ${username ? username: ""} ${password ? password: ""}`;
        let [user] = await this.UserModel.find(username);
        if (!user) throw "User not found";
        let check = await this.UserModel.comparePassword(password, user.password);
        if (!check) throw "Invalid password";
        return user;
    }

}

module.exports = UserController