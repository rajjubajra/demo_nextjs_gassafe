(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[759],{9559:function(e,n,t){Promise.resolve().then(t.bind(t,2779))},2779:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var o=t(7437),r=t(2265),i=t(2333);let u={URL:"https://demo.yellow-website.com"},l=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return fetch(...n).then(e=>e.json())};function a(){let[e,n]=(0,r.useState)(),t=u.URL+"/jsonapi",{data:o,error:a,isLoading:s}=(0,i.ZP)(t,l);return(0,r.useEffect)(()=>{var e,t,r,i;o&&n(null==o?void 0:null===(i=o.meta)||void 0===i?void 0:null===(r=i.links)||void 0===r?void 0:null===(t=r.me)||void 0===t?void 0:null===(e=t.meta)||void 0===e?void 0:e.id)},[o]),{loggedInUserId:e}}let s=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return fetch(...n).then(e=>e.json())},d=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return fetch(...n).then(e=>e.json())};var c=function(){let{loginUserId:e}=a(),{username:n}=function(){let[e,n]=(0,r.useState)(""),{loggedInUserId:t}=a(),o=u.URL+"/jsonapi/user/user/"+t,{data:l,error:d,isLoading:c}=(0,i.ZP)(o,s);return console.log("useUserName data : ",l,"isERROR",d),(0,r.useEffect)(()=>{var e,t;let o=l&&(null==l?void 0:null===(t=l.data)||void 0===t?void 0:null===(e=t.attributes)||void 0===e?void 0:e.name);o&&n(o)},[l]),{username:e}}(),{data:t,error:l,isLoading:c}=function(){let e=u.URL+"/jsonapi/node/gas_safe_certificate",{data:n,error:t,isLoading:o}=(0,i.ZP)(e,d);return{data:n,error:t,isLoading:o}}();return console.log("Certificate Data: ",t),(0,o.jsx)("div",{children:(0,o.jsxs)("div",{children:[n," : ",e]})})}}},function(e){e.O(0,[801,971,596,744],function(){return e(e.s=9559)}),_N_E=e.O()}]);