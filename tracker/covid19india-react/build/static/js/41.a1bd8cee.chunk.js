(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[41],{131:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(21),c=a.n(l);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,l=e.size,c=void 0===l?24:l,i=s(e,["color","size"]);return r.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),r.a.createElement("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),r.a.createElement("polygon",{points:"22 2 15 22 11 13 2 9 22 2"}))}));i.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},i.displayName="Send",t.a=i},278:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(33),l=a(73),c=a(72),o=a(0),s=a.n(o),i=a(131),u=new Date,p=u;t.default=function(e){var t=e.updates;return Object(o.useLayoutEffect)((function(){p=u})),s.a.createElement("div",{className:"updates"},s.a.createElement("div",{className:"updates-header"},s.a.createElement("h2",null,Object(l.a)(p,"d MMM"))),t.slice(-n.A).reverse().map((function(e,t){e.update=e.update.replace(/\n/g,"<br/>");var a=new Date(1e3*e.timestamp);return s.a.createElement(s.a.Fragment,{key:t},a.getDate()!==p.getDate()?(p=a,s.a.createElement(s.a.Fragment,null,0===t?s.a.createElement("div",{className:"update"},s.a.createElement("h4",null,"No updates yet!")):"",s.a.createElement("div",{className:"updates-header"},s.a.createElement("h2",null,Object(l.a)(a,"d MMM"))))):" ",s.a.createElement("div",{key:t,className:"update"},s.a.createElement("h5",null,Object(r.a)(Object(c.a)(new Date(1e3*e.timestamp),new Date))+" ago"),s.a.createElement("h4",{dangerouslySetInnerHTML:{__html:e.update}})))})),s.a.createElement("div",{className:"updates-footer"},s.a.createElement("a",{href:"https://t.me/covid19indiaorg_updates",target:"_blank",className:"telegram",rel:"noopener noreferrer"},s.a.createElement("h4",null,s.a.createElement(i.a,null),"Join Instant Updates channel"))))}}}]);
//# sourceMappingURL=41.a1bd8cee.chunk.js.map