(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[759],{9559:function(n,t,e){Promise.resolve().then(e.bind(e,5363))},5363:function(n,t,e){"use strict";e.r(t);var i=e(7437),o=e(6476),r=e(649),u=e(1404);t.default=function(){let{loginUserId:n}=(0,o.B)(),{username:t}=(0,r.C)(),{data:e,error:l,isLoading:s}=(0,u.w)();return console.log("Certificate Data: ",e),(0,i.jsx)("div",{children:(0,i.jsxs)("div",{children:[t," : ",n]})})}},9505:function(n,t,e){"use strict";e.d(t,{g:function(){return i}});let i={URL:"https://demo.yellow-website.com"}},6476:function(n,t,e){"use strict";e.d(t,{B:function(){return l}});var i=e(2265),o=e(2333),r=e(9505);let u=function(){for(var n=arguments.length,t=Array(n),e=0;e<n;e++)t[e]=arguments[e];return fetch(...t).then(n=>n.json())};function l(){let[n,t]=(0,i.useState)(),e=r.g.URL+"/jsonapi",{data:l,error:s,isLoading:c}=(0,o.ZP)(e,u);return console.log("logged in data",s),(0,i.useEffect)(()=>{var n,e,i,o;l&&t(null==l?void 0:null===(o=l.meta)||void 0===o?void 0:null===(i=o.links)||void 0===i?void 0:null===(e=i.me)||void 0===e?void 0:null===(n=e.meta)||void 0===n?void 0:n.id)},[l]),{userId:n,isLoading:c}}},649:function(n,t,e){"use strict";e.d(t,{C:function(){return s}});var i=e(6476),o=e(2265),r=e(2333),u=e(9505);let l=function(){for(var n=arguments.length,t=Array(n),e=0;e<n;e++)t[e]=arguments[e];return fetch(...t).then(n=>n.json())};function s(){let[n,t]=(0,o.useState)(""),{loggedInUserId:e}=(0,i.B)(),s=u.g.URL+"/jsonapi/user/user/"+e,{data:c,error:a,isLoading:f}=(0,r.ZP)(s,l);return console.log("useUserName data : ",c,"isERROR",a),(0,o.useEffect)(()=>{var n,e;let i=c&&(null==c?void 0:null===(e=c.data)||void 0===e?void 0:null===(n=e.attributes)||void 0===n?void 0:n.name);i&&t(i)},[c]),{username:n,isLoading:f}}},1404:function(n,t,e){"use strict";e.d(t,{w:function(){return l}});var i=e(2333),o=e(9505),r=e(6476);let u=function(){for(var n=arguments.length,t=Array(n),e=0;e<n;e++)t[e]=arguments[e];return fetch(...t).then(n=>n.json())};function l(){let{userId:n}=(0,r.B)(),t=o.g.URL+"/jsonapi/node/gas_safe_certificate?include=field_image",{data:e,error:l,isLoading:s}=(0,i.ZP)(t,u);return{data:e,error:l,isLoading:s}}}},function(n){n.O(0,[801,971,596,744],function(){return n(n.s=9559)}),_N_E=n.O()}]);