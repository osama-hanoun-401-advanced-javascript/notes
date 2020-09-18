#!/usr/bin/env node

// to do http requests like httpie, postman and so on.

// ./index.js -m POST -u http://localhost:3000 -b jsonObject -h headers

'use strict';
const mongoose = require('mongoose');
const MONGOOSE_URL = 'mongodb://localhost:27017/food';
mongoose.connect(MONGOOSE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const Input = require('./lib/input.js');
const Note = require('./lib/notes.js');

const arg = new Input();
const note = new Note();
arg.valid() ? note.execute(arg.getData()) : help();
function help() {
  console.log(`
        --add <Text> or --adda <Text> --category <Category>
        --delete <ID>
        --list or --list <Category>
    `);
}

