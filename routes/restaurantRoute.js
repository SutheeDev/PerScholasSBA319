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

// searchRestaurant route
router.post("/search", async (req, res) => {
  try {
    const { name, cuisine, location } = req.body;

    let queryArr = [];
    if (name) {
      queryArr.push({ name });
    }
    if (cuisine) {
      queryArr.push({ cuisine });
    }
    if (location) {
      queryArr.push({ location });
    }

    // https://www.mongodb.com/docs/manual/reference/operator/query/or/
    // use MongoDB $or operator to return result with any of these queries
    const result = await Restaurant.find({ $or: queryArr });

    if (result.length === 0) {
      return res.status(400).json("No restaurant matches this search");
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
