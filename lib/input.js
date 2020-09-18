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
    this.category = this.arg.category? this.arg.category : null ;

    // eslint-disable-next-line no-prototype-builtins
    if (this.arg.add && this.arg.hasOwnProperty('add')) {
      this.action = 'add';
      this.payload = this.arg.add;
      return true;
    }
    else if (this.arg.delete) {
      this.action = 'delete';
      this.payload = this.arg.delete;
      return true;
    }
    // eslint-disable-next-line no-prototype-builtins
    else if (this.arg.hasOwnProperty('list') ) {
      this.action = 'list';
      if(this.arg.list !== true){
        this.payload = this.arg.list;
      }
      return true;
    }
    else {
      console.log('Invalid Argument');
      return false;
    }
  }
  getData() {
    return { action: this.action, payload: this.payload, category: this.category };
  }

}

module.exports = Input;
