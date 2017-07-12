var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser());
var api = require(__dirname+'/router');
app.all('*',function(req,res,next){
    console.log(req.headers.origin);
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Credentials", "true"); //是否支持cookie跨域
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Max-Age", "1728000"); // cors预检请求的有效期（单位秒） 20天
    if(req.url == '/favicon.ico'){
        res.end();
    }
    next();
})

app.all('*',api);

module.exports = app;
