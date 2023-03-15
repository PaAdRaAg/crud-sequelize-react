module.exports = (sequelize, type) => {
    return sequelize.define('logUser', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userName: type.STRING,
        email: type.STRING,
        password: type.STRING(150),
    })
}