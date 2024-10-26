const jwt = require('jsonwebtoken');
const { User } = require('../models');

exports.verifyToken = async (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).send('Token is required');

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findByPk(decoded.id);
        next();
    } catch (error) {
        return res.status(401).send('Invalid token');
    }
};
