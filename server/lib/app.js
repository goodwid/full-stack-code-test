const koa = require('koa');
const app = module.exports = koa();
const bodyParser = require('koa-bodyparser');
const places = require('./place-koa-route');
const cors = require('koa-cors');

const options = {
  origin: 'http://localhost:8080'
};

app.use(cors(options));

app.use(function *(next) {
  try {
    yield next;
  } catch(err) {
    this.status = err.status || 500;
    this.body = err.message;
    this.app.emit('error', err, this);
  }
});

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
