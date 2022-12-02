const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        // array will be ['bearer', 'the token']
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'ROACHES_TOKEN_SECRET');
        const userId = decodedToken.userId;
        req.auth = { userId };
        if (req.body.userId && req.body.userId !== userId) {
            throw 'User ID not valid !';
        } else {
            next();
        }
    } catch (error) {
        res.status(401).json({ error: error | 'Query not authanticated !'});
    }
};