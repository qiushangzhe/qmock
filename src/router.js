var fs = require('fs');
var path = require('path');

function getJsonFile(path){
    var final_path = 'database' + path + '.json';
    if(fs.existsSync(final_path)){
        return fs.readFileSync(final_path);
    }else{
        return false;
    }
}

module.exports = function(req,res,next){
    var jsonFile = getJsonFile(req.url);
    if(!jsonFile){
        res.status(404);
    }else{
        res.send(jsonFile);
    }
    res.end();
}
