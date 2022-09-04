const express = require('express');
const router = express.Router();

const { requireAuth } = require('../../utils/auth.js');
const { User, Spot, SpotImage, Booking, Review, ReviewImage, sequelize } = require('../../db/models');



// Delete a Review Image
router.delete('/:imageId', requireAuth, async (req, res) => {
    const reviewImage = await ReviewImage.findByPk(req.params.imageId);

    if (reviewImage) {
        const review = await Review.findByPk(reviewImage.reviewId);

        if (review.userId === req.user.id) {
            await reviewImage.destroy();

            return res.json({
                message: "Successfully deleted",
                statusCode: 200
            })
        } else {
            return res.status(403).json({
                message: "You are not authorized to delete this review image",
                statusCode: 403
            })
        }
    } else {
        return res.status(404).json({
            message: "Review Image couldn't be found",
            statusCode: 404
        })
    }
})







module.exports = router;