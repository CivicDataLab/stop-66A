(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[21],{118:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(89),i=n(120),o=n(0),a=function(t){var e=Object(o.useState)(null),n=Object(r.a)(e,2),a=n[0],c=n[1];return Object(o.useEffect)((function(){var e=t.current,n=new i.a((function(t,e){t.forEach((function(t,e){c(t.contentRect)}))}));return n.observe(e),function(){n.unobserve(e)}}),[t]),a}},120:function(t,e,n){"use strict";n.d(e,"a",(function(){return _}));var r,i=[],o="ResizeObserver loop completed with undelivered notifications.";!function(t){t.BORDER_BOX="border-box",t.CONTENT_BOX="content-box",t.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(r||(r={}));var a,c=function(){function t(t,e,n,r){return this.x=t,this.y=e,this.width=n,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Object.freeze(this)}return t.prototype.toJSON=function(){var t=this;return{x:t.x,y:t.y,top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width,height:t.height}},t.fromRect=function(e){return new t(e.x,e.y,e.width,e.height)},t}(),s=function(t){return t instanceof SVGElement&&"getBBox"in t},u=function(t){if(s(t)){var e=t.getBBox(),n=e.width,r=e.height;return!n&&!r}var i=t,o=i.offsetWidth,a=i.offsetHeight;return!(o||a||t.getClientRects().length)},l=function(t){var e,n,r=null===(n=null===(e=t)||void 0===e?void 0:e.ownerDocument)||void 0===n?void 0:n.defaultView;return!!(r&&t instanceof r.Element)},f="undefined"!==typeof window?window:{},h=new WeakMap,d=/auto|scroll/,v=/^tb|vertical/,b=/msie|trident/i.test(f.navigator&&f.navigator.userAgent),p=function(t){return parseFloat(t||"0")},g=function(t,e,n){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===n&&(n=!1),Object.freeze({inlineSize:(n?e:t)||0,blockSize:(n?t:e)||0})},m=Object.freeze({devicePixelContentBoxSize:g(),borderBoxSize:g(),contentBoxSize:g(),contentRect:new c(0,0,0,0)}),O=function(t,e){if(void 0===e&&(e=!1),h.has(t)&&!e)return h.get(t);if(u(t))return h.set(t,m),m;var n=getComputedStyle(t),r=s(t)&&t.ownerSVGElement&&t.getBBox(),i=!b&&"border-box"===n.boxSizing,o=v.test(n.writingMode||""),a=!r&&d.test(n.overflowY||""),l=!r&&d.test(n.overflowX||""),f=r?0:p(n.paddingTop),O=r?0:p(n.paddingRight),y=r?0:p(n.paddingBottom),x=r?0:p(n.paddingLeft),E=r?0:p(n.borderTopWidth),w=r?0:p(n.borderRightWidth),j=r?0:p(n.borderBottomWidth),T=x+O,z=f+y,S=(r?0:p(n.borderLeftWidth))+w,k=E+j,B=l?t.offsetHeight-k-t.clientHeight:0,R=a?t.offsetWidth-S-t.clientWidth:0,N=i?T+S:0,C=i?z+k:0,M=r?r.width:p(n.width)-N-R,A=r?r.height:p(n.height)-C-B,D=M+T+R+S,P=A+z+B+k,X=Object.freeze({devicePixelContentBoxSize:g(Math.round(M*devicePixelRatio),Math.round(A*devicePixelRatio),o),borderBoxSize:g(D,P,o),contentBoxSize:g(M,A,o),contentRect:new c(x,f,M,A)});return h.set(t,X),X},y=function(t,e,n){var i=O(t,n),o=i.borderBoxSize,a=i.contentBoxSize,c=i.devicePixelContentBoxSize;switch(e){case r.DEVICE_PIXEL_CONTENT_BOX:return c;case r.BORDER_BOX:return o;default:return a}},x=function(t){var e=O(t);this.target=t,this.contentRect=e.contentRect,this.borderBoxSize=[e.borderBoxSize],this.contentBoxSize=[e.contentBoxSize],this.devicePixelContentBoxSize=[e.devicePixelContentBoxSize]},E=function(t){if(u(t))return 1/0;for(var e=0,n=t.parentNode;n;)e+=1,n=n.parentNode;return e},w=function(){var t=1/0,e=[];i.forEach((function(n){if(0!==n.activeTargets.length){var r=[];n.activeTargets.forEach((function(e){var n=new x(e.target),i=E(e.target);r.push(n),e.lastReportedSize=y(e.target,e.observedBox),i<t&&(t=i)})),e.push((function(){n.callback.call(n.observer,r,n.observer)})),n.activeTargets.splice(0,n.activeTargets.length)}}));for(var n=0,r=e;n<r.length;n++){(0,r[n])()}return t},j=function(t){i.forEach((function(e){e.activeTargets.splice(0,e.activeTargets.length),e.skippedTargets.splice(0,e.skippedTargets.length),e.observationTargets.forEach((function(n){n.isActive()&&(E(n.target)>t?e.activeTargets.push(n):e.skippedTargets.push(n))}))}))},T=function(){var t=0;for(j(t);i.some((function(t){return t.activeTargets.length>0}));)t=w(),j(t);return i.some((function(t){return t.skippedTargets.length>0}))&&function(){var t;"function"===typeof ErrorEvent?t=new ErrorEvent("error",{message:o}):((t=document.createEvent("Event")).initEvent("error",!1,!1),t.message=o),window.dispatchEvent(t)}(),t>0},z=[],S=function(t){if(!a){var e=0,n=document.createTextNode("");new MutationObserver((function(){return z.splice(0).forEach((function(t){return t()}))})).observe(n,{characterData:!0}),a=function(){n.textContent=""+(e?e--:e++)}}z.push(t),a()},k=0,B={attributes:!0,characterData:!0,childList:!0,subtree:!0},R=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],N=function(t){return void 0===t&&(t=0),Date.now()+t},C=!1,M=new(function(){function t(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return t.prototype.run=function(t){var e=this;if(void 0===t&&(t=250),!C){C=!0;var n,r=N(t);n=function(){var n=!1;try{n=T()}finally{if(C=!1,t=r-N(),!k)return;n?e.run(1e3):t>0?e.run(t):e.start()}},S((function(){requestAnimationFrame(n)}))}},t.prototype.schedule=function(){this.stop(),this.run()},t.prototype.observe=function(){var t=this,e=function(){return t.observer&&t.observer.observe(document.body,B)};document.body?e():f.addEventListener("DOMContentLoaded",e)},t.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),R.forEach((function(e){return f.addEventListener(e,t.listener,!0)})))},t.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),R.forEach((function(e){return f.removeEventListener(e,t.listener,!0)})),this.stopped=!0)},t}()),A=function(t){!k&&t>0&&M.start(),!(k+=t)&&M.stop()},D=function(){function t(t,e){this.target=t,this.observedBox=e||r.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return t.prototype.isActive=function(){var t,e=y(this.target,this.observedBox,!0);return t=this.target,s(t)||function(t){switch(t.tagName){case"INPUT":if("image"!==t.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(t)||"inline"!==getComputedStyle(t).display||(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},t}(),P=function(t,e){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=e},X=new WeakMap,F=function(t,e){for(var n=0;n<t.length;n+=1)if(t[n].target===e)return n;return-1},V=function(){function t(){}return t.connect=function(t,e){var n=new P(t,e);X.set(t,n)},t.observe=function(t,e,n){var r=X.get(t),o=0===r.observationTargets.length;F(r.observationTargets,e)<0&&(o&&i.push(r),r.observationTargets.push(new D(e,n&&n.box)),A(1),M.schedule())},t.unobserve=function(t,e){var n=X.get(t),r=F(n.observationTargets,e),o=1===n.observationTargets.length;r>=0&&(o&&i.splice(i.indexOf(n),1),n.observationTargets.splice(r,1),A(-1))},t.disconnect=function(t){var e=this,n=X.get(t);n.observationTargets.slice().forEach((function(n){return e.unobserve(t,n.target)})),n.activeTargets.splice(0,n.activeTargets.length)},t}(),_=function(){function t(t){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!==typeof t)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");V.connect(this,t)}return t.prototype.observe=function(t,e){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!l(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");V.observe(this,t,e)},t.prototype.unobserve=function(t){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!l(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");V.unobserve(this,t)},t.prototype.disconnect=function(){V.disconnect(this)},t.toString=function(){return"function ResizeObserver () { [polyfill code] }"},t}()},126:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(102);function i(t,e){var n;if(void 0===e){var i,o=Object(r.a)(t);try{for(o.s();!(i=o.n()).done;){var a=i.value;null!=a&&(n>a||void 0===n&&a>=a)&&(n=a)}}catch(f){o.e(f)}finally{o.f()}}else{var c,s=-1,u=Object(r.a)(t);try{for(u.s();!(c=u.n()).done;){var l=c.value;null!=(l=e(l,++s,t))&&(n>l||void 0===n&&l>=l)&&(n=l)}}catch(f){u.e(f)}finally{u.f()}}return n}},239:function(t,e,n){"use strict";var r=n(135);e.a=function(t){var e=function(){for(var t,e=r.b;t=e.sourceEvent;)e=t;return e}();return e.changedTouches&&(e=e.changedTouches[0]),function(t,e){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=e.clientX,r.y=e.clientY,[(r=r.matrixTransform(t.getScreenCTM().inverse())).x,r.y]}var i=t.getBoundingClientRect();return[e.clientX-i.left-t.clientLeft,e.clientY-i.top-t.clientTop]}(t,e)}},265:function(t,e,n){"use strict";n.r(e);var r=n(89),i=n(13),o=n(118),a=n(33),c=n(90),s=n.n(c),u=n(199),l=n(126),f=n(200),h=n(121),d=(n(143),n(278)),v=n(145),b=n(239),p=n(253),g=(n(113),n(54)),m=n(71),O=n(93),y=n.n(O),x=n(0),E=n.n(x),w=n(291),j=15,T=35,z=25,S=25;e.default=E.a.memo((function(t){var e=t.timeseries,n=t.dates,c=t.chartType,O=Object(w.a)().t,y=Object(x.useRef)([]),k=Object(x.useRef)(),B=Object(o.a)(k),R=Object(x.useState)(),N=Object(r.a)(R,2),C=N[0],M=N[1];Object(x.useEffect)((function(){M(n[n.length-1])}),[n]);var A=Object(x.useCallback)((function(){var t=n.length,e=(B||k.current.getBoundingClientRect()).width-T-S;return Math.min(4,e/(1.25*t))}),[n.length,B]);Object(x.useEffect)((function(){var t=n.length,r=B||k.current.getBoundingClientRect(),o=r.width,s=r.height,g=o-T,m=s-z,O=A(),x=Object(d.a)().clamp(!0).domain(t?[Object(a.k)(n[0]),Object(a.k)(n[t-1])]:[]).range([S,g]),E=o<480?4:7,w=function(t){return t.attr("class","x-axis").call(Object(h.a)(x).ticks(E).tickFormat((function(t){return Object(a.c)(t,"yyyy")})))},R=function(t,e){t.attr("class","x-axis2").call(Object(h.a)(x).tickValues([]).tickSize(0)).select(".domain").style("transform","translateY(".concat(e(0),"px)")),e(0)!==m?t.select(".domain").attr("opacity",.4):t.select(".domain").attr("opacity",0)},N=function(t,e){return t.attr("class","y-axis").call(Object(h.b)(e).ticks(4,"0~s").tickPadding(4))};function C(){var t=Object(b.a)(this)[0],e=x.invert(t);if(!isNaN(e)){var r=(0,Object(u.a)((function(t){return Object(a.k)(t)})).left)(n,e,1),i=n[r-1],o=n[r];M(e-Object(a.k)(i)<Object(a.k)(o)-e?i:o)}}function D(){M(n[t-1])}y.current.forEach((function(t,r){var o=Object(p.a)(t),s=o.transition().duration(i.a),u=i.w[r],h=Object(v.a)().clamp(!0).domain([1.1*Math.min(0,Object(l.a)(n,(function(t){return Object(a.i)(e[t],c,u)}))),Math.max(1,1.2*Object(f.a)(n,(function(t){return Object(a.i)(e[t],c,u)})))]).nice(4).range([m,j]),d=i.r[u].color;o.select(".x-axis").style("transform","translateY(".concat(m,"px)")).transition(s).call(w),o.select(".x-axis2").transition(s).call(R,h),o.select(".y-axis").style("transform","translateX(".concat(g,"px)")).transition(s).call(N,h),o.selectAll("rect").data(n,(function(t){return t})).join((function(t){return t.append("rect").attr("fill",d).attr("stroke",d).attr("y",(function(t){return h(Object(a.i)(e[t],c,u))})).attr("x",(function(t){return x(Object(a.k)(t))})).attr("width",O/2).attr("height",0)})).transition(s).attr("height",(function(t){return m-h(Object(a.i)(e[t],c,u))})),o.selectAll("line").remove(),o.selectAll("divide").data(["2015"]).join((function(t){return t.append("line").attr("fill",d).attr("stroke",d).style("stroke-dasharray","1,1").attr("y1",0).attr("y2",0).attr("x1",(function(t){return x(Object(a.k)(t))})).attr("x2",(function(t){return x(Object(a.k)(t))}))})).transition(s).attr("y1",0).attr("y2",m).attr("x1",(function(t){return x(Object(a.k)(t))})).attr("x2",(function(t){return x(Object(a.k)(t))})),o.selectAll("*").attr("pointer-events","none"),o.on("mousemove",C).on("touchmove",C).on("mouseout",D).on("touchend",D)}))}),[c,B,A,e,n]),Object(x.useEffect)((function(){var t=A();y.current.forEach((function(e){Object(p.a)(e).selectAll("rect").attr("width",(function(e){return e===C?t:t/2}))}))}),[C,A]);var D=Object(x.useCallback)((function(t){if(C){var n=Object(a.i)(null===e||void 0===e?void 0:e[C],"delta",t);if("total"===c)return n;var r=Object(g.a)(Object(m.a)(Object(a.k)(C),1),{representation:"date"});return n-Object(a.i)(null===e||void 0===e?void 0:e[r],"delta",t)}}),[e,C,c]),P=Object(x.useMemo)((function(){var t=[];return[0,0,0,0,0].map((function(e,n){return t.push({animationDelay:"".concat(250*n,"ms")}),null})),t}),[]);return E.a.createElement(E.a.Fragment,null,E.a.createElement("div",{className:"Timeseries"},i.w.map((function(t,n){D(t,n);var r=i.r[t];return E.a.createElement("div",{key:t,className:s()("svg-parent fadeInUp","is-".concat(t)),ref:k,style:P[n]},C&&E.a.createElement("div",{className:s()("stats","is-".concat(t))},E.a.createElement("h5",{className:"title"},O(Object(a.a)(r.ts_displayName))),E.a.createElement("h5",{className:"title"},Object(a.c)(C,"yyyy")),E.a.createElement("div",{className:"stats-bottom"},E.a.createElement("h2",null,Object(a.e)(Object(a.i)(null===e||void 0===e?void 0:e[C],c,t),"short"!==r.format?r.format:"int",t)))),E.a.createElement("svg",{ref:function(t){y.current[n]=t},preserveAspectRatio:"xMidYMid meet"},E.a.createElement("g",{className:"x-axis"}),E.a.createElement("g",{className:"x-axis2"}),E.a.createElement("g",{className:"y-axis"})))}))))}),(function(t,e){return!!y()(e.chartType,t.chartType)&&(!!y()(e.regionHighlighted.stateCode,t.regionHighlighted.stateCode)&&(!!y()(e.regionHighlighted.districtName,t.regionHighlighted.districtName)&&!!y()(e.dates,t.dates)))}))}}]);
//# sourceMappingURL=21.7c86d819.chunk.js.map