const sequelize = require('../config/connection');
const { User, Itinerary, Comment } = require('../models');

const userData = require('./userData.json');
const itinData = require('./itineraryData.json');
const commentData = require('./commentData');

const seedDatabase = async ()  => {
    await sequelize.sync({force: true});

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    const itineraries = await Itinerary.bulkCreate(itinData, {
        individualHooks: true,
        returning: true,
    });

    const comments = await Comment.bulkCreate(commentData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();