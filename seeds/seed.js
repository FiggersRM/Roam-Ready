const sequelize = require('../config/connection');
const { User, Itineraries, Comments } = require('../models');

const userData = require('./userData.json');
const itinData = require('./itineraryData.json');
const commentData = require('./commentData');

const seedDatabase = async ()  => {
    await sequelize.sync({force: true});

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    const itineraries = await Itineraries.bulkCreate(itinData, {
        individualHooks: true,
        returning: true,
    });

    const comments = await Comments.bulkCreate(commentData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();