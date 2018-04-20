#!/usr/bin/env node
const app = require(__dirname + '/src/server.js');
const dir = require(__dirname + '/src/mkProject.js');
const package = require("./package.json");
require('colors');
console.log(("version:" + package.version + "").yellow);
const argv = require('yargs').argv;
if (argv.port) {
  app.listen(argv.port);
  console.log(("mock服务已开启 服务地址http://0.0.0.0:" + argv.port).green);
} else {
  app.listen(3021);
  console.log(("mock服务已开启 服务地址http://0.0.0.0:" + 3021).green);
}
