const koa = require('koa');
const app = module.exports = koa();
const bodyParser = require('koa-bodyparser');
const places = require('./place-koa-route');

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
});

app.use(bodyParser());

app
  .use(places.routes())
  .use(places.allowedMethods());
