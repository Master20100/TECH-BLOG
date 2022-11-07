
const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      }
}

User.init({
// Model attributes are defined here
username: {
type: DataTypes.STRING,
allowNull: false
},
password: {
type: DataTypes.STRING,
allowNull : false
}
}, {
  hooks:{
    async beforeCreate(newUserData) {
      newUserData.password = await bcrypt.hash(newUserData.password, 10);
      return newUserData;
    }
  },
// Other model options go here
sequelize, // We need to pass the connection instance
modelName: 'User' // We need to choose the model name
});

module.exports = User;