(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[10],{13:function(e,a,n){"use strict";n.d(a,"d",(function(){return i})),n.d(a,"s",(function(){return s})),n.d(a,"t",(function(){return d})),n.d(a,"m",(function(){return c})),n.d(a,"k",(function(){return u})),n.d(a,"n",(function(){return p})),n.d(a,"u",(function(){return m})),n.d(a,"v",(function(){return f})),n.d(a,"x",(function(){return y})),n.d(a,"z",(function(){return T})),n.d(a,"l",(function(){return g})),n.d(a,"y",(function(){return h})),n.d(a,"C",(function(){return v})),n.d(a,"b",(function(){return j})),n.d(a,"a",(function(){return b})),n.d(a,"j",(function(){return A})),n.d(a,"A",(function(){return S})),n.d(a,"B",(function(){return k})),n.d(a,"c",(function(){return N})),n.d(a,"o",(function(){return D})),n.d(a,"w",(function(){return _})),n.d(a,"i",(function(){return E})),n.d(a,"h",(function(){return F})),n.d(a,"g",(function(){return w})),n.d(a,"f",(function(){return P})),n.d(a,"e",(function(){return B})),n.d(a,"r",(function(){return K})),n.d(a,"p",(function(){return C})),n.d(a,"q",(function(){return L}));var t=n(20),o=n(62),i={english:"en-US",hindi:"hi",telugu:"te",kannada:"en-US",gujarati:"gu",marathi:"en-US",tamil:"ta",bengali:"bn",punjabi:"en-US",malayalam:"en-US",odiya:"en-US"},r={total:{displayName:"total",ts_displayName:"cases registered",table_displayName:"total",color:"#ff073a",format:"int",options:{key:"total"}},pending:{displayName:"pending",ts_displayName:"cases_pending_till_date",table_displayName:"pending",color:"#28a745",format:"int",options:{key:"pending"},hideDelta:!0},disposed:{displayName:"disposed",ts_displayName:"cases_disposed_till_date",table_displayName:"disposed",color:"#f9b950",format:"int",options:{key:"disposed"}},judgement:{displayName:"judgement",ts_displayName:"cases_with_judgement",table_displayName:"judgement",color:"#bd4227",format:"int",options:{key:"judgement"}},pending_agg:{displayName:"pending_cumulative",ts_displayName:"total_pendency_at_year_end",table_displayName:"total_pendency_at_year_end",color:"#646f6f",format:"int",options:{key:"pending_agg"}},pending_before:{displayName:"pending_before",ts_displayName:"earlier_cases",table_displayName:"earlier_cases",color:"#646f6f",format:"int",options:{key:"pending_before"}},disposed_yearly:{displayName:"disposed_yearly",ts_displayName:"disposed_cases",table_displayName:"disposed_cases",color:"#646f6f",format:"int",options:{key:"disposed_yearly"}},pendency:{displayName:"pendency",ts_displayName:"pendency",table_displayName:"pendency",color:"#ff073a",format:"int",options:{key:"pendency"}},other:{displayName:"other",color:"#fd7e14",format:"int",options:{key:"other"}},tested:{displayName:"tested",color:"#4b1eaa",format:"short",options:{key:"tested"}},testedStates:{displayName:"sum of state tests",color:"#fd7e14",format:"short",options:{key:"tested_states"}},positives:{displayName:"positive samples",color:"#fd7e14",format:"short",options:{key:"positives"}},activeRatio:{displayName:"active ratio",color:"#fd7e14",format:"%",options:{key:"active",normalizeByKey:"confirmed",multiplyFactor:100},hideDelta:!0},recoveryRatio:{displayName:"recovery ratio",color:"#fd7e14",format:"%",options:{key:"recovered",normalizeByKey:"confirmed",multiplyFactor:100},hideDelta:!0},cfr:{displayName:"case fatality ratio",color:"#fd7e14",format:"%",options:{key:"deceased",normalizeByKey:"confirmed",multiplyFactor:100},hideDelta:!0},tpr:{displayName:"test positivity ratio",color:"#fd7e14",format:"%",options:{key:"positives",normalizeByKey:"tested",multiplyFactor:100},hideDelta:!0},population:{displayName:"population",color:"#fd7e14",format:"short",options:{key:"population"},hideDelta:!0}},l=Object.keys(r).reduce((function(e,a){var n=r[a],t=n.options,i=Object(o.a)(n,["options"]);return e.options[a]=t,e.configs[a]=i,e}),{options:{},configs:{}}),s=l.configs,d=l.options,c={normalizeByKey:"population",multiplyFactor:1e6},u=["tested","testedStates","tpr","population"],p=["total","pending","disposed","judgement"],m=[].concat(p),f=Object.keys(r).filter((function(e){return!["positives","testedStates"].includes(e)})),y=["total","disposed_yearly","pending_agg"],T=["pending","disposed"],g=["pendency"],h=["total","pending_before","disposed_yearly","pending_agg"],v=5,j=30,b=300,A=20,S="UN",k="Unknown",N="T00:00:00+05:30",D={clamp:!0,precision:1},_={BEGINNING:"Beginning",MONTH:"1 Month",TWO_WEEKS:"2 Weeks"},E={CHOROPLETH:0,BUBBLES:1},F={STATES:0,DISTRICTS:1},w={COUNTRY:0,STATE:1},O="/mini_maps",P={AP:{geoDataFile:"".concat(O,"/andhrapradesh.json"),mapType:w.STATE},AR:{geoDataFile:"".concat(O,"/arunachalpradesh.json"),mapType:w.STATE},AS:{geoDataFile:"".concat(O,"/assam.json"),mapType:w.STATE},BR:{geoDataFile:"".concat(O,"/bihar.json"),mapType:w.STATE},CT:{geoDataFile:"".concat(O,"/chhattisgarh.json"),mapType:w.STATE},GA:{geoDataFile:"".concat(O,"/goa.json"),mapType:w.STATE},GJ:{geoDataFile:"".concat(O,"/gujarat.json"),mapType:w.STATE},HR:{geoDataFile:"".concat(O,"/haryana.json"),mapType:w.STATE},HP:{geoDataFile:"".concat(O,"/himachalpradesh.json"),mapType:w.STATE},JK:{geoDataFile:"".concat(O,"/jammukashmir.json"),mapType:w.STATE},JH:{geoDataFile:"".concat(O,"/jharkhand.json"),mapType:w.STATE},KA:{geoDataFile:"".concat(O,"/karnataka.json"),mapType:w.STATE},KL:{geoDataFile:"".concat(O,"/kerala.json"),mapType:w.STATE},MP:{geoDataFile:"".concat(O,"/madhyapradesh.json"),mapType:w.STATE},MH:{geoDataFile:"".concat(O,"/maharashtra.json"),mapType:w.STATE},MN:{geoDataFile:"".concat(O,"/manipur.json"),mapType:w.STATE},ML:{geoDataFile:"".concat(O,"/meghalaya.json"),mapType:w.STATE},MZ:{geoDataFile:"".concat(O,"/mizoram.json"),mapType:w.STATE},NL:{geoDataFile:"".concat(O,"/nagaland.json"),mapType:w.STATE},OR:{geoDataFile:"".concat(O,"/odisha.json"),mapType:w.STATE},PB:{geoDataFile:"".concat(O,"/punjab.json"),mapType:w.STATE},RJ:{geoDataFile:"".concat(O,"/rajasthan.json"),mapType:w.STATE},SK:{geoDataFile:"".concat(O,"/sikkim.json"),mapType:w.STATE},TN:{geoDataFile:"".concat(O,"/tamilnadu.json"),mapType:w.STATE},TG:{geoDataFile:"".concat(O,"/telangana.json"),mapType:w.STATE},TR:{geoDataFile:"".concat(O,"/tripura.json"),mapType:w.STATE},UT:{geoDataFile:"".concat(O,"/uttarakhand.json"),mapType:w.STATE},UP:{geoDataFile:"".concat(O,"/uttarpradesh.json"),mapType:w.STATE},WB:{geoDataFile:"".concat(O,"/westbengal.json"),mapType:w.STATE},AN:{geoDataFile:"".concat(O,"/andamannicobarislands.json"),mapType:w.STATE},CH:{geoDataFile:"".concat(O,"/chandigarh.json"),mapType:w.STATE},DN:{geoDataFile:"".concat(O,"/dnh-and-dd.json"),mapType:w.STATE},DL:{geoDataFile:"".concat(O,"/delhi.json"),mapType:w.STATE},LA:{geoDataFile:"".concat(O,"/ladakh.json"),mapType:w.STATE},LD:{geoDataFile:"".concat(O,"/lakshadweep.json"),mapType:w.STATE},PY:{geoDataFile:"".concat(O,"/puducherry.json"),mapType:w.STATE},TT:{geoDataFile:"".concat(O,"/india.json"),mapType:w.COUNTRY}},B=50,K=Object(t.a)({AP:"Andhra Pradesh",AR:"Arunachal Pradesh",AS:"Assam",BR:"Bihar",CT:"Chhattisgarh",GA:"Goa",GJ:"Gujarat",HR:"Haryana",HP:"Himachal Pradesh",JH:"Jharkhand",KA:"Karnataka",KL:"Kerala",MP:"Madhya Pradesh",MH:"Maharashtra",MN:"Manipur",ML:"Meghalaya",MZ:"Mizoram",NL:"Nagaland",OR:"Odisha",PB:"Punjab",RJ:"Rajasthan",SK:"Sikkim",TN:"Tamil Nadu",TG:"Telangana",TR:"Tripura",UT:"Uttarakhand",UP:"Uttar Pradesh",WB:"West Bengal",AN:"Andaman and Nicobar Islands",CH:"Chandigarh",DN:"Dadra and Nagar Haveli and Daman and Diu",DL:"Delhi",JK:"Jammu and Kashmir",LA:"Ladakh",LD:"Lakshadweep",PY:"Puducherry",TT:"India"},S,"Unassigned"),U=[],R={};Object.keys(K).map((function(e,a){return R[K[e]]=e,U.push({code:e,name:K[e]}),null}));var C=R,L=U},33:function(e,a,n){"use strict";n.d(a,"j",(function(){return m})),n.d(a,"f",(function(){return f})),n.d(a,"g",(function(){return y})),n.d(a,"h",(function(){return T})),n.d(a,"d",(function(){return g})),n.d(a,"k",(function(){return h})),n.d(a,"c",(function(){return v})),n.d(a,"e",(function(){return j})),n.d(a,"a",(function(){return b})),n.d(a,"l",(function(){return A})),n.d(a,"i",(function(){return S})),n.d(a,"b",(function(){return k}));var t=n(34),o=n(13),i=n(54),r=n(71),l=n(72),s=n(73),d=n(38),c=n(25),u=null,p=new Intl.NumberFormat("en-IN",{maximumFractionDigits:1}),m=function(){return!1},f=function(){return Object(d.a)(new Date,"Asia/Kolkata")},y=function(){return Object(i.a)(f(),{representation:"date"})},T=function(){return Object(i.a)(Object(r.a)(f(),1),{representation:"date"})},g=function(e){return n.e(50).then(n.bind(null,88)).then((function(e){u=e[o.d[c.a.language||window.localStorage.i18nextLng]]})),Object(l.a)(new Date(e),new Date,{locale:u})},h=function(e){return Object(d.a)(new Date(e+o.c),"Asia/Kolkata")},v=function(e,a){"string"===typeof e&&e.match(/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/g)&&(e+=o.c);var n=Object(d.a)(new Date(e),"Asia/Kolkata");return Object(s.a)(n,a,{locale:u})},j=function(e,a,n){return n&&0===e&&o.k.includes(n)&&(e=NaN),isNaN(e)?"-":"short"===a?(t=e)<1e3?p.format(t):t>=1e3&&t<1e6?p.format(t/1e3)+"K":t>=1e6&&t<1e9?p.format(t/1e6)+"M":t>=1e9&&t<1e12?p.format(t/1e9)+"B":t>=1e12?p.format(t/1e12)+"T":void 0:("int"===a&&(e=Math.floor(e)),p.format(e)+("%"===a?"%":""));var t},b=function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)},A=function(e){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))},S=function e(a,n,i){var r,l,s,d=arguments.length>3&&void 0!==arguments[3]&&arguments[3],c=Object(t.a)(Object(t.a)({},o.t[i]),d&&!(null===(r=o.t[i])||void 0===r?void 0:r.normalizeByKey)&&o.m),u=c.key,p=c.normalizeByKey,m=c.multiplyFactor;if("population"===u)l="total"===n?null===a||void 0===a||null===(s=a.meta)||void 0===s?void 0:s.population:0;else if("tested"===u){var f,y;l=null===a||void 0===a||null===(f=a[n])||void 0===f||null===(y=f.tested)||void 0===y?void 0:y.samples}else if("tested_states"===u){var T,g,h;l=null===a||void 0===a||null===(T=a[n])||void 0===T||null===(g=T.tested)||void 0===g||null===(h=g.states)||void 0===h?void 0:h.samples}else if("positives"===u){var v,j,b,A,S,k,N;if(null===a||void 0===a||null===(v=a[n])||void 0===v||null===(j=v.tested)||void 0===j?void 0:j.positives)l=null===a||void 0===a||null===(b=a[n])||void 0===b||null===(A=b.tested)||void 0===A?void 0:A.positives;else if(null===a||void 0===a||null===(S=a[n])||void 0===S||null===(k=S.tested)||void 0===k||null===(N=k.states)||void 0===N?void 0:N.positives){var D,_,E;l=null===a||void 0===a||null===(D=a[n])||void 0===D||null===(_=D.tested)||void 0===_||null===(E=_.states)||void 0===E?void 0:E.positives,"tested"===p&&(p="testedStates")}}else if("total"===u){var F,w,O,P,B=(null===a||void 0===a||null===(F=a[n])||void 0===F?void 0:F.total)||0;null===a||void 0===a||null===(w=a[n])||void 0===w||w.pending,null===a||void 0===a||null===(O=a[n])||void 0===O||O.disposed,null===a||void 0===a||null===(P=a[n])||void 0===P||P.judgement;l=B}else{var K;l=null===a||void 0===a||null===(K=a[n])||void 0===K?void 0:K[u]}if(p)if("total"===n){var U=e(a,"total",p);l/=U}else{var R=l,C=e(a,"total",u),L=C-R,M=e(a,"delta",{key:p}),H=e(a,"total",p),W=H-M;l=C/H-L/W}return(m||1)*(isFinite(l)&&l||0)},k=function(e){return fetch(e).then((function(e){return e.json()}))}},74:function(e,a,n){e.exports=n(83)},83:function(e,a,n){"use strict";n.r(a);var t=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var i=n(33),r=n(25),l=n(65),s=n(66),d=n(87);r.a.use(s.a).use(l.a).use(d.e).init({debug:Object(i.j)()&&!1,keySeparator:!1,returnEmptyString:!1,fallbackLng:"english",load:"languageOnly",backend:{loadPath:"https://api.covid19india.org/locales/locale_{{lng}}.json",addPath:"http://localhost:9999/"},saveMissing:Object(i.j)()&&!1,interpolation:{escapeValue:!1}});r.a;var c=n(0),u=n.n(c),p=n(53),m=n(40),f=Object(c.lazy)((function(){return Promise.all([n.e(14),n.e(19)]).then(n.bind(null,295))})),y=document.getElementById("root"),T=function(){return Object(p.render)(u.a.createElement(c.Suspense,{fallback:u.a.createElement("div",null)},u.a.createElement(m.a,null,u.a.createElement(f,null))),y)};window.requestIdleCallback&&window.IntersectionObserver?T():function(e,a){var n=document.createElement("script");n.src=e,n.onload=function(){a()},n.onerror=function(){a(new Error("Failed to load script "+e))},document.head.appendChild(n)}("https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=requestIdleCallback%2CIntersectionObserver",T),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){return setTimeout((function(){var a="".concat("","/service-worker.js");t?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var t=n.headers.get("content-type");404===n.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):o(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):o(a,e)}),3e3)}))}}()}},[[74,11,12]]]);
//# sourceMappingURL=main.69fb6a22.chunk.js.map