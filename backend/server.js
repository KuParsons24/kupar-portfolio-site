const express = require('express');
const app = express();
const port = process.env.BACKEND_PORT || 3001;
const contactRoutes = require('./routes/contactRoutes');
require('dotenv').config();


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use(express.json());

app.use(express.static('public'));

app.use('/api', contactRoutes);

app.use((err, req, res, next) => {
  res.status(err.statusCode ? err.statusCode : 500)
  .json({
    message: `${err.status}: ${err.message}`,
    severity: 'error',
  });
})