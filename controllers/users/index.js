const createUser = async (request, response) => {
    const {name, email} = request.body;
    try{
        response.status(201).send()
    } catch(error) {
        
    }
}

const getUsers = async (request, response) => {
    
}

const getUserById = async (request, response) => {
    
}

const updateUser = async (request, response) => {
    
}

const deleteUser = async (request, response) => {
    
}

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}