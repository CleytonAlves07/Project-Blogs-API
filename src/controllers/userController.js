const { createUserService, getAllUserService } = require('../services/userService');

const createUserController = async (req, res) => {
    const { displayName, email, password, image } = req.body;

    const { status, message, token } = await createUserService(displayName, email, password, image);
    
    return res.status(status).json(token ? { token } : { message });
};

const getAllUserController = async (_req, res) => {
    const { status, message, users } = await getAllUserService();

    return res.status(status).json(users || { message });
};

module.exports = {
    createUserController,
    getAllUserController,
};