(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6914:function(e,n,t){Promise.resolve().then(t.bind(t,1793))},1793:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var i=t(7437),l=t(649),d=t(1404),r=t(2265),o=function(){return(0,i.jsx)("div",{className:"w-full h-screen flex justify-center items-center",children:"Loading..."})},u=t(6691),s=t.n(u),a=t(9505),c=e=>{let{data:n,id:t}=e,[l,d]=(0,r.useState)("");return(0,r.useEffect)(()=>{let e=n&&(null==n?void 0:n.included.findIndex(e=>e.id===t));console.log(e);let i=n&&(null==n?void 0:n.included[e]);console.log("Included data: ",i),d(a.g.URL+(null==i?void 0:i.attributes.uri.url))},[n,t]),(0,i.jsx)("div",{children:(0,i.jsx)("button",{onClick:()=>{let e=window.open("","","width=600,height=600");e.document.open(),e.document.write("<html><body>"),e.document.write("<img src={".concat(l,'} alt="Printed Image" />')),e.document.write("</body></html>"),e.document.close(),e.print(),e.close()},children:"Print Image"})})};function f(){var e;let{username:n,isLoading:t}=(0,l.C)(),{data:r,error:u,isLoading:f}=(0,d.w)();return(console.log("data",r,"error",u,"loading",f),f&&t)?(0,i.jsx)(o,{}):(0,i.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-center p-24",children:[(0,i.jsxs)("div",{children:["Name: ",(0,i.jsx)("span",{className:"capitalize",children:n})]}),r&&(null==r?void 0:null===(e=r.data)||void 0===e?void 0:e.map(e=>(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{children:["Title: ",e.attributes.title]}),(0,i.jsx)("div",{children:"Checked Date: [date]"}),(0,i.jsx)("div",{children:"Next due date: [date]"}),(0,i.jsx)("div",{children:(0,i.jsx)(s(),{className:"w-96 h-auto p-2 m-2",src:function(e){let n=r&&(null==r?void 0:r.included.findIndex(n=>n.id===e));console.log(n);let t=r&&(null==r?void 0:r.included[n]);return console.log("Included data: ",t),a.g.URL+(null==t?void 0:t.attributes.uri.url)}(e.relationships.field_image.data.id),height:300,width:300,alt:"gassafe"})}),(0,i.jsx)("div",{children:(0,i.jsx)(c,{id:e.relationships.field_image.data.id,data:r})})]},e.id)))]})}},9505:function(e,n,t){"use strict";t.d(n,{g:function(){return i}});let i={URL:"https://demo.yellow-website.com"}},6476:function(e,n,t){"use strict";t.d(n,{B:function(){return o}});var i=t(2265),l=t(2333),d=t(9505);let r=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return fetch(...n).then(e=>e.json())};function o(){let[e,n]=(0,i.useState)(),t=d.g.URL+"/jsonapi",{data:o,error:u,isLoading:s}=(0,l.ZP)(t,r);return(0,i.useEffect)(()=>{var e,t,i,l;o&&n(null==o?void 0:null===(l=o.meta)||void 0===l?void 0:null===(i=l.links)||void 0===i?void 0:null===(t=i.me)||void 0===t?void 0:null===(e=t.meta)||void 0===e?void 0:e.id)},[o]),{loggedInUserId:e}}},649:function(e,n,t){"use strict";t.d(n,{C:function(){return u}});var i=t(6476),l=t(2265),d=t(2333),r=t(9505);let o=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return fetch(...n).then(e=>e.json())};function u(){let[e,n]=(0,l.useState)(""),{loggedInUserId:t}=(0,i.B)(),u=r.g.URL+"/jsonapi/user/user/"+t,{data:s,error:a,isLoading:c}=(0,d.ZP)(u,o);return console.log("useUserName data : ",s,"isERROR",a),(0,l.useEffect)(()=>{var e,t;let i=s&&(null==s?void 0:null===(t=s.data)||void 0===t?void 0:null===(e=t.attributes)||void 0===e?void 0:e.name);i&&n(i)},[s]),{username:e,isLoading:c}}},1404:function(e,n,t){"use strict";t.d(n,{w:function(){return r}});var i=t(2333),l=t(9505);let d=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return fetch(...n).then(e=>e.json())};function r(){let e=l.g.URL+"/jsonapi/node/gas_safe_certificate?include=field_image",{data:n,error:t,isLoading:r}=(0,i.ZP)(e,d);return{data:n,error:t,isLoading:r}}}},function(e){e.O(0,[801,691,971,596,744],function(){return e(e.s=6914)}),_N_E=e.O()}]);