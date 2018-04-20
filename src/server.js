const Koa = require('koa');
const cors = require('kcors');
const app = new Koa();
// app.use(cors({
//   origin:'http://localhost:4200',
//   allowMethods:'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
//   credentials:true
// }));
const fs = require('fs');

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', ctx.request.headers.origin);
  ctx.set('Access-Control-Allow-Credentials', true); // 是否支持cookie跨域
  ctx.set('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With');
  ctx.set('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  ctx.set('Access-Control-Max-Age', '1728000'); // cors预检请求的有效期（单位秒） 20天
  await next();
})

app.use(async ctx => {
  ctx.url = ctx.url.split('?')[0];
  console.log(`请求path ${ctx.url}`);
  var jsonFile = getJsonFile(ctx.url);
  if (!jsonFile) {
    ctx.status = 404;
  } else {
    ctx.body = jsonFile;
  }
});

function getJsonFile(path) {
  var final_path = process.cwd() + '/mock' + path + '.json';
  console.log(`获取json文件${final_path}`);
  if (ctx.url == '/favicon.ico') {
    return false;
  }
  if (fs.existsSync(final_path)) {
    return fs.readFileSync(final_path).toString();
  } else {
    return false;
  }
}

module.exports = app;