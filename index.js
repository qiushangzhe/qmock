#!/usr/bin/env node
var app = require(__dirname+'/src/server.js');
var dir = require(__dirname+'/src/mkProject.js');
require('colors');
var argv = require('yargs').argv;
if(argv.port){
    app.listen(argv.port);
    console.log(("mock服务已开启 服务地址http://0.0.0.0:"+argv.port).green);
}else{
    app.listen(3021);
    console.log(("mock服务已开启 服务地址http://0.0.0.0:"+3021).green);
}
