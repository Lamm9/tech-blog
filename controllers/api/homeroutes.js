const router = require("express").Router();
const getAuth = require("../../utils/helpers");

router.get("/", getAuth, async (req, res) => {
  try {
    res.render("homepage", {
      logged_in: req.session.logged_in
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
})
