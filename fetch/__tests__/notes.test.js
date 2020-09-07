'use strict';

const Note = require('../lib/notes.js');
// Spies!
// we will get to know if something was called or not.
jest.spyOn(global.console, 'log');

// describe the module I am testing
describe('Note Module', ()=> {
    // test case
    it('render() cosloes the object', ()=> {
        const note = new Note();
        note.execute({action:'add',payload:'This is a note'});
        note.render();
        expect(console.log).toHaveBeenCalled();
    });

});


