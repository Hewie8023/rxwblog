/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9b3e6dcbe6da14906781f9e0b6d96fbb"
  },
  {
    "url": "4am.jpg",
    "revision": "fe35b046bc28119109f0240e65eb2b09"
  },
  {
    "url": "about/index.html",
    "revision": "42b0a0566dceeb0326280f53031da4bf"
  },
  {
    "url": "algorithm/code_interview/index.html",
    "revision": "09b8162fe83da9b75c2220d62d78464e"
  },
  {
    "url": "algorithm/common/common01.html",
    "revision": "5dac8c30f29a46998f131d3f533f07cf"
  },
  {
    "url": "algorithm/common/common02.html",
    "revision": "20b358934d17478d4872af54e19500dc"
  },
  {
    "url": "algorithm/common/common03.html",
    "revision": "5bf2ad06c5ba740e70407443463af39a"
  },
  {
    "url": "algorithm/common/common04.html",
    "revision": "e65819e848fb96dd3c934cba3474ebbe"
  },
  {
    "url": "algorithm/common/common05.html",
    "revision": "17edbdd86768be1185c0261bf46c771a"
  },
  {
    "url": "algorithm/common/common06.html",
    "revision": "62f7a31f89244bed384ee0138b669259"
  },
  {
    "url": "algorithm/common/index.html",
    "revision": "71c613768e0786e2f6381d3047ebe01b"
  },
  {
    "url": "algorithm/design_pattem/behavioral.html",
    "revision": "b123b690662742c1a727c4ad9a0316d0"
  },
  {
    "url": "algorithm/design_pattem/creative.html",
    "revision": "0ba387ee066cc465a5d1125a6d903cf0"
  },
  {
    "url": "algorithm/design_pattem/index.html",
    "revision": "837b2bcdbc7aa2ecbc809b33ecee2322"
  },
  {
    "url": "algorithm/design_pattem/structural.html",
    "revision": "6db5587f45a5a931150cd5ff2709748a"
  },
  {
    "url": "algorithm/leetcode/index.html",
    "revision": "c7f1b15f805fb0413856b55e3908291d"
  },
  {
    "url": "algorithm/sword_offer/index.html",
    "revision": "3f714aa7bb475312a1687b5eee0d8b3e"
  },
  {
    "url": "algorithm/sword_offer/so1.html",
    "revision": "6f4b7dcca649e1aaf461b0a4014971fe"
  },
  {
    "url": "algorithm/sword_offer/so10.html",
    "revision": "7f8f631cdbd3d1115b9d7eb910df8991"
  },
  {
    "url": "algorithm/sword_offer/so2.html",
    "revision": "1080de1c93e73cbd3d5ad73bac6ef1c4"
  },
  {
    "url": "algorithm/sword_offer/so3.html",
    "revision": "6aaa0aa1ea15b0ffe260a4eae2595307"
  },
  {
    "url": "algorithm/sword_offer/so4.html",
    "revision": "05b692a7a0a2ea97fde5d10ce2e1d5d4"
  },
  {
    "url": "algorithm/sword_offer/so5.html",
    "revision": "a39ca28e02ab8936eea21bdb92df6d4e"
  },
  {
    "url": "algorithm/sword_offer/so6.html",
    "revision": "b5c575e41024c5e11a1c75b0d18adc29"
  },
  {
    "url": "algorithm/sword_offer/so7.html",
    "revision": "15a7ad3374821b3f829778e8b4cfe088"
  },
  {
    "url": "algorithm/sword_offer/so8.html",
    "revision": "f88fed2d88c7b5a2c0a3659bc267ec83"
  },
  {
    "url": "algorithm/sword_offer/so9.html",
    "revision": "c992999f6b158b4318cec18888569258"
  },
  {
    "url": "assets/css/0.styles.9c572cc2.css",
    "revision": "830283aeee79c0e32e8038137da7078e"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "748c11d697f81813a5415cacb9983c13"
  },
  {
    "url": "assets/js/1.d9fe90d7.js",
    "revision": "657746809d8029d09e88cca9a5606f82"
  },
  {
    "url": "assets/js/10.d42abd4e.js",
    "revision": "ddfdd71d717f5c22e3132738bec3a256"
  },
  {
    "url": "assets/js/11.19642edc.js",
    "revision": "d8588300224482c9b5631fa8ee17ca0a"
  },
  {
    "url": "assets/js/12.b5cd9f99.js",
    "revision": "351b2cd12bdeef2478cf6e7c65d15e22"
  },
  {
    "url": "assets/js/13.d701e897.js",
    "revision": "a431c19e88684755caa0d0965d004618"
  },
  {
    "url": "assets/js/14.12141c0d.js",
    "revision": "cfe78bf1d81c6f3daa70c02b08926f74"
  },
  {
    "url": "assets/js/15.a5e440b0.js",
    "revision": "505d5b5db89aefa363b315d73d02c4b2"
  },
  {
    "url": "assets/js/16.59709a54.js",
    "revision": "cbd199572928f140be81c19668627540"
  },
  {
    "url": "assets/js/17.05c19cb1.js",
    "revision": "df83b27a78228b55c11bedb1b67d5f2d"
  },
  {
    "url": "assets/js/18.7619e01a.js",
    "revision": "aaf65298a7a2b125996aa27de46de593"
  },
  {
    "url": "assets/js/19.7671326c.js",
    "revision": "947ceb19a48929264763e6bf5d3c68a6"
  },
  {
    "url": "assets/js/20.62d8dab2.js",
    "revision": "6d7166329af5473dfb85df97087b5c07"
  },
  {
    "url": "assets/js/21.1e4e2fc9.js",
    "revision": "13aaa8ec92fb1ca18f9d3e0f730fe33d"
  },
  {
    "url": "assets/js/22.31a0383f.js",
    "revision": "94fa7c1d966c67e356b308ba2c908674"
  },
  {
    "url": "assets/js/23.0f1cfe7e.js",
    "revision": "157b520d8b533d9c9de628f58aa15694"
  },
  {
    "url": "assets/js/24.f45fdfb1.js",
    "revision": "3f6f84cf765df585a75157a80b6babaa"
  },
  {
    "url": "assets/js/25.2b7beab3.js",
    "revision": "edf64589c122e2cfe40b9e91744586dc"
  },
  {
    "url": "assets/js/26.97511eb3.js",
    "revision": "ef907ebada456d16abf865db2f9207f3"
  },
  {
    "url": "assets/js/27.7813a51f.js",
    "revision": "886ffe6934cfa81280b500c1bbaf4a36"
  },
  {
    "url": "assets/js/28.87b13aba.js",
    "revision": "b688b68e3bf91a8352ede51ddb7fda0a"
  },
  {
    "url": "assets/js/29.6671b71d.js",
    "revision": "cf6b8bcc38101e72f989b9370f4944ce"
  },
  {
    "url": "assets/js/3.980c7f83.js",
    "revision": "8bedb1c7e3647d78c3bbcaea9b24bad7"
  },
  {
    "url": "assets/js/30.958d3a15.js",
    "revision": "8d11ddc7a04e0e45a4903a138bbe1582"
  },
  {
    "url": "assets/js/31.ee040bd6.js",
    "revision": "4447259d63462a367def115659f2dbf2"
  },
  {
    "url": "assets/js/32.a05bc0ef.js",
    "revision": "f7ebbef46c091055c6562ccae21e90d3"
  },
  {
    "url": "assets/js/33.39dbb426.js",
    "revision": "cae3b258acc7d75dd5dc3be1a7e59849"
  },
  {
    "url": "assets/js/34.cb9f1b78.js",
    "revision": "64e5a940465774279d1fe011e226bc5f"
  },
  {
    "url": "assets/js/35.b5379691.js",
    "revision": "c9fec82e7f1cefe706454d4d64240c96"
  },
  {
    "url": "assets/js/36.990b200e.js",
    "revision": "61d1d472abd497c20866fa31b527affe"
  },
  {
    "url": "assets/js/37.21bd1b8c.js",
    "revision": "1134713c2dbbb22444b5caf832564fb0"
  },
  {
    "url": "assets/js/38.676dc706.js",
    "revision": "f3c0c9c41f6ef8caf7ef3d28ba7e0a08"
  },
  {
    "url": "assets/js/39.a77129cd.js",
    "revision": "6030c776ba091ec077f085083170e96d"
  },
  {
    "url": "assets/js/4.5964fb2c.js",
    "revision": "0f349a683c93ac73f29f061a1f4b9e43"
  },
  {
    "url": "assets/js/40.bad0e512.js",
    "revision": "cc0261c53a14bf59efb43600f83c619f"
  },
  {
    "url": "assets/js/41.21e4494d.js",
    "revision": "4ca209f76fd9375773bb17866fd8e75c"
  },
  {
    "url": "assets/js/42.fd747e0b.js",
    "revision": "3c82367b69b7e9c55fb25ce728a4f8ff"
  },
  {
    "url": "assets/js/43.4635bdf7.js",
    "revision": "9182eb953f488fa1976aeee71deaff79"
  },
  {
    "url": "assets/js/44.baa5233f.js",
    "revision": "f130f654cafaeef719c2cddd83caccd3"
  },
  {
    "url": "assets/js/45.5e528fbc.js",
    "revision": "a679914b6d72939ec4678d44fd9a915b"
  },
  {
    "url": "assets/js/46.0864f8f3.js",
    "revision": "7ff6559df4d5be7944314099c2e8532d"
  },
  {
    "url": "assets/js/47.bef6f729.js",
    "revision": "92f7a690ea892463fcd662342de4bd58"
  },
  {
    "url": "assets/js/48.4a616411.js",
    "revision": "6d947f7ac838c0ee12636379137ad66f"
  },
  {
    "url": "assets/js/49.ce17210c.js",
    "revision": "75d12506f5c9150904408a9d619754e8"
  },
  {
    "url": "assets/js/5.77b070fd.js",
    "revision": "a14440c97b1fb783f9eccd0ad7790faf"
  },
  {
    "url": "assets/js/50.8f543131.js",
    "revision": "b0db5201fbe275a5943e77a4076b4e16"
  },
  {
    "url": "assets/js/51.3dabcc4e.js",
    "revision": "aa453282688fb4795aedbbb97e828321"
  },
  {
    "url": "assets/js/52.c71a3aa3.js",
    "revision": "b5a8924661b32d61fa0bfd25699435fb"
  },
  {
    "url": "assets/js/53.9794e006.js",
    "revision": "9d49cc3a64b364727768adfbf02bfe3a"
  },
  {
    "url": "assets/js/54.2776c5f5.js",
    "revision": "858b84cbc502568b7ba83022b5a36dc4"
  },
  {
    "url": "assets/js/55.271a6b9a.js",
    "revision": "7c25f55ea30f048961f7654315b3d3d1"
  },
  {
    "url": "assets/js/56.e15a1167.js",
    "revision": "2e0dd082e9dd33e6d162154c6b50e594"
  },
  {
    "url": "assets/js/57.381a1ea7.js",
    "revision": "b2ec12c39feee7fc1bbc00b1dbf632a5"
  },
  {
    "url": "assets/js/58.f727eb50.js",
    "revision": "3e3593f05805b6e7e726cd8f47d5e4cf"
  },
  {
    "url": "assets/js/59.d69f45c8.js",
    "revision": "14a77b220982293c04a7c7d8d74d16d8"
  },
  {
    "url": "assets/js/6.27d8ffba.js",
    "revision": "28e6d27ebf0b152ff19d5ed1010847e8"
  },
  {
    "url": "assets/js/60.e2f4c5d7.js",
    "revision": "49f57c0c16dc9b7b2c5823f7631f7834"
  },
  {
    "url": "assets/js/61.c3432cde.js",
    "revision": "09936cc576bff5de6bf7e188cdfacfdf"
  },
  {
    "url": "assets/js/62.9da98818.js",
    "revision": "ff1f7d36d893dc5594329505c265db32"
  },
  {
    "url": "assets/js/63.c24d40ff.js",
    "revision": "d17f3ced01bf55d1cf1ea49a644cd758"
  },
  {
    "url": "assets/js/64.8aec4ed3.js",
    "revision": "c40118a8b50ed4e227146daacfa7d8ea"
  },
  {
    "url": "assets/js/65.f01c7ed6.js",
    "revision": "d42be2c5d2fe5fe00362ef0a877dfe87"
  },
  {
    "url": "assets/js/66.6d4e93b8.js",
    "revision": "51f45c38892474b078b3fec9d8d26d95"
  },
  {
    "url": "assets/js/67.e89da409.js",
    "revision": "86cc2223ba0b204619f87cc800b6edba"
  },
  {
    "url": "assets/js/68.b61e0dc4.js",
    "revision": "9b6ca8272e60cc507341aa673a7d6966"
  },
  {
    "url": "assets/js/69.05f97324.js",
    "revision": "b050c042469f084e4b3a2c4b7b1867d1"
  },
  {
    "url": "assets/js/7.87df0a5c.js",
    "revision": "2198b3b86802080192e332e453f6e8a2"
  },
  {
    "url": "assets/js/70.0ca373af.js",
    "revision": "b50fc25926bd8c5c6ada7b56a02310da"
  },
  {
    "url": "assets/js/71.418239dc.js",
    "revision": "065e64d820aafc184c384f53731d3499"
  },
  {
    "url": "assets/js/72.a46cc27e.js",
    "revision": "9d8e03b7a730f8f5c54b60000aed8a71"
  },
  {
    "url": "assets/js/73.43c9f649.js",
    "revision": "ca135992d30bd8e6661df0b2d123f7a9"
  },
  {
    "url": "assets/js/74.03bdd6f6.js",
    "revision": "ea19b658761f1a845e6ae17c1b9c88fe"
  },
  {
    "url": "assets/js/8.07d59f0f.js",
    "revision": "f87867ac5f13f822d6cb38e913402de8"
  },
  {
    "url": "assets/js/9.9c67dae7.js",
    "revision": "3561f1e0e923133a88961a35a8ef4a31"
  },
  {
    "url": "assets/js/app.7588a282.js",
    "revision": "fcd5b7f6d59998b8151618b2f761cd2c"
  },
  {
    "url": "avatar.png",
    "revision": "748c11d697f81813a5415cacb9983c13"
  },
  {
    "url": "categories/index.html",
    "revision": "973333445f2f9a91d9ca520df4bda697"
  },
  {
    "url": "cpp/cpp1.html",
    "revision": "5d5b075a4ff89e65c58b1c311f36caac"
  },
  {
    "url": "cpp/cpp2.html",
    "revision": "da3978ad8f85ab46fccb313bd8480549"
  },
  {
    "url": "cpp/cpp3.html",
    "revision": "7832d40bf620003115bf8baa939afa05"
  },
  {
    "url": "cpp/cpp4.html",
    "revision": "318b12af1fd0527578e4febafdc38eef"
  },
  {
    "url": "cpp/cpp5.html",
    "revision": "4673c9102b1411dd33676c2fed432fdb"
  },
  {
    "url": "cpp/cpp6.html",
    "revision": "572577cf06b10901a2fd91098e035260"
  },
  {
    "url": "cpp/index.html",
    "revision": "1b7522f5b073a229ae19a29a94f2973f"
  },
  {
    "url": "database/db1.html",
    "revision": "f3c8a564ac35e4e96c2d058ad179d74d"
  },
  {
    "url": "database/db2.html",
    "revision": "fe67c8fd74a031e0474ce2a117462d9b"
  },
  {
    "url": "database/db3.html",
    "revision": "f8fb09aff1701b7693c88dc38b64e71d"
  },
  {
    "url": "database/db4.html",
    "revision": "cbf1a5fcea72fb1ed71a3327c25a5087"
  },
  {
    "url": "database/db5.html",
    "revision": "1a7160d7ebf509c5db619f29dbb0b8d9"
  },
  {
    "url": "database/index.html",
    "revision": "a48f85775344857e725d2c29668b4ec7"
  },
  {
    "url": "graduation/index.html",
    "revision": "1c1b624a26e6cfab728f9ef9d981040a"
  },
  {
    "url": "hero.png",
    "revision": "e0c4bb3a423e79801e182d64dc69a147"
  },
  {
    "url": "home-bg.jpg",
    "revision": "6c0eec62335d3fcb6796d895e3b72bbc"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "ea7a6609e987505dcb78b4e16bc728d5"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "bd4bf2f793ef688ed776cf5517ee6f45"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "08f849b2108836f3dabad790b9958729"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "06491810f8144cd52e051af4e78ed869"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "33eb178a36e055cc2077ac345f1d99e2"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "db376cb020cbd3f3057628e94624300e"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "3af05607becadd37711bc1e4e9f9202e"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "0f31c6994eb2e33c66659c151ebafd0c"
  },
  {
    "url": "index.html",
    "revision": "70c57e5237a88f6612ae825ae5abeacb"
  },
  {
    "url": "introduce/index.html",
    "revision": "635c6fe689938388a98c689ee1b3d9ae"
  },
  {
    "url": "landscape-4961094_1920.jpg",
    "revision": "d83569188f2f599bf4d622f9abeadd97"
  },
  {
    "url": "landscape-5009868_1920.jpg",
    "revision": "c4f54c8f8ddec0fbc5491fa4101ecf40"
  },
  {
    "url": "linux/index.html",
    "revision": "7130fde86ab1a5a1a370347127a251cc"
  },
  {
    "url": "linux/linux1.html",
    "revision": "842ac491af843eefb0bab14247cfa8f4"
  },
  {
    "url": "linux/linux2.html",
    "revision": "2aff598835de389b8d25a49456bdda67"
  },
  {
    "url": "linux/linux3.html",
    "revision": "9ac08f78d6b53e44605797e295078d75"
  },
  {
    "url": "linux/linux4.html",
    "revision": "11caf429927493134db1571d2cc0d388"
  },
  {
    "url": "linux/linux5.html",
    "revision": "209f87fc4ed0f03e20b7eddcd2180c55"
  },
  {
    "url": "linux/linux6.html",
    "revision": "3e520c55d57617cc7ab459c60de34e0b"
  },
  {
    "url": "mountain-1209650_1920.jpg",
    "revision": "96733240112d3e0c464eee41b684a777"
  },
  {
    "url": "mountain-1245916_1920.jpg",
    "revision": "24e5622f4374a7ad6ed47460504b5e55"
  },
  {
    "url": "mountain-656216_1920.jpg",
    "revision": "f3f067a693ff1f140f895db53f6e80c5"
  },
  {
    "url": "network/index.html",
    "revision": "39ba45107640ff47ec1971df1c1611fa"
  },
  {
    "url": "network/net01.html",
    "revision": "f1d16e24f89723bf5f57a648067e7a9c"
  },
  {
    "url": "network/net02.html",
    "revision": "dea086b90606c5e89a3cab49444cb8cb"
  },
  {
    "url": "network/net03.html",
    "revision": "26a6f9b89bec6510ba0c9b6a94a79f17"
  },
  {
    "url": "network/net04.html",
    "revision": "f5210c322bf3ae46c4b5198f8b2373f5"
  },
  {
    "url": "network/net05.html",
    "revision": "d5d3f69acf79ed06d8bc6d22079e1858"
  },
  {
    "url": "operation/index.html",
    "revision": "cbd49854f3b21e544b7eca1ec40f7850"
  },
  {
    "url": "operation/op1.html",
    "revision": "eba51f482db303f12b92879922c575c9"
  },
  {
    "url": "operation/op2.html",
    "revision": "f4dd8f9ccb8df0d49fccc686657af38e"
  },
  {
    "url": "operation/op3.html",
    "revision": "d6f216f393a48f56b9c9f8ae2c340fb3"
  },
  {
    "url": "operation/op4.html",
    "revision": "8499026fccc9f2df0b6b7ad8e3ac8486"
  },
  {
    "url": "operation/op5.html",
    "revision": "ba48c379d9cec897c8a51b6a51928ad1"
  },
  {
    "url": "operation/op6.html",
    "revision": "7837638be68c3167bd08e7531a9e51ed"
  },
  {
    "url": "operation/op7.html",
    "revision": "12683d1aef108400b5ae169b02591afe"
  },
  {
    "url": "snow-mountain-5012482_1920.jpg",
    "revision": "761936ff294395e2e1109a32546559ea"
  },
  {
    "url": "tag/index.html",
    "revision": "690ef3629101fa83163971013f9d25c5"
  },
  {
    "url": "timeline/index.html",
    "revision": "35a37763863d4de28596ecaf39683c91"
  },
  {
    "url": "timg.jpg",
    "revision": "c8bfaeb8c3353cfc29fbad9eedfabb7d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
