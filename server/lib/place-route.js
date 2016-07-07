const express = require('express');
const Place = require('./place-model');
const router = express.Router();
const bodyParser = require('body-parser').json();

module.exports = router
  .get('/', (req, res, next) => {
    Place.find()
      .lean()
      .then(results => res.json(results))
      .catch(err => next(err));
  })
  .post('/', bodyParser, (req, res, next) => {
    new Place(req.body)
      .save()
      .then(result => res.json(result))
      .catch(err => next(err));
  });
