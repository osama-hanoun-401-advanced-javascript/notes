'use strict';

const minimist = require('minimist');

class Input {
  constructor() {
    this.payload;
    this.category;
    this.action;
    this.arg = minimist(process.argv.slice(2));
  }

  valid() {
    this.category = this.arg.category

    if (this.arg.add && this.arg.add !==true) {
      this.action = 'add';
      this.payload = this.arg.add;
      return true
    }
    else if (this.arg.delete) {
      this.action = 'delete';
      this.payload = this.arg.delete;
      return true
    }
    else if (this.arg.hasOwnProperty('list') ) {
      this.action = 'list';
      if(this.arg.list !== true){
        this.payload = this.arg.list;
      }
      return true
    }
    else {
      console.log('Invalid Argument')
      return false
    }
  }
  getData() {
    return { action: this.action, payload: this.payload, category: this.category }
  }

}

// if (this.arg&& (this.arg).length) {
//   this.payload = this.arg; 
//   console.log(`Adding Note: ${this.payload}`)
//   return true;
// } else if (!this.arg) {
//   console.log('Invalid Argument')
//   return false;
// } else {
//   console.log('Please Add Text!')
//   return false;
// }

module.exports = Input;
