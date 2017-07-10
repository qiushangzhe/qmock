var app = require('./src/server.js');
var dir = require('./src/mkProject.js');
var argv = require('yargs').argv;
if(argv.port){
    app.listen(argv.port);
    console.log("http://0.0.0.0:"+argv.port);
}else{
    app.listen(3021);
    console.log("http://0.0.0.0:"+3021);
}
