const Configstore = require('configstore');
const pkg = require('./package.json');
const inquirer = require('./inquirer.js');

const conf = new Configstore(pkg.name, {
  view: 'day',
  date: 'default',
  launch: false,
});

exports.comfy = () => {
  console.log(conf.get('view'));
};

exports.setter = (option) => {
  console.log(option);
  conf.delete(option.name);
  conf.set(option.name, option.value);
  // console.log(conf.get(option.name));
};

exports.configMe = () => {
  inquirer.questionMe();
}
