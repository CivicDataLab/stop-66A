(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[40],{283:function(e,t,n){"use strict";n.r(t);var a=n(89),r=n(73),o=n(175),i=n(38),c=n(0),l=n.n(c),s=n(21),u=n.n(s);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f=Object(c.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,r=e.size,o=void 0===r?24:r,i=d(e,["color","size"]);return l.a.createElement("svg",p({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),l.a.createElement("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),l.a.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"}))}));f.propTypes={color:u.a.string,size:u.a.oneOfType([u.a.string,u.a.number])},f.displayName="Bell";var m=f;function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var O=Object(c.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,r=e.size,o=void 0===r?24:r,i=b(e,["color","size"]);return l.a.createElement("svg",v({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),l.a.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"}),l.a.createElement("path",{d:"M18.63 13A17.89 17.89 0 0 1 18 8"}),l.a.createElement("path",{d:"M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"}),l.a.createElement("path",{d:"M18 8a6 6 0 0 0-9.33-5"}),l.a.createElement("line",{x1:"1",y1:"1",x2:"23",y2:"23"}))}));O.propTypes={color:u.a.string,size:u.a.oneOfType([u.a.string,u.a.number])},O.displayName="BellOff";var h=O,w=n(92),y=Object(c.lazy)((function(){return Promise.all([n.e(15),n.e(45)]).then(n.bind(null,275))})),g=function(e){var t=e.lastViewedLog,n=e.newUpdate,a=e.isTimelineMode,s=e.setIsTimelineMode,u=e.showUpdates,p=e.setDate,d=e.dates,f=e.setNewUpdate,v=e.setShowUpdates,b=Object(c.useMemo)((function(){return l.a.createElement(m,{onClick:function(){v(!u),f(!1)}})}),[f,v,u]),O=Object(c.useMemo)((function(){return l.a.createElement(h,{onClick:function(){v(!u)}})}),[v,u]),g=Object(c.useMemo)((function(){return l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-.2 -.2 17 17",width:"16",height:"16"},l.a.createElement("path",{fillRule:"evenodd",d:"M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"}))}),[]),j=Object(w.c)({opacity:a?1:0,transform:"perspective(600px) rotateX(".concat(a?180:0,"deg)"),config:{mass:5,tension:500,friction:80}}),E=j.transform,M=j.opacity,k=Object(c.useMemo)((function(){var e=[];return[0,0,0].map((function(t,n){return e.push({animationDelay:"".concat(500+250*n,"ms")}),null})),e}),[]),x=Object(c.useCallback)((function(){s(!0),u&&v(!u)}),[s,v,u]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(w.a.div,{className:"actions",style:{opacity:M.interpolate((function(e){return 1-e})),transform:E,pointerEvents:a?"none":""}},l.a.createElement("h5",{className:"fadeInUp",style:k[0]},"".concat(function(e){return Object(r.a)(Object(i.a)(Object(o.a)(e,"T",new Date),"Asia/Kolkata"),"dd MMM, p")}(t)," IST")),l.a.createElement("div",{className:"bell-icon fadeInUp",style:k[1]},u?O:b,n&&l.a.createElement("div",{className:"indicator"})),l.a.createElement("div",{className:"timeline-icon fadeInUp",onClick:x,style:k[2]},g)),l.a.createElement(w.a.div,{className:"actions timeline",style:{opacity:M,transform:E.interpolate((function(e){return"".concat(e," rotateX(180deg)")})),pointerEvents:a?"":"none"}},a&&l.a.createElement(c.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(y,{setIsTimelineMode:s,setDate:p,dates:d}))))},j=n(33),E=n(258),M=n(131),k=Object(c.lazy)((function(){return n.e(39).then(n.bind(null,274))}));t.default=l.a.memo((function(e){var t=e.setDate,n=e.dates,r=Object(c.useState)(!1),o=Object(a.a)(r,2),i=o[0],s=o[1],u=Object(E.a)("newUpdate",!1),p=Object(a.a)(u,2),d=p[0],f=p[1],m=Object(E.a)("lastViewedLog",0),v=Object(a.a)(m,2),b=v[0],O=v[1],h=Object(c.useState)(!1),w=Object(a.a)(h,2),y=w[0],x=w[1],U=Object(M.a)("https://api.covid19india.org/updatelog/log.json",j.b,{revalidateOnFocus:!0}).data;return Object(c.useEffect)((function(){if(void 0!==U){var e=1e3*U.slice().reverse()[0].timestamp;e!==b&&(f(!0),O(e))}}),[b,U,O,f]),l.a.createElement(l.a.Fragment,null,l.a.createElement(g,{lastViewedLog:b,newUpdate:d,isTimelineMode:y,setIsTimelineMode:x,showUpdates:i,setDate:t,dates:n,setNewUpdate:f,setShowUpdates:s}),i&&l.a.createElement(c.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(k,{updates:U})))}),(function(e,t){return!0}))}}]);
//# sourceMappingURL=40.39a4794c.chunk.js.map