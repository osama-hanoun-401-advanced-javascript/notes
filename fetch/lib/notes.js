'use strict';

// Notice: This is not a constructor.
// this demonstrates exporting a POJO (plain old javascript object)
const Notes={};
function Note(id, text) {
  this.id = id;
  this.text = text;
}
Notes.execute = function (obj) {
  switch (obj.action) {
    case 'add':
      Notes.add(obj.payload)
      break;

    default:
      break;
  }
};
Notes.add = function (text) {
  let noteObj = new Note(Math.floor(Math.random() * Math.floor(100)), text)
  console.log(noteObj);
};

module.exports = Notes;
