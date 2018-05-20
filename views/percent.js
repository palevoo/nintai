const date = require("../utils/dateAndTime.js");

const daysPast = date.daysCounter(
  date.NOW_IN_MILLISECONDS,
  date.DEFAULT_DATE_IN_MILLISECONDS
);

const past = "|";
const future = "-";

const createOutput = percent => {
  const passed = past.repeat(percent / 2);
  const notPassed = future.repeat((100 - percent) / 2);
  return `[${passed}${notPassed}]`;
};

exports.runner = function() {
  console.log(
    `                       Nintai\n${createOutput(
      40
    )} \n           Progress: ${daysPast} / 365 Days | ${date.percentizer(
      daysPast
    )}%
    `
  );
};
