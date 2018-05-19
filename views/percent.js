const date = require('../utils/dateAndTime.js');

const output = '||||||||||||||...........]';
const daysPast = Math.floor((date.NOW_IN_MILLISECONDS - date.DAY_ONE_IN_MILLISECONDS) / date.DAY_IN_MILLISECONDS);

exports.runner = function() {
  console.log(`                           Nintai\n${output}`);
};
