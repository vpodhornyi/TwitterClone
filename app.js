require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.json());
app.get('/ping', (req, res) => {
  res.status(200).end('pong');
})

module.exports = app;
