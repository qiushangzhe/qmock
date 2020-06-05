const Koa = require('koa');
const app = new Koa();
const fs = require('fs');
const JSON5 = require('json5');
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
  const jsonFile = getJsonFile(ctx.url);
  if (!jsonFile) {
    ctx.status = 404;
  } else {
    ctx.body = jsonFile;
  }
});

function getJsonFile(path) {
  if (path === '/favicon.ico' || path === '/robots.txt') { return false; } // 如果请求的是 图标或者爬虫的东西 自动跳过
  let final_path = process.cwd() + '/mock' + path + '.json5';
  if( fs.existsSync(final_path) ) { // 如果json5文件存在 直接读取json5
    return JSON5.parse(fs.readFileSync(final_path).toString());
  }
  final_path = process.cwd() + '/mock' + path + '.js'; // 如果当前是有js文件，那么使用js的
  if( fs.existsSync(final_path) ) {
    const data = eval(fs.readFileSync(final_path).toString())
    return data
  }
  
}

module.exports = app;