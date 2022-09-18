const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class User extends Model {}

User.init({
// Model attributes are defined here
userName: {
type: DataTypes.STRING,
allowNull: false
},
password: {
type: DataTypes.STRING,
allowNull : false
}
}, {
// Other model options go here
sequelize, // We need to pass the connection instance
modelName: 'User' // We need to choose the model name
});

module.exports = User;