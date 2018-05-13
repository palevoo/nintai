
const dayInMil = 86400000;
const now = Date.now(); // milliseconds
const date = new Date(); // eg Sun May 13 2018 17:23:02 GMT+0300 (MSK)
const year = date.getFullYear(); // eg 2018
const dayOne = new Date(year, 0, 1); // human
const dayZero = dayOne.getTime(); // eg Mon Jan 01 2018 00:00:00 GMT+0300 (MSK)
const daysPast = Math.floor((now - dayZero) / dayInMil); // Days eg. 132
const dayPassed = '[x]';
const dayLeft = '[ ]';
const progressBar = Math.floor(daysPast/ 3.65)

const array = new Array(365);
const array1 = array.fill('[X]', 0, daysPast);
const array2 = array.fill('[ ]', (daysPast + 1), (array.length - 1));

const array3 = array.map((cur, ind) => {
  let res = [];
  if (ind % 21 !== 0) {
    res.splice(ind, 0, cur)
  } else {
    res.splice(ind, 0, '\n')
  }
  return res;
});

exports.printMsg = function() {
  console.log(`                           Nintai\n${array3.join('')} Progress: ${daysPast} / 365 Days | ${progressBar}%`);
}
