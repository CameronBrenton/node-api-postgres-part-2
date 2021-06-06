const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'cameronbrenton',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5432
});

/*
 Create - POST
 Retreive - GET
 Update - PUT
 Delete - DELETE
*/

const createUser = (name, email) => {
    return pool.query('INSERT INTO users (name, email) VALUES  ($1, $2)', [name, email])
        .then(results => {
            return "Successfully created user";
        })
        .catch(error => {
            console.error(error);
            throw error;
        });
};

const getUsers = (request, response) => {
    return pool.query('SELECT * FROM users ORDER BY id ASC')
        .then(results => {
            return results.rows;
        })
        .catch(error => {
            console.error(error);
            throw error;
        });
};

const getUserById = (id) => {
    return pool.query('SELECT * FROM users WHERE id = $1', [id])
        .then(results => {
            return results.rows;
        })
        .catch(error => {
            console.error(error);
            throw error;
        });
};

const updateUser = (id, name, email) => {
    return pool.query(
        'UPDATE users SET name = $1, email = $2 WHERE id = $3',
        [name, email, id])
        .then(results => {
            return `User with id ${id} has successfully been updated!`;
        })
        .catch(error => {
            console.error(error);
            throw error;
        });
};

const deleteUser = (id) => {
    return pool.query('DELETE FROM users WHERE id = $1', [id])
        .then(results => {
            return `User with id ${id} has successfully been deleted!`;
        })
        .catch(error => {
            console.error(error);
            throw error;
        });
};

const db = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}

module.exports = db;