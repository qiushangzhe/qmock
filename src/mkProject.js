var fs = require('fs');
if(!fs.existsSync('database')){
    fs.mkdirSync('database');
}
