const express = require("express");
const router = express.Router();
const User = require("../models/User");
const verifyPiToken = require("../utils/verifyPiToken");

router.post("/", async (req, res) => {
  try {
    const { accessToken } = req.body;
    const userData = await verifyPiToken(accessToken);

    let user = await User.findOne({ username: userData.username });
    if (!user) {
      user = await User.create({ username: userData.username, uid: userData.uid });
    }

    res.json({ success: true, user });
  } catch (error) {
    console.error("❌ Error verifying token:", error);
    res.status(401).json({ success: false, error: "Invalid token" });
  }
});

module.exports = router;
