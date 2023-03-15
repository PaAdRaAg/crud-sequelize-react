const router = require('express').Router();

const middleware = require('./middleware');
const apiTasksRouter = require('./api/tasks');
const apiLogUsersRouter = require('./api/logUsers');

router.use('/tasks', middleware.checkToken, apiTasksRouter);
router.use('/logUsers', apiLogUsersRouter);

module.exports = router;