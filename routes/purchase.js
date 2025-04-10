const express = require("express");
const Purchase = require("../models/Purchase");
const router = express.Router();

router.post("/purchases", async (req, res) => {
  const { username, pdfId } = req.body;
  await Purchase.create({ username, pdfId });
  res.json({ success: true });
});

router.get("/purchases/:username", async (req, res) => {
  const { username } = req.params;
  const purchases = await Purchase.find({ username }).lean();
  const purchasedIds = purchases.map((p) => p.pdfId);
  res.json({ purchased: purchasedIds });
});

module.exports = router;
