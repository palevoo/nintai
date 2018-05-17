#! /usr/bin/env node
const fs = require('fs');
const nintai = require('./index.js');

nintai.runner();

const args = process.argv;

//Input 1993-07-28
const INPUT_DATE = new Date(args[2]);

fs.writeFileSync('./config.js', INPUT_DATE, (err) => {
    if (err) throw err;
    console.log('Lyric saved!');
});

//TODO: switch for the wrong args or to many args provided
//Set Up script > default date is

// if (INPUT_DATE) {
//   console.log(INPUT_DATE);
// }
//
// if (args.length === 3) {
//   let inputDate = args[2];
//
// } else {
//   console.log("Please input only one argument (e.g. 2012-12-30)");
// }
