#!/usr/bin/env node

// to do http requests like httpie, postman and so on.

// ./index.js -a 'aaaaaaaa'

'use strict';

const Input = require('./lib/input.js');
const Note = require('./lib/notes.js');
let obj =new Input();
if (obj) {
    Note.execute(obj);
}


