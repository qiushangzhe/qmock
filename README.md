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

mock服务的path对应mock文件夹中的json文件的位置

举个例子

mock接口地址
http://127.0.0.1:3021/permission/change

对应假数据文件位置为
/mock/permission/change.json
