const User = require("./User");
const Itinerary = require("./Itinerary");
const Comment = require("./Comment");

User.hasMany(Itinerary, {
  foreignKey: "user_id",
});

Itinerary.hasMany(Comment, {
  foreignKey: "itinerary_id",
  onDelete: "CASCADE",
});

Itinerary.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Itinerary, {
  foreignKey: "itinerary_id",
})

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Itinerary, Comment };
