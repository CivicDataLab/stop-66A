(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[22],{120:function(t,e,n){"use strict";n.d(e,"a",(function(){return V}));var i,o=[],r="ResizeObserver loop completed with undelivered notifications.";!function(t){t.BORDER_BOX="border-box",t.CONTENT_BOX="content-box",t.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(i||(i={}));var s,c=function(){function t(t,e,n,i){return this.x=t,this.y=e,this.width=n,this.height=i,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Object.freeze(this)}return t.prototype.toJSON=function(){var t=this;return{x:t.x,y:t.y,top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width,height:t.height}},t.fromRect=function(e){return new t(e.x,e.y,e.width,e.height)},t}(),a=function(t){return t instanceof SVGElement&&"getBBox"in t},h=function(t){if(a(t)){var e=t.getBBox(),n=e.width,i=e.height;return!n&&!i}var o=t,r=o.offsetWidth,s=o.offsetHeight;return!(r||s||t.getClientRects().length)},u=function(t){var e,n,i=null===(n=null===(e=t)||void 0===e?void 0:e.ownerDocument)||void 0===n?void 0:n.defaultView;return!!(i&&t instanceof i.Element)},f="undefined"!==typeof window?window:{},l=new WeakMap,v=/auto|scroll/,d=/^tb|vertical/,p=/msie|trident/i.test(f.navigator&&f.navigator.userAgent),_=function(t){return parseFloat(t||"0")},b=function(t,e,n){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===n&&(n=!1),Object.freeze({inlineSize:(n?e:t)||0,blockSize:(n?t:e)||0})},g=Object.freeze({devicePixelContentBoxSize:b(),borderBoxSize:b(),contentBoxSize:b(),contentRect:new c(0,0,0,0)}),x=function(t,e){if(void 0===e&&(e=!1),l.has(t)&&!e)return l.get(t);if(h(t))return l.set(t,g),g;var n=getComputedStyle(t),i=a(t)&&t.ownerSVGElement&&t.getBBox(),o=!p&&"border-box"===n.boxSizing,r=d.test(n.writingMode||""),s=!i&&v.test(n.overflowY||""),u=!i&&v.test(n.overflowX||""),f=i?0:_(n.paddingTop),x=i?0:_(n.paddingRight),y=i?0:_(n.paddingBottom),T=i?0:_(n.paddingLeft),w=i?0:_(n.borderTopWidth),E=i?0:_(n.borderRightWidth),m=i?0:_(n.borderBottomWidth),z=T+x,S=f+y,B=(i?0:_(n.borderLeftWidth))+E,O=w+m,M=u?t.offsetHeight-O-t.clientHeight:0,R=s?t.offsetWidth-B-t.clientWidth:0,C=o?z+B:0,k=o?S+O:0,N=i?i.width:_(n.width)-C-R,P=i?i.height:_(n.height)-k-M,L=N+z+R+B,A=P+S+M+O,D=Object.freeze({devicePixelContentBoxSize:b(Math.round(N*devicePixelRatio),Math.round(P*devicePixelRatio),r),borderBoxSize:b(L,A,r),contentBoxSize:b(N,P,r),contentRect:new c(T,f,N,P)});return l.set(t,D),D},y=function(t,e,n){var o=x(t,n),r=o.borderBoxSize,s=o.contentBoxSize,c=o.devicePixelContentBoxSize;switch(e){case i.DEVICE_PIXEL_CONTENT_BOX:return c;case i.BORDER_BOX:return r;default:return s}},T=function(t){var e=x(t);this.target=t,this.contentRect=e.contentRect,this.borderBoxSize=[e.borderBoxSize],this.contentBoxSize=[e.contentBoxSize],this.devicePixelContentBoxSize=[e.devicePixelContentBoxSize]},w=function(t){if(h(t))return 1/0;for(var e=0,n=t.parentNode;n;)e+=1,n=n.parentNode;return e},E=function(){var t=1/0,e=[];o.forEach((function(n){if(0!==n.activeTargets.length){var i=[];n.activeTargets.forEach((function(e){var n=new T(e.target),o=w(e.target);i.push(n),e.lastReportedSize=y(e.target,e.observedBox),o<t&&(t=o)})),e.push((function(){n.callback.call(n.observer,i,n.observer)})),n.activeTargets.splice(0,n.activeTargets.length)}}));for(var n=0,i=e;n<i.length;n++){(0,i[n])()}return t},m=function(t){o.forEach((function(e){e.activeTargets.splice(0,e.activeTargets.length),e.skippedTargets.splice(0,e.skippedTargets.length),e.observationTargets.forEach((function(n){n.isActive()&&(w(n.target)>t?e.activeTargets.push(n):e.skippedTargets.push(n))}))}))},z=function(){var t=0;for(m(t);o.some((function(t){return t.activeTargets.length>0}));)t=E(),m(t);return o.some((function(t){return t.skippedTargets.length>0}))&&function(){var t;"function"===typeof ErrorEvent?t=new ErrorEvent("error",{message:r}):((t=document.createEvent("Event")).initEvent("error",!1,!1),t.message=r),window.dispatchEvent(t)}(),t>0},S=[],B=function(t){if(!s){var e=0,n=document.createTextNode("");new MutationObserver((function(){return S.splice(0).forEach((function(t){return t()}))})).observe(n,{characterData:!0}),s=function(){n.textContent=""+(e?e--:e++)}}S.push(t),s()},O=0,M={attributes:!0,characterData:!0,childList:!0,subtree:!0},R=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],C=function(t){return void 0===t&&(t=0),Date.now()+t},k=!1,N=new(function(){function t(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return t.prototype.run=function(t){var e=this;if(void 0===t&&(t=250),!k){k=!0;var n,i=C(t);n=function(){var n=!1;try{n=z()}finally{if(k=!1,t=i-C(),!O)return;n?e.run(1e3):t>0?e.run(t):e.start()}},B((function(){requestAnimationFrame(n)}))}},t.prototype.schedule=function(){this.stop(),this.run()},t.prototype.observe=function(){var t=this,e=function(){return t.observer&&t.observer.observe(document.body,M)};document.body?e():f.addEventListener("DOMContentLoaded",e)},t.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),R.forEach((function(e){return f.addEventListener(e,t.listener,!0)})))},t.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),R.forEach((function(e){return f.removeEventListener(e,t.listener,!0)})),this.stopped=!0)},t}()),P=function(t){!O&&t>0&&N.start(),!(O+=t)&&N.stop()},L=function(){function t(t,e){this.target=t,this.observedBox=e||i.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return t.prototype.isActive=function(){var t,e=y(this.target,this.observedBox,!0);return t=this.target,a(t)||function(t){switch(t.tagName){case"INPUT":if("image"!==t.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(t)||"inline"!==getComputedStyle(t).display||(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},t}(),A=function(t,e){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=e},D=new WeakMap,X=function(t,e){for(var n=0;n<t.length;n+=1)if(t[n].target===e)return n;return-1},I=function(){function t(){}return t.connect=function(t,e){var n=new A(t,e);D.set(t,n)},t.observe=function(t,e,n){var i=D.get(t),r=0===i.observationTargets.length;X(i.observationTargets,e)<0&&(r&&o.push(i),i.observationTargets.push(new L(e,n&&n.box)),P(1),N.schedule())},t.unobserve=function(t,e){var n=D.get(t),i=X(n.observationTargets,e),r=1===n.observationTargets.length;i>=0&&(r&&o.splice(o.indexOf(n),1),n.observationTargets.splice(i,1),P(-1))},t.disconnect=function(t){var e=this,n=D.get(t);n.observationTargets.slice().forEach((function(n){return e.unobserve(t,n.target)})),n.activeTargets.splice(0,n.activeTargets.length)},t}(),V=function(){function t(t){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!==typeof t)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");I.connect(this,t)}return t.prototype.observe=function(t,e){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!u(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");I.observe(this,t,e)},t.prototype.unobserve=function(t){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!u(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");I.unobserve(this,t)},t.prototype.disconnect=function(){I.disconnect(this)},t.toString=function(){return"function ResizeObserver () { [polyfill code] }"},t}()},126:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(102);function o(t,e){var n;if(void 0===e){var o,r=Object(i.a)(t);try{for(r.s();!(o=r.n()).done;){var s=o.value;null!=s&&(n>s||void 0===n&&s>=s)&&(n=s)}}catch(f){r.e(f)}finally{r.f()}}else{var c,a=-1,h=Object(i.a)(t);try{for(h.s();!(c=h.n()).done;){var u=c.value;null!=(u=e(u,++a,t))&&(n>u||void 0===n&&u>=u)&&(n=u)}}catch(f){h.e(f)}finally{h.f()}}return n}},207:function(t,e,n){"use strict";function i(t){return t<0?-1:1}function o(t,e,n){var o=t._x1-t._x0,r=e-t._x1,s=(t._y1-t._y0)/(o||r<0&&-0),c=(n-t._y1)/(r||o<0&&-0),a=(s*r+c*o)/(o+r);return(i(s)+i(c))*Math.min(Math.abs(s),Math.abs(c),.5*Math.abs(a))||0}function r(t,e){var n=t._x1-t._x0;return n?(3*(t._y1-t._y0)/n-e)/2:e}function s(t,e,n){var i=t._x0,o=t._y0,r=t._x1,s=t._y1,c=(r-i)/3;t._context.bezierCurveTo(i+c,o+c*e,r-c,s-c*n,r,s)}function c(t){this._context=t}function a(t){this._context=new h(t)}function h(t){this._context=t}function u(t){return new c(t)}n.d(e,"a",(function(){return u})),c.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:s(this,this._t0,r(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){var n=NaN;if(e=+e,(t=+t)!==this._x1||e!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;break;case 2:this._point=3,s(this,r(this,n=o(this,t,e)),n);break;default:s(this,this._t0,n=o(this,t,e))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e,this._t0=n}}},(a.prototype=Object.create(c.prototype)).point=function(t,e){c.prototype.point.call(this,e,t)},h.prototype={moveTo:function(t,e){this._context.moveTo(e,t)},closePath:function(){this._context.closePath()},lineTo:function(t,e){this._context.lineTo(e,t)},bezierCurveTo:function(t,e,n,i,o,r){this._context.bezierCurveTo(e,t,i,n,r,o)}}},236:function(t,e,n){"use strict";var i=Math.PI,o=2*i,r=o-1e-6;function s(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function c(){return new s}s.prototype=c.prototype={constructor:s,moveTo:function(t,e){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,e){this._+="L"+(this._x1=+t)+","+(this._y1=+e)},quadraticCurveTo:function(t,e,n,i){this._+="Q"+ +t+","+ +e+","+(this._x1=+n)+","+(this._y1=+i)},bezierCurveTo:function(t,e,n,i,o,r){this._+="C"+ +t+","+ +e+","+ +n+","+ +i+","+(this._x1=+o)+","+(this._y1=+r)},arcTo:function(t,e,n,o,r){t=+t,e=+e,n=+n,o=+o,r=+r;var s=this._x1,c=this._y1,a=n-t,h=o-e,u=s-t,f=c-e,l=u*u+f*f;if(r<0)throw new Error("negative radius: "+r);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=e);else if(l>1e-6)if(Math.abs(f*a-h*u)>1e-6&&r){var v=n-s,d=o-c,p=a*a+h*h,_=v*v+d*d,b=Math.sqrt(p),g=Math.sqrt(l),x=r*Math.tan((i-Math.acos((p+l-_)/(2*b*g)))/2),y=x/g,T=x/b;Math.abs(y-1)>1e-6&&(this._+="L"+(t+y*u)+","+(e+y*f)),this._+="A"+r+","+r+",0,0,"+ +(f*v>u*d)+","+(this._x1=t+T*a)+","+(this._y1=e+T*h)}else this._+="L"+(this._x1=t)+","+(this._y1=e);else;},arc:function(t,e,n,s,c,a){t=+t,e=+e,a=!!a;var h=(n=+n)*Math.cos(s),u=n*Math.sin(s),f=t+h,l=e+u,v=1^a,d=a?s-c:c-s;if(n<0)throw new Error("negative radius: "+n);null===this._x1?this._+="M"+f+","+l:(Math.abs(this._x1-f)>1e-6||Math.abs(this._y1-l)>1e-6)&&(this._+="L"+f+","+l),n&&(d<0&&(d=d%o+o),d>r?this._+="A"+n+","+n+",0,1,"+v+","+(t-h)+","+(e-u)+"A"+n+","+n+",0,1,"+v+","+(this._x1=f)+","+(this._y1=l):d>1e-6&&(this._+="A"+n+","+n+",0,"+ +(d>=i)+","+v+","+(this._x1=t+n*Math.cos(c))+","+(this._y1=e+n*Math.sin(c))))},rect:function(t,e,n,i){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)+"h"+ +n+"v"+ +i+"h"+-n+"Z"},toString:function(){return this._}};var a=c,h=function(t){return function(){return t}};function u(t){this._context=t}u.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:this._context.lineTo(t,e)}}};var f=function(t){return new u(t)};function l(t){return t[0]}function v(t){return t[1]}e.a=function(){var t=l,e=v,n=h(!0),i=null,o=f,r=null;function s(s){var c,h,u,f=s.length,l=!1;for(null==i&&(r=o(u=a())),c=0;c<=f;++c)!(c<f&&n(h=s[c],c,s))===l&&((l=!l)?r.lineStart():r.lineEnd()),l&&r.point(+t(h,c,s),+e(h,c,s));if(u)return r=null,u+""||null}return s.x=function(e){return arguments.length?(t="function"===typeof e?e:h(+e),s):t},s.y=function(t){return arguments.length?(e="function"===typeof t?t:h(+t),s):e},s.defined=function(t){return arguments.length?(n="function"===typeof t?t:h(!!t),s):n},s.curve=function(t){return arguments.length?(o=t,null!=i&&(r=o(i)),s):o},s.context=function(t){return arguments.length?(null==t?i=r=null:r=o(i=t),s):i},s}},239:function(t,e,n){"use strict";var i=n(135);e.a=function(t){var e=function(){for(var t,e=i.b;t=e.sourceEvent;)e=t;return e}();return e.changedTouches&&(e=e.changedTouches[0]),function(t,e){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var i=n.createSVGPoint();return i.x=e.clientX,i.y=e.clientY,[(i=i.matrixTransform(t.getScreenCTM().inverse())).x,i.y]}var o=t.getBoundingClientRect();return[e.clientX-o.left-t.clientLeft,e.clientY-o.top-t.clientTop]}(t,e)}}}]);
//# sourceMappingURL=22.a37385e4.chunk.js.map