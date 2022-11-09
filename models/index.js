const User = require('./User');
const BlogTemplate = require('./BlogTemplate');

User.hasMany(BlogTemplate, {
    foreignKey: 'user_id'
});

BlogTemplate.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User,BlogTemplate };