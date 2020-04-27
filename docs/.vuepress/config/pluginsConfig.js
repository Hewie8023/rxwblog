const moment = require('moment');
moment.locale("zh-cn");

const secret = require('./secret');

module.exports = {

    '@vuepress/last-updated':
    {
        transformer: (timestamp, lang) => {

            return moment(timestamp).format("LLLL")
        }
    },
    '@vuepress/pwa':
    {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
        }
    },
    '@vuepress/back-to-top': true,
    '@vuepress/google-analytics':
    {
        'ga': secret.ga
    },
    '@vuepress/medium-zoom': {
        selector: 'img.can',
    },
    "vuepress-plugin-auto-sidebar": {
        nav: true,
        collapsable: true,
        sidebarDepth: 2,
        titleMode: "uppercase"
    },
    '@vuepress/nprogress': true
}
