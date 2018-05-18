const configurator = require('./configurator.js');
const dayVisualisation = require('./views/day.js');

exports.pope = (args) => {
  if (args.length === 2 ) {
    dayVisualisation.runner();
  } else if (args[2] === 'config') {
    configurator.configMe();
  } else {
    console.log('The only valid argument is config');
  }
};
