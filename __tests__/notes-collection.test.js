'use strict';

const { collection } = require("../lib/models/notes_schema.js");

// try it with mongoose package and see ow the test data will be inserted 
require('@code-fellows/supergoose');

const NoteDB = require('../lib/models/notes-collection.js');

describe('Note Model', () => {
     it('can create a new Note', () => {
        let obj = { text: 'this is a note', category: 'test'};
        return NoteDB.create(obj).then(record => {
            Object.keys(obj).forEach(key => {
                expect(record[key]).toEqual(obj[key]);
            });
        });
    });

    
});


