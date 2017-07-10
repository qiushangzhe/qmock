var express = require('express');
var app = express();
var api = require(__dirname+'/router');
app.all('*',function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    if(req.url == '/favicon.ico'){
        res.end();
    }
    next();
})

app.all('*',api);

module.exports = app;
