(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[35],{138:function(e,t,a){e.exports=a.p+"static/media/homeimage.d7e9f081.png"},205:function(e,t,a){"use strict";a.r(t);var n=a(89),c=a(106),i=a(0),o=a.n(i),s=a(116),l=a(138),r=a.n(l);t.default=function(){var e=Object(i.useState)([]),t=Object(n.a)(e,2),a=t[0],l=t[1];Object(i.useEffect)((function(){u()}),[]),Object(i.useEffect)((function(){window.scrollTo(0,0)}),[]);var u=function(){fetch("https://api.covid19india.org/website_data.json").then((function(e){return e.json()})).then((function(e){l(e.faq)})).catch((function(e){console.log(e)}))};return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,null,o.a.createElement("title",null,"About - covid19india.org"),o.a.createElement("meta",{name:"title",content:"Coronavirus Outbreak in India: Latest Map and Case Count"})),o.a.createElement("img",{src:r.a}),o.a.createElement("div",{className:"About"},a.map((function(e,t){return o.a.createElement("div",{key:t,className:"faq fadeInUp",style:{animationDelay:"".concat(.5+.1*t,"s")}},o.a.createElement("h2",{className:"question"},e.question),o.a.createElement("h2",{className:"answer",dangerouslySetInnerHTML:{__html:e.answer}}))}))),o.a.createElement(c.default,null))}}}]);
//# sourceMappingURL=35.2086d916.chunk.js.map