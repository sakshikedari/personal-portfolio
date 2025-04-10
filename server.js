// server.js or index.js
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 4000;

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.error("Email Transporter Error:", error);
  } else {
    console.log("Email transporter is ready to send messages.");
  }
});

app.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const mail = {
    from: `${firstName} ${lastName} <${email}>`,
    to: process.env.EMAIL_USER,
    subject: "New Contact Form Submission - Portfolio",
    html: `
      <h3>Contact Details</h3>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Send Mail Error:", error);
      res.status(500).json({ code: 500, message: "Email failed to send" });
    } else {
      res.status(200).json({ code: 200, message: "Message sent successfully" });
    }
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
