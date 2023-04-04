const router = require("express").Router();
const getAuth = require("../../utils/helpers");
const { User, Article } = require("../../models/");

// homepage
router.get("/", getAuth, async (req, res) => {
  try {
    res.render("homepage", {
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// post article
router.post("/", async (req, res) => {
  try {
    const articleData = await Article.create({
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      user_id: req.session.user_id,
    });

    res.status(200).json(articleData);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
