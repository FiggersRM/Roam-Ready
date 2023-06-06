const sequelize = require('../config/connection');
const { User, Itinerary, Comment } = require('../models');

const userData = require('./userData.json');
const itinData = require('./itineraryData.json');
const commentData = require('./commentData');

const seedDatabase = async ()  => {
    await sequelize.sync({force: true});

    for(let i=0; i < userData.length; i++) {
        await User.create(userData[i]);
    }

    for(let i=0; i < itinData.length; i++) {
        await Itinerary.create(itinData[i]);
    }

    for(let i=0; i < commentData.length; i++) {
        await Comment.create(commentData[i]);
    }

    process.exit(0);
};

seedDatabase();