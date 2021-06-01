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

const createUser = (request, response) => {
    const { name, email } = request.body;

    pool.query('INSERT INTO users (name, email) VALUES  ($1, $2)', [name, email], (error, results) => {
        if (error) throw error;

        response.status(201).json("A user has successfully been created!");
    });
};

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) throw error;

        response.status(200).json(results.rows);
    });
};

const getUsersById = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) throw error;

        response.status(200).json(results.rows);
    });
};

const updateUser = (request, response) => {
    const id = parseInt(request.params.id);
    const { name, email } = request.body;

    pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3',
        [name, email, id], 
        (error, results) => {
        if (error) throw error;

        response.status(200).json(`User with id ${id} has successfully been updated!`);
    });
};

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) throw error;

        response.status(200).json(`User with id ${id} has successfully been eleted!`);
    });
};

module.exports = {
    getUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser
}