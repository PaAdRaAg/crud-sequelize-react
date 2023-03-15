const jwt = require('jwt-simple');

const checkToken = (req, res, next) => {
    if(!req.headers['user-token']){
        return res.json({ error: 'Token is required' });
    }

    const userToken = req.headers['user-token'];
    let payload = {};

    try {
        payload = jwt.decode(userToken, 'secret');
    } catch (err) {
        return res.json({ error: 'Invalid Token' });
    }

    if(payload.expiredAt < moment().unix()){
        return res.json({ error: 'Token has expired' });
    }

    req.logUserId = payload.logUserId;

    next();
}

module.exports = {
    checkToken: checkToken
}