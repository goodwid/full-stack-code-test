const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Place', new Schema( {
  name: {
    type: String,
    required: true
  },
  description: String
}));
