!function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,n){var e=(0,s.getWavFn)(p,t,0,n);return function(t){return Math.floor(e(t))%(n+1)}}function i(){var t=window,n=t.innerHeight,e=t.innerWidth;l.height=_=n,l.width=g=e,w=_/2,x=g/2}function c(t){requestAnimationFrame(c),d===-1&&(d=t),t-=d,y===-1&&(y=t),m=t-y,v.clearRect(0,0,g,_),v.imageSmoothingEnabled=!1,v.drawImage(b[h(t)],x-96,w-96,192,192),v.fillStyle="#fff",v.font="24px monospace",v.fillText((1e3/m).toFixed(2),8,28),y=t}var u=e(39),a=r(u);e(36),e(72);var f=e(20),s=e(37),l=document.getElementById("js-canvas"),v=l.getContext("2d"),p=function(t){return t/f.π-1},h=o(400,3),d=-1,y=-1,m=void 0,g=void 0,_=void 0,x=void 0,w=void 0,b=void 0;addEventListener("resize",i),i(),addEventListener("click",function(){requestAnimationFrame(c)}),a["default"].all(["./images/megaman-00.png","./images/megaman-01.png","./images/megaman-02.png","./images/megaman-01.png"].map(function(t){return new a["default"](function(n,e){var r=new Image(48,48);r.addEventListener("load",function(){return n(r)}),r.addEventListener("error",e),r.src=t})})).then(function(t){b=t,requestAnimationFrame(c)})},function(t,n,e){var r=e(29)("wks"),o=e(32),i=e(2).Symbol,c="function"==typeof i,u=t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))};u.store=r},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(11);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(12),o=e(28);t.exports=e(6)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){t.exports=!e(24)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports={}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(13);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(3),o=e(46),i=e(67),c=Object.defineProperty;n.f=e(6)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return c(t,n,e)}catch(u){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(11),o=e(2).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(12).f,o=e(10),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(29)("keys"),o=e(32);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(48),o=e(14);t.exports=function(t){return r(o(t))}},function(t,n){"use strict";function e(t){return 180*t/o}function r(t){return t*o/180}Object.defineProperty(n,"__esModule",{value:!0}),n.toDegrees=e,n.toRadians=r;var o=Math.PI,i=Math.sin,c=Math.cos;n.π=o,n.sin=i,n.cos=c;n.ππ=2*o},function(t,n,e){var r=e(8),o=e(1)("toStringTag"),i="Arguments"==r(function(){return arguments}()),c=function(t,n){try{return t[n]}catch(e){}};t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=c(n=Object(t),o))?e:i?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(2),o=e(4),i=e(9),c=e(5),u="prototype",a=function(t,n,e){var f,s,l,v=t&a.F,p=t&a.G,h=t&a.S,d=t&a.P,y=t&a.B,m=t&a.W,g=p?o:o[n]||(o[n]={}),_=g[u],x=p?r:h?r[n]:(r[n]||{})[u];p&&(e=n);for(f in e)s=!v&&x&&void 0!==x[f],s&&f in g||(l=s?x[f]:e[f],g[f]=p&&"function"!=typeof x[f]?e[f]:y&&s?i(l,r):m&&x[f]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n[u]=t[u],n}(l):d&&"function"==typeof l?i(Function.call,l):l,d&&((g.virtual||(g.virtual={}))[f]=l,t&a.R&&_&&!_[f]&&c(_,f,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n,e){t.exports=e(2).document&&document.documentElement},function(t,n,e){"use strict";var r=e(27),o=e(23),i=e(61),c=e(5),u=e(10),a=e(7),f=e(51),s=e(16),l=e(57),v=e(1)("iterator"),p=!([].keys&&"next"in[].keys()),h="@@iterator",d="keys",y="values",m=function(){return this};t.exports=function(t,n,e,g,_,x,w){f(e,n,g);var b,j,O,S=function(t){if(!p&&t in T)return T[t];switch(t){case d:return function(){return new e(this,t)};case y:return function(){return new e(this,t)}}return function(){return new e(this,t)}},M=n+" Iterator",E=_==y,P=!1,T=t.prototype,F=T[v]||T[h]||_&&T[_],A=F||S(_),k=_?E?S("entries"):A:void 0,I="Array"==n?T.entries||F:F;if(I&&(O=l(I.call(new t)),O!==Object.prototype&&(s(O,M,!0),r||u(O,v)||c(O,v,m))),E&&F&&F.name!==y&&(P=!0,A=function(){return F.call(this)}),r&&!w||!p&&!P&&T[v]||c(T,v,A),a[n]=A,a[M]=m,_)if(b={values:E?A:S(y),keys:x?A:S(d),entries:k},w)for(j in b)j in T||i(T,j,b[j]);else o(o.P+o.F*(p||P),n,b);return b}},function(t,n){t.exports=!0},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(2),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n,e){var r,o,i,c=e(9),u=e(47),a=e(25),f=e(15),s=e(2),l=s.process,v=s.setImmediate,p=s.clearImmediate,h=s.MessageChannel,d=0,y={},m="onreadystatechange",g=function(){var t=+this;if(y.hasOwnProperty(t)){var n=y[t];delete y[t],n()}},_=function(t){g.call(t.data)};v&&p||(v=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return y[++d]=function(){u("function"==typeof t?t:Function(t),n)},r(d),d},p=function(t){delete y[t]},"process"==e(8)(l)?r=function(t){l.nextTick(c(g,t,1))}:h?(o=new h,i=o.port2,o.port1.onmessage=_,r=c(i.postMessage,i,1)):s.addEventListener&&"function"==typeof postMessage&&!s.importScripts?(r=function(t){s.postMessage(t+"","*")},s.addEventListener("message",_,!1)):r=m in f("script")?function(t){a.appendChild(f("script"))[m]=function(){a.removeChild(this),g.call(t)}}:function(t){setTimeout(c(g,t,1),0)}),t.exports={set:v,clear:p}},function(t,n,e){var r=e(18),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(21),o=e(1)("iterator"),i=e(7);t.exports=e(4).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n,e){"use strict";var r=e(64)(!0);e(26)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){e(69);for(var r=e(2),o=e(5),i=e(7),c=e(1)("toStringTag"),u=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],a=0;a<5;a++){var f=u[a],s=r[f],l=s&&s.prototype;l&&!l[c]&&o(l,c,f),i[f]=i.Array}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var o=e(38);r(o)},function(t,n,e){"use strict";function r(t){var n=arguments.length<=1||void 0===arguments[1]?1e3:arguments[1],e=arguments.length<=2||void 0===arguments[2]?-1:arguments[2],r=arguments.length<=3||void 0===arguments[3]?1:arguments[3],o=arguments.length<=4||void 0===arguments[4]?0:arguments[4],i=(r-e)/2,u=c.ππ/n;return function(n){var r=o+n;return i*(1+t(r*u))+e}}function o(){var t=arguments.length<=0||void 0===arguments[0]?1e3:arguments[0],n=arguments.length<=1||void 0===arguments[1]?-1:arguments[1],e=arguments.length<=2||void 0===arguments[2]?1:arguments[2],o=arguments.length<=3||void 0===arguments[3]?0:arguments[3];return r(c.sin,t,n,e,o)}function i(){var t=arguments.length<=0||void 0===arguments[0]?1e3:arguments[0],n=arguments.length<=1||void 0===arguments[1]?-1:arguments[1],e=arguments.length<=2||void 0===arguments[2]?1:arguments[2],o=arguments.length<=3||void 0===arguments[3]?0:arguments[3];return r(c.cos,t,n,e,o)}Object.defineProperty(n,"__esModule",{value:!0}),n.getWavFn=r,n.getSinFn=o,n.getCosFn=i;var c=e(20)},function(t,n,e){t.exports={"default":e(40),__esModule:!0}},function(t,n,e){t.exports={"default":e(41),__esModule:!0}},function(t,n,e){e(35),e(34),t.exports=e(68)},function(t,n,e){e(70),e(34),e(35),e(71),t.exports=e(4).Promise},function(t,n){t.exports=function(){}},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){var r=e(19),o=e(31),i=e(65);t.exports=function(t){return function(n,e,c){var u,a=r(n),f=o(a.length),s=i(c,f);if(t&&e!=e){for(;f>s;)if(u=a[s++],u!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}}},function(t,n,e){var r=e(9),o=e(50),i=e(49),c=e(3),u=e(31),a=e(33),f={},s={},n=t.exports=function(t,n,e,l,v){var p,h,d,y,m=v?function(){return t}:a(t),g=r(e,l,n?2:1),_=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(p=u(t.length);p>_;_++)if(y=n?g(c(h=t[_])[0],h[1]):g(t[_]),y===f||y===s)return y}else for(d=m.call(t);!(h=d.next()).done;)if(y=o(d,g,h.value,n),y===f||y===s)return y};n.BREAK=f,n.RETURN=s},function(t,n,e){t.exports=!e(6)&&!e(24)(function(){return 7!=Object.defineProperty(e(15)("div"),"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},function(t,n,e){var r=e(8);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(7),o=e(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n,e){var r=e(3);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(i){var c=t["return"];throw void 0!==c&&r(c.call(t)),i}}},function(t,n,e){"use strict";var r=e(55),o=e(28),i=e(16),c={};e(5)(c,e(1)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(c,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=[7][r]();i["return"]=function(){o=!0},Array.from(i,function(){throw 2})}catch(c){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],c=i[r]();c.next=function(){return{done:e=!0}},i[r]=function(){return c},t(i)}catch(u){}return e}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){var r=e(2),o=e(30).set,i=r.MutationObserver||r.WebKitMutationObserver,c=r.process,u=r.Promise,a="process"==e(8)(c);t.exports=function(){var t,n,e,f=function(){var r,o;for(a&&(r=c.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(i){throw t?e():n=void 0,i}}n=void 0,r&&r.enter()};if(a)e=function(){c.nextTick(f)};else if(i){var s=!0,l=document.createTextNode("");new i(f).observe(l,{characterData:!0}),e=function(){l.data=s=!s}}else if(u&&u.resolve){var v=u.resolve();e=function(){v.then(f)}}else e=function(){o.call(r,f)};return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},function(t,n,e){var r=e(3),o=e(56),i=e(22),c=e(17)("IE_PROTO"),u=function(){},a="prototype",f=function(){var t,n=e(15)("iframe"),r=i.length,o="<",c=">";for(n.style.display="none",e(25).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write(o+"script"+c+"document.F=Object"+o+"/script"+c),t.close(),f=t.F;r--;)delete f[a][i[r]];return f()};t.exports=Object.create||function(t,n){var e;return null!==t?(u[a]=r(t),e=new u,u[a]=null,e[c]=t):e=f(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(12),o=e(3),i=e(59);t.exports=e(6)?Object.defineProperties:function(t,n){o(t);for(var e,c=i(n),u=c.length,a=0;u>a;)r.f(t,e=c[a++],n[e]);return t}},function(t,n,e){var r=e(10),o=e(66),i=e(17)("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},function(t,n,e){var r=e(10),o=e(19),i=e(44)(!1),c=e(17)("IE_PROTO");t.exports=function(t,n){var e,u=o(t),a=0,f=[];for(e in u)e!=c&&r(u,e)&&f.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(f,e)||f.push(e));return f}},function(t,n,e){var r=e(58),o=e(22);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(5);t.exports=function(t,n,e){for(var o in n)e&&t[o]?t[o]=n[o]:r(t,o,n[o]);return t}},function(t,n,e){t.exports=e(5)},function(t,n,e){"use strict";var r=e(2),o=e(4),i=e(12),c=e(6),u=e(1)("species");t.exports=function(t){var n="function"==typeof o[t]?o[t]:r[t];c&&n&&!n[u]&&i.f(n,u,{configurable:!0,get:function(){return this}})}},function(t,n,e){var r=e(3),o=e(13),i=e(1)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||void 0==(e=r(c)[i])?n:o(e)}},function(t,n,e){var r=e(18),o=e(14);t.exports=function(t){return function(n,e){var i,c,u=String(o(n)),a=r(e),f=u.length;return a<0||a>=f?t?"":void 0:(i=u.charCodeAt(a),i<55296||i>56319||a+1===f||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):(i-55296<<10)+(c-56320)+65536)}}},function(t,n,e){var r=e(18),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(14);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(11);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(3),o=e(33);t.exports=e(4).getIterator=function(t){var n=o(t);if("function"!=typeof n)throw TypeError(t+" is not iterable!");return r(n.call(t))}},function(t,n,e){"use strict";var r=e(42),o=e(53),i=e(7),c=e(19);t.exports=e(26)(Array,"Array",function(t,n){this._t=c(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n){},function(t,n,e){"use strict";var r,o,i,c=e(27),u=e(2),a=e(9),f=e(21),s=e(23),l=e(11),v=e(13),p=e(43),h=e(45),d=e(63),y=e(30).set,m=e(54)(),g="Promise",_=u.TypeError,x=u.process,w=u[g],x=u.process,b="process"==f(x),j=function(){},O=!!function(){try{var t=w.resolve(1),n=(t.constructor={})[e(1)("species")]=function(t){t(j,j)};return(b||"function"==typeof PromiseRejectionEvent)&&t.then(j)instanceof n}catch(r){}}(),S=function(t,n){return t===n||t===w&&n===i},M=function(t){var n;return!(!l(t)||"function"!=typeof(n=t.then))&&n},E=function(t){return S(w,t)?new P(t):new o(t)},P=o=function(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw _("Bad Promise constructor");n=t,e=r}),this.resolve=v(n),this.reject=v(e)},T=function(t){try{t()}catch(n){return{error:n}}},F=function(t,n){if(!t._n){t._n=!0;var e=t._c;m(function(){for(var r=t._v,o=1==t._s,i=0,c=function(n){var e,i,c=o?n.ok:n.fail,u=n.resolve,a=n.reject,f=n.domain;try{c?(o||(2==t._h&&I(t),t._h=1),c===!0?e=r:(f&&f.enter(),e=c(r),f&&f.exit()),e===n.promise?a(_("Promise-chain cycle")):(i=M(e))?i.call(e,u,a):u(e)):a(r)}catch(s){a(s)}};e.length>i;)c(e[i++]);t._c=[],t._n=!1,n&&!t._h&&A(t)})}},A=function(t){y.call(u,function(){var n,e,r,o=t._v;if(k(t)&&(n=T(function(){b?x.emit("unhandledRejection",o,t):(e=u.onunhandledrejection)?e({promise:t,reason:o}):(r=u.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=b||k(t)?2:1),t._a=void 0,n)throw n.error})},k=function(t){if(1==t._h)return!1;for(var n,e=t._a||t._c,r=0;e.length>r;)if(n=e[r++],n.fail||!k(n.promise))return!1;return!0},I=function(t){y.call(u,function(){var n;b?x.emit("rejectionHandled",t):(n=u.onrejectionhandled)&&n({promise:t,reason:t._v})})},R=function(t){var n=this;n._d||(n._d=!0,n=n._w||n,n._v=t,n._s=2,n._a||(n._a=n._c.slice()),F(n,!0))},L=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw _("Promise can't be resolved itself");(n=M(t))?m(function(){var r={_w:e,_d:!1};try{n.call(t,a(L,r,1),a(R,r,1))}catch(o){R.call(r,o)}}):(e._v=t,e._s=1,F(e,!1))}catch(r){R.call({_w:e,_d:!1},r)}}};O||(w=function(t){p(this,w,g,"_h"),v(t),r.call(this);try{t(a(L,this,1),a(R,this,1))}catch(n){R.call(this,n)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=e(60)(w.prototype,{then:function(t,n){var e=E(d(this,w));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=b?x.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&F(this,!1),e.promise},"catch":function(t){return this.then(void 0,t)}}),P=function(){var t=new r;this.promise=t,this.resolve=a(L,t,1),this.reject=a(R,t,1)}),s(s.G+s.W+s.F*!O,{Promise:w}),e(16)(w,g),e(62)(g),i=e(4)[g],s(s.S+s.F*!O,g,{reject:function(t){var n=E(this),e=n.reject;return e(t),n.promise}}),s(s.S+s.F*(c||!O),g,{resolve:function(t){if(t instanceof w&&S(t.constructor,this))return t;var n=E(this),e=n.resolve;return e(t),n.promise}}),s(s.S+s.F*!(O&&e(52)(function(t){w.all(t)["catch"](j)})),g,{all:function(t){var n=this,e=E(n),r=e.resolve,o=e.reject,i=T(function(){var e=[],i=0,c=1;h(t,!1,function(t){var u=i++,a=!1;e.push(void 0),c++,n.resolve(t).then(function(t){a||(a=!0,e[u]=t,--c||r(e))},o)}),--c||r(e)});return i&&o(i.error),e.promise},race:function(t){var n=this,e=E(n),r=e.reject,o=T(function(){h(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return o&&r(o.error),e.promise}})},function(t,n){}]);
//# sourceMappingURL=main.js.map