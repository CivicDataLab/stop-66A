(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[9],{209:function(t,n,i){"use strict";function e(t){return t<0?-1:1}function r(t,n,i){var r=t._x1-t._x0,s=n-t._x1,o=(t._y1-t._y0)/(r||s<0&&-0),a=(i-t._y1)/(s||r<0&&-0),c=(o*s+a*r)/(r+s);return(e(o)+e(a))*Math.min(Math.abs(o),Math.abs(a),.5*Math.abs(c))||0}function s(t,n){var i=t._x1-t._x0;return i?(3*(t._y1-t._y0)/i-n)/2:n}function o(t,n,i){var e=t._x0,r=t._y0,s=t._x1,o=t._y1,a=(s-e)/3;t._context.bezierCurveTo(e+a,r+a*n,s-a,o-a*i,s,o)}function a(t){this._context=t}function c(t){this._context=new h(t)}function h(t){this._context=t}function u(t){return new a(t)}i.d(n,"a",(function(){return u})),a.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:o(this,this._t0,s(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var i=NaN;if(n=+n,(t=+t)!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,o(this,s(this,i=r(this,t,n)),i);break;default:o(this,this._t0,i=r(this,t,n))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=i}}},(c.prototype=Object.create(a.prototype)).point=function(t,n){a.prototype.point.call(this,n,t)},h.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,i,e,r,s){this._context.bezierCurveTo(n,t,e,i,s,r)}}},239:function(t,n,i){"use strict";var e=Math.PI,r=2*e,s=r-1e-6;function o(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function a(){return new o}o.prototype=a.prototype={constructor:o,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,i,e){this._+="Q"+ +t+","+ +n+","+(this._x1=+i)+","+(this._y1=+e)},bezierCurveTo:function(t,n,i,e,r,s){this._+="C"+ +t+","+ +n+","+ +i+","+ +e+","+(this._x1=+r)+","+(this._y1=+s)},arcTo:function(t,n,i,r,s){t=+t,n=+n,i=+i,r=+r,s=+s;var o=this._x1,a=this._y1,c=i-t,h=r-n,u=o-t,_=a-n,l=u*u+_*_;if(s<0)throw new Error("negative radius: "+s);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(l>1e-6)if(Math.abs(_*c-h*u)>1e-6&&s){var f=i-o,x=r-a,p=c*c+h*h,y=f*f+x*x,d=Math.sqrt(p),b=Math.sqrt(l),v=s*Math.tan((e-Math.acos((p+l-y)/(2*d*b)))/2),j=v/b,m=v/d;Math.abs(j-1)>1e-6&&(this._+="L"+(t+j*u)+","+(n+j*_)),this._+="A"+s+","+s+",0,0,"+ +(_*f>u*x)+","+(this._x1=t+m*c)+","+(this._y1=n+m*h)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,i,o,a,c){t=+t,n=+n,c=!!c;var h=(i=+i)*Math.cos(o),u=i*Math.sin(o),_=t+h,l=n+u,f=1^c,x=c?o-a:a-o;if(i<0)throw new Error("negative radius: "+i);null===this._x1?this._+="M"+_+","+l:(Math.abs(this._x1-_)>1e-6||Math.abs(this._y1-l)>1e-6)&&(this._+="L"+_+","+l),i&&(x<0&&(x=x%r+r),x>s?this._+="A"+i+","+i+",0,1,"+f+","+(t-h)+","+(n-u)+"A"+i+","+i+",0,1,"+f+","+(this._x1=_)+","+(this._y1=l):x>1e-6&&(this._+="A"+i+","+i+",0,"+ +(x>=e)+","+f+","+(this._x1=t+i*Math.cos(a))+","+(this._y1=n+i*Math.sin(a))))},rect:function(t,n,i,e){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +i+"v"+ +e+"h"+-i+"Z"},toString:function(){return this._}};var c=a,h=function(t){return function(){return t}};function u(t){this._context=t}u.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}};var _=function(t){return new u(t)};function l(t){return t[0]}function f(t){return t[1]}n.a=function(){var t=l,n=f,i=h(!0),e=null,r=_,s=null;function o(o){var a,h,u,_=o.length,l=!1;for(null==e&&(s=r(u=c())),a=0;a<=_;++a)!(a<_&&i(h=o[a],a,o))===l&&((l=!l)?s.lineStart():s.lineEnd()),l&&s.point(+t(h,a,o),+n(h,a,o));if(u)return s=null,u+""||null}return o.x=function(n){return arguments.length?(t="function"===typeof n?n:h(+n),o):t},o.y=function(t){return arguments.length?(n="function"===typeof t?t:h(+t),o):n},o.defined=function(t){return arguments.length?(i="function"===typeof t?t:h(!!t),o):i},o.curve=function(t){return arguments.length?(r=t,null!=e&&(s=r(e)),o):r},o.context=function(t){return arguments.length?(null==t?e=s=null:s=r(e=t),o):e},o}},265:function(t,n,i){"use strict";i.r(n);var e=i(13),r=i(33),s=i(90),o=i.n(s),a=i(203),c=i(144),h=i(282),u=i(148),_=i(256),l=i(239),f=i(209),x=(i(114),i(54)),p=i(71),y=i(92),d=i.n(y),b=i(0),v=i.n(b),j=10,m=10,O=2,M=5;n.default=v.a.memo((function(t){var n=t.timeseries,i=t.date,s=Object(b.useRef)([]),y=Object(b.useMemo)((function(){var t=i||Object(r.h)(),s=Object.keys(n||{}).filter((function(n){return n<=t})),o=Object(x.a)(Object(p.a)(Object(r.k)(t),e.j),{representation:"date"});return s.filter((function(t){return t>=o}))}),[n,i]);return Object(b.useEffect)((function(){var t=y.length,i=100-m,o=75-O,x=Object(h.a)().clamp(!0).domain(t?[Object(r.k)(y[0]),Object(r.k)(y[t-1])]:[]).range([M,i]);s.current.forEach((function(i,s){var h,p=Object(_.a)(i),d=e.m[s],b=e.r[d].color,v=Object(a.a)(y,(function(t){return Math.abs(Object(r.i)(n[t],"total",d))})),m=Object(u.a)().clamp(!0).domain([-v,v]).range([o,j]),O=Object(l.a)().curve(f.a).x((function(t){return x(Object(r.k)(t))})).y((function(t){return m(Object(r.i)(n[t],"total",d))}));p.selectAll("path").data(t?[y]:[]).join((function(t){return t.append("path").attr("fill","none").attr("stroke",b+"99").attr("stroke-width",2.5).attr("d",O).attr("stroke-dasharray",(function(){return h=this.getTotalLength()})).call((function(t){return t.attr("stroke-dashoffset",h).transition().delay(100).duration(2500).attr("stroke-dashoffset",0)}))}),(function(t){return t.attr("stroke-dasharray",null).transition().duration(500).attrTween("d",(function(t){var n=Object(_.a)(this).attr("d"),i=O(t);return Object(c.interpolatePath)(n,i)}))})),p.selectAll("circle").data(t?[y[t-1]]:[]).join((function(t){return t.append("circle").attr("fill",b).attr("r",2.5).attr("cx",(function(t){return x(Object(r.k)(t))})).attr("cy",(function(t){return m(Object(r.i)(n[t],"delta",d))})).style("opacity",0).call((function(t){return t.transition().delay(2100).duration(500).style("opacity",1).attr("cx",(function(t){return x(Object(r.k)(t))})).attr("cy",(function(t){return m(Object(r.i)(n[t],"delta",d))}))}))}),(function(t){return t.transition().duration(500).attr("cx",(function(t){return x(Object(r.k)(t))})).attr("cy",(function(t){return m(Object(r.i)(n[t],"delta",d))}))}))}))}),[y,n]),v.a.createElement("div",{className:"Minigraph"},e.m.map((function(t,n){return v.a.createElement("div",{key:t,className:o()("svg-parent")},v.a.createElement("svg",{ref:function(t){s.current[n]=t},width:100,height:75,viewBox:"0 0 ".concat(100," ").concat(75),preserveAspectRatio:"xMidYMid meet"}))})))}),(function(t,n){return!n.forceRender&&(!(n.timeseries||!t.timeseries)||!(n.timeseries&&!t.timeseries)&&(!!d()(n.stateCode,t.stateCode)&&!!d()(n.date,t.date)))}))}}]);
//# sourceMappingURL=9.1d5aa694.chunk.js.map