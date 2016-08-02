var router = require('koa-router')();
const Place = require('./place-model');


module.exports = router
  .get('/', function * (next) {
    this.body = yield Place.find().lean();
  })
  .post('/', function * (next) {
    this.body = yield new Place(this.request.body).save();
  });
