 轱辘  一个Vue UI 组件 

 [![Build Status](https://www.travis-ci.org/a5595223/gulu.svg?branch=master)](https://www.travis-ci.org/a5595223/gulu)

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用。

## 开始使用
1.css样式
   使用本框架前，请在CSS 中开启 border-box
   
   ///
   *,*::before,*::after{box-sizing:border-box;}
   ///
   IE 8 及以上浏览器都支持此样式
   
   你还需要设置默认颜色等变量(后续会改)
   ```
   :root {
               --button-height: 32px;
               --font-size: 14px;
               --button-bg: white;
               --button-active-bg: #eee;
               --border-radius: 4px;
               --color: #333;
               --border-color: #999;
               --border-color-hover: #666;
           }
   ```
   IE 15 及以上浏览器都支持此样式

2.安装 gulu-fgx
   ```
    npm i --save gulu-fgx 
   ```
3.引入轱辘
   ```
   import { Button, ButtonGroup, Icon } from "gulu-fgx";
   import "gulu-fgx/dist/index.css";

   export default {
     name: "app",
     components: {
    "g-button": Button,
    "g-icon": Icon
  }
};   
  ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

