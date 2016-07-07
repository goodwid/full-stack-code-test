const express = require('express');
const app = module.exports = express();
const morgan = require('morgan');
const places = require('./place-route');
app.use(morgan('dev'));


const public = __dirname + '/../public';
app.use(express.static(public));

app.use('/api/place', places);

app.use((err, req, res, next) => {
  console.error(err);
  next.beQuietLint = true;
  res.status(err.code||500).json({error: err.error || 'Server error', msg: err.msg});
});
