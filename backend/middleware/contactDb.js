const { Message } = require('../db/index').models;

const handleFormSubmission = async (req, res, next) => {
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

const getAllEntries = async (req, res, next) => {
  try {
    let messages = await Message.findAll({
      attributes: ['id', 'name', 'email', 'message'],
      order: [['id', 'DESC']]
    });
    res.json(messages);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteEntries = async (req, res, next) => {
  try {
    let message = {};
    const obj = {
      deleteSuccess: true
    };
    req.body.map(async (id) => {
      message = await Message.destroy({
        where: {
          id: id
        }
      });
      //console.log(message);
    });
    const json = JSON.stringify(obj);
    res.json(json);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const modifyEntry = async (req, res, next) => {
  try {
    await Message.update({ name: req.body.name, email: req.body.email, message: req.body.message }, {
      where: {
        id: req.body.id
      }
    });
    res.json(JSON.stringify({ editSuccess: true }));
  } catch (error) {
    console.error(error);
    next(error);
  }
};

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
  res.json(JSON.stringify({
    addSuccess: true
  }));
}

module.exports = {
  handleFormSubmission,
  getAllEntries,
  deleteEntries,
  modifyEntry,
  createEntry,
};