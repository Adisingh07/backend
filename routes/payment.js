const express = require("express");
const router = express.Router();

router.post("/approve-payment", async (req, res) => {
  const { paymentId } = req.body;
  console.log("✅ Approving payment:", paymentId);
  res.json({ success: true });
});

router.post("/complete-payment", async (req, res) => {
  const { paymentId, txid } = req.body;
  console.log("✅ Completing payment:", paymentId, txid);
  res.json({ success: true });
});

module.exports = router;
