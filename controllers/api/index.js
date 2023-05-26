const router = require("express").Router();
const userRoutes = require("./userRoutes");
const itineraryRoutes = require("./itineraryRoutes");

router.use("/users", userRoutes);
router.use("/itineraries", itineraryRoutes);

module.exports = router;