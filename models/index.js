const User = require('./User');
const Article = require('./Article');

Article.belongsTo(User, {
  foreignkey: 'user_id'
});

module.exports = { Article };