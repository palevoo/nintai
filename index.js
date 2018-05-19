#! /usr/bin/env node

const controller = require("./controller");
const config = require("./config.js");

const options = ["date", "view"];
const conf = config.getter(options);
const args = process.argv;

controller.pope(args, conf);
