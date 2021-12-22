const express = require('express');
const contactMailer = require('../middleware/contactMailer');
const { createEntry } = require('../middleware/contactDb');
require('dotenv').config();

const router = express.Router();

router.route('/contact')
.post([contactMailer, createEntry], (req, res, next) => {
  res.status(200).json({
    message: "Message recieved!",
    severity: 'success',
  });
})

module.exports = router;