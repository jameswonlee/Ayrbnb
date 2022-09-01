const express = require('express');
const router = express.Router();

const { requireAuth } = require('../../utils/auth.js');
const { User, Spot, SpotImage, Booking, Review, ReviewImage, sequelize } = require('../../db/models');

const { next } = require('cli');
const spot = require('../../db/models/spot.js');



// Get all Spots
router.get('/', async (req, res) => {
    const results = {};

    const spots = await Spot.findAll({})

    for (let i = 0; i < spots.length; i++) {
        let spot = spots[i];

        const spotRating = await Review.findOne({
            where: {
                spotId: spot.id
            },
            attributes: {
                include: [[sequelize.fn("AVG", sequelize.col("stars")), "avgRating"]]
            }
        });
        results.avgRating = spotRating.avgRating
   }
    return res.json({
        Spots: results
    })
});
    
    // const previewImg = await Spot.findAll({
    //     include: [
    //         {
    //             model: SpotImage,
    //             attributes: ["url"], as: "previewImage",
    //             where: {
    //                 preview: true
    //             }
    //         }
            
    //     ]
    // })
    
    // let obj = spots[0].toJSON();
    // console.log("obj", obj)
    


// include: [
//     {
//         model: Review,
//         attributes: [
//             [
//                 sequelize.fn("AVG", sequelize.col("stars")), 
//                 "avgRating"
//             ]
//         ]
//     }
    
// ]

    // const spots = await Spot.findAll({
    //     include: {
    //         model: SpotImage,
    //         attributes: []
    //     },
    //     include: {
    //         model: Review,
    //         attributes: []
    //     },
    //     attributes: [
    //         "id",
    //         "ownerId",
    //         "address",
    //         "city",
    //         "state",
    //         "country",
    //         "lat",
    //         "lng",
    //         "name",
    //         "description",
    //         "price",
    //         "createdAt",
    //         "updatedAt",
    //         [sequelize.fn("AVG", sequelize.col("Reviews.stars")), "avgRating"]
    //     ],

    // })

    // res.json({
    //     Spots: spots
    // })


// Get all Spots owned by the Current User --- previewImage and avgRating not working
router.get('/current', requireAuth, async (req, res) => {
    const spots = await Spot.findAll({where: {ownerId: req.user.id}, raw: true});

    for (let spot of spots) {
        const images = await SpotImage.findAll({where: {spotId: spot.id}, raw: true});

        if (images) {
            for (let image of images) {
                if (image.preview === true || image.preview === 1) {
                    spot.previewImage = image.url;
                }
            }
        }

        const ratings = await Review.findAll({where: {spotId: spot.id}, raw: true});



    }
    res.json({Spots: spots})
})





// Create a Spot ---> Needs error handling
router.post('/', requireAuth, async (req, res) => {
    const { address, city, state, country, lat, lng, name, description, price} = req.body;
    let spot;
    
    if (address && city && state && country && lat && lng && name && description && price) {
            spot = await Spot.create({
            ownerId: req.user.id,
            address: address,
            city: city,
            state: state,
            country: country,
            lat: lat,
            lng: lng,
            name: name,
            description: description,
            price: price
        })
        res.status(201).json(spot);

    } else {
        const err = {};
        err.errors = {};

        if (!address) {
            err.errors.address = "Street address is required"
        }
        if (!city) {
            err.errors.city = "City is required"
        }

        err.message = "Validation error",
        err.status = 400,
        err.title = "Validation error"
        next(err)
    }
})


// Add an Image to a Spot based on the Spot's id ---- DONE!!!
router.post('/:spotId/images', requireAuth, async (req, res) => {
    const { url, preview } = req.body;
    // const { spotId } = req.params;
    // console.log(spotId)

    const spot = await Spot.findOne({
        where: { id: parseInt(req.params.spotId, 10) } })

    if (spot) {
        const spotImage = await SpotImage.create({
            spotId: parseInt(req.params.spotId, 10),
            url: url
            // preview: preview
        })

        const spotImageResponse = {};
        spotImageResponse.id = spotImage.id,
        spotImageResponse.url = spotImage.url,
        // spotImageResponse.preview = spotImage.preview;

        res.json(spotImageResponse)

    } else {
        res.status(404).json({
            message: "Spot couldn't be found",
            statusCode: 404
        })
    }
})



// Edit a Spot ---- Needs error reponse/validations
router.put('/:spotId', requireAuth, async (req, res) => {
    const { address, city, state, country, lat, lng, name, description, price } = req.body;

    const spot = await Spot.findByPk(req.params.spotId);

 if (spot) {
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

 }

})


// Delete a Spot --- DONE!!!
router.delete('/:spotId', requireAuth, async (req, res) => {
    const spot = await Spot.findByPk(req.params.spotId);

    if (spot) {
        await spot.destroy();

        return res.json({
            message: "Successfully deleted",
            statusCode: 200
        })

    } else {
        res.status(404).json({
            message: "Spot couldn't be found",
            statusCode: 404
        })
    }
})



// Get all Reviews by a Spot's id
router.get('/:spotId/reviews', async (req, res) => {

})



// Create a Review for a Spot based on the Spot's id
router.post('/:spotId/reviews', requireAuth, async (req, res) => {
    const { review, stars } = req.body;

    const spot = await Spot.findByPk(req.params.spotId);

    const newReview = await Review.create({
        spotId: req.params.spotId,
        userId: req.user.id,
        review,
        stars,
    })

    res.json(newReview);
})




// Get all Bookings for a Spot based on the Spot's id
router.get('/:spotId/bookings', requireAuth, async (req, res) => {

})




// Create a Booking from a Spot based on the Spot's id
router.post('/:spotId/bookings', requireAuth, async (req, res) => {

})






module.exports = router