//backend/routes/contact.js
const express = require("express");
const router = express.Router();
const Message = require("../models/Message");
const nodemailer = require("nodemailer");
const { body, validationResult } = require("express-validator");
const xss = require("xss");

// Validation middleware
const validateContactInput = [
  body("name").trim().isLength({ min: 1, max: 100 }).escape(),
  body("email").trim().isEmail().normalizeEmail(),
  body("message").trim().isLength({ min: 1, max: 1000 }).escape(),
];

router.post("/", validateContactInput, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message } = req.body;

    // Additional sanitization
    const sanitizedName = xss(name);
    const sanitizedEmail = xss(email);
    const sanitizedMessage = xss(message);

    // Save message to MongoDB
    const newMessage = new Message({
      name: sanitizedName,
      email: sanitizedEmail,
      message: sanitizedMessage,
    });
    await newMessage.save();

    // Send email
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: "callejojuls@gmail.com",
      subject: "New Contact Form Submission",
      text: `Name: ${sanitizedName}\nEmail: ${sanitizedEmail}\nMessage: ${sanitizedMessage}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "An error occurred" });
  }
});

module.exports = router;
