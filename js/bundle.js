!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t,n){"use strict";var i=n(2),r=Object.prototype.toString;function s(e){return"[object Array]"===r.call(e)}function o(e){return void 0===e}function a(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===r.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),s(e))for(var n=0,i=e.length;n<i;n++)t.call(null,e[n],n,e);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(null,e[r],r,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===r.call(e)},isBuffer:function(e){return null!==e&&!o(e)&&null!==e.constructor&&!o(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isUndefined:o,isDate:function(e){return"[object Date]"===r.call(e)},isFile:function(e){return"[object File]"===r.call(e)},isBlob:function(e){return"[object Blob]"===r.call(e)},isFunction:c,isStream:function(e){return a(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function e(){var t={};function n(n,i){"object"==typeof t[i]&&"object"==typeof n?t[i]=e(t[i],n):t[i]=n}for(var i=0,r=arguments.length;i<r;i++)u(arguments[i],n);return t},deepMerge:function e(){var t={};function n(n,i){"object"==typeof t[i]&&"object"==typeof n?t[i]=e(t[i],n):t[i]="object"==typeof n?e({},n):n}for(var i=0,r=arguments.length;i<r;i++)u(arguments[i],n);return t},extend:function(e,t,n){return u(t,(function(t,r){e[r]=n&&"function"==typeof t?i(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,n){e.exports=n(11)},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return e.apply(t,n)}}},function(e,t,n){"use strict";var i=n(0);function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(i.isURLSearchParams(t))s=t.toString();else{var o=[];i.forEach(t,(function(e,t){null!=e&&(i.isArray(e)?t+="[]":e=[e],i.forEach(e,(function(e){i.isDate(e)?e=e.toISOString():i.isObject(e)&&(e=JSON.stringify(e)),o.push(r(t)+"="+r(e))})))})),s=o.join("&")}if(s){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";(function(t){var i=n(0),r=n(17),s={"Content-Type":"application/x-www-form-urlencoded"};function o(e,t){!i.isUndefined(e)&&i.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(a=n(6)),a),transformRequest:[function(e,t){return r(t,"Accept"),r(t,"Content-Type"),i.isFormData(e)||i.isArrayBuffer(e)||i.isBuffer(e)||i.isStream(e)||i.isFile(e)||i.isBlob(e)?e:i.isArrayBufferView(e)?e.buffer:i.isURLSearchParams(e)?(o(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):i.isObject(e)?(o(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},i.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),i.forEach(["post","put","patch"],(function(e){c.headers[e]=i.merge(s)})),e.exports=c}).call(this,n(16))},function(e,t,n){"use strict";var i=n(0),r=n(18),s=n(3),o=n(20),a=n(23),c=n(24),u=n(7);e.exports=function(e){return new Promise((function(t,l){var d=e.data,p=e.headers;i.isFormData(d)&&delete p["Content-Type"];var h=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",m=e.auth.password||"";p.Authorization="Basic "+btoa(f+":"+m)}var g=o(e.baseURL,e.url);if(h.open(e.method.toUpperCase(),s(g,e.params,e.paramsSerializer),!0),h.timeout=e.timeout,h.onreadystatechange=function(){if(h&&4===h.readyState&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in h?a(h.getAllResponseHeaders()):null,i={data:e.responseType&&"text"!==e.responseType?h.response:h.responseText,status:h.status,statusText:h.statusText,headers:n,config:e,request:h};r(t,l,i),h=null}},h.onabort=function(){h&&(l(u("Request aborted",e,"ECONNABORTED",h)),h=null)},h.onerror=function(){l(u("Network Error",e,null,h)),h=null},h.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),l(u(t,e,"ECONNABORTED",h)),h=null},i.isStandardBrowserEnv()){var v=n(25),y=(e.withCredentials||c(g))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;y&&(p[e.xsrfHeaderName]=y)}if("setRequestHeader"in h&&i.forEach(p,(function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete p[t]:h.setRequestHeader(t,e)})),i.isUndefined(e.withCredentials)||(h.withCredentials=!!e.withCredentials),e.responseType)try{h.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&h.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){h&&(h.abort(),l(e),h=null)})),void 0===d&&(d=null),h.send(d)}))}},function(e,t,n){"use strict";var i=n(19);e.exports=function(e,t,n,r,s){var o=new Error(e);return i(o,t,n,r,s)}},function(e,t,n){"use strict";var i=n(0);e.exports=function(e,t){t=t||{};var n={},r=["url","method","params","data"],s=["headers","auth","proxy"],o=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];i.forEach(r,(function(e){void 0!==t[e]&&(n[e]=t[e])})),i.forEach(s,(function(r){i.isObject(t[r])?n[r]=i.deepMerge(e[r],t[r]):void 0!==t[r]?n[r]=t[r]:i.isObject(e[r])?n[r]=i.deepMerge(e[r]):void 0!==e[r]&&(n[r]=e[r])})),i.forEach(o,(function(i){void 0!==t[i]?n[i]=t[i]:void 0!==e[i]&&(n[i]=e[i])}));var a=r.concat(s).concat(o),c=Object.keys(t).filter((function(e){return-1===a.indexOf(e)}));return i.forEach(c,(function(i){void 0!==t[i]?n[i]=t[i]:void 0!==e[i]&&(n[i]=e[i])})),n}},function(e,t,n){"use strict";function i(e){this.message=e}i.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},i.prototype.__CANCEL__=!0,e.exports=i},function(e,t,n){e.exports=n(28)},function(e,t,n){"use strict";var i=n(0),r=n(2),s=n(12),o=n(8);function a(e){var t=new s(e),n=r(s.prototype.request,t);return i.extend(n,s.prototype,t),i.extend(n,t),n}var c=a(n(5));c.Axios=s,c.create=function(e){return a(o(c.defaults,e))},c.Cancel=n(9),c.CancelToken=n(26),c.isCancel=n(4),c.all=function(e){return Promise.all(e)},c.spread=n(27),e.exports=c,e.exports.default=c},function(e,t,n){"use strict";var i=n(0),r=n(3),s=n(13),o=n(14),a=n(8);function c(e){this.defaults=e,this.interceptors={request:new s,response:new s}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[o,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=a(this.defaults,e),r(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},i.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(i.merge(n||{},{method:e,url:t}))}})),i.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,r){return this.request(i.merge(r||{},{method:e,url:t,data:n}))}})),e.exports=c},function(e,t,n){"use strict";var i=n(0);function r(){this.handlers=[]}r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){i.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=r},function(e,t,n){"use strict";var i=n(0),r=n(15),s=n(4),o=n(5);function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return a(e),e.headers=e.headers||{},e.data=r(e.data,e.headers,e.transformRequest),e.headers=i.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),i.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||o.adapter)(e).then((function(t){return a(e),t.data=r(t.data,t.headers,e.transformResponse),t}),(function(t){return s(t)||(a(e),t&&t.response&&(t.response.data=r(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,n){"use strict";var i=n(0);e.exports=function(e,t,n){return i.forEach(n,(function(n){e=n(e,t)})),e}},function(e,t){var n,i,r=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(e){n=s}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(e){i=o}}();var c,u=[],l=!1,d=-1;function p(){l&&c&&(l=!1,c.length?u=c.concat(u):d=-1,u.length&&h())}function h(){if(!l){var e=a(p);l=!0;for(var t=u.length;t;){for(c=u,u=[];++d<t;)c&&c[d].run();d=-1,t=u.length}c=null,l=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new f(e,t)),1!==u.length||l||a(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(e,t,n){"use strict";var i=n(0);e.exports=function(e,t){i.forEach(e,(function(n,i){i!==t&&i.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[i])}))}},function(e,t,n){"use strict";var i=n(7);e.exports=function(e,t,n){var r=n.config.validateStatus;!r||r(n.status)?e(n):t(i("Request failed with status code "+n.status,n.config,null,n.request,n))}},function(e,t,n){"use strict";e.exports=function(e,t,n,i,r){return e.config=t,n&&(e.code=n),e.request=i,e.response=r,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){"use strict";var i=n(21),r=n(22);e.exports=function(e,t){return e&&!i(t)?r(e,t):t}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var i=n(0),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,o={};return e?(i.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),t=i.trim(e.substr(0,s)).toLowerCase(),n=i.trim(e.substr(s+1)),t){if(o[t]&&r.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}})),o):o}},function(e,t,n){"use strict";var i=n(0);e.exports=i.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var i=e;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=i.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var i=n(0);e.exports=i.isStandardBrowserEnv()?{write:function(e,t,n,r,s,o){var a=[];a.push(e+"="+encodeURIComponent(t)),i.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),i.isString(r)&&a.push("path="+r),i.isString(s)&&a.push("domain="+s),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var i=n(9);function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new i(e),t(n.reason))}))}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r((function(t){e=t})),cancel:e}},e.exports=r},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i);const s={searchInput:document.querySelector(".search__field"),searchForm:document.querySelector(".search"),searchResList:document.querySelector(".results__list"),pageBtn:document.querySelector(".results__pages"),likeBtn:document.querySelector(".recipe"),recipeDOM:document.querySelector(".recipe__figure-title"),nutritionDOM:document.querySelector(".recipe__nutrition"),instructionsDOM:document.querySelector(".recipe__instructions-list"),ingredientsDOM:document.querySelector(".ingredients__content"),likesDOM:document.querySelector(".likes__field"),likesList:document.querySelector(".likes__list"),similarList:document.querySelector(".similar__list")},o=e=>{e.insertAdjacentHTML("afterbegin",'\n  <div class = "loader">\n  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">\n  <path d="M19.315 10h-2.372v-0.205c-0.108-4.434-3.724-7.996-8.169-7.996-4.515 0-8.174 3.672-8.174 8.201s3.659 8.199 8.174 8.199c1.898 0 3.645-0.65 5.033-1.738l-1.406-1.504c-1.016 0.748-2.27 1.193-3.627 1.193-3.386 0-6.131-2.754-6.131-6.15s2.745-6.15 6.131-6.15c3.317 0 6.018 2.643 6.125 5.945v0.205h-2.672l3.494 3.894 3.594-3.894z"></path>\n  </svg>\n  </div>\n  ')},a=()=>{document.querySelector(".loader").remove()},c=(e,t=27)=>{const n=[];let i=0;return e.length>t?(e.split(" ").forEach(e=>(i<=t&&(n.push(e),i+=e.length),i)),n.join(" ")+" ..."):e},u=e=>{const t=`\n    <li class="results__item">\n        <a class="results__link" href="#${e.id}">\n            <figure class="results__fig">\n                <img src="https://spoonacular.com/recipeImages/${e.image}" alt="${e.title}">\n            </figure>\n            <div class="results__data">\n                <h4 class="results__name">${c(e.title)}</h4>\n                <div class = "results__info">\n                <div class = "results__info-mins">\n                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class="results__info-icon">\n                <path d="M7.376 6.745c-0.447 0.275 1.197 4.242 1.598 4.888 0.35 0.569 1.093 0.742 1.658 0.394 0.568-0.352 0.745-1.094 0.395-1.66-0.397-0.648-3.205-3.898-3.651-3.622zM7.041 2.402c0.928-0.323 1.922-0.502 2.959-0.502s2.031 0.179 2.959 0.502c0.329 0.114 0.765-0.115 0.572-0.611-0.141-0.36-0.277-0.712-0.332-0.855-0.131-0.339-0.6-0.619-0.804-0.665-0.772-0.174-1.572-0.271-2.395-0.271s-1.623 0.097-2.396 0.271c-0.204 0.046-0.672 0.326-0.803 0.665-0.055 0.143-0.192 0.495-0.332 0.855-0.193 0.496 0.243 0.726 0.572 0.611zM19.098 3.186c-0.192-0.23-0.396-0.455-0.613-0.672-0.216-0.217-0.441-0.42-0.67-0.613-0.153-0.129-0.603-0.234-0.888 0.051s-1.648 1.647-1.648 1.647c0.402 0.288 0.793 0.605 1.155 0.966s0.677 0.752 0.966 1.155c0 0 1.363-1.362 1.647-1.647 0.286-0.286 0.181-0.735 0.051-0.887zM10 2.9c-4.475 0-8.101 3.626-8.101 8.1s3.626 8.101 8.101 8.101c4.473 0 8.1-3.626 8.1-8.101 0-4.473-3.627-8.1-8.1-8.1zM10 17.101c-3.368 0-6.1-2.731-6.1-6.1s2.731-6.1 6.1-6.1c3.369 0 6.101 2.731 6.101 6.1s-2.732 6.1-6.101 6.1z"></path>\n                </svg>\n                <span class="results__info-data results__info-data--minutes">${e.readyInMinutes} mins</span>\n              </div>\n\n            </div>\n            </div>\n        </a>\n    </li>`;s.searchResList.insertAdjacentHTML("beforeend",t)},l=(e,t)=>`\n<button class="btn-inline results__btn--${t}" data-goto=${"prev"===t?e-1:e+1}>\n  <span>Page ${"prev"===t?e-1:e+1}</span>\n  ${"prev"===t?'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class="search__icon">\n    <path d="M14 5v10l-9-5 9-5z"></path>\n    </svg>':'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class="search__icon">\n    <path d="M15 10l-9 5v-10l9 5z"></path>\n    </svg>'}\n</button>\n`,d=(e,t=1,n=5)=>{const i=(t-1)*n,r=t*n;e.slice(i,r).forEach(u),((e,t,n)=>{const i=Math.ceil(t/n);let r;1===e&&i>1?r=l(e,"next"):e<i?r=`${l(e,"prev")} ${l(e,"next")}`:e===i&&(r=l(e,"prev")),s.pageBtn.insertAdjacentHTML("afterbegin",r)})(t,e.length,n)},p=()=>{s.searchResList.innerHTML="",s.pageBtn.innerHTML=""};class h{constructor(e){this.query=e}async searchResults(){try{const e=await r()("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?diet="+this.query,{method:"GET",headers:{"x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com","x-rapidapi-key":"490e0fefc7msh541337c1d007052p15591fjsn39ade13d7142"}});this.searchRes=e.data.results}catch(e){console.log(e)}}}class f{constructor(e){this.id=e,this.ingredients=[],this.ingName=[],this.ingImage=[],this.ingAmt=[],this.ingUnit=[]}async getRecipes(){try{const e=await r()(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${this.id}/information`,{method:"GET",headers:{"x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com","x-rapidapi-key":"490e0fefc7msh541337c1d007052p15591fjsn39ade13d7142"}});this.title=e.data.title,this.image=e.data.image,this.time=parseInt(e.data.readyInMinutes,10),this.servings=parseInt(e.data.servings,10),this.likes=e.data.aggregateLikes,this.ingredients=e.data.extendedIngredients,this.ingName=e.data.extendedIngredients.map(e=>e.name),this.ingImage=e.data.extendedIngredients.map(e=>e.image),this.ingAmt=e.data.extendedIngredients.map(e=>parseFloat(e.amount)),this.ingUnit=e.data.extendedIngredients.map(e=>e.unit),e.data.analyzedInstructions.forEach(e=>{this.eachInstructions=e.steps.map(e=>e.step)})}catch(e){console.log(e)}}updateServings(e){const t="dec"===e?this.servings-1:this.servings+1,n="dec"===e?this.time-5:this.time+5;this.time=n,this.ingAmt=this.ingAmt.map(e=>Math.abs((e*t/this.servings).toFixed(1))),this.servings=t}}const m=e=>{const t=`<h2 class="heading-2">Ingredients</h2>\n      <div class="ingredients__info">\n      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="ingredients__info-icon" width="20" height="20" viewBox="0 0 20 20">\n      <path d="M10 4c1.104 0 2-0.896 2-2s-0.896-2-2-2-2 0.895-2 2c0 1.104 0.896 2 2 2zM15.978 11.583c-0.385-1.775-1.058-4.688-2.042-5.894-0.957-1.173-2.885-1.222-3.936-1.222v0c-1.051 0-2.979 0.049-3.936 1.222-0.984 1.206-1.657 4.119-2.042 5.894-0.213 0.983 1.154 1.344 1.511 0.355 0.531-1.473 0.941-2.71 1.839-3.736 0.472 2.907-1.27 7.966-1.372 10.798 0 0.552 0.448 1 1 1 0.426 0 0.79-0.266 0.934-0.642 0.457-1.587 2.066-6.003 2.066-6.003v0 0c0 0 1.609 4.416 2.066 6.003 0.144 0.376 0.508 0.642 0.934 0.642 0.552 0 1-0.448 1-1-0.102-2.832-1.844-7.891-1.372-10.797 0.898 1.026 1.308 2.263 1.839 3.736 0.356 0.988 1.724 0.627 1.511-0.356z"></path>\n      </svg>\n\n          <span class="ingredients__info-text">${e.servings>1?"servings : ":"serving : "}</span>\n          <span class="ingredients__info-data ingredients__info-data--people">${e.servings}</span>\n\n          <div class="ingredients__info-buttons">\n              <button class="btn-tiny btn-decrease">\n              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">\n              <path d="M10 1.6c-4.639 0-8.4 3.761-8.4 8.4s3.761 8.4 8.4 8.4 8.4-3.761 8.4-8.4c0-4.639-3.761-8.4-8.4-8.4zM15 11h-10v-2h10v2z"></path>\n              </svg>\n              </button>\n              <button class="btn-tiny btn-increase">\n              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">\n              <path d="M10 1.6c-4.639 0-8.4 3.761-8.4 8.4s3.761 8.4 8.4 8.4 8.4-3.761 8.4-8.4c0-4.639-3.761-8.4-8.4-8.4zM15 11h-4v4h-2v-4h-4v-2h4v-4h2v4h4v2z"></path>\n              </svg>\n              </button>\n          </div>\n    </div>\n  \n    <ul class="ingredients__list">\n    ${e.ingredients.map(e=>{return`<li class="ingredients__item">\n        <figure class="ingredients__fig">\n            <img src="https://spoonacular.com/cdn/ingredients_100x100/${(t=e).image}" alt="Test">\n        </figure>\n        <div class="ingredients__data">\n            <h3 class="ingredients__name">${t.name}</h3>\n            <span class="ingredients__amount">${Math.abs(t.amount.toFixed(2))}</span><span class="ingredients__unit">${t.unit}</p>\n        </div>\n      </li>`;var t})}\n    </ul>`;s.ingredientsDOM.insertAdjacentHTML("afterbegin",t)},g=e=>{document.querySelector(".ingredients__info-data--people").textContent=e.servings,document.querySelector(".recipe__info-data--minutes").textContent=e.time;document.querySelectorAll(".ingredients__amount").forEach((t,n)=>{t.textContent=e.ingAmt[n]})};class v{constructor(e){this.id=e}async getNutrition(){try{const e=await r()(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${this.id}/nutritionWidget.json`,{method:"GET",headers:{"x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com","x-rapidapi-key":"490e0fefc7msh541337c1d007052p15591fjsn39ade13d7142"}});this.calories=e.data.calories,this.carbs=e.data.carbs,this.fat=e.data.fat,this.protein=e.data.protein}catch(e){console.log(e)}}}class y{constructor(){this.like=[]}addLikes(e,t,n){const i={id:e,title:t,image:n};return this.like.push(i),this.persistLike(),i}deleteLikes(e){const t=this.like.findIndex(t=>t.id===e);this.like.splice(t,1),this.persistLike()}isLiked(e){return-1!==this.like.findIndex(t=>t.id===e)}getNumLikes(){return this.like.length}persistLike(){localStorage.setItem("likes",JSON.stringify(this.like))}readStorage(){const e=JSON.parse(localStorage.getItem("likes"));e&&(this.like=e)}}const w=e=>{document.querySelector(".recipe__love").innerHTML=e?'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class="header__likes">\n    <path d="M17.19 4.155c-1.672-1.534-4.383-1.534-6.055 0l-1.135 1.042-1.136-1.042c-1.672-1.534-4.382-1.534-6.054 0-1.881 1.727-1.881 4.52 0 6.246l7.19 6.599 7.19-6.599c1.88-1.726 1.88-4.52 0-6.246z"></path>\n    </svg>':'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class="header__likes">\n    <path d="M17.19 4.156c-1.672-1.535-4.383-1.535-6.055 0l-1.135 1.041-1.136-1.041c-1.672-1.535-4.382-1.535-6.054 0-1.881 1.726-1.881 4.519 0 6.245l7.19 6.599 7.19-6.599c1.88-1.726 1.88-4.52 0-6.245zM16.124 9.375l-6.124 5.715-6.125-5.715c-0.617-0.567-0.856-1.307-0.856-2.094s0.138-1.433 0.756-1.999c0.545-0.501 1.278-0.777 2.063-0.777s1.517 0.476 2.062 0.978l2.1 1.825 2.099-1.826c0.546-0.502 1.278-0.978 2.063-0.978s1.518 0.276 2.063 0.777c0.618 0.566 0.755 1.212 0.755 1.999s-0.238 1.528-0.856 2.095z"></path>\n    </svg>'},_=e=>{s.likesDOM.style.visibility=e>0?"visible":"hidden"},b=e=>{const t=`\n  <li>\n      <a class="likes__link" href="#${e.id}">\n          <figure class="likes__fig">\n              <img src="${e.image}" alt="Recipe Image">\n          </figure>\n          <div class="likes__data">\n              <h4 class="likes__name">${c(e.title)}</h4>\n          </div>\n      </a>\n  </li>\n  `;s.likesList.insertAdjacentHTML("beforeend",t)},x={},S=async()=>{const e=window.matchMedia("(max-width: 600px)"),t=window.matchMedia("(min-width: 601px)");e.matches?(document.querySelector(".results").style.visibility="visible",document.querySelector(".recipe").style.visibility="hidden",document.querySelector(".recipe__instructions-heading").style.visibility="hidden",document.querySelector(".ingredients").style.visibility="hidden",document.querySelector(".smallscr-btn").style.display="none"):t.matches&&(document.querySelector(".recipe").style.visibility="visible",document.querySelector(".recipe__instructions-heading").style.visibility="visible",document.querySelector(".ingredients").style.visibility="visible",document.querySelector(".smallscr-btn").style.display="none"),document.querySelector(".home").style.visibility="hidden";const n=s.searchInput.value;n&&(x.search=new h(n),s.searchInput.value="",p(),o(s.searchResList),await x.search.searchResults(),a(),d(x.search.searchRes),document.querySelector(".smallscr-btn").addEventListener("click",()=>{document.querySelector(".recipe").style.visibility="hidden",document.querySelector(".recipe__instructions-heading").style.visibility="hidden",document.querySelector(".ingredients").style.visibility="hidden",document.querySelector(".results").style.visibility="visible"}))};s.searchForm.addEventListener("submit",e=>{e.preventDefault(),S()}),s.pageBtn.addEventListener("click",e=>{const t=e.target.closest(".btn-inline");if(t){const e=parseInt(t.dataset.goto,10);p(),d(x.search.searchRes,e)}});window.addEventListener("hashchange",async()=>{const e=window.matchMedia("(max-width: 600px)"),t=window.matchMedia("(min-width: 601px)");e.matches?(document.querySelector(".results").style.visibility="hidden",document.querySelector(".recipe").style.visibility="visible",document.querySelector(".recipe__instructions-heading").style.visibility="visible",document.querySelector(".ingredients").style.visibility="visible",$(".smallscr-btn").delay(2e3).fadeIn()):t.matches&&(document.querySelector(".recipe").style.visibility="visible",document.querySelector(".recipe__instructions-heading").style.visibility="visible",document.querySelector(".ingredients").style.visibility="visible",document.querySelector(".smallscr-btn").style.display="none"),document.querySelector(".home").style.visibility="hidden";const n=window.location.hash.replace("#","");if(n){s.recipeDOM.innerHTML="",s.nutritionDOM.innerHTML="",s.instructionsDOM.innerHTML="",s.ingredientsDOM.innerHTML="",document.querySelector(".recipe__instructions-heading").style.visibility="hidden",o(s.recipeDOM),x.recipe=new f(n),x.nutrition=new v(n);try{x.search&&(e=>{document.querySelectorAll(".results__link").forEach(e=>e.classList.remove("results__link--active")),document.querySelector(`.results__link[href="#${e}"]`).classList.add("results__link--active")})(n),await x.recipe.getRecipes(),await x.nutrition.getNutrition(),a(),((e,t)=>{const n=`\n    <figure class="recipe__fig">\n        <img src="${e.image}" alt="Tomato" class="recipe__img">\n    </figure>\n    <h1 class="recipe__title">${e.title}</h1>\n    <div class="recipe__details">\n       <div class="recipe__info">\n       <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="recipe__info-icon" width="20" height="20" viewBox="0 0 20 20">\n       <path d="M7.376 6.745c-0.447 0.275 1.197 4.242 1.598 4.888 0.35 0.569 1.093 0.742 1.658 0.394 0.568-0.352 0.745-1.094 0.395-1.66-0.397-0.648-3.205-3.898-3.651-3.622zM7.041 2.402c0.928-0.323 1.922-0.502 2.959-0.502s2.031 0.179 2.959 0.502c0.329 0.114 0.765-0.115 0.572-0.611-0.141-0.36-0.277-0.712-0.332-0.855-0.131-0.339-0.6-0.619-0.804-0.665-0.772-0.174-1.572-0.271-2.395-0.271s-1.623 0.097-2.396 0.271c-0.204 0.046-0.672 0.326-0.803 0.665-0.055 0.143-0.192 0.495-0.332 0.855-0.193 0.496 0.243 0.726 0.572 0.611zM19.098 3.186c-0.192-0.23-0.396-0.455-0.613-0.672-0.216-0.217-0.441-0.42-0.67-0.613-0.153-0.129-0.603-0.234-0.888 0.051s-1.648 1.647-1.648 1.647c0.402 0.288 0.793 0.605 1.155 0.966s0.677 0.752 0.966 1.155c0 0 1.363-1.362 1.647-1.647 0.286-0.286 0.181-0.735 0.051-0.887zM10 2.9c-4.475 0-8.101 3.626-8.101 8.1s3.626 8.101 8.101 8.101c4.473 0 8.1-3.626 8.1-8.101 0-4.473-3.627-8.1-8.1-8.1zM10 17.101c-3.368 0-6.1-2.731-6.1-6.1s2.731-6.1 6.1-6.1c3.369 0 6.101 2.731 6.101 6.1s-2.732 6.1-6.101 6.1z"></path>\n       </svg>\n           <span class="recipe__info-text">prep time :</span>\n           <span class="recipe__info-data recipe__info-data--minutes">45</span>\n           <span class="recipe__info-text"> minutes</span>\n       </div>\n       <button class="recipe__love">\n       ${t?'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="header__likes" width="20" height="20" viewBox="0 0 20 20">\n<path d="M17.19 4.155c-1.672-1.534-4.383-1.534-6.055 0l-1.135 1.042-1.136-1.042c-1.672-1.534-4.382-1.534-6.054 0-1.881 1.727-1.881 4.52 0 6.246l7.19 6.599 7.19-6.599c1.88-1.726 1.88-4.52 0-6.246z"></path>\n</svg>':'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="header__likes" width="20" height="20" viewBox="0 0 20 20">\n<path d="M17.19 4.156c-1.672-1.535-4.383-1.535-6.055 0l-1.135 1.041-1.136-1.041c-1.672-1.535-4.382-1.535-6.054 0-1.881 1.726-1.881 4.519 0 6.245l7.19 6.599 7.19-6.599c1.88-1.726 1.88-4.52 0-6.245zM16.124 9.375l-6.124 5.715-6.125-5.715c-0.617-0.567-0.856-1.307-0.856-2.094s0.138-1.433 0.756-1.999c0.545-0.501 1.278-0.777 2.063-0.777s1.517 0.476 2.062 0.978l2.1 1.825 2.099-1.826c0.546-0.502 1.278-0.978 2.063-0.978s1.518 0.276 2.063 0.777c0.618 0.566 0.755 1.212 0.755 1.999s-0.238 1.528-0.856 2.095z"></path>\n</svg>'}\n       </button>\n </div>`;s.recipeDOM.insertAdjacentHTML("afterbegin",n)})(x.recipe,x.like.isLiked(n)),r=x.recipe.time,document.querySelector(".recipe__info-data--minutes").textContent=r,(e=>{const t=`\n  <span class="recipe__nutrition-item">${e.calories} Calories</span>\n  <span class="recipe__nutrition-item">${e.protein} Protein</span>\n  <span class="recipe__nutrition-item">${e.fat} Total Fat</span>\n  <span class="recipe__nutrition-item">${e.carbs} Carbs</span>\n  `;s.nutritionDOM.insertAdjacentHTML("afterbegin",t)})(x.nutrition),i=x.recipe.eachInstructions,document.querySelector(".recipe__instructions-heading").style.visibility="visible",i.forEach(e=>{const t=`<li class="recipe__instructions-item">\n    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="recipe__icon" width="20" height="20" viewBox="0 0 20 20">\n    <path d="M8.294 16.998c-0.435 0-0.847-0.203-1.111-0.553l-3.573-4.721c-0.465-0.613-0.344-1.486 0.27-1.951 0.615-0.467 1.488-0.344 1.953 0.27l2.351 3.104 5.911-9.492c0.407-0.652 1.267-0.852 1.921-0.445s0.854 1.266 0.446 1.92l-6.984 11.21c-0.242 0.391-0.661 0.635-1.12 0.656-0.022 0.002-0.042 0.002-0.064 0.002z"></path>\n    </svg>${e}</li>`;s.instructionsDOM.insertAdjacentHTML("beforeend",t)}),m(x.recipe)}catch(e){alert("Error processing the recipe !")}}var i,r});const k=()=>{const e=x.recipe.id;if(x.like||(x.like=new y),x.like.isLiked(e))x.like.deleteLikes(e),w(!1),t=e,document.querySelector(`.likes__link[href="#${t}"]`).parentElement.remove();else{const e=x.like.addLikes(x.recipe.id,x.recipe.title,x.recipe.image);w(!0),b(e)}var t;_(x.like.getNumLikes())};s.ingredientsDOM.addEventListener("click",e=>{e.target.matches(".btn-decrease, .btn-decrease *")?x.recipe.servings>1&&(x.recipe.updateServings("dec"),g(x.recipe)):e.target.matches(".btn-increase, .btn-increase *")&&(x.recipe.updateServings("inc"),g(x.recipe))}),s.likeBtn.addEventListener("click",e=>{e.target.matches(".recipe__love, .recipe__love *")&&k()}),window.addEventListener("load",()=>{document.querySelector(".smallscr-btn").style.display="none",x.like=new y,x.like.readStorage(),_(x.like.getNumLikes()),x.like.like.forEach(e=>b(e))});window.addEventListener("resize",()=>{const e=window.matchMedia("(max-width: 600px)"),t=window.matchMedia("(min-width: 601px)");e.matches?(document.querySelector(".results").style.visibility="hidden",document.querySelector(".recipe").style.visibility="visible",document.querySelector(".ingredients").style.visibility="visible",document.querySelector(".smallscr-btn").style.display="block"):t.matches&&(document.querySelector(".results").style.visibility="visible",document.querySelector(".smallscr-btn").style.display="none")}),$(document).ready((function(){$("#autoplay").lightSlider({autoWidth:!1,pager:!1,item:1,auto:!0,loop:!0,speed:2e3,pause:4e3,pauseOnHover:!0})})),$((function(){$("#year").text((new Date).getFullYear())}))}]);