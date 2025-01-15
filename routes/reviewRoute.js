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

// getReviewsByUserId route
router.get("/user/:userId", async (req, res) => {
  try {
    const userId = req.params;
    const userReviews = await Review.find(userId);

    if (!userReviews || userReviews.length === 0) {
      return res.status(404).json("You have no review");
    }

    res.status(200).json(userReviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// getReviewsByRestaurantId route
// router.post("/");

module.exports = router;
