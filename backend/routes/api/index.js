const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const spotsRouter = require('./spots.js');
const reviewsRouter = require('./reviews.js');
const bookingsRouter = require('./bookings.js');
const spotImagesRouter = require('./spot-images.js');
const reviewImagesRouter = require('./review-images.js');
const { restoreUser } = require('../../utils/auth.js');
const mapsRouter = require('./maps');

// GET /api/set-token-cookie
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');

// GET /api/require-auth
const { requireAuth } = require('../../utils/auth.js');
/* ----------------------------------- Routers -----------------------------------*/
router.use(restoreUser);

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/spots', spotsRouter);
router.use('/reviews', reviewsRouter);
router.use('/bookings', bookingsRouter);
router.use('/spot-images', spotImagesRouter);
router.use('/review-images', reviewImagesRouter);
router.use('/maps', mapsRouter);

// Test
router.get('/test', requireAuth, (req, res) => {
  res.json({
    message: 'success'
  })
})



// Test
router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
  });



module.exports = router;