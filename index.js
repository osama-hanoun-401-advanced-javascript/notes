#!/usr/bin/env node

// to do http requests like httpie, postman and so on.

// ./index.js -m POST -u http://localhost:3000 -b jsonObject -h headers

'use strict';

const Input = require('./lib/input.js');
const Note = require('./lib/notes.js');

const arg = new Input();
const note = new Note();
arg.valid() ? note.execute(arg.getData()) : help();
function help() {
    console.log(`
        api usage: api -a <text> 

        -a <Text>
    `);
}

