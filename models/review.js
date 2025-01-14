const mongoose = require("mongoose");

const reviewSchema = new mongoose({
  userId: {
    type: String,
  },
  restaurantId: {
    type: String,
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
