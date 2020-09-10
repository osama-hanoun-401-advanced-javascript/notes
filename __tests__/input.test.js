// 'use strict';
// jest.mock('minimist');
// const minimist = require('minimist');
// minimist.mockImplementation(()=> {
//     return {
//         a: 'This is my note'
//     }
// });

// const Input = require('../lib/input.js');

// describe('Input Module', () => {

//     it('valid() Given good input ', ()=> {
//         let arg = new Input();
//         expect(arg.valid()).toBeTruthy() &&  expect(arg.action && arg.payload).toBeTruthy();
//     });
//     it('valid() If the user doesn’t provide a valid argument (-a)', ()=> {
//         let arg = new Input();
//         arg.arg = undefined;
//         expect(arg.valid()).not.toBeTruthy();
//     });

//     it('valid() If the user specifies the flag, but doesn’t provide any text', ()=> {
//         let arg = new Input();
//         arg.arg = '';
//         expect(arg.valid()).not.toBeTruthy();
//     });


// });



