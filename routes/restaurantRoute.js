const express = require("express");
const router = express.Router();
const Restaurant = require("../models/restaurant");

router.get("/", async (req, res) => {
  try {
    const allRestaurants = await Restaurant.find({});
    res.status(200).json(allRestaurants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
