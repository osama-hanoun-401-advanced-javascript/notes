'use strict';

const Note = require('../lib/notes.js');
// Spies!
// we will get to know if something was called or not.
jest.spyOn(global.console, 'log');

// describe the module I am testing
describe('Note Module', ()=> {
  // test case
  it('render() consoles the object', ()=> {
    const note = new Note();
    note.execute({action:'add',payload:'This is a note'});
    console.log('note.list()>>>>>>',note.list());
    expect(console.log).toHaveBeenCalled();
  });

});


