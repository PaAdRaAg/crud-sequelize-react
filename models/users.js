module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: type.STRING(40),
            allowNull: false
        },
        lastName: {
            type: type.STRING(40),
            allowNull: false
        },
        email: {
            type: type.STRING(60),
            allowNull: false
        }
    })
}
