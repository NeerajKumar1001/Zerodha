const express = require('express');
require('dotenv').config();
const monsgoose = require('mongoose');

const PORT = process.env.PORT || 5001;
const URI = process.env.MONGO_URL;

const app = express();


app.listen(PORT, () => {
  console.log('Server is running on http://localhost:5000');
  monsgoose.connect(URI);
  console.log('Connected to DB');
});

