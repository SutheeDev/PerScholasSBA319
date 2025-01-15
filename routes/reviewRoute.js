const express = require("express");
const router = express.Router();
const Review = require("../models/review");
const User = require("../models/user");

// createReview route
router.post("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json("No user with this id!");
    }

    const { restaurantId, comment } = req.body;
    if (!restaurantId || !comment) {
      return res.status(400).json("RestaurantId and comment are required");
    }

    const newReview = await Review.create({ userId, restaurantId, comment });
    res.status(201).json(newReview);
  } catch (error) {
    res.json(500).json({ error: error.message });
  }
});

// getAllRestaurantsReviews route
// router.post("/", async (req, res) => {
//   try {
//     const { restaurantId } = req.body;
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

module.exports = router;
