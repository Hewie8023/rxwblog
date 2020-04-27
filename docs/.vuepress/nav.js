module.exports = [
  { text: "主页", link: "/" ,icon:'reco-home'},
  { text: "介绍", link: "/introduce/" ,icon:'reco-document'},
  {
    text: "面试",
    items: [
      { text: "C++", link: "/cpp/" },
      { text: "计算机网络", link: "/network/" },
      { text: "操作系统", link: "/operation/" },
      { text: "数据库", link: "/database/" },
      { text: "Linux", link: "/linux/" },
    ],
    icon: "reco-blog",
  },
  {
    text: "算法修炼",
    items: [
      {
        text: "算法和数据结构",
        items: [
          { text: "常用算法", link: "/algorithm/common/" },
          { text: "剑指offer", link: "/algorithm/sword_offer/" },
          { text: "LeetCode", link: "/algorithm/leetcode/" },
          { text: "程序员代码面试指南", link: "/algorithm/code_interview/" },
        ],
      },
      {
        text: "设计模式",
        items: [{ text: "设计模式", link: "/algorithm/design_pattem/" }],
      },
    ],
    icon: "reco-api",
  },

  { text: "毕设", link: "/graduation/", icon: "reco-huawei" },
  {
    text: "随手记",
    items: [
      { text: "每周分享", link: "/more/share/" },
      { text: "书签", link: "/more/bookmark/" },
    ],
    icon: "reco-message",
  },
  { text: '时轴', link: '/timeline/', icon: 'reco-date' },

  { text: "关于", link: "/about/", icon: "reco-account" },

  { text: 'Github', link: 'https://github.com/Hewie8023' ,icon:'reco-github'},

];
