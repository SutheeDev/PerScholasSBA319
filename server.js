require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const conn = require("./config/db");
conn();

// import seeds
const starterUser = require("./config/seedUser");
const User = require("./models/user");
const starterRestaurant = require("./config/seedRestaurant");
const Restaurant = require("./models/restaurant");
const starterReview = require("./config/seedReview");
const Review = require("./models/review");

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.get("/api/populateseeds", async (req, res) => {
  try {
  } catch (error) {}
});

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
