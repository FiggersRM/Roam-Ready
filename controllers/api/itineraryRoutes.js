const router = require("express").Router();
const { Itinerary } = require("../../models");
const withAuth = require('../../utils/auth');

router.post("/", withAuth, async (req, res) => {
    try {
        const newItinerary = await Itinerary.create({ 
            ...req.body,
            user_id: req.session.user_id,
            username: req.session.username,
        });
        res.status(200).json(newItinerary);
    }
    catch (err) {
        res.status(400).send({ message: "Failed to add Itinerary" })
    }
});

module.exports = router;