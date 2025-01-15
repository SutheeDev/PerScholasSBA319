const express = require("express");
const router = express.Router();
const Restaurant = require("../models/restaurant");

// getAllRestaurants route
router.get("/", async (req, res) => {
  try {
    const allRestaurants = await Restaurant.find({});
    res.status(200).json(allRestaurants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// getRestaurantById route
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const restaurant = await Restaurant.findById(id);

    if (!restaurant) {
      return res.status(400).json("No restaurant with this id!");
    }

    res.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
