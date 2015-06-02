# 车圈手机网站

## 开发环境
用 Gulp 搭建前端自动化模块，并在项目中会应用到 sass(campass) 预处理工具，所需环境如下

### ruby
* compass

### node
* gulp
* bower

## gulpfile主要模块
* test —— js 语法测试
* sass —— scss 编译
* html —— css 和 js 文件合并压缩以及混淆
* connect —— 建立一个 http 环境，并设置 liveload 端口
* server —— 打开浏览器窗口
* watch —— 文件变化观察

## 常用 gulp 指令
* `gulp test`  —— 测试网站各 js 文件
* `gulp start` —— 项目启动
* `gulp build` —— 项目编译，完成后在项目根目录下生成 dist 目录，内为最终文件


## 项目运行
* `npm install`
* `bower install`
* `gulp start`
* `open http://0.0.0.0:9000/app/`