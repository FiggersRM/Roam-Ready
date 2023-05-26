const User = require("./User");
const Itinerary = require("./Itinerary");
const Comment = require("./Comment");

Itinerary.belongsTo(User, {
    foreignKey: "user_id",
});

Itinerary.hasMany(Comment, {
    foreignKey: "comment_id",
    onDelete: "CASCADE"
});

Comment.belongsTo(User, {
    foreignKey: "user_id"
});

module.exports = { User, Itinerary, Comment }