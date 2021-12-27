const express = require('express');
const app = express();
const port = process.env.BACKEND_PORT || 3000;
const contactRoutes = require('./routes/contactRoutes');
const db = require('./db/index');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
require('dotenv').config();

db.sequelize.sync();

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use(cors({
  origin: 'http://localhost:3001'
}));

app.use(express.json());

app.use(express.static('public'));

console.log(process.env.PRODUCTION);

if (process.env.PRODUCTION === 'true') {
  console.log('Running in production mode.');
  if(fs.existsSync('../build')){
    app.use(express.static(path.join(__dirname, '../build')));
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../build/index.html'));
    });
  } else {
    console.error('build folder does not exist!');
  }
} else {
  console.log('Running in development mode.');
}

app.use('/api', contactRoutes);

app.use((req, res, next) => {
  const err = new Error('NOT FOUND');
  err.statusCode = 404;
  res.send(`${err.statusCode}: ${err.message}`);
});

app.use((err, req, res, next) => {
  res.status(err.statusCode ? err.statusCode : 500)
  .json({
    message: `${err.status}: ${err.message}`,
    severity: 'error',
  });
});