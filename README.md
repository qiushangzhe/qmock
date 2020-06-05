# qmock

---

## 介绍
- 简单易用的mock-server
- 支持cors跨域

## 使用说明

#### step 1.安装qmock(全局安装)

```
npm install https://github.com/qiushangzhe/qmock.git -g
```

如果报权限错误，请添加sodo执行

```
sudo npm install https://github.com/qiushangzhe/qmock.git -g
```
#### step 2.使用

##### 提示：

    1. 执行qm的路径时，代码会检测当前目录下是否有mock文件夹。如果没有，则会自动创建mock文件夹。
    2. 所有的数据文件都存放在mock文件夹中。


执行``qm`` 或者 ``qm --port 端口``

开启成功后，控制台会输出mock-server的访问地址。
默认端口是3021

#### step 3.其他

最新更新：当前版本使用了JSON5

mock服务的path对应mock文件夹中的json5文件的位置

举个例子

mock接口地址
http://127.0.0.1:3021/permission/change

对应假数据文件位置为
/mock/permission/change.json5

#### 最新补充说明

当前版本引入了[faker.js](https://github.com/Marak/Faker.js#readme) 

你只需要，把对应的json5文件改成js文件，然后在文件内部以commonjs规范导出一个对象即可，以下为一个简单的例子，可以让每次的mock ajax返回的对象中，name字段的value都是一个新的随机值。

```javascript
const faker = require('faker')
module.exports = {
  name: faker.name.firstName()
}
```

如果出现同名的json5和js文件，默认读取的是json5文件，也就是 优先级为 json5 > js 文件
