const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
require("dotenv").config(); // Make sure dotenv is initialized

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER, // You receive the message here
      subject: `New Contact Form Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,

    });

    res.json({ success: true });
  } catch (err) {
    console.error("❌ Email send failed", err);
    res.json({ success: false });
  }
});

module.exports = router;
