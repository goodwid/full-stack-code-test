const express = require('express');
const app = module.exports = express();
const morgan = require('morgan');
const cors = require('./cors')('*');
const places = require('./place-route');
app.use(morgan('dev'));

app.use(cors);
const public = __dirname + '/../public';
app.use(express.static(public));

app.use('/api/place', places);

// eslint-disable-next-line  no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.code||500).json({error: err.error || 'Server error', msg: err.msg});
});
