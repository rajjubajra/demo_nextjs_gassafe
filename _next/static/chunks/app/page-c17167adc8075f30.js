(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6914:function(e,n,t){Promise.resolve().then(t.bind(t,3451))},3451:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var i=t(7437),r=t(649),o=t(1404);function u(){let{username:e,isLoading:n}=(0,r.C)(),{data:t,error:u,isLoading:l}=(0,o.w)();return console.log("data",t,"error",u,"loading",l),(0,i.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between p-24",children:[(0,i.jsxs)("div",{children:["Name: ",e]}),"Next js config.js file updated"]})}},9505:function(e,n,t){"use strict";t.d(n,{g:function(){return i}});let i={URL:"https://demo.yellow-website.com"}},6476:function(e,n,t){"use strict";t.d(n,{B:function(){return l}});var i=t(2265),r=t(2333),o=t(9505);let u=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return fetch(...n).then(e=>e.json())};function l(){let[e,n]=(0,i.useState)(),t=o.g.URL+"/jsonapi",{data:l,error:s,isLoading:c}=(0,r.ZP)(t,u);return console.log("logged in data: ",l,"logged in error: ",s),(0,i.useEffect)(()=>{var e,t,i,r;l&&n(null==l?void 0:null===(r=l.meta)||void 0===r?void 0:null===(i=r.links)||void 0===i?void 0:null===(t=i.me)||void 0===t?void 0:null===(e=t.meta)||void 0===e?void 0:e.id)},[l]),{userId:e,isLoading:c}}},649:function(e,n,t){"use strict";t.d(n,{C:function(){return s}});var i=t(6476),r=t(2265),o=t(2333),u=t(9505);let l=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return fetch(...n).then(e=>e.json())};function s(){let[e,n]=(0,r.useState)(""),{loggedInUserId:t}=(0,i.B)(),s=u.g.URL+"/jsonapi/user/user/"+t,{data:c,error:a,isLoading:f}=(0,o.ZP)(s,l);return console.log("useUserName data : ",c,"isERROR",a),(0,r.useEffect)(()=>{var e,t;let i=c&&(null==c?void 0:null===(t=c.data)||void 0===t?void 0:null===(e=t.attributes)||void 0===e?void 0:e.name);i&&n(i)},[c]),{username:e,isLoading:f}}},1404:function(e,n,t){"use strict";t.d(n,{w:function(){return l}});var i=t(2333),r=t(9505),o=t(6476);let u=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return fetch(...n).then(e=>e.json())};function l(){let{userId:e}=(0,o.B)(),n=r.g.URL+"/jsonapi/node/gas_safe_certificate?include=field_image",{data:t,error:l,isLoading:s}=(0,i.ZP)(n,u);return{data:t,error:l,isLoading:s}}}},function(e){e.O(0,[801,971,596,744],function(){return e(e.s=6914)}),_N_E=e.O()}]);