const express = require('express');
const router = express.Router();

const { requireAuth } = require('../../utils/auth.js');
const { User, Spot, SpotImage, Booking, Review, ReviewImage, sequelize } = require('../../db/models');




// Delete a Spot Image 
router.delete('/:imageId', requireAuth, async (req, res) => {
    
    const spotImage = await SpotImage.findByPk(req.params.imageId);

    if (spotImage) {
        const spot = await Spot.findByPk(spotImage.spotId);

        if (spot.ownerId === req.user.id) {
            await spotImage.destroy();
        } else {
            return res.status(403).json({
                message: "Not authorized to delete this spot",
                statusCode: 403
            });
        }

        return res.json({
            message: "Successfully deleted",
            statusCode: 200
        });
    } else {
        return res.status(404).json({
            message: "Spot image couldn't be found",
            statusCode: 404
        });
    }
});







module.exports = router