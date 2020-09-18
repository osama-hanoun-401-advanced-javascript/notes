'use strict';

const mongoose = require('mongoose');

const note = mongoose.Schema({
  text : {type: String, required: true},
  category: { type: String},
});

module.exports = mongoose.model('note', note);