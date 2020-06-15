const headConfig = require("./config/headConfig");
const pluginsConfig = require("./config/pluginsConfig");
const navConfig = require("./nav");
const secret = require("./config/secret");

module.exports = {
  title: "折腾的人生",
  description: "记录生活、学习、工作中的点滴。",
  head: headConfig,
  theme: "reco",

  plugins: pluginsConfig,
  themeConfig: {
    type: "blog",
    authorAvatar: "/avatar.png",
    author: "Hewie",
    lastUpdated: "更新时间",
    logo: "/assets/img/logo.png",
    nav: navConfig,
    valineConfig: {
      appId: secret.appId, // your appId
      appKey: secret.appKey, // your appKey
      visitor: true,
    },

    friendLink: [
      {
        title: "Hewie博客",
        desc: "Hewie个人博客",
        email: "349545547@qq.com",
        link: "http://www.rxwcv.cn/",
      },
    ],
    startYear: "2019",
    blogConfig: {
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "标签", // 默认文案 “标签”
      },
    },
  },
  markdown: {
    lineNumbers: true,
  },
};
