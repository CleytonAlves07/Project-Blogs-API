const {
    createUserService,
    getAllUserService,
    getByIdUserService,
} = require('../services/userService');

const createUserController = async (req, res) => {
    const { displayName, email, password, image } = req.body;

    const { status, message, token } = await createUserService(displayName, email, password, image);
    
    return res.status(status).json(token ? { token } : { message });
};

const getAllUserController = async (_req, res) => {
    const { status, message, users } = await getAllUserService();

    return res.status(status).json(users || { message });
};

const getByIdUserController = async (req, res) => {
    const { id } = req.params;
    const { status, message, user } = await getByIdUserService(id);

    return res.status(status).json(user || { message });
};

module.exports = {
    createUserController,
    getAllUserController,
    getByIdUserController,
};