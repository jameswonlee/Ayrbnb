const express = require('express');
const router = express.Router();

const { requireAuth } = require('../../utils/auth.js');
const { User, Spot, SpotImage, Booking, Review, ReviewImage, sequelize } = require('../../db/models');


// Get all of the Current User's Bookings
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
    })

    for (let booking of bookings) {

        let spot = await Spot.findOne({
            where: {
                id: booking.spotId,
            },
            attributes: {
                exclude: ['description', 'createdAt', 'updatedAt']
            },
            raw: true
        })
        const images = await SpotImage.findAll({ where: { spotId: spot.id } });

        images.forEach(image => {
            if (image.preview === true || image.preview === 1) {
                spot.previewImage = image.url
            }
        })
        booking.Spot = spot;
    }
    return res.json({ Bookings: bookings });
})









module.exports = router