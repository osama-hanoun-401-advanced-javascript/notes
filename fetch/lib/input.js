'use strict';

const minimist = require('minimist');


class Input {
  constructor() {
    this.payload;
    this.action = 'add';
    this.arg = minimist(process.argv.slice(2)).a;
  }

  valid() {
    if (this.arg&& (this.arg).length) {
      this.payload = this.arg; 
      console.log(`Adding Note: ${this.payload}`)
      return true;
    } else if (!this.arg) {
      console.log('Invalid Argument')
      return false;
    } else {
      console.log('Please Add Text!')
      return false;
    }
  }
  getData() {
    return { action: this.action, payload: this.payload }

  }

}



module.exports = Input;
