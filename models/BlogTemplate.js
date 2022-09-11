const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class BlogTemplate extends Model{};

BlogTemplate.init({
    title:{
        type:DataTypes.STRING,
        allowNull:false},
    content:{
        type:DataTypes.STRING
        },
    author:{
        type: DataTypes.STRING,
        allowNull:false
        },
    date:{
        type: DataTypes.STRING,
        allowNull:false
    }
},
{
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'BlogTemplate' // We need to choose the model name
    }
)

module.exports = 'BlogTemplate';