---
sideBarTitle: Angular 
title: 基于angular+typescript 搭建的博客站点
lang: zh-CN
---

## 简介

![Ioinc项目环境搭建](/images/front/angular_blog.png "Ioinc项目环境搭建")


::: tip 简介
基于angular+typescript 搭建的博客站点，css3 @media 响应式布局，适配pc端、移动端
:::


 

## 技术栈

前端相关技术：Webpack2.0、、、Angualr4.0、、、Typescript、、、ES6 、、、yarn
	
```
1: 依赖nodejs，需要先安装nodejs环境，安装nodejs 后执行命令 `npm install`
2: 依赖yarn 包管理工具，全局安装yarn npm install -g yarn
2: 依赖Webpack2.0 环境，，先安装webpack2.0 全局环境  npm install -g webpack@2.0
3：检查安装成功 =>
    npm -v
    webpack -V
4：yarn add 插件名  添加开发插件
5：yarn remove 插件名 移除插件
```


## 服务leancloud
前后端完全分离模式，，数据均由leancloud提供 [leancloud](https://leancloud.cn/ "leancloud")  


## 项目结构
  
**config目录**

- webpack.common.js webpack打包公用配置文件

- webpack.dev.js 	  webpack 开发环境配置文件

- webpack.prod.js   webpack 生产环境配置文件



**node_module  ....**

**src目录**

- 项目开发源代码目录，包括ts脚本文件，css,less样式文件，images图片文件，，component,,mp3 音乐文件.
    
- index.html 	单页引用入口页面
- main.ts    	页面入口脚本文件
- polyfills.ts、vendors.ts   angular2.0 运行所依赖的核心代码
- source         mp3音乐文件
		


## 项目运行
    
	1：yarn ，安装node_modules所有依赖的包文件	 
	2：npm start 生产环境
	3：npm run build 开发环境... 



## [DEMO 主页](https://ruanjq.github.io/angular-typescript/ "DEMO 主页")  

## [GitHub 项目](https://github.com/ruanjq/angular-typescript "GitHub")  





