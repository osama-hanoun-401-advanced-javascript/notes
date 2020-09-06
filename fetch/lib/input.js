'use strict';

// Bring in some 3rd party libraries to help us out

const minimist = require('minimist');

function Input() {

  console.log("process.argv : ", process.argv);

  // Get the -x style of arguments from the user
  const args = minimist(process.argv.slice(2));
  console.log(" args minimist >>>>> ", args)
  // Use the args to create our properties with helper methods
  if (args.a && (args.a).length) {
    console.log(`Adding Note: ${args.a}`)
    return {action:'add',payload:args.a}
  } else if (!args.a) {
    console.log('Invalid Argument')
    return false;
  } else {
    console.log('Please Add Text!')
    return false;
  }
}
module.exports = Input;
