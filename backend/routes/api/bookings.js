const express = require('express');
const router = express.Router();

const { requireAuth } = require('../../utils/auth.js');
const { User, Spot, SpotImage, Booking, Review, ReviewImage, sequelize } = require('../../db/models');

const { Op } = require('sequelize');



// Get all of the Current User's Bookings
router.get('/current', requireAuth, async (req, res) => {
    const bookings = await Booking.findAll({
        where: {
            userId: req.user.id
        },
        raw: true
    });

    for (let booking of bookings) {

        let spot = await Spot.findOne({
            where: {
                id: booking.spotId,
            },
            attributes: {
                exclude: ['description', 'createdAt', 'updatedAt'],
            },
            include: {
                model: User,
                attributes: ['id', 'firstName', 'lastName'],
                as: 'Owner'
            },
            // raw: true
        });
        const images = await SpotImage.findAll({
            where: { spotId: spot.id }, raw: true
        });

        images.forEach(image => {
            if (image.preview === true || image.preview === 1) {
                spot.dataValues.previewImage = image.url
            }
        });
        booking.Spot = spot;
    };
    return res.json({ Bookings: bookings });
});


// Get booking by booking id
router.get('/:bookingId', requireAuth, async (req, res) => {
    const { bookingId } = req.params;

    let booking = await Booking.findByPk(req.params.bookingId, {
        include: [
            {
                model: Spot,
                include: {
                    model: User,
                    attributes: ['id', 'firstName', 'lastName'],
                    as: 'Owner'
                },
            },
            {
                model: User,
                attributes: ['id', 'firstName', 'lastName'],
                // as: 'Guest'
            }
        ]
    })

    if (!booking) {
        return res.status(404).json({
            message: "Booking couldn't be found",
            statusCode: 404
        })
    }

    const spotImage = await SpotImage.findOne({
        where: {
            spotId: booking.spotId,
            preview: true
        },
        attributes: ['url'],
        raw: true
    });

    let bookingData = booking.toJSON();
    bookingData.Spot.previewImage = spotImage.url;

    return res.json(bookingData);
})


// Edit a Booking 
router.put('/:bookingId', requireAuth, async (req, res) => {
    const { startDate, endDate, numGuests } = req.body;
    const booking = await Booking.findByPk(req.params.bookingId);

    if (!booking) {
        return res.status(404).json({
            message: "Booking couldn't be found",
            statusCode: 404
        });
    };

    if (Date.parse(startDate) < new Date() ||
        Date.parse(endDate) < new Date()) {
        return res.status(403).json({
            message: "Past bookings can't be modified",
            statusCode: 403
        });
    };
    console.log('HELLOOOOOOOOO')
    if (startDate >= endDate) {
        return res.status(400).json({
            message: "Validation error",
            statusCode: 400,
            errors: {
                endDate: "End date cannot be on or before start date"
            }
        });
    };

    const existingBookings = await Booking.findAll({
        where: {
            spotId: booking.spotId
        }
    })

    for (let existingBooking of existingBookings) {
        if (existingBooking.id === booking.id) continue;

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
    
    booking.startDate = startDate;
    booking.endDate = endDate;
    booking.numGuests = numGuests
    // await booking.update();
    await booking.save();
    return res.json(booking);
});



// Delete a Booking
router.delete('/:bookingId', requireAuth, async (req, res) => {
    const booking = await Booking.findByPk(req.params.bookingId);

    if (!booking) {
        return res.status(404).json({
            message: "Booking couldn't be found",
            statusCode: 404
        })
    }

    if (Date.parse(booking.startDate) <= new Date(Date.now())) {
        return res.status(403).json({
            message: "Booking's that have already started can't be deleted",
            statusCode: 403
        })
    }

    if (booking.userId === req.user.id) {
        await booking.destroy();

        return res.json({
            message: "Successfully deleted",
            statusCode: 200
        })
    } else {
        return res.status(403).json({
            message: "Not authorized to delete this booking",
            statusCode: 403
        })
    }
});








module.exports = router;