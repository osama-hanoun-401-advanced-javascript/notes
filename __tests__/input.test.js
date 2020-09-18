'use strict';
jest.mock('minimist');
const minimist = require('minimist');


const Input = require('../lib/input.js');

describe('Input Module', () => {

  it('valid() Given good input ', ()=> {
    minimist.mockImplementation(()=> {
      return {
        add: 'This is my note',
      };
    });
    let arg = new Input();
    expect(arg.valid()).toBeTruthy() &&  expect(arg.action && arg.payload).toBeTruthy();
  });
  it('valid() If the user doesn’t provide a valid argument (-add)', ()=> {
    minimist.mockImplementation(()=> {
      return {
        category: 'food',
      };
    });
    let arg = new Input();
    expect(arg.valid()).not.toBeTruthy();
  });

  it('valid() If the user specifies the flag, but doesn’t provide any text', ()=> {
    minimist.mockImplementation(()=> {
      return {
        add: '',
      };
    });
    let arg = new Input();
    expect(arg.valid()).not.toBeTruthy();
  });


});



