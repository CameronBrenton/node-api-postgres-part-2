const db = require('../../db');

class Users {
    async create(name, email) {
        return await db.createUser(name, email);
    }

    async findOne(id) {
        return await db.getUserById(id);
    }

    async findAll(id) {
        return await db.getUsers(id);
    }

    async update(id, name, email) {
        return await db.updateUser(id, name, email);
    }

    async delete(id) {
        return await db.deleteUser(id);
    }
}

module.exports = Users;