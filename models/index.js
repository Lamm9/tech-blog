const User = require('./User');
const Article = require('./Article');

Article.belongsTo(User, {
  foreignkey: 'user_id'
});

User.hasMany(Article, {
  foreignkey: 'article_id'
})

module.exports = { Article, User };