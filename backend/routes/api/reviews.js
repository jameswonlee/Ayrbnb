const express = require('express');
const router = express.Router();

const { requireAuth } = require('../../utils/auth.js');

const { User, Spot, SpotImage, Booking, Review, ReviewImage, sequelize } = require('../../db/models');





// Get all Reviews of the Current User
router.get('/current', requireAuth, async (req, res) => {
    const reviews = await Review.findAll({ 
        where: { userId: req.user.id }
    });

    const user = await User.findOne({ 
        where: { 
            id : req.user.id 
        },
        attributes: {
            include: ['id', 'firstName', 'lastName']
        }
    });

    for (let review of reviews) {
        const spot = await Spot.findOne({
            where: { id: review.spotId },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })
        const spotImages = await SpotImage.findAll({ 
            where: { 
                spotId: spot.id
            }

        })
        spotImages.forEach(image => {
            if (image.preview === true || image.preview === 1) {
                spot.previewImage = image.url;
            }
        })
        if (!spot.previewImage) {
            spot.previewImage = null;
        }
        const reviewImages = await ReviewImage.findAll({
            where: {
                reviewId: review.id,
                attributes: ['id', 'url']
            }
        })
        review.User = user;
        review.Spot = spot;
        review.ReviewImages = reviewImages
    };


    return res.json({
        Reviews: reviews
    })
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