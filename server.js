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

app.use(express.json());

// import routes
const userRoute = require("./routes/userRoute");

// Routes
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("Welcome!");
});

// Populate seeds
app.get("/api/populateseeds", async (req, res) => {
  try {
    await User.deleteMany({});
    await Restaurant.deleteMany({});
    await Review.deleteMany({});
    await User.create(starterUser);
    await Restaurant.create(starterRestaurant);
    await Review.create(starterReview);
    res.json(starterUser, starterRestaurant, starterReview);
  } catch (error) {
    console.log({ err: error.message });
  }
});

// Handle 404
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// Error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500).send("Something went wrong, try again later.");
});

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
