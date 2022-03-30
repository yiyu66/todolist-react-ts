# React + Typescript 实现TodoList

使用json-server mock数据

`npm run build`打包项目

`npm install -g serve`下载serve

serve -s build -p 8001 在本地服务器运行该项目 

## 本地预览,使用serve启动dist

dist 目录需要启动一个 HTTP 服务器来访问

在本地预览生产环境构建最简单的方式就是使用一个 Node.js 静态文件服务器，例如 serve：
```
npm install -g serve
 -s 参数的意思是将其架设在 Single-Page Application 模式下
serve -s dist
```

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
