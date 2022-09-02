const express = require('express');
const router = express.Router();

const { requireAuth } = require('../../utils/auth.js');
const { User, Spot, SpotImage, Booking, Review, ReviewImage, sequelize } = require('../../db/models');


// Get all of the Current User's Bookings
router.get('/current', requireAuth, async (req, res) => {

})









module.exports = router