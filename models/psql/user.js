const bcrypt = require('bcryptjs');
const pool = require('./db')

class User {
    
    static async create(username, password) {
        try {
            password = await bcrypt.hash(password, 8)
            let result = await pool.query("INSERT INTO users(username, password) VALUES ($1, $2) RETURNING *", [username, password])
            return result.rows
        } catch(e) {
            if (e.code === '23505') throw "User already exists"
            throw e
        }
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