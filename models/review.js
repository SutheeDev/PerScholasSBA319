const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  restaurantId: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  },
  comment: {
    type: String,
    maxlength: 500,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
