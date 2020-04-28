---
title: VuePress快速入门
date: 2020-04-28 14:04:00
categories:
 - VuePress
tags:
 - 
---

## 官方文档

[VuePress](https://vuepress.vuejs.org/)

## 效果演示

<img class="can" src="https://s1.ax1x.com/2020/04/28/J5i1Z6.jpg" alt="VuePress效果">

## VuePress是什么

- Vue 驱动的静态网站生成器


- 简洁至上

    以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。


- Vue驱动

    享受 Vue + webpack 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。


- 高性能

    VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。

## 快速上手

### 基础环境

1. git(版本管理)
[下载地址](https://git-scm.com/download/win)

2. node(核心)
[下载地址](https://nodejs.org/zh-cn/)

3. yarn(替代npm包管理)
[下载地址](https://classic.yarnpkg.com/en/docs/install/#windows-stable)

::: warning
npm 可能会生成错误的依赖树
:::


4. vscode(编辑器)
[下载地址](https://code.visualstudio.com/)

### 体验VuePress

1. 创建GitHub账号

2. 创建项目

<img class="can" src="https://s1.ax1x.com/2020/04/28/J5miU1.jpg" alt="新建项目">

3. 上手VuePress

先将项目clone到本地，然后cd进入项目。

```bash
git clone git@github.com:Hewie8023/demodemo.git
cd demodemo
```
<img class="can" src="https://s1.ax1x.com/2020/04/28/J5mNrQ.jpg" alt="clone">

使用VuePress
```bash
#将 VuePress 作为一个本地依赖安装
yarn add -D vuepress # 或者：npm install -D vuepress
# 新建一个 docs 文件夹
mkdir docs
# 新建一个 markdown 文件
echo '# Hello VuePress!' > docs/README.md
```
然后再README.md中使用markdown格式进行书写。

接着，在 `package.json` 里加一些脚本:
```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

运行
```bash
yarn docs:dev # 或者：npm run docs:dev
```
默认效果如下：

<img class="can" src="https://s1.ax1x.com/2020/04/28/J5uJBQ.jpg" alt="默认效果">

要生成静态的 HTML 文件，运行：
```bash
yarn docs:build # 或者：npm run docs:build
```
4. 默认主题的首页

添加VuePress官网默认主题的首页，效果如下：

<img class="can" src="https://s1.ax1x.com/2020/04/28/J5K88x.jpg" alt="默认效果">

### 导航栏

#### 默认的目录结构

```
.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
```
其中，`docs/.vuepress/config.js`: 配置文件的入口文件，也可以是 `YML` 或 `toml`。

#### 添加导航栏
需要在docs目录下新建.vuepress目录，然后新建config.js文件。

通过 `themeConfig.nav` 增加一些导航栏链接:
```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ]
  }
}
```
当你提供了一个 `items` 数组而不是一个单一的 `link` 时，它将显示为一个 `下拉列表` ：
```js
nav: [
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ]
```
效果如下：

<img class="can" src="https://s1.ax1x.com/2020/04/28/J5r290.jpg" alt="导航栏效果">

#### 禁用导航栏
1. 使用 `themeConfig.navbar` 来禁用所有页面的导航栏：
```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    navbar: false
  }
}
```

2. 通过 `YAML front matter` 来禁用某个指定页面的导航栏：
```yaml
---
navbar: false
---
```

### 侧边栏

### SEO

### 更新时间

### 发布到GitHub.io

### 自定义域名

### PWA

### Google Analytics

### 自动化部署Travis-CI

### 逼格徽章

### 第三方主题使用