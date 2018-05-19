const inquirer = require("inquirer");
const dateValidator = require("./utils/dateValidator");
const config = require("./config.js");

const questions = [
  {
    type: "input",
    name: "date",
    message: "Please choose the countdown beginning",
    validate: dateValidator.validator,
    default: "2018-01-01"
  },
  {
    type: "list",
    name: "view",
    message: "Please choose visualisation option?",
    choices: ["day", "percent"],
    default: "day"
  }
  // {
  // type: 'confirm',
  // name: 'launch',
  // message: 'Run during terminal launch?',
  // default: 'Nope, all good!'
  // },
  // {
  // type: 'confirm',
  // name: 'confirm',
  // message: 'Is everything correct?',
  // },
];

exports.questionMe = () => {
  inquirer.prompt(questions).then(answers => {
    console.log(answers);
    config.setter(answers);
  });
};
