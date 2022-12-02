const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports = (req, res, next) => {
    try {
        // array will be ['bearer', 'the token']
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'DOUCHBAG_TOKEN_SECRET');
        const userId = decodedToken.userId;
        req.auth = { userId };
        const user = User.findOne({_id: userId})
            .then(user => {
                if (req.body.userId && req.body.userId !== userId && user.role !== 'admin') {
                    throw 'User ID not valid !';
                } else if (user.role === 'admin') {
                    next();
                }
            })
            .catch(error => res.status(404).json({ error }));
        
    } catch (error) {
        res.status(401).json({ error: error | 'Query not authanticated !'});
    }
};