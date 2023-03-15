module.exports = (sequelize, type) => {
    return sequelize.define('task', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        task: type.STRING,
    })
}