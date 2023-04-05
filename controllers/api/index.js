const router = require('express').Router();
const userRoutes = require('./userRoutes');
const homeRoutes = require('./homeroutes');

router.use('/users', userRoutes);
router.use('/', homeRoutes);

module.exports = router;