const DAY_IN_MILLISECONDS = 86400000;
const NOW = new Date(); // eg Sun May 13 2018 17:23:02 GMT+0300 (MSK)
const NOW_IN_MILLISECONDS = Date.now(); // milliseconds
const YEAR = NOW.getFullYear(); // eg 2018
const DAY_ONE = new Date(YEAR, 0, 1); // human
const DAY_ONE_IN_MILLISECONDS = DAY_ONE.getTime(); // eg Mon Jan 01 2018 00:00:00 GMT+0300 (MSK)

const daysPast = Math.floor((NOW_IN_MILLISECONDS - DAY_ONE_IN_MILLISECONDS) / DAY_IN_MILLISECONDS); // Days eg. 132
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

exports.runner = function() {
  console.log(`                           Nintai\n${array3.join('')} Progress: ${daysPast} / 365 Days | ${progressBar}%`);
};
