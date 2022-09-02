const express = require('express');
const router = express.Router();

const { requireAuth } = require('../../utils/auth.js');

const { User, Spot, SpotImage, Booking, Review, ReviewImage, sequelize } = require('../../db/models');





// Get all Reviews of the Current User -- 
router.get('/current', requireAuth, async (req, res) => {
    const reviews = await Review.findAll({
        where: { userId: req.user.id }
    });

    const user = await User.findOne({
        where: {
            id: req.user.id
        },
        attributes: {
            include: ['id', 'firstName', 'lastName']
        }
    });

    for (let i = 0; i < reviews.length; i++) {
        let review = reviews[i];

        // const spot = await Spot.findOne({
        //     where: { id: review.spotId },
        //     attributes: {
        //         exclude: ['createdAt', 'updatedAt']
        //     }
        // })

        const spot = await review.getSpot({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });

        const spotImages = await SpotImage.findAll({
            where: {
                spotId: spot.id
            }

        })

        spotImages.forEach(image => {
            if (image.preview === true || image.preview === 1) {
                spot.previewImage = image.url;
            }
            if (!spot.previewImage) {
                spot.previewImage = null;
            }
        })

        const reviewImages = await review.getReviewImages({
            // where: {
            //     reviewId: review.id,
            //     attributes: ['id', 'url']
            // }
        })
        // console.log(reviewImages)


        // const reviewImages = await ReviewImage.findAll({
        //     where: {
        //         reviewId: review.id,
        //         attributes: ['id', 'url']
        //     }
        // })

        review.User = user;
        review.Spot = spot;
        review.ReviewImages = reviewImages;

        return res.json({
            Reviews: review
        })
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
})




// Edit a Review
router.put('/:reviewId', requireAuth, async (req, res) => {
    // require proper auth
})



// Delete a Review
router.delete('/:reviewId', requireAuth, async (req, res) => {
    // require proper auth
})


module.exports = router;