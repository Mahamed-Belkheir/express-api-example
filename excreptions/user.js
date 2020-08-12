class UserNotFound extends Error {
    constructor() {
        super("No user was found with this username");
        this.code = 404;
    }
}

class InvalidCredentials extends Error {
    constructor() {
        super("Password did not match");
        this.code = 401;
    }
}

class UserAlreadyExists extends Error {
    constructor() {
        super("A user with this username already exists");
        this.code = 403;
    }
}

class MissingUserData extends Error {
    constructor(missingFields) {
        super("Missing " + missingFields.join(', ') +" fields");
        this.code = 404;
    }
}


module.exports = { UserNotFound, InvalidCredentials, UserAlreadyExists, MissingUserData }
