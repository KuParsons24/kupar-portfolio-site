const express = require('express');
const contactMailer = require('../middleware/contactMailer');
const { handleFormSubmission, getAllEntries, deleteEntries, modifyEntry, createEntry } = require('../middleware/contactDb');
require('dotenv').config();

const router = express.Router();

// Route used for site contact form submission.
router.route('/contact')
.post([contactMailer, handleFormSubmission], (req, res, next) => {
  res.status(200).json({
    message: "Message recieved!",
    severity: 'success',
  });
});

// Routes used for admin tool.
router.route('/admin/contact')
.get(getAllEntries)
.delete(deleteEntries)
.put(modifyEntry)
.post(createEntry);

module.exports = router;