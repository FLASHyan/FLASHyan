if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,s,c)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const d={uri:location.origin+i.slice(1)};return Promise.all(s.map((i=>{switch(i){case"exports":return r;case"module":return d;default:return e(i)}}))).then((e=>{const i=c(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-484247ff"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2021/04/23/暴雨将至/index.html",revision:"d75ad793318dd5e2ad69da72df5ecb29"},{url:"2021/04/24/从零开始搭建博客/index.html",revision:"c7ba399bbd0fd2ff9c5799702c91d0e4"},{url:"archives/2021/04/index.html",revision:"79ba0b1fbbf1ee6133a507a7c70399e9"},{url:"archives/2021/index.html",revision:"77fb7c023ea1933650f444b987fb9712"},{url:"archives/index.html",revision:"0715c46f718d7e96ea0947571b78864c"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/index.html",revision:"31b0c50de0b22e3126ef80e5c0b259cd"},{url:"categories/教程/index.html",revision:"c1e5b9a4628bb0a17cf984950554f3f0"},{url:"categories/随笔/index.html",revision:"67db312cbf28f1442a21f5171289dafd"},{url:"css/index.css",revision:"a854e609bf8e8182e5995cbecaa0c1f8"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"index.html",revision:"99d02caa092675e4fb391ab7d99e4ac0"},{url:"js/main.js",revision:"5641b1a6b817df7d81f465c27ed538d9"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"link/index.html",revision:"e026275f3dc6dc9b314b9a7966a0b2ed"},{url:"tags/index.html",revision:"6e3df8b8c0fb3b1f0aaf4b09ccacbf90"},{url:"tags/教程-hexo/index.html",revision:"79e55dbdfbb03851ec5be9ba20326dc5"},{url:"tags/随笔/index.html",revision:"4487b9a165769bf5c00149ede81a10d1"}],{})}));
//# sourceMappingURL=service-worker.js.map
