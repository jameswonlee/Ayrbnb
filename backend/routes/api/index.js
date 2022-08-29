const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');

// GET /api/set-token-cookie
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');

// GET /api/restore-user
const { restoreUser } = require('../../utils/auth.js');

// GET /api/require-auth
const { requireAuth } = require('../../utils/auth.js');

router.use(restoreUser);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);


router.get('/test', requireAuth, (req, res) => {
  res.json({
    message: 'success'
  })
})

router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
  });




module.exports = router;