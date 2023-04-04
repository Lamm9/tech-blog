const router = require('express').Router();
const userRoutes = require('./userRoutes');
const { loginRoute, logoutRoute } = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/login', loginRoute);
router.use('/logout', logoutRoute);

module.exports = router;