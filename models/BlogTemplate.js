const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class BlogTemplate extends Model{};
console.log("---------3")
BlogTemplate.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
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
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'id',
        },
      }
},
{
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'BlogTemplate' // We need to choose the model name
    }
)

module.exports = 'BlogTemplate';