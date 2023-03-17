const Sequelize = require('sequelize');
const UserModel = require('./models/users');

const sequelize = new Sequelize('mydatabase', 'root', 'Adrian_090702', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

const User = UserModel(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database & tables synced!');
    });
    
module.exports = { 
    User
};