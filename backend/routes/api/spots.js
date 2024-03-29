const express = require('express');
const router = express.Router();
const { requireAuth } = require('../../utils/auth.js');
const { User, Spot, SpotImage, Booking, Review, ReviewImage, sequelize } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');
const { check } = require('express-validator');
const { next } = require('cli');

const validateSpot = [
    check('address')
        .exists({ checkFalsy: true })
        .withMessage('Street address is required'),
    check('city')
        .exists({ checkFalsy: true })
        .withMessage('City is required'),
    check('state')
        .exists({ checkFalsy: true })
        .withMessage('State is required'),
    check('country')
        .exists({ checkFalsy: true })
        .withMessage('Country is required'),
    check('lat')
        .exists({ checkFalsy: true })
        .withMessage('Latitude is required')
        .isLength({ min: -90, max: 90 })
        .withMessage('Latitude is not valid'),
    check('lng')
        .exists({ checkFalsy: true })
        .withMessage('Longitude is required')
        .isLength({ min: -180, max: 180 })
        .withMessage('Longitude is not valid'),
    check('name')
        .exists({ checkFalsy: true })
        .withMessage('Name is required')
        .isLength({ max: 49 })
        .withMessage('Name must be less than 50 characters'),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('Description is required'),
    check('price')
        .exists({ checkFalsy: true })
        .withMessage('Price per day is required'),
    handleValidationErrors
];



// Get all Spots --- Need to finish pagination error handling
router.get('/', async (req, res) => {
    /*------------- Pagination ------------*/
    let { page, size, minLat, maxLat, minLng, maxLng, minPrice, maxPrice } = req.query;

    const errors = {};
    const pagination = {};

    page = parseInt(page, 10);
    size = parseInt(size, 10);

    if (!page || page <= 0 || isNaN(page)) page = 1;
    if (!size || size <= 0 || isNaN(size)) size = 20;


    if (page > 10) page = 10;
    if (size > 20) size = 20;

    pagination.limit = size;
    pagination.offset = (page - 1) * size;

    /*----------------------------------------*/

    let allSpots = [];

    const spots = await Spot.findAll({ ...pagination });

    for (let spot of spots) {

        const stars = await Review.findAll({
            where: {
                spotId: spot.id
            },
            // attributes: [[sequelize.fn('ROUND', sequelize.fn('AVG', sequelize.col('stars'))), 'avgRating']],
            attributes: [[sequelize.fn('AVG', sequelize.col('stars')), 'avgRating']],
            raw: true
        });

        const spotImage = await SpotImage.findOne({
            where: {
                spotId: spot.id,
                preview: true
            },
            attributes: ['url'],
            raw: true
        });

        let spotData = spot.toJSON();

        spotData.avgRating = stars[0].avgRating;
        spotData.previewImage = spotImage.url;

        allSpots.push(spotData);
    };

    return res.json({ Spots: allSpots, page, size });
});




// Get all Spots owned by the Current User
router.get('/current', requireAuth, async (req, res) => {
    const spots = await Spot.findAll({ where: { ownerId: req.user.id }, raw: true });

    for (let spot of spots) {
        const images = await SpotImage.findAll({ where: { spotId: spot.id }, raw: true });

        if (images) {
            for (let image of images) {
                if (image.preview === 1 || image.preview === true) {
                    spot.previewImage = image.url;
                }
            }
            if (!spot.previewImage) {
                spot.previewImage = null;
            }
        }

        const totalStars = await Review.sum('stars', { where: { spotId: spot.id }, raw: true });
        const reviewCount = await Review.count({ where: { spotId: spot.id }, raw: true });

        spot.avgRating = parseInt(totalStars / reviewCount);
    }
    res.json({ Spots: spots })
});



// Get details of a Spot from an id
router.get('/:spotId', async (req, res) => {
    const { spotId } = req.params;

    let spot = await Spot.findByPk(req.params.spotId, {
        include: [
            {
                model: SpotImage,
                attributes: ['id', 'url', 'preview'],
                as: 'SpotImages'
            },
            {
                model: User,
                attributes: ['id', 'firstName', 'lastName'],
                as: 'Owner'
            }
        ]
    })

    if (!spot) {
        return res.status(404).json({
            message: "Spot couldn't be found",
            statusCode: 404
        })
    }
    spot = spot.toJSON();

    spot.numReviews = await Review.count({ where: { spotId: spot.id } });
    const reviewSum = await Review.sum('stars', { where: { spotId: spot.id } });

    spot.avgStarRating = reviewSum / spot.numReviews;

    return res.json(spot);
});




// Create a Spot
router.post('/', requireAuth, validateSpot, async (req, res, next) => {
    const { address, city, state, country, lat, lng, name, description, price } = req.body;

    // if (address && city && state && country && lat && lng && name && description && price) {
    const newSpot = await Spot.create({
        ownerId: req.user.id,
        address,
        city,
        state,
        country,
        lat,
        lng,
        name,
        description,
        price
    })

    res.status(201).json(newSpot);

    // } else {

    //     let err = {};
    //     err.errors = {};

    //     if (!address) err.errors.address = "Street address is required";
    //     if (!city) err.errors.city = "City is required";
    //     if (!state) err.errors.state = "State is required";
    //     if (!country) err.errors.country = "Country is required";
    //     if (!lat) err.errors.lat = "Latitude is not valid";
    //     if (!lng) err.errors.lng = "Longitude is not valid";
    //     if (!name) err.errors.name = "Name must be less than 50 characters";
    //     if (!description) err.errors.description = "Description is required";
    //     if (!price) err.errors.price = "Price per day is required";

    //     err.title = "Validation Error";
    //     err.message = "Validation Error";
    //     err.status = 400;
    //     return next(err);
    // }
});



// Add an Image to a Spot based on the Spot's id
router.post('/:spotId/images', requireAuth, async (req, res) => {
    const { url, preview } = req.body;
    const spot = await Spot.findByPk(req.params.spotId);

    if (spot) {
        if (spot.ownerId === req.user.id) {
            const spotImage = await SpotImage.create({
                spotId: parseInt(req.params.spotId, 10),
                url: url,
                preview: preview
            })

            const response = {};
            response.id = spotImage.id;
            response.url = spotImage.url;
            response.preview = spotImage.preview;

            return res.json(response)
        }
        else {
            return res.status(403).json({
                message: "You do not have authorization to add images to this spot",
                statusCode: 403
            })
        }
    }
    return res.status(404).json({
        message: "Spot couldn't be found",
        statusCode: 404
    })
});



// Edit a Spot
router.put('/:spotId', requireAuth, validateSpot, async (req, res, next) => {
    const { address, city, state, country, lat, lng, name, description, price } = req.body;

    const spot = await Spot.findByPk(req.params.spotId);

    if (!spot) {
        return res.status(404).json({
            message: "Spot couldn't be found",
            statusCode: 404
        })
    }

    if (spot.ownerId === req.user.id) {
        if (address) spot.address = address;
        if (city) spot.city = city;
        if (state) spot.state = state;
        if (country) spot.country = country;
        if (lat) spot.lat = lat;
        if (lng) spot.lng = lng;
        if (name) spot.name = name;
        if (description) spot.description = description;
        if (price) spot.price = price;

        await spot.save();
        return res.json(spot);

    } else if (spot.ownerId !== req.user.id) {
        return res.status(403).json({
            message: "You do not have authorization to edit this spot",
            statusCode: 403
        })

    } else {

        const err = {};
        err.errors = {};

        if (!address) err.errors.address = "Street address is required";
        if (!city) err.errors.city = "City is required";
        if (!state) err.errors.state = "State is required";
        if (!country) err.errors.country = "Country is required";
        if (!lat) err.errors.lat = "Latitude is not valid";
        if (!lng) err.errors.lng = "Longitude is not valid";
        if (!name) err.errors.name = "Name must be less than 50 characters";
        if (!description) err.errors.description = "Description is required";
        if (!price) err.errors.price = "Price per day is required";

        err.title = "Validation Error";
        err.message = "Validation Error";
        err.status = 400;
        return next(err);
    }
})

// Alternative code for edit a spot:
// Object.entries(req.body).forEach(([key, value]) => {
//     if (value) {
//         spot[key] = value
//     }
// })



// Delete a Spot
router.delete('/:spotId', requireAuth, async (req, res) => {
    const spot = await Spot.findByPk(req.params.spotId);

    if (!spot) {
        return res.status(404)
            .json({
                message: "Spot couldn't be found",
                statusCode: 404
            })
    }

    if (spot.ownerId !== req.user.id) {
        return res.status(403).json({
            message: "You need proper authorization to delete this spot"
        })
    } else {
        await spot.destroy();

        return res.json({
            message: "Successfully deleted",
            statusCode: 200
        })
    }
});



// Get all Reviews by a Spot's id
router.get('/:spotId/reviews', async (req, res) => {
    const spot = await Spot.findByPk(req.params.spotId);

    if (!spot) {
        return res.status(404).json({
            message: "Spot couldn't be found",
            statusCode: 404
        })
    }
    const reviews = await Review.findAll({
        where: { spotId: req.params.spotId },
        include: [
            {
                model: User,
                attributes: {
                    exclude: ['username', 'email', 'hashedPassword', 'createdAt', 'updatedAt']
                }
            },
            {
                model: ReviewImage,
                attributes: {
                    exclude: ['reviewId', 'createdAt', 'updatedAt']
                }
            }
        ]
    });

    res.json({ Reviews: reviews })
});



// Create a Review for a Spot based on the Spot's id
router.post('/:spotId/reviews', requireAuth, async (req, res, next) => {
    const { review, stars } = req.body;

    const spot = await Spot.findByPk(req.params.spotId);

    if (spot) {
        const reviews = await Review.findAll({
            where: {
                spotId: req.params.spotId
            }
        })

        for (let review of reviews) {
            if (review.userId === req.user.id) {
                return res.status(403).json({
                    message: "User already has a review for this spot",
                    statusCode: 403
                })
            }
        }
    }

    if (spot && review && stars) {
        const newReview = await Review.create({
            userId: req.user.id,
            spotId: req.params.spotId,
            review,
            stars,
        })

        return res.status(201).json(newReview)

    } else if (!spot) {
        return res.status(404).json({
            message: "Spot couldn't be found",
            statusCode: 404
        })

    } else {
        const err = {};
        err.errors = {};

        if (!review) err.errors.review = "Review text is required";
        if (!stars) err.errors.stars = "Stars must be an integer from 1 to 5";

        err.title = "Validation Error";
        err.message = "Validation Error";
        err.status = 400;
        return next(err);
    }
});


// Get all Reviews by a Spot's id
router.get('/:spotId/reviews', async (req, res) => {
    const reviews = await Review.findAll({
        where: {
            spotId: req.params.spotId
        },
        include: {
            model: ReviewImage,
            attributes: {
                exclude: ['reviewId', 'createdAt', 'updatedAt']
            }
        }
    });

    if (!reviews) {
        return res.status(404).json({
            message: "Spot couldn't be found",
            statusCode: 404
        })
    }

    return res.json(reviews);
});


// Create a Booking from a Spot based on the Spot's id 
router.post('/:spotId/bookings', requireAuth, async (req, res) => {
    const spot = await Spot.findByPk(req.params.spotId, {
        include: {
            model: User,
            attributes: ['id', 'firstName', 'lastName'],
            as: 'Owner'
        }
    });

    if (!spot) {
        return res.status(404).json({
            message: "Spot couldn't be found",
            statusCode: 404
        })
    }

    if (spot.ownerId === req.user.id) {
        return res.status(403).json({
            message: "You can't book your own spot",
            statusCode: 403
        })
    }

    const { startDate, endDate, numGuests } = req.body;

    if (startDate >= endDate) {
        return res.status(400).json({
            message: "Validation error",
            statusCode: 400,
            errors: {
                endDate: "End date cannot be on or before start date"
            }
        })
    }

    const existingBookings = await Booking.findAll({
        where: {
            spotId: req.params.spotId
        }
    })

    for (let existingBooking of existingBookings) {
        if (Date.parse(startDate) >= Date.parse(existingBooking.startDate) &&
            Date.parse(startDate) <= Date.parse(existingBooking.endDate)) {
            return res.status(403).json({
                message: "Sorry, this spot is already booked for the specified dates",
                statusCode: 403,
                errors: {
                    startDate: "Start date conflicts with an existing booking"
                }
            })
        } else if (Date.parse(startDate) <= Date.parse(existingBooking.startDate) &&
            Date.parse(endDate) >= Date.parse(existingBooking.endDate)) {
            return res.status(403).json({
                message: "Sorry, this spot is already booked for the specified dates",
                statusCode: 403,
                errors: {
                    startDate: "Start date conflicts with an existing booking",
                    endDate: "End date conflicts with an existing booking"
                }
            })
        } else if (Date.parse(endDate) >= Date.parse(existingBooking.startDate) &&
            Date.parse(endDate) <= Date.parse(existingBooking.endDate)) {
            return res.status(403).json({
                message: "Sorry, this spot is already booked for the specified dates",
                statusCode: 403,
                errors: {
                    endDate: "End date conflicts with an existing booking"
                }
            })
        }
    }

    const newBooking = await Booking.create({
        spotId: req.params.spotId,
        userId: req.user.id,
        startDate,
        endDate,
        numGuests,
    })

    // const owner = await User.findByPk()

    newBooking.dataValues.Spot = spot;


    return res.json(newBooking);
});

// for (let currentBooking of allBookings) {
//     if (currentBooking.startDate >= startDate
//         && currentBooking.endDate <= endDate
//         || currentBooking.startDate <= startDate
//         && currentBooking.endDate >= endDate
//         || currentBooking.startDate >= startDate
//         && currentBooking.endDate >= endDate
//         || currentBooking.startDate <= startDate
//         && currentBooking.endDate <= endDate) {
//             return res
//                 .status(403)
//                 .json({
//                     message: "Sorry, this spot is already booked for the specified dates",
//                     statusCode: 403,
//                     errors: {
//                         startDate: "Start date conflicts with an existing booking",
//                         endDate: "End date conflicts with an existing booking"
//                       }
//                 })
//         }
// }





// Get all Bookings for a Spot based on the Spot's id 
router.get('/:spotId/bookings', requireAuth, async (req, res) => {
    const spotId = req.params.spotId;

    const spot = await Spot.findByPk(req.params.spotId);

    if (!spot) {
        return res.status(404).json({
            message: "Spot couldn't be found",
            statusCode: 404
        })
    };

    if (spot.ownerId !== req.user.id) {
        const userBookings = await Booking.findAll({
            where: {
                spotId: spotId
            },
            attributes: ['spotId', 'startDate', 'endDate']
        })
        return res.json({ Bookings: userBookings });
    };

    if (spot.ownerId === req.user.id) {
        const ownerBookings = await Booking.findAll({
            include: {
                model: User,
                attributes: ['id', 'firstName', 'lastName']
            },
            where: { spotId: spotId }
        })
        return res.json({ Bookings: ownerBookings });
    };
});






module.exports = router;