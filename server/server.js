const express = require('express');
const path = require('path');
const logger = require('morgan');

console.log('welcome to entry.js');
const app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../client/public')));

if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

module.exports = app;
