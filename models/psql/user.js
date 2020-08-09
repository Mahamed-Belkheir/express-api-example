const bcrypt = require('bcryptjs');
const pool = require('./db')

class User {
    
    static async create(username, password) {
        password = await bcrypt.hash(password)
        let result = await pool.query("INSERT INTO users(username, password) VALUES ($1, $2) RETURNING *", [username, password])
        return result
    }

    static async find(username) {
        let result = await pool.query("SELECT * FROM users WHERE username = $1", [username])
        return result
    }

    static comparePassword(password, passwordHash) {
        return bcrypt.compare(password, passwordHash)
    }

}

module.exports = User;