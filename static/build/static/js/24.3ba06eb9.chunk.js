(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[24],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var r,o=[],i="ResizeObserver loop completed with undelivered notifications.";!function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(r||(r={}));var a,c=function(){function e(e,t,n,r){return this.x=e,this.y=t,this.width=n,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Object.freeze(this)}return e.prototype.toJSON=function(){var e=this;return{x:e.x,y:e.y,top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),u=function(e){return e instanceof SVGElement&&"getBBox"in e},s=function(e){if(u(e)){var t=e.getBBox(),n=t.width,r=t.height;return!n&&!r}var o=e,i=o.offsetWidth,a=o.offsetHeight;return!(i||a||e.getClientRects().length)},f=function(e){var t,n,r=null===(n=null===(t=e)||void 0===t?void 0:t.ownerDocument)||void 0===n?void 0:n.defaultView;return!!(r&&e instanceof r.Element)},h="undefined"!==typeof window?window:{},l=new WeakMap,v=/auto|scroll/,p=/^tb|vertical/,d=/msie|trident/i.test(h.navigator&&h.navigator.userAgent),g=function(e){return parseFloat(e||"0")},y=function(e,t,n){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===n&&(n=!1),Object.freeze({inlineSize:(n?t:e)||0,blockSize:(n?e:t)||0})},b=Object.freeze({devicePixelContentBoxSize:y(),borderBoxSize:y(),contentBoxSize:y(),contentRect:new c(0,0,0,0)}),x=function(e,t){if(void 0===t&&(t=!1),l.has(e)&&!t)return l.get(e);if(s(e))return l.set(e,b),b;var n=getComputedStyle(e),r=u(e)&&e.ownerSVGElement&&e.getBBox(),o=!d&&"border-box"===n.boxSizing,i=p.test(n.writingMode||""),a=!r&&v.test(n.overflowY||""),f=!r&&v.test(n.overflowX||""),h=r?0:g(n.paddingTop),x=r?0:g(n.paddingRight),w=r?0:g(n.paddingBottom),O=r?0:g(n.paddingLeft),m=r?0:g(n.borderTopWidth),E=r?0:g(n.borderRightWidth),T=r?0:g(n.borderBottomWidth),S=O+x,z=h+w,B=(r?0:g(n.borderLeftWidth))+E,R=m+T,j=f?e.offsetHeight-R-e.clientHeight:0,C=a?e.offsetWidth-B-e.clientWidth:0,k=o?S+B:0,P=o?z+R:0,M=r?r.width:g(n.width)-k-C,A=r?r.height:g(n.height)-P-j,N=M+S+C+B,L=A+z+j+R,D=Object.freeze({devicePixelContentBoxSize:y(Math.round(M*devicePixelRatio),Math.round(A*devicePixelRatio),i),borderBoxSize:y(N,L,i),contentBoxSize:y(M,A,i),contentRect:new c(O,h,M,A)});return l.set(e,D),D},w=function(e,t,n){var o=x(e,n),i=o.borderBoxSize,a=o.contentBoxSize,c=o.devicePixelContentBoxSize;switch(t){case r.DEVICE_PIXEL_CONTENT_BOX:return c;case r.BORDER_BOX:return i;default:return a}},O=function(e){var t=x(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=[t.borderBoxSize],this.contentBoxSize=[t.contentBoxSize],this.devicePixelContentBoxSize=[t.devicePixelContentBoxSize]},m=function(e){if(s(e))return 1/0;for(var t=0,n=e.parentNode;n;)t+=1,n=n.parentNode;return t},E=function(){var e=1/0,t=[];o.forEach((function(n){if(0!==n.activeTargets.length){var r=[];n.activeTargets.forEach((function(t){var n=new O(t.target),o=m(t.target);r.push(n),t.lastReportedSize=w(t.target,t.observedBox),o<e&&(e=o)})),t.push((function(){n.callback.call(n.observer,r,n.observer)})),n.activeTargets.splice(0,n.activeTargets.length)}}));for(var n=0,r=t;n<r.length;n++){(0,r[n])()}return e},T=function(e){o.forEach((function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach((function(n){n.isActive()&&(m(n.target)>e?t.activeTargets.push(n):t.skippedTargets.push(n))}))}))},S=function(){var e=0;for(T(e);o.some((function(e){return e.activeTargets.length>0}));)e=E(),T(e);return o.some((function(e){return e.skippedTargets.length>0}))&&function(){var e;"function"===typeof ErrorEvent?e=new ErrorEvent("error",{message:i}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=i),window.dispatchEvent(e)}(),e>0},z=[],B=function(e){if(!a){var t=0,n=document.createTextNode("");new MutationObserver((function(){return z.splice(0).forEach((function(e){return e()}))})).observe(n,{characterData:!0}),a=function(){n.textContent=""+(t?t--:t++)}}z.push(e),a()},R=0,j={attributes:!0,characterData:!0,childList:!0,subtree:!0},C=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],k=function(e){return void 0===e&&(e=0),Date.now()+e},P=!1,M=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(void 0===e&&(e=250),!P){P=!0;var n,r=k(e);n=function(){var n=!1;try{n=S()}finally{if(P=!1,e=r-k(),!R)return;n?t.run(1e3):e>0?t.run(e):t.start()}},B((function(){requestAnimationFrame(n)}))}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,j)};document.body?t():h.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),C.forEach((function(t){return h.addEventListener(t,e.listener,!0)})))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),C.forEach((function(t){return h.removeEventListener(t,e.listener,!0)})),this.stopped=!0)},e}()),A=function(e){!R&&e>0&&M.start(),!(R+=e)&&M.stop()},N=function(){function e(e,t){this.target=e,this.observedBox=t||r.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e,t=w(this.target,this.observedBox,!0);return e=this.target,u(e)||function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),L=function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t},D=new WeakMap,F=function(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return-1},V=function(){function e(){}return e.connect=function(e,t){var n=new L(e,t);D.set(e,n)},e.observe=function(e,t,n){var r=D.get(e),i=0===r.observationTargets.length;F(r.observationTargets,t)<0&&(i&&o.push(r),r.observationTargets.push(new N(t,n&&n.box)),A(1),M.schedule())},e.unobserve=function(e,t){var n=D.get(e),r=F(n.observationTargets,t),i=1===n.observationTargets.length;r>=0&&(i&&o.splice(o.indexOf(n),1),n.observationTargets.splice(r,1),A(-1))},e.disconnect=function(e){var t=this,n=D.get(e);n.observationTargets.slice().forEach((function(n){return t.unobserve(e,n.target)})),n.activeTargets.splice(0,n.activeTargets.length)},e}(),_=function(){function e(e){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!==typeof e)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");V.connect(this,e)}return e.prototype.observe=function(e,t){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!f(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");V.observe(this,e,t)},e.prototype.unobserve=function(e){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!f(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");V.unobserve(this,e)},e.prototype.disconnect=function(){V.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}()},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(102);function o(e,t){var n;if(void 0===t){var o,i=Object(r.a)(e);try{for(i.s();!(o=i.n()).done;){var a=o.value;null!=a&&(n>a||void 0===n&&a>=a)&&(n=a)}}catch(h){i.e(h)}finally{i.f()}}else{var c,u=-1,s=Object(r.a)(e);try{for(s.s();!(c=s.n()).done;){var f=c.value;null!=(f=t(f,++u,e))&&(n>f||void 0===n&&f>=f)&&(n=f)}}catch(h){s.e(h)}finally{s.f()}}return n}},128:function(e,t,n){!function(e){"use strict";function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e,t){var n=[],r=[];return e.length&&function e(t,o){if(1===t.length)n.push(t[0]),r.push(t[0]);else{for(var i=Array(t.length-1),a=0;a<i.length;a++)0===a&&n.push(t[0]),a===i.length-1&&r.push(t[a+1]),i[a]=[(1-o)*t[a][0]+o*t[a+1][0],(1-o)*t[a][1]+o*t[a+1][1]];e(i,o)}}(e,t),{left:n,right:r.reverse()}}function i(e){var t={};return 4===e.length&&(t.x2=e[2][0],t.y2=e[2][1]),e.length>=3&&(t.x1=e[1][0],t.y1=e[1][1]),t.x=e[e.length-1][0],t.y=e[e.length-1][1],4===e.length?t.type="C":3===e.length?t.type="Q":t.type="L",t}function a(e,t,n){var r=[[e.x,e.y]];return null!=t.x1&&r.push([t.x1,t.y1]),null!=t.x2&&r.push([t.x2,t.y2]),r.push([t.x,t.y]),function(e,t){for(var n=[],r=e,i=1/(t=t||2),a=0;a<t-1;a++){var c=o(r,i/(1-i*a));n.push(c.left),r=c.right}return n.push(r),n}(r,n).map(i)}var c=/[MLCSTQAHVmlcstqahv]|-?[\d.e+-]+/g,u={M:["x","y"],L:["x","y"],H:["x"],V:["y"],C:["x1","y1","x2","y2","x","y"],S:["x2","y2","x","y"],Q:["x1","y1","x","y"],T:["x","y"],A:["rx","ry","xAxisRotation","largeArcFlag","sweepFlag","x","y"]};function s(e,t){for(var n=Array(e),r=0;r<e;r++)n[r]=t;return n}function f(e){return"".concat(e.type).concat(u[e.type].map((function(t){return e[t]})).join(","))}function h(e,t,r){var o=e.length-1,i=t.length-1,c=o/i,u=s(i).reduce((function(t,n,o){var i=Math.floor(c*o);if(r&&i<e.length-1&&r(e[i],e[i+1])){var a=c*o%1<.5;t[i]&&(a?i>0?i-=1:i<e.length-1&&(i+=1):i<e.length-1?i+=1:i>0&&(i-=1))}return t[i]=(t[i]||0)+1,t}),[]).reduce((function(t,r,o){if(o===e.length-1){var i=s(r,n({},e[e.length-1]));return"M"===i[0].type&&i.forEach((function(e){e.type="L"})),t.concat(i)}return t.concat(function(e,t,r){var o=[];if("L"===t.type||"Q"===t.type||"C"===t.type)o=o.concat(a(e,t,r));else{var i=n({},e);"M"===i.type&&(i.type="L"),(o=o.concat(s(r-1).map((function(){return i})))).push(t)}return o}(e[o],e[o+1],r))}),[]);return u.unshift(e[0]),u}function l(e){for(var t,n,r=(e||"").match(c)||[],o=[],i=0;i<r.length;++i)if(t=u[r[i]]){n={type:r[i]};for(var a=0;a<t.length;++a)n[t[a]]=+r[i+a+1];i+=t.length,o.push(n)}return o}Object.keys(u).forEach((function(e){u[e.toLowerCase()]=u[e]})),e.interpolatePath=function(e,n,o){var i=l(e),a=l(n);if(!i.length&&!a.length)return function(){return""};i.length?a.length||a.push(i[0]):i.push(a[0]),0!==Math.abs(a.length-i.length)&&(a.length>i.length?i=h(i,a,o):a.length<i.length&&(a=h(a,i,o)));var c=(i=i.map((function(e,t){return function(e,t){var n={x1:"x",y1:"y",x2:"x",y2:"y"},r=["xAxisRotation","largeArcFlag","sweepFlag"];if(e.type!==t.type&&"M"!==t.type.toUpperCase()){var o={};Object.keys(t).forEach((function(i){var a=t[i],c=e[i];void 0===c&&(r.includes(i)?c=a:(void 0===c&&n[i]&&(c=e[n[i]]),void 0===c&&(c=0))),o[i]=c})),o.type=t.type,e=o}return e}(e,a[t])}))).map((function(e){return function(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},e)})),s=(null==e||"Z"===e[e.length-1])&&(null==n||"Z"===n[n.length-1]);return function(e){if(1===e)return null==n?"":n;if(e>0)for(var t=0;t<c.length;++t){var r=i[t],o=a[t],h=c[t],l=!0,v=!1,p=void 0;try{for(var d,g=u[h.type][Symbol.iterator]();!(l=(d=g.next()).done);l=!0){var y=d.value;h[y]=(1-e)*r[y]+e*o[y],"largeArcFlag"!==y&&"sweepFlag"!==y||(h[y]=Math.round(h[y]))}}catch(T){v=!0,p=T}finally{try{l||null==g.return||g.return()}finally{if(v)throw p}}}var b="",x=!0,w=!1,O=void 0;try{for(var m,E=c[Symbol.iterator]();!(x=(m=E.next()).done);x=!0)b+=f(m.value)}catch(T){w=!0,O=T}finally{try{x||null==E.return||E.return()}finally{if(w)throw O}}return s&&(b+="Z"),b}},Object.defineProperty(e,"__esModule",{value:!0})}(t)},180:function(e,t,n){"use strict";var r=n(131);t.a=function(e){var t=function(){for(var e,t=r.b;e=t.sourceEvent;)t=e;return t}();return t.changedTouches&&(t=t.changedTouches[0]),function(e,t){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=t.clientX,r.y=t.clientY,[(r=r.matrixTransform(e.getScreenCTM().inverse())).x,r.y]}var o=e.getBoundingClientRect();return[t.clientX-o.left-e.clientLeft,t.clientY-o.top-e.clientTop]}(e,t)}},274:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(89),o=n(262),i=n(139),a=n(103);function c(){var e,t=0,n=1,u=1,s=[.5],f=[0,1];function h(t){return t<=t?f[Object(o.a)(s,t,0,u)]:e}function l(){var e=-1;for(s=new Array(u);++e<u;)s[e]=((e+1)*n-(e-u)*t)/(u+1);return h}return h.domain=function(e){var o,i;return arguments.length?(o=e,i=Object(r.a)(o,2),t=i[0],n=i[1],t=+t,n=+n,l()):[t,n]},h.range=function(e){return arguments.length?(u=(f=Array.from(e)).length-1,l()):f.slice()},h.invertExtent=function(e){var r=f.indexOf(e);return r<0?[NaN,NaN]:r<1?[t,s[0]]:r>=u?[s[u-1],n]:[s[r-1],s[r]]},h.unknown=function(t){return arguments.length?(e=t,h):h},h.thresholds=function(){return s.slice()},h.copy=function(){return c().domain([t,n]).range(f).unknown(e)},a.b.apply(Object(i.b)(h),arguments)}}}]);
//# sourceMappingURL=24.3ba06eb9.chunk.js.map