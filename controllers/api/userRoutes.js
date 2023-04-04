const router = require("express").Router();
const { User, Article } = require("../../models/");

// login routes
router.get("/login", async (req, res) => {
  try {
    res.render("login");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.create({
      name: req.body.name,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(userData);
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// logout routes
router.post('/logout', async (req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
})