const { Message } = require('../db/index').models;

const createEntry = async (req, res, next) => {
  try {
    await Message.create({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
  next();
};

module.exports = {
  createEntry,
};