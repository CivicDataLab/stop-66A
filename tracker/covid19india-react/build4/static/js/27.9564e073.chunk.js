(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[27],{142:function(e,t){e.exports=function(e,t){var r=0,n={};e.addEventListener("message",(function(t){var r=t.data;if("RPC"===r.type)if(r.id){var o=n[r.id];o&&(delete n[r.id],r.error?o[1](Object.assign(Error(r.error.message),r.error)):o[0](r.result))}else{var i=document.createEvent("Event");i.initEvent(r.method,!1,!1),i.data=r.params,e.dispatchEvent(i)}})),t.forEach((function(t){e[t]=function(){var o=arguments;return new Promise((function(i,c){var u=++r;n[u]=[i,c],e.postMessage({type:"RPC",id:u,method:t,params:[].slice.call(o)})}))}}))}},206:function(e,t,r){"use strict";var n=r(0),o=function(e){(function(e){return"touches"in e})(e)&&e.touches.length<2&&e.preventDefault&&e.preventDefault()};t.a=function(e,t){var r=void 0===t?{}:t,i=r.isPreventDefault,c=void 0===i||i,u=r.delay,a=void 0===u?300:u,f=Object(n.useRef)(),l=Object(n.useRef)(),s=Object(n.useCallback)((function(t){c&&t.target&&(t.target.addEventListener("touchend",o,{passive:!1}),l.current=t.target),f.current=setTimeout((function(){return e(t)}),a)}),[e,a]),p=Object(n.useCallback)((function(){f.current&&clearTimeout(f.current),c&&l.current&&l.current.removeEventListener("touchend",o)}),[]);return{onMouseDown:function(e){return s(e)},onTouchStart:function(e){return s(e)},onMouseUp:p,onMouseLeave:p,onTouchEnd:p}}},96:function(e,t,r){"use strict";function n(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function o(e){return!!e&&!!e[$]}function i(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);return!t||t===Object.prototype}(e)||Array.isArray(e)||!!e[J]||!!e.constructor[J]||p(e)||d(e))}function c(e,t,r){void 0===r&&(r=!1),0===u(e)?(r?Object.keys:q)(e).forEach((function(n){r&&"symbol"==typeof n||t(n,e[n],e)})):e.forEach((function(r,n){return t(n,r,e)}))}function u(e){var t=e[$];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:p(e)?2:d(e)?3:0}function a(e,t){return 2===u(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function f(e,t){return 2===u(e)?e.get(t):e[t]}function l(e,t,r){var n=u(e);2===n?e.set(t,r):3===n?(e.delete(t),e.add(r)):e[t]=r}function s(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e){return z&&e instanceof Map}function d(e){return U&&e instanceof Set}function y(e){return e.o||e.t}function h(e){if(Array.isArray(e))return e.slice();var t=X(e);delete t[$];for(var r=q(t),n=0;n<r.length;n++){var o=r[n],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function v(e,t){m(e)||o(e)||!i(e)||(u(e)>1&&(e.set=e.add=e.clear=e.delete=b),Object.freeze(e),t&&c(e,(function(e,t){return v(t,!0)}),!0))}function b(){n(2)}function m(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function O(e){var t=B[e];return t||n(19,e),t}function g(){return K}function P(e,t){t&&(O("Patches"),e.u=[],e.s=[],e.v=t)}function j(e){E(e),e.p.forEach(x),e.p=null}function E(e){e===K&&(K=e.l)}function w(e){return K={p:[],l:K,h:e,m:!0,_:0}}function x(e){var t=e[$];0===t.i||1===t.i?t.j():t.g=!0}function A(e,t){t._=t.p.length;var r=t.p[0],o=void 0!==e&&e!==r;return t.h.O||O("ES5").S(t,e,o),o?(r[$].P&&(j(t),n(4)),i(e)&&(e=S(t,e),t.l||C(t,e)),t.u&&O("Patches").M(r[$],e,t.u,t.s)):e=S(t,r,[]),j(t),t.u&&t.v(t.u,t.s),e!==L?e:void 0}function S(e,t,r){if(m(t))return t;var n=t[$];if(!n)return c(t,(function(o,i){return k(e,n,t,o,i,r)}),!0),t;if(n.A!==e)return t;if(!n.P)return C(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=h(n.k):n.o;c(o,(function(t,i){return k(e,n,o,t,i,r)})),C(e,o,!1),r&&e.u&&O("Patches").R(n,r,e.u,e.s)}return n.o}function k(e,t,r,n,c,u){if(o(c)){var f=S(e,c,u&&t&&3!==t.i&&!a(t.D,n)?u.concat(n):void 0);if(l(r,n,f),!o(f))return;e.m=!1}if(i(c)&&!m(c)){if(!e.h.N&&e._<1)return;S(e,c),t&&t.A.l||C(e,c)}}function C(e,t,r){void 0===r&&(r=!1),e.h.N&&e.m&&v(t,r)}function D(e,t){var r=e[$];return(r?y(r):e)[t]}function R(e){e.P||(e.P=!0,e.l&&R(e.l))}function M(e){e.o||(e.o=h(e.t))}function N(e,t,r){var n=p(t)?O("MapSet").T(t,r):d(t)?O("MapSet").F(t,r):e.O?function(e,t){var r=Array.isArray(e),n={i:r?1:0,A:t?t.A:g(),P:!1,I:!1,D:{},l:t,t:e,k:null,o:null,j:null,C:!1},o=n,i=G;r&&(o=[n],i=H);var c=Proxy.revocable(o,i),u=c.revoke,a=c.proxy;return n.k=a,n.j=u,a}(t,r):O("ES5").J(t,r);return(r?r.A:g()).p.push(n),n}function _(e){return o(e)||n(22,e),function e(t){if(!i(t))return t;var r,n=t[$],o=u(t);if(n){if(!n.P&&(n.i<4||!O("ES5").K(n)))return n.t;n.I=!0,r=F(t,o),n.I=!1}else r=F(t,o);return c(r,(function(t,o){n&&f(n.t,t)===o||l(r,t,e(o))})),3===o?new Set(r):r}(e)}function F(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return h(e)}var I,K,T="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),z="undefined"!=typeof Map,U="undefined"!=typeof Set,W="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,L=T?Symbol("immer-nothing"):((I={})["immer-nothing"]=!0,I),J=T?Symbol("immer-draftable"):"__$immer_draftable",$=T?Symbol("immer-state"):"__$immer_state",q=("undefined"!=typeof Symbol&&Symbol.iterator,"undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames),X=Object.getOwnPropertyDescriptors||function(e){var t={};return q(e).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)})),t},B={},G={get:function(e,t){if(t===$)return e;var r=y(e);if(!a(r,t))return function(e,t,r){if(r in t)for(var n=Object.getPrototypeOf(t);n;){var o,i=Object.getOwnPropertyDescriptor(n,r);if(i)return"value"in i?i.value:null===(o=i.get)||void 0===o?void 0:o.call(e.k);n=Object.getPrototypeOf(n)}}(e,r,t);var n=r[t];return e.I||!i(n)?n:n===D(e.t,t)?(M(e),e.o[t]=N(e.A.h,n,e)):n},has:function(e,t){return t in y(e)},ownKeys:function(e){return Reflect.ownKeys(y(e))},set:function(e,t,r){if(e.D[t]=!0,!e.P){if(s(r,D(y(e),t))&&void 0!==r)return!0;M(e),R(e)}return e.o[t]=r,!0},deleteProperty:function(e,t){return void 0!==D(e.t,t)||t in e.t?(e.D[t]=!1,M(e),R(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=y(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty:function(){n(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){n(12)}},H={};c(G,(function(e,t){H[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),H.deleteProperty=function(e,t){return G.deleteProperty.call(this,e[0],t)},H.set=function(e,t,r){return G.set.call(this,e[0],t,r,e[0])};var Q=new(function(){function e(e){this.O=W,this.N=!1,"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var t=e.prototype;return t.produce=function(e,t,r){if("function"==typeof e&&"function"!=typeof t){var o=t;t=e;var c=this;return function(e){var r=this;void 0===e&&(e=o);for(var n=arguments.length,i=Array(n>1?n-1:0),u=1;u<n;u++)i[u-1]=arguments[u];return c.produce(e,(function(e){var n;return(n=t).call.apply(n,[r,e].concat(i))}))}}var u;if("function"!=typeof t&&n(6),void 0!==r&&"function"!=typeof r&&n(7),i(e)){var a=w(this),f=N(this,e,void 0),l=!0;try{u=t(f),l=!1}finally{l?j(a):E(a)}return"undefined"!=typeof Promise&&u instanceof Promise?u.then((function(e){return P(a,r),A(e,a)}),(function(e){throw j(a),e})):(P(a,r),A(u,a))}if(!e||"object"!=typeof e){if((u=t(e))===L)return;return void 0===u&&(u=e),this.N&&v(u,!0),u}n(21,e)},t.produceWithPatches=function(e,t){var r,n,o=this;return"function"==typeof e?function(t){for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return o.produceWithPatches(t,(function(t){return e.apply(void 0,[t].concat(n))}))}:[this.produce(e,t,(function(e,t){r=e,n=t})),r,n]},t.createDraft=function(e){i(e)||n(8),o(e)&&(e=_(e));var t=w(this),r=N(this,e,void 0);return r[$].C=!0,E(t),r},t.finishDraft=function(e,t){var r=(e&&e[$]).A;return P(r,t),A(void 0,r)},t.setAutoFreeze=function(e){this.N=e},t.setUseProxies=function(e){e&&!W&&n(20),this.O=e},t.applyPatches=function(e,t){var r;for(r=t.length-1;r>=0;r--){var n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}var i=O("Patches").$;return o(e)?i(e,t):this.produce(e,(function(e){return i(e,t.slice(r+1))}))},e}()),V=Q.produce;Q.produceWithPatches.bind(Q),Q.setAutoFreeze.bind(Q),Q.setUseProxies.bind(Q),Q.applyPatches.bind(Q),Q.createDraft.bind(Q),Q.finishDraft.bind(Q);t.a=V},99:function(e,t,r){"use strict";var n=r(0),o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var i=function(e){var t=e.animate,r=e.backgroundColor,i=e.backgroundOpacity,c=e.baseUrl,u=e.children,a=e.foregroundColor,f=e.foregroundOpacity,l=e.gradientRatio,s=e.uniqueKey,p=e.interval,d=e.rtl,y=e.speed,h=e.style,v=e.title,b=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),m=s||Math.random().toString(36).substring(6),O=m+"-diff",g=m+"-animated-diff",P=m+"-aria",j=d?{transform:"scaleX(-1)"}:null,E="0; "+p+"; 1",w=y+"s";return Object(n.createElement)("svg",o({"aria-labelledby":P,role:"img",style:o(o({},h),j)},b),v?Object(n.createElement)("title",{id:P},v):null,Object(n.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+c+"#"+O+")",style:{fill:"url("+c+"#"+g+")"}}),Object(n.createElement)("defs",{role:"presentation"},Object(n.createElement)("clipPath",{id:O},u),Object(n.createElement)("linearGradient",{id:g},Object(n.createElement)("stop",{offset:"0%",stopColor:r,stopOpacity:i},t&&Object(n.createElement)("animate",{attributeName:"offset",values:-l+"; "+-l+"; 1",keyTimes:E,dur:w,repeatCount:"indefinite"})),Object(n.createElement)("stop",{offset:"50%",stopColor:a,stopOpacity:f},t&&Object(n.createElement)("animate",{attributeName:"offset",values:-l/2+"; "+-l/2+"; "+(1+l/2),keyTimes:E,dur:w,repeatCount:"indefinite"})),Object(n.createElement)("stop",{offset:"100%",stopColor:r,stopOpacity:i},t&&Object(n.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+l),keyTimes:E,dur:w,repeatCount:"indefinite"})))))};i.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var c=function(e){return e.children?Object(n.createElement)(i,o({},e)):Object(n.createElement)(u,o({},e))},u=function(e){return Object(n.createElement)(c,o({viewBox:"0 0 476 124"},e),Object(n.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(n.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(n.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=c}}]);
//# sourceMappingURL=27.9564e073.chunk.js.map