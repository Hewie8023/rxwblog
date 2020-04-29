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

## VuePress 是什么

- Vue 驱动的静态网站生成器

* 简洁至上

  以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。

- Vue 驱动

  享受 Vue + webpack 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。

* 高性能

  VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。

## 快速上手

### 基础环境

1. git(版本管理)
   [下载地址](https://git-scm.com/download/win)

2. node(核心)
   [下载地址](https://nodejs.org/zh-cn/)

3. yarn(替代 npm 包管理)
   [下载地址](https://classic.yarnpkg.com/en/docs/install/#windows-stable)

::: warning
npm 可能会生成错误的依赖树
:::

4. vscode(编辑器)
   [下载地址](https://code.visualstudio.com/)

### 体验 VuePress

1. 创建 GitHub 账号

2. 创建项目

<img class="can" src="https://s1.ax1x.com/2020/04/28/J5miU1.jpg" alt="新建项目">

3. 上手 VuePress

先将项目 clone 到本地，然后 cd 进入项目。

```bash
git clone git@github.com:Hewie8023/demodemo.git
cd demodemo
```

<img class="can" src="https://s1.ax1x.com/2020/04/28/J5mNrQ.jpg" alt="clone">

使用 VuePress

```bash
#将 VuePress 作为一个本地依赖安装
yarn add -D vuepress # 或者：npm install -D vuepress
# 新建一个 docs 文件夹
mkdir docs
# 新建一个 markdown 文件
echo '# Hello VuePress!' > docs/README.md
```

然后再 README.md 中使用 markdown 格式进行书写。

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

添加 VuePress 官网默认主题的首页，效果如下：

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

需要在 docs 目录下新建.vuepress 目录，然后新建 config.js 文件。

通过 `themeConfig.nav` 增加一些导航栏链接:

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "External", link: "https://google.com" },
    ],
  },
};
```

当你提供了一个 `items` 数组而不是一个单一的 `link` 时，它将显示为一个 `下拉列表` ：

```js
nav: [
  {
    text: "Languages",
    ariaLabel: "Language Menu",
    items: [
      { text: "Chinese", link: "/language/chinese/" },
      { text: "Japanese", link: "/language/japanese/" },
    ],
  },
];
```

效果如下：

<img class="can" src="https://s1.ax1x.com/2020/04/28/J5r290.jpg" alt="导航栏效果">

#### 禁用导航栏

1. 使用 `themeConfig.navbar` 来禁用所有页面的导航栏：

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    navbar: false,
  },
};
```

2. 通过 `YAML front matter` 来禁用某个指定页面的导航栏：

```yaml
---
navbar: false
---

```

### 侧边栏

#### 为什么需要侧边栏

- 文章内快速检索(目录 TOC)

- 关联内容快速跳转(导航)

#### 简单的侧边栏

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: ["/", "/page-a", ["/page-b", "Explicit link text"]],
  },
};
```

#### 侧边栏深度

```js
themeConfig: {
  sidebarDepth: 2;
}
```

#### 侧边栏分组

使用对象来将侧边栏划分成多个组：

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: {
      "/foo/": [
        "" /* /foo/ */,
        "one" /* /foo/one.html */,
        "two" /* /foo/two.html */,
      ],

      "/bar/": [
        "" /* /bar/ */,
        "three" /* /bar/three.html */,
        "four" /* /bar/four.html */,
      ],
    },
  },
};
```

效果图如下：

<img class="can" src="https://s1.ax1x.com/2020/04/28/JId60A.jpg" alt="侧边栏效果">

### SEO

#### title

网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。

#### description

网站的描述，它将会以 `<meta>` 标签渲染到当前页面的 HTML 中。

#### head

额外的需要被注入到当前页面的 `HTML <head>` 中的标签，每个标签都可以以 `[tagName, { attrName: attrValue }, innerHTML?]` 的格式指定，举个例子，增加一个自定义的 `favicon`：

```js
module.exports = {
  head: [["link", { rel: "icon", href: "/logo.png" }]],
};
```

#### keywords

```js
['meta', { name: 'keywords', content: 'vuepress,vue' }],
```

### 更新时间

```js
module.exports = {
  plugins: ["@vuepress/last-updated"],
};
```

使用 `moment` 修改时间格式

```bash
#安装 moment
yarn add moment

#y引入moment
const moment = require('moment');

#使用
'@vuepress/last-updated':
{
    transformer: (timestamp, lang) => {

        return moment(timestamp).format("LLLL")
    }
},
```
时间格式可以查看 [`Moment.js`](http://momentjs.cn/docs/) 文档。


### 发布到 GitHub.io
由于本项目直接从 `Github` 上拉取下来的，所以是直接关联到 `Github` 上的，如果是本地创建的项目则需要手动关联。

#### 设置正确的 `base`
在 `docs/.vuepress/config.js` 中设置正确的 `base`。

如果你打算发布到 `https://<USERNAME>.github.io/`，则可以省略这一步，因为 `base` 默认即是 `"/"`。

如果你打算发布到 `https://<USERNAME>.github.io/<REPO>/`（也就是说你的仓库在 `https://github.com/<USERNAME>/<REPO>`），则将 `base` 设置为 `"/<REPO>/"`。

本例需要设置 `base` 为：
```js
module.exports = {
  base: "/demodemo/",
}
```

#### 新增部署文件 `deploy.sh`
```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

然后在 `package.json` 文件的 `scripts` 中增加如下命令：
```js
scripts{
    "deploy": "bash deploy.sh",
}
```

此时通过 `yarn deploy` 命令就可以将项目发布到Github中。

<img class="can" src="https://s1.ax1x.com/2020/04/28/JIDYjO.jpg" alt="github">
<img class="can" src="https://s1.ax1x.com/2020/04/28/JIDygf.jpg" alt="github效果">


## 进阶

### 自定义域名

1. 购买域名
    - 国内：阿里云
    - 国外：[namesilo](https://www.namesilo.com/)

    国内需要备案
2. CNAME

修改 `deploy.sh` 文件，增加 `CNAME`：
```sh
# 填入自己的域名
 echo 'demo.r8023d.xyz' > CNAME
```

3. DNS解析

我的域名是通过 `namesilo` 购买的，所以使用了国外的 [cloudflare](https://www.cloudflare.com/) 进行 `dns` 解析。

<img class="can" src="https://s1.ax1x.com/2020/04/28/JIc41I.jpg" alt="DNS解析">

4. 改回 `base`
```js
module.exports = {
  base: "/",
}
```

<img class="can" src="https://s1.ax1x.com/2020/04/28/JIg0Ug.jpg" alt="域名效果">

### PWA

安装
```bash
yarn add -D @vuepress/plugin-pwa
# OR npm install -D @vuepress/plugin-pwa
```

使用
```js
module.exports = {
  plugins: ['@vuepress/pwa']
}
```

::: tip
为了让你的网站完全地兼容 `PWA`，你需要:

在 `.vuepress/public` 提供 `Manifest` 和 `icons`
在 `.vuepress/config.js` 添加正確的 `head links`(参见下面例子).
:::

这是一个在VuePress中完全地兼容 `PWA` 的例子：
```js
module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
  }],
}
```
打开生成[`Manifest`](https://app-manifest.firebaseapp.com/)的网站，下载压缩包，将 `icon` 和 `Manifest.json` 添加进项目即可。

<img class="can" src="https://s1.ax1x.com/2020/04/29/JHiqbj.jpg" alt="Manifest">

#### updatePopup
开启了一个用于刷新内容的弹窗。这个弹窗将会在站点有内容更新时显示出来，并提供了一个 `refresh` 按钮，允许用户立即刷新内容。
```js
module.exports = {
  themeConfig: {
    plugins: {
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
  }
}
```

### Google Analytics

安装
```bash
yarn add -D @vuepress/plugin-google-analytics
# OR npm install -D @vuepress/plugin-google-analytics
```

使用
```bash
module.exports = {
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': '' // UA-00000000-0
      }
    ]
  ]
}
```
在 [`Google Analytics`](https://analytics.google.com/) 网站上创建媒体资源得到 `跟踪ID` 即可。

<img class="can" src="https://s1.ax1x.com/2020/04/29/JH3ykV.jpg" alt="GoogleAnalytics">


### 自动化部署 Travis-CI
1. 在项目的根目录创建一个名为 `.travis.yml` 的文件

```yaml
language: node_js
node_js:
  - lts/*
install:
  - yarn install # npm ci
script:
  - yarn docs:build # npm run docs:build
  - yarn cname 
deploy:
  provider: pages
  skip_cleanup: true
  local_dir: docs/.vuepress/dist
  github_token: $GITHUB_TOKEN # 在 GitHub 中生成，用于允许 Travis 向你的仓库推送代码。在 Travis 的项目设置页面进行配置，设置为 secure variable
  keep_history: true
  on:
    branch: master
```

2. 添加 `cname.sh` 文件
```bash
# cname.sh

#!/usr/bin/env sh

set -e

cd docs/.vuepress/dist
echo 'docs.r8023d.xyz' > CNAME
```

3. 修改 `package.json` 文件
```js
//在scripts中添加cname
"scripts": {
    "cname": "bash cname.sh"
  },
```

4. 获取 `.travis.yml` 文件中的 `GITHUB_TOKEN`

进入 Github -> Settings -> Developer settings -> Personal access tokens，点击Generate new token，如下图填写即可获得token。

<img class="can" src="https://s1.ax1x.com/2020/04/29/JHGpr9.jpg" alt="token">

然后进入 `Travis CI`，进入相应的项目settings，在下图红框处填入刚刚获取的token即可。

<img class="can" src="https://s1.ax1x.com/2020/04/29/JHGsRU.jpg" alt="travis">

最后可直接通过如下命令进行部署：

```bash
git add .
git commit -m"*****"
git push
```


### 逼格徽章

进入 [`ShieldIO`](https://shields.io/) 获取如下图的徽章，复制 `Markdown` 格式的即可。

<img class="can" src="https://s1.ax1x.com/2020/04/29/JHJ9SS.jpg" alt="徽章">



### 第三方主题使用

本博客使用的是第三方的主题，叫 [`vuepress-theme-reco`](https://vuepress-theme-reco.recoluan.com/)。

安装
```bash
npm install vuepress-theme-reco --save-dev
# or
yarn add vuepress-theme-reco #推荐
```

引用
```js
// .vuepress/config.js
module.exports = {
  theme: 'reco'
}
```

具体的一些文档资料建议在主题官网查看。