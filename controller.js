#! /usr/bin/env node

const nintai = require('./index.js');
const configurator = require('./configurator.js');

const args = process.argv;

console.log(args);

const pope = (args) => {
  if (args.length === 2 ) {
    //call main render nintai function
    nintai.runner();
  } else if (args[2] === 'config') {
    //call prompt function
    console.log(configurator.comfy());
    console.log('Promt yet to be initiated for the creation of config');
  } else {
    //console.log > help and
    console.log('only valid arg is config');
  }
}

pope(args);
