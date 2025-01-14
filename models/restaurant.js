const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: {
    type: string,
    required: true,
  },
  cuisine: {
    type: string,
  },
  location: {
    type: string,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  reviews: {
    type: [string],
  },
});
const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;
