(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[16],{110:function(e,t,a){"use strict";var n=a(19),i=a(98),r=a(12),c=a(31),s=a(85),o=a(81),l=a.n(o),d=a(83),u=a.n(d),m=a(88),g=a(0),b=a.n(g),h=a(258),v=a(179);t.a=b.a.memo((function(e){var t=e.handleSort,a=e.sortData,o=e.setSortData,d=e.statistic,u=Object(h.a)().t,g=Object(v.a)((function(){a.sortColumn===d&&o(Object(m.a)(a,(function(e){e.delta=!a.delta})))}),{isPreventDefault:!1});return b.a.createElement("div",Object.assign({className:"cell heading",onClick:t.bind(this,d)},g),a.sortColumn===d&&b.a.createElement("div",{className:l()("sort-icon",Object(n.a)({invert:a.isAscending},"is-".concat(d),a.delta))},b.a.createElement(s.c,{size:10})),b.a.createElement("div",null,u(Object(c.l)(r.s[d].displayName))),"other"===d&&b.a.createElement(i.a,{data:"Migrated cases or non-COVID deaths"},b.a.createElement(s.f,{size:14})))}),(function(e,t){return!!u()(e.sortData,t.sortData)}))},121:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(92);t.a=function(){var e=window.innerWidth,t=e>769?448:e;return i.a.createElement("div",{className:"TableLoader"},i.a.createElement(r.a,{viewBox:"0 0 ".concat(t," ").concat(135),height:135,width:t,speed:2,animate:!1},i.a.createElement("rect",{x:"0",y:"0",rx:"3",ry:"3",width:t,height:"40"}),i.a.createElement("rect",{x:"0",y:"45",rx:"3",ry:"3",width:t,height:"40"}),i.a.createElement("rect",{x:"0",y:"90",rx:"3",ry:"3",width:t,height:"40"})))}},122:function(e,t,a){"use strict";a(80),a(12),a(85),a(81),a(0)},123:function(e,t,a){var n=a(124),i=["getDistricts"];e.exports=function(){var e=new Worker(a.p+"2607bfc30afc84ea4e21.worker.js",{name:"[hash].worker.js"});return n(e,i),e}},228:function(e,t,a){"use strict";a.r(t);var n=a(80),i=a(110),r=(a(121),a(122),a(97)),c=a(12),s=a(31),o=a(85),l=a(81),d=a.n(l),u=a(83),m=a.n(u),g=a(88),b=a(0),h=a.n(b),v=a(258),f=a(84),j=a(219),O=a(123),p=a.n(O),E=Object(b.lazy)((function(){return a.e(6).then(a.bind(null,151))}));t.default=h.a.memo((function(e){var t=this,a=(e.stateCode,e.data),l=e.regionHighlighted,u=e.setRegionHighlighted,m=e.expandTable,O=(e.setExpandTable,Object(v.a)().t),C=Object(j.a)("sortData",{sortColumn:"confirmed",isAscending:!1,delta:!1}),y=Object(n.a)(C,2),N=y[0],x=y[1],k=Object(b.useCallback)((function(e){N.sortColumn!==e?x(Object(g.a)(N,(function(t){t.sortColumn=e}))):x(Object(g.a)(N,(function(e){e.isAscending=!N.isAscending})))}),[N,x]),w=(Object(f.e)(3,{from:{transform:"translate3d(0, 10px, 0)",opacity:0},to:{transform:"translate3d(0, 0px, 0)",opacity:1},config:f.b.wobbly}),Object(b.useState)()),D=Object(n.a)(w,2),S=D[0],T=D[1],H=Object(b.useState)("States"),A=Object(n.a)(H,2),z=A[0],P=A[1],R=Object(b.useState)(!1),M=Object(n.a)(R,2),I=M[0],J=(M[1],Object(b.useState)(!1)),L=Object(n.a)(J,2),U=L[0],W=(L[1],Object(b.useCallback)((function(e,t){if("regionName"!==N.sortColumn){var n=Object(s.i)((null===S||void 0===S?void 0:S[e])||a[e],N.delta?"delta":"total",N.sortColumn,I),i=Object(s.i)((null===S||void 0===S?void 0:S[t])||a[t],N.delta?"delta":"total",N.sortColumn,I);return N.isAscending?n-i:i-n}var r,o,l=(null===S||void 0===S||null===(r=S[e])||void 0===r?void 0:r.districtName)||c.r[e],d=(null===S||void 0===S||null===(o=S[t])||void 0===o?void 0:o.districtName)||c.r[t];return N.isAscending?l.localeCompare(d):d.localeCompare(l)}),[S,I,N.delta,N.isAscending,N.sortColumn,a]));Object(b.useCallback)((function(){P((function(e){return"States"===e?"Districts":"States"}))}),[]),Object(b.useEffect)((function(){var e=p()();e.getDistricts(a),e.addEventListener("message",(function(t){"RPC"!==t.data.type&&(T(t.data),e.terminate())}))}),[z,a]),Object(f.f)(U,null,{from:r.h,enter:r.g,leave:r.h});var B=m?c.v:c.u;return h.a.createElement(h.a.Fragment,null,h.a.createElement("div",{className:"table-container"},h.a.createElement("div",{className:"table fadeInUp",style:{gridTemplateColumns:"repeat(".concat(B.length+1,", auto)")}},h.a.createElement("div",{className:"row heading"},h.a.createElement("div",{className:"cell heading",onClick:k.bind(this,"regionName")},h.a.createElement("div",null,O("States"===z?"State/UT":"District")),"regionName"===N.sortColumn&&h.a.createElement("div",{className:d()("sort-icon",{invert:N.isAscending})},h.a.createElement(o.c,{size:10}))),B.map((function(e){return h.a.createElement(i.a,Object.assign({key:e},{statistic:e,sortData:N,setSortData:x},{handleSort:k.bind(t,e)}))}))),"States"===z&&Object.keys(a).filter((function(e){return"TT"!==e&&!(e===c.z&&I)})).sort((function(e,t){return W(e,t)})).map((function(e){return h.a.createElement(E,Object.assign({key:e,data:a[e]},{stateCode:e,isPerMillion:I,regionHighlighted:l,setRegionHighlighted:u,expandTable:m}))})),"Districts"===z&&S&&Object.keys(S).sort((function(e,t){return W(e,t)})).slice(0,c.c).map((function(e){return h.a.createElement(E,Object.assign({key:e,data:S[e],districtName:S[e].districtName},{isPerMillion:I,regionHighlighted:l,setRegionHighlighted:u,expandTable:m}))})))))}),(function(e,t){var a,n,i,r;return!!m()(null===(a=e.regionHighlighted)||void 0===a?void 0:a.districtName,null===(n=t.regionHighlighted)||void 0===n?void 0:n.districtName)&&(!!m()(null===(i=e.regionHighlighted)||void 0===i?void 0:i.stateCode,null===(r=t.regionHighlighted)||void 0===r?void 0:r.stateCode)&&!!m()(e.expandTable,t.expandTable))}))}}]);
//# sourceMappingURL=16.881f617a.chunk.js.map