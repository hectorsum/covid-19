function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function i(t,e,n,r,o,s,a){const i=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(i){const o=c(e,n,r,a);t.p(o,i)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function h(){return p(" ")}function m(){return p("")}function g(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return Array.from(t.childNodes)}function y(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):d(e)}function b(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return p(e)}function _(t){return b(t," ")}function E(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function x(t,e){t.value=null==e?"":e}function S(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function w(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e)return void(r.selected=!0)}}function N(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function A(t,e,n){t.classList[n?"add":"remove"](e)}function P(t,e=document.body){return Array.from(e.querySelectorAll(t))}let k;function I(t){k=t}function R(){if(!k)throw new Error("Function called outside component initialization");return k}function j(t){R().$$.on_mount.push(t)}function C(t){R().$$.on_destroy.push(t)}const L=[],q=[],O=[],T=[],V=Promise.resolve();let D=!1;function U(t){O.push(t)}function J(t){T.push(t)}let M=!1;const B=new Set;function F(){if(!M){M=!0;do{for(let t=0;t<L.length;t+=1){const e=L[t];I(e),K(e.$$)}for(I(null),L.length=0;q.length;)q.pop()();for(let t=0;t<O.length;t+=1){const e=O[t];B.has(e)||(B.add(e),e())}O.length=0}while(L.length);for(;T.length;)T.pop()();D=!1,M=!1,B.clear()}}function K(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}const H=new Set;let G;function z(){G={r:0,c:[],p:G}}function Y(){G.r||o(G.c),G=G.p}function W(t,e){t&&t.i&&(H.delete(t),t.i(e))}function X(t,e,n,r){if(t&&t.o){if(H.has(t))return;H.add(t),G.c.push((()=>{H.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function Q(t,e){t.d(1),e.delete(t.key)}function Z(t,e,n,r,o,s,a,c,i,l,u,f){let d=t.length,p=s.length,h=d;const m={};for(;h--;)m[t[h].key]=h;const g=[],v=new Map,$=new Map;for(h=p;h--;){const t=f(o,s,h),c=n(t);let i=a.get(c);i?r&&i.p(t,e):(i=l(c,t),i.c()),v.set(c,g[h]=i),c in m&&$.set(c,Math.abs(h-m[c]))}const y=new Set,b=new Set;function _(t){W(t,1),t.m(c,u),a.set(t.key,t),u=t.first,p--}for(;d&&p;){const e=g[p-1],n=t[d-1],r=e.key,o=n.key;e===n?(u=e.first,d--,p--):v.has(o)?!a.has(r)||y.has(r)?_(e):b.has(o)?d--:$.get(r)>$.get(o)?(b.add(r),_(e)):(y.add(o),d--):(i(n,a),d--)}for(;d--;){const e=t[d];v.has(e.key)||i(e,a)}for(;p;)_(g[p-1]);return g}function tt(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function et(t){return"object"==typeof t&&null!==t?t:{}}function nt(t,e,n){const r=t.$$.props[e];void 0!==r&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function rt(t){t&&t.c()}function ot(t,e){t&&t.l(e)}function st(t,e,r,a){const{fragment:c,on_mount:i,on_destroy:l,after_update:u}=t.$$;c&&c.m(e,r),a||U((()=>{const e=i.map(n).filter(s);l?l.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(U)}function at(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ct(t,e){-1===t.$$.dirty[0]&&(L.push(t),D||(D=!0,V.then(F)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function it(e,n,s,a,c,i,l=[-1]){const u=k;I(e);const d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let p=!1;if(d.ctx=s?s(e,n.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),p&&ct(e,t)),n})):[],d.update(),p=!0,o(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){const t=$(n.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();n.intro&&W(e.$$.fragment),st(e,n.target,n.anchor,n.customElement),F()}I(u)}class lt{$destroy(){at(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ut=[];function ft(e,n=t){let r;const o=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!ut.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),ut.push(n,e)}if(t){for(let t=0;t<ut.length;t+=2)ut[t][0](ut[t+1]);ut.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const i=[a,c];return o.push(i),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const dt={};function pt(e){let n,r,o,s,a,c,i,m,E,x,w,N,P,k,I,R,j,C,L,q,O,T;return{c(){n=d("nav"),r=d("div"),o=d("a"),s=d("img"),c=h(),i=d("span"),m=d("span"),E=h(),x=d("span"),w=h(),N=d("span"),P=h(),k=d("div"),I=d("div"),R=d("a"),j=p("Home"),C=h(),L=d("a"),q=p("About"),this.h()},l(t){n=y(t,"NAV",{class:!0,role:!0,"aria-label":!0,style:!0});var e=$(n);r=y(e,"DIV",{class:!0});var a=$(r);o=y(a,"A",{rel:!0,href:!0,class:!0});var l=$(o);s=y(l,"IMG",{src:!0,alt:!0}),l.forEach(f),c=_(a),i=y(a,"SPAN",{class:!0,"aria-label":!0,"aria-expanded":!0});var u=$(i);m=y(u,"SPAN",{"aria-hidden":!0}),$(m).forEach(f),E=_(u),x=y(u,"SPAN",{"aria-hidden":!0}),$(x).forEach(f),w=_(u),N=y(u,"SPAN",{"aria-hidden":!0}),$(N).forEach(f),u.forEach(f),a.forEach(f),P=_(e),k=y(e,"DIV",{class:!0});var d=$(k);I=y(d,"DIV",{class:!0});var p=$(I);R=y(p,"A",{rel:!0,href:!0,class:!0});var h=$(R);j=b(h,"Home"),h.forEach(f),C=_(p),L=y(p,"A",{rel:!0,href:!0,class:!0});var g=$(L);q=b(g,"About"),g.forEach(f),p.forEach(f),d.forEach(f),e.forEach(f),this.h()},h(){s.src!==(a="logo.jpg")&&v(s,"src","logo.jpg"),v(s,"alt","virus"),v(o,"rel","prefetch"),v(o,"href","/"),v(o,"class","navbar-item"),v(m,"aria-hidden","true"),v(x,"aria-hidden","true"),v(N,"aria-hidden","true"),v(i,"class","navbar-burger"),v(i,"aria-label","menu"),v(i,"aria-expanded","false"),A(i,"is-active",e[1]),v(r,"class","navbar-brand"),v(R,"rel","prefetch"),v(R,"href","/"),v(R,"class","navbar-item"),A(R,"is-active",void 0===e[0]),v(L,"rel","prefetch"),v(L,"href","/about"),v(L,"class","navbar-item"),A(L,"is-active","about"===e[0]),v(I,"class","navbar-start"),v(k,"class","navbar-menu"),A(k,"is-active",e[1]),v(n,"class","navbar svelte-oxuqvb"),v(n,"role","navigation"),v(n,"aria-label","main navigation"),S(n,"border-bottom","solid gray 2px")},m(t,a){u(t,n,a),l(n,r),l(r,o),l(o,s),l(r,c),l(r,i),l(i,m),l(i,E),l(i,x),l(i,w),l(i,N),l(n,P),l(n,k),l(k,I),l(I,R),l(R,j),l(I,C),l(I,L),l(L,q),O||(T=g(i,"click",e[2]),O=!0)},p(t,[e]){2&e&&A(i,"is-active",t[1]),1&e&&A(R,"is-active",void 0===t[0]),1&e&&A(L,"is-active","about"===t[0]),2&e&&A(k,"is-active",t[1])},i:t,o:t,d(t){t&&f(n),O=!1,T()}}}function ht(t,e,n){let r=!1,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment)},[o,r,function(){n(1,r=!r)}]}class mt extends lt{constructor(t){super(),it(this,t,ht,pt,a,{segment:0})}}function gt(t){let e,n,r;e=new mt({props:{segment:t[0]}});const o=t[2].default,s=function(t,e,n,r){if(t){const o=c(t,e,n,r);return t[0](o)}}(o,t,t[1],null);return{c(){rt(e.$$.fragment),n=h(),s&&s.c()},l(t){ot(e.$$.fragment,t),n=_(t),s&&s.l(t)},m(t,o){st(e,t,o),u(t,n,o),s&&s.m(t,o),r=!0},p(t,[n]){const r={};1&n&&(r.segment=t[0]),e.$set(r),s&&s.p&&2&n&&i(s,o,t,t[1],n,null,null)},i(t){r||(W(e.$$.fragment,t),W(s,t),r=!0)},o(t){X(e.$$.fragment,t),X(s,t),r=!1},d(t){at(e,t),t&&f(n),s&&s.d(t)}}}function vt(t,e,n){let{$$slots:r={},$$scope:o}=e,{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment),"$$scope"in t&&n(1,o=t.$$scope)},[s,o,r]}class $t extends lt{constructor(t){super(),it(this,t,vt,gt,a,{segment:0})}}function yt(t){let e,n,r,o,s,a,c,i,m=t[1].message+"";return{c(){e=d("div"),n=d("article"),r=d("div"),o=d("p"),s=p("Page Not Found"),a=h(),c=d("div"),i=p(m),this.h()},l(t){e=y(t,"DIV",{class:!0});var l=$(e);n=y(l,"ARTICLE",{class:!0});var u=$(n);r=y(u,"DIV",{class:!0});var d=$(r);o=y(d,"P",{});var p=$(o);s=b(p,"Page Not Found"),p.forEach(f),d.forEach(f),a=_(u),c=y(u,"DIV",{class:!0});var h=$(c);i=b(h,m),h.forEach(f),u.forEach(f),l.forEach(f),this.h()},h(){v(r,"class","message-header"),v(c,"class","message-body"),v(n,"class","message is-warning"),v(e,"class","container svelte-7fckrh")},m(t,f){u(t,e,f),l(e,n),l(n,r),l(r,o),l(o,s),l(n,a),l(n,c),l(c,i)},p(t,e){2&e&&m!==(m=t[1].message+"")&&E(i,m)},d(t){t&&f(e)}}}function bt(t){let e,n,r,o,s,a,c,i,m,g;return{c(){e=d("div"),n=d("article"),r=d("div"),o=d("p"),s=p("Page Not Found"),a=h(),c=d("div"),i=d("a"),m=p("Click here"),g=p(" to go back home."),this.h()},l(t){e=y(t,"DIV",{class:!0});var l=$(e);n=y(l,"ARTICLE",{class:!0});var u=$(n);r=y(u,"DIV",{class:!0});var d=$(r);o=y(d,"P",{});var p=$(o);s=b(p,"Page Not Found"),p.forEach(f),d.forEach(f),a=_(u),c=y(u,"DIV",{class:!0});var h=$(c);i=y(h,"A",{href:!0});var v=$(i);m=b(v,"Click here"),v.forEach(f),g=b(h," to go back home."),h.forEach(f),u.forEach(f),l.forEach(f),this.h()},h(){v(r,"class","message-header"),v(i,"href","/"),v(c,"class","message-body"),v(n,"class","message is-warning"),v(e,"class","container svelte-7fckrh")},m(t,f){u(t,e,f),l(e,n),l(n,r),l(r,o),l(o,s),l(n,a),l(n,c),l(c,i),l(i,m),l(c,g)},d(t){t&&f(e)}}}function _t(e){let n,r,o,s;document.title=n="Error - "+e[0];let a=404!==e[0]&&yt(e),c=404===e[0]&&bt();return{c(){r=h(),a&&a.c(),o=h(),c&&c.c(),s=m()},l(t){P('[data-svelte="svelte-1jqd4yi"]',document.head).forEach(f),r=_(t),a&&a.l(t),o=_(t),c&&c.l(t),s=m()},m(t,e){u(t,r,e),a&&a.m(t,e),u(t,o,e),c&&c.m(t,e),u(t,s,e)},p(t,[e]){1&e&&n!==(n="Error - "+t[0])&&(document.title=n),404!==t[0]?a?a.p(t,e):(a=yt(t),a.c(),a.m(o.parentNode,o)):a&&(a.d(1),a=null),404===t[0]?c||(c=bt(),c.c(),c.m(s.parentNode,s)):c&&(c.d(1),c=null)},i:t,o:t,d(t){t&&f(r),a&&a.d(t),t&&f(o),c&&c.d(t),t&&f(s)}}}function Et(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o]}class xt extends lt{constructor(t){super(),it(this,t,Et,_t,a,{status:0,error:1})}}function St(t){let n,r,o;const s=[t[4].props];var a=t[4].component;function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return a&&(n=new a(c())),{c(){n&&rt(n.$$.fragment),r=m()},l(t){n&&ot(n.$$.fragment,t),r=m()},m(t,e){n&&st(n,t,e),u(t,r,e),o=!0},p(t,e){const o=16&e?tt(s,[et(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){z();const t=n;X(t.$$.fragment,1,0,(()=>{at(t,1)})),Y()}a?(n=new a(c()),rt(n.$$.fragment),W(n.$$.fragment,1),st(n,r.parentNode,r)):n=null}else a&&n.$set(o)},i(t){o||(n&&W(n.$$.fragment,t),o=!0)},o(t){n&&X(n.$$.fragment,t),o=!1},d(t){t&&f(r),n&&at(n,t)}}}function wt(t){let e,n;return e=new xt({props:{error:t[0],status:t[1]}}),{c(){rt(e.$$.fragment)},l(t){ot(e.$$.fragment,t)},m(t,r){st(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){X(e.$$.fragment,t),n=!1},d(t){at(e,t)}}}function Nt(t){let e,n,r,o;const s=[wt,St],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=m()},l(t){n.l(t),r=m()},m(t,n){a[e].m(t,n),u(t,r,n),o=!0},p(t,o){let i=e;e=c(t),e===i?a[e].p(t,o):(z(),X(a[i],1,1,(()=>{a[i]=null})),Y(),n=a[e],n?n.p(t,o):(n=a[e]=s[e](t),n.c()),W(n,1),n.m(r.parentNode,r))},i(t){o||(W(n),o=!0)},o(t){X(n),o=!1},d(t){a[e].d(t),t&&f(r)}}}function At(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[Nt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new $t({props:s}),{c(){rt(n.$$.fragment)},l(t){ot(n.$$.fragment,t)},m(t,e){st(n,t,e),r=!0},p(t,[e]){const r=12&e?tt(o,[4&e&&{segment:t[2][0]},8&e&&et(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(W(n.$$.fragment,t),r=!0)},o(t){X(n.$$.fragment,t),r=!1},d(t){at(n,t)}}}function Pt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e,{notify:l}=e;var u,f,d;return u=l,R().$$.after_update.push(u),f=dt,d=r,R().$$.context.set(f,d),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,a,c,i,r,l]}class kt extends lt{constructor(t){super(),it(this,t,Pt,At,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const It=[],Rt=[{js:()=>Promise.all([import("./index.8e92b04f.js"),__inject_styles(["client-ec2f6238.css","CovidStat-06494acf.css","index-f2e9b775.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./about.96c0cd0d.js"),__inject_styles(["client-ec2f6238.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[state].c3049aaa.js"),__inject_styles(["client-ec2f6238.css","CovidStat-06494acf.css"])]).then((function(t){return t[0]}))}],jt=(Ct=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/([^/]+?)\/?$/,parts:[{i:2,params:t=>({state:Ct(t[1])})}]}]);var Ct;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Lt(t,e,n,r){return new(n||(n=Promise))((function(o,s){function a(t){try{i(r.next(t))}catch(t){s(t)}}function c(t){try{i(r.throw(t))}catch(t){s(t)}}function i(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}i((r=r.apply(t,e||[])).next())}))}function qt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let Ot,Tt=1;const Vt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},Dt={};let Ut,Jt;function Mt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r})),e}function Bt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Ut))return null;let e=t.pathname.slice(Ut.length);if(""===e&&(e="/"),!It.some((t=>t.test(e))))for(let n=0;n<jt.length;n+=1){const r=jt[n],o=r.pattern.exec(e);if(o){const n=Mt(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function Ft(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=qt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Bt(o);if(s){Gt(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),Vt.pushState({id:Ot},"",o.href)}}function Kt(){return{x:pageXOffset,y:pageYOffset}}function Ht(t){if(Dt[Ot]=Kt(),t.state){const e=Bt(new URL(location.href));e?Gt(e,t.state.id):location.href=location.href}else Tt=Tt+1,function(t){Ot=t}(Tt),Vt.replaceState({id:Ot},"",location.href)}function Gt(t,e,n,r){return Lt(this,void 0,void 0,(function*(){const o=!!e;if(o)Ot=e;else{const t=Kt();Dt[Ot]=t,Ot=e=++Tt,Dt[Ot]=n?t:{x:0,y:0}}if(yield Jt(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=Dt[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),Dt[Ot]=n,o||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function zt(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Yt,Wt=null;function Xt(t){const e=qt(t.target);e&&"prefetch"===e.rel&&function(t){const e=Bt(new URL(t,zt(document)));if(e)Wt&&t===Wt.href||(Wt={href:t,promise:he(e)}),Wt.promise}(e.href)}function Qt(t){clearTimeout(Yt),Yt=setTimeout((()=>{Xt(t)}),20)}function Zt(t,e={noscroll:!1,replaceState:!1}){const n=Bt(new URL(t,zt(document)));return n?(Vt[e.replaceState?"replaceState":"pushState"]({id:Ot},"",t),Gt(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const te="undefined"!=typeof __SAPPER__&&__SAPPER__;let ee,ne,re,oe=!1,se=[],ae="{}";const ce={page:function(t){const e=ft(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:ft(null),session:ft(te&&te.session)};let ie,le,ue;function fe(t,e){const{error:n}=t;return Object.assign({error:n},e)}function de(t){return Lt(this,void 0,void 0,(function*(){ee&&ce.preloading.set(!0);const e=function(t){return Wt&&Wt.href===t.href?Wt.promise:he(t)}(t),n=ne={},r=yield e,{redirect:o}=r;if(n===ne)if(o)yield Zt(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield pe(n,e,fe(e,t.page))}}))}function pe(t,e,n){return Lt(this,void 0,void 0,(function*(){ce.page.set(n),ce.preloading.set(!1),ee?ee.$set(e):(e.stores={page:{subscribe:ce.page.subscribe},preloading:{subscribe:ce.preloading.subscribe},session:ce.session},e.level0={props:yield re},e.notify=ce.page.notify,ee=new kt({target:ue,props:e,hydrate:!0})),se=t,ae=JSON.stringify(n.query),oe=!0,le=!1}))}function he(t){return Lt(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!re){const t=()=>({});re=te.preloaded[0]||t.call(a,{host:n.host,path:n.path,query:n.query,params:{}},ie)}let c,i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=yield Promise.all(e.parts.map(((e,c)=>Lt(this,void 0,void 0,(function*(){const f=r[c];if(function(t,e,n,r){if(r!==ae)return!0;const o=se[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,l,o)&&(u=!0),s.segments[i]=r[c+1],!e)return{segment:f};const d=i++;if(!le&&!u&&se[c]&&se[c].part===e.i)return se[c];u=!1;const{default:p,preload:h}=yield Rt[e.i].js();let m;return m=oe||!te.preloaded[c+1]?h?yield h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},ie):{}:te.preloaded[c+1],s[`level${d}`]={component:p,props:m,segment:f,match:l,part:e.i}})))))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}))}var me,ge,ve;ce.session.subscribe((t=>Lt(void 0,void 0,void 0,(function*(){if(ie=t,!oe)return;le=!0;const e=Bt(new URL(location.href)),n=ne={},{redirect:r,props:o,branch:s}=yield he(e);n===ne&&(r?yield Zt(r.location,{replaceState:!0}):yield pe(s,o,fe(o,e.page)))})))),me={target:document.querySelector("#sapper")},ge=me.target,ue=ge,ve=te.baseUrl,Ut=ve,Jt=de,"scrollRestoration"in Vt&&(Vt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{Vt.scrollRestoration="auto"})),addEventListener("load",(()=>{Vt.scrollRestoration="manual"})),addEventListener("click",Ft),addEventListener("popstate",Ht),addEventListener("touchstart",Xt),addEventListener("mousemove",Qt),te.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:a}=te;re||(re=o&&o[0]);const c={error:a,status:s,session:r,level0:{props:re},level1:{props:{status:s,error:a},component:xt},segments:o},i=Mt(n);pe([],c,{host:t,path:e,query:i,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;Vt.replaceState({id:Tt},"",e);const n=Bt(new URL(location.href));if(n)return Gt(n,Tt,!0,t)}));export{ot as A,st as B,J as C,W as D,X as E,at as F,e as G,P as H,tt as I,et as J,m as K,j as L,C as M,S as N,lt as S,h as a,$ as b,y as c,f as d,d as e,_ as f,b as g,v as h,it as i,U as j,u as k,l,x as m,w as n,g as o,t as p,N as q,o as r,a as s,p as t,E as u,Z as v,Q as w,q as x,nt as y,rt as z};

import __inject_styles from './inject_styles.5607aec6.js';