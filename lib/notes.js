'use strict';

class Note {

  constructor() {
    this.id;
    this.text;
  }
  execute(data) {

    switch (data.action) {
      case 'add':

        this.add(data.payload)
        break;

      default:
        break;
    }
  }
  add(text) {
    this.id = Math.floor(Math.random() * Math.floor(100));
    this.text = text;
  }

  render() {
    console.log(this);
  }
}

module.exports = Note;
