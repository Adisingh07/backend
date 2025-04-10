const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your.email@gmail.com",
        pass: "yourpassword",
      },
    });

    await transporter.sendMail({
      from: email,
      to: "your.email@gmail.com",
      subject: `New Contact Form Message from ${name}`,
      text: message,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("❌ Email send failed", err);
    res.json({ success: false });
  }
});

module.exports = router;
