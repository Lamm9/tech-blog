const router = require("express").Router();
const getAuth = require("../../utils/helpers");
const { User, Article } = require("../../models/");

// homepage
router.get("/", async (req, res) => {
  try {
    const articleData = await Article.findAll({
      include: [{ model: User, attributes: ["name"] }],
    });
    const articles = articleData.map((article) => article.get({ plain: true }));
    res.render("homepage", { articles });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// post article
router.post("/", async (req, res) => {
  try {
    const articleData = await Article.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(articleData);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
