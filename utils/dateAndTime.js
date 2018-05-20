const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const DAY_IN_MILLISECONDS = 86400000;
const NOW = new Date(); // eg Sun May 13 2018 17:23:02 GMT+0300 (MSK)
const NOW_IN_MILLISECONDS = Date.now(); // milliseconds
const YEAR = NOW.getFullYear(); // eg 2018
const DEFAULT_DATE = new Date(YEAR, 0, 1); // human
const DEFAULT_DATE_IN_MILLISECONDS = DEFAULT_DATE.getTime(); // eg Mon Jan 01 2018 00:00:00 GMT+0300 (MSK)

const daysCounter = (now, origin) => {
  return Math.floor((now - origin) / DAY_IN_MILLISECONDS);
};

const percentizer = days => {
  return Math.floor(days / 3.65);
};

module.exports = {
  MONTHS,
  DAY_IN_MILLISECONDS,
  NOW,
  NOW_IN_MILLISECONDS,
  YEAR,
  DEFAULT_DATE,
  DEFAULT_DATE_IN_MILLISECONDS,
  daysCounter,
  percentizer
};
