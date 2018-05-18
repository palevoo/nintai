#! /usr/bin/env node

const nintai = require('./index.js');
const configurator = require('./configurator.js');

const args = process.argv;

const pope = (args) => {
  if (args.length === 2 ) {
    nintai.runner();
  } else if (args[2] === 'config') {
    configurator.configMe();
  } else {
    console.log('The only valid argument is config');
  }
}

pope(args);
