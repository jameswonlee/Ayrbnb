const express = require('express');
const router = express.Router();

const { requireAuth } = require('../../utils/auth.js');
const { User, Spot, SpotImage, Booking, Review, ReviewImage, sequelize } = require('../../db/models');

const { Op } = require('sequelize');


// Get all of the Current User's Bookings --- DONE!!!
router.get('/current', requireAuth, async (req, res) => {
    const bookings = await Booking.findAll({
        where: {
            userId: req.user.id
        },
        raw: true
        // include: {
        //     model: Spot,
        //     attributes: ['id', 'ownerId', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'price']
        // }
    });

    for (let booking of bookings) {

        let spot = await Spot.findOne({
            where: {
                id: booking.spotId,
            },
            attributes: {
                exclude: ['description', 'createdAt', 'updatedAt']
            },
            raw: true
        });
        const images = await SpotImage.findAll({ where: { spotId: spot.id } });

        images.forEach(image => {
            if (image.preview === true || image.preview === 1) {
                spot.previewImage = image.url
            }
        });
        booking.Spot = spot;
    };
    return res.json({ Bookings: bookings });
});


// Edit a Booking --- DONE!!!
router.put('/:bookingId', requireAuth, async (req, res) => {
    const { startDate, endDate } = req.body;
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

    if (endDate < startDate) {
        return res.status(400).json({
            message: "Validation error",
            statusCode: 400,
            errors: {
                endDate: "endDate cannot come before startDate"
            }
        });
    };

    let spotId = booking.spotId;
    const conflictBookings = await Booking.findAll({
        where: {
            spotId: spotId,
            startDate: {
                [Op.gte]: startDate,
                [Op.lte]: endDate
            },
            endDate: {
                [Op.lte]: endDate,
                [Op.gte]: startDate
            }
        }
    });

    if (conflictBookings.length) {
        return res.status(403).json({
            message: "Sorry, this spot is already booked for the specified dates",
            statusCode: 403,
            errors: {
                startDate: "Start date conflicts with an existing booking",
                endDate: "End date conflicts with an existing booking"
            }
        })
    } else {
        booking.startDate = startDate;
        booking.endDate = endDate;
        await booking.update();
        return res.json(booking);
    };
});



// Delete a Booking --- DONE!!!
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
            message: "Booking's that have been started can't be deleted",
            statusCode: 403
        })
    }

    if (booking.userId === req.user.id) {
        await booking.destroy();

        return res.json({
            message: "Successfully deleted"
        })
    } else {
        return res.status(403).json({
            message: "Not authorized to delete this booking",
            statusCode: 403
        })
    }
});








module.exports = router