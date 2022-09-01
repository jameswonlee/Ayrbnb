const express = require('express');
const router = express.Router();

const { requireAuth } = require('../../utils/auth.js');

const { User, Spot, SpotImage, Booking, Review, ReviewImage, sequelize } = require('../../db/models');





// Get all Reviews of the Current User
router.get('/current', requireAuth, async (req, res) => {
    
})



// Add an Image to a Review based on the Review's id
router.post('/:reviewId/images', requireAuth, async (req, res) => {

})




// Edit a Review
router.put('/:reviewId', requireAuth, async (req, res) => {

})



// Delete a Review
router.delete('/:reviewId', requireAuth, async (req, res) => {

})


module.exports = router;