const sequelize = require('../config/connection');
const { User, Itineraries, Comments } = require('../models');

const userData = require('./userData.json');
const itinData = require('./itineraryData.json');
const commentData = require('./commentData');