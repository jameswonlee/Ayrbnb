const express = require('express');
const router = express.Router();

const { requireAuth } = require('../../utils/auth.js');

const { User, Spot, SpotImage, Booking, Review, ReviewImage, sequelize } = require('../../db/models');
const { next } = require('cli');


// Get all Reviews of the Current User
router.get('/current', requireAuth, async (req, res) => {
    const reviews = await Review.findAll({ where: { userId: req.user.id } });

    const user = await User.findOne({
        where: { id: req.user.id },
        attributes: { exclude: ['username'] },
        raw: true
    });

    for (let review of reviews) {

        const spot = await review.getSpot({
            attributes: { exclude: ['description', 'createdAt', 'updatedAt'] },
            raw: true
        });

        const spotImages = await SpotImage.findAll({
            where: { spotId: spot.id }
        });

        for (let spotImage of spotImages) {
            if (spotImage.preview === true || spotImage.preview === 1) {
                spot.previewImage = spotImage.url
            }
            if (!spot.previewImage) {
                spot.previewImage = null;
            }
        }

        const reviewImages = await ReviewImage.findAll({
            where: { reviewId: review.id },
            attributes: ['id', 'url'],

        })

        review = review.toJSON();

        review.User = user;
        review.Spot = spot;
        review.ReviewImages = reviewImages;

        return res.json({
            Reviews: [review]
        })
    }
});


// Get a review by reviewId
router.get('/:reviewId', requireAuth, async (req, res) => {
    const review = Review.findByPk(req.params.reviewId);

    if (!review) {
        return res.status(404).json({
            message: "Review could not be found",
            statusCode: 404
        })
    } else {
        return res.json(review);
    }
})




// Add an Image to a Review based on the Review's id 
router.post('/:reviewId/images', requireAuth, async (req, res) => {
    const { url } = req.body;

    const review = await Review.findByPk(req.params.reviewId);

    if (review) {

        if (review.userId !== req.user.id) {
            return res.status(403).json({
                message: "You must have authorization to add images to this review",
                statusCode: 403
            })

        } else if (review.userId === req.user.id) {

            const reviewImages = await ReviewImage.findAll({ where: { reviewId: review.id } });
            if (reviewImages.length < 10) {
                const newReviewImage = await ReviewImage.create({
                    reviewId: req.params.reviewId,
                    url,
                })

                const response = {};
                response.id = newReviewImage.id;
                response.url = newReviewImage.url;

                res.json(response)

            } else {
                res.status(403).json({
                    message: "Maximum number of images for this resource was reached",
                    statusCode: 403
                })
            }
        }
    } else {
        return res.status(404).json({
            message: "Review couldn't be found",
            statusCode: 404
        })
    }
});



// Edit a Review 
router.put('/:reviewId', requireAuth, async (req, res, next) => {
    const { review, stars } = req.body;
    
    const reviewToUpdate = await Review.findByPk(req.params.reviewId);

    if (!reviewToUpdate) {
        return res.status(404).json({
            message: "Review couldn't be found",
            statusCode: 404
        })
    }

    if (reviewToUpdate.userId === req.user.id) {
        
        if (review && stars) {
            reviewToUpdate.review = review;
            reviewToUpdate.stars = stars;

            await reviewToUpdate.save();
            return res.json(reviewToUpdate)

        } else {
            const err = {};
            err.errors = {};

            if (!review) err.errors.review = "Review text is required";
            if (!stars) err.errors.stars = "Stars must be an integer from 1 to 5";

            err.title = "Validation Error",
                err.message = "Validation Error",
                err.status = 400;
            return next(err);
        }

    } else {
        return res.status(403).json({
            message: "Not authorized to edit this review",
            statusCode: 403
        })
    }
});



// Delete a Review
router.delete('/:reviewId', requireAuth, async (req, res) => {
    const review = await Review.findByPk(req.params.reviewId);

    if (!review) {
        return res.status(404).json({
            message: "Review couldn't be found",
            statusCode: 404
        })
    }

    if (review.userId === req.user.id) {
        await review.destroy();

        return res.json({
            message: "Successfully deleted",
            statusCode: 200
        })
    } else {
        return res.status(403).json({
            message: "You do not have authority to delete this review",
            statusCode: 403
        })
    }
});


module.exports = router;