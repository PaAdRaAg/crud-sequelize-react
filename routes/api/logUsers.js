const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { LogUser } = require('../../db');
const { check, validationResult } = require('express-validator');
const moment = require('moment');
const jwt = require('jwt-simple');

router.post('/register', [
    check('userName', 'Username is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty(),
    check('email', 'Email is required').isEmail()
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const logUser = await LogUser.create(req.body);
    res.json(logUser);
});

router.post('/login', async (req, res) => {
    const logUser = await LogUser.findOne({ where: { email: req.body.email } });
    if (logUser) {
        const validPassword = bcrypt.compareSync(req.body.password, logUser.password);
        if (validPassword) {
            res.json({ success: createToken(logUser) });
        } else {
            res.json({ error: 'Invalid Password' });
        }
    } else {
        res.json({ error: 'User not found' });
    }
});

const createToken = (logUser) => {
    const payload = {
        logUserId: logUser.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(5, 'minutes').unix()
    }
    return jwt.encode(payload, 'secret');
}

module.exports = router;