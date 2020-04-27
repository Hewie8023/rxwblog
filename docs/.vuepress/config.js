const headConfig = require("./config/headConfig");
const pluginsConfig = require("./config/pluginsConfig");
const navConfig = require("./nav");
const secret = require('./config/secret');

module.exports = {
  title: "折腾的人生",
  description: "记录生活、学习、工作中的点滴。",
  head: headConfig,
  theme: "reco",

  plugins: pluginsConfig,
  themeConfig: {
    type: "blog",
    authorAvatar: '/avatar.png',
    lastUpdated: "更新时间",
    logo: "/assets/img/logo.png",
    nav: navConfig,
    valineConfig: {
      appId: secret.appId, // your appId
      appKey: secret.appKey, // your appKey
    },
  },
};
