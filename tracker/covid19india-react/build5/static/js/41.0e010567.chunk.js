(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[41],{245:function(e,t,r){"use strict";r.r(t);var a=r(140),n=r(89),i=r(0),c=r.n(i),l=r(98),o=function(){var e=window.innerWidth,t=e>769?480:e;return c.a.createElement(l.a,{viewBox:"0 0 ".concat(t," ").concat(800),height:800,width:t,speed:2},c.a.createElement("circle",{cx:.4*t,cy:400,r:"5"}),c.a.createElement("circle",{cx:.5*t,cy:400,r:"5"}),c.a.createElement("circle",{cx:.6*t,cy:400,r:"5"}))},s=r(13),d=r(119),u=r(33),m=r(93),b=r(90),f=r.n(b),O=r(54),p=r(123),h=r(92),g=r.n(h),j=r(300),y=r(265),v=r(264),E=Object(i.lazy)((function(){return Promise.all([r.e(0),r.e(25),r.e(40)]).then(r.bind(null,270))})),C=Object(i.lazy)((function(){return Promise.all([r.e(0),r.e(23)]).then(r.bind(null,271))})),N=Object(i.lazy)((function(){return r.e(18).then(r.bind(null,272))})),k=Object(i.lazy)((function(){return Promise.all([r.e(24),r.e(42)]).then(r.bind(null,273))}));t.default=c.a.memo((function(e){var t=e.stateCode,r=e.timeseries,l=e.pendency,b=e.date,h=e.regionHighlighted,g=e.setRegionHighlighted,x=e.anchor,w=e.setAnchor,T=e.expandTable,S=Object(j.a)().t,H=Object(y.a)("timeseriesLookback",s.w.BEGINNING),P=Object(n.a)(H,2),M=P[0],R=(P[1],Object(v.a)("chartType","total")),J=Object(n.a)(R,2),z=J[0],I=(J[1],Object(i.useRef)()),U=Object(d.a)(I,{once:!0}),B=Object(i.useMemo)((function(){var e;return(null===r||void 0===r||null===(e=r[h.stateCode])||void 0===e?void 0:e.districts)?{stateCode:h.stateCode,districtName:h.districtName}:{stateCode:h.stateCode,districtName:null}}),[r,h.stateCode,h.districtName]),G=Object(i.useMemo)((function(){var e,t,a,n;return B.districtName?null===r||void 0===r||null===(e=r[B.stateCode])||void 0===e||null===(t=e.districts)||void 0===t||null===(a=t[B.districtName])||void 0===a?void 0:a.dates:null===r||void 0===r||null===(n=r[B.stateCode])||void 0===n?void 0:n.dates}),[r,B.stateCode,B.districtName]),K=Object(i.useMemo)((function(){var e,t,r,a;return B.districtName?null===l||void 0===l||null===(e=l[B.stateCode])||void 0===e||null===(t=e.districts)||void 0===t||null===(r=t[B.districtName])||void 0===r?void 0:r.pendency:null===l||void 0===l||null===(a=l[B.stateCode])||void 0===a?void 0:a.pendency}),[l,B.stateCode,B.districtName]),W=Object(i.useMemo)((function(){var e=Object.keys(r||{}).filter((function(e){return e!==t})).sort((function(e,t){return s.r[e].localeCompare(s.r[t])})).map((function(e){return{stateCode:e,districtName:null}})),n=Object.keys(r||{}).reduce((function(e,t){var n;return[].concat(Object(a.a)(e),Object(a.a)(Object.keys((null===r||void 0===r||null===(n=r[t])||void 0===n?void 0:n.districts)||{}).reduce((function(e,r){return[].concat(Object(a.a)(e),[{stateCode:t,districtName:r}])}),[])))}),[]);return[{stateCode:t,districtName:null}].concat(Object(a.a)(e),Object(a.a)(n))}),[r,t]),q=Object(i.useMemo)((function(){return W.find((function(e){return e.stateCode===h.stateCode&&e.districtName===h.districtName}))?W:[].concat(Object(a.a)(W),[{stateCode:h.stateCode,districtName:h.districtName}])}),[h.stateCode,h.districtName,W]),L=Object(i.useMemo)((function(){var e=b||Object(u.h)(),t=Object.keys(G||{}).filter((function(t){return t<=e}));if(M===s.w.TWO_WEEKS){var r=Object(O.a)(Object(p.a)(Object(u.k)(e),{weeks:2}),{representation:"date"});return t.filter((function(e){return e>=r}))}if(M===s.w.MONTH){var a=Object(O.a)(Object(p.a)(Object(u.k)(e),{months:1}),{representation:"date"});return t.filter((function(e){return e>=a}))}return t}),[G,b,M]),_=Object(i.useMemo)((function(){b||Object(u.h)();return Object.keys(K||{})}),[K,b,M]),A=Object(i.useCallback)((function(e){var t=e.target;g(JSON.parse(t.value))}),[g]),X=Object(i.useCallback)((function(){g({stateCode:t,districtName:null})}),[t,g]),D=Object(i.useState)("line"),F=Object(n.a)(D,2);return F[0],F[1],c.a.createElement("div",{className:f()("TimeseriesExplorer fadeInUp",{stickied:"timeseries"===x},{expanded:T}),style:{display:"mapexplorer"===x?"none":""},ref:I},c.a.createElement("div",{className:"timeseries-header"},c.a.createElement("div",{className:f()("anchor",{stickied:"timeseries"===x}),onClick:w&&w.bind(this,"timeseries"===x?null:"timeseries")}),c.a.createElement("h1",null,S("Cases Trends")),q&&c.a.createElement("div",{className:"state-selection"},c.a.createElement("div",{className:"dropdown"},c.a.createElement("select",{value:JSON.stringify(B),onChange:A},q.filter((function(e){return s.r[e.stateCode]!==e.districtName})).map((function(e){return c.a.createElement("option",{value:JSON.stringify(e),key:"".concat(e.stateCode,"-").concat(e.districtName)},e.districtName?S(e.districtName):S(s.r[e.stateCode]))})))),c.a.createElement("div",{className:"reset-icon",onClick:X},c.a.createElement(m.g,null)))),U&&c.a.createElement(i.Suspense,{fallback:c.a.createElement(o,null)},c.a.createElement(E,Object.assign({timeseries:G,regionHighlighted:B},{dates:L,chartType:z}))),c.a.createElement(i.Suspense,{fallback:c.a.createElement(o,null)},c.a.createElement(C,Object.assign({timeseries:G,regionHighlighted:B},{dates:L,chartType:z}))),!U&&c.a.createElement("div",{style:{height:"50rem"}}),c.a.createElement(i.Suspense,{fallback:c.a.createElement(o,null)},c.a.createElement(k,Object.assign({timeseries:K,regionHighlighted:B},{pendency_years:_,chartType:z}))),G&&c.a.createElement(i.Suspense,{fallback:c.a.createElement("div",null)},c.a.createElement(N,Object.assign({timeseries:G,regionHighlighted:B},{dates:L,chartType:z}))))}),(function(e,t){return!t.forceRender&&(!(t.timeseries||!e.timeseries)||!(t.timeseries&&!e.timeseries)&&(!!g()(t.regionHighlighted.stateCode,e.regionHighlighted.stateCode)&&(!!g()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&(!!g()(t.date,e.date)&&(!!g()(t.anchor,e.anchor)&&!!g()(t.expandTable,e.expandTable))))))}))},98:function(e,t,r){"use strict";var a=r(0),n=function(){return(n=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};var i=function(e){var t=e.animate,r=e.backgroundColor,i=e.backgroundOpacity,c=e.baseUrl,l=e.children,o=e.foregroundColor,s=e.foregroundOpacity,d=e.gradientRatio,u=e.uniqueKey,m=e.interval,b=e.rtl,f=e.speed,O=e.style,p=e.title,h=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),g=u||Math.random().toString(36).substring(6),j=g+"-diff",y=g+"-animated-diff",v=g+"-aria",E=b?{transform:"scaleX(-1)"}:null,C="0; "+m+"; 1",N=f+"s";return Object(a.createElement)("svg",n({"aria-labelledby":v,role:"img",style:n(n({},O),E)},h),p?Object(a.createElement)("title",{id:v},p):null,Object(a.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+c+"#"+j+")",style:{fill:"url("+c+"#"+y+")"}}),Object(a.createElement)("defs",{role:"presentation"},Object(a.createElement)("clipPath",{id:j},l),Object(a.createElement)("linearGradient",{id:y},Object(a.createElement)("stop",{offset:"0%",stopColor:r,stopOpacity:i},t&&Object(a.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:C,dur:N,repeatCount:"indefinite"})),Object(a.createElement)("stop",{offset:"50%",stopColor:o,stopOpacity:s},t&&Object(a.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:C,dur:N,repeatCount:"indefinite"})),Object(a.createElement)("stop",{offset:"100%",stopColor:r,stopOpacity:i},t&&Object(a.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:C,dur:N,repeatCount:"indefinite"})))))};i.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var c=function(e){return e.children?Object(a.createElement)(i,n({},e)):Object(a.createElement)(l,n({},e))},l=function(e){return Object(a.createElement)(c,n({viewBox:"0 0 476 124"},e),Object(a.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(a.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(a.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(a.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(a.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(a.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=c}}]);
//# sourceMappingURL=41.0e010567.chunk.js.map