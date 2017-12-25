const Koa = require('koa');
const cors = require('kcors');
const app = new Koa();
app.use(cors({
  origin:'http://localhost:4200',
  allowMethods:'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  credentials:true
}));
const fs = require('fs');
app.use(async ctx => {
    ctx.url = ctx.url.split('?')[0];
    console.log(ctx.url);
    var jsonFile = getJsonFile(ctx.url);
    if(!jsonFile){
        ctx.status = 404;
    }else{
        ctx.body = jsonFile;
    }
});

function getJsonFile(path){
    var final_path = process.cwd() + '/mock' + path + '.json';
    console.log(final_path);
    if(fs.existsSync(final_path)){
        return fs.readFileSync(final_path).toString();
    }else{
        return false;
    }
}
module.exports = app;
