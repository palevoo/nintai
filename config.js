const Configstore = require("configstore");
const pkg = require("./package.json");
const inquirer = require("./inquirer.js");

const NOW = new Date();
const YEAR = NOW.getFullYear();
const defaultDate = new Date(YEAR, 0, 1);

const conf = new Configstore(pkg.name, {
  date: defaultDate,
  view: "day",
  launch: false
});

exports.getter = option => {
  return conf.get(option);
};

exports.setter = options => {
  // let input = Object.keys(options);
  // input.map(el => el)
  conf.set(options);
};

exports.configMe = () => {
  inquirer.questionMe();
};

exports.module = {
  conf
};
