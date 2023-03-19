const Sequelize = require('sequelize');
const UserModel = require('./models/users');

const sequelize = new Sequelize('namedatabase', 'user', 'contraseña', {
    host: 'host',
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
