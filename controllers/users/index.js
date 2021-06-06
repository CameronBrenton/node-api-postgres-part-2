const usersModel = require('../../models/users');

const model = new usersModel();

const createUser = async (request, response) => {
    const {name, email} = request.body;

    try{
        const res = await model.create(name, email);
        response.status(201).send(res)
    } catch(error) {
        response.status(500).send(error);
    }
}

const getUsers = async (request, response) => {
    try{
        const res = await model.findAll();
        response.status(200).json(res);
    } catch(error) {
        response.status(500).send(error);
    }
}

const getUserById = async (request, response) => {
    const userID = parseInt(request.params.id);
    try{
        const res = await model.findOne(userID);
        response.status(200).json(res);
    } catch(error) {
        response.status(500).send(error);
    }
}

const updateUser = async (request, response) => {
    const userID = parseInt(request.params.id);
    const {name, email} = request.body;
    try{
        const res = await model.update(userID);
        response.status(200).json(res);
    } catch(error) {
        response.status(500).send(error);
    }
}

const deleteUser = async (request, response) => {
    const userID = parseInt(request.params.id);
    
    try{
        const res = await model.update(userID);
        response.status(200).json(res);
    } catch(error) {
        response.status(500).send(error);
    }
}

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}