const config = require("./config.js");
const dayVisualisation = require("./views/day.js");
const percentVisualisation = require("./views/percent.js");

exports.pope = (args, options) => {
  if (args.length === 2) {
    if (options.view === "day") {
      dayVisualisation.runner(options.date);
    } else {
      percentVisualisation.runner(options.date);
    }
  } else if (args[2] === "config") {
    config.configMe();
  } else {
    console.log("The only valid argument is config");
  }
};
