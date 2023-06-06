const router = require("express").Router();
const userRoutes = require("./userRoutes");
const itineraryRoutes = require("./itineraryRoutes");
const commentRoutes = require ("./commentRoutes");

router.use("/users", userRoutes);
router.use("/itineraries", itineraryRoutes);
router.use("/comments", commentRoutes);

module.exports = router;