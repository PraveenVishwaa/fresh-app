import{C as b,D as C,H as j,K as M,L as R,M as O,N as h,U as P,V as N,W as J,ba as _,d as m,da as A,ea as G,f as d,g as w,ga as H,h as v,ha as U,i as u,ia as F,j as g,ja as W,ka as $,l as E,la as B,m as k,na as L,p as c,q as T,r as x,s as p,t as I,u as S,v as y,x as D}from"./chunk-WPYDPRXY.js";var f=new x("JWT_OPTIONS"),K=(()=>{class r{constructor(e=null){this.tokenGetter=e&&e.tokenGetter||function(){}}urlBase64Decode(e){let t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:{t+="==";break}case 3:{t+="=";break}default:throw new Error("Illegal base64url string!")}return this.b64DecodeUnicode(t)}b64decode(e){let t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o="";if(e=String(e).replace(/=+$/,""),e.length%4===1)throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");for(let i=0,a,s,te=0;s=e.charAt(te++);~s&&(a=i%4?a*64+s:s,i++%4)?o+=String.fromCharCode(255&a>>(-2*i&6)):0)s=t.indexOf(s);return o}b64DecodeUnicode(e){return decodeURIComponent(Array.prototype.map.call(this.b64decode(e),t=>"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)).join(""))}decodeToken(e=this.tokenGetter()){return e instanceof Promise?e.then(t=>this._decodeToken(t)):this._decodeToken(e)}_decodeToken(e){if(!e||e==="")return null;let t=e.split(".");if(t.length!==3)throw new Error("The inspected token doesn't appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more.");let o=this.urlBase64Decode(t[1]);if(!o)throw new Error("Cannot decode the token.");return JSON.parse(o)}getTokenExpirationDate(e=this.tokenGetter()){return e instanceof Promise?e.then(t=>this._getTokenExpirationDate(t)):this._getTokenExpirationDate(e)}_getTokenExpirationDate(e){let t;if(t=this.decodeToken(e),!t||!t.hasOwnProperty("exp"))return null;let o=new Date(0);return o.setUTCSeconds(t.exp),o}isTokenExpired(e=this.tokenGetter(),t){return e instanceof Promise?e.then(o=>this._isTokenExpired(o,t)):this._isTokenExpired(e,t)}_isTokenExpired(e,t){if(!e||e==="")return!0;let o=this.getTokenExpirationDate(e);return t=t||0,o===null?!1:!(o.valueOf()>new Date().valueOf()+t*1e3)}getAuthScheme(e,t){return typeof e=="function"?e(t):e}}return r.\u0275fac=function(e){return new(e||r)(p(f))},r.\u0275prov=c({token:r,factory:r.\u0275fac}),r})(),z=r=>r instanceof Promise?g(()=>r):d(r),re=(()=>{class r{constructor(e,t,o){this.jwtHelper=t,this.document=o,this.standardPorts=["80","443"],this.tokenGetter=e.tokenGetter,this.headerName=e.headerName||"Authorization",this.authScheme=e.authScheme||e.authScheme===""?e.authScheme:"Bearer ",this.allowedDomains=e.allowedDomains||[],this.disallowedRoutes=e.disallowedRoutes||[],this.throwNoTokenError=e.throwNoTokenError||!1,this.skipWhenExpired=e.skipWhenExpired}isAllowedDomain(e){let t=new URL(e.url,this.document.location.origin);if(t.host===this.document.location.host)return!0;let o=`${t.hostname}${t.port&&!this.standardPorts.includes(t.port)?":"+t.port:""}`;return this.allowedDomains.findIndex(i=>typeof i=="string"?i===o:i instanceof RegExp?i.test(o):!1)>-1}isDisallowedRoute(e){let t=new URL(e.url,this.document.location.origin);return this.disallowedRoutes.findIndex(o=>{if(typeof o=="string"){let i=new URL(o,this.document.location.origin);return i.hostname===t.hostname&&i.pathname===t.pathname}return o instanceof RegExp?o.test(e.url):!1})>-1}handleInterception(e,t,o){let i=this.jwtHelper.getAuthScheme(this.authScheme,t);if(!e&&this.throwNoTokenError)throw new Error("Could not get token from tokenGetter function.");let a=d(!1);return this.skipWhenExpired&&(a=e?z(this.jwtHelper.isTokenExpired(e)):d(!0)),e?a.pipe(v(s=>s&&this.skipWhenExpired?t.clone():t.clone({setHeaders:{[this.headerName]:`${i}${e}`}})),u(s=>o.handle(s))):o.handle(t)}intercept(e,t){if(!this.isAllowedDomain(e)||this.isDisallowedRoute(e))return t.handle(e);let o=this.tokenGetter(e);return z(o).pipe(u(i=>this.handleInterception(i,e,t)))}}return r.\u0275fac=function(e){return new(e||r)(p(f),p(K),p(_))},r.\u0275prov=c({token:r,factory:r.\u0275fac}),r})(),Q=(()=>{class r{constructor(e){if(e)throw new Error("JwtModule is already loaded. It should only be imported in your application's main module.")}static forRoot(e){return{ngModule:r,providers:[{provide:H,useClass:re,multi:!0},e.jwtOptionsProvider||{provide:f,useValue:e.config},K]}}}return r.\u0275fac=function(e){return new(e||r)(p(r,12))},r.\u0275mod=y({type:r}),r.\u0275inj=T({}),r})();var X=[{path:"",loadChildren:()=>import("./chunk-GN2IZA6P.js").then(r=>r.AuthModule)},{path:"main",loadChildren:()=>import("./chunk-NW6W2WOS.js").then(r=>r.MainModule)}];var l=(()=>{let n=class n{constructor(){this.isShowSpinner=new m(!1)}};n.\u0275fac=function(o){return new(o||n)},n.\u0275prov=c({token:n,factory:n.\u0275fac,providedIn:"root"});let r=n;return r})();var Y=(r,n)=>{let e=I(l).isShowSpinner;return e.next(!0),n(r).pipe(k(()=>{e.next(!1)}))};var Z=(r,n)=>n(r).pipe(E(e=>{let t="";e.error instanceof ErrorEvent?t="Client Error":t="Server Error";let o="";return e.status==500?o="Internal Server Error":e.status==404?o="Not Found":e.status==401?o="Forbidden":o="Unknown",w(()=>`${t} : ${o}`)}));function ne(){return localStorage.getItem("access_token")}var q={providers:[L(X),D(Q.forRoot({config:{tokenGetter:ne,allowedDomains:["http://localhost:4200"],disallowedRoutes:["http://localhost:4200/login"]}})),U(F([Y,Z]),W())]};function ie(r,n){r&1&&(R(0,"div",0)(1,"div",1),h(2,"span",2),O()())}var ee=(()=>{let n=class n{constructor(t){this.spinnerService=t,this.title="fresh-app"}};n.\u0275fac=function(o){return new(o||n)(C(l))},n.\u0275cmp=S({type:n,selectors:[["app-root"]],standalone:!0,features:[P],decls:3,vars:3,consts:[[1,"spinner-container"],["role","status",1,"spinner","spinner-border"],[1,"visually-hidden"]],template:function(o,i){o&1&&(h(0,"router-outlet"),j(1,ie,3,0,"div",0),N(2,"async")),o&2&&(b(),M(J(2,1,i.spinnerService.isShowSpinner)?1:-1))},dependencies:[G,A,B],styles:[".spinner[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;margin-left:-1rem}.spinner-container[_ngcontent-%COMP%]{position:fixed;top:0;opacity:.5;height:100%;width:100%;background-color:#fff}"]});let r=n;return r})();$(ee,q).catch(r=>console.error(r));