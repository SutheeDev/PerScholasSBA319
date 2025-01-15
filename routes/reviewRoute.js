const express = require("express");
const router = express.Router();
const Review = require("../models/review");
const User = require("../models/user");

// getAllReviews route
router.get("/", async (req, res) => {
  try {
    const allReviews = await Review.find({});
    res.status(200).json(allReviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

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
router.get("/restaurant/:restaurantId", async (req, res) => {
  try {
    const restaurantId = req.params;
    const restaurantReviews = await Review.find(restaurantId);

    if (!restaurantReviews || restaurantReviews.length === 0) {
      return res.status(404).json("This restaurant does not have review");
    }

    res.status(200).json(restaurantReviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// updateReview route - userId + reviewId & update body
router.patch("/:userId/:reviewId", async (req, res) => {
  console.log("hey");
  try {
    const { userId, reviewId } = req.params;
    const updateData = req.body;

    const review = await Review.findOne({ _id: reviewId, userId });

    if (!review) {
      return res.status(404).json("Review not found");
    }

    const updatedReview = await Review.findOneAndUpdate(
      { _id: reviewId },
      updateData,
      {
        new: true,
      }
    );
    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
