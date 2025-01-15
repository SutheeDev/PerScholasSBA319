const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Get All Users Route
router.get("/", async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get User By Id
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(400).json("No user with this id!");
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create Users Route
router.post("/", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json("Username, email, and password are required");
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json("This email is already in use!");
    }

    const newUser = await User.create({ username, email, password });
    res.status(201).json({
      username: newUser.username,
      email: newUser.email,
      password: newUser.password,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete User
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);

    if (!user) {
      return res.status(400).json("No user with this id!");
    }

    await User.findOneAndDelete(user);
    res.status(200).json("Success: user removed");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
