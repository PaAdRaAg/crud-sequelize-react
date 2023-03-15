const Sequelize = require('sequelize');

const TaskModel = require('./models/tasks');
const LogUserModel = require('./models/logUser');

const sequelize = new Sequelize('mydatabase', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

const Task = TaskModel(sequelize, Sequelize);
const LogUser = LogUserModel(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database & tables synced!');
    });
    
module.exports = { 
    Task,
    LogUser
};