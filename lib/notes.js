'use strict';
const NoteDB = require('./models/notes-collection.js');
class Note {

  constructor() {
  }
  
  execute(data) {
    switch (data.action) {
      case 'add':
        this.add(data.payload, data.category)
        break;
      case 'list':
        this.list(data.payload)
        break;
      case 'delete':
        this.delete(data.payload)
        break;

      default:
        break;
    }
  }
  add(text, category) {
    let obj = { text: text, category: category };
    NoteDB.create(obj)
      .then(data => { console.log("saved : ", data) })
  }
  list(category) {
    if (category) {
      NoteDB.get({ category: category })
        .then(result => {
          result.forEach(val => {
            console.log(val.text, ' \n category: ' + val.category, 'ID: ' + val._id);
            console.log('--------------------------------------------------');
          });
        });
    } else {
      NoteDB.get(null)
        .then(result => {
          result.forEach(val => {
            console.log(val.text, ' \n category: ' + val.category, 'ID: ' + val._id);
            console.log('--------------------------------------------------');
          });
        });
    }

  }
  delete(_id) {
    NoteDB.delete({ _id: _id })
      .then(result => {
        if (result) {
          console.log(`Deleted Note ` + _id)
        }
      })
      .catch(()=>{
        console.log(`There is no note with this id : `+_id)
      });

  }
}

module.exports = Note;
