const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", //replace with your email provider
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

const router = express.Router();

router.post('/contact', (req, res, next) => {
  console.log(req.body.name);

  const mail = {
    from: req.body.name,
    to: process.env.EMAIL,
    subject: `Contact Submission from ${req.body.name}`,
    text: `${req.body.name} <${req.body.email}> \n${req.body.message}`,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err);
      err.statusCode = 500;
      next(err);
    } else {
      res.status(200).json({
        message: "Email successfully sent to recipient!",
        severity: 'success',
      });
    }
  });
});

module.exports = router;