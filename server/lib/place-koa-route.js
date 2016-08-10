var router = require('koa-router')();
const Place = require('./place-model');


module.exports = router
  .get('/api/place', function * () {
    try {
      this.body = yield Place.find().lean();
    }
    catch(err) {
      this.throw('Woops!', 404);
    }
  })
  .post('/api/place', function * () {
    try {
      this.body = yield new Place(this.request.body).save();
    }
    catch(err) {
      this.throw ('' + err);
    }
  });
