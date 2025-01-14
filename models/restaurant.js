const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cuisine: {
    type: String,
  },
  location: {
    type: String,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  reviews: {
    type: [String],
  },
});
const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;
