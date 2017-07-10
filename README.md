# qmock

> 简单易用的mock-server
> 随便跨域，咔咔的。jsonp是什么？
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

控制台打开你的mock数据文件夹，

执行``qm --port 端口``

控制台输出mock-server的地址。

mock数据文件夹创建database文件夹

#### step 3.其他

url的path对应database中的json文件的位置

举个例子

mock接口地址
http://127.0.0.1:1234/test/main

对应假数据文件位置为

mock数据文件夹/databast/test/main.json

## 更新

执行``npm update qmock -g``
