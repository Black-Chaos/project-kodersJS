var ot=Object.defineProperty;var st=(e,t,n)=>t in e?ot(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var B=(e,t,n)=>(st(e,typeof t!="symbol"?t+"":t,n),n);import{a as it,b as at,c as ct}from"./funds-4a268d5f.js";function Pe(e,t){return function(){return e.apply(t,arguments)}}const{toString:lt}=Object.prototype,{getPrototypeOf:le}=Object,G=(e=>t=>{const n=lt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),O=e=>(e=e.toLowerCase(),t=>G(t)===e),X=e=>t=>typeof t===e,{isArray:x}=Array,D=X("undefined");function ut(e){return e!==null&&!D(e)&&e.constructor!==null&&!D(e.constructor)&&E(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Fe=O("ArrayBuffer");function ft(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Fe(e.buffer),t}const dt=X("string"),E=X("function"),_e=X("number"),Y=e=>e!==null&&typeof e=="object",pt=e=>e===!0||e===!1,q=e=>{if(G(e)!=="object")return!1;const t=le(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ht=O("Date"),mt=O("File"),yt=O("Blob"),bt=O("FileList"),gt=e=>Y(e)&&E(e.pipe),Et=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||E(e.append)&&((t=G(e))==="formdata"||t==="object"&&E(e.toString)&&e.toString()==="[object FormData]"))},wt=O("URLSearchParams"),St=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function j(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),x(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let l;for(r=0;r<i;r++)l=s[r],t.call(null,e[l],l,e)}}function Ue(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const De=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),je=e=>!D(e)&&e!==De;function oe(){const{caseless:e}=je(this)&&this||{},t={},n=(r,o)=>{const s=e&&Ue(t,o)||o;q(t[s])&&q(r)?t[s]=oe(t[s],r):q(r)?t[s]=oe({},r):x(r)?t[s]=r.slice():t[s]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&j(arguments[r],n);return t}const Ot=(e,t,n,{allOwnKeys:r}={})=>(j(t,(o,s)=>{n&&E(o)?e[s]=Pe(o,n):e[s]=o},{allOwnKeys:r}),e),Rt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),At=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Tt=(e,t,n,r)=>{let o,s,i;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&le(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ct=e=>{if(!e)return null;if(x(e))return e;let t=e.length;if(!_e(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Lt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&le(Uint8Array)),xt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},Nt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Bt=O("HTMLFormElement"),Pt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),we=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ft=O("RegExp"),Me=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};j(n,(o,s)=>{let i;(i=t(o,s,e))!==!1&&(r[s]=i||o)}),Object.defineProperties(e,r)},_t=e=>{Me(e,(t,n)=>{if(E(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(E(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ut=(e,t)=>{const n={},r=o=>{o.forEach(s=>{n[s]=!0})};return x(e)?r(e):r(String(e).split(t)),n},Dt=()=>{},jt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),ee="abcdefghijklmnopqrstuvwxyz",Se="0123456789",Ie={DIGIT:Se,ALPHA:ee,ALPHA_DIGIT:ee+ee.toUpperCase()+Se},Mt=(e=16,t=Ie.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function It(e){return!!(e&&E(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Ht=e=>{const t=new Array(10),n=(r,o)=>{if(Y(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const s=x(r)?[]:{};return j(r,(i,l)=>{const d=n(i,o+1);!D(d)&&(s[l]=d)}),t[o]=void 0,s}}return r};return n(e,0)},qt=O("AsyncFunction"),$t=e=>e&&(Y(e)||E(e))&&E(e.then)&&E(e.catch),a={isArray:x,isArrayBuffer:Fe,isBuffer:ut,isFormData:Et,isArrayBufferView:ft,isString:dt,isNumber:_e,isBoolean:pt,isObject:Y,isPlainObject:q,isUndefined:D,isDate:ht,isFile:mt,isBlob:yt,isRegExp:Ft,isFunction:E,isStream:gt,isURLSearchParams:wt,isTypedArray:Lt,isFileList:bt,forEach:j,merge:oe,extend:Ot,trim:St,stripBOM:Rt,inherits:At,toFlatObject:Tt,kindOf:G,kindOfTest:O,endsWith:kt,toArray:Ct,forEachEntry:xt,matchAll:Nt,isHTMLForm:Bt,hasOwnProperty:we,hasOwnProp:we,reduceDescriptors:Me,freezeMethods:_t,toObjectSet:Ut,toCamelCase:Pt,noop:Dt,toFiniteNumber:jt,findKey:Ue,global:De,isContextDefined:je,ALPHABET:Ie,generateString:Mt,isSpecCompliantForm:It,toJSONObject:Ht,isAsyncFn:qt,isThenable:$t};function m(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const He=m.prototype,qe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{qe[e]={value:e}});Object.defineProperties(m,qe);Object.defineProperty(He,"isAxiosError",{value:!0});m.from=(e,t,n,r,o,s)=>{const i=Object.create(He);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},l=>l!=="isAxiosError"),m.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const vt=null;function se(e){return a.isPlainObject(e)||a.isArray(e)}function $e(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Oe(e,t,n){return e?e.concat(t).map(function(o,s){return o=$e(o),!n&&s?"["+o+"]":o}).join(n?".":""):t}function zt(e){return a.isArray(e)&&!e.some(se)}const Jt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Q(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,R){return!a.isUndefined(R[h])});const r=n.metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function c(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,h,R){let w=f;if(f&&!R&&typeof f=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&zt(f)||(a.isFileList(f)||a.endsWith(h,"[]"))&&(w=a.toArray(f)))return h=$e(h),w.forEach(function(H,rt){!(a.isUndefined(H)||H===null)&&t.append(i===!0?Oe([h],rt,s):i===null?h:h+"[]",c(H))}),!1}return se(f)?!0:(t.append(Oe(R,h,s),c(f)),!1)}const p=[],g=Object.assign(Jt,{defaultVisitor:u,convertValue:c,isVisitable:se});function y(f,h){if(!a.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(f),a.forEach(f,function(w,C){(!(a.isUndefined(w)||w===null)&&o.call(t,w,a.isString(C)?C.trim():C,h,g))===!0&&y(w,h?h.concat(C):[C])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function Re(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ue(e,t){this._pairs=[],e&&Q(e,this,t)}const ve=ue.prototype;ve.append=function(t,n){this._pairs.push([t,n])};ve.toString=function(t){const n=t?function(r){return t.call(this,r,Re)}:Re;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function Vt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ze(e,t,n){if(!t)return e;const r=n&&n.encode||Vt,o=n&&n.serialize;let s;if(o?s=o(t,n):s=a.isURLSearchParams(t)?t.toString():new ue(t,n).toString(r),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Wt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ae=Wt,Je={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Kt=typeof URLSearchParams<"u"?URLSearchParams:ue,Gt=typeof FormData<"u"?FormData:null,Xt=typeof Blob<"u"?Blob:null,Yt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Qt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),S={isBrowser:!0,classes:{URLSearchParams:Kt,FormData:Gt,Blob:Xt},isStandardBrowserEnv:Yt,isStandardBrowserWebWorkerEnv:Qt,protocols:["http","https","file","blob","url","data"]};function Zt(e,t){return Q(e,new S.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,s){return S.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function en(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function tn(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function Ve(e){function t(n,r,o,s){let i=n[s++];const l=Number.isFinite(+i),d=s>=n.length;return i=!i&&a.isArray(o)?o.length:i,d?(a.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!l):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),t(n,r,o[i],s)&&a.isArray(o[i])&&(o[i]=tn(o[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,o)=>{t(en(r),o,n,0)}),n}return null}function nn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const fe={transitional:Je,adapter:S.isNode?"http":"xhr",transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o&&o?JSON.stringify(Ve(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Zt(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return Q(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return s||o?(n.setContentType("application/json",!1),nn(t)):t}],transformResponse:[function(t){const n=this.transitional||fe.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||o)){const i=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:S.classes.FormData,Blob:S.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{fe.headers[e]={}});const de=fe,rn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),on=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!n||t[n]&&rn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Te=Symbol("internals");function P(e){return e&&String(e).trim().toLowerCase()}function $(e){return e===!1||e==null?e:a.isArray(e)?e.map($):String(e)}function sn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const an=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function te(e,t,n,r,o){if(a.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function cn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function ln(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,s,i){return this[r].call(this,t,o,s,i)},configurable:!0})})}class Z{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function s(l,d,c){const u=P(d);if(!u)throw new Error("header name must be a non-empty string");const p=a.findKey(o,u);(!p||o[p]===void 0||c===!0||c===void 0&&o[p]!==!1)&&(o[p||d]=$(l))}const i=(l,d)=>a.forEach(l,(c,u)=>s(c,u,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!an(t)?i(on(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=P(t),t){const r=a.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return sn(o);if(a.isFunction(n))return n.call(this,o,r);if(a.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=P(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||te(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function s(i){if(i=P(i),i){const l=a.findKey(r,i);l&&(!n||te(r,r[l],l,n))&&(delete r[l],o=!0)}}return a.isArray(t)?t.forEach(s):s(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const s=n[r];(!t||te(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const n=this,r={};return a.forEach(this,(o,s)=>{const i=a.findKey(r,s);if(i){n[i]=$(o),delete n[s];return}const l=t?cn(s):String(s).trim();l!==s&&delete n[s],n[l]=$(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Te]=this[Te]={accessors:{}}).accessors,o=this.prototype;function s(i){const l=P(i);r[l]||(ln(o,i),r[l]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}}Z.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(Z.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(Z);const A=Z;function ne(e,t){const n=this||de,r=t||n,o=A.from(r.headers);let s=r.data;return a.forEach(e,function(l){s=l.call(n,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function We(e){return!!(e&&e.__CANCEL__)}function M(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(M,m,{__CANCEL__:!0});function un(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const fn=S.isStandardBrowserEnv?function(){return{write:function(n,r,o,s,i,l){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(o)&&d.push("expires="+new Date(o).toGMTString()),a.isString(s)&&d.push("path="+s),a.isString(i)&&d.push("domain="+i),l===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function dn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function pn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ke(e,t){return e&&!dn(t)?pn(e,t):t}const hn=S.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(s){let i=s;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(i){const l=a.isString(i)?o(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function mn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function yn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(d){const c=Date.now(),u=r[s];i||(i=c),n[o]=d,r[o]=c;let p=s,g=0;for(;p!==o;)g+=n[p++],p=p%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),c-i<t)return;const y=u&&c-u;return y?Math.round(g*1e3/y):void 0}}function ke(e,t){let n=0;const r=yn(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,l=s-n,d=r(l),c=s<=i;n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:l,rate:d||void 0,estimated:d&&i&&c?(i-s)/d:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const bn=typeof XMLHttpRequest<"u",gn=bn&&function(e){return new Promise(function(n,r){let o=e.data;const s=A.from(e.headers).normalize(),i=e.responseType;let l;function d(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}a.isFormData(o)&&(S.isStandardBrowserEnv||S.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(y+":"+f))}const u=Ke(e.baseURL,e.url);c.open(e.method.toUpperCase(),ze(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const y=A.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};un(function(w){n(w),d()},function(w){r(w),d()},h),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||Je;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new m(f,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},S.isStandardBrowserEnv){const y=(e.withCredentials||hn(u))&&e.xsrfCookieName&&fn.read(e.xsrfCookieName);y&&s.set(e.xsrfHeaderName,y)}o===void 0&&s.setContentType(null),"setRequestHeader"in c&&a.forEach(s.toJSON(),function(f,h){c.setRequestHeader(h,f)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",ke(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",ke(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=y=>{c&&(r(!y||y.type?new M(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const g=mn(u);if(g&&S.protocols.indexOf(g)===-1){r(new m("Unsupported protocol "+g+":",m.ERR_BAD_REQUEST,e));return}c.send(o||null)})},v={http:vt,xhr:gn};a.forEach(v,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ge={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=a.isString(n)?v[n.toLowerCase()]:n));o++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(v,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:v};function re(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new M(null,e)}function Ce(e){return re(e),e.headers=A.from(e.headers),e.data=ne.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ge.getAdapter(e.adapter||de.adapter)(e).then(function(r){return re(e),r.data=ne.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return We(r)||(re(e),r&&r.response&&(r.response.data=ne.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const Le=e=>e instanceof A?e.toJSON():e;function L(e,t){t=t||{};const n={};function r(c,u,p){return a.isPlainObject(c)&&a.isPlainObject(u)?a.merge.call({caseless:p},c,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function o(c,u,p){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c,p)}else return r(c,u,p)}function s(c,u){if(!a.isUndefined(u))return r(void 0,u)}function i(c,u){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function l(c,u,p){if(p in t)return r(c,u);if(p in e)return r(void 0,c)}const d={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(c,u)=>o(Le(c),Le(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const p=d[u]||o,g=p(e[u],t[u],u);a.isUndefined(g)&&p!==l||(n[u]=g)}),n}const Xe="1.5.0",pe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{pe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const xe={};pe.transitional=function(t,n,r){function o(s,i){return"[Axios v"+Xe+"] Transitional option '"+s+"'"+i+(r?". "+r:"")}return(s,i,l)=>{if(t===!1)throw new m(o(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!xe[i]&&(xe[i]=!0,console.warn(o(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,i,l):!0}};function En(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const l=e[s],d=l===void 0||i(l,s,e);if(d!==!0)throw new m("option "+s+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+s,m.ERR_BAD_OPTION)}}const ie={assertOptions:En,validators:pe},T=ie.validators;class J{constructor(t){this.defaults=t,this.interceptors={request:new Ae,response:new Ae}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=L(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:s}=n;r!==void 0&&ie.assertOptions(r,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1),o!=null&&(a.isFunction(o)?n.paramsSerializer={serialize:o}:ie.assertOptions(o,{encode:T.function,serialize:T.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=s&&a.merge(s.common,s[n.method]);s&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete s[f]}),n.headers=A.concat(i,s);const l=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,l.unshift(h.fulfilled,h.rejected))});const c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let u,p=0,g;if(!d){const f=[Ce.bind(this),void 0];for(f.unshift.apply(f,l),f.push.apply(f,c),g=f.length,u=Promise.resolve(n);p<g;)u=u.then(f[p++],f[p++]);return u}g=l.length;let y=n;for(p=0;p<g;){const f=l[p++],h=l[p++];try{y=f(y)}catch(R){h.call(this,R);break}}try{u=Ce.call(this,y)}catch(f){return Promise.reject(f)}for(p=0,g=c.length;p<g;)u=u.then(c[p++],c[p++]);return u}getUri(t){t=L(this.defaults,t);const n=Ke(t.baseURL,t.url);return ze(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){J.prototype[t]=function(n,r){return this.request(L(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(s,i,l){return this.request(L(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}J.prototype[t]=n(),J.prototype[t+"Form"]=n(!0)});const z=J;class he{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(o=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](o);r._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(l=>{r.subscribe(l),s=l}).then(o);return i.cancel=function(){r.unsubscribe(s)},i},t(function(s,i,l){r.reason||(r.reason=new M(s,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new he(function(o){t=o}),cancel:t}}}const wn=he;function Sn(e){return function(n){return e.apply(null,n)}}function On(e){return a.isObject(e)&&e.isAxiosError===!0}const ae={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ae).forEach(([e,t])=>{ae[t]=e});const Rn=ae;function Ye(e){const t=new z(e),n=Pe(z.prototype.request,t);return a.extend(n,z.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Ye(L(e,o))},n}const b=Ye(de);b.Axios=z;b.CanceledError=M;b.CancelToken=wn;b.isCancel=We;b.VERSION=Xe;b.toFormData=Q;b.AxiosError=m;b.Cancel=b.CanceledError;b.all=function(t){return Promise.all(t)};b.spread=Sn;b.isAxiosError=On;b.mergeConfig=L;b.AxiosHeaders=A;b.formToJSON=e=>Ve(a.isHTMLForm(e)?new FormData(e):e);b.getAdapter=Ge.getAdapter;b.HttpStatusCode=Rn;b.default=b;const F=b;F.defaults.baseURL="https://books-backend.p.goit.global";class me{constructor(){B(this,"RESOURCE","/books");B(this,"TOP_BOOKS",`${this.RESOURCE}/top-books`);B(this,"CATEGORY_LIST",`${this.RESOURCE}/category-list`);B(this,"CATEGORY",`${this.RESOURCE}/category`)}async getCategoryList(){return await F(this.CATEGORY_LIST).then(({data:t})=>t)}async getTopBooks(){return await F(this.TOP_BOOKS).then(({data:t})=>t)}async getBookByCategory(t){return await F(`${this.CATEGORY}?category=${t}`).then(({data:n})=>n)}async getBookById(t){return await F(`${this.RESOURCE}/${t}`).then(({data:n})=>n)}}const N=document.querySelector(".container-info-book"),V=document.querySelector(".popup-backdrop"),ye=N.querySelector(".close-btn");let W={},U=!1;const _=JSON.parse(localStorage.getItem("shoppingList"))||[];function An(e){U=_.some(t=>t._id===e._id),Qe(),console.log(e._id)}const K=N.querySelector(".add-btn"),Ne=N.querySelector("#shoppingListMessage");function Qe(){U?(K.textContent="Remove from the shopping list",Ne.textContent="Congratulations! You have added the book to the shopping list. To delete, press the button 'Remove from the shopping list'."):(K.textContent="Add to shopping list",Ne.textContent="")}K.addEventListener("click",function(){U?(_.splice(_.findIndex(e=>e.id===W.id),1),U=!1):(_.push(W),U=!0),localStorage.setItem("shoppingList",JSON.stringify(_)),K.blur(),Qe()});function I(){document.body.classList.remove("scroll-lock"),N.classList.remove("activeModal"),V.classList.remove("activeModal"),document.removeEventListener("keydown",Ze),ye.removeEventListener("click",I)}function Ze(){}ye.addEventListener("click",e=>{e.target===N&&I()});document.addEventListener("keydown",e=>{e.key==="Escape"&&I()});V.addEventListener("click",function(e){e.target===V&&I()});function Tn(e){new me().getBookById(e).then(n=>{W=n,An(W);const r=document.querySelector(".content");r.innerHTML=kn(n),N.classList.add("activeModal"),V.classList.add("activeModal"),document.body.classList.add("scroll-lock"),document.addEventListener("keydown",Ze),ye.addEventListener("click",I),console.dir(n)}).catch(n=>console.log(n))}function kn(e){return`<img class="img bookim" src="${e.book_image}" alt="${e.title}" />
        <div class="text-content">
            <h3 class="book-tittle">${e.title}</h3>
            <p class="book-authoor">${e.author}</p>
            <p class="book-descripption">${e.description?e.description:"N/A"}</p>
            <ul class="list-shops">
                <li class="trading-platform amazon-platform">

                    <a href="${e.buy_links[0].url}" target="_blank" rel="noopener nofollow">
                        <img  src="${it}" alt="Amazon logo" width="62" height="19" />

                    </a>
                </li> 
                <li class="trading-platform">

                    <a href="${e.buy_links[1].url}" target="_blank" rel="noopener nofollow">
                        <img  src="${at}" alt="Apple books logo" width="33" height="32" />
                    </a>
                </li>
                <li class="trading-platform">
                    <a href="${e.buy_links[4].url}" target="_blank" rel="noopener nofollow">
                        <img  src="${ct}" alt="Book shop logo" width="38" height="36" />

                    </a>
                </li>
            </ul>
        </div> `}const be=new me,k=document.querySelector(".category-wrapper");et();function et(){try{be.getTopBooks().then(e=>{k.innerHTML="",Cn(),Ln(e)})}catch(e){console.log(e)}}function Cn(){k.insertAdjacentHTML("beforeend",'<h1 class = "main-title">Best Sellers <span class = "main-title-span">Books</span></h1>')}function Ln(e){e.map(({list_name:t,books:n})=>{const r=xn(n);Nn(t,r)}).join("")}function xn(e){return e.length>0?e.map(({book_image:t,title:n,author:r,_id:o})=>ge(t,n,r,o)).join(""):tt()}function tt(){return`<li class = "cork">
            <div class="cork-wraper-svg">
            <svg class="cork-svg">
              <use class="cork-use" href="./img/icons.svg#icon-cork-book"></use>
            </svg>
            <p class = "cork-text">Sorry, the book will be added later...</p>
            </div>
        </li>`}function Nn(e,t){const n=`<div class = "wrapper-for-genre">
                          <h2 class = "list-name">${e}</h2>
                          <ul class="category-list">${t}</ul>
                          <button class="button" type="button">See More</button>
                        </div>`;k.insertAdjacentHTML("beforeend",n),document.querySelector(".category-list").addEventListener("click",nt);const o=document.querySelector(".button");t.includes('<li class = "cork">')&&o.classList.add("is-hidden")}k.addEventListener("click",Bn);function Bn(e){if(e.target.nodeName==="BUTTON"){const t=e.target.parentNode.firstElementChild.textContent,n=e.target.previousElementSibling,r=n.children;if(e.target.textContent==="See More")n.innerHTML="",Pn(t,n),e.target.textContent="See Less";else for(let o=0;o<r.length;o++)o>4&&(r[o].classList="items-is-hidden",e.target.textContent="See More")}}function Pn(e,t){try{be.getBookByCategory(e).then(n=>{Fn(n,t)})}catch(n){console.log(n)}}function Fn(e,t){e.map(({book_image:n,title:r,author:o,_id:s})=>{const i=ge(n,r,o,s);t.insertAdjacentHTML("beforeend",i)}).join("")}function _n(e){try{be.getBookByCategory(e).then(t=>{k.innerHTML="",Un(e),Dn(t)})}catch(t){console.log(t)}}function Un(e){const t=e.split(" "),n=t.splice(length-1);k.insertAdjacentHTML("beforeend",`<h1 class="main-title">${t.join(" ")} <span class = "main-title-span">${n}</span></h1>`)}function Dn(e){if(e.length>0){let t="";e.map(({book_image:n,title:r,author:o,_id:s})=>{const i=ge(n,r,o,s);t+=i}),Be(t)}else{const t=tt();Be(t)}}function ge(e,t,n,r){const o=`<li class = "wrapper">
              <a href="#" class="link" id="${r}">
                <img class="img" src="${e}">
                <h3 class = "book-title">${t}</h3>
                <p class = "book-author">${n}</p>
              </a>
          </li>`;return document.querySelector(".link"),o}function Be(e){const t=`<ul class="category-list">${e}</ul>`;k.insertAdjacentHTML("beforeend",t),document.querySelector(".category-list").addEventListener("click",nt)}function nt(e){e.preventDefault(),e.target.parentNode.nodeName==="A"&&e.target.parentNode.id}const ce=document.getElementById("btn-to-top");ce.addEventListener("click",Mn);window.onscroll=function(){jn()};function jn(){document.body.scrollTop>300||document.documentElement.scrollTop>300?ce.style.display="block":ce.style.display="none"}function Mn(){window.scrollBy({top:0,behavior:"smooth"})}const In=document.querySelector(".category-wrapper");In.addEventListener("click",e=>{if(e.target.closest(".link")){const t=e.target.closest(".link").getAttribute("id");Tn(t)}});const Ee=document.querySelector(".categories-elements"),Hn=new me;qn();function qn(){Hn.getCategoryList().then(e=>{const t=e.map(({list_name:n})=>`<li class="categories-list"><a class="category-link" href="#">${n}</a></li>`).sort().join("");Ee.insertAdjacentHTML("beforeend",t)}).catch(e=>console.log(e))}Ee.addEventListener("click",$n);function $n(e){if(e.preventDefault(),e.target.nodeName==="A"&&!e.target.classList.contains("active")){if(Ee.querySelector(".active").classList.remove("active"),e.target.classList.add("active"),e.target.textContent==="All categories"){et();return}_n(e.target.textContent)}}
