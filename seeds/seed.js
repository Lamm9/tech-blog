const sequelize = require("../config/connection");
const { User, Article } = require("../models");

const userData = require("./userData.json");
const articleData = require("./articleData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const article of articleData) {
    await Article.create({
      article_id: article.article_id,
      title: article.title,
      content: article.content,
      user_id: article.user_id,
    });
  }

  process.exit(0);
};

seedDatabase();
