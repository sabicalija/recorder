(function(e){function t(t){for(var r,o,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return s.p+"js/"+({about:"about",recorder:"recorder",replay:"replay",scenes:"scenes"}[e]||e)+"."+{about:"e4d8ffc5",recorder:"342dd845",replay:"730c0ae1",scenes:"18ed3d7b"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={recorder:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about",recorder:"recorder",replay:"replay",scenes:"scenes"}[e]||e)+"."+{about:"31d6cfe0",recorder:"659c3191",replay:"31d6cfe0",scenes:"31d6cfe0"}[e]+".css",a=s.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],f.parentNode.removeChild(f),n(c)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/recorder/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),n("router-link",{attrs:{to:"/record"}},[e._v("Record")]),n("router-link",{attrs:{to:"/replay"}},[e._v("Replay")]),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),n("SWUpdateInfo")],1),n("router-view")],1)},a=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"sw-update-info"}},[n("transition",{attrs:{name:"slide-fade"}},[e.enabled?n("router-link",{attrs:{"active-class":"update",to:"/"},on:{click:e.reload}},[n("font-awesome-icon",{attrs:{icon:"redo"}})],1):e._e()],1)],1)},i=[],s=new r["a"],u={name:"SWUpdateInfo",data:function(){return{updateEvent:null,message:"Update available!"}},computed:{enabled:function(){return Boolean(this.updateEvent)}},methods:{onSWUpdate:function(e){console.log("onSWUpdate"),this.updateEvent=e},reload:function(){this.updateEvent&&(this.updateEvent.skipWaiting().then((function(){location.reload(!0)})),this.updateEvent=null)},created:function(){console.log("created"),s.$on("sw-updated",this.onSWUpdate)}}},l=u,d=(n("e18d"),n("2877")),f=Object(d["a"])(l,c,i,!1,null,"46e0f4d1",null),p=f.exports,m={name:"App",components:{SWUpdateInfo:p},created:function(){var e=localStorage.getItem("input-recorder-records");e&&this.$store.commit("restore-state",e)}},h=m,v=(n("7faf"),Object(d["a"])(h,o,a,!1,null,null,null)),g=v.exports,b=n("9483"),y=(n("d3b7"),n("d4ec")),w=n("bee2"),k=function(){function e(t){Object(y["a"])(this,e),Object.defineProperty(this,"registration",{value:t,configurable:!0,writable:!0})}return Object(w["a"])(e,[{key:"update",value:function(){return this.registration.update()}},{key:"skipWaiting",value:function(){var e=this.registration.waiting;return e?(console.log("Doing worker.skipWaiting()."),new Promise((function(t,n){var r=new MessageChannel;r.port1.onmessage=function(e){console.log("Done worker.skipWaiting()."),e.data.error?n(e.data.error):t(e.data)},e.postMessage({type:"skip-waiting"},[r.port2])}))):Promise.resolve()}}]),e}();Object(b["a"])("".concat("/recorder/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"),s.$emit("sw-ready")},registered:function(){console.log("Service worker has been registered.")},cached:function(e){console.log("Content has been cached for offline use."),s.$emit("sw-cached",new k(e))},updatefound:function(){console.log("New content is downloading.")},updated:function(e){console.log("New content is available; please refresh."),s.$emit("sw-updated",new k(e))},offline:function(){console.log("No internet connection found. App is running in offline mode."),s.$emit("sw-offline")},error:function(e){console.error("Error during service worker registration:",e),s.$emit("sw-error",e)}});var O=n("8c4f"),S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"})},j=[],_={name:"Home",components:{}},E=_,P=Object(d["a"])(E,S,j,!1,null,null,null),A=P.exports;r["a"].use(O["a"]);var $=[{path:"/",name:"Home",component:A},{path:"/record/:scene/new",name:"Recorder",component:function(){return n.e("recorder").then(n.bind(null,"53b2"))}},{path:"/record",name:"Scenes",component:function(){return n.e("scenes").then(n.bind(null,"87d1"))}},{path:"/replay",name:"Replay",component:function(){return n.e("replay").then(n.bind(null,"dbf9"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],x=new O["a"]({routes:$}),C=x,N=(n("b0c0"),n("5530")),W=n("2f62");r["a"].use(W["a"]);var T=new W["a"].Store({state:{records:[]},mutations:{"save-record":function(e,t){t.name?e.records.push(t):e.records.push(Object(N["a"])({},t,{name:"file-".concat(e.records.length+1)})),localStorage.setItem("input-recorder-records",JSON.stringify(e.records))},"restore-state":function(e,t){e.records=JSON.parse(t)}},actions:{},modules:{}}),U=T,I=n("ecee"),M=n("c074"),B=n("ad3d");I["c"].add(M["a"],M["c"],M["b"]),r["a"].component("font-awesome-icon",B["a"]),r["a"].config.productionTip=!1,new r["a"]({router:C,store:U,render:function(e){return e(g)}}).$mount("#app")},"7faf":function(e,t,n){"use strict";var r=n("b8ff"),o=n.n(r);o.a},b198:function(e,t,n){},b8ff:function(e,t,n){},e18d:function(e,t,n){"use strict";var r=n("b198"),o=n.n(r);o.a}});
//# sourceMappingURL=app.7219424e.js.map