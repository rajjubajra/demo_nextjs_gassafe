(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9982:function(e,n,i){Promise.resolve().then(i.bind(i,511))},9505:function(e,n,i){"use strict";i.d(n,{g:function(){return t}});let t={URL:"https://demo.yellow-website.com"}},511:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return u}});var t=i(7437),l=i(2333),o=i(9505),r=function(e){var n,i,l;let{data:r,id:d,children:a}=e,c=r&&(null==r?void 0:null===(n=r.included)||void 0===n?void 0:n.findIndex(e=>e.id===d)),{url:u}=r&&(null==r?void 0:null===(l=r.included[c])||void 0===l?void 0:null===(i=l.attributes)||void 0===i?void 0:i.uri);return(0,t.jsx)("div",{className:"grayscale-bg",style:{backgroundImage:"url(".concat(o.g.URL).concat(u,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",width:"100%",height:"100%"},children:a})},d=i(1396),a=i.n(d);let c=function(){for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];return fetch(...n).then(e=>e.json())};var u=function(){var e;let{data:n,error:i,isLoading:d}=(0,l.ZP)("".concat(o.g.URL,"/").concat("jsonapi/block_content/homepage?include=field_image"),c);return console.log("Homepage: ",n),(0,t.jsx)("div",{className:"mx-20",children:(0,t.jsx)("div",{className:"grid grid-cols-2 gap-2",children:n&&(null==n?void 0:null===(e=n.data)||void 0===e?void 0:e.map(e=>{var i,l,o;return(0,t.jsx)(a(),{href:e.attributes.field_link.uri.replace("internal:",""),className:"w-full border dark:border-none",children:(0,t.jsx)(r,{id:null==e?void 0:null===(o=e.relationships)||void 0===o?void 0:null===(l=o.field_image)||void 0===l?void 0:null===(i=l.data)||void 0===i?void 0:i.id,data:n,children:(0,t.jsx)("div",{className:"w-full h-72 flex justify-center items-center bg-white/70 hover:bg-white/10 duration-300 text-slate-900 hover:text-white",children:(0,t.jsx)("span",{className:"text-2xl  font-bold",children:e.attributes.info})})})},e.id)}))})})}}},function(e){e.O(0,[189,396,971,596,744],function(){return e(e.s=9982)}),_N_E=e.O()}]);