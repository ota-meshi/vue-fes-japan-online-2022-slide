const bp=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}};bp();function Hr(e,t){const s=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)s[r[o]]=!0;return t?o=>!!s[o.toLowerCase()]:o=>!!s[o]}const yp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_p=Hr(yp);function Cc(e){return!!e||e===""}function st(e){if(ne(e)){const t={};for(let s=0;s<e.length;s++){const r=e[s],o=Fe(r)?xp(r):st(r);if(o)for(const i in o)t[i]=o[i]}return t}else{if(Fe(e))return e;if(Pe(e))return e}}const kp=/;(?![^(]*\))/g,jp=/:(.+)/;function xp(e){const t={};return e.split(kp).forEach(s=>{if(s){const r=s.split(jp);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Oe(e){let t="";if(Fe(e))t=e;else if(ne(e))for(let s=0;s<e.length;s++){const r=Oe(e[s]);r&&(t+=r+" ")}else if(Pe(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}function de(e){if(!e)return null;let{class:t,style:s}=e;return t&&!Fe(t)&&(e.class=Oe(t)),s&&(e.style=st(s)),e}const wp="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",$p=Hr(wp),Pn=e=>Fe(e)?e:e==null?"":ne(e)||Pe(e)&&(e.toString===Pc||!ae(e.toString))?JSON.stringify(e,Tc,2):String(e),Tc=(e,t)=>t&&t.__v_isRef?Tc(e,t.value):Yn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[r,o])=>(s[`${r} =>`]=o,s),{})}:Bc(t)?{[`Set(${t.size})`]:[...t.values()]}:Pe(t)&&!ne(t)&&!Oc(t)?String(t):t,Ae={},Qn=[],Tt=()=>{},Ep=()=>!1,Sp=/^on[^a-z]/,zr=e=>Sp.test(e),Ai=e=>e.startsWith("onUpdate:"),at=Object.assign,Ci=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},Ap=Object.prototype.hasOwnProperty,fe=(e,t)=>Ap.call(e,t),ne=Array.isArray,Yn=e=>Kr(e)==="[object Map]",Bc=e=>Kr(e)==="[object Set]",ae=e=>typeof e=="function",Fe=e=>typeof e=="string",Ti=e=>typeof e=="symbol",Pe=e=>e!==null&&typeof e=="object",Ic=e=>Pe(e)&&ae(e.then)&&ae(e.catch),Pc=Object.prototype.toString,Kr=e=>Pc.call(e),Cp=e=>Kr(e).slice(8,-1),Oc=e=>Kr(e)==="[object Object]",Bi=e=>Fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,fr=Hr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wr=e=>{const t=Object.create(null);return s=>t[s]||(t[s]=e(s))},Tp=/-(\w)/g,Ht=Wr(e=>e.replace(Tp,(t,s)=>s?s.toUpperCase():"")),Bp=/\B([A-Z])/g,Fn=Wr(e=>e.replace(Bp,"-$1").toLowerCase()),Gr=Wr(e=>e.charAt(0).toUpperCase()+e.slice(1)),go=Wr(e=>e?`on${Gr(e)}`:""),Ds=(e,t)=>!Object.is(e,t),Zn=(e,t)=>{for(let s=0;s<e.length;s++)e[s](t)},Sr=(e,t,s)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:s})},qo=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let El;const Ip=()=>El||(El=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let gt;class Vc{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=gt,!t&&gt&&(this.index=(gt.scopes||(gt.scopes=[])).push(this)-1)}run(t){if(this.active){const s=gt;try{return gt=this,t()}finally{gt=s}}}on(){gt=this}off(){gt=this.parent}stop(t){if(this.active){let s,r;for(s=0,r=this.effects.length;s<r;s++)this.effects[s].stop();for(s=0,r=this.cleanups.length;s<r;s++)this.cleanups[s]();if(this.scopes)for(s=0,r=this.scopes.length;s<r;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this.active=!1}}}function Pp(e){return new Vc(e)}function Op(e,t=gt){t&&t.active&&t.effects.push(e)}function Fc(){return gt}function Lc(e){gt&&gt.cleanups.push(e)}const Ii=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Dc=e=>(e.w&hn)>0,Mc=e=>(e.n&hn)>0,Vp=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=hn},Fp=e=>{const{deps:t}=e;if(t.length){let s=0;for(let r=0;r<t.length;r++){const o=t[r];Dc(o)&&!Mc(o)?o.delete(e):t[s++]=o,o.w&=~hn,o.n&=~hn}t.length=s}},No=new WeakMap;let Ss=0,hn=1;const Uo=30;let At;const An=Symbol(""),Ho=Symbol("");class Pi{constructor(t,s=null,r){this.fn=t,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,Op(this,r)}run(){if(!this.active)return this.fn();let t=At,s=an;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=At,At=this,an=!0,hn=1<<++Ss,Ss<=Uo?Vp(this):Sl(this),this.fn()}finally{Ss<=Uo&&Fp(this),hn=1<<--Ss,At=this.parent,an=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){At===this?this.deferStop=!0:this.active&&(Sl(this),this.onStop&&this.onStop(),this.active=!1)}}function Sl(e){const{deps:t}=e;if(t.length){for(let s=0;s<t.length;s++)t[s].delete(e);t.length=0}}let an=!0;const Rc=[];function us(){Rc.push(an),an=!1}function ds(){const e=Rc.pop();an=e===void 0?!0:e}function yt(e,t,s){if(an&&At){let r=No.get(e);r||No.set(e,r=new Map);let o=r.get(s);o||r.set(s,o=Ii()),qc(o)}}function qc(e,t){let s=!1;Ss<=Uo?Mc(e)||(e.n|=hn,s=!Dc(e)):s=!e.has(At),s&&(e.add(At),At.deps.push(e))}function Zt(e,t,s,r,o,i){const l=No.get(e);if(!l)return;let a=[];if(t==="clear")a=[...l.values()];else if(s==="length"&&ne(e))l.forEach((c,d)=>{(d==="length"||d>=r)&&a.push(c)});else switch(s!==void 0&&a.push(l.get(s)),t){case"add":ne(e)?Bi(s)&&a.push(l.get("length")):(a.push(l.get(An)),Yn(e)&&a.push(l.get(Ho)));break;case"delete":ne(e)||(a.push(l.get(An)),Yn(e)&&a.push(l.get(Ho)));break;case"set":Yn(e)&&a.push(l.get(An));break}if(a.length===1)a[0]&&zo(a[0]);else{const c=[];for(const d of a)d&&c.push(...d);zo(Ii(c))}}function zo(e,t){const s=ne(e)?e:[...e];for(const r of s)r.computed&&Al(r);for(const r of s)r.computed||Al(r)}function Al(e,t){(e!==At||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Lp=Hr("__proto__,__v_isRef,__isVue"),Nc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ti)),Dp=Oi(),Mp=Oi(!1,!0),Rp=Oi(!0),Cl=qp();function qp(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...s){const r=ke(this);for(let i=0,l=this.length;i<l;i++)yt(r,"get",i+"");const o=r[t](...s);return o===-1||o===!1?r[t](...s.map(ke)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...s){us();const r=ke(this)[t].apply(this,s);return ds(),r}}),e}function Oi(e=!1,t=!1){return function(r,o,i){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&i===(e?t?sh:Wc:t?Kc:zc).get(r))return r;const l=ne(r);if(!e&&l&&fe(Cl,o))return Reflect.get(Cl,o,i);const a=Reflect.get(r,o,i);return(Ti(o)?Nc.has(o):Lp(o))||(e||yt(r,"get",o),t)?a:xe(a)?l&&Bi(o)?a:a.value:Pe(a)?e?Wn(a):Ie(a):a}}const Np=Uc(),Up=Uc(!0);function Uc(e=!1){return function(s,r,o,i){let l=s[r];if(rs(l)&&xe(l)&&!xe(o))return!1;if(!e&&(!Ar(o)&&!rs(o)&&(l=ke(l),o=ke(o)),!ne(s)&&xe(l)&&!xe(o)))return l.value=o,!0;const a=ne(s)&&Bi(r)?Number(r)<s.length:fe(s,r),c=Reflect.set(s,r,o,i);return s===ke(i)&&(a?Ds(o,l)&&Zt(s,"set",r,o):Zt(s,"add",r,o)),c}}function Hp(e,t){const s=fe(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&s&&Zt(e,"delete",t,void 0),r}function zp(e,t){const s=Reflect.has(e,t);return(!Ti(t)||!Nc.has(t))&&yt(e,"has",t),s}function Kp(e){return yt(e,"iterate",ne(e)?"length":An),Reflect.ownKeys(e)}const Hc={get:Dp,set:Np,deleteProperty:Hp,has:zp,ownKeys:Kp},Wp={get:Rp,set(e,t){return!0},deleteProperty(e,t){return!0}},Gp=at({},Hc,{get:Mp,set:Up}),Vi=e=>e,Qr=e=>Reflect.getPrototypeOf(e);function ir(e,t,s=!1,r=!1){e=e.__v_raw;const o=ke(e),i=ke(t);s||(t!==i&&yt(o,"get",t),yt(o,"get",i));const{has:l}=Qr(o),a=r?Vi:s?Di:Ms;if(l.call(o,t))return a(e.get(t));if(l.call(o,i))return a(e.get(i));e!==o&&e.get(t)}function lr(e,t=!1){const s=this.__v_raw,r=ke(s),o=ke(e);return t||(e!==o&&yt(r,"has",e),yt(r,"has",o)),e===o?s.has(e):s.has(e)||s.has(o)}function ar(e,t=!1){return e=e.__v_raw,!t&&yt(ke(e),"iterate",An),Reflect.get(e,"size",e)}function Tl(e){e=ke(e);const t=ke(this);return Qr(t).has.call(t,e)||(t.add(e),Zt(t,"add",e,e)),this}function Bl(e,t){t=ke(t);const s=ke(this),{has:r,get:o}=Qr(s);let i=r.call(s,e);i||(e=ke(e),i=r.call(s,e));const l=o.call(s,e);return s.set(e,t),i?Ds(t,l)&&Zt(s,"set",e,t):Zt(s,"add",e,t),this}function Il(e){const t=ke(this),{has:s,get:r}=Qr(t);let o=s.call(t,e);o||(e=ke(e),o=s.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return o&&Zt(t,"delete",e,void 0),i}function Pl(){const e=ke(this),t=e.size!==0,s=e.clear();return t&&Zt(e,"clear",void 0,void 0),s}function cr(e,t){return function(r,o){const i=this,l=i.__v_raw,a=ke(l),c=t?Vi:e?Di:Ms;return!e&&yt(a,"iterate",An),l.forEach((d,p)=>r.call(o,c(d),c(p),i))}}function ur(e,t,s){return function(...r){const o=this.__v_raw,i=ke(o),l=Yn(i),a=e==="entries"||e===Symbol.iterator&&l,c=e==="keys"&&l,d=o[e](...r),p=s?Vi:t?Di:Ms;return!t&&yt(i,"iterate",c?Ho:An),{next(){const{value:h,done:g}=d.next();return g?{value:h,done:g}:{value:a?[p(h[0]),p(h[1])]:p(h),done:g}},[Symbol.iterator](){return this}}}}function nn(e){return function(...t){return e==="delete"?!1:this}}function Qp(){const e={get(i){return ir(this,i)},get size(){return ar(this)},has:lr,add:Tl,set:Bl,delete:Il,clear:Pl,forEach:cr(!1,!1)},t={get(i){return ir(this,i,!1,!0)},get size(){return ar(this)},has:lr,add:Tl,set:Bl,delete:Il,clear:Pl,forEach:cr(!1,!0)},s={get(i){return ir(this,i,!0)},get size(){return ar(this,!0)},has(i){return lr.call(this,i,!0)},add:nn("add"),set:nn("set"),delete:nn("delete"),clear:nn("clear"),forEach:cr(!0,!1)},r={get(i){return ir(this,i,!0,!0)},get size(){return ar(this,!0)},has(i){return lr.call(this,i,!0)},add:nn("add"),set:nn("set"),delete:nn("delete"),clear:nn("clear"),forEach:cr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=ur(i,!1,!1),s[i]=ur(i,!0,!1),t[i]=ur(i,!1,!0),r[i]=ur(i,!0,!0)}),[e,s,t,r]}const[Yp,Zp,Jp,Xp]=Qp();function Fi(e,t){const s=t?e?Xp:Jp:e?Zp:Yp;return(r,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(fe(s,o)&&o in r?s:r,o,i)}const eh={get:Fi(!1,!1)},th={get:Fi(!1,!0)},nh={get:Fi(!0,!1)},zc=new WeakMap,Kc=new WeakMap,Wc=new WeakMap,sh=new WeakMap;function rh(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function oh(e){return e.__v_skip||!Object.isExtensible(e)?0:rh(Cp(e))}function Ie(e){return rs(e)?e:Li(e,!1,Hc,eh,zc)}function ih(e){return Li(e,!1,Gp,th,Kc)}function Wn(e){return Li(e,!0,Wp,nh,Wc)}function Li(e,t,s,r,o){if(!Pe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=o.get(e);if(i)return i;const l=oh(e);if(l===0)return e;const a=new Proxy(e,l===2?r:s);return o.set(e,a),a}function Jn(e){return rs(e)?Jn(e.__v_raw):!!(e&&e.__v_isReactive)}function rs(e){return!!(e&&e.__v_isReadonly)}function Ar(e){return!!(e&&e.__v_isShallow)}function Gc(e){return Jn(e)||rs(e)}function ke(e){const t=e&&e.__v_raw;return t?ke(t):e}function Yr(e){return Sr(e,"__v_skip",!0),e}const Ms=e=>Pe(e)?Ie(e):e,Di=e=>Pe(e)?Wn(e):e;function Mi(e){an&&At&&(e=ke(e),qc(e.dep||(e.dep=Ii())))}function Ri(e,t){e=ke(e),e.dep&&zo(e.dep)}function xe(e){return!!(e&&e.__v_isRef===!0)}function H(e){return Qc(e,!1)}function Pt(e){return Qc(e,!0)}function Qc(e,t){return xe(e)?e:new lh(e,t)}class lh{constructor(t,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?t:ke(t),this._value=s?t:Ms(t)}get value(){return Mi(this),this._value}set value(t){const s=this.__v_isShallow||Ar(t)||rs(t);t=s?t:ke(t),Ds(t,this._rawValue)&&(this._rawValue=t,this._value=s?t:Ms(t),Ri(this))}}function _(e){return xe(e)?e.value:e}const ah={get:(e,t,s)=>_(Reflect.get(e,t,s)),set:(e,t,s,r)=>{const o=e[t];return xe(o)&&!xe(s)?(o.value=s,!0):Reflect.set(e,t,s,r)}};function Yc(e){return Jn(e)?e:new Proxy(e,ah)}class ch{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:r}=t(()=>Mi(this),()=>Ri(this));this._get=s,this._set=r}get value(){return this._get()}set value(t){this._set(t)}}function uh(e){return new ch(e)}function dh(e){const t=ne(e)?new Array(e.length):{};for(const s in e)t[s]=hh(e,s);return t}class ph{constructor(t,s,r){this._object=t,this._key=s,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function hh(e,t,s){const r=e[t];return xe(r)?r:new ph(e,t,s)}var Zc;class gh{constructor(t,s,r,o){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this[Zc]=!1,this._dirty=!0,this.effect=new Pi(t,()=>{this._dirty||(this._dirty=!0,Ri(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const t=ke(this);return Mi(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Zc="__v_isReadonly";function mh(e,t,s=!1){let r,o;const i=ae(e);return i?(r=e,o=Tt):(r=e.get,o=e.set),new gh(r,o,i||!o,s)}function cn(e,t,s,r){let o;try{o=r?e(...r):e()}catch(i){Zr(i,t,s)}return o}function Bt(e,t,s,r){if(ae(e)){const i=cn(e,t,s,r);return i&&Ic(i)&&i.catch(l=>{Zr(l,t,s)}),i}const o=[];for(let i=0;i<e.length;i++)o.push(Bt(e[i],t,s,r));return o}function Zr(e,t,s,r=!0){const o=t?t.vnode:null;if(t){let i=t.parent;const l=t.proxy,a=s;for(;i;){const d=i.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](e,l,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){cn(c,null,10,[e,l,a]);return}}fh(e,s,o,r)}function fh(e,t,s,r=!0){console.error(e)}let Rs=!1,Ko=!1;const et=[];let Rt=0;const Xn=[];let Wt=null,jn=0;const Jc=Promise.resolve();let qi=null;function Ye(e){const t=qi||Jc;return e?t.then(this?e.bind(this):e):t}function vh(e){let t=Rt+1,s=et.length;for(;t<s;){const r=t+s>>>1;qs(et[r])<e?t=r+1:s=r}return t}function Ni(e){(!et.length||!et.includes(e,Rs&&e.allowRecurse?Rt+1:Rt))&&(e.id==null?et.push(e):et.splice(vh(e.id),0,e),Xc())}function Xc(){!Rs&&!Ko&&(Ko=!0,qi=Jc.then(tu))}function bh(e){const t=et.indexOf(e);t>Rt&&et.splice(t,1)}function yh(e){ne(e)?Xn.push(...e):(!Wt||!Wt.includes(e,e.allowRecurse?jn+1:jn))&&Xn.push(e),Xc()}function Ol(e,t=Rs?Rt+1:0){for(;t<et.length;t++){const s=et[t];s&&s.pre&&(et.splice(t,1),t--,s())}}function eu(e){if(Xn.length){const t=[...new Set(Xn)];if(Xn.length=0,Wt){Wt.push(...t);return}for(Wt=t,Wt.sort((s,r)=>qs(s)-qs(r)),jn=0;jn<Wt.length;jn++)Wt[jn]();Wt=null,jn=0}}const qs=e=>e.id==null?1/0:e.id,_h=(e,t)=>{const s=qs(e)-qs(t);if(s===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return s};function tu(e){Ko=!1,Rs=!0,et.sort(_h);const t=Tt;try{for(Rt=0;Rt<et.length;Rt++){const s=et[Rt];s&&s.active!==!1&&cn(s,null,14)}}finally{Rt=0,et.length=0,eu(),Rs=!1,qi=null,(et.length||Xn.length)&&tu()}}function kh(e,t,...s){if(e.isUnmounted)return;const r=e.vnode.props||Ae;let o=s;const i=t.startsWith("update:"),l=i&&t.slice(7);if(l&&l in r){const p=`${l==="modelValue"?"model":l}Modifiers`,{number:h,trim:g}=r[p]||Ae;g&&(o=s.map(m=>m.trim())),h&&(o=s.map(qo))}let a,c=r[a=go(t)]||r[a=go(Ht(t))];!c&&i&&(c=r[a=go(Fn(t))]),c&&Bt(c,e,6,o);const d=r[a+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Bt(d,e,6,o)}}function nu(e,t,s=!1){const r=t.emitsCache,o=r.get(e);if(o!==void 0)return o;const i=e.emits;let l={},a=!1;if(!ae(e)){const c=d=>{const p=nu(d,t,!0);p&&(a=!0,at(l,p))};!s&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(Pe(e)&&r.set(e,null),null):(ne(i)?i.forEach(c=>l[c]=null):at(l,i),Pe(e)&&r.set(e,l),l)}function Jr(e,t){return!e||!zr(t)?!1:(t=t.slice(2).replace(/Once$/,""),fe(e,t[0].toLowerCase()+t.slice(1))||fe(e,Fn(t))||fe(e,t))}let tt=null,Xr=null;function Cr(e){const t=tt;return tt=e,Xr=e&&e.type.__scopeId||null,t}function ze(e){Xr=e}function Ke(){Xr=null}function V(e,t=tt,s){if(!t||e._n)return e;const r=(...o)=>{r._d&&zl(-1);const i=Cr(t);let l;try{l=e(...o)}finally{Cr(i),r._d&&zl(1)}return l};return r._n=!0,r._c=!0,r._d=!0,r}function mo(e){const{type:t,vnode:s,proxy:r,withProxy:o,props:i,propsOptions:[l],slots:a,attrs:c,emit:d,render:p,renderCache:h,data:g,setupState:m,ctx:v,inheritAttrs:k}=e;let j,E;const x=Cr(e);try{if(s.shapeFlag&4){const C=o||r;j=Mt(p.call(C,C,h,i,m,g,v)),E=c}else{const C=t;j=Mt(C.length>1?C(i,{attrs:c,slots:a,emit:d}):C(i,null)),E=t.props?c:jh(c)}}catch(C){Ts.length=0,Zr(C,e,1),j=Q(gn)}let $=j;if(E&&k!==!1){const C=Object.keys(E),{shapeFlag:D}=$;C.length&&D&7&&(l&&C.some(Ai)&&(E=xh(E,l)),$=On($,E))}return s.dirs&&($=On($),$.dirs=$.dirs?$.dirs.concat(s.dirs):s.dirs),s.transition&&($.transition=s.transition),j=$,Cr(x),j}const jh=e=>{let t;for(const s in e)(s==="class"||s==="style"||zr(s))&&((t||(t={}))[s]=e[s]);return t},xh=(e,t)=>{const s={};for(const r in e)(!Ai(r)||!(r.slice(9)in t))&&(s[r]=e[r]);return s};function wh(e,t,s){const{props:r,children:o,component:i}=e,{props:l,children:a,patchFlag:c}=t,d=i.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return r?Vl(r,l,d):!!l;if(c&8){const p=t.dynamicProps;for(let h=0;h<p.length;h++){const g=p[h];if(l[g]!==r[g]&&!Jr(d,g))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:r===l?!1:r?l?Vl(r,l,d):!0:!!l;return!1}function Vl(e,t,s){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(t[i]!==e[i]&&!Jr(s,i))return!0}return!1}function $h({vnode:e,parent:t},s){for(;t&&t.subTree===e;)(e=t.vnode).el=s,t=t.parent}const su=e=>e.__isSuspense;function Eh(e,t){t&&t.pendingBranch?ne(e)?t.effects.push(...e):t.effects.push(e):yh(e)}function ft(e,t){if(Ge){let s=Ge.provides;const r=Ge.parent&&Ge.parent.provides;r===s&&(s=Ge.provides=Object.create(r)),s[e]=t}}function M(e,t,s=!1){const r=Ge||tt;if(r){const o=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return s&&ae(t)?t.call(r.proxy):t}}function eo(e,t){return Ui(e,null,t)}const Fl={};function ce(e,t,s){return Ui(e,t,s)}function Ui(e,t,{immediate:s,deep:r,flush:o,onTrack:i,onTrigger:l}=Ae){const a=Ge;let c,d=!1,p=!1;if(xe(e)?(c=()=>e.value,d=Ar(e)):Jn(e)?(c=()=>e,r=!0):ne(e)?(p=!0,d=e.some(E=>Jn(E)||Ar(E)),c=()=>e.map(E=>{if(xe(E))return E.value;if(Jn(E))return wn(E);if(ae(E))return cn(E,a,2)})):ae(e)?t?c=()=>cn(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Bt(e,a,3,[g])}:c=Tt,t&&r){const E=c;c=()=>wn(E())}let h,g=E=>{h=j.onStop=()=>{cn(E,a,4)}};if(Us)return g=Tt,t?s&&Bt(t,a,3,[c(),p?[]:void 0,g]):c(),Tt;let m=p?[]:Fl;const v=()=>{if(!!j.active)if(t){const E=j.run();(r||d||(p?E.some((x,$)=>Ds(x,m[$])):Ds(E,m)))&&(h&&h(),Bt(t,a,3,[E,m===Fl?void 0:m,g]),m=E)}else j.run()};v.allowRecurse=!!t;let k;o==="sync"?k=v:o==="post"?k=()=>Qe(v,a&&a.suspense):(v.pre=!0,a&&(v.id=a.uid),k=()=>Ni(v));const j=new Pi(c,k);return t?s?v():m=j.run():o==="post"?Qe(j.run.bind(j),a&&a.suspense):j.run(),()=>{j.stop(),a&&a.scope&&Ci(a.scope.effects,j)}}function Sh(e,t,s){const r=this.proxy,o=Fe(e)?e.includes(".")?ru(r,e):()=>r[e]:e.bind(r,r);let i;ae(t)?i=t:(i=t.handler,s=t);const l=Ge;is(this);const a=Ui(o,i.bind(r),s);return l?is(l):Cn(),a}function ru(e,t){const s=t.split(".");return()=>{let r=e;for(let o=0;o<s.length&&r;o++)r=r[s[o]];return r}}function wn(e,t){if(!Pe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),xe(e))wn(e.value,t);else if(ne(e))for(let s=0;s<e.length;s++)wn(e[s],t);else if(Bc(e)||Yn(e))e.forEach(s=>{wn(s,t)});else if(Oc(e))for(const s in e)wn(e[s],t);return e}function ou(e,t){e.shapeFlag&6&&e.component?ou(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function be(e){return ae(e)?{setup:e,name:e.name}:e}const es=e=>!!e.type.__asyncLoader,iu=e=>e.type.__isKeepAlive,Ah={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const s=fn(),r=s.ctx;if(!r.renderer)return()=>{const x=t.default&&t.default();return x&&x.length===1?x[0]:x};const o=new Map,i=new Set;let l=null;const a=s.suspense,{renderer:{p:c,m:d,um:p,o:{createElement:h}}}=r,g=h("div");r.activate=(x,$,C,D,P)=>{const K=x.component;d(x,$,C,0,a),c(K.vnode,x,$,C,K,a,D,x.slotScopeIds,P),Qe(()=>{K.isDeactivated=!1,K.a&&Zn(K.a);const se=x.props&&x.props.onVnodeMounted;se&&_t(se,K.parent,x)},a)},r.deactivate=x=>{const $=x.component;d(x,g,null,1,a),Qe(()=>{$.da&&Zn($.da);const C=x.props&&x.props.onVnodeUnmounted;C&&_t(C,$.parent,x),$.isDeactivated=!0},a)};function m(x){fo(x),p(x,s,a,!0)}function v(x){o.forEach(($,C)=>{const D=Xo($.type);D&&(!x||!x(D))&&k(C)})}function k(x){const $=o.get(x);!l||$.type!==l.type?m($):l&&fo(l),o.delete(x),i.delete(x)}ce(()=>[e.include,e.exclude],([x,$])=>{x&&v(C=>As(x,C)),$&&v(C=>!As($,C))},{flush:"post",deep:!0});let j=null;const E=()=>{j!=null&&o.set(j,vo(s.subTree))};return ps(E),Hi(E),no(()=>{o.forEach(x=>{const{subTree:$,suspense:C}=s,D=vo($);if(x.type===D.type){fo(D);const P=D.component.da;P&&Qe(P,C);return}m(x)})}),()=>{if(j=null,!t.default)return null;const x=t.default(),$=x[0];if(x.length>1)return l=null,x;if(!mn($)||!($.shapeFlag&4)&&!($.shapeFlag&128))return l=null,$;let C=vo($);const D=C.type,P=Xo(es(C)?C.type.__asyncResolved||{}:D),{include:K,exclude:se,max:ve}=e;if(K&&(!P||!As(K,P))||se&&P&&As(se,P))return l=C,$;const pe=C.key==null?D:C.key,ye=o.get(pe);return C.el&&(C=On(C),$.shapeFlag&128&&($.ssContent=C)),j=pe,ye?(C.el=ye.el,C.component=ye.component,C.transition&&ou(C,C.transition),C.shapeFlag|=512,i.delete(pe),i.add(pe)):(i.add(pe),ve&&i.size>parseInt(ve,10)&&k(i.values().next().value)),C.shapeFlag|=256,l=C,su($.type)?$:C}}},lu=Ah;function As(e,t){return ne(e)?e.some(s=>As(s,t)):Fe(e)?e.split(",").includes(t):e.test?e.test(t):!1}function Ch(e,t){au(e,"a",t)}function Th(e,t){au(e,"da",t)}function au(e,t,s=Ge){const r=e.__wdc||(e.__wdc=()=>{let o=s;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(to(t,r,s),s){let o=s.parent;for(;o&&o.parent;)iu(o.parent.vnode)&&Bh(r,t,s,o),o=o.parent}}function Bh(e,t,s,r){const o=to(t,e,r,!0);zi(()=>{Ci(r[t],o)},s)}function fo(e){let t=e.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),e.shapeFlag=t}function vo(e){return e.shapeFlag&128?e.ssContent:e}function to(e,t,s=Ge,r=!1){if(s){const o=s[e]||(s[e]=[]),i=t.__weh||(t.__weh=(...l)=>{if(s.isUnmounted)return;us(),is(s);const a=Bt(t,s,e,l);return Cn(),ds(),a});return r?o.unshift(i):o.push(i),i}}const Jt=e=>(t,s=Ge)=>(!Us||e==="sp")&&to(e,(...r)=>t(...r),s),cu=Jt("bm"),ps=Jt("m"),Ih=Jt("bu"),Hi=Jt("u"),no=Jt("bum"),zi=Jt("um"),Ph=Jt("sp"),Oh=Jt("rtg"),Vh=Jt("rtc");function Fh(e,t=Ge){to("ec",e,t)}function hs(e,t){const s=tt;if(s===null)return e;const r=ro(s)||s.proxy,o=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[l,a,c,d=Ae]=t[i];ae(l)&&(l={mounted:l,updated:l}),l.deep&&wn(a),o.push({dir:l,instance:r,value:a,oldValue:void 0,arg:c,modifiers:d})}return e}function vn(e,t,s,r){const o=e.dirs,i=t&&t.dirs;for(let l=0;l<o.length;l++){const a=o[l];i&&(a.oldValue=i[l].value);let c=a.dir[r];c&&(us(),Bt(c,s,8,[e.el,a,e,t]),ds())}}const uu="components",Lh="directives";function os(e,t){return du(uu,e,!0,t)||e}const Dh=Symbol();function Tr(e){return du(Lh,e)}function du(e,t,s=!0,r=!1){const o=tt||Ge;if(o){const i=o.type;if(e===uu){const a=Xo(i,!1);if(a&&(a===t||a===Ht(t)||a===Gr(Ht(t))))return i}const l=Ll(o[e]||i[e],t)||Ll(o.appContext[e],t);return!l&&r?i:l}}function Ll(e,t){return e&&(e[t]||e[Ht(t)]||e[Gr(Ht(t))])}function gs(e,t,s,r){let o;const i=s&&s[r];if(ne(e)||Fe(e)){o=new Array(e.length);for(let l=0,a=e.length;l<a;l++)o[l]=t(e[l],l,void 0,i&&i[l])}else if(typeof e=="number"){o=new Array(e);for(let l=0;l<e;l++)o[l]=t(l+1,l,void 0,i&&i[l])}else if(Pe(e))if(e[Symbol.iterator])o=Array.from(e,(l,a)=>t(l,a,void 0,i&&i[a]));else{const l=Object.keys(e);o=new Array(l.length);for(let a=0,c=l.length;a<c;a++){const d=l[a];o[a]=t(e[d],d,a,i&&i[a])}}else o=[];return s&&(s[r]=o),o}function Re(e,t,s={},r,o){if(tt.isCE||tt.parent&&es(tt.parent)&&tt.parent.isCE)return Q("slot",t==="default"?null:{name:t},r&&r());let i=e[t];i&&i._c&&(i._d=!1),y();const l=i&&pu(i(s)),a=G(W,{key:s.key||l&&l.key||`_${t}`},l||(r?r():[]),l&&e._===1?64:-2);return!o&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function pu(e){return e.some(t=>mn(t)?!(t.type===gn||t.type===W&&!pu(t.children)):!0)?e:null}const Wo=e=>e?ju(e)?ro(e)||e.proxy:Wo(e.parent):null,Br=at(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Wo(e.parent),$root:e=>Wo(e.root),$emit:e=>e.emit,$options:e=>Ki(e),$forceUpdate:e=>e.f||(e.f=()=>Ni(e.update)),$nextTick:e=>e.n||(e.n=Ye.bind(e.proxy)),$watch:e=>Sh.bind(e)}),Mh={get({_:e},t){const{ctx:s,setupState:r,data:o,props:i,accessCache:l,type:a,appContext:c}=e;let d;if(t[0]!=="$"){const m=l[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return o[t];case 4:return s[t];case 3:return i[t]}else{if(r!==Ae&&fe(r,t))return l[t]=1,r[t];if(o!==Ae&&fe(o,t))return l[t]=2,o[t];if((d=e.propsOptions[0])&&fe(d,t))return l[t]=3,i[t];if(s!==Ae&&fe(s,t))return l[t]=4,s[t];Go&&(l[t]=0)}}const p=Br[t];let h,g;if(p)return t==="$attrs"&&yt(e,"get",t),p(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(s!==Ae&&fe(s,t))return l[t]=4,s[t];if(g=c.config.globalProperties,fe(g,t))return g[t]},set({_:e},t,s){const{data:r,setupState:o,ctx:i}=e;return o!==Ae&&fe(o,t)?(o[t]=s,!0):r!==Ae&&fe(r,t)?(r[t]=s,!0):fe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:r,appContext:o,propsOptions:i}},l){let a;return!!s[l]||e!==Ae&&fe(e,l)||t!==Ae&&fe(t,l)||(a=i[0])&&fe(a,l)||fe(r,l)||fe(Br,l)||fe(o.config.globalProperties,l)},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:fe(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};let Go=!0;function Rh(e){const t=Ki(e),s=e.proxy,r=e.ctx;Go=!1,t.beforeCreate&&Dl(t.beforeCreate,e,"bc");const{data:o,computed:i,methods:l,watch:a,provide:c,inject:d,created:p,beforeMount:h,mounted:g,beforeUpdate:m,updated:v,activated:k,deactivated:j,beforeDestroy:E,beforeUnmount:x,destroyed:$,unmounted:C,render:D,renderTracked:P,renderTriggered:K,errorCaptured:se,serverPrefetch:ve,expose:pe,inheritAttrs:ye,components:We,directives:qe,filters:Ve}=t;if(d&&qh(d,r,null,e.appContext.config.unwrapInjectedRef),l)for(const Y in l){const te=l[Y];ae(te)&&(r[Y]=te.bind(s))}if(o){const Y=o.call(s,s);Pe(Y)&&(e.data=Ie(Y))}if(Go=!0,i)for(const Y in i){const te=i[Y],he=ae(te)?te.bind(s,s):ae(te.get)?te.get.bind(s,s):Tt,we=!ae(te)&&ae(te.set)?te.set.bind(s):Tt,rt=A({get:he,set:we});Object.defineProperty(r,Y,{enumerable:!0,configurable:!0,get:()=>rt.value,set:De=>rt.value=De})}if(a)for(const Y in a)hu(a[Y],r,s,Y);if(c){const Y=ae(c)?c.call(s):c;Reflect.ownKeys(Y).forEach(te=>{ft(te,Y[te])})}p&&Dl(p,e,"c");function Be(Y,te){ne(te)?te.forEach(he=>Y(he.bind(s))):te&&Y(te.bind(s))}if(Be(cu,h),Be(ps,g),Be(Ih,m),Be(Hi,v),Be(Ch,k),Be(Th,j),Be(Fh,se),Be(Vh,P),Be(Oh,K),Be(no,x),Be(zi,C),Be(Ph,ve),ne(pe))if(pe.length){const Y=e.exposed||(e.exposed={});pe.forEach(te=>{Object.defineProperty(Y,te,{get:()=>s[te],set:he=>s[te]=he})})}else e.exposed||(e.exposed={});D&&e.render===Tt&&(e.render=D),ye!=null&&(e.inheritAttrs=ye),We&&(e.components=We),qe&&(e.directives=qe)}function qh(e,t,s=Tt,r=!1){ne(e)&&(e=Qo(e));for(const o in e){const i=e[o];let l;Pe(i)?"default"in i?l=M(i.from||o,i.default,!0):l=M(i.from||o):l=M(i),xe(l)&&r?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>l.value,set:a=>l.value=a}):t[o]=l}}function Dl(e,t,s){Bt(ne(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,s)}function hu(e,t,s,r){const o=r.includes(".")?ru(s,r):()=>s[r];if(Fe(e)){const i=t[e];ae(i)&&ce(o,i)}else if(ae(e))ce(o,e.bind(s));else if(Pe(e))if(ne(e))e.forEach(i=>hu(i,t,s,r));else{const i=ae(e.handler)?e.handler.bind(s):t[e.handler];ae(i)&&ce(o,i,e)}}function Ki(e){const t=e.type,{mixins:s,extends:r}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:l}}=e.appContext,a=i.get(t);let c;return a?c=a:!o.length&&!s&&!r?c=t:(c={},o.length&&o.forEach(d=>Ir(c,d,l,!0)),Ir(c,t,l)),Pe(t)&&i.set(t,c),c}function Ir(e,t,s,r=!1){const{mixins:o,extends:i}=t;i&&Ir(e,i,s,!0),o&&o.forEach(l=>Ir(e,l,s,!0));for(const l in t)if(!(r&&l==="expose")){const a=Nh[l]||s&&s[l];e[l]=a?a(e[l],t[l]):t[l]}return e}const Nh={data:Ml,props:kn,emits:kn,methods:kn,computed:kn,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:kn,directives:kn,watch:Hh,provide:Ml,inject:Uh};function Ml(e,t){return t?e?function(){return at(ae(e)?e.call(this,this):e,ae(t)?t.call(this,this):t)}:t:e}function Uh(e,t){return kn(Qo(e),Qo(t))}function Qo(e){if(ne(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function ot(e,t){return e?[...new Set([].concat(e,t))]:t}function kn(e,t){return e?at(at(Object.create(null),e),t):t}function Hh(e,t){if(!e)return t;if(!t)return e;const s=at(Object.create(null),e);for(const r in t)s[r]=ot(e[r],t[r]);return s}function zh(e,t,s,r=!1){const o={},i={};Sr(i,so,1),e.propsDefaults=Object.create(null),gu(e,t,o,i);for(const l in e.propsOptions[0])l in o||(o[l]=void 0);s?e.props=r?o:ih(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function Kh(e,t,s,r){const{props:o,attrs:i,vnode:{patchFlag:l}}=e,a=ke(o),[c]=e.propsOptions;let d=!1;if((r||l>0)&&!(l&16)){if(l&8){const p=e.vnode.dynamicProps;for(let h=0;h<p.length;h++){let g=p[h];if(Jr(e.emitsOptions,g))continue;const m=t[g];if(c)if(fe(i,g))m!==i[g]&&(i[g]=m,d=!0);else{const v=Ht(g);o[v]=Yo(c,a,v,m,e,!1)}else m!==i[g]&&(i[g]=m,d=!0)}}}else{gu(e,t,o,i)&&(d=!0);let p;for(const h in a)(!t||!fe(t,h)&&((p=Fn(h))===h||!fe(t,p)))&&(c?s&&(s[h]!==void 0||s[p]!==void 0)&&(o[h]=Yo(c,a,h,void 0,e,!0)):delete o[h]);if(i!==a)for(const h in i)(!t||!fe(t,h)&&!0)&&(delete i[h],d=!0)}d&&Zt(e,"set","$attrs")}function gu(e,t,s,r){const[o,i]=e.propsOptions;let l=!1,a;if(t)for(let c in t){if(fr(c))continue;const d=t[c];let p;o&&fe(o,p=Ht(c))?!i||!i.includes(p)?s[p]=d:(a||(a={}))[p]=d:Jr(e.emitsOptions,c)||(!(c in r)||d!==r[c])&&(r[c]=d,l=!0)}if(i){const c=ke(s),d=a||Ae;for(let p=0;p<i.length;p++){const h=i[p];s[h]=Yo(o,c,h,d[h],e,!fe(d,h))}}return l}function Yo(e,t,s,r,o,i){const l=e[s];if(l!=null){const a=fe(l,"default");if(a&&r===void 0){const c=l.default;if(l.type!==Function&&ae(c)){const{propsDefaults:d}=o;s in d?r=d[s]:(is(o),r=d[s]=c.call(null,t),Cn())}else r=c}l[0]&&(i&&!a?r=!1:l[1]&&(r===""||r===Fn(s))&&(r=!0))}return r}function mu(e,t,s=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const i=e.props,l={},a=[];let c=!1;if(!ae(e)){const p=h=>{c=!0;const[g,m]=mu(h,t,!0);at(l,g),m&&a.push(...m)};!s&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!i&&!c)return Pe(e)&&r.set(e,Qn),Qn;if(ne(i))for(let p=0;p<i.length;p++){const h=Ht(i[p]);Rl(h)&&(l[h]=Ae)}else if(i)for(const p in i){const h=Ht(p);if(Rl(h)){const g=i[p],m=l[h]=ne(g)||ae(g)?{type:g}:g;if(m){const v=Ul(Boolean,m.type),k=Ul(String,m.type);m[0]=v>-1,m[1]=k<0||v<k,(v>-1||fe(m,"default"))&&a.push(h)}}}const d=[l,a];return Pe(e)&&r.set(e,d),d}function Rl(e){return e[0]!=="$"}function ql(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Nl(e,t){return ql(e)===ql(t)}function Ul(e,t){return ne(t)?t.findIndex(s=>Nl(s,e)):ae(t)&&Nl(t,e)?0:-1}const fu=e=>e[0]==="_"||e==="$stable",Wi=e=>ne(e)?e.map(Mt):[Mt(e)],Wh=(e,t,s)=>{if(t._n)return t;const r=V((...o)=>Wi(t(...o)),s);return r._c=!1,r},vu=(e,t,s)=>{const r=e._ctx;for(const o in e){if(fu(o))continue;const i=e[o];if(ae(i))t[o]=Wh(o,i,r);else if(i!=null){const l=Wi(i);t[o]=()=>l}}},bu=(e,t)=>{const s=Wi(t);e.slots.default=()=>s},Gh=(e,t)=>{if(e.vnode.shapeFlag&32){const s=t._;s?(e.slots=ke(t),Sr(t,"_",s)):vu(t,e.slots={})}else e.slots={},t&&bu(e,t);Sr(e.slots,so,1)},Qh=(e,t,s)=>{const{vnode:r,slots:o}=e;let i=!0,l=Ae;if(r.shapeFlag&32){const a=t._;a?s&&a===1?i=!1:(at(o,t),!s&&a===1&&delete o._):(i=!t.$stable,vu(t,o)),l=t}else t&&(bu(e,t),l={default:1});if(i)for(const a in o)!fu(a)&&!(a in l)&&delete o[a]};function yu(){return{app:null,config:{isNativeTag:Ep,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yh=0;function Zh(e,t){return function(r,o=null){ae(r)||(r=Object.assign({},r)),o!=null&&!Pe(o)&&(o=null);const i=yu(),l=new Set;let a=!1;const c=i.app={_uid:Yh++,_component:r,_props:o,_container:null,_context:i,_instance:null,version:fg,get config(){return i.config},set config(d){},use(d,...p){return l.has(d)||(d&&ae(d.install)?(l.add(d),d.install(c,...p)):ae(d)&&(l.add(d),d(c,...p))),c},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),c},component(d,p){return p?(i.components[d]=p,c):i.components[d]},directive(d,p){return p?(i.directives[d]=p,c):i.directives[d]},mount(d,p,h){if(!a){const g=Q(r,o);return g.appContext=i,p&&t?t(g,d):e(g,d,h),a=!0,c._container=d,d.__vue_app__=c,ro(g.component)||g.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(d,p){return i.provides[d]=p,c}};return c}}function Zo(e,t,s,r,o=!1){if(ne(e)){e.forEach((g,m)=>Zo(g,t&&(ne(t)?t[m]:t),s,r,o));return}if(es(r)&&!o)return;const i=r.shapeFlag&4?ro(r.component)||r.component.proxy:r.el,l=o?null:i,{i:a,r:c}=e,d=t&&t.r,p=a.refs===Ae?a.refs={}:a.refs,h=a.setupState;if(d!=null&&d!==c&&(Fe(d)?(p[d]=null,fe(h,d)&&(h[d]=null)):xe(d)&&(d.value=null)),ae(c))cn(c,a,12,[l,p]);else{const g=Fe(c),m=xe(c);if(g||m){const v=()=>{if(e.f){const k=g?fe(h,c)?h[c]:p[c]:c.value;o?ne(k)&&Ci(k,i):ne(k)?k.includes(i)||k.push(i):g?(p[c]=[i],fe(h,c)&&(h[c]=p[c])):(c.value=[i],e.k&&(p[e.k]=c.value))}else g?(p[c]=l,fe(h,c)&&(h[c]=l)):m&&(c.value=l,e.k&&(p[e.k]=l))};l?(v.id=-1,Qe(v,s)):v()}}}const Qe=Eh;function Jh(e){return Xh(e)}function Xh(e,t){const s=Ip();s.__VUE__=!0;const{insert:r,remove:o,patchProp:i,createElement:l,createText:a,createComment:c,setText:d,setElementText:p,parentNode:h,nextSibling:g,setScopeId:m=Tt,insertStaticContent:v}=e,k=(f,b,w,S=null,I=null,L=null,U=!1,F=null,R=!!b.dynamicChildren)=>{if(f===b)return;f&&!ys(f,b)&&(S=q(f),De(f,I,L,!0),f=null),b.patchFlag===-2&&(R=!1,b.dynamicChildren=null);const{type:O,ref:X,shapeFlag:Z}=b;switch(O){case Qi:j(f,b,w,S);break;case gn:E(f,b,w,S);break;case bo:f==null&&x(b,w,S,U);break;case W:We(f,b,w,S,I,L,U,F,R);break;default:Z&1?D(f,b,w,S,I,L,U,F,R):Z&6?qe(f,b,w,S,I,L,U,F,R):(Z&64||Z&128)&&O.process(f,b,w,S,I,L,U,F,R,ge)}X!=null&&I&&Zo(X,f&&f.ref,L,b||f,!b)},j=(f,b,w,S)=>{if(f==null)r(b.el=a(b.children),w,S);else{const I=b.el=f.el;b.children!==f.children&&d(I,b.children)}},E=(f,b,w,S)=>{f==null?r(b.el=c(b.children||""),w,S):b.el=f.el},x=(f,b,w,S)=>{[f.el,f.anchor]=v(f.children,b,w,S,f.el,f.anchor)},$=({el:f,anchor:b},w,S)=>{let I;for(;f&&f!==b;)I=g(f),r(f,w,S),f=I;r(b,w,S)},C=({el:f,anchor:b})=>{let w;for(;f&&f!==b;)w=g(f),o(f),f=w;o(b)},D=(f,b,w,S,I,L,U,F,R)=>{U=U||b.type==="svg",f==null?P(b,w,S,I,L,U,F,R):ve(f,b,I,L,U,F,R)},P=(f,b,w,S,I,L,U,F)=>{let R,O;const{type:X,props:Z,shapeFlag:ee,transition:re,dirs:me}=f;if(R=f.el=l(f.type,L,Z&&Z.is,Z),ee&8?p(R,f.children):ee&16&&se(f.children,R,null,S,I,L&&X!=="foreignObject",U,F),me&&vn(f,null,S,"created"),Z){for(const Ee in Z)Ee!=="value"&&!fr(Ee)&&i(R,Ee,null,Z[Ee],L,f.children,S,I,N);"value"in Z&&i(R,"value",null,Z.value),(O=Z.onVnodeBeforeMount)&&_t(O,S,f)}K(R,f,f.scopeId,U,S),me&&vn(f,null,S,"beforeMount");const Ce=(!I||I&&!I.pendingBranch)&&re&&!re.persisted;Ce&&re.beforeEnter(R),r(R,b,w),((O=Z&&Z.onVnodeMounted)||Ce||me)&&Qe(()=>{O&&_t(O,S,f),Ce&&re.enter(R),me&&vn(f,null,S,"mounted")},I)},K=(f,b,w,S,I)=>{if(w&&m(f,w),S)for(let L=0;L<S.length;L++)m(f,S[L]);if(I){let L=I.subTree;if(b===L){const U=I.vnode;K(f,U,U.scopeId,U.slotScopeIds,I.parent)}}},se=(f,b,w,S,I,L,U,F,R=0)=>{for(let O=R;O<f.length;O++){const X=f[O]=F?rn(f[O]):Mt(f[O]);k(null,X,b,w,S,I,L,U,F)}},ve=(f,b,w,S,I,L,U)=>{const F=b.el=f.el;let{patchFlag:R,dynamicChildren:O,dirs:X}=b;R|=f.patchFlag&16;const Z=f.props||Ae,ee=b.props||Ae;let re;w&&bn(w,!1),(re=ee.onVnodeBeforeUpdate)&&_t(re,w,b,f),X&&vn(b,f,w,"beforeUpdate"),w&&bn(w,!0);const me=I&&b.type!=="foreignObject";if(O?pe(f.dynamicChildren,O,F,w,S,me,L):U||te(f,b,F,null,w,S,me,L,!1),R>0){if(R&16)ye(F,b,Z,ee,w,S,I);else if(R&2&&Z.class!==ee.class&&i(F,"class",null,ee.class,I),R&4&&i(F,"style",Z.style,ee.style,I),R&8){const Ce=b.dynamicProps;for(let Ee=0;Ee<Ce.length;Ee++){const Me=Ce[Ee],wt=Z[Me],Rn=ee[Me];(Rn!==wt||Me==="value")&&i(F,Me,wt,Rn,I,f.children,w,S,N)}}R&1&&f.children!==b.children&&p(F,b.children)}else!U&&O==null&&ye(F,b,Z,ee,w,S,I);((re=ee.onVnodeUpdated)||X)&&Qe(()=>{re&&_t(re,w,b,f),X&&vn(b,f,w,"updated")},S)},pe=(f,b,w,S,I,L,U)=>{for(let F=0;F<b.length;F++){const R=f[F],O=b[F],X=R.el&&(R.type===W||!ys(R,O)||R.shapeFlag&70)?h(R.el):w;k(R,O,X,null,S,I,L,U,!0)}},ye=(f,b,w,S,I,L,U)=>{if(w!==S){if(w!==Ae)for(const F in w)!fr(F)&&!(F in S)&&i(f,F,w[F],null,U,b.children,I,L,N);for(const F in S){if(fr(F))continue;const R=S[F],O=w[F];R!==O&&F!=="value"&&i(f,F,O,R,U,b.children,I,L,N)}"value"in S&&i(f,"value",w.value,S.value)}},We=(f,b,w,S,I,L,U,F,R)=>{const O=b.el=f?f.el:a(""),X=b.anchor=f?f.anchor:a("");let{patchFlag:Z,dynamicChildren:ee,slotScopeIds:re}=b;re&&(F=F?F.concat(re):re),f==null?(r(O,w,S),r(X,w,S),se(b.children,w,X,I,L,U,F,R)):Z>0&&Z&64&&ee&&f.dynamicChildren?(pe(f.dynamicChildren,ee,w,I,L,U,F),(b.key!=null||I&&b===I.subTree)&&Gi(f,b,!0)):te(f,b,w,X,I,L,U,F,R)},qe=(f,b,w,S,I,L,U,F,R)=>{b.slotScopeIds=F,f==null?b.shapeFlag&512?I.ctx.activate(b,w,S,U,R):Ve(b,w,S,I,L,U,R):Te(f,b,R)},Ve=(f,b,w,S,I,L,U)=>{const F=f.component=cg(f,S,I);if(iu(f)&&(F.ctx.renderer=ge),ug(F),F.asyncDep){if(I&&I.registerDep(F,Be),!f.el){const R=F.subTree=Q(gn);E(null,R,b,w)}return}Be(F,f,b,w,I,L,U)},Te=(f,b,w)=>{const S=b.component=f.component;if(wh(f,b,w))if(S.asyncDep&&!S.asyncResolved){Y(S,b,w);return}else S.next=b,bh(S.update),S.update();else b.el=f.el,S.vnode=b},Be=(f,b,w,S,I,L,U)=>{const F=()=>{if(f.isMounted){let{next:X,bu:Z,u:ee,parent:re,vnode:me}=f,Ce=X,Ee;bn(f,!1),X?(X.el=me.el,Y(f,X,U)):X=me,Z&&Zn(Z),(Ee=X.props&&X.props.onVnodeBeforeUpdate)&&_t(Ee,re,X,me),bn(f,!0);const Me=mo(f),wt=f.subTree;f.subTree=Me,k(wt,Me,h(wt.el),q(wt),f,I,L),X.el=Me.el,Ce===null&&$h(f,Me.el),ee&&Qe(ee,I),(Ee=X.props&&X.props.onVnodeUpdated)&&Qe(()=>_t(Ee,re,X,me),I)}else{let X;const{el:Z,props:ee}=b,{bm:re,m:me,parent:Ce}=f,Ee=es(b);if(bn(f,!1),re&&Zn(re),!Ee&&(X=ee&&ee.onVnodeBeforeMount)&&_t(X,Ce,b),bn(f,!0),Z&&oe){const Me=()=>{f.subTree=mo(f),oe(Z,f.subTree,f,I,null)};Ee?b.type.__asyncLoader().then(()=>!f.isUnmounted&&Me()):Me()}else{const Me=f.subTree=mo(f);k(null,Me,w,S,f,I,L),b.el=Me.el}if(me&&Qe(me,I),!Ee&&(X=ee&&ee.onVnodeMounted)){const Me=b;Qe(()=>_t(X,Ce,Me),I)}(b.shapeFlag&256||Ce&&es(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&f.a&&Qe(f.a,I),f.isMounted=!0,b=w=S=null}},R=f.effect=new Pi(F,()=>Ni(O),f.scope),O=f.update=()=>R.run();O.id=f.uid,bn(f,!0),O()},Y=(f,b,w)=>{b.component=f;const S=f.vnode.props;f.vnode=b,f.next=null,Kh(f,b.props,S,w),Qh(f,b.children,w),us(),Ol(),ds()},te=(f,b,w,S,I,L,U,F,R=!1)=>{const O=f&&f.children,X=f?f.shapeFlag:0,Z=b.children,{patchFlag:ee,shapeFlag:re}=b;if(ee>0){if(ee&128){we(O,Z,w,S,I,L,U,F,R);return}else if(ee&256){he(O,Z,w,S,I,L,U,F,R);return}}re&8?(X&16&&N(O,I,L),Z!==O&&p(w,Z)):X&16?re&16?we(O,Z,w,S,I,L,U,F,R):N(O,I,L,!0):(X&8&&p(w,""),re&16&&se(Z,w,S,I,L,U,F,R))},he=(f,b,w,S,I,L,U,F,R)=>{f=f||Qn,b=b||Qn;const O=f.length,X=b.length,Z=Math.min(O,X);let ee;for(ee=0;ee<Z;ee++){const re=b[ee]=R?rn(b[ee]):Mt(b[ee]);k(f[ee],re,w,null,I,L,U,F,R)}O>X?N(f,I,L,!0,!1,Z):se(b,w,S,I,L,U,F,R,Z)},we=(f,b,w,S,I,L,U,F,R)=>{let O=0;const X=b.length;let Z=f.length-1,ee=X-1;for(;O<=Z&&O<=ee;){const re=f[O],me=b[O]=R?rn(b[O]):Mt(b[O]);if(ys(re,me))k(re,me,w,null,I,L,U,F,R);else break;O++}for(;O<=Z&&O<=ee;){const re=f[Z],me=b[ee]=R?rn(b[ee]):Mt(b[ee]);if(ys(re,me))k(re,me,w,null,I,L,U,F,R);else break;Z--,ee--}if(O>Z){if(O<=ee){const re=ee+1,me=re<X?b[re].el:S;for(;O<=ee;)k(null,b[O]=R?rn(b[O]):Mt(b[O]),w,me,I,L,U,F,R),O++}}else if(O>ee)for(;O<=Z;)De(f[O],I,L,!0),O++;else{const re=O,me=O,Ce=new Map;for(O=me;O<=ee;O++){const dt=b[O]=R?rn(b[O]):Mt(b[O]);dt.key!=null&&Ce.set(dt.key,O)}let Ee,Me=0;const wt=ee-me+1;let Rn=!1,xl=0;const bs=new Array(wt);for(O=0;O<wt;O++)bs[O]=0;for(O=re;O<=Z;O++){const dt=f[O];if(Me>=wt){De(dt,I,L,!0);continue}let Dt;if(dt.key!=null)Dt=Ce.get(dt.key);else for(Ee=me;Ee<=ee;Ee++)if(bs[Ee-me]===0&&ys(dt,b[Ee])){Dt=Ee;break}Dt===void 0?De(dt,I,L,!0):(bs[Dt-me]=O+1,Dt>=xl?xl=Dt:Rn=!0,k(dt,b[Dt],w,null,I,L,U,F,R),Me++)}const wl=Rn?eg(bs):Qn;for(Ee=wl.length-1,O=wt-1;O>=0;O--){const dt=me+O,Dt=b[dt],$l=dt+1<X?b[dt+1].el:S;bs[O]===0?k(null,Dt,w,$l,I,L,U,F,R):Rn&&(Ee<0||O!==wl[Ee]?rt(Dt,w,$l,2):Ee--)}}},rt=(f,b,w,S,I=null)=>{const{el:L,type:U,transition:F,children:R,shapeFlag:O}=f;if(O&6){rt(f.component.subTree,b,w,S);return}if(O&128){f.suspense.move(b,w,S);return}if(O&64){U.move(f,b,w,ge);return}if(U===W){r(L,b,w);for(let Z=0;Z<R.length;Z++)rt(R[Z],b,w,S);r(f.anchor,b,w);return}if(U===bo){$(f,b,w);return}if(S!==2&&O&1&&F)if(S===0)F.beforeEnter(L),r(L,b,w),Qe(()=>F.enter(L),I);else{const{leave:Z,delayLeave:ee,afterLeave:re}=F,me=()=>r(L,b,w),Ce=()=>{Z(L,()=>{me(),re&&re()})};ee?ee(L,me,Ce):Ce()}else r(L,b,w)},De=(f,b,w,S=!1,I=!1)=>{const{type:L,props:U,ref:F,children:R,dynamicChildren:O,shapeFlag:X,patchFlag:Z,dirs:ee}=f;if(F!=null&&Zo(F,null,w,f,!0),X&256){b.ctx.deactivate(f);return}const re=X&1&&ee,me=!es(f);let Ce;if(me&&(Ce=U&&U.onVnodeBeforeUnmount)&&_t(Ce,b,f),X&6)B(f.component,w,S);else{if(X&128){f.suspense.unmount(w,S);return}re&&vn(f,null,b,"beforeUnmount"),X&64?f.type.remove(f,b,w,I,ge,S):O&&(L!==W||Z>0&&Z&64)?N(O,b,w,!1,!0):(L===W&&Z&384||!I&&X&16)&&N(R,b,w),S&&tn(f)}(me&&(Ce=U&&U.onVnodeUnmounted)||re)&&Qe(()=>{Ce&&_t(Ce,b,f),re&&vn(f,null,b,"unmounted")},w)},tn=f=>{const{type:b,el:w,anchor:S,transition:I}=f;if(b===W){Mn(w,S);return}if(b===bo){C(f);return}const L=()=>{o(w),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(f.shapeFlag&1&&I&&!I.persisted){const{leave:U,delayLeave:F}=I,R=()=>U(w,L);F?F(f.el,L,R):R()}else L()},Mn=(f,b)=>{let w;for(;f!==b;)w=g(f),o(f),f=w;o(b)},B=(f,b,w)=>{const{bum:S,scope:I,update:L,subTree:U,um:F}=f;S&&Zn(S),I.stop(),L&&(L.active=!1,De(U,f,b,w)),F&&Qe(F,b),Qe(()=>{f.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},N=(f,b,w,S=!1,I=!1,L=0)=>{for(let U=L;U<f.length;U++)De(f[U],b,w,S,I)},q=f=>f.shapeFlag&6?q(f.component.subTree):f.shapeFlag&128?f.suspense.next():g(f.anchor||f.el),J=(f,b,w)=>{f==null?b._vnode&&De(b._vnode,null,null,!0):k(b._vnode||null,f,b,null,null,null,w),Ol(),eu(),b._vnode=f},ge={p:k,um:De,m:rt,r:tn,mt:Ve,mc:se,pc:te,pbc:pe,n:q,o:e};let _e,oe;return t&&([_e,oe]=t(ge)),{render:J,hydrate:_e,createApp:Zh(J,_e)}}function bn({effect:e,update:t},s){e.allowRecurse=t.allowRecurse=s}function Gi(e,t,s=!1){const r=e.children,o=t.children;if(ne(r)&&ne(o))for(let i=0;i<r.length;i++){const l=r[i];let a=o[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[i]=rn(o[i]),a.el=l.el),s||Gi(l,a))}}function eg(e){const t=e.slice(),s=[0];let r,o,i,l,a;const c=e.length;for(r=0;r<c;r++){const d=e[r];if(d!==0){if(o=s[s.length-1],e[o]<d){t[r]=o,s.push(r);continue}for(i=0,l=s.length-1;i<l;)a=i+l>>1,e[s[a]]<d?i=a+1:l=a;d<e[s[i]]&&(i>0&&(t[r]=s[i-1]),s[i]=r)}}for(i=s.length,l=s[i-1];i-- >0;)s[i]=l,l=t[l];return s}const tg=e=>e.__isTeleport,Cs=e=>e&&(e.disabled||e.disabled===""),Hl=e=>typeof SVGElement!="undefined"&&e instanceof SVGElement,Jo=(e,t)=>{const s=e&&e.to;return Fe(s)?t?t(s):null:s},ng={__isTeleport:!0,process(e,t,s,r,o,i,l,a,c,d){const{mc:p,pc:h,pbc:g,o:{insert:m,querySelector:v,createText:k,createComment:j}}=d,E=Cs(t.props);let{shapeFlag:x,children:$,dynamicChildren:C}=t;if(e==null){const D=t.el=k(""),P=t.anchor=k("");m(D,s,r),m(P,s,r);const K=t.target=Jo(t.props,v),se=t.targetAnchor=k("");K&&(m(se,K),l=l||Hl(K));const ve=(pe,ye)=>{x&16&&p($,pe,ye,o,i,l,a,c)};E?ve(s,P):K&&ve(K,se)}else{t.el=e.el;const D=t.anchor=e.anchor,P=t.target=e.target,K=t.targetAnchor=e.targetAnchor,se=Cs(e.props),ve=se?s:P,pe=se?D:K;if(l=l||Hl(P),C?(g(e.dynamicChildren,C,ve,o,i,l,a),Gi(e,t,!0)):c||h(e,t,ve,pe,o,i,l,a,!1),E)se||dr(t,s,D,d,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const ye=t.target=Jo(t.props,v);ye&&dr(t,ye,null,d,0)}else se&&dr(t,P,K,d,1)}},remove(e,t,s,r,{um:o,o:{remove:i}},l){const{shapeFlag:a,children:c,anchor:d,targetAnchor:p,target:h,props:g}=e;if(h&&i(p),(l||!Cs(g))&&(i(d),a&16))for(let m=0;m<c.length;m++){const v=c[m];o(v,t,s,!0,!!v.dynamicChildren)}},move:dr,hydrate:sg};function dr(e,t,s,{o:{insert:r},m:o},i=2){i===0&&r(e.targetAnchor,t,s);const{el:l,anchor:a,shapeFlag:c,children:d,props:p}=e,h=i===2;if(h&&r(l,t,s),(!h||Cs(p))&&c&16)for(let g=0;g<d.length;g++)o(d[g],t,s,2);h&&r(a,t,s)}function sg(e,t,s,r,o,i,{o:{nextSibling:l,parentNode:a,querySelector:c}},d){const p=t.target=Jo(t.props,c);if(p){const h=p._lpa||p.firstChild;if(t.shapeFlag&16)if(Cs(t.props))t.anchor=d(l(e),t,a(e),s,r,o,i),t.targetAnchor=h;else{t.anchor=l(e);let g=h;for(;g;)if(g=l(g),g&&g.nodeType===8&&g.data==="teleport anchor"){t.targetAnchor=g,p._lpa=t.targetAnchor&&l(t.targetAnchor);break}d(h,t,p,s,r,o,i)}}return t.anchor&&l(t.anchor)}const rg=ng,W=Symbol(void 0),Qi=Symbol(void 0),gn=Symbol(void 0),bo=Symbol(void 0),Ts=[];let Ct=null;function y(e=!1){Ts.push(Ct=e?null:[])}function og(){Ts.pop(),Ct=Ts[Ts.length-1]||null}let Ns=1;function zl(e){Ns+=e}function _u(e){return e.dynamicChildren=Ns>0?Ct||Qn:null,og(),Ns>0&&Ct&&Ct.push(e),e}function T(e,t,s,r,o,i){return _u(n(e,t,s,r,o,i,!0))}function G(e,t,s,r,o){return _u(Q(e,t,s,r,o,!0))}function mn(e){return e?e.__v_isVNode===!0:!1}function ys(e,t){return e.type===t.type&&e.key===t.key}const so="__vInternal",ku=({key:e})=>e!=null?e:null,vr=({ref:e,ref_key:t,ref_for:s})=>e!=null?Fe(e)||xe(e)||ae(e)?{i:tt,r:e,k:t,f:!!s}:e:null;function n(e,t=null,s=null,r=0,o=null,i=e===W?0:1,l=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ku(t),ref:t&&vr(t),scopeId:Xr,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null};return a?(Yi(c,s),i&128&&e.normalize(c)):s&&(c.shapeFlag|=Fe(s)?8:16),Ns>0&&!l&&Ct&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ct.push(c),c}const Q=ig;function ig(e,t=null,s=null,r=0,o=null,i=!1){if((!e||e===Dh)&&(e=gn),mn(e)){const a=On(e,t,!0);return s&&Yi(a,s),Ns>0&&!i&&Ct&&(a.shapeFlag&6?Ct[Ct.indexOf(e)]=a:Ct.push(a)),a.patchFlag|=-2,a}if(hg(e)&&(e=e.__vccOpts),t){t=ue(t);let{class:a,style:c}=t;a&&!Fe(a)&&(t.class=Oe(a)),Pe(c)&&(Gc(c)&&!ne(c)&&(c=at({},c)),t.style=st(c))}const l=Fe(e)?1:su(e)?128:tg(e)?64:Pe(e)?4:ae(e)?2:0;return n(e,t,s,r,o,l,i,!0)}function ue(e){return e?Gc(e)||so in e?at({},e):e:null}function On(e,t,s=!1){const{props:r,ref:o,patchFlag:i,children:l}=e,a=t?Pr(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&ku(a),ref:t&&t.ref?s&&o?ne(o)?o.concat(vr(t)):[o,vr(t)]:vr(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==W?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&On(e.ssContent),ssFallback:e.ssFallback&&On(e.ssFallback),el:e.el,anchor:e.anchor}}function u(e=" ",t=0){return Q(Qi,null,e,t)}function le(e="",t=!1){return t?(y(),G(gn,null,e)):Q(gn,null,e)}function Mt(e){return e==null||typeof e=="boolean"?Q(gn):ne(e)?Q(W,null,e.slice()):typeof e=="object"?rn(e):Q(Qi,null,String(e))}function rn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:On(e)}function Yi(e,t){let s=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(ne(t))s=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),Yi(e,o()),o._c&&(o._d=!0));return}else{s=32;const o=t._;!o&&!(so in t)?t._ctx=tt:o===3&&tt&&(tt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ae(t)?(t={default:t,_ctx:tt},s=32):(t=String(t),r&64?(s=16,t=[u(t)]):s=8);e.children=t,e.shapeFlag|=s}function Pr(...e){const t={};for(let s=0;s<e.length;s++){const r=e[s];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=Oe([t.class,r.class]));else if(o==="style")t.style=st([t.style,r.style]);else if(zr(o)){const i=t[o],l=r[o];l&&i!==l&&!(ne(i)&&i.includes(l))&&(t[o]=i?[].concat(i,l):l)}else o!==""&&(t[o]=r[o])}return t}function _t(e,t,s,r=null){Bt(e,t,7,[s,r])}const lg=yu();let ag=0;function cg(e,t,s){const r=e.type,o=(t?t.appContext:e.appContext)||lg,i={uid:ag++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new Vc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mu(r,o),emitsOptions:nu(r,o),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:r.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=kh.bind(null,i),e.ce&&e.ce(i),i}let Ge=null;const fn=()=>Ge||tt,is=e=>{Ge=e,e.scope.on()},Cn=()=>{Ge&&Ge.scope.off(),Ge=null};function ju(e){return e.vnode.shapeFlag&4}let Us=!1;function ug(e,t=!1){Us=t;const{props:s,children:r}=e.vnode,o=ju(e);zh(e,s,o,t),Gh(e,r);const i=o?dg(e,t):void 0;return Us=!1,i}function dg(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=Yr(new Proxy(e.ctx,Mh));const{setup:r}=s;if(r){const o=e.setupContext=r.length>1?wu(e):null;is(e),us();const i=cn(r,e,0,[e.props,o]);if(ds(),Cn(),Ic(i)){if(i.then(Cn,Cn),t)return i.then(l=>{Kl(e,l,t)}).catch(l=>{Zr(l,e,0)});e.asyncDep=i}else Kl(e,i,t)}else xu(e,t)}function Kl(e,t,s){ae(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Pe(t)&&(e.setupState=Yc(t)),xu(e,s)}let Wl;function xu(e,t,s){const r=e.type;if(!e.render){if(!t&&Wl&&!r.render){const o=r.template||Ki(e).template;if(o){const{isCustomElement:i,compilerOptions:l}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,d=at(at({isCustomElement:i,delimiters:a},l),c);r.render=Wl(o,d)}}e.render=r.render||Tt}is(e),us(),Rh(e),ds(),Cn()}function pg(e){return new Proxy(e.attrs,{get(t,s){return yt(e,"get","$attrs"),t[s]}})}function wu(e){const t=r=>{e.exposed=r||{}};let s;return{get attrs(){return s||(s=pg(e))},slots:e.slots,emit:e.emit,expose:t}}function ro(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Yc(Yr(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in Br)return Br[s](e)}}))}function Xo(e,t=!0){return ae(e)?e.displayName||e.name:e.name||t&&e.__name}function hg(e){return ae(e)&&"__vccOpts"in e}const A=(e,t)=>mh(e,t,Us);function gg(){return mg().slots}function mg(){const e=fn();return e.setupContext||(e.setupContext=wu(e))}function nt(e,t,s){const r=arguments.length;return r===2?Pe(t)&&!ne(t)?mn(t)?Q(e,null,[t]):Q(e,t):Q(e,null,t):(r>3?s=Array.prototype.slice.call(arguments,2):r===3&&mn(s)&&(s=[s]),Q(e,t,s))}const fg="3.2.41",vg="http://www.w3.org/2000/svg",xn=typeof document!="undefined"?document:null,Gl=xn&&xn.createElement("template"),bg={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,r)=>{const o=t?xn.createElementNS(vg,e):xn.createElement(e,s?{is:s}:void 0);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>xn.createTextNode(e),createComment:e=>xn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>xn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,r,o,i){const l=s?s.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),s),!(o===i||!(o=o.nextSibling)););else{Gl.innerHTML=r?`<svg>${e}</svg>`:e;const a=Gl.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,s)}return[l?l.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}};function yg(e,t,s){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}function _g(e,t,s){const r=e.style,o=Fe(s);if(s&&!o){for(const i in s)ei(r,i,s[i]);if(t&&!Fe(t))for(const i in t)s[i]==null&&ei(r,i,"")}else{const i=r.display;o?t!==s&&(r.cssText=s):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ql=/\s*!important$/;function ei(e,t,s){if(ne(s))s.forEach(r=>ei(e,t,r));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const r=kg(e,t);Ql.test(s)?e.setProperty(Fn(r),s.replace(Ql,""),"important"):e[r]=s}}const Yl=["Webkit","Moz","ms"],yo={};function kg(e,t){const s=yo[t];if(s)return s;let r=Ht(t);if(r!=="filter"&&r in e)return yo[t]=r;r=Gr(r);for(let o=0;o<Yl.length;o++){const i=Yl[o]+r;if(i in e)return yo[t]=i}return t}const Zl="http://www.w3.org/1999/xlink";function jg(e,t,s,r,o){if(r&&t.startsWith("xlink:"))s==null?e.removeAttributeNS(Zl,t.slice(6,t.length)):e.setAttributeNS(Zl,t,s);else{const i=_p(t);s==null||i&&!Cc(s)?e.removeAttribute(t):e.setAttribute(t,i?"":s)}}function xg(e,t,s,r,o,i,l){if(t==="innerHTML"||t==="textContent"){r&&l(r,o,i),e[t]=s==null?"":s;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=s;const c=s==null?"":s;(e.value!==c||e.tagName==="OPTION")&&(e.value=c),s==null&&e.removeAttribute(t);return}let a=!1;if(s===""||s==null){const c=typeof e[t];c==="boolean"?s=Cc(s):s==null&&c==="string"?(s="",a=!0):c==="number"&&(s=0,a=!0)}try{e[t]=s}catch{}a&&e.removeAttribute(t)}function Hn(e,t,s,r){e.addEventListener(t,s,r)}function wg(e,t,s,r){e.removeEventListener(t,s,r)}function $g(e,t,s,r,o=null){const i=e._vei||(e._vei={}),l=i[t];if(r&&l)l.value=r;else{const[a,c]=Eg(t);if(r){const d=i[t]=Cg(r,o);Hn(e,a,d,c)}else l&&(wg(e,a,l,c),i[t]=void 0)}}const Jl=/(?:Once|Passive|Capture)$/;function Eg(e){let t;if(Jl.test(e)){t={};let r;for(;r=e.match(Jl);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Fn(e.slice(2)),t]}let _o=0;const Sg=Promise.resolve(),Ag=()=>_o||(Sg.then(()=>_o=0),_o=Date.now());function Cg(e,t){const s=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=s.attached)return;Bt(Tg(r,s.value),t,5,[r])};return s.value=e,s.attached=Ag(),s}function Tg(e,t){if(ne(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(r=>o=>!o._stopped&&r&&r(o))}else return t}const Xl=/^on[a-z]/,Bg=(e,t,s,r,o=!1,i,l,a,c)=>{t==="class"?yg(e,r,o):t==="style"?_g(e,s,r):zr(t)?Ai(t)||$g(e,t,s,r,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ig(e,t,r,o))?xg(e,t,r,i,l,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),jg(e,t,r,o))};function Ig(e,t,s,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Xl.test(t)&&ae(s)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Xl.test(t)&&Fe(s)?!1:t in e}const ea=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ne(t)?s=>Zn(t,s):t};function Pg(e){e.target.composing=!0}function ta(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Og={created(e,{modifiers:{lazy:t,trim:s,number:r}},o){e._assign=ea(o);const i=r||o.props&&o.props.type==="number";Hn(e,t?"change":"input",l=>{if(l.target.composing)return;let a=e.value;s&&(a=a.trim()),i&&(a=qo(a)),e._assign(a)}),s&&Hn(e,"change",()=>{e.value=e.value.trim()}),t||(Hn(e,"compositionstart",Pg),Hn(e,"compositionend",ta),Hn(e,"change",ta))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:s,trim:r,number:o}},i){if(e._assign=ea(i),e.composing||document.activeElement===e&&e.type!=="range"&&(s||r&&e.value.trim()===t||(o||e.type==="number")&&qo(e.value)===t))return;const l=t==null?"":t;e.value!==l&&(e.value=l)}},Vg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},na=(e,t)=>s=>{if(!("key"in s))return;const r=Fn(s.key);if(t.some(o=>o===r||Vg[o]===r))return e(s)},$u={beforeMount(e,{value:t},{transition:s}){e._vod=e.style.display==="none"?"":e.style.display,s&&t?s.beforeEnter(e):_s(e,t)},mounted(e,{value:t},{transition:s}){s&&t&&s.enter(e)},updated(e,{value:t,oldValue:s},{transition:r}){!t!=!s&&(r?t?(r.beforeEnter(e),_s(e,!0),r.enter(e)):r.leave(e,()=>{_s(e,!1)}):_s(e,t))},beforeUnmount(e,{value:t}){_s(e,t)}};function _s(e,t){e.style.display=t?e._vod:"none"}const Fg=at({patchProp:Bg},bg);let sa;function Lg(){return sa||(sa=Jh(Fg))}const Dg=(...e)=>{const t=Lg().createApp(...e),{mount:s}=t;return t.mount=r=>{const o=Mg(r);if(!o)return;const i=t._component;!ae(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.innerHTML="";const l=s(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),l},t};function Mg(e){return Fe(e)?document.querySelector(e):e}var Eu="usehead",ra="head:count",ko="data-head-attrs",Su="data-meta-body",Rg=(e,t,s)=>{const r=s.createElement(e);for(const o of Object.keys(t))if(o==="body"&&t.body===!0)r.setAttribute(Su,"true");else{let i=t[o];if(o==="renderPriority"||o==="key"||i===!1)continue;o==="children"?r.textContent=i:r.setAttribute(o,i)}return r};function oa(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){const s=t.getAttribute("nonce");if(s&&!e.getAttribute("nonce")){const r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=s,s===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}var qg=e=>{if(!["meta","base","script","link"].includes(e.tag))return!1;const{props:t,tag:s}=e;if(s==="base")return"base";if(s==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";const r=["key","id","name","property","http-equiv"];for(const o of r){let i;if(typeof t.getAttribute=="function"&&t.hasAttribute(o)?i=t.getAttribute(o):i=t[o],i!==void 0)return`${s}-${o}-${i}`}return!1},Ng=()=>{const e=M(Eu);if(!e)throw new Error("You may forget to apply app.use(head)");return e},Ug=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],Hg=(e,t)=>e==null?"":typeof e=="string"?e.replace("%s",t!=null?t:""):e(_(t)),zg=e=>{const t=[],s=Object.keys(e);for(const r of s)if(e[r]!=null)switch(r){case"title":t.push({tag:r,props:{children:e[r]}});break;case"titleTemplate":break;case"base":t.push({tag:r,props:{key:"default",...e[r]}});break;default:if(Ug.includes(r)){const o=e[r];Array.isArray(o)?o.forEach(i=>{t.push({tag:r,props:_(i)})}):o&&t.push({tag:r,props:o})}break}return t},ia=(e,t)=>{const s=e.getAttribute(ko);if(s)for(const o of s.split(","))o in t||e.removeAttribute(o);const r=[];for(const o in t){const i=t[o];i!=null&&(i===!1?e.removeAttribute(o):e.setAttribute(o,i),r.push(o))}r.length?e.setAttribute(ko,r.join(",")):e.removeAttribute(ko)},Kg=(e=window.document,t,s)=>{var r,o;const i=e.head,l=e.body;let a=i.querySelector(`meta[name="${ra}"]`),c=l.querySelectorAll(`[${Su}]`);const d=a?Number(a.getAttribute("content")):0,p=[],h=[];if(c)for(let m=0;m<c.length;m++)c[m]&&((r=c[m].tagName)==null?void 0:r.toLowerCase())===t&&h.push(c[m]);if(a)for(let m=0,v=a.previousElementSibling;m<d;m++,v=(v==null?void 0:v.previousElementSibling)||null)((o=v==null?void 0:v.tagName)==null?void 0:o.toLowerCase())===t&&p.push(v);else a=e.createElement("meta"),a.setAttribute("name",ra),a.setAttribute("content","0"),i.append(a);let g=s.map(m=>{var v;return{element:Rg(m.tag,m.props,e),body:(v=m.props.body)!=null?v:!1}});g=g.filter(m=>{for(let v=0;v<p.length;v++){const k=p[v];if(oa(k,m.element))return p.splice(v,1),!1}for(let v=0;v<h.length;v++){const k=h[v];if(oa(k,m.element))return h.splice(v,1),!1}return!0}),h.forEach(m=>{var v;return(v=m.parentNode)==null?void 0:v.removeChild(m)}),p.forEach(m=>{var v;return(v=m.parentNode)==null?void 0:v.removeChild(m)}),g.forEach(m=>{m.body===!0?l.insertAdjacentElement("beforeend",m.element):i.insertBefore(m.element,a)}),a.setAttribute("content",""+(d-p.length+g.filter(m=>!m.body).length))},Wg=e=>{let t=[],s=new Set;e&&t.push(Pt(e));const r={install(o){o.config.globalProperties.$head=r,o.provide(Eu,r)},get headTags(){const o=[],i={},l=t.map(a=>_(a).titleTemplate).reverse().find(a=>a!=null);return t.forEach((a,c)=>{zg(_(a)).forEach((p,h)=>{p._position=c*1e4+h,l&&p.tag==="title"&&(p.props.children=Hg(l,p.props.children));const g=qg(p);g?i[g]=p:o.push(p)})}),o.push(...Object.values(i)),o.sort((a,c)=>a._position-c._position)},addHeadObjs(o){t.push(o)},removeHeadObjs(o){t=t.filter(i=>i!==o)},updateDOM(o=window.document){let i,l={},a={};const c={};for(const p of r.headTags.sort(Yg)){if(p.tag==="title"){i=p.props.children;continue}if(p.tag==="htmlAttrs"){Object.assign(l,p.props);continue}if(p.tag==="bodyAttrs"){Object.assign(a,p.props);continue}c[p.tag]=c[p.tag]||[],c[p.tag].push(p)}i!==void 0&&(o.title=i),ia(o.documentElement,l),ia(o.body,a);const d=new Set([...Object.keys(c),...s]);for(const p of d)Kg(o,p,c[p]||[]);s.clear(),Object.keys(c).forEach(p=>s.add(p))}};return r},Gg=typeof window!="undefined",Qg=e=>{const t=Ng(),s=H(e);t.addHeadObjs(s),Gg&&(eo(()=>{t.updateDOM()}),no(()=>{t.removeHeadObjs(s),t.updateDOM()}))},Yg=(e,t)=>{const s=r=>{if(r.props.renderPriority)return r.props.renderPriority;switch(r.tag){case"base":return-1;case"meta":return r.props.charset?-2:r.props["http-equiv"]==="content-security-policy"?0:10;default:return 10}};return s(e)-s(t)};const br=Symbol("v-click-clicks"),zn=Symbol("v-click-clicks-elements"),ti=Symbol("v-click-clicks-order-map"),yr=Symbol("v-click-clicks-disabled"),Au=Symbol("slidev-slide-scale"),z=Symbol("slidev-slidev-context"),Zg=Symbol("slidev-route"),Jg=Symbol("slidev-slide-context"),qn="slidev-vclick-target",jo="slidev-vclick-hidden",Xg="slidev-vclick-fade",xo="slidev-vclick-hidden-explicitly",ks="slidev-vclick-current",pr="slidev-vclick-prior";function Zi(e){return e=e||[],Array.isArray(e)?e:[e]}function la(e,t){if(!e)return!1;const s=e.indexOf(t);return s>=0?(e.splice(s,1),!0):!1}function em(e){return e!=null}function tm(e,t){return Object.fromEntries(Object.entries(e).map(([s,r])=>t(s,r)).filter(em))}var $n={theme:"default",title:"eslint-plugin-vue \u3092\u4F7F\u7528\u3057\u3066\u7D99\u7D9A\u7684\u306B Vue3 \u79FB\u884C\u3059\u308B",titleTemplate:"%s",addons:[],remoteAssets:!1,monaco:"dev",download:!0,info:!1,highlighter:"shiki",lineNumbers:!1,colorSchema:"dark",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",record:"dev"};const je=$n;var Sc;const un=(Sc=je.aspectRatio)!=null?Sc:16/9;var Ac;const Tn=(Ac=je.canvasWidth)!=null?Ac:980,Cu=Math.round(Tn/un),Tu=A(()=>tm(je.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function xt(e,t,s){Object.defineProperty(e,t,{value:s,writable:!0,enumerable:!1})}const Ln=Ie({page:0,clicks:0});let nm=[],sm=[];xt(Ln,"$syncUp",!0);xt(Ln,"$syncDown",!0);xt(Ln,"$paused",!1);xt(Ln,"$onSet",e=>nm.push(e));xt(Ln,"$onPatch",e=>sm.push(e));xt(Ln,"$patch",async()=>!1);function Bu(e,t,s=!1){const r=[];let o=!1,i=!1,l,a;const c=Ie(t);function d(m){r.push(m)}function p(m,v){clearTimeout(l),o=!0,c[m]=v,l=setTimeout(()=>o=!1,0)}function h(m){o||(clearTimeout(a),i=!0,Object.entries(m).forEach(([v,k])=>{c[v]=k}),a=setTimeout(()=>i=!1,0))}function g(m){let v;s?s&&window.addEventListener("storage",j=>{j&&j.key===m&&j.newValue&&h(JSON.parse(j.newValue))}):(v=new BroadcastChannel(m),v.addEventListener("message",j=>h(j.data)));function k(){!s&&v&&!i?v.postMessage(ke(c)):s&&!i&&window.localStorage.setItem(m,JSON.stringify(c)),o||r.forEach(j=>j(c))}if(ce(c,k,{deep:!0}),s){const j=window.localStorage.getItem(m);j&&h(JSON.parse(j))}}return{init:g,onPatch:d,patch:p,state:c}}const{init:rm,onPatch:om,patch:aa,state:wo}=Bu(Ln,{page:1,clicks:0}),Dn=Ie({});let im=[],lm=[];xt(Dn,"$syncUp",!0);xt(Dn,"$syncDown",!0);xt(Dn,"$paused",!1);xt(Dn,"$onSet",e=>im.push(e));xt(Dn,"$onPatch",e=>lm.push(e));xt(Dn,"$patch",async()=>!1);const{init:am,onPatch:cm,patch:Iu,state:Or}=Bu(Dn,{},!1),um="modulepreload",ca={},dm="/vue-fes-japan-online-2022-slide/",ms=function(t,s){return!s||s.length===0?t():Promise.all(s.map(r=>{if(r=`${dm}${r}`,r in ca)return;ca[r]=!0;const o=r.endsWith(".css"),i=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":um,o||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),o)return new Promise((a,c)=>{l.addEventListener("load",a),l.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};var ua;const jt=typeof window!="undefined",pm=e=>typeof e!="undefined",hm=Object.prototype.toString,Pu=e=>typeof e=="string",gm=e=>hm.call(e)==="[object Object]",ni=()=>+Date.now(),_r=()=>{};jt&&((ua=window==null?void 0:window.navigator)==null?void 0:ua.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function mm(e,t){function s(...r){e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})}return s}const Ou=e=>e();function fm(e=Ou){const t=H(!0);function s(){t.value=!1}function r(){t.value=!0}return{isActive:t,pause:s,resume:r,eventFilter:(...i)=>{t.value&&e(...i)}}}function vm(e,t){var s;if(typeof e=="number")return e+t;const r=((s=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",o=e.slice(r.length),i=parseFloat(r)+t;return Number.isNaN(i)?e:i+o}function Vn(e){return Fc()?(Lc(e),!0):!1}function Ne(...e){return A(()=>e.every(t=>_(t)))}function ht(e){return A(()=>!_(e))}function bm(e){if(!xe(e))return Ie(e);const t=new Proxy({},{get(s,r,o){return _(Reflect.get(e.value,r,o))},set(s,r,o){return xe(e.value[r])&&!xe(o)?e.value[r].value=o:e.value[r]=o,!0},deleteProperty(s,r){return Reflect.deleteProperty(e.value,r)},has(s,r){return Reflect.has(e.value,r)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Ie(t)}var ym=Object.defineProperty,_m=Object.defineProperties,km=Object.getOwnPropertyDescriptors,da=Object.getOwnPropertySymbols,jm=Object.prototype.hasOwnProperty,xm=Object.prototype.propertyIsEnumerable,pa=(e,t,s)=>t in e?ym(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,wm=(e,t)=>{for(var s in t||(t={}))jm.call(t,s)&&pa(e,s,t[s]);if(da)for(var s of da(t))xm.call(t,s)&&pa(e,s,t[s]);return e},$m=(e,t)=>_m(e,km(t));function Em(e){if(!xe(e))return dh(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const s in e.value)t[s]=uh(()=>({get(){return e.value[s]},set(r){if(Array.isArray(e.value)){const o=[...e.value];o[s]=r,e.value=o}else{const o=$m(wm({},e.value),{[s]:r});Object.setPrototypeOf(o,e.value),e.value=o}}}));return t}function Sm(e,t=!0){fn()?cu(e):t?e():Ye(e)}function Am(e,t=!0){fn()?ps(e):t?e():Ye(e)}function Cm(e,t=1e3,s={}){const{immediate:r=!0,immediateCallback:o=!1}=s;let i=null;const l=H(!1);function a(){i&&(clearInterval(i),i=null)}function c(){l.value=!1,a()}function d(){_(t)<=0||(l.value=!0,o&&e(),a(),i=setInterval(e,_(t)))}if(r&&jt&&d(),xe(t)){const p=ce(t,()=>{l.value&&jt&&d()});Vn(p)}return Vn(c),{isActive:l,pause:c,resume:d}}function Vu(e=!1,t={}){const{truthyValue:s=!0,falsyValue:r=!1}=t,o=xe(e),i=H(e);function l(a){return arguments.length?(i.value=a,i.value):(i.value=i.value===_(s)?_(r):_(s),i.value)}return o?l:[i,l]}var ha=Object.getOwnPropertySymbols,Tm=Object.prototype.hasOwnProperty,Bm=Object.prototype.propertyIsEnumerable,Im=(e,t)=>{var s={};for(var r in e)Tm.call(e,r)&&t.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&ha)for(var r of ha(e))t.indexOf(r)<0&&Bm.call(e,r)&&(s[r]=e[r]);return s};function Pm(e,t,s={}){const r=s,{eventFilter:o=Ou}=r,i=Im(r,["eventFilter"]);return ce(e,mm(o,t),i)}var Om=Object.defineProperty,Vm=Object.defineProperties,Fm=Object.getOwnPropertyDescriptors,Vr=Object.getOwnPropertySymbols,Fu=Object.prototype.hasOwnProperty,Lu=Object.prototype.propertyIsEnumerable,ga=(e,t,s)=>t in e?Om(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Lm=(e,t)=>{for(var s in t||(t={}))Fu.call(t,s)&&ga(e,s,t[s]);if(Vr)for(var s of Vr(t))Lu.call(t,s)&&ga(e,s,t[s]);return e},Dm=(e,t)=>Vm(e,Fm(t)),Mm=(e,t)=>{var s={};for(var r in e)Fu.call(e,r)&&t.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&Vr)for(var r of Vr(e))t.indexOf(r)<0&&Lu.call(e,r)&&(s[r]=e[r]);return s};function Rm(e,t,s={}){const r=s,{eventFilter:o}=r,i=Mm(r,["eventFilter"]),{eventFilter:l,pause:a,resume:c,isActive:d}=fm(o);return{stop:Pm(e,t,Dm(Lm({},i),{eventFilter:l})),pause:a,resume:c,isActive:d}}function Yt(e){var t;const s=_(e);return(t=s==null?void 0:s.$el)!=null?t:s}const ct=jt?window:void 0,qm=jt?window.document:void 0;function Se(...e){let t,s,r,o;if(Pu(e[0])?([s,r,o]=e,t=ct):[t,s,r,o]=e,!t)return _r;let i=_r;const l=ce(()=>Yt(t),c=>{i(),c&&(c.addEventListener(s,r,o),i=()=>{c.removeEventListener(s,r,o),i=_r})},{immediate:!0,flush:"post"}),a=()=>{l(),i()};return Vn(a),a}function Nm(e,t,s={}){const{window:r=ct,ignore:o,capture:i=!0,detectIframe:l=!1}=s;if(!r)return;const a=H(!0);let c;const d=g=>{r.clearTimeout(c);const m=Yt(e),v=g.composedPath();!m||m===g.target||v.includes(m)||!a.value||o&&o.length>0&&o.some(k=>{const j=Yt(k);return j&&(g.target===j||v.includes(j))})||t(g)},p=[Se(r,"click",d,{passive:!0,capture:i}),Se(r,"pointerdown",g=>{const m=Yt(e);a.value=!!m&&!g.composedPath().includes(m)},{passive:!0}),Se(r,"pointerup",g=>{if(g.button===0){const m=g.composedPath();g.composedPath=()=>m,c=r.setTimeout(()=>d(g),50)}},{passive:!0}),l&&Se(r,"blur",g=>{var m;const v=Yt(e);((m=document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(v!=null&&v.contains(document.activeElement))&&t(g)})].filter(Boolean);return()=>p.forEach(g=>g())}const Um=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):e?()=>!0:()=>!1;function Hm(e,t,s={}){const{target:r=ct,eventName:o="keydown",passive:i=!1}=s,l=Um(e);return Se(r,o,c=>{l(c)&&t(c)},i)}function zm(e={}){const{window:t=ct}=e,s=H(0);return t&&(Se(t,"blur",()=>s.value+=1,!0),Se(t,"focus",()=>s.value+=1,!0)),A(()=>(s.value,t==null?void 0:t.document.activeElement))}function kr(e,t={}){const{window:s=ct}=t,r=Boolean(s&&"matchMedia"in s&&typeof s.matchMedia=="function");let o;const i=H(!1),l=()=>{!r||(o||(o=s.matchMedia(e)),i.value=o.matches)};return Sm(()=>{l(),o&&("addEventListener"in o?o.addEventListener("change",l):o.addListener(l),Vn(()=>{"removeEventListener"in o?o.removeEventListener("change",l):o.removeListener(l)}))}),i}const Km={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var Wm=Object.defineProperty,ma=Object.getOwnPropertySymbols,Gm=Object.prototype.hasOwnProperty,Qm=Object.prototype.propertyIsEnumerable,fa=(e,t,s)=>t in e?Wm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ym=(e,t)=>{for(var s in t||(t={}))Gm.call(t,s)&&fa(e,s,t[s]);if(ma)for(var s of ma(t))Qm.call(t,s)&&fa(e,s,t[s]);return e};function Zm(e,t={}){function s(a,c){let d=e[a];return c!=null&&(d=vm(d,c)),typeof d=="number"&&(d=`${d}px`),d}const{window:r=ct}=t;function o(a){return r?r.matchMedia(a).matches:!1}const i=a=>kr(`(min-width: ${s(a)})`,t),l=Object.keys(e).reduce((a,c)=>(Object.defineProperty(a,c,{get:()=>i(c),enumerable:!0,configurable:!0}),a),{});return Ym({greater:i,smaller(a){return kr(`(max-width: ${s(a,-.1)})`,t)},between(a,c){return kr(`(min-width: ${s(a)}) and (max-width: ${s(c,-.1)})`,t)},isGreater(a){return o(`(min-width: ${s(a)})`)},isSmaller(a){return o(`(max-width: ${s(a,-.1)})`)},isInBetween(a,c){return o(`(min-width: ${s(a)}) and (max-width: ${s(c,-.1)})`)}},l)}const si=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},ri="__vueuse_ssr_handlers__";si[ri]=si[ri]||{};const Jm=si[ri];function Xm(e,t){return Jm[e]||t}function ef(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const tf={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Vt(e,t,s,r={}){var o;const{flush:i="pre",deep:l=!0,listenToStorageChanges:a=!0,writeDefaults:c=!0,shallow:d,window:p=ct,eventFilter:h,onError:g=P=>{console.error(P)}}=r,m=(d?Pt:H)(t);if(!s)try{s=Xm("getDefaultStorage",()=>{var P;return(P=ct)==null?void 0:P.localStorage})()}catch(P){g(P)}if(!s)return m;const v=_(t),k=ef(v),j=(o=r.serializer)!=null?o:tf[k],{pause:E,resume:x}=Rm(m,()=>$(m.value),{flush:i,deep:l,eventFilter:h});return p&&a&&Se(p,"storage",D),D(),m;function $(P){try{P==null?s.removeItem(e):s.setItem(e,j.write(P))}catch(K){g(K)}}function C(P){if(!(P&&P.key!==e)){E();try{const K=P?P.newValue:s.getItem(e);return K==null?(c&&v!==null&&s.setItem(e,j.write(v)),v):typeof K!="string"?K:j.read(K)}catch(K){g(K)}finally{x()}}}function D(P){P&&P.key!==e||(m.value=C(P))}}function nf(e){return kr("(prefers-color-scheme: dark)",e)}var sf=Object.defineProperty,rf=Object.defineProperties,of=Object.getOwnPropertyDescriptors,va=Object.getOwnPropertySymbols,lf=Object.prototype.hasOwnProperty,af=Object.prototype.propertyIsEnumerable,ba=(e,t,s)=>t in e?sf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,cf=(e,t)=>{for(var s in t||(t={}))lf.call(t,s)&&ba(e,s,t[s]);if(va)for(var s of va(t))af.call(t,s)&&ba(e,s,t[s]);return e},uf=(e,t)=>rf(e,of(t));function I8(e,t={}){var s,r;const o=(s=t.draggingElement)!=null?s:ct,i=H((r=t.initialValue)!=null?r:{x:0,y:0}),l=H(),a=g=>t.pointerTypes?t.pointerTypes.includes(g.pointerType):!0,c=g=>{_(t.preventDefault)&&g.preventDefault(),_(t.stopPropagation)&&g.stopPropagation()},d=g=>{var m;if(!a(g)||_(t.exact)&&g.target!==_(e))return;const v=_(e).getBoundingClientRect(),k={x:g.pageX-v.left,y:g.pageY-v.top};((m=t.onStart)==null?void 0:m.call(t,k,g))!==!1&&(l.value=k,c(g))},p=g=>{var m;!a(g)||!l.value||(i.value={x:g.pageX-l.value.x,y:g.pageY-l.value.y},(m=t.onMove)==null||m.call(t,i.value,g),c(g))},h=g=>{var m;!a(g)||!l.value||(l.value=void 0,(m=t.onEnd)==null||m.call(t,i.value,g),c(g))};return jt&&(Se(e,"pointerdown",d,!0),Se(o,"pointermove",p,!0),Se(o,"pointerup",h,!0)),uf(cf({},Em(i)),{position:i,isDragging:A(()=>!!l.value),style:A(()=>`left:${i.value.x}px;top:${i.value.y}px;`)})}var ya=Object.getOwnPropertySymbols,df=Object.prototype.hasOwnProperty,pf=Object.prototype.propertyIsEnumerable,hf=(e,t)=>{var s={};for(var r in e)df.call(e,r)&&t.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&ya)for(var r of ya(e))t.indexOf(r)<0&&pf.call(e,r)&&(s[r]=e[r]);return s};function gf(e,t,s={}){const r=s,{window:o=ct}=r,i=hf(r,["window"]);let l;const a=o&&"ResizeObserver"in o,c=()=>{l&&(l.disconnect(),l=void 0)},d=ce(()=>Yt(e),h=>{c(),a&&o&&h&&(l=new ResizeObserver(t),l.observe(h,i))},{immediate:!0,flush:"post"}),p=()=>{c(),d()};return Vn(p),{isSupported:a,stop:p}}function Du(e,t={}){const{immediate:s=!0,window:r=ct}=t,o=H(!1);let i=null;function l(){!o.value||!r||(e(),i=r.requestAnimationFrame(l))}function a(){!o.value&&r&&(o.value=!0,l())}function c(){o.value=!1,i!=null&&r&&(r.cancelAnimationFrame(i),i=null)}return s&&a(),Vn(c),{isActive:o,pause:c,resume:a}}function mf(e,t={width:0,height:0},s={}){const r=H(t.width),o=H(t.height);return gf(e,([i])=>{r.value=i.contentRect.width,o.value=i.contentRect.height},s),ce(()=>Yt(e),i=>{r.value=i?t.width:0,o.value=i?t.height:0}),{width:r,height:o}}const _a=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function ff(e,t={}){const{document:s=qm,autoExit:r=!1}=t,o=e||(s==null?void 0:s.querySelector("html")),i=H(!1);let l=!1,a=_a[0];if(!s)l=!1;else for(const k of _a)if(k[1]in s){a=k,l=!0;break}const[c,d,p,,h]=a;async function g(){!l||(s!=null&&s[p]&&await s[d](),i.value=!1)}async function m(){if(!l)return;await g();const k=Yt(o);k&&(await k[c](),i.value=!0)}async function v(){i.value?await g():await m()}return s&&Se(s,h,()=>{i.value=!!(s!=null&&s[p])},!1),r&&Vn(g),{isSupported:l,isFullscreen:i,enter:m,exit:g,toggle:v}}const vf={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function bf(e={}){const{reactive:t=!1,target:s=ct,aliasMap:r=vf,passive:o=!0,onEventFired:i=_r}=e,l=Ie(new Set),a={toJSON(){return{}},current:l},c=t?Ie(a):a,d=new Set,p=new Set;function h(k,j){k in c&&(t?c[k]=j:c[k].value=j)}function g(){for(const k of p)h(k,!1)}function m(k,j){var E,x;const $=(E=k.key)==null?void 0:E.toLowerCase(),C=(x=k.code)==null?void 0:x.toLowerCase(),D=[C,$].filter(Boolean);C&&(j?l.add(k.code):l.delete(k.code));for(const P of D)p.add(P),h(P,j);$==="meta"&&!j?(d.forEach(P=>{l.delete(P),h(P,!1)}),d.clear()):typeof k.getModifierState=="function"&&k.getModifierState("Meta")&&j&&[...l,...D].forEach(P=>d.add(P))}s&&(Se(s,"keydown",k=>(m(k,!0),i(k)),{passive:o}),Se(s,"keyup",k=>(m(k,!1),i(k)),{passive:o}),Se("blur",g,{passive:!0}),Se("focus",g,{passive:!0}));const v=new Proxy(c,{get(k,j,E){if(typeof j!="string")return Reflect.get(k,j,E);if(j=j.toLowerCase(),j in r&&(j=r[j]),!(j in c))if(/[+_-]/.test(j)){const $=j.split(/[+_-]/g).map(C=>C.trim());c[j]=A(()=>$.every(C=>_(v[C])))}else c[j]=H(!1);const x=Reflect.get(k,j,E);return t?_(x):x}});return v}function P8(e={}){const{type:t="page",touch:s=!0,resetOnTouchEnds:r=!1,initialValue:o={x:0,y:0},window:i=ct,eventFilter:l}=e,a=H(o.x),c=H(o.y),d=H(null),p=k=>{t==="page"?(a.value=k.pageX,c.value=k.pageY):t==="client"&&(a.value=k.clientX,c.value=k.clientY),d.value="mouse"},h=()=>{a.value=o.x,c.value=o.y},g=k=>{if(k.touches.length>0){const j=k.touches[0];t==="page"?(a.value=j.pageX,c.value=j.pageY):t==="client"&&(a.value=j.clientX,c.value=j.clientY),d.value="touch"}},m=k=>l===void 0?p(k):l(()=>p(k),{}),v=k=>l===void 0?g(k):l(()=>g(k),{});return i&&(Se(i,"mousemove",m,{passive:!0}),Se(i,"dragover",m,{passive:!0}),s&&(Se(i,"touchstart",v,{passive:!0}),Se(i,"touchmove",v,{passive:!0}),r&&Se(i,"touchend",h,{passive:!0}))),{x:a,y:c,sourceType:d}}var Qt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Qt||(Qt={}));function yf(e,t={}){const s=H(e),{threshold:r=50,onSwipe:o,onSwipeEnd:i,onSwipeStart:l}=t,a=Ie({x:0,y:0}),c=(P,K)=>{a.x=P,a.y=K},d=Ie({x:0,y:0}),p=(P,K)=>{d.x=P,d.y=K},h=A(()=>a.x-d.x),g=A(()=>a.y-d.y),{max:m,abs:v}=Math,k=A(()=>m(v(h.value),v(g.value))>=r),j=H(!1),E=H(!1),x=A(()=>k.value?v(h.value)>v(g.value)?h.value>0?Qt.LEFT:Qt.RIGHT:g.value>0?Qt.UP:Qt.DOWN:Qt.NONE),$=P=>t.pointerTypes?t.pointerTypes.includes(P.pointerType):!0,C=[Se(e,"pointerdown",P=>{var K,se;if(!$(P))return;E.value=!0,(se=(K=s.value)==null?void 0:K.style)==null||se.setProperty("touch-action","none");const ve=P.target;ve==null||ve.setPointerCapture(P.pointerId);const{clientX:pe,clientY:ye}=P;c(pe,ye),p(pe,ye),l==null||l(P)}),Se(e,"pointermove",P=>{if(!$(P)||!E.value)return;const{clientX:K,clientY:se}=P;p(K,se),!j.value&&k.value&&(j.value=!0),j.value&&(o==null||o(P))}),Se(e,"pointerup",P=>{var K,se;!$(P)||(j.value&&(i==null||i(P,x.value)),E.value=!1,j.value=!1,(se=(K=s.value)==null?void 0:K.style)==null||se.setProperty("touch-action","initial"))})],D=()=>C.forEach(P=>P());return{isSwiping:Wn(j),direction:Wn(x),posStart:Wn(a),posEnd:Wn(d),distanceX:h,distanceY:g,stop:D}}var _f=Object.defineProperty,ka=Object.getOwnPropertySymbols,kf=Object.prototype.hasOwnProperty,jf=Object.prototype.propertyIsEnumerable,ja=(e,t,s)=>t in e?_f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,xf=(e,t)=>{for(var s in t||(t={}))kf.call(t,s)&&ja(e,s,t[s]);if(ka)for(var s of ka(t))jf.call(t,s)&&ja(e,s,t[s]);return e};function O8(e={}){const{controls:t=!1,offset:s=0,immediate:r=!0,interval:o="requestAnimationFrame"}=e,i=H(ni()+s),l=()=>i.value=ni()+s,a=o==="requestAnimationFrame"?Du(l,{immediate:r}):Cm(l,o,{immediate:r});return t?xf({timestamp:i},a):i}function Nt(e,t,s,r={}){var o,i,l;const{passive:a=!1,eventName:c,deep:d=!1,defaultValue:p}=r,h=fn(),g=s||(h==null?void 0:h.emit)||((o=h==null?void 0:h.$emit)==null?void 0:o.bind(h))||((l=(i=h==null?void 0:h.proxy)==null?void 0:i.$emit)==null?void 0:l.bind(h==null?void 0:h.proxy));let m=c;t||(t="modelValue"),m=c||m||`update:${t.toString()}`;const v=()=>pm(e[t])?e[t]:p;if(a){const k=H(v());return ce(()=>e[t],j=>k.value=j),ce(k,j=>{(j!==e[t]||d)&&g(m,j)},{deep:d}),k}else return A({get(){return v()},set(k){g(m,k)}})}function V8({window:e=ct}={}){if(!e)return H(!1);const t=H(e.document.hasFocus());return Se(e,"blur",()=>{t.value=!1}),Se(e,"focus",()=>{t.value=!0}),t}function wf(e={}){const{window:t=ct,initialWidth:s=1/0,initialHeight:r=1/0,listenOrientation:o=!0}=e,i=H(s),l=H(r),a=()=>{t&&(i.value=t.innerWidth,l.value=t.innerHeight)};return a(),Am(a),Se("resize",a,{passive:!0}),o&&Se("orientationchange",a,{passive:!0}),{width:i,height:l}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Kn=typeof window!="undefined";function $f(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const $e=Object.assign;function $o(e,t){const s={};for(const r in t){const o=t[r];s[r]=Ot(o)?o.map(e):e(o)}return s}const Bs=()=>{},Ot=Array.isArray,Ef=/\/$/,Sf=e=>e.replace(Ef,"");function Eo(e,t,s="/"){let r,o={},i="",l="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),o=e(i)),a>-1&&(r=r||t.slice(0,a),l=t.slice(a,t.length)),r=Bf(r!=null?r:t,s),{fullPath:r+(i&&"?")+i+l,path:r,query:o,hash:l}}function Af(e,t){const s=t.query?e(t.query):"";return t.path+(s&&"?")+s+(t.hash||"")}function xa(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Cf(e,t,s){const r=t.matched.length-1,o=s.matched.length-1;return r>-1&&r===o&&ls(t.matched[r],s.matched[o])&&Mu(t.params,s.params)&&e(t.query)===e(s.query)&&t.hash===s.hash}function ls(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Mu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const s in e)if(!Tf(e[s],t[s]))return!1;return!0}function Tf(e,t){return Ot(e)?wa(e,t):Ot(t)?wa(t,e):e===t}function wa(e,t){return Ot(t)?e.length===t.length&&e.every((s,r)=>s===t[r]):e.length===1&&e[0]===t}function Bf(e,t){if(e.startsWith("/"))return e;if(!e)return t;const s=t.split("/"),r=e.split("/");let o=s.length-1,i,l;for(i=0;i<r.length;i++)if(l=r[i],l!==".")if(l==="..")o>1&&o--;else break;return s.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Hs;(function(e){e.pop="pop",e.push="push"})(Hs||(Hs={}));var Is;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Is||(Is={}));function If(e){if(!e)if(Kn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Sf(e)}const Pf=/^[^#]+#/;function Of(e,t){return e.replace(Pf,"#")+t}function Vf(e,t){const s=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-s.left-(t.left||0),top:r.top-s.top-(t.top||0)}}const oo=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ff(e){let t;if("el"in e){const s=e.el,r=typeof s=="string"&&s.startsWith("#"),o=typeof s=="string"?r?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!o)return;t=Vf(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function $a(e,t){return(history.state?history.state.position-t:-1)+e}const oi=new Map;function Lf(e,t){oi.set(e,t)}function Df(e){const t=oi.get(e);return oi.delete(e),t}let Mf=()=>location.protocol+"//"+location.host;function Ru(e,t){const{pathname:s,search:r,hash:o}=t,i=e.indexOf("#");if(i>-1){let a=o.includes(e.slice(i))?e.slice(i).length:1,c=o.slice(a);return c[0]!=="/"&&(c="/"+c),xa(c,"")}return xa(s,e)+r+o}function Rf(e,t,s,r){let o=[],i=[],l=null;const a=({state:g})=>{const m=Ru(e,location),v=s.value,k=t.value;let j=0;if(g){if(s.value=m,t.value=g,l&&l===v){l=null;return}j=k?g.position-k.position:0}else r(m);o.forEach(E=>{E(s.value,v,{delta:j,type:Hs.pop,direction:j?j>0?Is.forward:Is.back:Is.unknown})})};function c(){l=s.value}function d(g){o.push(g);const m=()=>{const v=o.indexOf(g);v>-1&&o.splice(v,1)};return i.push(m),m}function p(){const{history:g}=window;!g.state||g.replaceState($e({},g.state,{scroll:oo()}),"")}function h(){for(const g of i)g();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",p),{pauseListeners:c,listen:d,destroy:h}}function Ea(e,t,s,r=!1,o=!1){return{back:e,current:t,forward:s,replaced:r,position:window.history.length,scroll:o?oo():null}}function qf(e){const{history:t,location:s}=window,r={value:Ru(e,s)},o={value:t.state};o.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,d,p){const h=e.indexOf("#"),g=h>-1?(s.host&&document.querySelector("base")?e:e.slice(h))+c:Mf()+e+c;try{t[p?"replaceState":"pushState"](d,"",g),o.value=d}catch(m){console.error(m),s[p?"replace":"assign"](g)}}function l(c,d){const p=$e({},t.state,Ea(o.value.back,c,o.value.forward,!0),d,{position:o.value.position});i(c,p,!0),r.value=c}function a(c,d){const p=$e({},o.value,t.state,{forward:c,scroll:oo()});i(p.current,p,!0);const h=$e({},Ea(r.value,c,null),{position:p.position+1},d);i(c,h,!1),r.value=c}return{location:r,state:o,push:a,replace:l}}function Nf(e){e=If(e);const t=qf(e),s=Rf(e,t.state,t.location,t.replace);function r(i,l=!0){l||s.pauseListeners(),history.go(i)}const o=$e({location:"",base:e,go:r,createHref:Of.bind(null,e)},t,s);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Uf(e){return typeof e=="string"||e&&typeof e=="object"}function qu(e){return typeof e=="string"||typeof e=="symbol"}const sn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Nu=Symbol("");var Sa;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Sa||(Sa={}));function as(e,t){return $e(new Error,{type:e,[Nu]:!0},t)}function zt(e,t){return e instanceof Error&&Nu in e&&(t==null||!!(e.type&t))}const Aa="[^/]+?",Hf={sensitive:!1,strict:!1,start:!0,end:!0},zf=/[.+*?^${}()[\]/\\]/g;function Kf(e,t){const s=$e({},Hf,t),r=[];let o=s.start?"^":"";const i=[];for(const d of e){const p=d.length?[]:[90];s.strict&&!d.length&&(o+="/");for(let h=0;h<d.length;h++){const g=d[h];let m=40+(s.sensitive?.25:0);if(g.type===0)h||(o+="/"),o+=g.value.replace(zf,"\\$&"),m+=40;else if(g.type===1){const{value:v,repeatable:k,optional:j,regexp:E}=g;i.push({name:v,repeatable:k,optional:j});const x=E||Aa;if(x!==Aa){m+=10;try{new RegExp(`(${x})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${v}" (${x}): `+C.message)}}let $=k?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||($=j&&d.length<2?`(?:/${$})`:"/"+$),j&&($+="?"),o+=$,m+=20,j&&(m+=-8),k&&(m+=-20),x===".*"&&(m+=-50)}p.push(m)}r.push(p)}if(s.strict&&s.end){const d=r.length-1;r[d][r[d].length-1]+=.7000000000000001}s.strict||(o+="/?"),s.end?o+="$":s.strict&&(o+="(?:/|$)");const l=new RegExp(o,s.sensitive?"":"i");function a(d){const p=d.match(l),h={};if(!p)return null;for(let g=1;g<p.length;g++){const m=p[g]||"",v=i[g-1];h[v.name]=m&&v.repeatable?m.split("/"):m}return h}function c(d){let p="",h=!1;for(const g of e){(!h||!p.endsWith("/"))&&(p+="/"),h=!1;for(const m of g)if(m.type===0)p+=m.value;else if(m.type===1){const{value:v,repeatable:k,optional:j}=m,E=v in d?d[v]:"";if(Ot(E)&&!k)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const x=Ot(E)?E.join("/"):E;if(!x)if(j)g.length<2&&(p.endsWith("/")?p=p.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);p+=x}}return p||"/"}return{re:l,score:r,keys:i,parse:a,stringify:c}}function Wf(e,t){let s=0;for(;s<e.length&&s<t.length;){const r=t[s]-e[s];if(r)return r;s++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Gf(e,t){let s=0;const r=e.score,o=t.score;for(;s<r.length&&s<o.length;){const i=Wf(r[s],o[s]);if(i)return i;s++}if(Math.abs(o.length-r.length)===1){if(Ca(r))return 1;if(Ca(o))return-1}return o.length-r.length}function Ca(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Qf={type:0,value:""},Yf=/[a-zA-Z0-9_]/;function Zf(e){if(!e)return[[]];if(e==="/")return[[Qf]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${s})/"${d}": ${m}`)}let s=0,r=s;const o=[];let i;function l(){i&&o.push(i),i=[]}let a=0,c,d="",p="";function h(){!d||(s===0?i.push({type:0,value:d}):s===1||s===2||s===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:d,regexp:p,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),d="")}function g(){d+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&s!==2){r=s,s=4;continue}switch(s){case 0:c==="/"?(d&&h(),l()):c===":"?(h(),s=1):g();break;case 4:g(),s=r;break;case 1:c==="("?s=2:Yf.test(c)?g():(h(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+c:s=3:p+=c;break;case 3:h(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,p="";break;default:t("Unknown state");break}}return s===2&&t(`Unfinished custom RegExp for param "${d}"`),h(),l(),o}function Jf(e,t,s){const r=Kf(Zf(e.path),s),o=$e(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Xf(e,t){const s=[],r=new Map;t=Ia({strict:!1,end:!0,sensitive:!1},t);function o(p){return r.get(p)}function i(p,h,g){const m=!g,v=ev(p);v.aliasOf=g&&g.record;const k=Ia(t,p),j=[v];if("alias"in p){const $=typeof p.alias=="string"?[p.alias]:p.alias;for(const C of $)j.push($e({},v,{components:g?g.record.components:v.components,path:C,aliasOf:g?g.record:v}))}let E,x;for(const $ of j){const{path:C}=$;if(h&&C[0]!=="/"){const D=h.record.path,P=D[D.length-1]==="/"?"":"/";$.path=h.record.path+(C&&P+C)}if(E=Jf($,h,k),g?g.alias.push(E):(x=x||E,x!==E&&x.alias.push(E),m&&p.name&&!Ba(E)&&l(p.name)),v.children){const D=v.children;for(let P=0;P<D.length;P++)i(D[P],E,g&&g.children[P])}g=g||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&c(E)}return x?()=>{l(x)}:Bs}function l(p){if(qu(p)){const h=r.get(p);h&&(r.delete(p),s.splice(s.indexOf(h),1),h.children.forEach(l),h.alias.forEach(l))}else{const h=s.indexOf(p);h>-1&&(s.splice(h,1),p.record.name&&r.delete(p.record.name),p.children.forEach(l),p.alias.forEach(l))}}function a(){return s}function c(p){let h=0;for(;h<s.length&&Gf(p,s[h])>=0&&(p.record.path!==s[h].record.path||!Uu(p,s[h]));)h++;s.splice(h,0,p),p.record.name&&!Ba(p)&&r.set(p.record.name,p)}function d(p,h){let g,m={},v,k;if("name"in p&&p.name){if(g=r.get(p.name),!g)throw as(1,{location:p});k=g.record.name,m=$e(Ta(h.params,g.keys.filter(x=>!x.optional).map(x=>x.name)),p.params&&Ta(p.params,g.keys.map(x=>x.name))),v=g.stringify(m)}else if("path"in p)v=p.path,g=s.find(x=>x.re.test(v)),g&&(m=g.parse(v),k=g.record.name);else{if(g=h.name?r.get(h.name):s.find(x=>x.re.test(h.path)),!g)throw as(1,{location:p,currentLocation:h});k=g.record.name,m=$e({},h.params,p.params),v=g.stringify(m)}const j=[];let E=g;for(;E;)j.unshift(E.record),E=E.parent;return{name:k,path:v,params:m,matched:j,meta:nv(j)}}return e.forEach(p=>i(p)),{addRoute:i,resolve:d,removeRoute:l,getRoutes:a,getRecordMatcher:o}}function Ta(e,t){const s={};for(const r of t)r in e&&(s[r]=e[r]);return s}function ev(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:tv(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function tv(e){const t={},s=e.props||!1;if("component"in e)t.default=s;else for(const r in e.components)t[r]=typeof s=="boolean"?s:s[r];return t}function Ba(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function nv(e){return e.reduce((t,s)=>$e(t,s.meta),{})}function Ia(e,t){const s={};for(const r in e)s[r]=r in t?t[r]:e[r];return s}function Uu(e,t){return t.children.some(s=>s===e||Uu(e,s))}const Hu=/#/g,sv=/&/g,rv=/\//g,ov=/=/g,iv=/\?/g,zu=/\+/g,lv=/%5B/g,av=/%5D/g,Ku=/%5E/g,cv=/%60/g,Wu=/%7B/g,uv=/%7C/g,Gu=/%7D/g,dv=/%20/g;function Ji(e){return encodeURI(""+e).replace(uv,"|").replace(lv,"[").replace(av,"]")}function pv(e){return Ji(e).replace(Wu,"{").replace(Gu,"}").replace(Ku,"^")}function ii(e){return Ji(e).replace(zu,"%2B").replace(dv,"+").replace(Hu,"%23").replace(sv,"%26").replace(cv,"`").replace(Wu,"{").replace(Gu,"}").replace(Ku,"^")}function hv(e){return ii(e).replace(ov,"%3D")}function gv(e){return Ji(e).replace(Hu,"%23").replace(iv,"%3F")}function mv(e){return e==null?"":gv(e).replace(rv,"%2F")}function Fr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function fv(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const i=r[o].replace(zu," "),l=i.indexOf("="),a=Fr(l<0?i:i.slice(0,l)),c=l<0?null:Fr(i.slice(l+1));if(a in t){let d=t[a];Ot(d)||(d=t[a]=[d]),d.push(c)}else t[a]=c}return t}function Pa(e){let t="";for(let s in e){const r=e[s];if(s=hv(s),r==null){r!==void 0&&(t+=(t.length?"&":"")+s);continue}(Ot(r)?r.map(i=>i&&ii(i)):[r&&ii(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+s,i!=null&&(t+="="+i))})}return t}function vv(e){const t={};for(const s in e){const r=e[s];r!==void 0&&(t[s]=Ot(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const bv=Symbol(""),Oa=Symbol(""),Xi=Symbol(""),Qu=Symbol(""),li=Symbol("");function js(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function s(){e=[]}return{add:t,list:()=>e,reset:s}}function on(e,t,s,r,o){const i=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((l,a)=>{const c=h=>{h===!1?a(as(4,{from:s,to:t})):h instanceof Error?a(h):Uf(h)?a(as(2,{from:t,to:h})):(i&&r.enterCallbacks[o]===i&&typeof h=="function"&&i.push(h),l())},d=e.call(r&&r.instances[o],t,s,c);let p=Promise.resolve(d);e.length<3&&(p=p.then(c)),p.catch(h=>a(h))})}function So(e,t,s,r){const o=[];for(const i of e)for(const l in i.components){let a=i.components[l];if(!(t!=="beforeRouteEnter"&&!i.instances[l]))if(yv(a)){const d=(a.__vccOpts||a)[t];d&&o.push(on(d,s,r,i,l))}else{let c=a();o.push(()=>c.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${i.path}"`));const p=$f(d)?d.default:d;i.components[l]=p;const g=(p.__vccOpts||p)[t];return g&&on(g,s,r,i,l)()}))}}return o}function yv(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Va(e){const t=M(Xi),s=M(Qu),r=A(()=>t.resolve(_(e.to))),o=A(()=>{const{matched:c}=r.value,{length:d}=c,p=c[d-1],h=s.matched;if(!p||!h.length)return-1;const g=h.findIndex(ls.bind(null,p));if(g>-1)return g;const m=Fa(c[d-2]);return d>1&&Fa(p)===m&&h[h.length-1].path!==m?h.findIndex(ls.bind(null,c[d-2])):g}),i=A(()=>o.value>-1&&xv(s.params,r.value.params)),l=A(()=>o.value>-1&&o.value===s.matched.length-1&&Mu(s.params,r.value.params));function a(c={}){return jv(c)?t[_(e.replace)?"replace":"push"](_(e.to)).catch(Bs):Promise.resolve()}return{route:r,href:A(()=>r.value.href),isActive:i,isExactActive:l,navigate:a}}const _v=be({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Va,setup(e,{slots:t}){const s=Ie(Va(e)),{options:r}=M(Xi),o=A(()=>({[La(e.activeClass,r.linkActiveClass,"router-link-active")]:s.isActive,[La(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const i=t.default&&t.default(s);return e.custom?i:nt("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:o.value},i)}}}),kv=_v;function jv(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function xv(e,t){for(const s in t){const r=t[s],o=e[s];if(typeof r=="string"){if(r!==o)return!1}else if(!Ot(o)||o.length!==r.length||r.some((i,l)=>i!==o[l]))return!1}return!0}function Fa(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const La=(e,t,s)=>e!=null?e:t!=null?t:s,wv=be({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:s}){const r=M(li),o=A(()=>e.route||r.value),i=M(Oa,0),l=A(()=>{let d=_(i);const{matched:p}=o.value;let h;for(;(h=p[d])&&!h.components;)d++;return d}),a=A(()=>o.value.matched[l.value]);ft(Oa,A(()=>l.value+1)),ft(bv,a),ft(li,o);const c=H();return ce(()=>[c.value,a.value,e.name],([d,p,h],[g,m,v])=>{p&&(p.instances[h]=d,m&&m!==p&&d&&d===g&&(p.leaveGuards.size||(p.leaveGuards=m.leaveGuards),p.updateGuards.size||(p.updateGuards=m.updateGuards))),d&&p&&(!m||!ls(p,m)||!g)&&(p.enterCallbacks[h]||[]).forEach(k=>k(d))},{flush:"post"}),()=>{const d=o.value,p=e.name,h=a.value,g=h&&h.components[p];if(!g)return Da(s.default,{Component:g,route:d});const m=h.props[p],v=m?m===!0?d.params:typeof m=="function"?m(d):m:null,j=nt(g,$e({},v,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(h.instances[p]=null)},ref:c}));return Da(s.default,{Component:j,route:d})||j}}});function Da(e,t){if(!e)return null;const s=e(t);return s.length===1?s[0]:s}const $v=wv;function Ev(e){const t=Xf(e.routes,e),s=e.parseQuery||fv,r=e.stringifyQuery||Pa,o=e.history,i=js(),l=js(),a=js(),c=Pt(sn);let d=sn;Kn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=$o.bind(null,B=>""+B),h=$o.bind(null,mv),g=$o.bind(null,Fr);function m(B,N){let q,J;return qu(B)?(q=t.getRecordMatcher(B),J=N):J=B,t.addRoute(J,q)}function v(B){const N=t.getRecordMatcher(B);N&&t.removeRoute(N)}function k(){return t.getRoutes().map(B=>B.record)}function j(B){return!!t.getRecordMatcher(B)}function E(B,N){if(N=$e({},N||c.value),typeof B=="string"){const f=Eo(s,B,N.path),b=t.resolve({path:f.path},N),w=o.createHref(f.fullPath);return $e(f,b,{params:g(b.params),hash:Fr(f.hash),redirectedFrom:void 0,href:w})}let q;if("path"in B)q=$e({},B,{path:Eo(s,B.path,N.path).path});else{const f=$e({},B.params);for(const b in f)f[b]==null&&delete f[b];q=$e({},B,{params:h(B.params)}),N.params=h(N.params)}const J=t.resolve(q,N),ge=B.hash||"";J.params=p(g(J.params));const _e=Af(r,$e({},B,{hash:pv(ge),path:J.path})),oe=o.createHref(_e);return $e({fullPath:_e,hash:ge,query:r===Pa?vv(B.query):B.query||{}},J,{redirectedFrom:void 0,href:oe})}function x(B){return typeof B=="string"?Eo(s,B,c.value.path):$e({},B)}function $(B,N){if(d!==B)return as(8,{from:N,to:B})}function C(B){return K(B)}function D(B){return C($e(x(B),{replace:!0}))}function P(B){const N=B.matched[B.matched.length-1];if(N&&N.redirect){const{redirect:q}=N;let J=typeof q=="function"?q(B):q;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=x(J):{path:J},J.params={}),$e({query:B.query,hash:B.hash,params:"path"in J?{}:B.params},J)}}function K(B,N){const q=d=E(B),J=c.value,ge=B.state,_e=B.force,oe=B.replace===!0,f=P(q);if(f)return K($e(x(f),{state:typeof f=="object"?$e({},ge,f.state):ge,force:_e,replace:oe}),N||q);const b=q;b.redirectedFrom=N;let w;return!_e&&Cf(r,J,q)&&(w=as(16,{to:b,from:J}),we(J,J,!0,!1)),(w?Promise.resolve(w):ve(b,J)).catch(S=>zt(S)?zt(S,2)?S:he(S):Y(S,b,J)).then(S=>{if(S){if(zt(S,2))return K($e({replace:oe},x(S.to),{state:typeof S.to=="object"?$e({},ge,S.to.state):ge,force:_e}),N||b)}else S=ye(b,J,!0,oe,ge);return pe(b,J,S),S})}function se(B,N){const q=$(B,N);return q?Promise.reject(q):Promise.resolve()}function ve(B,N){let q;const[J,ge,_e]=Sv(B,N);q=So(J.reverse(),"beforeRouteLeave",B,N);for(const f of J)f.leaveGuards.forEach(b=>{q.push(on(b,B,N))});const oe=se.bind(null,B,N);return q.push(oe),Nn(q).then(()=>{q=[];for(const f of i.list())q.push(on(f,B,N));return q.push(oe),Nn(q)}).then(()=>{q=So(ge,"beforeRouteUpdate",B,N);for(const f of ge)f.updateGuards.forEach(b=>{q.push(on(b,B,N))});return q.push(oe),Nn(q)}).then(()=>{q=[];for(const f of B.matched)if(f.beforeEnter&&!N.matched.includes(f))if(Ot(f.beforeEnter))for(const b of f.beforeEnter)q.push(on(b,B,N));else q.push(on(f.beforeEnter,B,N));return q.push(oe),Nn(q)}).then(()=>(B.matched.forEach(f=>f.enterCallbacks={}),q=So(_e,"beforeRouteEnter",B,N),q.push(oe),Nn(q))).then(()=>{q=[];for(const f of l.list())q.push(on(f,B,N));return q.push(oe),Nn(q)}).catch(f=>zt(f,8)?f:Promise.reject(f))}function pe(B,N,q){for(const J of a.list())J(B,N,q)}function ye(B,N,q,J,ge){const _e=$(B,N);if(_e)return _e;const oe=N===sn,f=Kn?history.state:{};q&&(J||oe?o.replace(B.fullPath,$e({scroll:oe&&f&&f.scroll},ge)):o.push(B.fullPath,ge)),c.value=B,we(B,N,q,oe),he()}let We;function qe(){We||(We=o.listen((B,N,q)=>{if(!Mn.listening)return;const J=E(B),ge=P(J);if(ge){K($e(ge,{replace:!0}),J).catch(Bs);return}d=J;const _e=c.value;Kn&&Lf($a(_e.fullPath,q.delta),oo()),ve(J,_e).catch(oe=>zt(oe,12)?oe:zt(oe,2)?(K(oe.to,J).then(f=>{zt(f,20)&&!q.delta&&q.type===Hs.pop&&o.go(-1,!1)}).catch(Bs),Promise.reject()):(q.delta&&o.go(-q.delta,!1),Y(oe,J,_e))).then(oe=>{oe=oe||ye(J,_e,!1),oe&&(q.delta&&!zt(oe,8)?o.go(-q.delta,!1):q.type===Hs.pop&&zt(oe,20)&&o.go(-1,!1)),pe(J,_e,oe)}).catch(Bs)}))}let Ve=js(),Te=js(),Be;function Y(B,N,q){he(B);const J=Te.list();return J.length?J.forEach(ge=>ge(B,N,q)):console.error(B),Promise.reject(B)}function te(){return Be&&c.value!==sn?Promise.resolve():new Promise((B,N)=>{Ve.add([B,N])})}function he(B){return Be||(Be=!B,qe(),Ve.list().forEach(([N,q])=>B?q(B):N()),Ve.reset()),B}function we(B,N,q,J){const{scrollBehavior:ge}=e;if(!Kn||!ge)return Promise.resolve();const _e=!q&&Df($a(B.fullPath,0))||(J||!q)&&history.state&&history.state.scroll||null;return Ye().then(()=>ge(B,N,_e)).then(oe=>oe&&Ff(oe)).catch(oe=>Y(oe,B,N))}const rt=B=>o.go(B);let De;const tn=new Set,Mn={currentRoute:c,listening:!0,addRoute:m,removeRoute:v,hasRoute:j,getRoutes:k,resolve:E,options:e,push:C,replace:D,go:rt,back:()=>rt(-1),forward:()=>rt(1),beforeEach:i.add,beforeResolve:l.add,afterEach:a.add,onError:Te.add,isReady:te,install(B){const N=this;B.component("RouterLink",kv),B.component("RouterView",$v),B.config.globalProperties.$router=N,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>_(c)}),Kn&&!De&&c.value===sn&&(De=!0,C(o.location).catch(ge=>{}));const q={};for(const ge in sn)q[ge]=A(()=>c.value[ge]);B.provide(Xi,N),B.provide(Qu,Ie(q)),B.provide(li,c);const J=B.unmount;tn.add(B),B.unmount=function(){tn.delete(B),tn.size<1&&(d=sn,We&&We(),We=null,c.value=sn,De=!1,Be=!1),J()}}};return Mn}function Nn(e){return e.reduce((t,s)=>t.then(()=>s()),Promise.resolve())}function Sv(e,t){const s=[],r=[],o=[],i=Math.max(t.matched.length,e.matched.length);for(let l=0;l<i;l++){const a=t.matched[l];a&&(e.matched.find(d=>ls(d,a))?r.push(a):s.push(a));const c=e.matched[l];c&&(t.matched.find(d=>ls(d,c))||o.push(c))}return[s,r,o]}const Ao=H(!1),Ps=H(!1),Gn=H(!1),Av=H(!0),ai=Zm({xs:460,...Km}),Bn=wf(),Yu=bf(),Cv=A(()=>Bn.height.value-Bn.width.value/un>180),Zu=ff(jt?document.body:null),ts=zm(),Tv=A(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=ts.value)==null?void 0:e.tagName)||"")||((t=ts.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),Bv=A(()=>{var e;return["BUTTON","A"].includes(((e=ts.value)==null?void 0:e.tagName)||"")});Vt("slidev-camera","default");Vt("slidev-mic","default");const jr=Vt("slidev-scale",0),it=Vt("slidev-show-overview",!1),Co=Vt("slidev-presenter-cursor",!0),Ma=Vt("slidev-show-editor",!1);Vt("slidev-editor-width",jt?window.innerWidth*.4:100);const Ju=Vu(it);function Ra(e,t,s,r=o=>o){return e*r(.5-t*(.5-s))}function Iv(e){return[-e[0],-e[1]]}function St(e,t){return[e[0]+t[0],e[1]+t[1]]}function kt(e,t){return[e[0]-t[0],e[1]-t[1]]}function Et(e,t){return[e[0]*t,e[1]*t]}function Pv(e,t){return[e[0]/t,e[1]/t]}function xs(e){return[e[1],-e[0]]}function qa(e,t){return e[0]*t[0]+e[1]*t[1]}function Ov(e,t){return e[0]===t[0]&&e[1]===t[1]}function Vv(e){return Math.hypot(e[0],e[1])}function Fv(e){return e[0]*e[0]+e[1]*e[1]}function Na(e,t){return Fv(kt(e,t))}function Xu(e){return Pv(e,Vv(e))}function Lv(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function ws(e,t,s){let r=Math.sin(s),o=Math.cos(s),i=e[0]-t[0],l=e[1]-t[1],a=i*o-l*r,c=i*r+l*o;return[a+t[0],c+t[1]]}function ci(e,t,s){return St(e,Et(kt(t,e),s))}function Ua(e,t,s){return St(e,Et(t,s))}var{min:Un,PI:Dv}=Math,Ha=.275,$s=Dv+1e-4;function Mv(e,t={}){let{size:s=16,smoothing:r=.5,thinning:o=.5,simulatePressure:i=!0,easing:l=Y=>Y,start:a={},end:c={},last:d=!1}=t,{cap:p=!0,easing:h=Y=>Y*(2-Y)}=a,{cap:g=!0,easing:m=Y=>--Y*Y*Y+1}=c;if(e.length===0||s<=0)return[];let v=e[e.length-1].runningLength,k=a.taper===!1?0:a.taper===!0?Math.max(s,v):a.taper,j=c.taper===!1?0:c.taper===!0?Math.max(s,v):c.taper,E=Math.pow(s*r,2),x=[],$=[],C=e.slice(0,10).reduce((Y,te)=>{let he=te.pressure;if(i){let we=Un(1,te.distance/s),rt=Un(1,1-we);he=Un(1,Y+(rt-Y)*(we*Ha))}return(Y+he)/2},e[0].pressure),D=Ra(s,o,e[e.length-1].pressure,l),P,K=e[0].vector,se=e[0].point,ve=se,pe=se,ye=ve,We=!1;for(let Y=0;Y<e.length;Y++){let{pressure:te}=e[Y],{point:he,vector:we,distance:rt,runningLength:De}=e[Y];if(Y<e.length-1&&v-De<3)continue;if(o){if(i){let _e=Un(1,rt/s),oe=Un(1,1-_e);te=Un(1,C+(oe-C)*(_e*Ha))}D=Ra(s,o,te,l)}else D=s/2;P===void 0&&(P=D);let tn=De<k?h(De/k):1,Mn=v-De<j?m((v-De)/j):1;D=Math.max(.01,D*Math.min(tn,Mn));let B=(Y<e.length-1?e[Y+1]:e[Y]).vector,N=Y<e.length-1?qa(we,B):1,q=qa(we,K)<0&&!We,J=N!==null&&N<0;if(q||J){let _e=Et(xs(K),D);for(let oe=1/13,f=0;f<=1;f+=oe)pe=ws(kt(he,_e),he,$s*f),x.push(pe),ye=ws(St(he,_e),he,$s*-f),$.push(ye);se=pe,ve=ye,J&&(We=!0);continue}if(We=!1,Y===e.length-1){let _e=Et(xs(we),D);x.push(kt(he,_e)),$.push(St(he,_e));continue}let ge=Et(xs(ci(B,we,N)),D);pe=kt(he,ge),(Y<=1||Na(se,pe)>E)&&(x.push(pe),se=pe),ye=St(he,ge),(Y<=1||Na(ve,ye)>E)&&($.push(ye),ve=ye),C=te,K=we}let qe=e[0].point.slice(0,2),Ve=e.length>1?e[e.length-1].point.slice(0,2):St(e[0].point,[1,1]),Te=[],Be=[];if(e.length===1){if(!(k||j)||d){let Y=Ua(qe,Xu(xs(kt(qe,Ve))),-(P||D)),te=[];for(let he=1/13,we=he;we<=1;we+=he)te.push(ws(Y,qe,$s*2*we));return te}}else{if(!(k||j&&e.length===1))if(p)for(let te=1/13,he=te;he<=1;he+=te){let we=ws($[0],qe,$s*he);Te.push(we)}else{let te=kt(x[0],$[0]),he=Et(te,.5),we=Et(te,.51);Te.push(kt(qe,he),kt(qe,we),St(qe,we),St(qe,he))}let Y=xs(Iv(e[e.length-1].vector));if(j||k&&e.length===1)Be.push(Ve);else if(g){let te=Ua(Ve,Y,D);for(let he=1/29,we=he;we<1;we+=he)Be.push(ws(te,Ve,$s*3*we))}else Be.push(St(Ve,Et(Y,D)),St(Ve,Et(Y,D*.99)),kt(Ve,Et(Y,D*.99)),kt(Ve,Et(Y,D)))}return x.concat(Be,$.reverse(),Te)}function Rv(e,t={}){var s;let{streamline:r=.5,size:o=16,last:i=!1}=t;if(e.length===0)return[];let l=.15+(1-r)*.85,a=Array.isArray(e[0])?e:e.map(({x:m,y:v,pressure:k=.5})=>[m,v,k]);if(a.length===2){let m=a[1];a=a.slice(0,-1);for(let v=1;v<5;v++)a.push(ci(a[0],m,v/4))}a.length===1&&(a=[...a,[...St(a[0],[1,1]),...a[0].slice(2)]]);let c=[{point:[a[0][0],a[0][1]],pressure:a[0][2]>=0?a[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],d=!1,p=0,h=c[0],g=a.length-1;for(let m=1;m<a.length;m++){let v=i&&m===g?a[m].slice(0,2):ci(h.point,a[m],l);if(Ov(h.point,v))continue;let k=Lv(v,h.point);if(p+=k,m<g&&!d){if(p<o)continue;d=!0}h={point:v,pressure:a[m][2]>=0?a[m][2]:.5,vector:Xu(kt(h.point,v)),distance:k,runningLength:p},c.push(h)}return c[0].vector=((s=c[1])==null?void 0:s.vector)||[0,0],c}function qv(e,t={}){return Mv(Rv(e,t),t)}var Nv=()=>({events:{},emit(e,...t){let s=this.events[e]||[];for(let r=0,o=s.length;r<o;r++)s[r](...t)},on(e,t){var s;return(s=this.events[e])!=null&&s.push(t)||(this.events[e]=[t]),()=>{var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(o=>t!==o)}}});function Lr(e,t){return e-t}function Uv(e){return e<0?-1:1}function Dr(e){return[Math.abs(e),Uv(e)]}function ed(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var Hv=2,Gt=Hv,fs=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var o;var t;const s=this.drauu.el,r=(o=this.drauu.options.coordinateScale)!=null?o:1;if(this.drauu.options.coordinateTransform===!1){const i=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-i.left)*r,y:(e.pageY-i.top)*r,pressure:e.pressure}}else{const i=this.drauu.svgPoint;i.x=e.clientX,i.y=e.clientY;const l=i.matrixTransform((t=s.getScreenCTM())==null?void 0:t.inverse());return{x:l.x*r,y:l.y*r,pressure:e.pressure}}}createElement(e,t){var o;const s=document.createElementNS("http://www.w3.org/2000/svg",e),r=t?{...this.brush,...t}:this.brush;return s.setAttribute("fill",(o=r.fill)!=null?o:"transparent"),s.setAttribute("stroke",r.color),s.setAttribute("stroke-width",r.size.toString()),s.setAttribute("stroke-linecap","round"),r.dasharray&&s.setAttribute("stroke-dasharray",r.dasharray),s}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(Gt))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},zv=class extends fs{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=qv(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const s=t.reduce((r,[o,i],l,a)=>{const[c,d]=a[(l+1)%a.length];return r.push(o,i,(o+c)/2,(i+d)/2),r},["M",...t[0],"Q"]);return s.push("Z"),s.map(r=>typeof r=="number"?r.toFixed(2):r).join(" ")}},Kv=class extends fs{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,s]=Dr(e.x-this.start.x),[r,o]=Dr(e.y-this.start.y);if(this.shiftPressed){const i=Math.min(t,r);t=i,r=i}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",r);else{const[i,l]=[this.start.x,this.start.x+t*s].sort(Lr),[a,c]=[this.start.y,this.start.y+r*o].sort(Lr);this.attr("cx",(i+l)/2),this.attr("cy",(a+c)/2),this.attr("rx",(l-i)/2),this.attr("ry",(c-a)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function td(e,t){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),r=document.createElementNS("http://www.w3.org/2000/svg","marker"),o=document.createElementNS("http://www.w3.org/2000/svg","path");return o.setAttribute("fill",t),r.setAttribute("id",e),r.setAttribute("viewBox","0 -5 10 10"),r.setAttribute("refX","5"),r.setAttribute("refY","0"),r.setAttribute("markerWidth","4"),r.setAttribute("markerHeight","4"),r.setAttribute("orient","auto"),o.setAttribute("d","M0,-5L10,0L0,5"),r.appendChild(o),s.appendChild(r),s}var Wv=class extends fs{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=ed(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(td(t,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${t})`),s}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:s}=e;if(this.shiftPressed){const r=e.x-this.start.x,o=e.y-this.start.y;if(o!==0){let i=r/o;i=Math.round(i),Math.abs(i)<=1?(t=this.start.x+o*i,s=this.start.y+o):(t=this.start.x+r,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-s),this.attr("x2",t),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",s)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},Gv=class extends fs{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,s]=Dr(e.x-this.start.x),[r,o]=Dr(e.y-this.start.y);if(this.shiftPressed){const i=Math.min(t,r);t=i,r=i}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-r),this.attr("width",t*2),this.attr("height",r*2);else{const[i,l]=[this.start.x,this.start.x+t*s].sort(Lr),[a,c]=[this.start.y,this.start.y+r*o].sort(Lr);this.attr("x",i),this.attr("y",a),this.attr("width",l-i),this.attr("height",c-a)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Qv(e,t){const s=e.x-t.x,r=e.y-t.y;return s*s+r*r}function Yv(e,t,s){let r=t.x,o=t.y,i=s.x-r,l=s.y-o;if(i!==0||l!==0){const a=((e.x-r)*i+(e.y-o)*l)/(i*i+l*l);a>1?(r=s.x,o=s.y):a>0&&(r+=i*a,o+=l*a)}return i=e.x-r,l=e.y-o,i*i+l*l}function Zv(e,t){let s=e[0];const r=[s];let o;for(let i=1,l=e.length;i<l;i++)o=e[i],Qv(o,s)>t&&(r.push(o),s=o);return s!==o&&o&&r.push(o),r}function ui(e,t,s,r,o){let i=r,l=0;for(let a=t+1;a<s;a++){const c=Yv(e[a],e[t],e[s]);c>i&&(l=a,i=c)}i>r&&(l-t>1&&ui(e,t,l,r,o),o.push(e[l]),s-l>1&&ui(e,l,s,r,o))}function Jv(e,t){const s=e.length-1,r=[e[0]];return ui(e,0,s,t,r),r.push(e[s]),r}function za(e,t,s=!1){if(e.length<=2)return e;const r=t!==void 0?t*t:1;return e=s?e:Zv(e,r),e=Jv(e,r),e}var Xv=class extends fs{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=ed();const t=td(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=za(this.points,1,!0),this.count=0),this.attr("d",Wa(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Wa(za(this.points,1,!0))),!e.getTotalLength()))}};function eb(e,t){const s=t.x-e.x,r=t.y-e.y;return{length:Math.sqrt(s**2+r**2),angle:Math.atan2(r,s)}}function Ka(e,t,s,r){const o=t||e,i=s||e,l=.2,a=eb(o,i),c=a.angle+(r?Math.PI:0),d=a.length*l,p=e.x+Math.cos(c)*d,h=e.y+Math.sin(c)*d;return{x:p,y:h}}function tb(e,t,s){const r=Ka(s[t-1],s[t-2],e),o=Ka(e,s[t-1],s[t+1],!0);return`C ${r.x.toFixed(Gt)},${r.y.toFixed(Gt)} ${o.x.toFixed(Gt)},${o.y.toFixed(Gt)} ${e.x.toFixed(Gt)},${e.y.toFixed(Gt)}`}function Wa(e){return e.reduce((t,s,r,o)=>r===0?`M ${s.x.toFixed(Gt)},${s.y.toFixed(Gt)}`:`${t} ${tb(s,r,o)}`,"")}var nb=class extends fs{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(s,r)=>{if(s&&s.length)for(let o=0;o<s.length;o++){const i=s[o];if(i.getTotalLength){const l=i.getTotalLength();for(let a=0;a<this.pathSubFactor;a++){const c=i.getPointAtLength(l*a/this.pathSubFactor),d=i.getPointAtLength(l*(a+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:d.x,y1:c.y,y2:d.y,segment:a,element:r||i})}}else i.children&&t(i.children,i)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const s=this.pathFragments[t],r={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,r)&&(s.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,s)=>!e.includes(s))),e.length>0}lineLineIntersect(e,t){const s=e.x1,r=e.x2,o=t.x1,i=t.x2,l=e.y1,a=e.y2,c=t.y1,d=t.y2,p=(s-r)*(c-d)-(l-a)*(o-i),h=(s*a-l*r)*(o-i)-(s-r)*(o*d-c*i),g=(s*a-l*r)*(c-d)-(l-a)*(o*d-c*i),m=(v,k,j)=>v>=k&&v<=j?!0:v>=j&&v<=k;if(p===0)return!1;{const v={x:h/p,y:g/p};return m(v.x,s,r)&&m(v.y,l,a)&&m(v.x,o,i)&&m(v.y,c,d)}}};function sb(e){return{draw:new Xv(e),stylus:new zv(e),line:new Wv(e),rectangle:new Gv(e),ellipse:new Kv(e),eraseLine:new nb(e)}}var rb=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Nv(),this._models=sb(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(t)||this.el,r=this.eventStart.bind(this),o=this.eventMove.bind(this),i=this.eventEnd.bind(this),l=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",r,{passive:!1}),window.addEventListener("pointermove",o,{passive:!1}),window.addEventListener("pointerup",i,{passive:!1}),window.addEventListener("pointercancel",i,{passive:!1}),window.addEventListener("keydown",l,!1),window.addEventListener("keyup",l,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",r),window.removeEventListener("pointermove",o),window.removeEventListener("pointerup",i),window.removeEventListener("pointercancel",i),window.removeEventListener("keydown",l,!1),window.removeEventListener("keyup",l,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){!this.acceptsInput(e)||(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function ob(e){return new rb(e)}const di=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Ut=Vt("slidev-drawing-enabled",!1),F8=Vt("slidev-drawing-pinned",!1),ib=H(!1),lb=H(!1),ab=H(!1),zs=H(!1),En=bm(Vt("slidev-drawing-brush",{color:di[0],size:4,mode:"stylus"})),Ga=H("stylus"),nd=A(()=>je.drawings.syncAll||qt.value);let Ks=!1;const Es=A({get(){return Ga.value},set(e){Ga.value=e,e==="arrow"?(En.mode="line",En.arrowEnd=!0):(En.mode=e,En.arrowEnd=!1)}}),cb=Ie({brush:En,acceptsInputTypes:A(()=>Ut.value?void 0:["pen"]),coordinateTransform:!1}),lt=Yr(ob(cb));function ub(){lt.clear(),nd.value&&Iu(He.value,"")}function sd(){var e;lb.value=lt.canRedo(),ib.value=lt.canUndo(),ab.value=!!((e=lt.el)!=null&&e.children.length)}function db(e){Ks=!0;const t=Or[e||He.value];t!=null?lt.load(t):lt.clear(),Ks=!1}lt.on("changed",()=>{if(sd(),!Ks){const e=lt.dump(),t=He.value;(Or[t]||"")!==e&&nd.value&&Iu(t,lt.dump())}});cm(e=>{Ks=!0,e[He.value]!=null&&lt.load(e[He.value]||""),Ks=!1,sd()});Ye(()=>{ce(He,()=>{!lt.mounted||db()},{immediate:!0})});lt.on("start",()=>zs.value=!0);lt.on("end",()=>zs.value=!1);window.addEventListener("keydown",e=>{if(!Ut.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let s=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?lt.redo():lt.undo():e.code==="Escape"?Ut.value=!1:e.code==="KeyL"&&t?Es.value="line":e.code==="KeyA"&&t?Es.value="arrow":e.code==="KeyS"&&t?Es.value="stylus":e.code==="KeyR"&&t?Es.value="rectangle":e.code==="KeyE"&&t?Es.value="ellipse":e.code==="KeyC"&&t?ub():e.code.startsWith("Digit")&&t&&+e.code[5]<=di.length?En.color=di[+e.code[5]-1]:s=!1,s&&(e.preventDefault(),e.stopPropagation())},!1);const Qa=nf(),To=Vt("slidev-color-schema","auto"),pi=A(()=>je.colorSchema!=="auto"),el=A({get(){return pi.value?je.colorSchema==="dark":To.value==="auto"?Qa.value:To.value==="dark"},set(e){pi.value||(To.value=e===Qa.value?"auto":e?"dark":"light")}}),rd=Vu(el);jt&&ce(el,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});function pb(){return[]}const xr=H(1),wr=A(()=>Ue.length-1),vt=H(0),tl=H(0);function hb(){vt.value>xr.value&&(vt.value-=1)}function gb(){vt.value<wr.value&&(vt.value+=1)}function mb(){if(vt.value>xr.value){let e=vt.value-tl.value;e<xr.value&&(e=xr.value),vt.value=e}}function fb(){if(vt.value<wr.value){let e=vt.value+tl.value;e>wr.value&&(e=wr.value),vt.value=e}}const od=Ne(ht(Tv),ht(Bv),Av);function vb(e,t,s=!1){typeof e=="string"&&(e=Yu[e]);const r=Ne(e,od);let o=0,i;const l=()=>{if(clearTimeout(i),!r.value){o=0;return}s&&(i=setTimeout(l,Math.max(1e3-o*250,150)),o++),t()};return ce(r,l,{flush:"sync"})}function bb(e,t){return Hm(e,s=>{!od.value||s.repeat||t()})}function yb(){const e=pb(),{escape:t,space:s,shift:r,left:o,right:i,up:l,down:a,enter:c,d,g:p,o:h}=Yu;new Map([{key:Ne(s,ht(r)),fn:dn,autoRepeat:!0},{key:Ne(s,r),fn:pn,autoRepeat:!0},{key:Ne(i,ht(r),ht(it)),fn:dn,autoRepeat:!0},{key:Ne(o,ht(r),ht(it)),fn:pn,autoRepeat:!0},{key:"pageDown",fn:dn,autoRepeat:!0},{key:"pageUp",fn:pn,autoRepeat:!0},{key:Ne(l,ht(it)),fn:()=>Gs(!1),autoRepeat:!0},{key:Ne(a,ht(it)),fn:Ws,autoRepeat:!0},{key:Ne(o,r),fn:()=>Gs(!1),autoRepeat:!0},{key:Ne(i,r),fn:Ws,autoRepeat:!0},{key:Ne(d,ht(Ut)),fn:rd},{key:Ne(h,ht(Ut)),fn:Ju},{key:Ne(t,ht(Ut)),fn:()=>it.value=!1},{key:Ne(p,ht(Ut)),fn:()=>Gn.value=!Gn.value},{key:Ne(o,it),fn:hb},{key:Ne(i,it),fn:gb},{key:Ne(l,it),fn:mb},{key:Ne(a,it),fn:fb},{key:Ne(c,it),fn:()=>{cs(vt.value),it.value=!1}},...e].map(m=>[m.key,m])).forEach(m=>{m.fn&&vb(m.key,m.fn,m.autoRepeat)}),bb("f",()=>Zu.toggle())}const _b={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},kb=n("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),jb=[kb];function xb(e,t){return y(),T("svg",_b,jb)}var wb={name:"carbon-close",render:xb};function nl(e){var s,r;const t=(r=(s=e==null?void 0:e.meta)==null?void 0:s.slide)==null?void 0:r.no;return t!=null?`slidev-page-${t}`:""}const id=be({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;M(z);const s=H(),r=mf(s),o=A(()=>t.width?t.width:r.width.value),i=A(()=>t.width?t.width/un:r.height.value);t.width&&eo(()=>{s.value&&(s.value.style.width=`${o.value}px`,s.value.style.height=`${i.value}px`)});const l=A(()=>o.value/i.value),a=A(()=>t.scale?t.scale:l.value<un?o.value/Tn:i.value*un/Tn),c=A(()=>({height:`${Cu}px`,width:`${Tn}px`,transform:`translate(-50%, -50%) scale(${a.value})`})),d=A(()=>({"select-none":!je.selectable,"slidev-code-line-numbers":je.lineNumbers}));return ft(Au,a),(p,h)=>(y(),T("div",{id:"slide-container",ref_key:"root",ref:s,class:Oe(_(d))},[n("div",{id:"slide-content",style:st(_(c))},[Re(p.$slots,"default")],4),Re(p.$slots,"controls")],2))}});var sl=be({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const s=Nt(e,"clicks",t),r=Nt(e,"clicksElements",t),o=Nt(e,"clicksDisabled",t),i=Nt(e,"clicksOrderMap",t);r.value.length=0,ft(Zg,e.route),ft(Jg,e.context),ft(br,s),ft(yr,o),ft(zn,r),ft(ti,i)},render(){var e,t;return this.$props.is?nt(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}});const $b=["innerHTML"],ld=be({__name:"DrawingPreview",props:{page:null},setup(e){return M(z),(t,s)=>_(Or)[e.page]?(y(),T("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:_(Or)[e.page]},null,8,$b)):le("v-if",!0)}});var Eb=Object.freeze(Object.defineProperty({__proto__:null,default:ld},Symbol.toStringTag,{value:"Module"}));const Sb={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Ab=["onClick"],Cb=be({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(e,{emit:t}){const s=e;M(z);const r=Nt(s,"modelValue",t);function o(){r.value=!1}function i(m){cs(m),o()}function l(m){return m===vt.value}const a=ai.smaller("xs"),c=ai.smaller("sm"),d=4*16*2,p=2*16,h=A(()=>a.value?Bn.width.value-d:c.value?(Bn.width.value-d-p)/2:300),g=A(()=>Math.floor((Bn.width.value-d)/(h.value+p)));return eo(()=>{vt.value=He.value,tl.value=g.value}),(m,v)=>{const k=wb;return y(),T(W,null,[hs(n("div",Sb,[n("div",{class:"grid gap-y-4 gap-x-8 w-full",style:st(`grid-template-columns: repeat(auto-fit,minmax(${_(h)}px,1fr))`)},[(y(!0),T(W,null,gs(_(Ue).slice(0,-1),(j,E)=>(y(),T("div",{key:j.path,class:"relative"},[n("div",{class:Oe(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":l(E+1)}]),onClick:x=>i(+j.path)},[(y(),G(id,{key:j.path,width:_(h),"clicks-disabled":!0,class:"pointer-events-none"},{default:V(()=>[Q(_(sl),{is:j==null?void 0:j.component,"clicks-disabled":!0,class:Oe(_(nl)(j)),route:j,context:"overview"},null,8,["is","class","route"]),Q(ld,{page:+j.path},null,8,["page"])]),_:2},1032,["width"]))],10,Ab),n("div",{class:"absolute top-0 opacity-50",style:st(`left: ${_(h)+5}px`)},Pn(E+1),5)]))),128))],4)],512),[[$u,_(r)]]),_(r)?(y(),T("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:o},[Q(k)])):le("v-if",!0)],64)}}});var Tb="/vue-fes-japan-online-2022-slide/assets/logo.b72bde5d.png";const Bb={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Ib=be({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const s=e;M(z);const r=Nt(s,"modelValue",t);function o(){r.value=!1}return(i,l)=>(y(),G(lu,null,[_(r)?(y(),T("div",Bb,[n("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:l[0]||(l[0]=a=>o())}),n("div",{class:Oe(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ gray-400 opacity-10"},[Re(i.$slots,"default")],2)])):le("v-if",!0)],1024))}});const Pb={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Ob=["innerHTML"],Vb=n("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[n("div",{class:"flex gap-1 children:my-auto"},[n("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),n("img",{class:"w-5 h-5",src:Tb,alt:"Slidev"}),n("div",{style:{color:"#2082A6"}},[n("b",null,"Sli"),u("dev ")])])],-1),Fb=be({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const s=e;M(z);const r=Nt(s,"modelValue",t),o=A(()=>typeof je.info=="string");return(i,l)=>(y(),G(Ib,{modelValue:_(r),"onUpdate:modelValue":l[0]||(l[0]=a=>xe(r)?r.value=a:null),class:"px-6 py-4"},{default:V(()=>[n("div",Pb,[_(o)?(y(),T("div",{key:0,class:"mb-4",innerHTML:_(je).info},null,8,Ob)):le("v-if",!0),Vb])]),_:1},8,["modelValue"]))}}),Lb=["disabled","onKeydown"],Db=be({__name:"Goto",setup(e){M(z);const t=H(),s=H(""),r=A(()=>{if(s.value.startsWith("/"))return!!Ue.find(l=>l.path===s.value.substring(1));{const l=+s.value;return!isNaN(l)&&l>0&&l<=xd.value}});function o(){r.value&&(s.value.startsWith("/")?cs(s.value.substring(1)):cs(+s.value)),i()}function i(){Gn.value=!1}return ce(Gn,async l=>{var a,c;l?(await Ye(),s.value="",(a=t.value)==null||a.focus()):(c=t.value)==null||c.blur()}),ce(s,l=>{l.match(/^[^0-9/]/)&&(s.value=s.value.substring(1))}),(l,a)=>(y(),T("div",{id:"slidev-goto-dialog",class:Oe(["fixed right-5 bg-main transform transition-all",_(Gn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[hs(n("input",{ref_key:"input",ref:t,"onUpdate:modelValue":a[0]||(a[0]=c=>s.value=c),type:"text",disabled:!_(Gn),class:Oe(["outline-none bg-transparent",{"text-red-400":!_(r)&&s.value}]),placeholder:"Goto...",onKeydown:[na(o,["enter"]),na(i,["escape"])],onBlur:i},null,42,Lb),[[Og,s.value]])],2))}}),Mb=be({__name:"Controls",setup(e){M(z);const t=Pt(),s=Pt();return(r,o)=>(y(),T(W,null,[Q(Cb,{modelValue:_(it),"onUpdate:modelValue":o[0]||(o[0]=i=>xe(it)?it.value=i:null)},null,8,["modelValue"]),Q(Db),_(t)?(y(),G(_(t),{key:0})):le("v-if",!0),_(s)?(y(),G(_(s),{key:1,modelValue:_(Ao),"onUpdate:modelValue":o[1]||(o[1]=i=>xe(Ao)?Ao.value=i:null)},null,8,["modelValue"])):le("v-if",!0),_(je).info?(y(),G(Fb,{key:2,modelValue:_(Ps),"onUpdate:modelValue":o[2]||(o[2]=i=>xe(Ps)?Ps.value=i:null)},null,8,["modelValue"])):le("v-if",!0)],64))}}),Rb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},qb=n("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),Nb=[qb];function Ub(e,t){return y(),T("svg",Rb,Nb)}var Hb={name:"carbon-settings-adjust",render:Ub};const zb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Kb=n("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),Wb=n("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Gb=[Kb,Wb];function Qb(e,t){return y(),T("svg",zb,Gb)}var Yb={name:"carbon-information",render:Qb};const Zb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Jb=n("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),Xb=[Jb];function e0(e,t){return y(),T("svg",Zb,Xb)}var t0={name:"carbon-download",render:e0};const n0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},s0=n("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),r0=n("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),o0=[s0,r0];function i0(e,t){return y(),T("svg",n0,o0)}var l0={name:"carbon-user-speaker",render:i0};const a0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},c0=n("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),u0=n("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),d0=[c0,u0];function p0(e,t){return y(),T("svg",a0,d0)}var h0={name:"carbon-presentation-file",render:p0};const g0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},m0=n("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),f0=[m0];function v0(e,t){return y(),T("svg",g0,f0)}var b0={name:"carbon-pen",render:v0};const y0={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},_0=n("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),k0=n("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),j0=[_0,k0];function x0(e,t){return y(),T("svg",y0,j0)}var w0={name:"ph-cursor-duotone",render:x0};const $0={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},E0=n("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),S0=[E0];function A0(e,t){return y(),T("svg",$0,S0)}var ad={name:"ph-cursor-fill",render:A0};const C0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},T0=n("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),B0=[T0];function I0(e,t){return y(),T("svg",C0,B0)}var P0={name:"carbon-sun",render:I0};const O0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},V0=n("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),F0=[V0];function L0(e,t){return y(),T("svg",O0,F0)}var D0={name:"carbon-moon",render:L0};const M0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},R0=n("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),q0=[R0];function N0(e,t){return y(),T("svg",M0,q0)}var U0={name:"carbon-apps",render:N0};const H0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},z0=n("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),K0=[z0];function W0(e,t){return y(),T("svg",H0,K0)}var cd={name:"carbon-arrow-right",render:W0};const G0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Q0=n("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),Y0=[Q0];function Z0(e,t){return y(),T("svg",G0,Y0)}var J0={name:"carbon-arrow-left",render:Z0};const X0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ey=n("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),ty=[ey];function ny(e,t){return y(),T("svg",X0,ty)}var sy={name:"carbon-maximize",render:ny};const ry={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},oy=n("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),iy=[oy];function ly(e,t){return y(),T("svg",ry,iy)}var ay={name:"carbon-minimize",render:ly};const cy={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},uy=n("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),dy=[uy];function py(e,t){return y(),T("svg",cy,dy)}var hy={name:"carbon-checkmark",render:py};var Le=(e,t)=>{const s=e.__vccOpts||e;for(const[r,o]of t)s[r]=o;return s};const gy={class:"select-list"},my={class:"title"},fy={class:"items"},vy=["onClick"],by=be({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const s=e;M(z);const r=Nt(s,"modelValue",t,{passive:!0});return(o,i)=>{const l=hy;return y(),T("div",gy,[n("div",my,Pn(e.title),1),n("div",fy,[(y(!0),T(W,null,gs(e.items,a=>(y(),T("div",{key:a.value,class:Oe(["item",{active:_(r)===a.value}]),onClick:()=>{var c;r.value=a.value,(c=a.onClick)==null||c.call(a)}},[Q(l,{class:Oe(["text-green-500",{"opacity-0":_(r)!==a.value}])},null,8,["class"]),u(" "+Pn(a.display||a.value),1)],10,vy))),128))])])}}});var yy=Le(by,[["__scopeId","data-v-427604ef"]]);const _y={class:"text-sm"},ky=be({__name:"Settings",setup(e){M(z);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,r)=>(y(),T("div",_y,[Q(yy,{modelValue:_(jr),"onUpdate:modelValue":r[0]||(r[0]=o=>xe(jr)?jr.value=o:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),jy={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},xy=be({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const s=e;M(z);const r=Nt(s,"modelValue",t,{passive:!0}),o=H();return Nm(o,()=>{r.value=!1}),(i,l)=>(y(),T("div",{ref_key:"el",ref:o,class:"flex relative"},[n("button",{class:Oe({disabled:e.disabled}),onClick:l[0]||(l[0]=a=>r.value=!_(r))},[Re(i.$slots,"button",{class:Oe({disabled:e.disabled})})],2),(y(),G(lu,null,[_(r)?(y(),T("div",jy,[Re(i.$slots,"menu")])):le("v-if",!0)],1024))],512))}}),wy={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},hr={__name:"VerticalDivider",setup(e){return M(z),(t,s)=>(y(),T("div",wy))}};var $y={render(){return[]}};const Ey={class:"icon-btn"},Sy={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},Ay={class:"my-auto"},Cy={class:"opacity-50"},Ty=be({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;M(z);const s=ai.smaller("md"),{isFullscreen:r,toggle:o}=Zu,i=A(()=>hi.value?`?password=${hi.value}`:""),l=A(()=>`/presenter/${He.value}${i.value}`),a=A(()=>`/${He.value}${i.value}`),c=H(),d=()=>{c.value&&ts.value&&c.value.contains(ts.value)&&ts.value.blur()},p=A(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),h=Pt(),g=Pt();return ms(()=>import("./DrawingControls.1a5b435c.js"),[]).then(m=>g.value=m.default),(m,v)=>{const k=ay,j=sy,E=J0,x=cd,$=U0,C=D0,D=P0,P=ad,K=w0,se=b0,ve=h0,pe=os("RouterLink"),ye=l0,We=t0,qe=Yb,Ve=Hb;return y(),T("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[n("div",{class:Oe(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",_(p)]),onMouseleave:d},[_(Kt)?le("v-if",!0):(y(),T("button",{key:0,class:"icon-btn",onClick:v[0]||(v[0]=(...Te)=>_(o)&&_(o)(...Te))},[_(r)?(y(),G(k,{key:0})):(y(),G(j,{key:1}))])),n("button",{class:Oe(["icon-btn",{disabled:!_(Y2)}]),onClick:v[1]||(v[1]=(...Te)=>_(pn)&&_(pn)(...Te))},[Q(E)],2),n("button",{class:Oe(["icon-btn",{disabled:!_(Q2)}]),title:"Next",onClick:v[2]||(v[2]=(...Te)=>_(dn)&&_(dn)(...Te))},[Q(x)],2),_(Kt)?le("v-if",!0):(y(),T("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:v[3]||(v[3]=Te=>_(Ju)())},[Q($)])),_(pi)?le("v-if",!0):(y(),T("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:v[4]||(v[4]=Te=>_(rd)())},[_(el)?(y(),G(C,{key:0})):(y(),G(D,{key:1}))])),Q(hr),_(Kt)?le("v-if",!0):(y(),T(W,{key:3},[!_(qt)&&!_(s)&&_(h)?(y(),T(W,{key:0},[Q(_(h)),Q(hr)],64)):le("v-if",!0),_(qt)?(y(),T("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:v[5]||(v[5]=Te=>Co.value=!_(Co))},[_(Co)?(y(),G(P,{key:0})):(y(),G(K,{key:1,class:"opacity-50"}))])):le("v-if",!0)],64)),!_(je).drawings.presenterOnly&&!_(Kt)?(y(),T(W,{key:4},[n("button",{class:"icon-btn relative",title:"Drawing",onClick:v[6]||(v[6]=Te=>Ut.value=!_(Ut))},[Q(se),_(Ut)?(y(),T("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:st({background:_(En).color})},null,4)):le("v-if",!0)]),Q(hr)],64)):le("v-if",!0),_(Kt)?le("v-if",!0):(y(),T(W,{key:5},[_(qt)?(y(),G(pe,{key:0,to:_(a),class:"icon-btn",title:"Play Mode"},{default:V(()=>[Q(ve)]),_:1},8,["to"])):le("v-if",!0),_(K2)?(y(),G(pe,{key:1,to:_(l),class:"icon-btn",title:"Presenter Mode"},{default:V(()=>[Q(ye)]),_:1},8,["to"])):le("v-if",!0),le("v-if",!0)],64)),(y(),T(W,{key:6},[_(je).download?(y(),T("button",{key:0,class:"icon-btn",onClick:v[8]||(v[8]=(...Te)=>_(gi)&&_(gi)(...Te))},[Q(We)])):le("v-if",!0)],64)),!_(qt)&&_(je).info&&!_(Kt)?(y(),T("button",{key:7,class:"icon-btn",onClick:v[9]||(v[9]=Te=>Ps.value=!_(Ps))},[Q(qe)])):le("v-if",!0),!_(qt)&&!_(Kt)?(y(),G(xy,{key:8},{button:V(()=>[n("button",Ey,[Q(Ve)])]),menu:V(()=>[Q(ky)]),_:1})):le("v-if",!0),_(Kt)?le("v-if",!0):(y(),G(hr,{key:9})),n("div",Sy,[n("div",Ay,[u(Pn(_(He))+" ",1),n("span",Cy,"/ "+Pn(_(xd)),1)])]),Q(_($y))],34)],512)}}});var ud={render(){return[]}},dd={render(){return[]}};const By={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},Iy=be({__name:"PresenterMouse",setup(e){return M(z),(t,s)=>{const r=ad;return _(wo).cursor?(y(),T("div",By,[Q(r,{class:"absolute",style:st({left:`${_(wo).cursor.x}%`,top:`${_(wo).cursor.y}%`})},null,8,["style"])])):le("v-if",!0)}}}),Py=be({__name:"SlidesShow",props:{context:null},setup(e){M(z),ce(mt,()=>{var s,r;((s=mt.value)==null?void 0:s.meta)&&mt.value.meta.preload!==!1&&(mt.value.meta.__preloaded=!0),((r=Bo.value)==null?void 0:r.meta)&&Bo.value.meta.preload!==!1&&(Bo.value.meta.__preloaded=!0)},{immediate:!0});const t=Pt();return ms(()=>import("./DrawingLayer.9707f915.js"),[]).then(s=>t.value=s.default),(s,r)=>(y(),T(W,null,[le(" Global Bottom "),Q(_(dd)),le(" Slides "),(y(!0),T(W,null,gs(_(Ue),o=>{var i,l;return y(),T(W,{key:o.path},[((i=o.meta)==null?void 0:i.__preloaded)||o===_(mt)?hs((y(),G(_(sl),{key:0,is:o==null?void 0:o.component,clicks:o===_(mt)?_(It):0,"clicks-elements":((l=o.meta)==null?void 0:l.__clicksElements)||[],"clicks-disabled":!1,class:Oe(_(nl)(o)),route:o,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[$u,o===_(mt)]]):le("v-if",!0)],64)}),128)),le(" Global Top "),Q(_(ud)),_(t)?(y(),G(_(t),{key:0})):le("v-if",!0),_(qt)?le("v-if",!0):(y(),G(Iy,{key:1}))],64))}}),Oy=be({__name:"Play",setup(e){M(z),yb();const t=H();function s(i){var l;Ma.value||((l=i.target)==null?void 0:l.id)==="slide-container"&&(i.screenX/window.innerWidth>.6?dn():pn())}X2(t);const r=A(()=>Cv.value||Ma.value);Pt();const o=Pt();return ms(()=>import("./DrawingControls.1a5b435c.js"),[]).then(i=>o.value=i.default),(i,l)=>(y(),T(W,null,[n("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr,max-content]",style:st(_(Tu))},[Q(id,{class:"w-full h-full",style:st({background:"var(--slidev-slide-container-background, black)"}),width:_(In)?_(Bn).width.value:void 0,scale:_(jr),onPointerdown:s},{default:V(()=>[Q(Py,{context:"slide"})]),controls:V(()=>[n("div",{class:Oe(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[_(r)?"opacity-100 right-0":"opacity-0 p-2",_(zs)?"pointer-events-none":""]])},[Q(Ty,{class:"m-auto",persist:_(r)},null,8,["persist"])],2),!_(je).drawings.presenterOnly&&!_(Kt)&&_(o)?(y(),G(_(o),{key:0,class:"ml-0"})):le("v-if",!0)]),_:1},8,["style","width","scale"]),le("v-if",!0)],4),Q(Mb)],64))}});function pd(e){const t=A(()=>e.value.path),s=A(()=>Ue.length-1),r=A(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),o=A(()=>uo(r.value)),i=A(()=>Ue.find(g=>g.path===`${r.value}`)),l=A(()=>{var g,m,v;return(v=(m=(g=i.value)==null?void 0:g.meta)==null?void 0:m.slide)==null?void 0:v.id}),a=A(()=>{var g,m;return(m=(g=i.value)==null?void 0:g.meta)==null?void 0:m.layout}),c=A(()=>Ue.find(g=>g.path===`${Math.min(Ue.length,r.value+1)}`)),d=A(()=>Ue.filter(g=>{var m,v;return(v=(m=g.meta)==null?void 0:m.slide)==null?void 0:v.title}).reduce((g,m)=>(al(g,m),g),[])),p=A(()=>cl(d.value,i.value)),h=A(()=>ul(p.value));return{route:e,path:t,total:s,currentPage:r,currentPath:o,currentRoute:i,currentSlideId:l,currentLayout:a,nextRoute:c,rawTree:d,treeWithActiveStatuses:p,tree:h}}function hd(e,t,s){const r=H(0);Ye(()=>{bt.afterEach(async()=>{await Ye(),r.value+=1})});const o=A(()=>{var c,d;return r.value,((d=(c=t.value)==null?void 0:c.meta)==null?void 0:d.__clicksElements)||[]}),i=A(()=>{var c,d,p;return+((p=(d=(c=t.value)==null?void 0:c.meta)==null?void 0:d.clicks)!=null?p:o.value.length)}),l=A(()=>s.value<Ue.length-1||e.value<i.value),a=A(()=>s.value>1||e.value>0);return{clicks:e,clicksElements:o,clicksTotal:i,hasNext:l,hasPrev:a}}const Vy=["id"],Ya=be({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(e,{emit:t}){const s=e,r=Nt(s,"clicksElements",t),o=A(()=>({height:`${Cu}px`,width:`${Tn}px`})),i=Pt();ms(()=>Promise.resolve().then(function(){return Eb}),void 0).then(d=>i.value=d.default);const l=A(()=>s.clicks),a=hd(l,s.nav.currentRoute,s.nav.currentPage),c=A(()=>`${s.route.path.toString().padStart(3,"0")}-${(l.value+1).toString().padStart(2,"0")}`);return ft(z,Ie({nav:{...s.nav,...a},configs:je,themeConfigs:A(()=>je.themeConfig)})),(d,p)=>{var h;return y(),T("div",{id:_(c),class:"slide-container",style:st(_(o))},[Q(_(dd)),Q(_(sl),{is:(h=e.route)==null?void 0:h.component,"clicks-elements":_(r),"onUpdate:clicks-elements":p[0]||(p[0]=g=>xe(r)?r.value=g:null),clicks:_(l),"clicks-disabled":!1,class:Oe(_(nl)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),_(i)?(y(),G(_(i),{key:0,page:+e.route.path},null,8,["page"])):le("v-if",!0),Q(_(ud))],12,Vy)}}}),Fy=be({__name:"PrintSlide",props:{route:null},setup(e){var i;const t=e;M(z);const s=Ie(((i=t.route.meta)==null?void 0:i.__clicksElements)||[]),r=A(()=>t.route),o=pd(r);return(l,a)=>(y(),T(W,null,[Q(Ya,{"clicks-elements":s,"onUpdate:clicks-elements":a[0]||(a[0]=c=>xe(s)?s.value=c:null),clicks:0,nav:_(o),route:_(r)},null,8,["clicks-elements","nav","route"]),_(Os)?le("v-if",!0):(y(!0),T(W,{key:0},gs(s.length,c=>(y(),G(Ya,{key:c,clicks:c,nav:_(o),route:_(r)},null,8,["clicks","nav","route"]))),128))],64))}});const Ly={id:"print-content"},Dy=be({__name:"PrintContainer",props:{width:null},setup(e){const t=e;M(z);const s=A(()=>t.width),r=A(()=>t.width/un),o=A(()=>s.value/r.value),i=A(()=>o.value<un?s.value/Tn:r.value*un/Tn),l=Ue.slice(0,-1),a=A(()=>({"select-none":!je.selectable,"slidev-code-line-numbers":je.lineNumbers}));return ft(Au,i),(c,d)=>(y(),T("div",{id:"print-container",class:Oe(_(a))},[n("div",Ly,[(y(!0),T(W,null,gs(_(l),p=>(y(),G(Fy,{key:p.path,route:p},null,8,["route"]))),128))]),Re(c.$slots,"controls")],2))}});const My=be({__name:"Print",setup(e){M(z);const t=$n.canvasWidth,s=Math.round(t/$n.aspectRatio)+1;function r(o,{slots:i}){if(i.default)return nt("style",i.default())}return eo(()=>{In?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(o,i)=>(y(),T(W,null,[Q(r,null,{default:V(()=>[u(" @page { size: "+Pn(_(t))+"px "+Pn(s)+"px; margin: 0px; } ",1)]),_:1}),n("div",{id:"page-root",class:"grid grid-cols-[1fr,max-content]",style:st(_(Tu))},[Q(Dy,{class:"w-full h-full",style:st({background:"var(--slidev-slide-container-background, black)"}),width:_(Bn).width.value},null,8,["style","width"])],4)],64))}});const Ry={class:"slidev-layout end"},qy={__name:"end",setup(e){return M(z),(t,s)=>(y(),T("div",Ry," END "))}};var Ny=Le(qy,[["__scopeId","data-v-024c70b4"]]);const Uy={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Hy=n("path",{fill:"currentColor","fill-rule":"evenodd",d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z"},null,-1),zy=[Hy];function Ky(e,t){return y(),T("svg",Uy,zy)}var Wy={name:"carbon-logo-github",render:Ky};function Za(e){return e.startsWith("/")?"/vue-fes-japan-online-2022-slide/"+e.slice(1):e}function Gy(e,t=!1){const s=e&&["#","rgb","hsl"].some(o=>e.indexOf(o)===0),r={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?t?`linear-gradient(#0005, #0008), url(${Za(e)})`:`url("${Za(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return r.background||delete r.background,r}const Qy={class:"my-auto w-full"},Yy=be({__name:"cover",props:{background:{default:""}},setup(e){const t=e;M(z);const s=A(()=>Gy(t.background,!0));return(r,o)=>(y(),T("div",{class:"slidev-layout cover",style:st(_(s))},[n("div",Qy,[Re(r.$slots,"default")])],4))}});const gd=e=>(ze("data-v-3bcfba57"),e=e(),Ke(),e),Zy=gd(()=>n("h1",{class:"gradient"},[u("eslint-plugin-vue \u3092\u4F7F\u7528\u3057\u3066"),n("br"),u("\u7D99\u7D9A\u7684\u306B Vue3 \u79FB\u884C\u3059\u308B")],-1)),Jy=gd(()=>n("div",{class:"event-name-wrapper"},[n("div",{class:"event-name"},[n("a",{href:"https://vuefes.jp/2022/",target:"_blank",rel:"noopener",class:"gradient"},"Vue Fes Japan Online 2022 - 2022.10.16 SUN")])],-1)),Xy={class:"pt-12"},e_={class:"abs-br m-6 flex gap-2"},t_={href:"https://github.com/ota-meshi/vue-fes-japan-online-2022-slide",target:"_blank",alt:"GitHub",class:"text-xl icon-btn opacity-50 !border-none !hover:text-white"},n_={__name:"1",setup(e){const t={class:"text-center",background:"./future02.jpeg",hideInToc:!0,theme:"default",highlighter:"shiki",lineNumbers:!1,drawings:{persist:!1},colorSchema:"dark",titleTemplate:"%s",srcSequence:"./src/00-010-title.md"},s=M(z);return(r,o)=>{const i=cd,l=Wy;return y(),G(Yy,de(ue(t)),{default:V(()=>[Zy,Jy,n("div",Xy,[n("span",{onClick:o[0]||(o[0]=(...a)=>_(s).nav.next&&_(s).nav.next(...a)),class:"px-2 py-1 rounded cursor-pointer",hover:"bg-white bg-opacity-10"},[u(" Press Space for next page "),Q(i,{class:"inline"})])]),n("div",e_,[n("a",t_,[Q(l)])]),le(`
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
`)]),_:1},16)}}};var s_=Le(n_,[["__scopeId","data-v-3bcfba57"]]);const r_={class:"slidev-layout default"},Xt={__name:"default",setup(e){return M(z),(t,s)=>(y(),T("div",r_,[Re(t.$slots,"default")]))}};const md=e=>(ze("data-v-4a931ff5"),e=e(),Ke(),e),o_=md(()=>n("h1",null,"\u81EA\u5DF1\u7D39\u4ECB",-1)),i_=md(()=>n("div",{grid:"~ gap-4",class:"profile"},[n("div",{class:"avatars"},[n("img",{class:"avatar",src:"https://github.com/ota-meshi.png",alt:"ota-meshi"}),n("div",{class:"org-avatars"},[n("a",{href:"https://github.com/future-architect",target:"_brank"},[n("img",{src:"https://github.com/future-architect.png",alt:"Future Corp"})]),n("a",{href:"https://github.com/vuejs",target:"_brank"},[n("img",{src:"https://github.com/vuejs.png",alt:"Vue.js"})]),n("a",{href:"https://github.com/stylelint",target:"_brank"},[n("img",{src:"https://github.com/stylelint.png",alt:"Stylelint"})]),n("a",{href:"https://github.com/intlify",target:"_brank"},[n("img",{src:"https://github.com/intlify.png",alt:"Intlify"})]),n("a",{href:"https://github.com/stylus",target:"_brank"},[n("img",{src:"https://github.com/stylus.png",alt:"Stylus"})]),n("a",{href:"https://github.com/eslint-community",target:"_brank"},[n("img",{src:"https://github.com/eslint-community.png",alt:"ESLint Community"})])])]),n("div",{class:"profile-contents"},[n("h3",null,"\u592A\u7530 \u6D0B\u4ECB"),n("ul",null,[n("li",null,"\u5E74\u9F62: \u30A2\u30E9\u30D5\u30A9\u30FC\u3000 \u{1F4CD}: \u795E\u5948\u5DDD\u770C"),n("li",null,[u("GitHub: "),n("a",{href:"https://github.com/ota-meshi",target:"_blank",rel:"noopener"},"@ota-meshi"),u(),n("a",{class:"sponsor",href:"https://github.com/sponsors/ota-meshi",target:"_blank",rel:"noopener"},"\u2661 Sponsor"),u(" , npm: "),n("a",{href:"https://www.npmjs.com/~ota-meshi",target:"_blank",rel:"noopener"},"ota-meshi"),u(", Twitter: "),n("a",{href:"https://twitter.com/omoteota",target:"_blank",rel:"noopener"},"@omoteota"),u(","),n("br"),u(" Qiita: "),n("a",{href:"https://qiita.com/ota-meshi",target:"_blank",rel:"noopener"},"@ota-meshi")]),n("li",null,[u("\u6240\u5C5E: "),n("ul",null,[n("li",null,[n("a",{href:"https://www.future.co.jp/",target:"_blank",rel:"noopener"},"\u30D5\u30E5\u30FC\u30C1\u30E3\u30FC\u682A\u5F0F\u4F1A\u793E"),u(),n("span",{class:"platinum"},"\uFF08\u30D7\u30E9\u30C1\u30CA\u30B9\u30DD\u30F3\u30B5\u30FC\uFF01\uFF09"),u(" \u793E\u54E1 "),n("span",{class:"since"},"(2015/06 - )")]),n("li",null,[n("a",{href:"https://vuejs.org/about/team.html",target:"_blank",rel:"noopener"},"Vue.js"),u(" eslint-plugin-vue \u30E1\u30F3\u30C6\u30CA\u30FC "),n("span",{class:"since"},"(eslint-plugin-vue 2018/08 - , Vue 2019/07 - )")]),n("li",null,[n("a",{href:"https://github.com/stylelint",target:"_blank",rel:"noopener"},"Stylelint"),u(" Owners \u30C1\u30FC\u30E0 "),n("span",{class:"since"},"(2020/09 - )")]),n("li",null,[n("a",{href:"https://github.com/intlify",target:"_blank",rel:"noopener"},"Intlify"),u(" eslint-plugin-vue-i18n \u30E1\u30F3\u30C6\u30CA\u30FC "),n("span",{class:"since"},"(2020/07 - )")]),n("li",null,[n("a",{href:"https://github.com/stylus",target:"_blank",rel:"noopener"},"Stylus"),u(" \u30C1\u30FC\u30E0 "),n("span",{class:"since"},"(2022/06 - )")]),n("li",null,[n("a",{href:"https://github.com/eslint-community",target:"_blank",rel:"noopener"},"ESLint Community"),u(" \u30C1\u30FC\u30E0 "),n("span",{class:"since"},"(2022/09 - )")])])]),n("li",null,[n("a",{href:"https://gihyo.jp/magazine/wdpress/archive/2021/vol120",target:"_blank",rel:"noopener"},"WEB+DB PRESS Vol.120"),u(" \u300C\u6700\u65B0 Vue.js 3 \u5165\u9580\u300D \u5171\u540C\u57F7\u7B46 "),n("span",{class:"since"},"(2020/12/24)")]),n("li",null,[n("a",{href:"https://www.googblogs.com/announcing-first-group-of-google-open-source-peer-bonus-winners-in-2022/",target:"_blank",rel:"noopener"},"Google Open Source Peer Bonus 2022"),u(" \u53D7\u8CDE")])])])],-1)),l_={__name:"2",setup(e){const t={hideInToc:!0,srcSequence:"./src/00-020-profile.md"};return M(z),(s,r)=>(y(),G(Xt,de(ue(t)),{default:V(()=>[le(" prettier-ignore-end "),o_,i_]),_:1},16))}};var a_=Le(l_,[["__scopeId","data-v-4a931ff5"]]);const c_=["href","innerHTML"],u_=["href"],d_=be({__name:"Link",props:{to:null,title:null},setup(e){return M(z),(t,s)=>{const r=os("RouterLink");return!_(In)&&e.title?(y(),G(r,{key:0,to:String(e.to),onClick:s[0]||(s[0]=o=>o.target.blur()),innerHTML:e.title},null,8,["to","innerHTML"])):!_(In)&&!e.title?(y(),G(r,{key:1,to:String(e.to),onClick:s[1]||(s[1]=o=>o.target.blur())},{default:V(()=>[Re(t.$slots,"default")]),_:3},8,["to"])):_(In)&&e.title?(y(),T("a",{key:2,href:`#${e.to}`,innerHTML:e.title},null,8,c_)):(y(),T("a",{key:3,href:`#${e.to}`},[Re(t.$slots,"default")],8,u_))}}}),p_=n("br",null,null,-1),h_=n("br",null,null,-1),g_=n("br",null,null,-1),m_=n("br",null,null,-1),f_={key:32,class:"gradient"},v_=n("span",{class:"gradient-off"},"\u3068",-1),b_=n("span",{class:"gradient-off"},"\u3067",-1),y_=n("br",null,null,-1),__=n("span",{class:"gradient-off"},"\u306A",-1),k_=n("span",{class:"gradient-off"},[u("\u79FB\u884C\u3092"),n("br"),u("\u5B9F\u73FE\u3057\u307E\u3057\u3087\u3046"),n("br"),u("\u{1F929}")],-1),j_=n("br",null,null,-1),x_=n("br",null,null,-1),w_=be({__name:"titles",props:{no:null},setup(e){return(t,s)=>(y(),T("div",null,[+e.no==1?(y(),T(W,{key:0},[u("eslint-plugin-vue \u3092\u4F7F\u7528\u3057\u3066\u7D99\u7D9A\u7684\u306B Vue3 \u79FB\u884C\u3059\u308B")],64)):+e.no==2?(y(),T(W,{key:1},[u("\u81EA\u5DF1\u7D39\u4ECB")],64)):+e.no==3?(y(),T(W,{key:2},[u("\u30A2\u30B8\u30A7\u30F3\u30C0")],64)):+e.no==4?(y(),T(W,{key:3},[u("Vue3 \u306E Breaking Changes")],64)):+e.no==5?(y(),T(W,{key:4},[u("Vue3 \u306E Breaking Changes")],64)):+e.no==6?(y(),T(W,{key:5},[u("Vue3 \u306E Breaking Changes")],64)):+e.no==7?(y(),T(W,{key:6},[u("eslint-plugin-vue \u3068\u306F")],64)):+e.no==8?(y(),T(W,{key:7},[u("eslint-plugin-vue \u3068\u306F")],64)):+e.no==9?(y(),T(W,{key:8},[u("eslint-plugin-vue \u3092\u4F7F\u7528\u3057\u3066 Vue3 \u79FB\u884C\u3057\u3066\u307F\u305F")],64)):+e.no==10?(y(),T(W,{key:9},[u("Vue3 \u306E Breaking Changes")],64)):+e.no==11?(y(),T(W,{key:10},[u("Vue3 \u306E Breaking Changes")],64)):+e.no==12?(y(),T(W,{key:11},[u("Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B")],64)):+e.no==13?(y(),T(W,{key:12},[u("\u534A\u5206\u3057\u304B\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u306A\u3044\uFF1F"),p_,u("\u{1F914}")],64)):+e.no==14?(y(),T(W,{key:13},[u("\u307E\u3060\u307E\u3060\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u307E\u3059\uFF01"),h_,u("\u{1F606}")],64)):+e.no==15?(y(),T(W,{key:14},[u("`$children`\u3001`$destroy()`\u3082\u30C1\u30A7\u30C3\u30AF\u3059\u308B")],64)):+e.no==16?(y(),T(W,{key:15},[u("`import Vue from 'vue'`\u3082\u30C1\u30A7\u30C3\u30AF\u3059\u308B")],64)):+e.no==17?(y(),T(W,{key:16},[u("Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B")],64)):+e.no==18?(y(),T(W,{key:17},[u("\u307E\u3060\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u307E\u3059\uFF01"),g_,u("\u{1F609}")],64)):+e.no==19?(y(),T(W,{key:18},[u("eslint-plugin-vue-scoped-css \u3082\u5C0E\u5165\u3059\u308B")],64)):+e.no==20?(y(),T(W,{key:19},[u("Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B")],64)):+e.no==21?(y(),T(W,{key:20},[u("eslint-plugin-\u793E\u5185\u7528 \u306B\u8FFD\u52A0\u30C1\u30A7\u30C3\u30AF\u3092\u5B9F\u88C5")],64)):+e.no==22?(y(),T(W,{key:21},[u("Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B")],64)):+e.no==23?(y(),T(W,{key:22},[u("\u30D5\u30A3\u30EB\u30BF\u30FC\u5EC3\u6B62\u306B\u4F34\u3046\u5BFE\u5FDC\u306B\u3064\u3044\u3066")],64)):+e.no==24?(y(),T(W,{key:23},[u("\u6B8B\u308A 6 \u9805\u76EE\u306F\u3069\u3046\u3057\u305F\uFF1F"),m_,u("\u{1F914}")],64)):+e.no==25?(y(),T(W,{key:24},[u("\u6B8B\u308A\u306F\u3069\u3046\u3057\u305F\uFF1F")],64)):+e.no==26?(y(),T(W,{key:25},[u("Vue3 \u4EE5\u5916\u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B")],64)):+e.no==27?(y(),T(W,{key:26},[u("Vue3 \u79FB\u884C\u306B ESLint \u3092\u4F7F\u3046\u30E1\u30EA\u30C3\u30C8")],64)):+e.no==28?(y(),T(W,{key:27},[u("Vue3 \u4F5C\u696D\u306B ESLint \u3092\u4F7F\u3046\u30E1\u30EA\u30C3\u30C8")],64)):+e.no==29?(y(),T(W,{key:28},[u("\u79FB\u884C\u5F8C\u306B\u65B0\u3057\u304F Vue2 \u3067\u3057\u304B\u52D5\u304B\u306A\u3044\u30B3\u30FC\u30C9\u3092\u66F8\u304B\u308C\u306A\u3044")],64)):+e.no==30?(y(),T(W,{key:29},[u("Vue3 \u79FB\u884C\u306B ESLint \u3092\u4F7F\u3046\u30C7\u30E1\u30EA\u30C3\u30C8")],64)):+e.no==31?(y(),T(W,{key:30},[u("\u307E\u3068\u3081")],64)):+e.no==32?(y(),T(W,{key:31},[u("\u307E\u3068\u3081")],64)):+e.no==33?(y(),T("span",f_,[u("ESLint "),v_,u(" eslint-plugin-vue "),b_,y_,u("\u7D99\u7D9A\u7684"),__,u(" Vue3 "),k_])):+e.no==34?(y(),T(W,{key:33},[u("\u5BA3\u4F1D")],64)):+e.no==35?(y(),T(W,{key:34},[u("undefined")],64)):+e.no==36?(y(),T(W,{key:35},[u("\u30A8\u30F3\u30B8\u30CB\u30A2\u30FB\u30B9\u30DA\u30B7\u30E3\u30EA\u30B9\u30C8"),j_,u("\u52DF\u96C6\u3057\u3066\u307E\u3059"),x_,u("\u2193")],64)):+e.no==37?(y(),T(W,{key:36},[u("undefined")],64)):le("v-if",!0)]))}}),$_=be({__name:"TocList",props:{level:{default:1},list:null,listClass:null},setup(e){const t=e;M(z);const s=A(()=>[...Zi(t.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${t.level}`]);return(r,o)=>{const i=d_,l=os("TocList",!0);return e.list&&e.list.length>0?(y(),T("ol",{key:0,class:Oe(_(s))},[(y(!0),T(W,null,gs(e.list,a=>(y(),T("li",{key:a.path,class:Oe(["slidev-toc-item",[{"slidev-toc-item-active":a.active},{"slidev-toc-item-parent-active":a.activeParent}]])},[Q(i,{to:a.path},{default:V(()=>[Q(_(w_),{no:a.path},null,8,["no"])]),_:2},1032,["to"]),a.children.length>0?(y(),G(l,{key:0,level:e.level+1,list:a.children,"list-class":e.listClass},null,8,["level","list","list-class"])):le("v-if",!0)],2))),128))],2)):le("v-if",!0)}}}),E_=be({__name:"Toc",props:{columns:{default:1},listClass:{default:""},maxDepth:{default:1/0},minDepth:{default:1},mode:{default:"all"}},setup(e){const t=e,s=M(z);function r(a,c=1){if(c>Number(t.maxDepth))return[];if(c<Number(t.minDepth)){const d=a.find(p=>p.active||p.activeParent);return d?r(d.children,c+1):[]}return a.map(d=>({...d,children:r(d.children,c+1)}))}function o(a){return a.filter(c=>c.active||c.activeParent||c.hasActiveParent).map(c=>({...c,children:o(c.children)}))}function i(a){const c=a.some(d=>d.active||d.activeParent||d.hasActiveParent);return a.filter(()=>c).map(d=>({...d,children:i(d.children)}))}const l=A(()=>{const a=s==null?void 0:s.nav.tree;if(!a)return[];let c=r(a);return t.mode==="onlyCurrentTree"?c=o(c):t.mode==="onlySiblings"&&(c=i(c)),c});return(a,c)=>{const d=$_;return y(),T("div",{class:"slidev-toc",style:st(`column-count:${e.columns}`)},[Q(d,{level:1,list:_(l),"list-class":e.listClass},null,8,["list","list-class"])],4)}}}),S_=n("h1",null,"\u30A2\u30B8\u30A7\u30F3\u30C0",-1),A_={__name:"3",setup(e){const t={hideInToc:!0,srcSequence:"./src/00-020-profile.md"};return M(z),(s,r)=>{const o=E_;return y(),G(Xt,de(ue(t)),{default:V(()=>[le(" prettier-ignore-end "),S_,Q(o,{maxDepth:"2"})]),_:1},16)}}},C_={class:"slidev-layout section w-full h-full grid"},T_={class:"my-auto text-center"},Ft={__name:"section",setup(e){return M(z),(t,s)=>(y(),T("div",C_,[n("div",T_,[Re(t.$slots,"default")])]))}},B_=n("h1",null,"Vue3 \u79FB\u884C\u304C\u5927\u5909\u3067\u3059\u304B\uFF1F\u{1F914}",-1),I_={__name:"4",setup(e){const t={layout:"section",srcSequence:"./src/01_010.md"};return M(z),(s,r)=>(y(),G(Ft,de(ue(t)),{default:V(()=>[B_]),_:1},16))}};var P_="/vue-fes-japan-online-2022-slide/breaking-changes.png";const O_=n("h2",null,"Vue3 \u306E Breaking Changes",-1),V_=n("div",{class:"flex justify-center"},[n("p",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/",target:"_blank",rel:"noopener"},"https://v3-migration.vuejs.org/breaking-changes/")])],-1),F_=n("div",{class:"flex justify-center",style:{height:"calc(100% - 150px)"}},[n("img",{src:P_,style:{height:"100%"}})],-1),L_=n("div",{class:"flex justify-center"},[n("p",null,"\u306A\u3069\u306A\u3069\u300138 \u9805\u76EE")],-1),D_={__name:"5",setup(e){const t={hideInToc:!0,srcSequence:"./src/01_020.md"};return M(z),(s,r)=>(y(),G(Xt,de(ue(t)),{default:V(()=>[O_,V_,F_,L_]),_:1},16))}},M_={class:"slidev-layout default sub-3-cols"},R_={grid:"~ cols-3 gap-4"},q_={class:"sub-3-cols__left"},N_={class:"sub-3-cols__middle"},U_={class:"sub-3-cols__right"},rl={__name:"sub-3-cols",setup(e){return M(z),(t,s)=>(y(),T("div",M_,[Re(t.$slots,"default"),n("div",R_,[n("div",q_,[Re(t.$slots,"left")]),n("div",N_,[Re(t.$slots,"middle")]),n("div",U_,[Re(t.$slots,"right")])])]))}};const Ze=e=>(ze("data-v-17d516cb"),e=e(),Ke(),e),H_=Ze(()=>n("h2",null,"Vue3 \u306E Breaking Changes",-1)),z_=Ze(()=>n("br",null,null,-1)),K_=Ze(()=>n("h3",null,"Global API",-1)),W_=Ze(()=>n("ul",null,[n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/global-api.html",target:"_blank",rel:"noopener"},"Global Vue API is changed to use an application instance")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/global-api-treeshaking.html",target:"_blank",rel:"noopener"},"Global and internal APIs have been restructured to be tree-shakable")])],-1)),G_=Ze(()=>n("h3",null,"Template Directives",-1)),Q_=Ze(()=>n("ul",null,[n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/v-model.html",target:"_blank",rel:"noopener"},[n("code",null,"v-model"),u(" usage on components has been reworked, replacing "),n("code",null,"v-bind.sync")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/key-attribute.html",target:"_blank",rel:"noopener"},[n("code",null,"key"),u(" usage on "),n("code",null,"<template v-for>"),u(" and non-"),n("code",null,"v-for"),u(" nodes has changed")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html",target:"_blank",rel:"noopener"},[n("code",null,"v-if"),u(" and "),n("code",null,"v-for"),u(" precedence when used on the same element has changed")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/v-bind.html",target:"_blank",rel:"noopener"},[n("code",null,'v-bind="object"'),u(" is now order-sensitive")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html",target:"_blank",rel:"noopener"},[n("code",null,"v-on:event.native"),u(" modifier has been removed")])])],-1)),Y_=Ze(()=>n("h3",null,"Components",-1)),Z_=Ze(()=>n("ul",null,[n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/functional-components.html",target:"_blank",rel:"noopener"},"Functional components can only be created using a plain function")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/functional-components.html",target:"_blank",rel:"noopener"},[n("code",null,"functional"),u(" attribute on single-file component (SFC) "),n("code",null,"<template>"),u(" and "),n("code",null,"functional"),u(" component option are deprecated")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/async-components.html",target:"_blank",rel:"noopener"},[u("Async components now require "),n("code",null,"defineAsyncComponent"),u(" method to be created")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/emits-option.html",target:"_blank",rel:"noopener"},[u("Component events should now be declared with the "),n("code",null,"emits"),u(" option")])])],-1)),J_=Ze(()=>n("h3",null,"Render Function",-1)),X_=Ze(()=>n("ul",null,[n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/render-function-api.html",target:"_blank",rel:"noopener"},"Render function API changed")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/slots-unification.html",target:"_blank",rel:"noopener"},[n("code",null,"$scopedSlots"),u(" property is removed and all slots are exposed via "),n("code",null,"$slots"),u(" as functions")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/listeners-removed",target:"_blank",rel:"noopener"},[n("code",null,"$listeners"),u(" has been removed / merged into "),n("code",null,"$attrs")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html",target:"_blank",rel:"noopener"},[n("code",null,"$attrs"),u(" now includes "),n("code",null,"class"),u(" and "),n("code",null,"style"),u(" attributes")])])],-1)),e3=Ze(()=>n("h3",null,"Custom Elements",-1)),t3=Ze(()=>n("ul",null,[n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html",target:"_blank",rel:"noopener"},"Custom element checks are now performed during template compilation")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html#customized-built-in-elements",target:"_blank",rel:"noopener"},[u("Special "),n("code",null,"is"),u(" attribute usage is restricted to the reserved "),n("code",null,"<component>"),u(" tag only")])])],-1)),n3=Ze(()=>n("h3",null,"Other Minor Changes",-1)),s3=Ze(()=>n("ul",null,[n("li",null,[u("The "),n("code",null,"destroyed"),u(" lifecycle option has been renamed to "),n("code",null,"unmounted")]),n("li",null,[u("The "),n("code",null,"beforeDestroy"),u(" lifecycle option has been renamed to "),n("code",null,"beforeUnmount")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/props-default-this.html",target:"_blank",rel:"noopener"},[u("Props "),n("code",null,"default"),u(" factory function no longer has access to "),n("code",null,"this"),u(" context")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/custom-directives.html",target:"_blank",rel:"noopener"},[u("Custom directive API changed to align with component lifecycle and "),n("code",null,"binding.expression"),u(" removed")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/data-option.html",target:"_blank",rel:"noopener"},[u("The "),n("code",null,"data"),u(" option should always be declared as a function")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/data-option.html#mixin-merge-behavior-change",target:"_blank",rel:"noopener"},[u("The "),n("code",null,"data"),u(" option from mixins is now merged shallowly")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html",target:"_blank",rel:"noopener"},"Attributes coercion strategy changed")])],-1)),r3=Ze(()=>n("ul",null,[n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/transition.html",target:"_blank",rel:"noopener"},"Some transition classes got a rename")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/transition-group.html",target:"_blank",rel:"noopener"},[n("code",null,"<TransitionGroup>"),u(" now renders no wrapper element by default")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/watch.html",target:"_blank",rel:"noopener"},[u("When watching an array, the callback will only trigger when the array is replaced. If you need to trigger on mutation, the "),n("code",null,"deep"),u(" option must be specified.")])]),n("li",null,[n("code",null,"<template>"),u(" tags with no special directives ("),n("code",null,"v-if/else-if/else"),u(", "),n("code",null,"v-for"),u(", or "),n("code",null,"v-slot"),u(") are now treated as plain elements and will result in a native "),n("code",null,"<template>"),u(" element instead of rendering its inner content.")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/mount-changes.html",target:"_blank",rel:"noopener"},"Mounted application does not replace the element it\u2019s mounted to")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html",target:"_blank",rel:"noopener"},[u("Lifecycle "),n("code",null,"hook:"),u(" events prefix changed to "),n("code",null,"vnode-")])])],-1)),o3=Ze(()=>n("h3",null,"Removed APIs",-1)),i3=Ze(()=>n("ul",null,[n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html",target:"_blank",rel:"noopener"},[n("code",null,"keyCode"),u(" support as "),n("code",null,"v-on"),u(" modifiers")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/events-api.html",target:"_blank",rel:"noopener"},"$on, $off and $once instance methods")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/filters.html",target:"_blank",rel:"noopener"},"Filters")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html",target:"_blank",rel:"noopener"},"Inline templates attributes")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/children.html",target:"_blank",rel:"noopener"},[n("code",null,"$children"),u(" instance property")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/props-data.html",target:"_blank",rel:"noopener"},[n("code",null,"propsData"),u(" option")])]),n("li",null,[n("code",null,"$destroy"),u(" instance method. Users should no longer manually manage the lifecycle of individual Vue components.")]),n("li",null,[u("Global functions "),n("code",null,"set"),u(" and "),n("code",null,"delete"),u(", and the instance methods "),n("code",null,"$set"),u(" and "),n("code",null,"$delete"),u(". They are no longer required with proxy-based change detection.")])],-1)),l3={__name:"6",setup(e){const t={hideInToc:!0,layout:"sub-3-cols",srcSequence:"./src/01_030.md"};return M(z),(s,r)=>(y(),G(rl,de(ue(t)),{left:V(o=>[K_,W_,G_,Q_,Y_,Z_]),middle:V(o=>[J_,X_,e3,t3,n3,s3]),right:V(o=>[r3,o3,i3]),default:V(()=>[H_,z_]),_:1},16))}};var a3=Le(l3,[["__scopeId","data-v-17d516cb"]]);const c3=n("h1",null,"eslint-plugin-vue",-1),u3={__name:"7",setup(e){const t={layout:"section",srcSequence:"./src/02_010.md"};return M(z),(s,r)=>(y(),G(Ft,de(ue(t)),{default:V(()=>[c3]),_:1},16))}},d3=n("h2",null,"eslint-plugin-vue \u3068\u306F",-1),p3=n("p",null,"Vue.js \u7528\u306E ESLint \u30D7\u30E9\u30B0\u30A4\u30F3\uFF08Vue \u30AA\u30D5\u30A3\u30B7\u30E3\u30EB\uFF01\uFF09",-1),h3=n("ul",null,[n("li",null,"ESLint \u306F JavaScript \u306E\u30B3\u30FC\u30C9\u3092\u30C1\u30A7\u30C3\u30AF\u3059\u308B\u30EA\u30F3\u30BF\u30FC"),n("li",null,[n("code",null,"*.vue"),u(" \u30D5\u30A1\u30A4\u30EB\u3092\u89E3\u6790\u3057\u305F\u308A\u3001Vue \u306B\u7279\u5316\u3057\u305F\u691C\u8A3C\u30EB\u30FC\u30EB\u3092\u63D0\u4F9B\u3057\u307E\u3059")]),n("li",null,[u("\u30C1\u30A7\u30C3\u30AF\u30EB\u30FC\u30EB\u306B\u3088\u3063\u3066\u306F\u554F\u984C\u3092"),n("strong",null,"\u81EA\u52D5\u7684\u306B\u4FEE\u6B63"),u("\u3057\u307E\u3059\uFF08ESLint \u306E\u6A5F\u80FD\uFF09")]),n("li",null,[n("strong",null,"Vue3 \u79FB\u884C\u306B\u4FBF\u5229"),u("\u306A\u30EB\u30FC\u30EB\u3082\u3044\u304F\u3064\u304B\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059")]),n("li",null,[u("\u904E\u53BB\u306E\u8CC7\u6599\uFF1A "),n("ul",null,[n("li",null,[n("a",{href:"https://vuejs-meetup.connpass.com/event/195236/",target:"_blank",rel:"noopener"},"Vue.js v-tokyo \u30AA\u30F3\u30E9\u30A4\u30F3 Meetup#12"),u(" \u306E\u767A\u8868\u8CC7\u6599 "),n("a",{href:"https://docs.google.com/presentation/d/1JFS9DiTxUsrlGfYr72n9QRPibgYB-TzSTB8hi6mq4wY/edit?usp=sharing",target:"_blank",rel:"noopener"},"https://docs.google.com/presentation/d/1JFS9DiTxUsrlGfYr72n9QRPibgYB-TzSTB8hi6mq4wY/edit?usp=sharing")]),n("li",null,[n("a",{href:"https://techfeed.io/events/techfeed-conference-2022",target:"_blank",rel:"noopener"},"TechFeed Conference 2022"),u(" \u3067\u306E"),n("a",{href:"https://techfeed.io/entries/629ef550a192e46aa36a7760",target:"_blank",rel:"noopener"},"\u767A\u8868"),u("\u8CC7\u6599 "),n("a",{href:"https://docs.google.com/presentation/d/18Q8nn69Hi8d39k51HduArKkrCx3CY_ZsbPf-F-tb8Pg/edit?usp=sharing",target:"_blank",rel:"noopener"},"https://docs.google.com/presentation/d/18Q8nn69Hi8d39k51HduArKkrCx3CY_ZsbPf-F-tb8Pg/edit?usp=sharing")])])]),n("li",null,"\u79C1\u306F eslint-plugin-vue \u306E\u30E1\u30F3\u30C6\u30CA\u30FC\u3067\u3059")],-1),g3={__name:"8",setup(e){const t={hideInToc:!0,srcSequence:"./src/02_020.md"};return M(z),(s,r)=>(y(),G(Xt,de(ue(t)),{default:V(()=>[d3,p3,h3]),_:1},16))}},m3=n("h1",null,"eslint-plugin-vue \u3092\u4F7F\u7528\u3057\u3066 Vue3 \u79FB\u884C\u3057\u3066\u307F\u305F",-1),f3=n("p",null,"\u301C ESLint \u3067\u3069\u306E\u7A0B\u5EA6 Vue3 \u79FB\u884C\u3092\u30B5\u30DD\u30FC\u30C8\u3067\u304D\u305F\u306E\u304B\uFF1F \u301C",-1),v3={__name:"9",setup(e){const t={layout:"section",srcSequence:"./src/03_010.md"};return M(z),(s,r)=>(y(),G(Ft,de(ue(t)),{default:V(()=>[m3,f3]),_:1},16))}};const Je=e=>(ze("data-v-1b575b7c"),e=e(),Ke(),e),b3=Je(()=>n("h2",null,"Vue3 \u306E Breaking Changes",-1)),y3=Je(()=>n("p",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/",target:"_blank",rel:"noopener"},"https://v3-migration.vuejs.org/breaking-changes/")],-1)),_3=Je(()=>n("h3",null,"Global API",-1)),k3=Je(()=>n("ul",null,[n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/global-api.html",target:"_blank",rel:"noopener"},"Global Vue API is changed to use an application instance")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/global-api-treeshaking.html",target:"_blank",rel:"noopener"},"Global and internal APIs have been restructured to be tree-shakable")])],-1)),j3=Je(()=>n("h3",null,"Template Directives",-1)),x3=Je(()=>n("ul",null,[n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/v-model.html",target:"_blank",rel:"noopener"},[n("code",null,"v-model"),u(" usage on components has been reworked, replacing "),n("code",null,"v-bind.sync")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/key-attribute.html",target:"_blank",rel:"noopener"},[n("code",null,"key"),u(" usage on "),n("code",null,"<template v-for>"),u(" and non-"),n("code",null,"v-for"),u(" nodes has changed")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html",target:"_blank",rel:"noopener"},[n("code",null,"v-if"),u(" and "),n("code",null,"v-for"),u(" precedence when used on the same element has changed")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/v-bind.html",target:"_blank",rel:"noopener"},[n("code",null,'v-bind="object"'),u(" is now order-sensitive")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html",target:"_blank",rel:"noopener"},[n("code",null,"v-on:event.native"),u(" modifier has been removed")])])],-1)),w3=Je(()=>n("h3",null,"Components",-1)),$3=Je(()=>n("ul",null,[n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/functional-components.html",target:"_blank",rel:"noopener"},"Functional components can only be created using a plain function")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/functional-components.html",target:"_blank",rel:"noopener"},[n("code",null,"functional"),u(" attribute on single-file component (SFC) "),n("code",null,"<template>"),u(" and "),n("code",null,"functional"),u(" component option are deprecated")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/async-components.html",target:"_blank",rel:"noopener"},[u("Async components now require "),n("code",null,"defineAsyncComponent"),u(" method to be created")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/emits-option.html",target:"_blank",rel:"noopener"},[u("Component events should now be declared with the "),n("code",null,"emits"),u(" option")])])],-1)),E3=Je(()=>n("h3",null,"Render Function",-1)),S3=Je(()=>n("ul",null,[n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/render-function-api.html",target:"_blank",rel:"noopener"},"Render function API changed")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/slots-unification.html",target:"_blank",rel:"noopener"},[n("code",null,"$scopedSlots"),u(" property is removed and all slots are exposed via "),n("code",null,"$slots"),u(" as functions")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/listeners-removed",target:"_blank",rel:"noopener"},[n("code",null,"$listeners"),u(" has been removed / merged into "),n("code",null,"$attrs")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html",target:"_blank",rel:"noopener"},[n("code",null,"$attrs"),u(" now includes "),n("code",null,"class"),u(" and "),n("code",null,"style"),u(" attributes")])])],-1)),A3=Je(()=>n("h3",null,"Custom Elements",-1)),C3=Je(()=>n("ul",null,[n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html",target:"_blank",rel:"noopener"},"Custom element checks are now performed during template compilation")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html#customized-built-in-elements",target:"_blank",rel:"noopener"},[u("Special "),n("code",null,"is"),u(" attribute usage is restricted to the reserved "),n("code",null,"<component>"),u(" tag only")])])],-1)),T3=Je(()=>n("h3",null,"Other Minor Changes",-1)),B3=Je(()=>n("ul",null,[n("li",null,[u("The "),n("code",null,"destroyed"),u(" lifecycle option has been renamed to "),n("code",null,"unmounted")]),n("li",null,[u("The "),n("code",null,"beforeDestroy"),u(" lifecycle option has been renamed to "),n("code",null,"beforeUnmount")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/props-default-this.html",target:"_blank",rel:"noopener"},[u("Props "),n("code",null,"default"),u(" factory function no longer has access to "),n("code",null,"this"),u(" context")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/custom-directives.html",target:"_blank",rel:"noopener"},[u("Custom directive API changed to align with component lifecycle and "),n("code",null,"binding.expression"),u(" removed")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/data-option.html",target:"_blank",rel:"noopener"},[u("The "),n("code",null,"data"),u(" option should always be declared as a function")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/data-option.html#mixin-merge-behavior-change",target:"_blank",rel:"noopener"},[u("The "),n("code",null,"data"),u(" option from mixins is now merged shallowly")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html",target:"_blank",rel:"noopener"},"Attributes coercion strategy changed")])],-1)),I3=Je(()=>n("ul",null,[n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/transition.html",target:"_blank",rel:"noopener"},"Some transition classes got a rename")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/transition-group.html",target:"_blank",rel:"noopener"},[n("code",null,"<TransitionGroup>"),u(" now renders no wrapper element by default")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/watch.html",target:"_blank",rel:"noopener"},[u("When watching an array, the callback will only trigger when the array is replaced. If you need to trigger on mutation, the "),n("code",null,"deep"),u(" option must be specified.")])]),n("li",null,[n("code",null,"<template>"),u(" tags with no special directives ("),n("code",null,"v-if/else-if/else"),u(", "),n("code",null,"v-for"),u(", or "),n("code",null,"v-slot"),u(") are now treated as plain elements and will result in a native "),n("code",null,"<template>"),u(" element instead of rendering its inner content.")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/mount-changes.html",target:"_blank",rel:"noopener"},"Mounted application does not replace the element it\u2019s mounted to")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html",target:"_blank",rel:"noopener"},[u("Lifecycle "),n("code",null,"hook:"),u(" events prefix changed to "),n("code",null,"vnode-")])])],-1)),P3=Je(()=>n("h3",null,"Removed APIs",-1)),O3=Je(()=>n("ul",null,[n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html",target:"_blank",rel:"noopener"},[n("code",null,"keyCode"),u(" support as "),n("code",null,"v-on"),u(" modifiers")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/events-api.html",target:"_blank",rel:"noopener"},"$on, $off and $once instance methods")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/filters.html",target:"_blank",rel:"noopener"},"Filters")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html",target:"_blank",rel:"noopener"},"Inline templates attributes")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/children.html",target:"_blank",rel:"noopener"},[n("code",null,"$children"),u(" instance property")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/props-data.html",target:"_blank",rel:"noopener"},[n("code",null,"propsData"),u(" option")])]),n("li",null,[n("code",null,"$destroy"),u(" instance method. Users should no longer manually manage the lifecycle of individual Vue components.")]),n("li",null,[u("Global functions "),n("code",null,"set"),u(" and "),n("code",null,"delete"),u(", and the instance methods "),n("code",null,"$set"),u(" and "),n("code",null,"$delete"),u(". They are no longer required with proxy-based change detection.")])],-1)),V3={__name:"10",setup(e){const t={hideInToc:!0,layout:"sub-3-cols",srcSequence:"./src/03_020.md"};return M(z),(s,r)=>(y(),G(rl,de(ue(t)),{left:V(o=>[_3,k3,j3,x3,w3,$3]),middle:V(o=>[E3,S3,A3,C3,T3,B3]),right:V(o=>[I3,P3,O3]),default:V(()=>[b3,y3]),_:1},16))}};var F3=Le(V3,[["__scopeId","data-v-1b575b7c"]]);const Xe=e=>(ze("data-v-9dc02576"),e=e(),Ke(),e),L3=Xe(()=>n("h2",null,"Vue3 \u306E Breaking Changes",-1)),D3=Xe(()=>n("p",null,"\u4EE5\u4E0B\u3067\u306F\u3053\u306E\u3088\u3046\u306B\u8868\u8A18\u3057\u307E\u3059\u3002",-1)),M3=Xe(()=>n("h3",null,"Global API",-1)),R3=Xe(()=>n("ul",null,[n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/global-api.html",target:"_blank",rel:"noopener"},"createApp()\u7B49")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/global-api-treeshaking.html",target:"_blank",rel:"noopener"},"\u540D\u524D\u4ED8\u304D Export")])],-1)),q3=Xe(()=>n("h3",null,"Template Directives",-1)),N3=Xe(()=>n("ul",null,[n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/v-model.html",target:"_blank",rel:"noopener"},[n("code",null,"v-model"),u("\u306E"),n("code",null,"modelValue"),u(", "),n("code",null,"emit('input')")]),n("br"),n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/v-model.html",target:"_blank",rel:"noopener"},[n("code",null,"v-bind.sync"),u("\u5EC3\u6B62")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/key-attribute.html",target:"_blank",rel:"noopener"},[n("code",null,"<template v-for>"),u("\u306E key")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html",target:"_blank",rel:"noopener"},[n("code",null,"v-if"),u("\u30FB"),n("code",null,"v-for"),u(" \u306E\u512A\u5148\u5EA6")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/v-bind.html",target:"_blank",rel:"noopener"},[n("code",null,'v-bind="object"'),u("\u304C\u9806\u5E8F\u306B\u5F71\u97FF")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html",target:"_blank",rel:"noopener"},[n("code",null,"v-on:event.native"),u("\u5EC3\u6B62")])])],-1)),U3=Xe(()=>n("h3",null,"Components",-1)),H3=Xe(()=>n("ul",null,[n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/functional-components.html",target:"_blank",rel:"noopener"},"\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/functional-components.html",target:"_blank",rel:"noopener"},"SFC \u306E\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5EC3\u6B62")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/async-components.html",target:"_blank",rel:"noopener"},"\u975E\u540C\u671F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/emits-option.html",target:"_blank",rel:"noopener"},[n("code",null,"emits"),u("\u30AA\u30D7\u30B7\u30E7\u30F3")])])],-1)),z3=Xe(()=>n("h3",null,"Render Function",-1)),K3=Xe(()=>n("ul",null,[n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/render-function-api.html",target:"_blank",rel:"noopener"},[n("code",null,"render"),u("\u95A2\u6570\u306E\u5909\u66F4")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/slots-unification.html",target:"_blank",rel:"noopener"},[n("code",null,"$scopedSlots"),u("\u5EC3\u6B62")]),n("br"),n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/slots-unification.html",target:"_blank",rel:"noopener"},[n("code",null,"$slots"),u("\u306E\u95A2\u6570\u5316")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/listeners-removed",target:"_blank",rel:"noopener"},[n("code",null,"$listeners"),u("\u5EC3\u6B62")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html",target:"_blank",rel:"noopener"},[n("code",null,"$attrs"),u("\u306E\u5909\u66F4")])])],-1)),W3=Xe(()=>n("h3",null,"Custom Elements",-1)),G3=Xe(()=>n("ul",null,[n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html",target:"_blank",rel:"noopener"},"\u30AB\u30B9\u30BF\u30E0\u8981\u7D20\u306E\u6271\u3044")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html#customized-built-in-elements",target:"_blank",rel:"noopener"},[n("code",null,"is"),u("\u306E\u8A18\u6CD5")])])],-1)),Q3=Xe(()=>n("h3",null,"Other Minor Changes",-1)),Y3=Xe(()=>n("ul",null,[n("li",null,[n("code",null,"unmounted")]),n("li",null,[n("code",null,"beforeUnmount")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/props-default-this.html",target:"_blank",rel:"noopener"},[n("code",null,"default"),u("\u306E"),n("code",null,"this")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/custom-directives.html",target:"_blank",rel:"noopener"},"\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u5B9A\u7FA9\u65B9\u6CD5")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/data-option.html",target:"_blank",rel:"noopener"},[n("code",null,"data"),u("\u95A2\u6570")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/data-option.html#mixin-merge-behavior-change",target:"_blank",rel:"noopener"},[u("mixin \u306E"),n("code",null,"data"),u("\u306E\u6271\u3044")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html",target:"_blank",rel:"noopener"},[n("code",null,":attr=false")])])],-1)),Z3=Xe(()=>n("ul",null,[n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/transition.html",target:"_blank",rel:"noopener"},"Transition \u30AF\u30E9\u30B9\u540D\u5909\u66F4")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/transition-group.html",target:"_blank",rel:"noopener"},[n("code",null,"<TransitionGroup>"),u("\u306E\u30EB\u30FC\u30C8\u8981\u7D20")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/watch.html",target:"_blank",rel:"noopener"},"\u914D\u5217\u306E watch")]),n("li",null,[u("\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u7121\u3057\u306E"),n("code",null,"<template>")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/mount-changes.html",target:"_blank",rel:"noopener"},"Vue \u30A2\u30D7\u30EA\u306E\u30EB\u30FC\u30C8")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html",target:"_blank",rel:"noopener"},[n("code",null,"hook:"),u("\u30A4\u30D9\u30F3\u30C8")])])],-1)),J3=Xe(()=>n("h3",null,"Removed APIs",-1)),X3=Xe(()=>n("ul",null,[n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html",target:"_blank",rel:"noopener"},[n("code",null,"v-on"),u("\u30AD\u30FC\u4FEE\u98FE\u5B50")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/events-api.html",target:"_blank",rel:"noopener"},[n("code",null,"$on"),u("\u30FB"),n("code",null,"$off"),u("\u30FB"),n("code",null,"$once")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/filters.html",target:"_blank",rel:"noopener"},"\u30D5\u30A3\u30EB\u30BF\u30FC")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html",target:"_blank",rel:"noopener"},"Inline \u30C6\u30F3\u30D7\u30EC\u30FC\u30C8")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/children.html",target:"_blank",rel:"noopener"},[n("code",null,"$children")])]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/props-data.html",target:"_blank",rel:"noopener"},[n("code",null,"propsData")])]),n("li",null,[n("code",null,"$destroy()")]),n("li",null,[n("code",null,"Vue.set()"),u("\u30FB"),n("code",null,"Vue.delete()")])],-1)),e1={__name:"11",setup(e){const t={hideInToc:!0,layout:"sub-3-cols",srcSequence:"./src/03_030.md"};return M(z),(s,r)=>(y(),G(rl,de(ue(t)),{left:V(o=>[M3,R3,q3,N3,U3,H3]),middle:V(o=>[z3,K3,W3,G3,Q3,Y3]),right:V(o=>[Z3,J3,X3]),default:V(()=>[L3,D3]),_:1},16))}};var t1=Le(e1,[["__scopeId","data-v-9dc02576"]]);const n1={class:"slidev-layout default sub-2-cols"},s1={grid:"~ cols-2 gap-4",class:"sub-2-cols__grid"},r1={class:"sub-2-cols__left"},o1={class:"sub-2-cols__right"},Lt={__name:"sub-2-cols",setup(e){return M(z),(t,s)=>(y(),T("div",n1,[Re(t.$slots,"default"),n("div",s1,[n("div",r1,[Re(t.$slots,"left")]),n("div",o1,[Re(t.$slots,"right")])]),Re(t.$slots,"bottom")]))}};const Zs=e=>(ze("data-v-09b167d0"),e=e(),Ke(),e),i1=Zs(()=>n("h2",null,"Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B",-1)),l1=Zs(()=>n("p",null,"\u{1F49A}: eslint-plugin-vue \u3067\u30C1\u30A7\u30C3\u30AF\u53EF\u80FD / \u{1F527}: \u81EA\u52D5\u4FEE\u6B63\u53EF\u80FD / \u{1F4A1}: \u30A8\u30C7\u30A3\u30BF\u4E0A\u3067\u306E\u63D0\u6848",-1)),a1=Zs(()=>n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}}),n("th",{style:{"text-align":"center"}})])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/global-api.html",target:"_blank",rel:"noopener"},"createApp()\u7B49")]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/global-api-treeshaking.html",target:"_blank",rel:"noopener"},"\u540D\u524D\u4ED8\u304D Export")]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/v-model.html",target:"_blank",rel:"noopener"},[n("code",null,"v-model"),u("\u306E"),n("code",null,"modelValue"),u(", "),n("code",null,"emit('input')")])]),n("td",{style:{"text-align":"center"}},"\u{1F49A}\u{1F4A1}(\u203B)")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/v-model.html",target:"_blank",rel:"noopener"},[n("code",null,"v-bind.sync"),u("\u5EC3\u6B62")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html",target:"_blank",rel:"noopener"},"\u{1F49A}\u{1F527}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/key-attribute.html",target:"_blank",rel:"noopener"},[n("code",null,"<template v-for>"),u("\u306E key")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html",target:"_blank",rel:"noopener"},[n("code",null,"v-if"),u("\u30FB"),n("code",null,"v-for"),u(" \u306E\u512A\u5148\u5EA6")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/v-bind.html",target:"_blank",rel:"noopener"},[n("code",null,'v-bind="object"'),u("\u304C\u9806\u5E8F\u306B\u5F71\u97FF")])]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html",target:"_blank",rel:"noopener"},[n("code",null,"v-on:event.native"),u("\u5EC3\u6B62")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/functional-components.html",target:"_blank",rel:"noopener"},"\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5")]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/functional-components.html",target:"_blank",rel:"noopener"},"SFC \u306E\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5EC3\u6B62")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-functional-template.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/async-components.html",target:"_blank",rel:"noopener"},"\u975E\u540C\u671F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5")]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/emits-option.html",target:"_blank",rel:"noopener"},[n("code",null,"emits"),u("\u30AA\u30D7\u30B7\u30E7\u30F3")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/require-explicit-emits.html",target:"_blank",rel:"noopener"},"\u{1F49A}\u{1F4A1}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/render-function-api.html",target:"_blank",rel:"noopener"},[n("code",null,"render"),u("\u95A2\u6570\u306E\u5909\u66F4")])]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/slots-unification.html",target:"_blank",rel:"noopener"},[n("code",null,"$scopedSlots"),u("\u5EC3\u6B62")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html",target:"_blank",rel:"noopener"},"\u{1F49A}\u{1F527}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/slots-unification.html",target:"_blank",rel:"noopener"},[n("code",null,"$slots"),u("\u306E\u95A2\u6570\u5316")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/require-slots-as-functions.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/listeners-removed",target:"_blank",rel:"noopener"},[n("code",null,"$listeners"),u("\u5EC3\u6B62")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html",target:"_blank",rel:"noopener"},[n("code",null,"$attrs"),u("\u306E\u5909\u66F4")])]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html",target:"_blank",rel:"noopener"},"\u30AB\u30B9\u30BF\u30E0\u8981\u7D20\u306E\u6271\u3044")]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html#customized-built-in-elements",target:"_blank",rel:"noopener"},[n("code",null,"is"),u("\u306E\u8A18\u6CD5")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"unmounted")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html",target:"_blank",rel:"noopener"},"\u{1F49A}\u{1F4A1}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"beforeUnmount")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html",target:"_blank",rel:"noopener"},"\u{1F49A}\u{1F4A1}")])])])],-1)),c1=Zs(()=>n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}}),n("th",{style:{"text-align":"center"}})])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/props-default-this.html",target:"_blank",rel:"noopener"},[n("code",null,"default"),u("\u306E"),n("code",null,"this")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/custom-directives.html",target:"_blank",rel:"noopener"},"\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u5B9A\u7FA9\u65B9\u6CD5")]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/data-option.html",target:"_blank",rel:"noopener"},[n("code",null,"data"),u("\u95A2\u6570")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html",target:"_blank",rel:"noopener"},"\u{1F49A}\u{1F527}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/data-option.html#mixin-merge-behavior-change",target:"_blank",rel:"noopener"},[u("mixin \u306E"),n("code",null,"data"),u("\u306E\u6271\u3044")])]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html",target:"_blank",rel:"noopener"},[n("code",null,":attr=false")])]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/transition.html",target:"_blank",rel:"noopener"},"Transition \u30AF\u30E9\u30B9\u540D\u5909\u66F4")]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/transition-group.html",target:"_blank",rel:"noopener"},[n("code",null,"<TransitionGroup>"),u("\u306E\u30EB\u30FC\u30C8\u8981\u7D20")])]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/watch.html",target:"_blank",rel:"noopener"},"\u914D\u5217\u306E watch")]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[u("\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u7121\u3057\u306E"),n("code",null,"<template>")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-lone-template.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/mount-changes.html",target:"_blank",rel:"noopener"},"Vue \u30A2\u30D7\u30EA\u306E\u30EB\u30FC\u30C8")]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html",target:"_blank",rel:"noopener"},[n("code",null,"hook:"),u("\u30A4\u30D9\u30F3\u30C8")])]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html",target:"_blank",rel:"noopener"},[n("code",null,"v-on"),u("\u30AD\u30FC\u4FEE\u98FE\u5B50")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html",target:"_blank",rel:"noopener"},"\u{1F49A}\u{1F527}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/events-api.html",target:"_blank",rel:"noopener"},[n("code",null,"$on"),u("\u30FB"),n("code",null,"$off"),u("\u30FB"),n("code",null,"$once")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-events-api.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/filters.html",target:"_blank",rel:"noopener"},"\u30D5\u30A3\u30EB\u30BF\u30FC")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-filter.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html",target:"_blank",rel:"noopener"},"Inline \u30C6\u30F3\u30D7\u30EC\u30FC\u30C8")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-inline-template.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/children.html",target:"_blank",rel:"noopener"},[n("code",null,"$children")])]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/props-data.html",target:"_blank",rel:"noopener"},[n("code",null,"propsData")])]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"$destroy()")]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"Vue.set()"),u("\u30FB"),n("code",null,"Vue.delete()")]),n("td",{style:{"text-align":"center"}},"\u274C")])])],-1)),u1=Zs(()=>n("div",{class:"text-xs"},[n("p",null,[u("\u203B \u8A2D\u5B9A\u304C\u5FC5\u8981\u3067\u3059\u3002\u8A73\u7D30\u306F "),n("a",{href:"https://eslint.vuejs.org/rules/no-restricted-custom-event.html",target:"_blank",rel:"noopener"},"vue/no-restricted-custom-event"),u("\u3068"),n("a",{href:"https://eslint.vuejs.org/rules/no-restricted-props.html",target:"_blank",rel:"noopener"},"vue/no-restricted-props"),u("\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002")])],-1)),d1={__name:"12",setup(e){const t={hideInToc:!0,layout:"sub-2-cols",srcSequence:"./src/03_040.md"};return M(z),(s,r)=>(y(),G(Lt,de(ue(t)),{left:V(o=>[a1]),right:V(o=>[c1]),bottom:V(o=>[u1]),default:V(()=>[i1,l1]),_:1},16))}};var p1=Le(d1,[["__scopeId","data-v-09b167d0"]]);const h1=n("h1",null,[u("\u534A\u5206\u3057\u304B\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u306A\u3044\uFF1F"),n("br"),u("\u{1F914}")],-1),g1={__name:"13",setup(e){const t={layout:"section",hideInToc:!0,srcSequence:"./src/03_043.md"};return M(z),(s,r)=>(y(),G(Ft,de(ue(t)),{default:V(()=>[h1]),_:1},16))}},m1=n("h1",null,[u("\u307E\u3060\u307E\u3060\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u307E\u3059\uFF01"),n("br"),u("\u{1F606}")],-1),f1={__name:"14",setup(e){const t={layout:"section",hideInToc:!0,srcSequence:"./src/03_045.md"};return M(z),(s,r)=>(y(),G(Ft,de(ue(t)),{default:V(()=>[m1]),_:1},16))}};var v1="/vue-fes-japan-online-2022-slide/check-$children.png";const b1=n("h2",null,[n("code",null,"$children"),u("\u3001"),n("code",null,"$destroy()"),u("\u3082\u30C1\u30A7\u30C3\u30AF\u3059\u308B")],-1),y1=n("p",null,[u("\u30D7\u30E9\u30B0\u30A4\u30F3\u3067\u306F\u306A\u304F ESLint \u672C\u4F53\u306B\u4ED8\u5C5E\u3057\u3066\u3044\u308B\u30EB\u30FC\u30EB\u306B\u3001"),n("br"),u(" \u4EFB\u610F\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u308B\u30EB\u30FC\u30EB\u304C\u3042\u308B\u306E\u3067\u3001\u305D\u308C\u3092\u4F7F\u7528\u3057\u3066\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u307E\u3059\u3002")],-1),_1=n("p",null,[n("a",{href:"https://eslint.org/docs/latest/rules/no-restricted-properties",target:"_blank",rel:"noopener"},"https://eslint.org/docs/latest/rules/no-restricted-properties")],-1),k1=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#E0A569"}},"module"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#E0A569"}},"exports"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"  "),n("span",{style:{color:"#758575"}},"// ...")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#E0A569"}},"rules"),n("span",{style:{color:"#858585"}},":"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"    "),n("span",{style:{color:"#758575"}},"// ...")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#C98A7D"}},'"no-restricted-properties"'),n("span",{style:{color:"#858585"}},":"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"[")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"      "),n("span",{style:{color:"#C98A7D"}},'"error"'),n("span",{style:{color:"#858585"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"      "),n("span",{style:{color:"#858585"}},"{")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#E0A569"}},"property"),n("span",{style:{color:"#858585"}},":"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#C98A7D"}},'"$children"'),n("span",{style:{color:"#858585"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#E0A569"}},"message"),n("span",{style:{color:"#858585"}},":"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#C98A7D"}},'"\u5EC3\u6B62\u3055\u308C\u305F\u30D7\u30ED\u30D1\u30C6\u30A3\u3067\u3059"'),n("span",{style:{color:"#858585"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"      "),n("span",{style:{color:"#858585"}},"},")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"      "),n("span",{style:{color:"#858585"}},"{")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#E0A569"}},"property"),n("span",{style:{color:"#858585"}},":"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#C98A7D"}},'"$destroy"'),n("span",{style:{color:"#858585"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#E0A569"}},"message"),n("span",{style:{color:"#858585"}},":"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#C98A7D"}},'"\u5EC3\u6B62\u3055\u308C\u305F\u30E1\u30BD\u30C3\u30C9\u3067\u3059"'),n("span",{style:{color:"#858585"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"      "),n("span",{style:{color:"#858585"}},"},")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"],")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"    "),n("span",{style:{color:"#758575"}},"// ...")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#858585"}},"},")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"  "),n("span",{style:{color:"#758575"}},"// ...")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"};")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#B58451"}},"module"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#B58451"}},"exports"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"  "),n("span",{style:{color:"#A0ADA0"}},"// ...")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#B58451"}},"rules"),n("span",{style:{color:"#8E8F8B"}},":"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"    "),n("span",{style:{color:"#A0ADA0"}},"// ...")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#B56959"}},'"no-restricted-properties"'),n("span",{style:{color:"#8E8F8B"}},":"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"[")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"      "),n("span",{style:{color:"#B56959"}},'"error"'),n("span",{style:{color:"#8E8F8B"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"      "),n("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#B58451"}},"property"),n("span",{style:{color:"#8E8F8B"}},":"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#B56959"}},'"$children"'),n("span",{style:{color:"#8E8F8B"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#B58451"}},"message"),n("span",{style:{color:"#8E8F8B"}},":"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#B56959"}},'"\u5EC3\u6B62\u3055\u308C\u305F\u30D7\u30ED\u30D1\u30C6\u30A3\u3067\u3059"'),n("span",{style:{color:"#8E8F8B"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"      "),n("span",{style:{color:"#8E8F8B"}},"},")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"      "),n("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#B58451"}},"property"),n("span",{style:{color:"#8E8F8B"}},":"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#B56959"}},'"$destroy"'),n("span",{style:{color:"#8E8F8B"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#B58451"}},"message"),n("span",{style:{color:"#8E8F8B"}},":"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#B56959"}},'"\u5EC3\u6B62\u3055\u308C\u305F\u30E1\u30BD\u30C3\u30C9\u3067\u3059"'),n("span",{style:{color:"#8E8F8B"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"      "),n("span",{style:{color:"#8E8F8B"}},"},")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"],")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"    "),n("span",{style:{color:"#A0ADA0"}},"// ...")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#8E8F8B"}},"},")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"  "),n("span",{style:{color:"#A0ADA0"}},"// ...")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"};")])])])],-1),j1=n("p",null,[n("img",{src:v1,alt:"\u306E\u30C1\u30A7\u30C3\u30AF"})],-1),x1=n("img",{src:"https://github.com/eslint.png",alt:"ESLint",style:{width:"150px",margin:"auto"}},null,-1),w1={__name:"15",setup(e){const t={hideInToc:!0,layout:"sub-2-cols",srcSequence:"./src/03_050.md"};return M(z),(s,r)=>(y(),G(Lt,de(ue(t)),{left:V(o=>[k1]),right:V(o=>[j1,x1]),default:V(()=>[b1,y1,_1]),_:1},16))}};var $1="/vue-fes-japan-online-2022-slide/no-restricted-imports.png";const E1=n("h2",null,[n("code",null,"import Vue from 'vue'"),u("\u3082\u30C1\u30A7\u30C3\u30AF\u3059\u308B")],-1),S1=n("p",null,[u("ESLint \u672C\u4F53\u306B\u4ED8\u5C5E\u3057\u3066\u3044\u308B\u30EB\u30FC\u30EB\u306B\u3001\u4EFB\u610F\u306E"),n("code",null,"import"),u("\u3092\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u308B\u30EB\u30FC\u30EB\u304C\u3042\u308B\u306E\u3067\u3001"),n("br"),u(" \u305D\u308C\u3092\u4F7F\u7528\u3057\u3066\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u307E\u3059\u3002")],-1),A1=n("p",null,[n("a",{href:"https://eslint.org/docs/latest/rules/no-restricted-imports",target:"_blank",rel:"noopener"},"https://eslint.org/docs/latest/rules/no-restricted-imports")],-1),C1=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#E0A569"}},"module"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#E0A569"}},"exports"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"  "),n("span",{style:{color:"#758575"}},"// ...")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#E0A569"}},"rules"),n("span",{style:{color:"#858585"}},":"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"    "),n("span",{style:{color:"#758575"}},"// ...")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#C98A7D"}},'"no-restricted-imports"'),n("span",{style:{color:"#858585"}},":"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"[")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"      "),n("span",{style:{color:"#C98A7D"}},'"error"'),n("span",{style:{color:"#858585"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"      "),n("span",{style:{color:"#858585"}},"{")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#E0A569"}},"paths"),n("span",{style:{color:"#858585"}},":"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"[")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"          "),n("span",{style:{color:"#858585"}},"{")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"            "),n("span",{style:{color:"#E0A569"}},"name"),n("span",{style:{color:"#858585"}},":"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#C98A7D"}},'"vue"'),n("span",{style:{color:"#858585"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"            "),n("span",{style:{color:"#E0A569"}},"importNames"),n("span",{style:{color:"#858585"}},":"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"["),n("span",{style:{color:"#C98A7D"}},'"default"'),n("span",{style:{color:"#858585"}},"],")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"            "),n("span",{style:{color:"#E0A569"}},"message"),n("span",{style:{color:"#858585"}},":"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#C98A7D"}},'"\u540D\u524D\u4ED8\u304DImport\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002"'),n("span",{style:{color:"#858585"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"          "),n("span",{style:{color:"#858585"}},"},")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#858585"}},"],")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"      "),n("span",{style:{color:"#858585"}},"},")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"],")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"    "),n("span",{style:{color:"#758575"}},"// ...")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#858585"}},"},")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"  "),n("span",{style:{color:"#758575"}},"// ...")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"};")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#B58451"}},"module"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#B58451"}},"exports"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"  "),n("span",{style:{color:"#A0ADA0"}},"// ...")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#B58451"}},"rules"),n("span",{style:{color:"#8E8F8B"}},":"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"    "),n("span",{style:{color:"#A0ADA0"}},"// ...")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#B56959"}},'"no-restricted-imports"'),n("span",{style:{color:"#8E8F8B"}},":"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"[")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"      "),n("span",{style:{color:"#B56959"}},'"error"'),n("span",{style:{color:"#8E8F8B"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"      "),n("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#B58451"}},"paths"),n("span",{style:{color:"#8E8F8B"}},":"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"[")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"          "),n("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"            "),n("span",{style:{color:"#B58451"}},"name"),n("span",{style:{color:"#8E8F8B"}},":"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#B56959"}},'"vue"'),n("span",{style:{color:"#8E8F8B"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"            "),n("span",{style:{color:"#B58451"}},"importNames"),n("span",{style:{color:"#8E8F8B"}},":"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"["),n("span",{style:{color:"#B56959"}},'"default"'),n("span",{style:{color:"#8E8F8B"}},"],")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"            "),n("span",{style:{color:"#B58451"}},"message"),n("span",{style:{color:"#8E8F8B"}},":"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#B56959"}},'"\u540D\u524D\u4ED8\u304DImport\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002"'),n("span",{style:{color:"#8E8F8B"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"          "),n("span",{style:{color:"#8E8F8B"}},"},")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#8E8F8B"}},"],")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"      "),n("span",{style:{color:"#8E8F8B"}},"},")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"],")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"    "),n("span",{style:{color:"#A0ADA0"}},"// ...")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#8E8F8B"}},"},")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"  "),n("span",{style:{color:"#A0ADA0"}},"// ...")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"};")])])])],-1),T1=n("p",null,[n("img",{src:$1,alt:"no-restricted-imports"})],-1),B1=n("img",{src:"https://github.com/eslint.png",alt:"ESLint",style:{width:"150px","padding-top":"71px",margin:"auto"}},null,-1),I1={__name:"16",setup(e){const t={hideInToc:!0,layout:"sub-2-cols",srcSequence:"./src/03_055.md"};return M(z),(s,r)=>(y(),G(Lt,de(ue(t)),{left:V(o=>[C1]),right:V(o=>[T1,B1]),default:V(()=>[E1,S1,A1]),_:1},16))}};var ol=be({props:{highlightRows:{type:[Array,String],default:void 0},on:{type:Boolean,default:!0}},setup(e,t){const s=H(),r=A(()=>e.on&&e.highlightRows?O1(e.highlightRows):null);ce(s,o),ce(r,o);function o(){const i=s.value;if(!i)return;const l=r.value,a=l?c=>l.includes(c):()=>!0;for(let c=0;c<i.rows.length;c++){const d=i.rows[c];a(c)?d.style.opacity="1":d.style.opacity="0.3"}}return()=>{var a,c;let i=(c=(a=t.slots).default)==null?void 0:c.call(a);if(!i)return;i=Zi(i);const l=i.find(P1);return l?i.map(d=>d!==l?d:nt(l,{ref:p=>s.value=p})):"`<table>` not found."}}});function P1(e){return mn(e)&&e.type==="table"&&Array.isArray(e.children)}function O1(e){if(Array.isArray(e))return e.map(Number);const t=[];for(const s of`${e}`.split(",").map(r=>r.trim()))if(/^\d+-\d+$/u.test(s)){const[r,o]=s.split("-").map(Number);for(let i=r;i<=o;i++)t.push(i)}else t.push(Number(s));return t}const Js=e=>(ze("data-v-1c3e77e9"),e=e(),Ke(),e),V1=Js(()=>n("h2",null,"Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B",-1)),F1=Js(()=>n("p",null,"\u{1F49A}, \u{1F499}: eslint-plugin-vue, ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u53EF\u80FD / \u{1F527}: \u81EA\u52D5\u4FEE\u6B63\u53EF\u80FD / \u{1F4A1}: \u30A8\u30C7\u30A3\u30BF\u4E0A\u3067\u306E\u63D0\u6848",-1)),L1=Js(()=>n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}}),n("th",{style:{"text-align":"center"}})])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/global-api.html",target:"_blank",rel:"noopener"},"createApp()\u7B49")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.org/docs/latest/rules/no-restricted-imports",target:"_blank",rel:"noopener"},"\u{1F499}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/global-api-treeshaking.html",target:"_blank",rel:"noopener"},"\u540D\u524D\u4ED8\u304D Export")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.org/docs/latest/rules/no-restricted-imports",target:"_blank",rel:"noopener"},"\u{1F499}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/v-model.html",target:"_blank",rel:"noopener"},[n("code",null,"v-model"),u("\u306E"),n("code",null,"modelValue"),u(", "),n("code",null,"emit('input')")])]),n("td",{style:{"text-align":"center"}},"\u{1F49A}\u{1F4A1}")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/v-model.html",target:"_blank",rel:"noopener"},[n("code",null,"v-bind.sync"),u("\u5EC3\u6B62")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html",target:"_blank",rel:"noopener"},"\u{1F49A}\u{1F527}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/key-attribute.html",target:"_blank",rel:"noopener"},[n("code",null,"<template v-for>"),u("\u306E key")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html",target:"_blank",rel:"noopener"},[n("code",null,"v-if"),u("\u30FB"),n("code",null,"v-for"),u(" \u306E\u512A\u5148\u5EA6")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/v-bind.html",target:"_blank",rel:"noopener"},[n("code",null,'v-bind="object"'),u("\u304C\u9806\u5E8F\u306B\u5F71\u97FF")])]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html",target:"_blank",rel:"noopener"},[n("code",null,"v-on:event.native"),u("\u5EC3\u6B62")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/functional-components.html",target:"_blank",rel:"noopener"},"\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5")]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/functional-components.html",target:"_blank",rel:"noopener"},"SFC \u306E\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5EC3\u6B62")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-functional-template.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/async-components.html",target:"_blank",rel:"noopener"},"\u975E\u540C\u671F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5")]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/emits-option.html",target:"_blank",rel:"noopener"},[n("code",null,"emits"),u("\u30AA\u30D7\u30B7\u30E7\u30F3")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/require-explicit-emits.html",target:"_blank",rel:"noopener"},"\u{1F49A}\u{1F4A1}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/render-function-api.html",target:"_blank",rel:"noopener"},[n("code",null,"render"),u("\u95A2\u6570\u306E\u5909\u66F4")])]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/slots-unification.html",target:"_blank",rel:"noopener"},[n("code",null,"$scopedSlots"),u("\u5EC3\u6B62")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html",target:"_blank",rel:"noopener"},"\u{1F49A}\u{1F527}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/slots-unification.html",target:"_blank",rel:"noopener"},[n("code",null,"$slots"),u("\u306E\u95A2\u6570\u5316")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/require-slots-as-functions.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/listeners-removed",target:"_blank",rel:"noopener"},[n("code",null,"$listeners"),u("\u5EC3\u6B62")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html",target:"_blank",rel:"noopener"},[n("code",null,"$attrs"),u("\u306E\u5909\u66F4")])]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html",target:"_blank",rel:"noopener"},"\u30AB\u30B9\u30BF\u30E0\u8981\u7D20\u306E\u6271\u3044")]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html#customized-built-in-elements",target:"_blank",rel:"noopener"},[n("code",null,"is"),u("\u306E\u8A18\u6CD5")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"unmounted")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html",target:"_blank",rel:"noopener"},"\u{1F49A}\u{1F4A1}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"beforeUnmount")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html",target:"_blank",rel:"noopener"},"\u{1F49A}\u{1F4A1}")])])])],-1)),D1=Js(()=>n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}}),n("th",{style:{"text-align":"center"}})])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/props-default-this.html",target:"_blank",rel:"noopener"},[n("code",null,"default"),u("\u306E"),n("code",null,"this")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/custom-directives.html",target:"_blank",rel:"noopener"},"\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u5B9A\u7FA9\u65B9\u6CD5")]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/data-option.html",target:"_blank",rel:"noopener"},[n("code",null,"data"),u("\u95A2\u6570")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html",target:"_blank",rel:"noopener"},"\u{1F49A}\u{1F527}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/data-option.html#mixin-merge-behavior-change",target:"_blank",rel:"noopener"},[u("mixin \u306E"),n("code",null,"data"),u("\u306E\u6271\u3044")])]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html",target:"_blank",rel:"noopener"},[n("code",null,":attr=false")])]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/transition.html",target:"_blank",rel:"noopener"},"Transition \u30AF\u30E9\u30B9\u540D\u5909\u66F4")]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/transition-group.html",target:"_blank",rel:"noopener"},[n("code",null,"<TransitionGroup>"),u("\u306E\u30EB\u30FC\u30C8\u8981\u7D20")])]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/watch.html",target:"_blank",rel:"noopener"},"\u914D\u5217\u306E watch")]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[u("\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u7121\u3057\u306E"),n("code",null,"<template>")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-lone-template.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/mount-changes.html",target:"_blank",rel:"noopener"},"Vue \u30A2\u30D7\u30EA\u306E\u30EB\u30FC\u30C8")]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html",target:"_blank",rel:"noopener"},[n("code",null,"hook:"),u("\u30A4\u30D9\u30F3\u30C8")])]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html",target:"_blank",rel:"noopener"},[n("code",null,"v-on"),u("\u30AD\u30FC\u4FEE\u98FE\u5B50")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html",target:"_blank",rel:"noopener"},"\u{1F49A}\u{1F527}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/events-api.html",target:"_blank",rel:"noopener"},[n("code",null,"$on"),u("\u30FB"),n("code",null,"$off"),u("\u30FB"),n("code",null,"$once")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-events-api.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/filters.html",target:"_blank",rel:"noopener"},"\u30D5\u30A3\u30EB\u30BF\u30FC")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-filter.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html",target:"_blank",rel:"noopener"},"Inline \u30C6\u30F3\u30D7\u30EC\u30FC\u30C8")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-inline-template.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/children.html",target:"_blank",rel:"noopener"},[n("code",null,"$children")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.org/docs/latest/rules/no-restricted-properties",target:"_blank",rel:"noopener"},"\u{1F499}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/props-data.html",target:"_blank",rel:"noopener"},[n("code",null,"propsData")])]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"$destroy()")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.org/docs/latest/rules/no-restricted-properties",target:"_blank",rel:"noopener"},"\u{1F499}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"Vue.set()"),u("\u30FB"),n("code",null,"Vue.delete()")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.org/docs/latest/rules/no-restricted-imports",target:"_blank",rel:"noopener"},"\u{1F499}")])])])],-1)),M1=Js(()=>n("div",{class:"text-xs"},[n("p",null,"25 / 40 \u534A\u5206\u4EE5\u4E0A\u304C\u30C1\u30A7\u30C3\u30AF\u53EF\u80FD")],-1)),R1={__name:"17",setup(e){const t={hideInToc:!0,layout:"sub-2-cols",clicks:1,srcSequence:"./src/03_060.md"},s=M(z);return(r,o)=>{const i=ol;return y(),G(Lt,de(ue(t)),{left:V(l=>[Q(i,{"highlight-rows":"7, 9, 11, 13, 17, 18",on:_(s).nav.clicks===1},{default:V(()=>[L1]),_:1},8,["on"])]),right:V(l=>[Q(i,{"highlight-rows":"2, 4-8, 10, 11, 17",on:_(s).nav.clicks===1},{default:V(()=>[D1]),_:1},8,["on"]),M1]),default:V(()=>[V1,F1]),_:1},16)}}};var q1=Le(R1,[["__scopeId","data-v-1c3e77e9"]]);const N1=n("h1",null,[u("\u307E\u3060\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u307E\u3059\uFF01"),n("br"),u("\u{1F609}")],-1),U1={__name:"18",setup(e){const t={layout:"section",hideInToc:!0,srcSequence:"./src/03_065.md"};return M(z),(s,r)=>(y(),G(Ft,de(ue(t)),{default:V(()=>[N1]),_:1},16))}};var fd="/vue-fes-japan-online-2022-slide/FUTURE-logo.svg",H1="/vue-fes-japan-online-2022-slide/eslint-plugin-vue-scoped-css.png";const Xs=e=>(ze("data-v-4a1d1489"),e=e(),Ke(),e),z1=Xs(()=>n("h2",null,"eslint-plugin-vue-scoped-css \u3082\u5C0E\u5165\u3059\u308B",-1)),K1=Xs(()=>n("p",null,[u("SFC \u306E\u30B9\u30B3\u30FC\u30D7\u4ED8\u304D CSS \u3092\u30C1\u30A7\u30C3\u30AF\u3059\u308B ESLint \u30D7\u30E9\u30B0\u30A4\u30F3\u3002"),n("br"),n("a",{href:"https://github.com/future-architect/eslint-plugin-vue-scoped-css",target:"_blank",rel:"noopener"},"https://github.com/future-architect/eslint-plugin-vue-scoped-css")],-1)),W1=Xs(()=>n("ul",null,[n("li",null,[n("a",{href:"https://future-architect.github.io/eslint-plugin-vue-scoped-css/rules/no-unused-selector.html",target:"_blank",rel:"noopener"},"\u672A\u4F7F\u7528\u30BB\u30EC\u30AF\u30BF\u3092\u30C1\u30A7\u30C3\u30AF"),u("\u3067\u304D\u305F\u308A\u3059\u308B\u30D7\u30E9\u30B0\u30A4\u30F3")]),n("li",null,[n("a",{href:"https://github.com/future-architect/",target:"_blank",rel:"noopener"},"\u30D5\u30E5\u30FC\u30C1\u30E3\u30FC\uFF08\u5F0A\u793E\uFF09\u306E OSS \u30EA\u30DD\u30B8\u30C8\u30EA \u{1F962}"),u("\u3067\u7BA1\u7406")]),n("li",null,"\u5143\u3005\u306F\u793E\u5185\u3067\u958B\u767A\u904B\u7528\u3055\u308C\u3066\u3044\u305F\u30C1\u30A7\u30C3\u30AF\u30EB\u30FC\u30EB\u306E\u4E00\u90E8\u3092 OSS \u5316\u3057\u305F\u3082\u306E"),n("li",null,"23,000 \u30C0\u30A6\u30F3\u30ED\u30FC\u30C9 / \u9031 \u7A0B\u5EA6\u306B\u306F\u5229\u7528\u3055\u308C\u3066\u3044\u308B (2022 \u5E74 9 \u6708\u306E\u60C5\u5831)")],-1)),G1=Xs(()=>n("div",{class:"image-wrapper"},[n("p",null,[n("a",{href:"https://www.future.co.jp/",target:"_blank",rel:"noopener"},[n("img",{src:fd,alt:"Future"})])])],-1)),Q1=Xs(()=>n("p",null,[n("img",{src:H1,alt:"eslint-plugin-vue-scoped-css"})],-1)),Y1={__name:"19",setup(e){const t={hideInToc:!0,layout:"sub-2-cols",srcSequence:"./src/03_070.md"};return M(z),(s,r)=>(y(),G(Lt,de(ue(t)),{left:V(o=>[W1,G1]),right:V(o=>[Q1]),default:V(()=>[z1,K1]),_:1},16))}};var Z1=Le(Y1,[["__scopeId","data-v-4a1d1489"]]);const er=e=>(ze("data-v-9d922900"),e=e(),Ke(),e),J1=er(()=>n("h2",null,"Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B",-1)),X1=er(()=>n("p",null,[u("\u{1F49A}, \u{1F499}, \u{1F9E1}: eslint-plugin-vue, ESLint, "),n("strong",null,"eslint-plugin-vue-scoped-css"),u(" \u3067\u30C1\u30A7\u30C3\u30AF\u53EF\u80FD"),n("br"),u(" \u{1F527}: \u81EA\u52D5\u4FEE\u6B63\u53EF\u80FD / \u{1F4A1}: \u30A8\u30C7\u30A3\u30BF\u4E0A\u3067\u306E\u63D0\u6848")],-1)),ek=er(()=>n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}}),n("th",{style:{"text-align":"center"}})])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/global-api.html",target:"_blank",rel:"noopener"},"createApp()\u7B49")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.org/docs/latest/rules/no-restricted-imports",target:"_blank",rel:"noopener"},"\u{1F499}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/global-api-treeshaking.html",target:"_blank",rel:"noopener"},"\u540D\u524D\u4ED8\u304D Export")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.org/docs/latest/rules/no-restricted-imports",target:"_blank",rel:"noopener"},"\u{1F499}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/v-model.html",target:"_blank",rel:"noopener"},[n("code",null,"v-model"),u("\u306E"),n("code",null,"modelValue"),u(", "),n("code",null,"emit('input')")])]),n("td",{style:{"text-align":"center"}},"\u{1F49A}\u{1F4A1}")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/v-model.html",target:"_blank",rel:"noopener"},[n("code",null,"v-bind.sync"),u("\u5EC3\u6B62")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html",target:"_blank",rel:"noopener"},"\u{1F49A}\u{1F527}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/key-attribute.html",target:"_blank",rel:"noopener"},[n("code",null,"<template v-for>"),u("\u306E key")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html",target:"_blank",rel:"noopener"},[n("code",null,"v-if"),u("\u30FB"),n("code",null,"v-for"),u(" \u306E\u512A\u5148\u5EA6")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/v-bind.html",target:"_blank",rel:"noopener"},[n("code",null,'v-bind="object"'),u("\u304C\u9806\u5E8F\u306B\u5F71\u97FF")])]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html",target:"_blank",rel:"noopener"},[n("code",null,"v-on:event.native"),u("\u5EC3\u6B62")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/functional-components.html",target:"_blank",rel:"noopener"},"\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5")]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/functional-components.html",target:"_blank",rel:"noopener"},"SFC \u306E\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5EC3\u6B62")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-functional-template.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/async-components.html",target:"_blank",rel:"noopener"},"\u975E\u540C\u671F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5")]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/emits-option.html",target:"_blank",rel:"noopener"},[n("code",null,"emits"),u("\u30AA\u30D7\u30B7\u30E7\u30F3")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/require-explicit-emits.html",target:"_blank",rel:"noopener"},"\u{1F49A}\u{1F4A1}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/render-function-api.html",target:"_blank",rel:"noopener"},[n("code",null,"render"),u("\u95A2\u6570\u306E\u5909\u66F4")])]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/slots-unification.html",target:"_blank",rel:"noopener"},[n("code",null,"$scopedSlots"),u("\u5EC3\u6B62")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html",target:"_blank",rel:"noopener"},"\u{1F49A}\u{1F527}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/slots-unification.html",target:"_blank",rel:"noopener"},[n("code",null,"$slots"),u("\u306E\u95A2\u6570\u5316")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/require-slots-as-functions.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/listeners-removed",target:"_blank",rel:"noopener"},[n("code",null,"$listeners"),u("\u5EC3\u6B62")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html",target:"_blank",rel:"noopener"},[n("code",null,"$attrs"),u("\u306E\u5909\u66F4")])]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html",target:"_blank",rel:"noopener"},"\u30AB\u30B9\u30BF\u30E0\u8981\u7D20\u306E\u6271\u3044")]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html#customized-built-in-elements",target:"_blank",rel:"noopener"},[n("code",null,"is"),u("\u306E\u8A18\u6CD5")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"unmounted")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html",target:"_blank",rel:"noopener"},"\u{1F49A}\u{1F4A1}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"beforeUnmount")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html",target:"_blank",rel:"noopener"},"\u{1F49A}\u{1F4A1}")])])])],-1)),tk=er(()=>n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}}),n("th",{style:{"text-align":"center"}})])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/props-default-this.html",target:"_blank",rel:"noopener"},[n("code",null,"default"),u("\u306E"),n("code",null,"this")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/custom-directives.html",target:"_blank",rel:"noopener"},"\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u5B9A\u7FA9\u65B9\u6CD5")]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/data-option.html",target:"_blank",rel:"noopener"},[n("code",null,"data"),u("\u95A2\u6570")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html",target:"_blank",rel:"noopener"},"\u{1F49A}\u{1F527}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/data-option.html#mixin-merge-behavior-change",target:"_blank",rel:"noopener"},[u("mixin \u306E"),n("code",null,"data"),u("\u306E\u6271\u3044")])]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html",target:"_blank",rel:"noopener"},[n("code",null,":attr=false")])]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/transition.html",target:"_blank",rel:"noopener"},"Transition \u30AF\u30E9\u30B9\u540D\u5909\u66F4")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://future-architect.github.io/eslint-plugin-vue-scoped-css/rules/no-deprecated-v-enter-v-leave-class.html",target:"_blank",rel:"noopener"},"\u{1F9E1}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/transition-group.html",target:"_blank",rel:"noopener"},[n("code",null,"<TransitionGroup>"),u("\u306E\u30EB\u30FC\u30C8\u8981\u7D20")])]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/watch.html",target:"_blank",rel:"noopener"},"\u914D\u5217\u306E watch")]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[u("\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u7121\u3057\u306E"),n("code",null,"<template>")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-lone-template.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/mount-changes.html",target:"_blank",rel:"noopener"},"Vue \u30A2\u30D7\u30EA\u306E\u30EB\u30FC\u30C8")]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html",target:"_blank",rel:"noopener"},[n("code",null,"hook:"),u("\u30A4\u30D9\u30F3\u30C8")])]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html",target:"_blank",rel:"noopener"},[n("code",null,"v-on"),u("\u30AD\u30FC\u4FEE\u98FE\u5B50")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html",target:"_blank",rel:"noopener"},"\u{1F49A}\u{1F527}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/events-api.html",target:"_blank",rel:"noopener"},[n("code",null,"$on"),u("\u30FB"),n("code",null,"$off"),u("\u30FB"),n("code",null,"$once")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-events-api.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/filters.html",target:"_blank",rel:"noopener"},"\u30D5\u30A3\u30EB\u30BF\u30FC")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-filter.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html",target:"_blank",rel:"noopener"},"Inline \u30C6\u30F3\u30D7\u30EC\u30FC\u30C8")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-inline-template.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/children.html",target:"_blank",rel:"noopener"},[n("code",null,"$children")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.org/docs/latest/rules/no-restricted-properties",target:"_blank",rel:"noopener"},"\u{1F499}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/props-data.html",target:"_blank",rel:"noopener"},[n("code",null,"propsData")])]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"$destroy()")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.org/docs/latest/rules/no-restricted-properties",target:"_blank",rel:"noopener"},"\u{1F499}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"Vue.set()"),u("\u30FB"),n("code",null,"Vue.delete()")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.org/docs/latest/rules/no-restricted-imports",target:"_blank",rel:"noopener"},"\u{1F499}")])])])],-1)),nk=er(()=>n("div",{class:"text-xs"},[n("p",null,"26 / 40 \u304C\u30C1\u30A7\u30C3\u30AF\u53EF\u80FD")],-1)),sk={__name:"20",setup(e){const t={hideInToc:!0,layout:"sub-2-cols",clicks:1,srcSequence:"./src/03_080.md"},s=M(z);return(r,o)=>{const i=ol;return y(),G(Lt,de(ue(t)),{left:V(l=>[Q(i,{"highlight-rows":"7, 9, 11, 13, 17, 18",on:_(s).nav.clicks===1},{default:V(()=>[ek]),_:1},8,["on"])]),right:V(l=>[Q(i,{"highlight-rows":"2, 4, 5, 7, 8, 10, 11, 17",on:_(s).nav.clicks===1},{default:V(()=>[tk]),_:1},8,["on"]),nk]),default:V(()=>[J1,X1]),_:1},16)}}};var rk=Le(sk,[["__scopeId","data-v-9d922900"]]);const io=e=>(ze("data-v-78db32d4"),e=e(),Ke(),e),ok=io(()=>n("h2",null,"eslint-plugin-\u793E\u5185\u7528 \u306B\u8FFD\u52A0\u30C1\u30A7\u30C3\u30AF\u3092\u5B9F\u88C5",-1)),ik=io(()=>n("p",null,[n("a",{href:"https://www.future.co.jp/",target:"_blank",rel:"noopener"},"\u30D5\u30E5\u30FC\u30C1\u30E3\u30FC"),u("\uFF08\u5F0A\u793E\uFF09\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u4F7F\u7528\u3059\u308B\u305F\u3081\u3060\u3051\u306B\u793E\u5185\u3067\u958B\u767A\u30FB\u904B\u7528\u3055\u308C\u3066\u3044\u308B ESLint \u30D7\u30E9\u30B0\u30A4\u30F3")],-1)),lk=io(()=>n("ul",null,[n("li",null,[u("\u3053\u3053\u304B\u3089\u3001eslint-plugin-vue \u306B\u30C1\u30A7\u30C3\u30AF\u30EB\u30FC\u30EB\u3092\u8F38\u51FA\u3059\u308B\u3053\u3068\u3082\u3042\u308B "),n("ul",null,[n("li",null,[n("a",{href:"https://eslint.vuejs.org/rules/no-undef-properties.html",target:"_blank",rel:"noopener"},"vue/no-undef-properties"),u(" \uFF08\u672A\u5B9A\u7FA9\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u30C1\u30A7\u30C3\u30AF\u3059\u308B\u30EB\u30FC\u30EB\uFF09,"),n("br"),n("a",{href:"https://eslint.vuejs.org/rules/no-unused-refs.html",target:"_blank",rel:"noopener"},"vue/no-unused-refs"),u(" \uFF08\u672A\u4F7F\u7528\u306E"),n("code",null,'ref="..."'),u("\u3092\u30C1\u30A7\u30C3\u30AF\u3059\u308B\u30EB\u30FC\u30EB\uFF09\u306A\u3069")])])])],-1)),ak=io(()=>n("p",null,[n("a",{href:"https://www.future.co.jp/",target:"_blank",rel:"noopener"},[n("img",{src:fd,alt:"Future"})])],-1)),ck={__name:"21",setup(e){const t={hideInToc:!0,srcSequence:"./src/03_090.md"};return M(z),(s,r)=>(y(),G(Xt,de(ue(t)),{default:V(()=>[ok,ik,lk,ak]),_:1},16))}};var uk=Le(ck,[["__scopeId","data-v-78db32d4"]]);const tr=e=>(ze("data-v-294e1c90"),e=e(),Ke(),e),dk=tr(()=>n("h2",null,"Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B",-1)),pk=tr(()=>n("p",null,[u("\u{1F49A}, \u{1F499}, \u{1F9E1}, \u{1F496}: eslint-plugin-vue, ESLint, eslint-plugin-vue-scoped-css, "),n("strong",null,"\u793E\u5185\u7528\u30D7\u30E9\u30B0\u30A4\u30F3"),u(" \u3067\u30C1\u30A7\u30C3\u30AF\u53EF\u80FD"),n("br"),u(" \u{1F527}: \u81EA\u52D5\u4FEE\u6B63\u53EF\u80FD / \u{1F4A1}: \u30A8\u30C7\u30A3\u30BF\u4E0A\u3067\u306E\u63D0\u6848 / \u{1F507}: "),n("strong",null,"\u793E\u5185\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u306F\u5F71\u97FF\u306A\u3057")],-1)),hk=tr(()=>n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}}),n("th",{style:{"text-align":"center"}})])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/global-api.html",target:"_blank",rel:"noopener"},"createApp()\u7B49")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.org/docs/latest/rules/no-restricted-imports",target:"_blank",rel:"noopener"},"\u{1F499}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/global-api-treeshaking.html",target:"_blank",rel:"noopener"},"\u540D\u524D\u4ED8\u304D Export")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.org/docs/latest/rules/no-restricted-imports",target:"_blank",rel:"noopener"},"\u{1F499}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/v-model.html",target:"_blank",rel:"noopener"},[n("code",null,"v-model"),u("\u306E"),n("code",null,"modelValue"),u(", "),n("code",null,"emit('input')")])]),n("td",{style:{"text-align":"center"}},"\u{1F49A}\u{1F4A1}")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/v-model.html",target:"_blank",rel:"noopener"},[n("code",null,"v-bind.sync"),u("\u5EC3\u6B62")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html",target:"_blank",rel:"noopener"},"\u{1F49A}\u{1F527}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/key-attribute.html",target:"_blank",rel:"noopener"},[n("code",null,"<template v-for>"),u("\u306E key")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html",target:"_blank",rel:"noopener"},[n("code",null,"v-if"),u("\u30FB"),n("code",null,"v-for"),u(" \u306E\u512A\u5148\u5EA6")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/v-bind.html",target:"_blank",rel:"noopener"},[n("code",null,'v-bind="object"'),u("\u304C\u9806\u5E8F\u306B\u5F71\u97FF")])]),n("td",{style:{"text-align":"center"}},"\u{1F496}")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html",target:"_blank",rel:"noopener"},[n("code",null,"v-on:event.native"),u("\u5EC3\u6B62")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/functional-components.html",target:"_blank",rel:"noopener"},"\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5")]),n("td",{style:{"text-align":"center"}},"\u{1F507}")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/functional-components.html",target:"_blank",rel:"noopener"},"SFC \u306E\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5EC3\u6B62")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-functional-template.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/async-components.html",target:"_blank",rel:"noopener"},"\u975E\u540C\u671F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5")]),n("td",{style:{"text-align":"center"}},"\u{1F507}")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/emits-option.html",target:"_blank",rel:"noopener"},[n("code",null,"emits"),u("\u30AA\u30D7\u30B7\u30E7\u30F3")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/require-explicit-emits.html",target:"_blank",rel:"noopener"},"\u{1F49A}\u{1F4A1}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/render-function-api.html",target:"_blank",rel:"noopener"},[n("code",null,"render"),u("\u95A2\u6570\u306E\u5909\u66F4")])]),n("td",{style:{"text-align":"center"}},"\u{1F496}")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/slots-unification.html",target:"_blank",rel:"noopener"},[n("code",null,"$scopedSlots"),u("\u5EC3\u6B62")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html",target:"_blank",rel:"noopener"},"\u{1F49A}\u{1F527}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/slots-unification.html",target:"_blank",rel:"noopener"},[n("code",null,"$slots"),u("\u306E\u95A2\u6570\u5316")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/require-slots-as-functions.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/listeners-removed",target:"_blank",rel:"noopener"},[n("code",null,"$listeners"),u("\u5EC3\u6B62")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html",target:"_blank",rel:"noopener"},[n("code",null,"$attrs"),u("\u306E\u5909\u66F4")])]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html",target:"_blank",rel:"noopener"},"\u30AB\u30B9\u30BF\u30E0\u8981\u7D20\u306E\u6271\u3044")]),n("td",{style:{"text-align":"center"}},"\u{1F507}")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html#customized-built-in-elements",target:"_blank",rel:"noopener"},[n("code",null,"is"),u("\u306E\u8A18\u6CD5")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"unmounted")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html",target:"_blank",rel:"noopener"},"\u{1F49A}\u{1F4A1}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"beforeUnmount")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html",target:"_blank",rel:"noopener"},"\u{1F49A}\u{1F4A1}")])])])],-1)),gk=tr(()=>n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}}),n("th",{style:{"text-align":"center"}})])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/props-default-this.html",target:"_blank",rel:"noopener"},[n("code",null,"default"),u("\u306E"),n("code",null,"this")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/custom-directives.html",target:"_blank",rel:"noopener"},"\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u5B9A\u7FA9\u65B9\u6CD5")]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/data-option.html",target:"_blank",rel:"noopener"},[n("code",null,"data"),u("\u95A2\u6570")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html",target:"_blank",rel:"noopener"},"\u{1F49A}\u{1F527}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/data-option.html#mixin-merge-behavior-change",target:"_blank",rel:"noopener"},[u("mixin \u306E"),n("code",null,"data"),u("\u306E\u6271\u3044")])]),n("td",{style:{"text-align":"center"}},"\u{1F507}")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html",target:"_blank",rel:"noopener"},[n("code",null,":attr=false")])]),n("td",{style:{"text-align":"center"}},"\u{1F507}")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/transition.html",target:"_blank",rel:"noopener"},"Transition \u30AF\u30E9\u30B9\u540D\u5909\u66F4")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://future-architect.github.io/eslint-plugin-vue-scoped-css/rules/no-deprecated-v-enter-v-leave-class.html",target:"_blank",rel:"noopener"},"\u{1F9E1}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/transition-group.html",target:"_blank",rel:"noopener"},[n("code",null,"<TransitionGroup>"),u("\u306E\u30EB\u30FC\u30C8\u8981\u7D20")])]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/watch.html",target:"_blank",rel:"noopener"},"\u914D\u5217\u306E watch")]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[u("\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u7121\u3057\u306E"),n("code",null,"<template>")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-lone-template.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/mount-changes.html",target:"_blank",rel:"noopener"},"Vue \u30A2\u30D7\u30EA\u306E\u30EB\u30FC\u30C8")]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html",target:"_blank",rel:"noopener"},[n("code",null,"hook:"),u("\u30A4\u30D9\u30F3\u30C8")])]),n("td",{style:{"text-align":"center"}},"\u274C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html",target:"_blank",rel:"noopener"},[n("code",null,"v-on"),u("\u30AD\u30FC\u4FEE\u98FE\u5B50")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html",target:"_blank",rel:"noopener"},"\u{1F49A}\u{1F527}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/events-api.html",target:"_blank",rel:"noopener"},[n("code",null,"$on"),u("\u30FB"),n("code",null,"$off"),u("\u30FB"),n("code",null,"$once")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-events-api.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/filters.html",target:"_blank",rel:"noopener"},"\u30D5\u30A3\u30EB\u30BF\u30FC")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-filter.html",target:"_blank",rel:"noopener"},"\u{1F49A}"),u(" \u{1F496}\u{1F527}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html",target:"_blank",rel:"noopener"},"Inline \u30C6\u30F3\u30D7\u30EC\u30FC\u30C8")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-inline-template.html",target:"_blank",rel:"noopener"},"\u{1F49A}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/children.html",target:"_blank",rel:"noopener"},[n("code",null,"$children")])]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.org/docs/latest/rules/no-restricted-properties",target:"_blank",rel:"noopener"},"\u{1F499}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/props-data.html",target:"_blank",rel:"noopener"},[n("code",null,"propsData")])]),n("td",{style:{"text-align":"center"}},"\u{1F507}")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"$destroy()")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.org/docs/latest/rules/no-restricted-properties",target:"_blank",rel:"noopener"},"\u{1F499}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"Vue.set()"),u("\u30FB"),n("code",null,"Vue.delete()")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.org/docs/latest/rules/no-restricted-imports",target:"_blank",rel:"noopener"},"\u{1F499}")])])])],-1)),mk=tr(()=>n("div",{class:"text-xs"},[n("p",null,"\u306E\u3053\u308A 6 \u9805\u76EE")],-1)),fk={__name:"22",setup(e){const t={hideInToc:!0,layout:"sub-2-cols",clicks:1,srcSequence:"./src/03_100.md"},s=M(z);return(r,o)=>{const i=ol;return y(),G(Lt,de(ue(t)),{left:V(l=>[Q(i,{"highlight-rows":"17",on:_(s).nav.clicks===1},{default:V(()=>[hk]),_:1},8,["on"])]),right:V(l=>[Q(i,{"highlight-rows":"2, 7, 8, 10, 11",on:_(s).nav.clicks===1},{default:V(()=>[gk]),_:1},8,["on"]),mk]),default:V(()=>[dk,pk]),_:1},16)}}};var vk=Le(fk,[["__scopeId","data-v-294e1c90"]]),bk="/vue-fes-japan-online-2022-slide/no-vue-filter-before.png",yk="/vue-fes-japan-online-2022-slide/no-vue-filter-after.png";const _k=n("h2",null,"\u30D5\u30A3\u30EB\u30BF\u30FC\u5EC3\u6B62\u306B\u4F34\u3046\u5BFE\u5FDC\u306B\u3064\u3044\u3066",-1),kk=n("p",null,[u("\u30D5\u30A3\u30EB\u30BF\u30FC\u5EC3\u6B62\u306B\u4F34\u3063\u3066\u3001\u793E\u5185\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u3067\u306F\u95A2\u6570\u547C\u3073\u51FA\u3057\u306B\u7F6E\u304D\u63DB\u3048\u308B\u65B9\u91DD\u3068\u3057\u307E\u3057\u305F\u3002"),n("br"),u(" \u3057\u304B\u3057\u3001eslint-plugin-vue \u3067\u3082"),n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-filter.html",target:"_blank",rel:"noopener"},"\u30D5\u30A3\u30EB\u30BF\u30FC\u306E\u4F7F\u7528\u7B87\u6240\u3092\u691C\u51FA"),u("\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u304C"),n("em",null,"\u81EA\u52D5\u7684\u306B\u4FEE\u6B63\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093"),u("\u3002"),n("br"),u(" \u30D5\u30A3\u30EB\u30BF\u30FC\u306F\u304B\u306A\u308A\u591A\u304F\u306E\u7B87\u6240\u3067\u4F7F\u7528\u3057\u3066\u3044\u305F\u305F\u3081\u3001"),n("strong",null,"\u793E\u5185\u7528 ESLint \u30D7\u30E9\u30B0\u30A4\u30F3\u306B\u81EA\u52D5\u4FEE\u6B63\u3092\u6301\u3064\u30EB\u30FC\u30EB\u3092\u8FFD\u52A0"),u("\u3057\u3066\u5BFE\u5FDC\u3057\u307E\u3057\u305F\u3002")],-1),jk=n("pre",{class:"shiki-container"},[n("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#E0A569"}},"module"),n("span",{style:{color:"#858585"}},"."),n("span",{style:{color:"#E0A569"}},"exports"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#CB7676"}},"="),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"  "),n("span",{style:{color:"#758575"}},"// ...")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#E0A569"}},"rules"),n("span",{style:{color:"#858585"}},":"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"    "),n("span",{style:{color:"#758575"}},"// ...")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#C98A7D"}},'"internal/no-vue-filter"'),n("span",{style:{color:"#858585"}},":"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"[")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"      "),n("span",{style:{color:"#C98A7D"}},'"error"'),n("span",{style:{color:"#858585"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"      "),n("span",{style:{color:"#858585"}},"{")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#758575"}},"/* \u30D5\u30A3\u30EB\u30BF\u30FC\u540D: \u4FEE\u6B63\u5F8C\u306E\u95A2\u6570\u60C5\u5831 */")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#E0A569"}},"formatNum"),n("span",{style:{color:"#858585"}},":"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#E0A569"}},"method"),n("span",{style:{color:"#858585"}},":"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#C98A7D"}},'"$util.formatNum"'),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"},")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#E0A569"}},"className"),n("span",{style:{color:"#858585"}},":"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#858585"}},"{")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"          "),n("span",{style:{color:"#E0A569"}},"method"),n("span",{style:{color:"#858585"}},":"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#C98A7D"}},'"$util.getClassName"'),n("span",{style:{color:"#858585"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"          "),n("span",{style:{color:"#E0A569"}},"argumentIndex"),n("span",{style:{color:"#858585"}},":"),n("span",{style:{color:"#DBD7CA"}}," "),n("span",{style:{color:"#6394BF"}},"1"),n("span",{style:{color:"#858585"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"        "),n("span",{style:{color:"#858585"}},"},")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"        "),n("span",{style:{color:"#758575"}},"// ...")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"      "),n("span",{style:{color:"#858585"}},"},")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"    "),n("span",{style:{color:"#858585"}},"],")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"    "),n("span",{style:{color:"#758575"}},"// ...")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#DBD7CA"}},"  "),n("span",{style:{color:"#858585"}},"},")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"  "),n("span",{style:{color:"#758575"}},"// ...")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#858585"}},"};")])])]),n("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[n("code",null,[n("span",{class:"line"},[n("span",{style:{color:"#B58451"}},"module"),n("span",{style:{color:"#8E8F8B"}},"."),n("span",{style:{color:"#B58451"}},"exports"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#AB5959"}},"="),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"  "),n("span",{style:{color:"#A0ADA0"}},"// ...")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#B58451"}},"rules"),n("span",{style:{color:"#8E8F8B"}},":"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"    "),n("span",{style:{color:"#A0ADA0"}},"// ...")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#B56959"}},'"internal/no-vue-filter"'),n("span",{style:{color:"#8E8F8B"}},":"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"[")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"      "),n("span",{style:{color:"#B56959"}},'"error"'),n("span",{style:{color:"#8E8F8B"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"      "),n("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#A0ADA0"}},"/* \u30D5\u30A3\u30EB\u30BF\u30FC\u540D: \u4FEE\u6B63\u5F8C\u306E\u95A2\u6570\u60C5\u5831 */")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#B58451"}},"formatNum"),n("span",{style:{color:"#8E8F8B"}},":"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#B58451"}},"method"),n("span",{style:{color:"#8E8F8B"}},":"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#B56959"}},'"$util.formatNum"'),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"},")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#B58451"}},"className"),n("span",{style:{color:"#8E8F8B"}},":"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#8E8F8B"}},"{")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"          "),n("span",{style:{color:"#B58451"}},"method"),n("span",{style:{color:"#8E8F8B"}},":"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#B56959"}},'"$util.getClassName"'),n("span",{style:{color:"#8E8F8B"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"          "),n("span",{style:{color:"#B58451"}},"argumentIndex"),n("span",{style:{color:"#8E8F8B"}},":"),n("span",{style:{color:"#393A34"}}," "),n("span",{style:{color:"#296AA3"}},"1"),n("span",{style:{color:"#8E8F8B"}},",")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"        "),n("span",{style:{color:"#8E8F8B"}},"},")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"        "),n("span",{style:{color:"#A0ADA0"}},"// ...")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"      "),n("span",{style:{color:"#8E8F8B"}},"},")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"    "),n("span",{style:{color:"#8E8F8B"}},"],")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"    "),n("span",{style:{color:"#A0ADA0"}},"// ...")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#393A34"}},"  "),n("span",{style:{color:"#8E8F8B"}},"},")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"  "),n("span",{style:{color:"#A0ADA0"}},"// ...")]),u(`
`),n("span",{class:"line"},[n("span",{style:{color:"#8E8F8B"}},"};")])])])],-1),xk=n("p",null,"Before:",-1),wk=n("p",null,[n("img",{src:bk,alt:"no-vue-filter before"})],-1),$k=n("p",null,"After:",-1),Ek=n("p",null,[n("img",{src:yk,alt:"no-vue-filter after"})],-1),Sk={__name:"23",setup(e){const t={hideInToc:!0,layout:"sub-2-cols",srcSequence:"./src/03_110.md"};return M(z),(s,r)=>(y(),G(Lt,de(ue(t)),{left:V(o=>[jk]),right:V(o=>[xk,wk,$k,Ek]),default:V(()=>[_k,kk]),_:1},16))}},Ak=n("h1",null,[u("\u6B8B\u308A 6 \u9805\u76EE\u306F\u3069\u3046\u3057\u305F\uFF1F"),n("br"),u("\u{1F914}")],-1),Ck={__name:"24",setup(e){const t={layout:"section",hideInToc:!0,srcSequence:"./src/03_115.md"};return M(z),(s,r)=>(y(),G(Ft,de(ue(t)),{default:V(()=>[Ak]),_:1},16))}};const il=e=>(ze("data-v-044cbba0"),e=e(),Ke(),e),Tk=il(()=>n("h2",null,"\u6B8B\u308A\u306F\u3069\u3046\u3057\u305F\uFF1F",-1)),Bk=il(()=>n("p",null,[u("\u6B8B\u308A\u306E 6 \u9805\u76EE\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u5BFE\u5FDC\u3057\u307E\u3057\u305F\u3002"),n("br"),u(" \u3069\u308C\u3082\u3059\u3050\u306B\u898B\u3064\u3051\u3089\u308C\u3059\u3050\u4FEE\u6B63\u3067\u304D\u305F\u306E\u3067\u3001ESLint \u30EB\u30FC\u30EB\u3092\u4F7F\u7528\u3057\u307E\u305B\u3093\u3067\u3057\u305F\u3002"),n("br"),u(" \uFF08\u4ECA\u5F8C\u8FFD\u52A0\u3059\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002\uFF09")],-1)),Ik=il(()=>n("div",{class:"text-sm"},[n("ul",null,[n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html",target:"_blank",rel:"noopener"},[n("code",null,"$attrs"),u("\u306E\u5909\u66F4")]),n("br"),u(" \u2026 \u5168\u3066"),n("code",null,"$listeners"),u("\u3068\u4F75\u7528\u3057\u3066\u3044\u305F\u305F\u3081"),n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/listeners-removed",target:"_blank",rel:"noopener"},[n("code",null,"$listeners"),u("\u5EC3\u6B62")]),u("\u306E\u5BFE\u5FDC\u3092\u3057\u3066\u4F5C\u696D\u7D42\u4E86\u3002")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/custom-directives.html",target:"_blank",rel:"noopener"},"\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u5B9A\u7FA9\u65B9\u6CD5"),n("br"),u(" \u2026 \u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u306F\u30D5\u30A1\u30A4\u30EB\u69CB\u6210\u3068\u3057\u3066\u307E\u3068\u3081\u3066\u3044\u305F\u306E\u3067\u898B\u3064\u3051\u308B\u305F\u3081\u306E\u5DE5\u592B\u306F\u4E0D\u8981\u3002\u4FEE\u6B63\u3057\u3066\u5BFE\u5FDC\u3002")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/transition-group.html",target:"_blank",rel:"noopener"},[n("code",null,"<TransitionGroup>"),u("\u306E\u30EB\u30FC\u30C8\u8981\u7D20")]),n("br"),u(" \u2026 \u3080\u3057\u308D\u5909\u66F4\u5F8C\u306E\u52D5\u4F5C\u3092\u597D\u3093\u3060\u305F\u3081\u52D5\u4F5C\u78BA\u8A8D\u3092\u3057\u3066\u4F5C\u696D\u7D42\u4E86\u3002")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/watch.html",target:"_blank",rel:"noopener"},"\u914D\u5217\u306E watch"),n("br"),u(" \u2026 \u4E00\u7B87\u6240\u914D\u5217\u306B\u5BFE\u3059\u308B watch \u3092\u767A\u898B\u3002\u305D\u3082\u305D\u3082 watch \u306F\u3042\u307E\u308A\u4F7F\u7528\u3057\u3066\u3044\u306A\u304B\u3063\u305F\u3002")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/mount-changes.html",target:"_blank",rel:"noopener"},"Vue \u30A2\u30D7\u30EA\u306E\u30EB\u30FC\u30C8"),n("br"),u(" \u2026 \u5404\u30A2\u30D7\u30EA\u3067 1 \u7B87\u6240\u4FEE\u6B63\u3002")]),n("li",null,[n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html",target:"_blank",rel:"noopener"},[n("code",null,"hook:"),u("\u30A4\u30D9\u30F3\u30C8")]),n("br"),u(" \u2026 \u5168\u3066"),n("code",null,"$once"),u("\u3068\u4F75\u7528\u3057\u3066\u3044\u305F\u305F\u3081"),n("a",{href:"https://v3-migration.vuejs.org/breaking-changes/events-api.html",target:"_blank",rel:"noopener"},[n("code",null,"$on"),u("\u30FB"),n("code",null,"$off"),u("\u30FB"),n("code",null,"$once")]),u("\u306E\u5BFE\u5FDC\u3092\u3057\u3066\u4F5C\u696D\u7D42\u4E86\u3002")])])],-1)),Pk={__name:"25",setup(e){const t={hideInToc:!0,layout:"sub-2-cols",srcSequence:"./src/03_120.md"};return M(z),(s,r)=>(y(),G(Lt,de(ue(t)),{default:V(()=>[Tk,Bk,Ik]),_:1},16))}};var Ok=Le(Pk,[["__scopeId","data-v-044cbba0"]]);const lo=e=>(ze("data-v-6c56180a"),e=e(),Ke(),e),Vk=lo(()=>n("h2",null,"Vue3 \u4EE5\u5916\u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B",-1)),Fk=lo(()=>n("p",null,"Vue3 \u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u30E9\u30A4\u30D6\u30E9\u30EA\u3078\u306E\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u306B\u4F34\u3046 Breaking Changes \u3084\u3001Vue3 \u4EE5\u524D\u306B\u975E\u63A8\u5968\u306B\u306F\u306A\u3063\u3066\u3044\u3066\u3001Vue3 \u3067\u524A\u9664\u3055\u308C\u305F\u6A5F\u80FD\u7B49\u3082 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002",-1)),Lk=lo(()=>n("p",null,[u("\u{1F49A}, \u{1F9E1}, \u{1F310}: eslint-plugin-vue, eslint-plugin-vue-scoped-css, "),n("a",{href:"https://eslint-plugin-vue-i18n.intlify.dev/",target:"_blank",rel:"noopener"},"@intlify/eslint-plugin-vue-i18n"),u(" \u3067\u30C1\u30A7\u30C3\u30AF\u53EF\u80FD"),n("br"),u(" \u{1F527}: \u81EA\u52D5\u4FEE\u6B63\u53EF\u80FD")],-1)),Dk=lo(()=>n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}}),n("th",{style:{"text-align":"center"}})])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,'scope="..."'),u("\u306E\u5EC3\u6B62(Vue.js 2.5.0+)\u3001"),n("code",null,"v-slot"),u("\u3092\u4F7F\u7528")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-scope-attribute.html",target:"_blank",rel:"noopener"},"\u{1F49A}\u{1F527}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,'slot="..."'),u("\u306E\u5EC3\u6B62(Vue.js 2.6.0+)\u3001"),n("code",null,"v-slot"),u("\u3092\u4F7F\u7528")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-slot-attribute.html",target:"_blank",rel:"noopener"},"\u{1F49A}\u{1F527}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,'slot-scope="..."'),u("\u306E\u5EC3\u6B62(Vue.js 2.6.0+)\u3001"),n("code",null,"v-slot"),u("\u3092\u4F7F\u7528")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-slot-scope-attribute.html",target:"_blank",rel:"noopener"},"\u{1F49A}\u{1F527}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,'slot-scope="..."'),u("\u306E\u5EC3\u6B62(Vue.js 2.6.0+)\u3001"),n("code",null,"v-slot"),u("\u3092\u4F7F\u7528")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint.vuejs.org/rules/no-deprecated-slot-scope-attribute.html",target:"_blank",rel:"noopener"},"\u{1F49A}\u{1F527}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[u("\u53E4\u3044 Deep \u30BB\u30EC\u30AF\u30BF\u30FC"),n("code",null,">>>"),u("\u306E\u4EE3\u308F\u308A\u306B"),n("code",null,"::v-deep"),u("\u3092\u4F7F\u7528")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://future-architect.github.io/eslint-plugin-vue-scoped-css/rules/no-deprecated-deep-combinator.html",target:"_blank",rel:"noopener"},"\u{1F9E1}\u{1F527}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"::v-deep"),u("\u306E\u4EE3\u308F\u308A\u306B\u3001"),n("code",null,":deep()"),u("\u307E\u305F\u306F"),n("code",null,"::v-deep()"),u("\u3092\u4F7F\u7528")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://future-architect.github.io/eslint-plugin-vue-scoped-css/rules/require-v-deep-argument.html",target:"_blank",rel:"noopener"},"\u{1F9E1}\u{1F527}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[u("vue-i18n \u306E"),n("code",null,"<i18n>"),u("\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u4EE3\u308F\u308A\u306B"),n("code",null,"<i18n-t>"),u("\u3092\u4F7F\u7528")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-i18n-component.html",target:"_blank",rel:"noopener"},"\u{1F310}\u{1F527}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[u("vue-i18n \u306E"),n("code",null,"place"),u("\u5C5E\u6027\u5EC3\u6B62")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-i18n-place-attr.html",target:"_blank",rel:"noopener"},"\u{1F310}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[u("vue-i18n \u306E"),n("code",null,"place"),u("Prop \u5EC3\u6B62")]),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-i18n-places-prop.html",target:"_blank",rel:"noopener"},"\u{1F310}")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},"vue-i18n \u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u69CB\u6587\u306E\u5909\u66F4"),n("td",{style:{"text-align":"center"}},[n("a",{href:"https://eslint-plugin-vue-i18n.intlify.dev/rules/valid-message-syntax.html",target:"_blank",rel:"noopener"},"\u{1F310}")])])])],-1)),Mk={__name:"26",setup(e){const t={hideInToc:!0,layout:"sub-2-cols",srcSequence:"./src/03_900.md"};return M(z),(s,r)=>(y(),G(Lt,de(ue(t)),{default:V(()=>[Vk,Fk,Lk,Dk]),_:1},16))}};var Rk=Le(Mk,[["__scopeId","data-v-6c56180a"]]);const qk=n("h1",null,[u("Vue3 \u79FB\u884C\u306B"),n("br"),u(" ESLint \u3092\u4F7F\u3046\u30E1\u30EA\u30C3\u30C8")],-1),Nk={__name:"27",setup(e){const t={layout:"section",srcSequence:"./src/04_010.md"};return M(z),(s,r)=>(y(),G(Ft,de(ue(t)),{default:V(()=>[qk]),_:1},16))}};var vd=be({props:{every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var i,l;const e=Tr("click"),t=Tr("after"),s=(a,c,d)=>hs(a,[[c,this.at!=null?+this.at+d:null,"",{hide:this.hide,fade:this.fade}]]);let r=(l=(i=this.$slots).default)==null?void 0:l.call(i);if(!r)return;r=Zi(r);const o=a=>a.map((c,d)=>mn(c)?s(nt(c),d%this.every===0?e:t,Math.floor(d/this.every)):c);return r.length===1&&["ul","ol"].includes(r[0].type)&&Array.isArray(r[0].children)?nt(r[0],{},[o(r[0].children)]):o(r)}});const Uk=n("h2",null,"Vue3 \u4F5C\u696D\u306B ESLint \u3092\u4F7F\u3046\u30E1\u30EA\u30C3\u30C8",-1),Hk=n("ul",null,[n("li",null,[n("p",null,[n("strong",null,"\u81EA\u52D5\u5316")]),n("ul",null,[n("li",null,[n("p",null,"\u79FB\u884C\u304C\u5FC5\u8981\u306A\u7B87\u6240\u3092\u81EA\u52D5\u3067\u30C1\u30A7\u30C3\u30AF\u30FB\u4FEE\u6B63\u3067\u304D\u308B")]),n("li",null,[n("p",null,"\u79FB\u884C\u304C\u5FC5\u8981\u306A\u7B87\u6240\u3092\u30A8\u30C7\u30A3\u30BF\u4E0A\u3067\u78BA\u8A8D\u3067\u304D\u308B")])])]),n("li",null,[n("p",null,[n("strong",null,"\u7D99\u7D9A\u7684\u306B\u4F7F\u3048\u308B")]),n("ul",null,[n("li",null,[n("p",null,"Shareable Config \u3092\u4F5C\u6210\u3057\u3066\u304A\u3051\u3070\u3001\u5225\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u3082\u3059\u3050\u306B\u4F7F\u3048\u308B")]),n("li",null,[n("p",null,[n("em",null,"\u79FB\u884C\u5F8C\u306B\u65B0\u3057\u304F Vue2 \u3067\u3057\u304B\u52D5\u304B\u306A\u3044\u30B3\u30FC\u30C9\u3092\u66F8\u304B\u308C\u306A\u3044")])])])])],-1),zk={__name:"28",setup(e){const t={hideInToc:!0,srcSequence:"./src/04_020.md"};return M(z),(s,r)=>{const o=vd;return y(),G(Xt,de(ue(t)),{default:V(()=>[Uk,Q(o,null,{default:V(()=>[Hk]),_:1})]),_:1},16)}}};var Kk="/vue-fes-japan-online-2022-slide/branch.png";const ao=e=>(ze("data-v-b23f3f00"),e=e(),Ke(),e),Wk=ao(()=>n("h2",null,"\u79FB\u884C\u5F8C\u306B\u65B0\u3057\u304F Vue2 \u3067\u3057\u304B\u52D5\u304B\u306A\u3044\u30B3\u30FC\u30C9\u3092\u66F8\u304B\u308C\u306A\u3044",-1)),Gk=ao(()=>n("p",null,"\u4F8B\u3048\u3070\u3001",-1)),Qk=ao(()=>n("ul",null,[n("li",null,[n("p",null,"\u30C1\u30FC\u30E0\u30E1\u30F3\u30D0\u30FC"),n("ul",null,[n("li",null,[u("Vue3 \u79FB\u884C\u5F8C\u306B Vue2 \u3067\u3053\u308C\u307E\u3067\u958B\u767A\u3057\u3066\u304D\u305F\u30E1\u30F3\u30D0\u30FC\u304C\u3046\u3063\u304B\u308A\u30D5\u30A3\u30EB\u30BF\u3092\u4F7F\u304A\u3046\u3068\u3057\u3066"),n("br"),u(" \u30D3\u30C3\u30C8\u8AD6\u7406\u548C\u3092\u3057\u3066\u3057\u307E\u3046\u3001\u306A\u3069\u3092\u9632\u3052\u308B")]),n("li",null,[u("Vue \u521D\u5FC3\u8005\u306A\u65B0\u898F\u30E1\u30F3\u30D0\u30FC\u304C\u3001\u30CD\u30C3\u30C8\u8A18\u4E8B\u3092\u53C2\u8003\u306B\u66F8\u3044\u305F Vue2 \u3067\u3057\u304B\u52D5\u304B\u306A\u3044\u30B3\u30FC\u30C9\u3092"),n("br"),u(" \u305D\u306E\u307E\u307E\u4F7F\u3063\u3066\u3057\u307E\u3046\u3001\u306A\u3069\u3092\u9632\u3052\u308B")])])]),n("li",null,[n("p",null,"\u5171\u901A\u30E9\u30A4\u30D6\u30E9\u30EA\u306E 2 \u30D0\u30FC\u30B8\u30E7\u30F3\u7BA1\u7406"),n("ul",null,[n("li",null,[u("\u5171\u901A\u30E9\u30A4\u30D6\u30E9\u30EA\u306E Vue2 \u7528\u30D0\u30FC\u30B8\u30E7\u30F3\u3067\u8FFD\u52A0\u3057\u305F\u6A5F\u80FD\u3092 Vue3 \u7528\u306B\u30DE\u30FC\u30B8\u3059\u308B\u3068\u304D"),n("br"),u(" \u81EA\u52D5\u3067\u30C1\u30A7\u30C3\u30AF\u30FB\u4FEE\u6B63\u3055\u308C\u308B")])])])],-1)),Yk=ao(()=>n("div",{style:{position:"relative"}},[n("p",null,[n("img",{src:Kk,alt:"branch"})])],-1)),Zk={__name:"29",setup(e){const t={hideInToc:!0,srcSequence:"./src/04_030.md"};return M(z),(s,r)=>(y(),G(Xt,de(ue(t)),{default:V(()=>[Wk,Gk,Qk,Yk]),_:1},16))}};var Jk=Le(Zk,[["__scopeId","data-v-b23f3f00"]]),Xk="/vue-fes-japan-online-2022-slide/eslint-plugin-vue-rules.png",e2="/vue-fes-japan-online-2022-slide/eslint-custom-rule-with-google.png";const ll=e=>(ze("data-v-3aeaf1e1"),e=e(),Ke(),e),t2=ll(()=>n("h2",null,"Vue3 \u79FB\u884C\u306B ESLint \u3092\u4F7F\u3046\u30C7\u30E1\u30EA\u30C3\u30C8",-1)),n2=ll(()=>n("ul",null,[n("li",null,[n("p",null,"\u30D7\u30E9\u30B0\u30A4\u30F3\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u306F\u30AB\u30B9\u30BF\u30E0\u30EB\u30FC\u30EB\u3092\u81EA\u4F5C\u3057\u306A\u3044\u3068\u3044\u3051\u306A\u3044\u304B\u3082\u3057\u308C\u306A\u3044")]),n("li",null,[n("p",null,"\u305D\u3093\u306A\u306B\u7C21\u5358\u306B\uFF08\u793E\u5185\u7528\uFF09ESLint \u30D7\u30E9\u30B0\u30A4\u30F3\u30FB\u30AB\u30B9\u30BF\u30E0\u30EB\u30FC\u30EB\u4F5C\u308C\u306A\u3044\uFF08\uFF1F\uFF09"),n("ul",null,[n("li",null,[n("a",{href:"https://eslint.org/docs/latest/developer-guide/working-with-rules",target:"_blank",rel:"noopener"},"\u516C\u5F0F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8"),u("\u3092\u8AAD\u3093\u3067\u307F\u308B")]),n("li",null,[u("eslint-plugin-vue \u306E "),n("a",{href:"https://eslint.vuejs.org/rules/",target:"_blank",rel:"noopener"},"200 \u3092\u8D85\u3048\u308B\u30EB\u30FC\u30EB"),u("\u306E\u5B9F\u88C5\u3092\u53C2\u8003\u306B\u3057\u3066\u307F\u308B")]),n("li",null,[n("a",{href:"https://www.google.com/search?q=eslint+%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E3%83%AB%E3%83%BC%E3%83%AB&rlz=1C5CHFA_enJP928JP928&ei=I9YWY7CBF-u32roP5-y32Ak&ved=0ahUKEwjwnvWns__5AhXrm1YBHWf2DZsQ4dUDCA4&uact=5&oq=eslint+%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E3%83%AB%E3%83%BC%E3%83%AB&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEOgoIABBHENYEELADOgsIABCABBAEECUQIDoFCAAQogQ6BwgAEB4QogQ6BQghEKABSgQIQRgASgQIRhgAUK0JWJ7OAWC6zwFoA3ABeAGAAesBiAH9FJIBBjAuMTUuM5gBAKABAcgBCsABAQ&sclient=gws-wiz",target:"_blank",rel:"noopener"},"\u300Ceslint \u30AB\u30B9\u30BF\u30E0\u30EB\u30FC\u30EB\u300D\u3067\u691C\u7D22"),u("\u3057\u3066\u307F\u308B")]),n("li",null,[n("a",{href:"https://eslint.org/chat",target:"_blank",rel:"noopener"},"ESLint \u306E Discord"),u("\u306E Japanese \u30C1\u30E3\u30F3\u30CD\u30EB\u3067\u805E\u3044\u3066\u307F\u308B")])])]),n("li",null,[n("p",null,"ESLint \u306F\u79FB\u884C\u30C4\u30FC\u30EB\u3067\u306F\u306A\u3044\u306E\u3067\u3001\u79FB\u884C\u30C4\u30FC\u30EB\u306B\u6BD4\u3079\u308C\u3070\u5F31\u3044\u70B9\u3082\u3042\u308B")])],-1)),s2=ll(()=>n("p",{class:"image-wrapper"},[n("img",{src:Xk,alt:"eslint-plugin-vue"}),n("img",{src:e2,alt:"\u300Ceslint \u30AB\u30B9\u30BF\u30E0\u30EB\u30FC\u30EB\u300D\u3067\u691C\u7D22",class:"eslint-custom-rule-with-google"})],-1)),r2={__name:"30",setup(e){const t={hideInToc:!0,layout:"sub-2-cols",srcSequence:"./src/04_040.md"};return M(z),(s,r)=>(y(),G(Lt,de(ue(t)),{left:V(o=>[n2]),right:V(o=>[s2]),default:V(()=>[t2]),_:1},16))}};var o2=Le(r2,[["__scopeId","data-v-3aeaf1e1"]]);const i2=n("h1",null,"\u307E\u3068\u3081",-1),l2={__name:"31",setup(e){const t={layout:"section",srcSequence:"./src/05_010.md"};return M(z),(s,r)=>(y(),G(Ft,de(ue(t)),{default:V(()=>[i2]),_:1},16))}},a2=n("h2",null,"\u307E\u3068\u3081",-1),c2=n("ul",null,[n("li",null,[n("p",null,[u("Vue3 \u79FB\u884C\u306F"),n("strong",null,"\u4E00\u56DE\u306E\u4F5C\u696D\u3067\u7D42\u308F\u308A\u3067\u306F\u3042\u308A\u307E\u305B\u3093"),u("\u3002")]),n("ul",null,[n("li",null,"\u4F5C\u3063\u3066\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u6570\u3060\u3051\u79FB\u884C\u4F5C\u696D\u304C\u5FC5\u8981"),n("li",null,"Vue2 \u7528\u3068 Vue3 \u7528\u306E\u4E21\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u5171\u901A\u30E9\u30A4\u30D6\u30E9\u30EA\u306E\u30DE\u30FC\u30B8\u7BA1\u7406"),n("li",null,"\u958B\u767A\u30E1\u30F3\u30D0\u30FC\u3078\u306E Vue2 \u2194\uFE0E Vue3 \u306E\u9055\u3044\u306E\u5468\u77E5")])])],-1),u2=n("p",null,[n("strong",null,"\u7D99\u7D9A\u7684\u306B\u79FB\u884C\u3059\u308B\u305F\u3081\u306E\u30C4\u30FC\u30EB\u304C\u5FC5\u8981\u3067\u3059\uFF01")],-1),d2=n("ul",null,[n("li",null,[n("p",null,"ESLint \u3092\u4F7F\u7528\u3057\u3066\u79FB\u884C\u304C\u5FC5\u8981\u306A\u7B87\u6240\u3092\u81EA\u52D5\u3067\u30C1\u30A7\u30C3\u30AF\u30FB\u4FEE\u6B63\u3067\u304D\u307E\u3059\u3002"),n("ul",null,[n("li",null,[u("OSS \u306E\u30D7\u30E9\u30B0\u30A4\u30F3\u3067 Vue3 \u306E Breaking Changes \u306E "),n("strong",null,"65%"),u("(26/40) \u7A0B\u5EA6\u306E\u9805\u76EE\u306F\u30AB\u30D0\u30FC\u3067\u304D\u308B"),n("br"),u("\uFF08\u5F0A\u793E\u306E\u5834\u5408\u3001\u5F71\u97FF\u306A\u3057\u306E\u9805\u76EE\u3092\u9664\u3051\u3070 76%(26/34)\uFF09 "),n("ul",null,[n("li",null,"\u79FB\u884C\u4F5C\u696D\u30B3\u30B9\u30C8\u306E\u611F\u899A\u5024\u3067\u306F 95%\u3050\u3089\u3044\u306F\u81EA\u52D5\u3067\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u3066\u3044\u308B\u3068\u601D\u3044\u307E\u3059")])]),n("li",null,[u("\u30ED\u30FC\u30AB\u30EB\u30EB\u30FC\u30EB\u3092\u6C7A\u3081\u3066\u500B\u5225\u306B\u7279\u5316\u3057\u305F\u30AB\u30B9\u30BF\u30E0\u30EB\u30FC\u30EB\u3092\u5B9F\u88C5\u3059\u308C\u3070\u3001"),n("br"),n("strong",null,"\u307B\u3068\u3093\u3069\u81EA\u52D5\u3067\u79FB\u884C\u3067\u304D\u308B\u53EF\u80FD\u6027"),u("\u304C\u3042\u308B")])])])],-1),p2={__name:"32",setup(e){const t={hideInToc:!0,srcSequence:"./src/05_020.md"};return M(z),(s,r)=>{const o=vd;return y(),G(Xt,de(ue(t)),{default:V(()=>[a2,Q(o,null,{default:V(()=>[c2,u2,d2]),_:1})]),_:1},16)}}},h2=n("h1",null,[n("span",{class:"gradient"},[u("ESLint "),n("span",{class:"gradient-off"},"\u3068"),u(" eslint-plugin-vue "),n("span",{class:"gradient-off"},"\u3067"),n("br"),u("\u7D99\u7D9A\u7684"),n("span",{class:"gradient-off"},"\u306A"),u(" Vue3 "),n("span",{class:"gradient-off"},[u("\u79FB\u884C\u3092"),n("br"),u("\u5B9F\u73FE\u3057\u307E\u3057\u3087\u3046"),n("br"),u("\u{1F929}")])])],-1),g2={__name:"33",setup(e){const t={layout:"section",hideInToc:!0,srcSequence:"./src/05_030.md"};return M(z),(s,r)=>(y(),G(Ft,de(ue(t)),{default:V(()=>[h2]),_:1},16))}};var m2="/vue-fes-japan-online-2022-slide/ic_FUTURE_Type2.png";const f2={class:"slidev-layout center h-full grid place-content-center"},v2={class:"my-auto"},bd={__name:"center",setup(e){return M(z),(t,s)=>(y(),T("div",f2,[n("div",v2,[Re(t.$slots,"default")])]))}};const yd=e=>(ze("data-v-6f0a294f"),e=e(),Ke(),e),b2={initial:{x:-80},enter:{x:0}},y2=yd(()=>n("p",null,[n("img",{src:m2,alt:"Future"})],-1)),_2=yd(()=>n("h1",null,"\u5BA3\u4F1D",-1)),k2=[y2,_2],j2={__name:"34",setup(e){const t={layout:"center",class:"text-center",hideInToc:!0,preload:!1,srcSequence:"./src/88-010-cm.md"};return M(z),(s,r)=>{const o=Tr("motion-x");return y(),G(bd,de(ue(t)),{default:V(()=>[hs((y(),T("div",b2,k2)),[[o]])]),_:1},16)}}};var x2=Le(j2,[["__scopeId","data-v-6f0a294f"]]),w2="/vue-fes-japan-online-2022-slide/platinum.jpg";const co=e=>(ze("data-v-18ade509"),e=e(),Ke(),e),$2=co(()=>n("p",null,"\u30D7\u30E9\u30C1\u30CA\u30B9\u30DD\u30F3\u30B5\u30FC\u3057\u3066\u307E\u3059\u3002",-1)),E2=co(()=>n("p",null,[n("a",{href:"https://vuefes.jp/2022/sponsors#future",target:"_blank",rel:"noopener"},"https://vuefes.jp/2022/sponsors#future")],-1)),S2=co(()=>n("img",{src:w2,alt:"\u30D7\u30E9\u30C1\u30CA\u30B9\u30DD\u30F3\u30B5\u30FC",style:{width:"calc(100% - 112px)",position:"absolute"}},null,-1)),A2=co(()=>n("div",{class:"ribbon"},[n("p",null,"\u8A73\u3057\u304F\u306F\u30B9\u30DD\u30F3\u30B5\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002")],-1)),C2={__name:"35",setup(e){const t={class:"text-center",hideInToc:!0,srcSequence:"./src/88-020.md"};return M(z),(s,r)=>(y(),G(Xt,de(ue(t)),{default:V(()=>[$2,E2,S2,A2]),_:1},16))}};var T2=Le(C2,[["__scopeId","data-v-18ade509"]]);const _d=e=>(ze("data-v-16e70510"),e=e(),Ke(),e),B2=_d(()=>n("h1",null,[u("\u30A8\u30F3\u30B8\u30CB\u30A2\u30FB\u30B9\u30DA\u30B7\u30E3\u30EA\u30B9\u30C8"),n("br"),u("\u52DF\u96C6\u3057\u3066\u307E\u3059"),n("br"),u("\u2193")],-1)),I2=_d(()=>n("h1",null,[n("a",{href:"https://www.future.co.jp/recruit/",target:"_blank",rel:"noopener"},"https://www.future.co.jp/recruit/")],-1)),P2={__name:"36",setup(e){const t={layout:"section",class:"text-center",hideInToc:!0,srcSequence:"./src/88-030.md"};return M(z),(s,r)=>(y(),G(Ft,de(ue(t)),{default:V(()=>[B2,I2]),_:1},16))}};var O2=Le(P2,[["__scopeId","data-v-16e70510"]]);const kd=e=>(ze("data-v-0d0f027f"),e=e(),Ke(),e),V2=kd(()=>n("h1",{class:"gradient"},"Thank you for your attention",-1)),F2={class:"ribbon"},L2={initial:{x:-80},enter:{x:0}},D2=kd(()=>n("div",{class:"gradient",style:{display:"inline-block"}},[n("p",null,[n("a",{href:"https://github.com/sponsors/ota-meshi",target:"_blank",rel:"noopener"},"Support me \u2764"),u(),n("span",{class:"gradient-off"},"or follow me!!"),n("br"),n("span",{class:"gradient-off"},"GitHub:"),u(),n("a",{href:"https://github.com/ota-meshi",target:"_blank",rel:"noopener"},"https://github.com/ota-meshi"),n("br"),n("span",{class:"gradient-off"},"Twitter:"),u(),n("a",{href:"https://twitter.com/omoteota",target:"_blank",rel:"noopener"},"https://twitter.com/omoteota"),n("br"),n("span",{class:"gradient-off"},"Qiita:"),u(),n("a",{href:"https://qiita.com/ota-meshi",target:"_blank",rel:"noopener"},"https://qiita.com/ota-meshi")])],-1)),M2=[D2],R2={__name:"37",setup(e){const t={layout:"center",class:"text-center big-title",hideInToc:!0,preload:!1,srcSequence:"./src/99-last.md"};return M(z),(s,r)=>{const o=Tr("motion-x");return y(),G(bd,de(ue(t)),{default:V(()=>[V2,n("div",F2,[hs((y(),T("div",L2,M2)),[[o]])])]),_:1},16)}}};var q2=Le(R2,[["__scopeId","data-v-0d0f027f"]]),N2=[{path:"1",name:"page-1",component:s_,meta:{class:"text-center",background:"./future02.jpeg",title:"eslint-plugin-vue \u3092\u4F7F\u7528\u3057\u3066\u7D99\u7D9A\u7684\u306B Vue3 \u79FB\u884C\u3059\u308B",hideInToc:!0,theme:"default",highlighter:"shiki",lineNumbers:!1,drawings:{persist:!1},colorSchema:"dark",titleTemplate:"%s",srcSequence:"./src/00-010-title.md",slide:{raw:null,title:"eslint-plugin-vue \u3092\u4F7F\u7528\u3057\u3066\u7D99\u7D9A\u7684\u306B Vue3 \u79FB\u884C\u3059\u308B",level:1,content:`<h1 class="gradient">eslint-plugin-vue \u3092\u4F7F\u7528\u3057\u3066<br>\u7D99\u7D9A\u7684\u306B Vue3 \u79FB\u884C\u3059\u308B</h1>

<div class="event-name-wrapper">
  <div class="event-name">
    <a href="https://vuefes.jp/2022/" target="_blank" rel="noopener" class="gradient">Vue Fes Japan Online 2022 - 2022.10.16 SUN</a>
  </div>
</div>

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/ota-meshi/vue-fes-japan-online-2022-slide" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

<style>
h1 {
  font-weight: 700;
}
.event-name-wrapper {
  display: flex;
  justify-content: center;
}
.event-name {
  width: fit-content;
  background-color: #fffd;
  padding: 16px;
  font-weight: 700;
}
.event-name:hover {
  width: fit-content;
  background-color: #fff;
  padding: 16px;
  font-weight: 700;
}
</style>`,frontmatter:{class:"text-center",background:"./future02.jpeg",title:"eslint-plugin-vue \u3092\u4F7F\u7528\u3057\u3066\u7D99\u7D9A\u7684\u306B Vue3 \u79FB\u884C\u3059\u308B",hideInToc:!0,theme:"default",highlighter:"shiki",lineNumbers:!1,drawings:{persist:!1},colorSchema:"dark",titleTemplate:"%s",srcSequence:"./src/00-010-title.md"},index:0,start:0,end:54,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/00-010-title.md",raw:`---
class: text-center
background: ./future02.jpeg
title: eslint-plugin-vue \u3092\u4F7F\u7528\u3057\u3066\u7D99\u7D9A\u7684\u306B Vue3 \u79FB\u884C\u3059\u308B
hideInToc: true
---

<h1 class="gradient">eslint-plugin-vue \u3092\u4F7F\u7528\u3057\u3066<br>\u7D99\u7D9A\u7684\u306B Vue3 \u79FB\u884C\u3059\u308B</h1>

<div class="event-name-wrapper">
  <div class="event-name">
    <a href="https://vuefes.jp/2022/" target="_blank" rel="noopener" class="gradient">Vue Fes Japan Online 2022 - 2022.10.16 SUN</a>
  </div>
</div>

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/ota-meshi/vue-fes-japan-online-2022-slide" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

<style>
h1 {
  font-weight: 700;
}
.event-name-wrapper {
  display: flex;
  justify-content: center;
}
.event-name {
  width: fit-content;
  background-color: #fffd;
  padding: 16px;
  font-weight: 700;
}
.event-name:hover {
  width: fit-content;
  background-color: #fff;
  padding: 16px;
  font-weight: 700;
}
</style>
`,title:"eslint-plugin-vue \u3092\u4F7F\u7528\u3057\u3066\u7D99\u7D9A\u7684\u306B Vue3 \u79FB\u884C\u3059\u308B",level:1,content:`<h1 class="gradient">eslint-plugin-vue \u3092\u4F7F\u7528\u3057\u3066<br>\u7D99\u7D9A\u7684\u306B Vue3 \u79FB\u884C\u3059\u308B</h1>

<div class="event-name-wrapper">
  <div class="event-name">
    <a href="https://vuefes.jp/2022/" target="_blank" rel="noopener" class="gradient">Vue Fes Japan Online 2022 - 2022.10.16 SUN</a>
  </div>
</div>

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/ota-meshi/vue-fes-japan-online-2022-slide" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

<style>
h1 {
  font-weight: 700;
}
.event-name-wrapper {
  display: flex;
  justify-content: center;
}
.event-name {
  width: fit-content;
  background-color: #fffd;
  padding: 16px;
  font-weight: 700;
}
.event-name:hover {
  width: fit-content;
  background-color: #fff;
  padding: 16px;
  font-weight: 700;
}
</style>`,frontmatter:{class:"text-center",background:"./future02.jpeg",title:"eslint-plugin-vue \u3092\u4F7F\u7528\u3057\u3066\u7D99\u7D9A\u7684\u306B Vue3 \u79FB\u884C\u3059\u308B",hideInToc:!0},index:0,start:0,end:54},inline:{raw:`---
theme: default
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
colorSchema: dark
title: 'eslint-plugin-vue \u3092\u4F7F\u7528\u3057\u3066\u7D99\u7D9A\u7684\u306B Vue3 \u79FB\u884C\u3059\u308B'
titleTemplate: '%s'
src: ./src/00-010-title.md
---

<!-- prettier-ignore-start -->
`,title:"eslint-plugin-vue \u3092\u4F7F\u7528\u3057\u3066\u7D99\u7D9A\u7684\u306B Vue3 \u79FB\u884C\u3059\u308B",level:1,content:"",frontmatter:{theme:"default",highlighter:"shiki",lineNumbers:!1,drawings:{persist:!1},colorSchema:"dark",title:"eslint-plugin-vue \u3092\u4F7F\u7528\u3057\u3066\u7D99\u7D9A\u7684\u306B Vue3 \u79FB\u884C\u3059\u308B",titleTemplate:"%s"},note:"prettier-ignore-start",index:0,start:0,end:14},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/00-010-title.md",notesHTML:"",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:a_,meta:{hideInToc:!0,title:"\u81EA\u5DF1\u7D39\u4ECB",srcSequence:"./src/00-020-profile.md",slide:{raw:null,title:"\u81EA\u5DF1\u7D39\u4ECB",level:1,content:`<!-- prettier-ignore-end -->

# \u81EA\u5DF1\u7D39\u4ECB

<div grid="~ gap-4" class="profile">

<div class="avatars">
  <img class="avatar" src="https://github.com/ota-meshi.png" alt="ota-meshi">
  <div class="org-avatars">
    <a href="https://github.com/future-architect" target="_brank"><img src="https://github.com/future-architect.png" alt="Future Corp"></a>
    <a href="https://github.com/vuejs" target="_brank"><img src="https://github.com/vuejs.png" alt="Vue.js"></a>
    <a href="https://github.com/stylelint" target="_brank"><img src="https://github.com/stylelint.png" alt="Stylelint"></a>
    <a href="https://github.com/intlify" target="_brank"><img src="https://github.com/intlify.png" alt="Intlify"></a>
    <a href="https://github.com/stylus" target="_brank"><img src="https://github.com/stylus.png" alt="Stylus"></a>
    <a href="https://github.com/eslint-community" target="_brank"><img src="https://github.com/eslint-community.png" alt="ESLint Community"></a>
  </div>
</div>

<div class="profile-contents">

### \u592A\u7530 \u6D0B\u4ECB

- \u5E74\u9F62: \u30A2\u30E9\u30D5\u30A9\u30FC\u3000 \u{1F4CD}: \u795E\u5948\u5DDD\u770C
- GitHub: [@ota-meshi](https://github.com/ota-meshi) <a class="sponsor" href="https://github.com/sponsors/ota-meshi" target="_blank" rel="noopener">\u2661 Sponsor</a> ,
  npm: [ota-meshi](https://www.npmjs.com/~ota-meshi),
  Twitter: [@omoteota](https://twitter.com/omoteota),  
  Qiita: [@ota-meshi](https://qiita.com/ota-meshi)
- \u6240\u5C5E:
  - [\u30D5\u30E5\u30FC\u30C1\u30E3\u30FC\u682A\u5F0F\u4F1A\u793E](https://www.future.co.jp/) <span class="platinum">\uFF08\u30D7\u30E9\u30C1\u30CA\u30B9\u30DD\u30F3\u30B5\u30FC\uFF01\uFF09</span> \u793E\u54E1 <span class="since">(2015/06 - )</span>
  - [Vue.js](https://vuejs.org/about/team.html) eslint-plugin-vue \u30E1\u30F3\u30C6\u30CA\u30FC <span class="since">(eslint-plugin-vue 2018/08 - , Vue 2019/07 - )</span>
  - [Stylelint](https://github.com/stylelint) Owners \u30C1\u30FC\u30E0 <span class="since">(2020/09 - )</span>
  - [Intlify](https://github.com/intlify) eslint-plugin-vue-i18n \u30E1\u30F3\u30C6\u30CA\u30FC <span class="since">(2020/07 - )</span>
  - [Stylus](https://github.com/stylus) \u30C1\u30FC\u30E0 <span class="since">(2022/06 - )</span>
  - [ESLint Community](https://github.com/eslint-community) \u30C1\u30FC\u30E0 <span class="since">(2022/09 - )</span>
- [WEB+DB PRESS Vol.120] \u300C\u6700\u65B0 Vue.js 3 \u5165\u9580\u300D \u5171\u540C\u57F7\u7B46 <span class="since">(2020/12/24)</span>
- [Google Open Source Peer Bonus 2022] \u53D7\u8CDE

[web+db press vol.120]: https://gihyo.jp/magazine/wdpress/archive/2021/vol120
[google open source peer bonus 2022]: https://www.googblogs.com/announcing-first-group-of-google-open-source-peer-bonus-winners-in-2022/

</div>
</div>

<style>
.profile {
  grid-template-columns: 0.5fr 1.3fr;
}
.avatars {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.avatar {
  border-radius: 50%;
  overflow: hidden;
  width: 200px;
  height: 200px;
}
.org-avatars {
  padding: 32px 16px;
  display: flex;
  width: calc(60px * 3 + 8px * 2 + 16px);
  box-sizing: content-box;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.org-avatars a:not(:hover) {
  border-color: transparent;
}
.org-avatars img {
  border-radius: 16px;
  border: 0.5px solid #aaa;
  overflow: hidden;
  width: 60px;
  height: 60px;
  box-sizing: border-box;
  background: #fff;
}
.profile-contents .since {
  font-size: 0.8rem;
}
.slidev-layout a.sponsor {
  margin-left: 8px;
  border: 1px solid #fd1d7c;
  border-radius: 4px;
  padding: 2px 4px 1px;
  font-size: 11px;
  font-weight: 500;
  vertical-align: bottom;
  color: #fd1d7c;
}
.slidev-layout a.sponsor:hover {
  color: #fff;
  background-color: #fd1d7c;
}
.platinum {
  color: rgb(250, 249, 228);
  font-size: 80%;
  font-weight: 800;
}
</style>`,frontmatter:{hideInToc:!0,title:"\u81EA\u5DF1\u7D39\u4ECB",srcSequence:"./src/00-020-profile.md"},note:"prettier-ignore-start",index:1,start:0,end:110,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/00-020-profile.md",raw:`---
hideInToc: true
---

<!-- prettier-ignore-end -->

# \u81EA\u5DF1\u7D39\u4ECB

<div grid="~ gap-4" class="profile">

<div class="avatars">
  <img class="avatar" src="https://github.com/ota-meshi.png" alt="ota-meshi">
  <div class="org-avatars">
    <a href="https://github.com/future-architect" target="_brank"><img src="https://github.com/future-architect.png" alt="Future Corp"></a>
    <a href="https://github.com/vuejs" target="_brank"><img src="https://github.com/vuejs.png" alt="Vue.js"></a>
    <a href="https://github.com/stylelint" target="_brank"><img src="https://github.com/stylelint.png" alt="Stylelint"></a>
    <a href="https://github.com/intlify" target="_brank"><img src="https://github.com/intlify.png" alt="Intlify"></a>
    <a href="https://github.com/stylus" target="_brank"><img src="https://github.com/stylus.png" alt="Stylus"></a>
    <a href="https://github.com/eslint-community" target="_brank"><img src="https://github.com/eslint-community.png" alt="ESLint Community"></a>
  </div>
</div>

<div class="profile-contents">

### \u592A\u7530 \u6D0B\u4ECB

- \u5E74\u9F62: \u30A2\u30E9\u30D5\u30A9\u30FC\u3000 \u{1F4CD}: \u795E\u5948\u5DDD\u770C
- GitHub: [@ota-meshi](https://github.com/ota-meshi) <a class="sponsor" href="https://github.com/sponsors/ota-meshi" target="_blank" rel="noopener">\u2661 Sponsor</a> ,
  npm: [ota-meshi](https://www.npmjs.com/~ota-meshi),
  Twitter: [@omoteota](https://twitter.com/omoteota),  
  Qiita: [@ota-meshi](https://qiita.com/ota-meshi)
- \u6240\u5C5E:
  - [\u30D5\u30E5\u30FC\u30C1\u30E3\u30FC\u682A\u5F0F\u4F1A\u793E](https://www.future.co.jp/) <span class="platinum">\uFF08\u30D7\u30E9\u30C1\u30CA\u30B9\u30DD\u30F3\u30B5\u30FC\uFF01\uFF09</span> \u793E\u54E1 <span class="since">(2015/06 - )</span>
  - [Vue.js](https://vuejs.org/about/team.html) eslint-plugin-vue \u30E1\u30F3\u30C6\u30CA\u30FC <span class="since">(eslint-plugin-vue 2018/08 - , Vue 2019/07 - )</span>
  - [Stylelint](https://github.com/stylelint) Owners \u30C1\u30FC\u30E0 <span class="since">(2020/09 - )</span>
  - [Intlify](https://github.com/intlify) eslint-plugin-vue-i18n \u30E1\u30F3\u30C6\u30CA\u30FC <span class="since">(2020/07 - )</span>
  - [Stylus](https://github.com/stylus) \u30C1\u30FC\u30E0 <span class="since">(2022/06 - )</span>
  - [ESLint Community](https://github.com/eslint-community) \u30C1\u30FC\u30E0 <span class="since">(2022/09 - )</span>
- [WEB+DB PRESS Vol.120] \u300C\u6700\u65B0 Vue.js 3 \u5165\u9580\u300D \u5171\u540C\u57F7\u7B46 <span class="since">(2020/12/24)</span>
- [Google Open Source Peer Bonus 2022] \u53D7\u8CDE

[web+db press vol.120]: https://gihyo.jp/magazine/wdpress/archive/2021/vol120
[google open source peer bonus 2022]: https://www.googblogs.com/announcing-first-group-of-google-open-source-peer-bonus-winners-in-2022/

</div>
</div>

<style>
.profile {
  grid-template-columns: 0.5fr 1.3fr;
}
.avatars {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.avatar {
  border-radius: 50%;
  overflow: hidden;
  width: 200px;
  height: 200px;
}
.org-avatars {
  padding: 32px 16px;
  display: flex;
  width: calc(60px * 3 + 8px * 2 + 16px);
  box-sizing: content-box;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.org-avatars a:not(:hover) {
  border-color: transparent;
}
.org-avatars img {
  border-radius: 16px;
  border: 0.5px solid #aaa;
  overflow: hidden;
  width: 60px;
  height: 60px;
  box-sizing: border-box;
  background: #fff;
}
.profile-contents .since {
  font-size: 0.8rem;
}
.slidev-layout a.sponsor {
  margin-left: 8px;
  border: 1px solid #fd1d7c;
  border-radius: 4px;
  padding: 2px 4px 1px;
  font-size: 11px;
  font-weight: 500;
  vertical-align: bottom;
  color: #fd1d7c;
}
.slidev-layout a.sponsor:hover {
  color: #fff;
  background-color: #fd1d7c;
}
.platinum {
  color: rgb(250, 249, 228);
  font-size: 80%;
  font-weight: 800;
}
</style>

<!-- prettier-ignore-start -->
`,title:"\u81EA\u5DF1\u7D39\u4ECB",level:1,content:`<!-- prettier-ignore-end -->

# \u81EA\u5DF1\u7D39\u4ECB

<div grid="~ gap-4" class="profile">

<div class="avatars">
  <img class="avatar" src="https://github.com/ota-meshi.png" alt="ota-meshi">
  <div class="org-avatars">
    <a href="https://github.com/future-architect" target="_brank"><img src="https://github.com/future-architect.png" alt="Future Corp"></a>
    <a href="https://github.com/vuejs" target="_brank"><img src="https://github.com/vuejs.png" alt="Vue.js"></a>
    <a href="https://github.com/stylelint" target="_brank"><img src="https://github.com/stylelint.png" alt="Stylelint"></a>
    <a href="https://github.com/intlify" target="_brank"><img src="https://github.com/intlify.png" alt="Intlify"></a>
    <a href="https://github.com/stylus" target="_brank"><img src="https://github.com/stylus.png" alt="Stylus"></a>
    <a href="https://github.com/eslint-community" target="_brank"><img src="https://github.com/eslint-community.png" alt="ESLint Community"></a>
  </div>
</div>

<div class="profile-contents">

### \u592A\u7530 \u6D0B\u4ECB

- \u5E74\u9F62: \u30A2\u30E9\u30D5\u30A9\u30FC\u3000 \u{1F4CD}: \u795E\u5948\u5DDD\u770C
- GitHub: [@ota-meshi](https://github.com/ota-meshi) <a class="sponsor" href="https://github.com/sponsors/ota-meshi" target="_blank" rel="noopener">\u2661 Sponsor</a> ,
  npm: [ota-meshi](https://www.npmjs.com/~ota-meshi),
  Twitter: [@omoteota](https://twitter.com/omoteota),  
  Qiita: [@ota-meshi](https://qiita.com/ota-meshi)
- \u6240\u5C5E:
  - [\u30D5\u30E5\u30FC\u30C1\u30E3\u30FC\u682A\u5F0F\u4F1A\u793E](https://www.future.co.jp/) <span class="platinum">\uFF08\u30D7\u30E9\u30C1\u30CA\u30B9\u30DD\u30F3\u30B5\u30FC\uFF01\uFF09</span> \u793E\u54E1 <span class="since">(2015/06 - )</span>
  - [Vue.js](https://vuejs.org/about/team.html) eslint-plugin-vue \u30E1\u30F3\u30C6\u30CA\u30FC <span class="since">(eslint-plugin-vue 2018/08 - , Vue 2019/07 - )</span>
  - [Stylelint](https://github.com/stylelint) Owners \u30C1\u30FC\u30E0 <span class="since">(2020/09 - )</span>
  - [Intlify](https://github.com/intlify) eslint-plugin-vue-i18n \u30E1\u30F3\u30C6\u30CA\u30FC <span class="since">(2020/07 - )</span>
  - [Stylus](https://github.com/stylus) \u30C1\u30FC\u30E0 <span class="since">(2022/06 - )</span>
  - [ESLint Community](https://github.com/eslint-community) \u30C1\u30FC\u30E0 <span class="since">(2022/09 - )</span>
- [WEB+DB PRESS Vol.120] \u300C\u6700\u65B0 Vue.js 3 \u5165\u9580\u300D \u5171\u540C\u57F7\u7B46 <span class="since">(2020/12/24)</span>
- [Google Open Source Peer Bonus 2022] \u53D7\u8CDE

[web+db press vol.120]: https://gihyo.jp/magazine/wdpress/archive/2021/vol120
[google open source peer bonus 2022]: https://www.googblogs.com/announcing-first-group-of-google-open-source-peer-bonus-winners-in-2022/

</div>
</div>

<style>
.profile {
  grid-template-columns: 0.5fr 1.3fr;
}
.avatars {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.avatar {
  border-radius: 50%;
  overflow: hidden;
  width: 200px;
  height: 200px;
}
.org-avatars {
  padding: 32px 16px;
  display: flex;
  width: calc(60px * 3 + 8px * 2 + 16px);
  box-sizing: content-box;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.org-avatars a:not(:hover) {
  border-color: transparent;
}
.org-avatars img {
  border-radius: 16px;
  border: 0.5px solid #aaa;
  overflow: hidden;
  width: 60px;
  height: 60px;
  box-sizing: border-box;
  background: #fff;
}
.profile-contents .since {
  font-size: 0.8rem;
}
.slidev-layout a.sponsor {
  margin-left: 8px;
  border: 1px solid #fd1d7c;
  border-radius: 4px;
  padding: 2px 4px 1px;
  font-size: 11px;
  font-weight: 500;
  vertical-align: bottom;
  color: #fd1d7c;
}
.slidev-layout a.sponsor:hover {
  color: #fff;
  background-color: #fd1d7c;
}
.platinum {
  color: rgb(250, 249, 228);
  font-size: 80%;
  font-weight: 800;
}
</style>`,frontmatter:{hideInToc:!0,title:"\u81EA\u5DF1\u7D39\u4ECB"},note:"prettier-ignore-start",index:0,start:0,end:110},inline:{raw:`---
src: ./src/00-020-profile.md
---
`,content:"",frontmatter:{},index:1,start:14,end:18},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/00-020-profile.md",notesHTML:`<p>prettier-ignore-start</p>
`,id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:A_,meta:{hideInToc:!0,srcSequence:"./src/00-020-profile.md",slide:{raw:`---
hideInToc: true
---

<!-- prettier-ignore-end -->

# \u30A2\u30B8\u30A7\u30F3\u30C0

<Toc maxDepth="2" />
`,title:"\u30A2\u30B8\u30A7\u30F3\u30C0",level:1,content:`<!-- prettier-ignore-end -->

# \u30A2\u30B8\u30A7\u30F3\u30C0

<Toc maxDepth="2" />`,frontmatter:{hideInToc:!0,srcSequence:"./src/00-020-profile.md"},index:2,start:110,end:120,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/00-020-profile.md",raw:`---
hideInToc: true
---

<!-- prettier-ignore-end -->

# \u30A2\u30B8\u30A7\u30F3\u30C0

<Toc maxDepth="2" />
`,title:"\u30A2\u30B8\u30A7\u30F3\u30C0",level:1,content:`<!-- prettier-ignore-end -->

# \u30A2\u30B8\u30A7\u30F3\u30C0

<Toc maxDepth="2" />`,frontmatter:{hideInToc:!0},index:1,start:110,end:120},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/00-020-profile.md",notesHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:I_,meta:{layout:"section",title:"Vue3 \u306E Breaking Changes",srcSequence:"./src/01_010.md",slide:{raw:null,title:"Vue3 \u306E Breaking Changes",level:1,content:"# Vue3 \u79FB\u884C\u304C\u5927\u5909\u3067\u3059\u304B\uFF1F\u{1F914}",frontmatter:{layout:"section",title:"Vue3 \u306E Breaking Changes",srcSequence:"./src/01_010.md"},index:3,start:0,end:7,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/01_010.md",raw:`---
layout: section
title: "Vue3 \u306E Breaking Changes"
---

# Vue3 \u79FB\u884C\u304C\u5927\u5909\u3067\u3059\u304B\uFF1F\u{1F914}
`,title:"Vue3 \u306E Breaking Changes",level:1,content:"# Vue3 \u79FB\u884C\u304C\u5927\u5909\u3067\u3059\u304B\uFF1F\u{1F914}",frontmatter:{layout:"section",title:"Vue3 \u306E Breaking Changes"},index:0,start:0,end:7},inline:{raw:`---
src: ./src/01_010.md
---
`,content:"",frontmatter:{},index:2,start:18,end:22},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/01_010.md",notesHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:D_,meta:{hideInToc:!0,title:"Vue3 \u306E Breaking Changes",srcSequence:"./src/01_020.md",slide:{raw:null,title:"Vue3 \u306E Breaking Changes",level:2,content:`## Vue3 \u306E Breaking Changes

<div class="flex justify-center" >

<https://v3-migration.vuejs.org/breaking-changes/>

</div>
<div class="flex justify-center" style="height: calc(100% - 150px);">
<img src="/breaking-changes.png" style="height: 100%;">
</div>
<div class="flex justify-center" >

\u306A\u3069\u306A\u3069\u300138 \u9805\u76EE

</div>`,frontmatter:{hideInToc:!0,title:"Vue3 \u306E Breaking Changes",srcSequence:"./src/01_020.md"},index:4,start:0,end:20,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/01_020.md",raw:`---
hideInToc: true
---

## Vue3 \u306E Breaking Changes

<div class="flex justify-center" >

<https://v3-migration.vuejs.org/breaking-changes/>

</div>
<div class="flex justify-center" style="height: calc(100% - 150px);">
<img src="/breaking-changes.png" style="height: 100%;">
</div>
<div class="flex justify-center" >

\u306A\u3069\u306A\u3069\u300138 \u9805\u76EE

</div>
`,title:"Vue3 \u306E Breaking Changes",level:2,content:`## Vue3 \u306E Breaking Changes

<div class="flex justify-center" >

<https://v3-migration.vuejs.org/breaking-changes/>

</div>
<div class="flex justify-center" style="height: calc(100% - 150px);">
<img src="/breaking-changes.png" style="height: 100%;">
</div>
<div class="flex justify-center" >

\u306A\u3069\u306A\u3069\u300138 \u9805\u76EE

</div>`,frontmatter:{hideInToc:!0,title:"Vue3 \u306E Breaking Changes"},index:0,start:0,end:20},inline:{raw:`---
src: ./src/01_020.md
---
`,content:"",frontmatter:{},index:3,start:22,end:26},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/01_020.md",notesHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:a3,meta:{hideInToc:!0,layout:"sub-3-cols",title:"Vue3 \u306E Breaking Changes",srcSequence:"./src/01_030.md",slide:{raw:null,title:"Vue3 \u306E Breaking Changes",level:2,content:'## Vue3 \u306E Breaking Changes\n\n<br>\n\n::left::\n\n### Global API\n\n- [Global Vue API is changed to use an application instance](https://v3-migration.vuejs.org/breaking-changes/global-api.html)\n- [Global and internal APIs have been restructured to be tree-shakable](https://v3-migration.vuejs.org/breaking-changes/global-api-treeshaking.html)\n\n### Template Directives\n\n- [`v-model` usage on components has been reworked, replacing `v-bind.sync`](https://v3-migration.vuejs.org/breaking-changes/v-model.html)\n- [`key` usage on `<template v-for>` and non-`v-for` nodes has changed](https://v3-migration.vuejs.org/breaking-changes/key-attribute.html)\n- [`v-if` and `v-for` precedence when used on the same element has changed](https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html)\n- [`v-bind="object"` is now order-sensitive](https://v3-migration.vuejs.org/breaking-changes/v-bind.html)\n- [`v-on:event.native` modifier has been removed](https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html)\n\n### Components\n\n- [Functional components can only be created using a plain function](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)\n- [`functional` attribute on single-file component (SFC) `<template>` and `functional` component option are deprecated](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)\n- [Async components now require `defineAsyncComponent` method to be created](https://v3-migration.vuejs.org/breaking-changes/async-components.html)\n- [Component events should now be declared with the `emits` option](https://v3-migration.vuejs.org/breaking-changes/emits-option.html)\n\n::middle::\n\n### Render Function\n\n- [Render function API changed](https://v3-migration.vuejs.org/breaking-changes/render-function-api.html)\n- [`$scopedSlots` property is removed and all slots are exposed via `$slots` as functions](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)\n- [`$listeners` has been removed / merged into `$attrs`](https://v3-migration.vuejs.org/breaking-changes/listeners-removed)\n- [`$attrs` now includes `class` and `style` attributes](https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html)\n\n### Custom Elements\n\n- [Custom element checks are now performed during template compilation](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html)\n- [Special `is` attribute usage is restricted to the reserved `<component>` tag only](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html#customized-built-in-elements)\n\n### Other Minor Changes\n\n- The `destroyed` lifecycle option has been renamed to `unmounted`\n- The `beforeDestroy` lifecycle option has been renamed to `beforeUnmount`\n- [Props `default` factory function no longer has access to `this` context](https://v3-migration.vuejs.org/breaking-changes/props-default-this.html)\n- [Custom directive API changed to align with component lifecycle and `binding.expression` removed](https://v3-migration.vuejs.org/breaking-changes/custom-directives.html)\n- [The `data` option should always be declared as a function](https://v3-migration.vuejs.org/breaking-changes/data-option.html)\n- [The `data` option from mixins is now merged shallowly](https://v3-migration.vuejs.org/breaking-changes/data-option.html#mixin-merge-behavior-change)\n- [Attributes coercion strategy changed](https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html)\n\n::right::\n\n- [Some transition classes got a rename](https://v3-migration.vuejs.org/breaking-changes/transition.html)\n- [`<TransitionGroup>` now renders no wrapper element by default](https://v3-migration.vuejs.org/breaking-changes/transition-group.html)\n- [When watching an array, the callback will only trigger when the array is replaced. If you need to trigger on mutation, the `deep` option must be specified.](https://v3-migration.vuejs.org/breaking-changes/watch.html)\n- `<template>` tags with no special directives (`v-if/else-if/else`, `v-for`, or `v-slot`) are now treated as plain elements and will result in a native `<template>` element instead of rendering its inner content.\n- [Mounted application does not replace the element it\'s mounted to](https://v3-migration.vuejs.org/breaking-changes/mount-changes.html)\n- [Lifecycle `hook:` events prefix changed to `vnode-`](https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html)\n\n### Removed APIs\n\n- [`keyCode` support as `v-on` modifiers](https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html)\n- [$on, $off and \\$once instance methods](https://v3-migration.vuejs.org/breaking-changes/events-api.html)\n- [Filters](https://v3-migration.vuejs.org/breaking-changes/filters.html)\n- [Inline templates attributes](https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html)\n- [`$children` instance property](https://v3-migration.vuejs.org/breaking-changes/children.html)\n- [`propsData` option](https://v3-migration.vuejs.org/breaking-changes/props-data.html)\n- `$destroy` instance method. Users should no longer manually manage the lifecycle of individual Vue components.\n- Global functions `set` and `delete`, and the instance methods `$set` and `$delete`. They are no longer required with proxy-based change detection.\n\n<style>\n.sub-3-cols {\n  zoom: 60%;\n}\n</style>',frontmatter:{hideInToc:!0,layout:"sub-3-cols",title:"Vue3 \u306E Breaking Changes",srcSequence:"./src/01_030.md"},index:5,start:0,end:81,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/01_030.md",raw:'---\nhideInToc: true\nlayout: sub-3-cols\n---\n\n## Vue3 \u306E Breaking Changes\n\n<br>\n\n::left::\n\n### Global API\n\n- [Global Vue API is changed to use an application instance](https://v3-migration.vuejs.org/breaking-changes/global-api.html)\n- [Global and internal APIs have been restructured to be tree-shakable](https://v3-migration.vuejs.org/breaking-changes/global-api-treeshaking.html)\n\n### Template Directives\n\n- [`v-model` usage on components has been reworked, replacing `v-bind.sync`](https://v3-migration.vuejs.org/breaking-changes/v-model.html)\n- [`key` usage on `<template v-for>` and non-`v-for` nodes has changed](https://v3-migration.vuejs.org/breaking-changes/key-attribute.html)\n- [`v-if` and `v-for` precedence when used on the same element has changed](https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html)\n- [`v-bind="object"` is now order-sensitive](https://v3-migration.vuejs.org/breaking-changes/v-bind.html)\n- [`v-on:event.native` modifier has been removed](https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html)\n\n### Components\n\n- [Functional components can only be created using a plain function](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)\n- [`functional` attribute on single-file component (SFC) `<template>` and `functional` component option are deprecated](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)\n- [Async components now require `defineAsyncComponent` method to be created](https://v3-migration.vuejs.org/breaking-changes/async-components.html)\n- [Component events should now be declared with the `emits` option](https://v3-migration.vuejs.org/breaking-changes/emits-option.html)\n\n::middle::\n\n### Render Function\n\n- [Render function API changed](https://v3-migration.vuejs.org/breaking-changes/render-function-api.html)\n- [`$scopedSlots` property is removed and all slots are exposed via `$slots` as functions](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)\n- [`$listeners` has been removed / merged into `$attrs`](https://v3-migration.vuejs.org/breaking-changes/listeners-removed)\n- [`$attrs` now includes `class` and `style` attributes](https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html)\n\n### Custom Elements\n\n- [Custom element checks are now performed during template compilation](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html)\n- [Special `is` attribute usage is restricted to the reserved `<component>` tag only](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html#customized-built-in-elements)\n\n### Other Minor Changes\n\n- The `destroyed` lifecycle option has been renamed to `unmounted`\n- The `beforeDestroy` lifecycle option has been renamed to `beforeUnmount`\n- [Props `default` factory function no longer has access to `this` context](https://v3-migration.vuejs.org/breaking-changes/props-default-this.html)\n- [Custom directive API changed to align with component lifecycle and `binding.expression` removed](https://v3-migration.vuejs.org/breaking-changes/custom-directives.html)\n- [The `data` option should always be declared as a function](https://v3-migration.vuejs.org/breaking-changes/data-option.html)\n- [The `data` option from mixins is now merged shallowly](https://v3-migration.vuejs.org/breaking-changes/data-option.html#mixin-merge-behavior-change)\n- [Attributes coercion strategy changed](https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html)\n\n::right::\n\n- [Some transition classes got a rename](https://v3-migration.vuejs.org/breaking-changes/transition.html)\n- [`<TransitionGroup>` now renders no wrapper element by default](https://v3-migration.vuejs.org/breaking-changes/transition-group.html)\n- [When watching an array, the callback will only trigger when the array is replaced. If you need to trigger on mutation, the `deep` option must be specified.](https://v3-migration.vuejs.org/breaking-changes/watch.html)\n- `<template>` tags with no special directives (`v-if/else-if/else`, `v-for`, or `v-slot`) are now treated as plain elements and will result in a native `<template>` element instead of rendering its inner content.\n- [Mounted application does not replace the element it\'s mounted to](https://v3-migration.vuejs.org/breaking-changes/mount-changes.html)\n- [Lifecycle `hook:` events prefix changed to `vnode-`](https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html)\n\n### Removed APIs\n\n- [`keyCode` support as `v-on` modifiers](https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html)\n- [$on, $off and \\$once instance methods](https://v3-migration.vuejs.org/breaking-changes/events-api.html)\n- [Filters](https://v3-migration.vuejs.org/breaking-changes/filters.html)\n- [Inline templates attributes](https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html)\n- [`$children` instance property](https://v3-migration.vuejs.org/breaking-changes/children.html)\n- [`propsData` option](https://v3-migration.vuejs.org/breaking-changes/props-data.html)\n- `$destroy` instance method. Users should no longer manually manage the lifecycle of individual Vue components.\n- Global functions `set` and `delete`, and the instance methods `$set` and `$delete`. They are no longer required with proxy-based change detection.\n\n<style>\n.sub-3-cols {\n  zoom: 60%;\n}\n</style>\n',title:"Vue3 \u306E Breaking Changes",level:2,content:'## Vue3 \u306E Breaking Changes\n\n<br>\n\n::left::\n\n### Global API\n\n- [Global Vue API is changed to use an application instance](https://v3-migration.vuejs.org/breaking-changes/global-api.html)\n- [Global and internal APIs have been restructured to be tree-shakable](https://v3-migration.vuejs.org/breaking-changes/global-api-treeshaking.html)\n\n### Template Directives\n\n- [`v-model` usage on components has been reworked, replacing `v-bind.sync`](https://v3-migration.vuejs.org/breaking-changes/v-model.html)\n- [`key` usage on `<template v-for>` and non-`v-for` nodes has changed](https://v3-migration.vuejs.org/breaking-changes/key-attribute.html)\n- [`v-if` and `v-for` precedence when used on the same element has changed](https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html)\n- [`v-bind="object"` is now order-sensitive](https://v3-migration.vuejs.org/breaking-changes/v-bind.html)\n- [`v-on:event.native` modifier has been removed](https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html)\n\n### Components\n\n- [Functional components can only be created using a plain function](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)\n- [`functional` attribute on single-file component (SFC) `<template>` and `functional` component option are deprecated](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)\n- [Async components now require `defineAsyncComponent` method to be created](https://v3-migration.vuejs.org/breaking-changes/async-components.html)\n- [Component events should now be declared with the `emits` option](https://v3-migration.vuejs.org/breaking-changes/emits-option.html)\n\n::middle::\n\n### Render Function\n\n- [Render function API changed](https://v3-migration.vuejs.org/breaking-changes/render-function-api.html)\n- [`$scopedSlots` property is removed and all slots are exposed via `$slots` as functions](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)\n- [`$listeners` has been removed / merged into `$attrs`](https://v3-migration.vuejs.org/breaking-changes/listeners-removed)\n- [`$attrs` now includes `class` and `style` attributes](https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html)\n\n### Custom Elements\n\n- [Custom element checks are now performed during template compilation](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html)\n- [Special `is` attribute usage is restricted to the reserved `<component>` tag only](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html#customized-built-in-elements)\n\n### Other Minor Changes\n\n- The `destroyed` lifecycle option has been renamed to `unmounted`\n- The `beforeDestroy` lifecycle option has been renamed to `beforeUnmount`\n- [Props `default` factory function no longer has access to `this` context](https://v3-migration.vuejs.org/breaking-changes/props-default-this.html)\n- [Custom directive API changed to align with component lifecycle and `binding.expression` removed](https://v3-migration.vuejs.org/breaking-changes/custom-directives.html)\n- [The `data` option should always be declared as a function](https://v3-migration.vuejs.org/breaking-changes/data-option.html)\n- [The `data` option from mixins is now merged shallowly](https://v3-migration.vuejs.org/breaking-changes/data-option.html#mixin-merge-behavior-change)\n- [Attributes coercion strategy changed](https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html)\n\n::right::\n\n- [Some transition classes got a rename](https://v3-migration.vuejs.org/breaking-changes/transition.html)\n- [`<TransitionGroup>` now renders no wrapper element by default](https://v3-migration.vuejs.org/breaking-changes/transition-group.html)\n- [When watching an array, the callback will only trigger when the array is replaced. If you need to trigger on mutation, the `deep` option must be specified.](https://v3-migration.vuejs.org/breaking-changes/watch.html)\n- `<template>` tags with no special directives (`v-if/else-if/else`, `v-for`, or `v-slot`) are now treated as plain elements and will result in a native `<template>` element instead of rendering its inner content.\n- [Mounted application does not replace the element it\'s mounted to](https://v3-migration.vuejs.org/breaking-changes/mount-changes.html)\n- [Lifecycle `hook:` events prefix changed to `vnode-`](https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html)\n\n### Removed APIs\n\n- [`keyCode` support as `v-on` modifiers](https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html)\n- [$on, $off and \\$once instance methods](https://v3-migration.vuejs.org/breaking-changes/events-api.html)\n- [Filters](https://v3-migration.vuejs.org/breaking-changes/filters.html)\n- [Inline templates attributes](https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html)\n- [`$children` instance property](https://v3-migration.vuejs.org/breaking-changes/children.html)\n- [`propsData` option](https://v3-migration.vuejs.org/breaking-changes/props-data.html)\n- `$destroy` instance method. Users should no longer manually manage the lifecycle of individual Vue components.\n- Global functions `set` and `delete`, and the instance methods `$set` and `$delete`. They are no longer required with proxy-based change detection.\n\n<style>\n.sub-3-cols {\n  zoom: 60%;\n}\n</style>',frontmatter:{hideInToc:!0,layout:"sub-3-cols",title:"Vue3 \u306E Breaking Changes"},index:0,start:0,end:81},inline:{raw:`---
src: ./src/01_030.md
---
`,content:"",frontmatter:{},index:4,start:26,end:30},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/01_030.md",notesHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:u3,meta:{layout:"section",title:"eslint-plugin-vue \u3068\u306F",srcSequence:"./src/02_010.md",slide:{raw:null,title:"eslint-plugin-vue \u3068\u306F",level:1,content:"# eslint-plugin-vue",frontmatter:{layout:"section",title:"eslint-plugin-vue \u3068\u306F",srcSequence:"./src/02_010.md"},index:6,start:0,end:7,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/02_010.md",raw:`---
layout: section
title: "eslint-plugin-vue \u3068\u306F"
---

# eslint-plugin-vue
`,title:"eslint-plugin-vue \u3068\u306F",level:1,content:"# eslint-plugin-vue",frontmatter:{layout:"section",title:"eslint-plugin-vue \u3068\u306F"},index:0,start:0,end:7},inline:{raw:`---
src: ./src/02_010.md
---
`,content:"",frontmatter:{},index:5,start:30,end:34},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/02_010.md",notesHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:g3,meta:{hideInToc:!0,title:"eslint-plugin-vue \u3068\u306F",srcSequence:"./src/02_020.md",slide:{raw:null,title:"eslint-plugin-vue \u3068\u306F",level:2,content:`## eslint-plugin-vue \u3068\u306F

Vue.js \u7528\u306E ESLint \u30D7\u30E9\u30B0\u30A4\u30F3\uFF08Vue \u30AA\u30D5\u30A3\u30B7\u30E3\u30EB\uFF01\uFF09

- ESLint \u306F JavaScript \u306E\u30B3\u30FC\u30C9\u3092\u30C1\u30A7\u30C3\u30AF\u3059\u308B\u30EA\u30F3\u30BF\u30FC
- \`*.vue\` \u30D5\u30A1\u30A4\u30EB\u3092\u89E3\u6790\u3057\u305F\u308A\u3001Vue \u306B\u7279\u5316\u3057\u305F\u691C\u8A3C\u30EB\u30FC\u30EB\u3092\u63D0\u4F9B\u3057\u307E\u3059
- \u30C1\u30A7\u30C3\u30AF\u30EB\u30FC\u30EB\u306B\u3088\u3063\u3066\u306F\u554F\u984C\u3092**\u81EA\u52D5\u7684\u306B\u4FEE\u6B63**\u3057\u307E\u3059\uFF08ESLint \u306E\u6A5F\u80FD\uFF09
- **Vue3 \u79FB\u884C\u306B\u4FBF\u5229**\u306A\u30EB\u30FC\u30EB\u3082\u3044\u304F\u3064\u304B\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059
- \u904E\u53BB\u306E\u8CC7\u6599\uFF1A
  - [Vue.js v-tokyo \u30AA\u30F3\u30E9\u30A4\u30F3 Meetup#12](https://vuejs-meetup.connpass.com/event/195236/) \u306E\u767A\u8868\u8CC7\u6599
    <https://docs.google.com/presentation/d/1JFS9DiTxUsrlGfYr72n9QRPibgYB-TzSTB8hi6mq4wY/edit?usp=sharing>
  - [TechFeed Conference 2022](https://techfeed.io/events/techfeed-conference-2022) \u3067\u306E[\u767A\u8868](https://techfeed.io/entries/629ef550a192e46aa36a7760)\u8CC7\u6599
    <https://docs.google.com/presentation/d/18Q8nn69Hi8d39k51HduArKkrCx3CY_ZsbPf-F-tb8Pg/edit?usp=sharing>
- \u79C1\u306F eslint-plugin-vue \u306E\u30E1\u30F3\u30C6\u30CA\u30FC\u3067\u3059`,frontmatter:{hideInToc:!0,title:"eslint-plugin-vue \u3068\u306F",srcSequence:"./src/02_020.md"},index:7,start:0,end:19,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/02_020.md",raw:`---
hideInToc: true
---

## eslint-plugin-vue \u3068\u306F

Vue.js \u7528\u306E ESLint \u30D7\u30E9\u30B0\u30A4\u30F3\uFF08Vue \u30AA\u30D5\u30A3\u30B7\u30E3\u30EB\uFF01\uFF09

- ESLint \u306F JavaScript \u306E\u30B3\u30FC\u30C9\u3092\u30C1\u30A7\u30C3\u30AF\u3059\u308B\u30EA\u30F3\u30BF\u30FC
- \`*.vue\` \u30D5\u30A1\u30A4\u30EB\u3092\u89E3\u6790\u3057\u305F\u308A\u3001Vue \u306B\u7279\u5316\u3057\u305F\u691C\u8A3C\u30EB\u30FC\u30EB\u3092\u63D0\u4F9B\u3057\u307E\u3059
- \u30C1\u30A7\u30C3\u30AF\u30EB\u30FC\u30EB\u306B\u3088\u3063\u3066\u306F\u554F\u984C\u3092**\u81EA\u52D5\u7684\u306B\u4FEE\u6B63**\u3057\u307E\u3059\uFF08ESLint \u306E\u6A5F\u80FD\uFF09
- **Vue3 \u79FB\u884C\u306B\u4FBF\u5229**\u306A\u30EB\u30FC\u30EB\u3082\u3044\u304F\u3064\u304B\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059
- \u904E\u53BB\u306E\u8CC7\u6599\uFF1A
  - [Vue.js v-tokyo \u30AA\u30F3\u30E9\u30A4\u30F3 Meetup#12](https://vuejs-meetup.connpass.com/event/195236/) \u306E\u767A\u8868\u8CC7\u6599
    <https://docs.google.com/presentation/d/1JFS9DiTxUsrlGfYr72n9QRPibgYB-TzSTB8hi6mq4wY/edit?usp=sharing>
  - [TechFeed Conference 2022](https://techfeed.io/events/techfeed-conference-2022) \u3067\u306E[\u767A\u8868](https://techfeed.io/entries/629ef550a192e46aa36a7760)\u8CC7\u6599
    <https://docs.google.com/presentation/d/18Q8nn69Hi8d39k51HduArKkrCx3CY_ZsbPf-F-tb8Pg/edit?usp=sharing>
- \u79C1\u306F eslint-plugin-vue \u306E\u30E1\u30F3\u30C6\u30CA\u30FC\u3067\u3059
`,title:"eslint-plugin-vue \u3068\u306F",level:2,content:`## eslint-plugin-vue \u3068\u306F

Vue.js \u7528\u306E ESLint \u30D7\u30E9\u30B0\u30A4\u30F3\uFF08Vue \u30AA\u30D5\u30A3\u30B7\u30E3\u30EB\uFF01\uFF09

- ESLint \u306F JavaScript \u306E\u30B3\u30FC\u30C9\u3092\u30C1\u30A7\u30C3\u30AF\u3059\u308B\u30EA\u30F3\u30BF\u30FC
- \`*.vue\` \u30D5\u30A1\u30A4\u30EB\u3092\u89E3\u6790\u3057\u305F\u308A\u3001Vue \u306B\u7279\u5316\u3057\u305F\u691C\u8A3C\u30EB\u30FC\u30EB\u3092\u63D0\u4F9B\u3057\u307E\u3059
- \u30C1\u30A7\u30C3\u30AF\u30EB\u30FC\u30EB\u306B\u3088\u3063\u3066\u306F\u554F\u984C\u3092**\u81EA\u52D5\u7684\u306B\u4FEE\u6B63**\u3057\u307E\u3059\uFF08ESLint \u306E\u6A5F\u80FD\uFF09
- **Vue3 \u79FB\u884C\u306B\u4FBF\u5229**\u306A\u30EB\u30FC\u30EB\u3082\u3044\u304F\u3064\u304B\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059
- \u904E\u53BB\u306E\u8CC7\u6599\uFF1A
  - [Vue.js v-tokyo \u30AA\u30F3\u30E9\u30A4\u30F3 Meetup#12](https://vuejs-meetup.connpass.com/event/195236/) \u306E\u767A\u8868\u8CC7\u6599
    <https://docs.google.com/presentation/d/1JFS9DiTxUsrlGfYr72n9QRPibgYB-TzSTB8hi6mq4wY/edit?usp=sharing>
  - [TechFeed Conference 2022](https://techfeed.io/events/techfeed-conference-2022) \u3067\u306E[\u767A\u8868](https://techfeed.io/entries/629ef550a192e46aa36a7760)\u8CC7\u6599
    <https://docs.google.com/presentation/d/18Q8nn69Hi8d39k51HduArKkrCx3CY_ZsbPf-F-tb8Pg/edit?usp=sharing>
- \u79C1\u306F eslint-plugin-vue \u306E\u30E1\u30F3\u30C6\u30CA\u30FC\u3067\u3059`,frontmatter:{hideInToc:!0,title:"eslint-plugin-vue \u3068\u306F"},index:0,start:0,end:19},inline:{raw:`---
src: ./src/02_020.md
---
`,content:"",frontmatter:{},index:6,start:34,end:38},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/02_020.md",notesHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:v3,meta:{layout:"section",title:"eslint-plugin-vue \u3092\u4F7F\u7528\u3057\u3066 Vue3 \u79FB\u884C\u3057\u3066\u307F\u305F",srcSequence:"./src/03_010.md",slide:{raw:null,title:"eslint-plugin-vue \u3092\u4F7F\u7528\u3057\u3066 Vue3 \u79FB\u884C\u3057\u3066\u307F\u305F",level:1,content:`# eslint-plugin-vue \u3092\u4F7F\u7528\u3057\u3066 Vue3 \u79FB\u884C\u3057\u3066\u307F\u305F

\u301C ESLint \u3067\u3069\u306E\u7A0B\u5EA6 Vue3 \u79FB\u884C\u3092\u30B5\u30DD\u30FC\u30C8\u3067\u304D\u305F\u306E\u304B\uFF1F \u301C`,frontmatter:{layout:"section",title:"eslint-plugin-vue \u3092\u4F7F\u7528\u3057\u3066 Vue3 \u79FB\u884C\u3057\u3066\u307F\u305F",srcSequence:"./src/03_010.md"},index:8,start:0,end:9,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_010.md",raw:`---
layout: section
title: "eslint-plugin-vue \u3092\u4F7F\u7528\u3057\u3066 Vue3 \u79FB\u884C\u3057\u3066\u307F\u305F"
---

# eslint-plugin-vue \u3092\u4F7F\u7528\u3057\u3066 Vue3 \u79FB\u884C\u3057\u3066\u307F\u305F

\u301C ESLint \u3067\u3069\u306E\u7A0B\u5EA6 Vue3 \u79FB\u884C\u3092\u30B5\u30DD\u30FC\u30C8\u3067\u304D\u305F\u306E\u304B\uFF1F \u301C
`,title:"eslint-plugin-vue \u3092\u4F7F\u7528\u3057\u3066 Vue3 \u79FB\u884C\u3057\u3066\u307F\u305F",level:1,content:`# eslint-plugin-vue \u3092\u4F7F\u7528\u3057\u3066 Vue3 \u79FB\u884C\u3057\u3066\u307F\u305F

\u301C ESLint \u3067\u3069\u306E\u7A0B\u5EA6 Vue3 \u79FB\u884C\u3092\u30B5\u30DD\u30FC\u30C8\u3067\u304D\u305F\u306E\u304B\uFF1F \u301C`,frontmatter:{layout:"section",title:"eslint-plugin-vue \u3092\u4F7F\u7528\u3057\u3066 Vue3 \u79FB\u884C\u3057\u3066\u307F\u305F"},index:0,start:0,end:9},inline:{raw:`---
src: ./src/03_010.md
---
`,content:"",frontmatter:{},index:7,start:38,end:42},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_010.md",notesHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:F3,meta:{hideInToc:!0,layout:"sub-3-cols",title:"Vue3 \u306E Breaking Changes",srcSequence:"./src/03_020.md",slide:{raw:null,title:"Vue3 \u306E Breaking Changes",level:2,content:'## Vue3 \u306E Breaking Changes\n\n<https://v3-migration.vuejs.org/breaking-changes/>\n\n::left::\n\n### Global API\n\n- [Global Vue API is changed to use an application instance](https://v3-migration.vuejs.org/breaking-changes/global-api.html)\n- [Global and internal APIs have been restructured to be tree-shakable](https://v3-migration.vuejs.org/breaking-changes/global-api-treeshaking.html)\n\n### Template Directives\n\n- [`v-model` usage on components has been reworked, replacing `v-bind.sync`](https://v3-migration.vuejs.org/breaking-changes/v-model.html)\n- [`key` usage on `<template v-for>` and non-`v-for` nodes has changed](https://v3-migration.vuejs.org/breaking-changes/key-attribute.html)\n- [`v-if` and `v-for` precedence when used on the same element has changed](https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html)\n- [`v-bind="object"` is now order-sensitive](https://v3-migration.vuejs.org/breaking-changes/v-bind.html)\n- [`v-on:event.native` modifier has been removed](https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html)\n\n### Components\n\n- [Functional components can only be created using a plain function](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)\n- [`functional` attribute on single-file component (SFC) `<template>` and `functional` component option are deprecated](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)\n- [Async components now require `defineAsyncComponent` method to be created](https://v3-migration.vuejs.org/breaking-changes/async-components.html)\n- [Component events should now be declared with the `emits` option](https://v3-migration.vuejs.org/breaking-changes/emits-option.html)\n\n::middle::\n\n### Render Function\n\n- [Render function API changed](https://v3-migration.vuejs.org/breaking-changes/render-function-api.html)\n- [`$scopedSlots` property is removed and all slots are exposed via `$slots` as functions](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)\n- [`$listeners` has been removed / merged into `$attrs`](https://v3-migration.vuejs.org/breaking-changes/listeners-removed)\n- [`$attrs` now includes `class` and `style` attributes](https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html)\n\n### Custom Elements\n\n- [Custom element checks are now performed during template compilation](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html)\n- [Special `is` attribute usage is restricted to the reserved `<component>` tag only](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html#customized-built-in-elements)\n\n### Other Minor Changes\n\n- The `destroyed` lifecycle option has been renamed to `unmounted`\n- The `beforeDestroy` lifecycle option has been renamed to `beforeUnmount`\n- [Props `default` factory function no longer has access to `this` context](https://v3-migration.vuejs.org/breaking-changes/props-default-this.html)\n- [Custom directive API changed to align with component lifecycle and `binding.expression` removed](https://v3-migration.vuejs.org/breaking-changes/custom-directives.html)\n- [The `data` option should always be declared as a function](https://v3-migration.vuejs.org/breaking-changes/data-option.html)\n- [The `data` option from mixins is now merged shallowly](https://v3-migration.vuejs.org/breaking-changes/data-option.html#mixin-merge-behavior-change)\n- [Attributes coercion strategy changed](https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html)\n\n::right::\n\n- [Some transition classes got a rename](https://v3-migration.vuejs.org/breaking-changes/transition.html)\n- [`<TransitionGroup>` now renders no wrapper element by default](https://v3-migration.vuejs.org/breaking-changes/transition-group.html)\n- [When watching an array, the callback will only trigger when the array is replaced. If you need to trigger on mutation, the `deep` option must be specified.](https://v3-migration.vuejs.org/breaking-changes/watch.html)\n- `<template>` tags with no special directives (`v-if/else-if/else`, `v-for`, or `v-slot`) are now treated as plain elements and will result in a native `<template>` element instead of rendering its inner content.\n- [Mounted application does not replace the element it\'s mounted to](https://v3-migration.vuejs.org/breaking-changes/mount-changes.html)\n- [Lifecycle `hook:` events prefix changed to `vnode-`](https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html)\n\n### Removed APIs\n\n- [`keyCode` support as `v-on` modifiers](https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html)\n- [$on, $off and \\$once instance methods](https://v3-migration.vuejs.org/breaking-changes/events-api.html)\n- [Filters](https://v3-migration.vuejs.org/breaking-changes/filters.html)\n- [Inline templates attributes](https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html)\n- [`$children` instance property](https://v3-migration.vuejs.org/breaking-changes/children.html)\n- [`propsData` option](https://v3-migration.vuejs.org/breaking-changes/props-data.html)\n- `$destroy` instance method. Users should no longer manually manage the lifecycle of individual Vue components.\n- Global functions `set` and `delete`, and the instance methods `$set` and `$delete`. They are no longer required with proxy-based change detection.\n\n<style>\n.sub-3-cols {\n  zoom: 60%;\n}\n</style>',frontmatter:{hideInToc:!0,layout:"sub-3-cols",title:"Vue3 \u306E Breaking Changes",srcSequence:"./src/03_020.md"},index:9,start:0,end:81,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_020.md",raw:'---\nhideInToc: true\nlayout: sub-3-cols\n---\n\n## Vue3 \u306E Breaking Changes\n\n<https://v3-migration.vuejs.org/breaking-changes/>\n\n::left::\n\n### Global API\n\n- [Global Vue API is changed to use an application instance](https://v3-migration.vuejs.org/breaking-changes/global-api.html)\n- [Global and internal APIs have been restructured to be tree-shakable](https://v3-migration.vuejs.org/breaking-changes/global-api-treeshaking.html)\n\n### Template Directives\n\n- [`v-model` usage on components has been reworked, replacing `v-bind.sync`](https://v3-migration.vuejs.org/breaking-changes/v-model.html)\n- [`key` usage on `<template v-for>` and non-`v-for` nodes has changed](https://v3-migration.vuejs.org/breaking-changes/key-attribute.html)\n- [`v-if` and `v-for` precedence when used on the same element has changed](https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html)\n- [`v-bind="object"` is now order-sensitive](https://v3-migration.vuejs.org/breaking-changes/v-bind.html)\n- [`v-on:event.native` modifier has been removed](https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html)\n\n### Components\n\n- [Functional components can only be created using a plain function](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)\n- [`functional` attribute on single-file component (SFC) `<template>` and `functional` component option are deprecated](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)\n- [Async components now require `defineAsyncComponent` method to be created](https://v3-migration.vuejs.org/breaking-changes/async-components.html)\n- [Component events should now be declared with the `emits` option](https://v3-migration.vuejs.org/breaking-changes/emits-option.html)\n\n::middle::\n\n### Render Function\n\n- [Render function API changed](https://v3-migration.vuejs.org/breaking-changes/render-function-api.html)\n- [`$scopedSlots` property is removed and all slots are exposed via `$slots` as functions](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)\n- [`$listeners` has been removed / merged into `$attrs`](https://v3-migration.vuejs.org/breaking-changes/listeners-removed)\n- [`$attrs` now includes `class` and `style` attributes](https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html)\n\n### Custom Elements\n\n- [Custom element checks are now performed during template compilation](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html)\n- [Special `is` attribute usage is restricted to the reserved `<component>` tag only](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html#customized-built-in-elements)\n\n### Other Minor Changes\n\n- The `destroyed` lifecycle option has been renamed to `unmounted`\n- The `beforeDestroy` lifecycle option has been renamed to `beforeUnmount`\n- [Props `default` factory function no longer has access to `this` context](https://v3-migration.vuejs.org/breaking-changes/props-default-this.html)\n- [Custom directive API changed to align with component lifecycle and `binding.expression` removed](https://v3-migration.vuejs.org/breaking-changes/custom-directives.html)\n- [The `data` option should always be declared as a function](https://v3-migration.vuejs.org/breaking-changes/data-option.html)\n- [The `data` option from mixins is now merged shallowly](https://v3-migration.vuejs.org/breaking-changes/data-option.html#mixin-merge-behavior-change)\n- [Attributes coercion strategy changed](https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html)\n\n::right::\n\n- [Some transition classes got a rename](https://v3-migration.vuejs.org/breaking-changes/transition.html)\n- [`<TransitionGroup>` now renders no wrapper element by default](https://v3-migration.vuejs.org/breaking-changes/transition-group.html)\n- [When watching an array, the callback will only trigger when the array is replaced. If you need to trigger on mutation, the `deep` option must be specified.](https://v3-migration.vuejs.org/breaking-changes/watch.html)\n- `<template>` tags with no special directives (`v-if/else-if/else`, `v-for`, or `v-slot`) are now treated as plain elements and will result in a native `<template>` element instead of rendering its inner content.\n- [Mounted application does not replace the element it\'s mounted to](https://v3-migration.vuejs.org/breaking-changes/mount-changes.html)\n- [Lifecycle `hook:` events prefix changed to `vnode-`](https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html)\n\n### Removed APIs\n\n- [`keyCode` support as `v-on` modifiers](https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html)\n- [$on, $off and \\$once instance methods](https://v3-migration.vuejs.org/breaking-changes/events-api.html)\n- [Filters](https://v3-migration.vuejs.org/breaking-changes/filters.html)\n- [Inline templates attributes](https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html)\n- [`$children` instance property](https://v3-migration.vuejs.org/breaking-changes/children.html)\n- [`propsData` option](https://v3-migration.vuejs.org/breaking-changes/props-data.html)\n- `$destroy` instance method. Users should no longer manually manage the lifecycle of individual Vue components.\n- Global functions `set` and `delete`, and the instance methods `$set` and `$delete`. They are no longer required with proxy-based change detection.\n\n<style>\n.sub-3-cols {\n  zoom: 60%;\n}\n</style>\n',title:"Vue3 \u306E Breaking Changes",level:2,content:'## Vue3 \u306E Breaking Changes\n\n<https://v3-migration.vuejs.org/breaking-changes/>\n\n::left::\n\n### Global API\n\n- [Global Vue API is changed to use an application instance](https://v3-migration.vuejs.org/breaking-changes/global-api.html)\n- [Global and internal APIs have been restructured to be tree-shakable](https://v3-migration.vuejs.org/breaking-changes/global-api-treeshaking.html)\n\n### Template Directives\n\n- [`v-model` usage on components has been reworked, replacing `v-bind.sync`](https://v3-migration.vuejs.org/breaking-changes/v-model.html)\n- [`key` usage on `<template v-for>` and non-`v-for` nodes has changed](https://v3-migration.vuejs.org/breaking-changes/key-attribute.html)\n- [`v-if` and `v-for` precedence when used on the same element has changed](https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html)\n- [`v-bind="object"` is now order-sensitive](https://v3-migration.vuejs.org/breaking-changes/v-bind.html)\n- [`v-on:event.native` modifier has been removed](https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html)\n\n### Components\n\n- [Functional components can only be created using a plain function](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)\n- [`functional` attribute on single-file component (SFC) `<template>` and `functional` component option are deprecated](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)\n- [Async components now require `defineAsyncComponent` method to be created](https://v3-migration.vuejs.org/breaking-changes/async-components.html)\n- [Component events should now be declared with the `emits` option](https://v3-migration.vuejs.org/breaking-changes/emits-option.html)\n\n::middle::\n\n### Render Function\n\n- [Render function API changed](https://v3-migration.vuejs.org/breaking-changes/render-function-api.html)\n- [`$scopedSlots` property is removed and all slots are exposed via `$slots` as functions](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)\n- [`$listeners` has been removed / merged into `$attrs`](https://v3-migration.vuejs.org/breaking-changes/listeners-removed)\n- [`$attrs` now includes `class` and `style` attributes](https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html)\n\n### Custom Elements\n\n- [Custom element checks are now performed during template compilation](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html)\n- [Special `is` attribute usage is restricted to the reserved `<component>` tag only](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html#customized-built-in-elements)\n\n### Other Minor Changes\n\n- The `destroyed` lifecycle option has been renamed to `unmounted`\n- The `beforeDestroy` lifecycle option has been renamed to `beforeUnmount`\n- [Props `default` factory function no longer has access to `this` context](https://v3-migration.vuejs.org/breaking-changes/props-default-this.html)\n- [Custom directive API changed to align with component lifecycle and `binding.expression` removed](https://v3-migration.vuejs.org/breaking-changes/custom-directives.html)\n- [The `data` option should always be declared as a function](https://v3-migration.vuejs.org/breaking-changes/data-option.html)\n- [The `data` option from mixins is now merged shallowly](https://v3-migration.vuejs.org/breaking-changes/data-option.html#mixin-merge-behavior-change)\n- [Attributes coercion strategy changed](https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html)\n\n::right::\n\n- [Some transition classes got a rename](https://v3-migration.vuejs.org/breaking-changes/transition.html)\n- [`<TransitionGroup>` now renders no wrapper element by default](https://v3-migration.vuejs.org/breaking-changes/transition-group.html)\n- [When watching an array, the callback will only trigger when the array is replaced. If you need to trigger on mutation, the `deep` option must be specified.](https://v3-migration.vuejs.org/breaking-changes/watch.html)\n- `<template>` tags with no special directives (`v-if/else-if/else`, `v-for`, or `v-slot`) are now treated as plain elements and will result in a native `<template>` element instead of rendering its inner content.\n- [Mounted application does not replace the element it\'s mounted to](https://v3-migration.vuejs.org/breaking-changes/mount-changes.html)\n- [Lifecycle `hook:` events prefix changed to `vnode-`](https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html)\n\n### Removed APIs\n\n- [`keyCode` support as `v-on` modifiers](https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html)\n- [$on, $off and \\$once instance methods](https://v3-migration.vuejs.org/breaking-changes/events-api.html)\n- [Filters](https://v3-migration.vuejs.org/breaking-changes/filters.html)\n- [Inline templates attributes](https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html)\n- [`$children` instance property](https://v3-migration.vuejs.org/breaking-changes/children.html)\n- [`propsData` option](https://v3-migration.vuejs.org/breaking-changes/props-data.html)\n- `$destroy` instance method. Users should no longer manually manage the lifecycle of individual Vue components.\n- Global functions `set` and `delete`, and the instance methods `$set` and `$delete`. They are no longer required with proxy-based change detection.\n\n<style>\n.sub-3-cols {\n  zoom: 60%;\n}\n</style>',frontmatter:{hideInToc:!0,layout:"sub-3-cols",title:"Vue3 \u306E Breaking Changes"},index:0,start:0,end:81},inline:{raw:`---
src: ./src/03_020.md
---
`,content:"",frontmatter:{},index:8,start:42,end:46},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_020.md",notesHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:t1,meta:{hideInToc:!0,layout:"sub-3-cols",title:"Vue3 \u306E Breaking Changes",srcSequence:"./src/03_030.md",slide:{raw:null,title:"Vue3 \u306E Breaking Changes",level:2,content:`## Vue3 \u306E Breaking Changes

\u4EE5\u4E0B\u3067\u306F\u3053\u306E\u3088\u3046\u306B\u8868\u8A18\u3057\u307E\u3059\u3002

::left::

### Global API

- [createApp()\u7B49](https://v3-migration.vuejs.org/breaking-changes/global-api.html)
- [\u540D\u524D\u4ED8\u304D Export](https://v3-migration.vuejs.org/breaking-changes/global-api-treeshaking.html)

### Template Directives

- [\`v-model\`\u306E\`modelValue\`, \`emit('input')\`](https://v3-migration.vuejs.org/breaking-changes/v-model.html)  
  [\`v-bind.sync\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/v-model.html)
- [\`<template v-for>\`\u306E key](https://v3-migration.vuejs.org/breaking-changes/key-attribute.html)
- [\`v-if\`\u30FB\`v-for\` \u306E\u512A\u5148\u5EA6](https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html)
- [\`v-bind="object"\`\u304C\u9806\u5E8F\u306B\u5F71\u97FF](https://v3-migration.vuejs.org/breaking-changes/v-bind.html)
- [\`v-on:event.native\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html)

### Components

- [\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)
- [SFC \u306E\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)
- [\u975E\u540C\u671F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/async-components.html)
- [\`emits\`\u30AA\u30D7\u30B7\u30E7\u30F3](https://v3-migration.vuejs.org/breaking-changes/emits-option.html)

::middle::

### Render Function

- [\`render\`\u95A2\u6570\u306E\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/render-function-api.html)
- [\`$scopedSlots\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)  
  [\`$slots\`\u306E\u95A2\u6570\u5316](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)
- [\`$listeners\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/listeners-removed)
- [\`$attrs\`\u306E\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html)

### Custom Elements

- [\u30AB\u30B9\u30BF\u30E0\u8981\u7D20\u306E\u6271\u3044](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html)
- [\`is\`\u306E\u8A18\u6CD5](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html#customized-built-in-elements)

### Other Minor Changes

- \`unmounted\`
- \`beforeUnmount\`
- [\`default\`\u306E\`this\`](https://v3-migration.vuejs.org/breaking-changes/props-default-this.html)
- [\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/custom-directives.html)
- [\`data\`\u95A2\u6570](https://v3-migration.vuejs.org/breaking-changes/data-option.html)
- [mixin \u306E\`data\`\u306E\u6271\u3044](https://v3-migration.vuejs.org/breaking-changes/data-option.html#mixin-merge-behavior-change)
- [\`:attr=false\`](https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html)

::right::

- [Transition \u30AF\u30E9\u30B9\u540D\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/transition.html)
- [\`<TransitionGroup>\`\u306E\u30EB\u30FC\u30C8\u8981\u7D20](https://v3-migration.vuejs.org/breaking-changes/transition-group.html)
- [\u914D\u5217\u306E watch](https://v3-migration.vuejs.org/breaking-changes/watch.html)
- \u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u7121\u3057\u306E\`<template>\`
- [Vue \u30A2\u30D7\u30EA\u306E\u30EB\u30FC\u30C8](https://v3-migration.vuejs.org/breaking-changes/mount-changes.html)
- [\`hook:\`\u30A4\u30D9\u30F3\u30C8](https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html)

### Removed APIs

- [\`v-on\`\u30AD\u30FC\u4FEE\u98FE\u5B50](https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html)
- [\`$on\`\u30FB\`$off\`\u30FB\`$once\`](https://v3-migration.vuejs.org/breaking-changes/events-api.html)
- [\u30D5\u30A3\u30EB\u30BF\u30FC](https://v3-migration.vuejs.org/breaking-changes/filters.html)
- [Inline \u30C6\u30F3\u30D7\u30EC\u30FC\u30C8](https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html)
- [\`$children\`](https://v3-migration.vuejs.org/breaking-changes/children.html)
- [\`propsData\`](https://v3-migration.vuejs.org/breaking-changes/props-data.html)
- \`$destroy()\`
- \`Vue.set()\`\u30FB\`Vue.delete()\`

<style>
.sub-3-cols {
  zoom: 60%;
}
</style>`,frontmatter:{hideInToc:!0,layout:"sub-3-cols",title:"Vue3 \u306E Breaking Changes",srcSequence:"./src/03_030.md"},index:10,start:0,end:83,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_030.md",raw:`---
hideInToc: true
layout: sub-3-cols
---

## Vue3 \u306E Breaking Changes

\u4EE5\u4E0B\u3067\u306F\u3053\u306E\u3088\u3046\u306B\u8868\u8A18\u3057\u307E\u3059\u3002

::left::

### Global API

- [createApp()\u7B49](https://v3-migration.vuejs.org/breaking-changes/global-api.html)
- [\u540D\u524D\u4ED8\u304D Export](https://v3-migration.vuejs.org/breaking-changes/global-api-treeshaking.html)

### Template Directives

- [\`v-model\`\u306E\`modelValue\`, \`emit('input')\`](https://v3-migration.vuejs.org/breaking-changes/v-model.html)  
  [\`v-bind.sync\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/v-model.html)
- [\`<template v-for>\`\u306E key](https://v3-migration.vuejs.org/breaking-changes/key-attribute.html)
- [\`v-if\`\u30FB\`v-for\` \u306E\u512A\u5148\u5EA6](https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html)
- [\`v-bind="object"\`\u304C\u9806\u5E8F\u306B\u5F71\u97FF](https://v3-migration.vuejs.org/breaking-changes/v-bind.html)
- [\`v-on:event.native\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html)

### Components

- [\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)
- [SFC \u306E\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)
- [\u975E\u540C\u671F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/async-components.html)
- [\`emits\`\u30AA\u30D7\u30B7\u30E7\u30F3](https://v3-migration.vuejs.org/breaking-changes/emits-option.html)

::middle::

### Render Function

- [\`render\`\u95A2\u6570\u306E\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/render-function-api.html)
- [\`$scopedSlots\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)  
  [\`$slots\`\u306E\u95A2\u6570\u5316](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)
- [\`$listeners\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/listeners-removed)
- [\`$attrs\`\u306E\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html)

### Custom Elements

- [\u30AB\u30B9\u30BF\u30E0\u8981\u7D20\u306E\u6271\u3044](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html)
- [\`is\`\u306E\u8A18\u6CD5](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html#customized-built-in-elements)

### Other Minor Changes

- \`unmounted\`
- \`beforeUnmount\`
- [\`default\`\u306E\`this\`](https://v3-migration.vuejs.org/breaking-changes/props-default-this.html)
- [\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/custom-directives.html)
- [\`data\`\u95A2\u6570](https://v3-migration.vuejs.org/breaking-changes/data-option.html)
- [mixin \u306E\`data\`\u306E\u6271\u3044](https://v3-migration.vuejs.org/breaking-changes/data-option.html#mixin-merge-behavior-change)
- [\`:attr=false\`](https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html)

::right::

- [Transition \u30AF\u30E9\u30B9\u540D\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/transition.html)
- [\`<TransitionGroup>\`\u306E\u30EB\u30FC\u30C8\u8981\u7D20](https://v3-migration.vuejs.org/breaking-changes/transition-group.html)
- [\u914D\u5217\u306E watch](https://v3-migration.vuejs.org/breaking-changes/watch.html)
- \u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u7121\u3057\u306E\`<template>\`
- [Vue \u30A2\u30D7\u30EA\u306E\u30EB\u30FC\u30C8](https://v3-migration.vuejs.org/breaking-changes/mount-changes.html)
- [\`hook:\`\u30A4\u30D9\u30F3\u30C8](https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html)

### Removed APIs

- [\`v-on\`\u30AD\u30FC\u4FEE\u98FE\u5B50](https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html)
- [\`$on\`\u30FB\`$off\`\u30FB\`$once\`](https://v3-migration.vuejs.org/breaking-changes/events-api.html)
- [\u30D5\u30A3\u30EB\u30BF\u30FC](https://v3-migration.vuejs.org/breaking-changes/filters.html)
- [Inline \u30C6\u30F3\u30D7\u30EC\u30FC\u30C8](https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html)
- [\`$children\`](https://v3-migration.vuejs.org/breaking-changes/children.html)
- [\`propsData\`](https://v3-migration.vuejs.org/breaking-changes/props-data.html)
- \`$destroy()\`
- \`Vue.set()\`\u30FB\`Vue.delete()\`

<style>
.sub-3-cols {
  zoom: 60%;
}
</style>
`,title:"Vue3 \u306E Breaking Changes",level:2,content:`## Vue3 \u306E Breaking Changes

\u4EE5\u4E0B\u3067\u306F\u3053\u306E\u3088\u3046\u306B\u8868\u8A18\u3057\u307E\u3059\u3002

::left::

### Global API

- [createApp()\u7B49](https://v3-migration.vuejs.org/breaking-changes/global-api.html)
- [\u540D\u524D\u4ED8\u304D Export](https://v3-migration.vuejs.org/breaking-changes/global-api-treeshaking.html)

### Template Directives

- [\`v-model\`\u306E\`modelValue\`, \`emit('input')\`](https://v3-migration.vuejs.org/breaking-changes/v-model.html)  
  [\`v-bind.sync\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/v-model.html)
- [\`<template v-for>\`\u306E key](https://v3-migration.vuejs.org/breaking-changes/key-attribute.html)
- [\`v-if\`\u30FB\`v-for\` \u306E\u512A\u5148\u5EA6](https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html)
- [\`v-bind="object"\`\u304C\u9806\u5E8F\u306B\u5F71\u97FF](https://v3-migration.vuejs.org/breaking-changes/v-bind.html)
- [\`v-on:event.native\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html)

### Components

- [\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)
- [SFC \u306E\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)
- [\u975E\u540C\u671F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/async-components.html)
- [\`emits\`\u30AA\u30D7\u30B7\u30E7\u30F3](https://v3-migration.vuejs.org/breaking-changes/emits-option.html)

::middle::

### Render Function

- [\`render\`\u95A2\u6570\u306E\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/render-function-api.html)
- [\`$scopedSlots\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)  
  [\`$slots\`\u306E\u95A2\u6570\u5316](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)
- [\`$listeners\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/listeners-removed)
- [\`$attrs\`\u306E\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html)

### Custom Elements

- [\u30AB\u30B9\u30BF\u30E0\u8981\u7D20\u306E\u6271\u3044](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html)
- [\`is\`\u306E\u8A18\u6CD5](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html#customized-built-in-elements)

### Other Minor Changes

- \`unmounted\`
- \`beforeUnmount\`
- [\`default\`\u306E\`this\`](https://v3-migration.vuejs.org/breaking-changes/props-default-this.html)
- [\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/custom-directives.html)
- [\`data\`\u95A2\u6570](https://v3-migration.vuejs.org/breaking-changes/data-option.html)
- [mixin \u306E\`data\`\u306E\u6271\u3044](https://v3-migration.vuejs.org/breaking-changes/data-option.html#mixin-merge-behavior-change)
- [\`:attr=false\`](https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html)

::right::

- [Transition \u30AF\u30E9\u30B9\u540D\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/transition.html)
- [\`<TransitionGroup>\`\u306E\u30EB\u30FC\u30C8\u8981\u7D20](https://v3-migration.vuejs.org/breaking-changes/transition-group.html)
- [\u914D\u5217\u306E watch](https://v3-migration.vuejs.org/breaking-changes/watch.html)
- \u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u7121\u3057\u306E\`<template>\`
- [Vue \u30A2\u30D7\u30EA\u306E\u30EB\u30FC\u30C8](https://v3-migration.vuejs.org/breaking-changes/mount-changes.html)
- [\`hook:\`\u30A4\u30D9\u30F3\u30C8](https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html)

### Removed APIs

- [\`v-on\`\u30AD\u30FC\u4FEE\u98FE\u5B50](https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html)
- [\`$on\`\u30FB\`$off\`\u30FB\`$once\`](https://v3-migration.vuejs.org/breaking-changes/events-api.html)
- [\u30D5\u30A3\u30EB\u30BF\u30FC](https://v3-migration.vuejs.org/breaking-changes/filters.html)
- [Inline \u30C6\u30F3\u30D7\u30EC\u30FC\u30C8](https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html)
- [\`$children\`](https://v3-migration.vuejs.org/breaking-changes/children.html)
- [\`propsData\`](https://v3-migration.vuejs.org/breaking-changes/props-data.html)
- \`$destroy()\`
- \`Vue.set()\`\u30FB\`Vue.delete()\`

<style>
.sub-3-cols {
  zoom: 60%;
}
</style>`,frontmatter:{hideInToc:!0,layout:"sub-3-cols",title:"Vue3 \u306E Breaking Changes"},index:0,start:0,end:83},inline:{raw:`---
src: ./src/03_030.md
---
`,content:"",frontmatter:{},index:9,start:46,end:50},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_030.md",notesHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:p1,meta:{hideInToc:!0,layout:"sub-2-cols",title:"Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B",srcSequence:"./src/03_040.md",slide:{raw:null,title:"Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B",level:2,content:`## Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B

\u{1F49A}: eslint-plugin-vue \u3067\u30C1\u30A7\u30C3\u30AF\u53EF\u80FD / \u{1F527}: \u81EA\u52D5\u4FEE\u6B63\u53EF\u80FD / \u{1F4A1}: \u30A8\u30C7\u30A3\u30BF\u4E0A\u3067\u306E\u63D0\u6848

::left::

|                                                                                                                         |                                              |
| :---------------------------------------------------------------------------------------------------------------------- | :------------------------------------------: |
| [createApp()\u7B49](https://v3-migration.vuejs.org/breaking-changes/global-api.html)                                        |                      \u274C                      |
| [\u540D\u524D\u4ED8\u304D Export](https://v3-migration.vuejs.org/breaking-changes/global-api-treeshaking.html)                          |                      \u274C                      |
| [\`v-model\`\u306E\`modelValue\`, \`emit('input')\`](https://v3-migration.vuejs.org/breaking-changes/v-model.html)                |                   \u{1F49A}\u{1F4A1}(\u203B)                    |
| [\`v-bind.sync\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/v-model.html)                                       |      [\u{1F49A}\u{1F527}][no-deprecated-v-bind-sync]       |
| [\`<template v-for>\`\u306E key](https://v3-migration.vuejs.org/breaking-changes/key-attribute.html)                          |     [\u{1F49A}][no-v-for-template-key-on-child]     |
| [\`v-if\`\u30FB\`v-for\` \u306E\u512A\u5148\u5EA6](https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html)                             |         [\u{1F49A}][no-use-v-if-with-v-for]         |
| [\`v-bind="object"\`\u304C\u9806\u5E8F\u306B\u5F71\u97FF](https://v3-migration.vuejs.org/breaking-changes/v-bind.html)                            |                      \u274C                      |
| [\`v-on:event.native\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html)            |   [\u{1F49A}][no-deprecated-v-on-native-modifier]   |
| [\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)            |                      \u274C                      |
| [SFC \u306E\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)            |   [\u{1F49A}][no-deprecated-functional-template]    |
| [\u975E\u540C\u671F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/async-components.html)                 |                      \u274C                      |
| [\`emits\`\u30AA\u30D7\u30B7\u30E7\u30F3](https://v3-migration.vuejs.org/breaking-changes/emits-option.html)                                  |        [\u{1F49A}\u{1F4A1}][require-explicit-emits]        |
| [\`render\`\u95A2\u6570\u306E\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/render-function-api.html)                          |                      \u274C                      |
| [\`$scopedSlots\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)                            | [\u{1F49A}\u{1F527}][no-deprecated-dollar-scopedslots-api] |
| [\`$slots\`\u306E\u95A2\u6570\u5316](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)                              |       [\u{1F49A}][require-slots-as-functions]       |
| [\`$listeners\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/listeners-removed)                                   |   [\u{1F49A}][no-deprecated-dollar-listeners-api]   |
| [\`$attrs\`\u306E\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html)                       |                      \u274C                      |
| [\u30AB\u30B9\u30BF\u30E0\u8981\u7D20\u306E\u6271\u3044](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html)                      |                      \u274C                      |
| [\`is\`\u306E\u8A18\u6CD5](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html#customized-built-in-elements) |     [\u{1F49A}][no-deprecated-html-element-is]      |
| \`unmounted\`                                                                                                             |  [\u{1F49A}\u{1F4A1}][no-deprecated-destroyed-lifecycle]   |
| \`beforeUnmount\`                                                                                                         |  [\u{1F49A}\u{1F4A1}][no-deprecated-destroyed-lifecycle]   |

[no-deprecated-destroyed-lifecycle]: https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html
[no-deprecated-dollar-listeners-api]: https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html
[no-deprecated-dollar-scopedslots-api]: https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html
[no-deprecated-functional-template]: https://eslint.vuejs.org/rules/no-deprecated-functional-template.html
[no-deprecated-html-element-is]: https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html
[no-deprecated-v-bind-sync]: https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html
[no-deprecated-v-on-native-modifier]: https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html
[no-v-for-template-key-on-child]: https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html
[require-slots-as-functions]: https://eslint.vuejs.org/rules/require-slots-as-functions.html
[require-explicit-emits]: https://eslint.vuejs.org/rules/require-explicit-emits.html
[no-use-v-if-with-v-for]: https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html
[vue/no-restricted-custom-event]: https://eslint.vuejs.org/rules/no-restricted-custom-event.html
[vue/no-restricted-props]: https://eslint.vuejs.org/rules/no-restricted-props.html

::right::

|                                                                                                                      |                                               |
| :------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------: |
| [\`default\`\u306E\`this\`](https://v3-migration.vuejs.org/breaking-changes/props-default-this.html)                         |    [\u{1F49A}][no-deprecated-props-default-this]     |
| [\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/custom-directives.html)             |                      \u274C                       |
| [\`data\`\u95A2\u6570](https://v3-migration.vuejs.org/breaking-changes/data-option.html)                                       | [\u{1F49A}\u{1F527}][no-deprecated-data-object-declaration] |
| [mixin \u306E\`data\`\u306E\u6271\u3044](https://v3-migration.vuejs.org/breaking-changes/data-option.html#mixin-merge-behavior-change) |                      \u274C                       |
| [\`:attr=false\`](https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html)                             |                      \u274C                       |
| [Transition \u30AF\u30E9\u30B9\u540D\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/transition.html)                           |                      \u274C                       |
| [\`<TransitionGroup>\`\u306E\u30EB\u30FC\u30C8\u8981\u7D20](https://v3-migration.vuejs.org/breaking-changes/transition-group.html)             |                      \u274C                       |
| [\u914D\u5217\u306E watch](https://v3-migration.vuejs.org/breaking-changes/watch.html)                                           |                      \u274C                       |
| \u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u7121\u3057\u306E\`<template>\`                                                                                     |            [\u{1F49A}][no-lone-template]             |
| [Vue \u30A2\u30D7\u30EA\u306E\u30EB\u30FC\u30C8](https://v3-migration.vuejs.org/breaking-changes/mount-changes.html)                             |                      \u274C                       |
| [\`hook:\`\u30A4\u30D9\u30F3\u30C8](https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html)                       |                      \u274C                       |
| [\`v-on\`\u30AD\u30FC\u4FEE\u98FE\u5B50](https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html)                           |  [\u{1F49A}\u{1F527}][no-deprecated-v-on-number-modifiers]  |
| [\`$on\`\u30FB\`$off\`\u30FB\`$once\`](https://v3-migration.vuejs.org/breaking-changes/events-api.html)                            |        [\u{1F49A}][no-deprecated-events-api]         |
| [\u30D5\u30A3\u30EB\u30BF\u30FC](https://v3-migration.vuejs.org/breaking-changes/filters.html)                                           |          [\u{1F49A}][no-deprecated-filter]           |
| [Inline \u30C6\u30F3\u30D7\u30EC\u30FC\u30C8](https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html)                |      [\u{1F49A}][no-deprecated-inline-template]      |
| [\`$children\`](https://v3-migration.vuejs.org/breaking-changes/children.html)                                         |                      \u274C                       |
| [\`propsData\`](https://v3-migration.vuejs.org/breaking-changes/props-data.html)                                       |                      \u274C                       |
| \`$destroy()\`                                                                                                         |                      \u274C                       |
| \`Vue.set()\`\u30FB\`Vue.delete()\`                                                                                          |                      \u274C                       |

[no-deprecated-data-object-declaration]: https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html
[no-deprecated-events-api]: https://eslint.vuejs.org/rules/no-deprecated-events-api.html
[no-deprecated-filter]: https://eslint.vuejs.org/rules/no-deprecated-filter.html
[no-deprecated-inline-template]: https://eslint.vuejs.org/rules/no-deprecated-inline-template.html
[no-deprecated-props-default-this]: https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html
[no-deprecated-v-on-number-modifiers]: https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html
[no-lone-template]: https://eslint.vuejs.org/rules/no-lone-template.html

::bottom::

<div class="text-xs">

\u203B \u8A2D\u5B9A\u304C\u5FC5\u8981\u3067\u3059\u3002\u8A73\u7D30\u306F [vue/no-restricted-custom-event]\u3068[vue/no-restricted-props]\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002

</div>

<style>
  .slidev-layout td, .slidev-layout th {
    padding: 0.1rem;
    font-size: 0.7rem;
    line-height: 0.8rem;
  }
  .slidev-layout td code {
    padding: 0;
  }
</style>`,frontmatter:{hideInToc:!0,layout:"sub-2-cols",title:"Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B",srcSequence:"./src/03_040.md"},index:11,start:0,end:100,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_040.md",raw:`---
hideInToc: true
layout: sub-2-cols
---

## Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B

\u{1F49A}: eslint-plugin-vue \u3067\u30C1\u30A7\u30C3\u30AF\u53EF\u80FD / \u{1F527}: \u81EA\u52D5\u4FEE\u6B63\u53EF\u80FD / \u{1F4A1}: \u30A8\u30C7\u30A3\u30BF\u4E0A\u3067\u306E\u63D0\u6848

::left::

|                                                                                                                         |                                              |
| :---------------------------------------------------------------------------------------------------------------------- | :------------------------------------------: |
| [createApp()\u7B49](https://v3-migration.vuejs.org/breaking-changes/global-api.html)                                        |                      \u274C                      |
| [\u540D\u524D\u4ED8\u304D Export](https://v3-migration.vuejs.org/breaking-changes/global-api-treeshaking.html)                          |                      \u274C                      |
| [\`v-model\`\u306E\`modelValue\`, \`emit('input')\`](https://v3-migration.vuejs.org/breaking-changes/v-model.html)                |                   \u{1F49A}\u{1F4A1}(\u203B)                    |
| [\`v-bind.sync\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/v-model.html)                                       |      [\u{1F49A}\u{1F527}][no-deprecated-v-bind-sync]       |
| [\`<template v-for>\`\u306E key](https://v3-migration.vuejs.org/breaking-changes/key-attribute.html)                          |     [\u{1F49A}][no-v-for-template-key-on-child]     |
| [\`v-if\`\u30FB\`v-for\` \u306E\u512A\u5148\u5EA6](https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html)                             |         [\u{1F49A}][no-use-v-if-with-v-for]         |
| [\`v-bind="object"\`\u304C\u9806\u5E8F\u306B\u5F71\u97FF](https://v3-migration.vuejs.org/breaking-changes/v-bind.html)                            |                      \u274C                      |
| [\`v-on:event.native\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html)            |   [\u{1F49A}][no-deprecated-v-on-native-modifier]   |
| [\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)            |                      \u274C                      |
| [SFC \u306E\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)            |   [\u{1F49A}][no-deprecated-functional-template]    |
| [\u975E\u540C\u671F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/async-components.html)                 |                      \u274C                      |
| [\`emits\`\u30AA\u30D7\u30B7\u30E7\u30F3](https://v3-migration.vuejs.org/breaking-changes/emits-option.html)                                  |        [\u{1F49A}\u{1F4A1}][require-explicit-emits]        |
| [\`render\`\u95A2\u6570\u306E\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/render-function-api.html)                          |                      \u274C                      |
| [\`$scopedSlots\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)                            | [\u{1F49A}\u{1F527}][no-deprecated-dollar-scopedslots-api] |
| [\`$slots\`\u306E\u95A2\u6570\u5316](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)                              |       [\u{1F49A}][require-slots-as-functions]       |
| [\`$listeners\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/listeners-removed)                                   |   [\u{1F49A}][no-deprecated-dollar-listeners-api]   |
| [\`$attrs\`\u306E\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html)                       |                      \u274C                      |
| [\u30AB\u30B9\u30BF\u30E0\u8981\u7D20\u306E\u6271\u3044](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html)                      |                      \u274C                      |
| [\`is\`\u306E\u8A18\u6CD5](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html#customized-built-in-elements) |     [\u{1F49A}][no-deprecated-html-element-is]      |
| \`unmounted\`                                                                                                             |  [\u{1F49A}\u{1F4A1}][no-deprecated-destroyed-lifecycle]   |
| \`beforeUnmount\`                                                                                                         |  [\u{1F49A}\u{1F4A1}][no-deprecated-destroyed-lifecycle]   |

[no-deprecated-destroyed-lifecycle]: https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html
[no-deprecated-dollar-listeners-api]: https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html
[no-deprecated-dollar-scopedslots-api]: https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html
[no-deprecated-functional-template]: https://eslint.vuejs.org/rules/no-deprecated-functional-template.html
[no-deprecated-html-element-is]: https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html
[no-deprecated-v-bind-sync]: https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html
[no-deprecated-v-on-native-modifier]: https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html
[no-v-for-template-key-on-child]: https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html
[require-slots-as-functions]: https://eslint.vuejs.org/rules/require-slots-as-functions.html
[require-explicit-emits]: https://eslint.vuejs.org/rules/require-explicit-emits.html
[no-use-v-if-with-v-for]: https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html
[vue/no-restricted-custom-event]: https://eslint.vuejs.org/rules/no-restricted-custom-event.html
[vue/no-restricted-props]: https://eslint.vuejs.org/rules/no-restricted-props.html

::right::

|                                                                                                                      |                                               |
| :------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------: |
| [\`default\`\u306E\`this\`](https://v3-migration.vuejs.org/breaking-changes/props-default-this.html)                         |    [\u{1F49A}][no-deprecated-props-default-this]     |
| [\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/custom-directives.html)             |                      \u274C                       |
| [\`data\`\u95A2\u6570](https://v3-migration.vuejs.org/breaking-changes/data-option.html)                                       | [\u{1F49A}\u{1F527}][no-deprecated-data-object-declaration] |
| [mixin \u306E\`data\`\u306E\u6271\u3044](https://v3-migration.vuejs.org/breaking-changes/data-option.html#mixin-merge-behavior-change) |                      \u274C                       |
| [\`:attr=false\`](https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html)                             |                      \u274C                       |
| [Transition \u30AF\u30E9\u30B9\u540D\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/transition.html)                           |                      \u274C                       |
| [\`<TransitionGroup>\`\u306E\u30EB\u30FC\u30C8\u8981\u7D20](https://v3-migration.vuejs.org/breaking-changes/transition-group.html)             |                      \u274C                       |
| [\u914D\u5217\u306E watch](https://v3-migration.vuejs.org/breaking-changes/watch.html)                                           |                      \u274C                       |
| \u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u7121\u3057\u306E\`<template>\`                                                                                     |            [\u{1F49A}][no-lone-template]             |
| [Vue \u30A2\u30D7\u30EA\u306E\u30EB\u30FC\u30C8](https://v3-migration.vuejs.org/breaking-changes/mount-changes.html)                             |                      \u274C                       |
| [\`hook:\`\u30A4\u30D9\u30F3\u30C8](https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html)                       |                      \u274C                       |
| [\`v-on\`\u30AD\u30FC\u4FEE\u98FE\u5B50](https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html)                           |  [\u{1F49A}\u{1F527}][no-deprecated-v-on-number-modifiers]  |
| [\`$on\`\u30FB\`$off\`\u30FB\`$once\`](https://v3-migration.vuejs.org/breaking-changes/events-api.html)                            |        [\u{1F49A}][no-deprecated-events-api]         |
| [\u30D5\u30A3\u30EB\u30BF\u30FC](https://v3-migration.vuejs.org/breaking-changes/filters.html)                                           |          [\u{1F49A}][no-deprecated-filter]           |
| [Inline \u30C6\u30F3\u30D7\u30EC\u30FC\u30C8](https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html)                |      [\u{1F49A}][no-deprecated-inline-template]      |
| [\`$children\`](https://v3-migration.vuejs.org/breaking-changes/children.html)                                         |                      \u274C                       |
| [\`propsData\`](https://v3-migration.vuejs.org/breaking-changes/props-data.html)                                       |                      \u274C                       |
| \`$destroy()\`                                                                                                         |                      \u274C                       |
| \`Vue.set()\`\u30FB\`Vue.delete()\`                                                                                          |                      \u274C                       |

[no-deprecated-data-object-declaration]: https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html
[no-deprecated-events-api]: https://eslint.vuejs.org/rules/no-deprecated-events-api.html
[no-deprecated-filter]: https://eslint.vuejs.org/rules/no-deprecated-filter.html
[no-deprecated-inline-template]: https://eslint.vuejs.org/rules/no-deprecated-inline-template.html
[no-deprecated-props-default-this]: https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html
[no-deprecated-v-on-number-modifiers]: https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html
[no-lone-template]: https://eslint.vuejs.org/rules/no-lone-template.html

::bottom::

<div class="text-xs">

\u203B \u8A2D\u5B9A\u304C\u5FC5\u8981\u3067\u3059\u3002\u8A73\u7D30\u306F [vue/no-restricted-custom-event]\u3068[vue/no-restricted-props]\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002

</div>

<style>
  .slidev-layout td, .slidev-layout th {
    padding: 0.1rem;
    font-size: 0.7rem;
    line-height: 0.8rem;
  }
  .slidev-layout td code {
    padding: 0;
  }
</style>
`,title:"Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B",level:2,content:`## Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B

\u{1F49A}: eslint-plugin-vue \u3067\u30C1\u30A7\u30C3\u30AF\u53EF\u80FD / \u{1F527}: \u81EA\u52D5\u4FEE\u6B63\u53EF\u80FD / \u{1F4A1}: \u30A8\u30C7\u30A3\u30BF\u4E0A\u3067\u306E\u63D0\u6848

::left::

|                                                                                                                         |                                              |
| :---------------------------------------------------------------------------------------------------------------------- | :------------------------------------------: |
| [createApp()\u7B49](https://v3-migration.vuejs.org/breaking-changes/global-api.html)                                        |                      \u274C                      |
| [\u540D\u524D\u4ED8\u304D Export](https://v3-migration.vuejs.org/breaking-changes/global-api-treeshaking.html)                          |                      \u274C                      |
| [\`v-model\`\u306E\`modelValue\`, \`emit('input')\`](https://v3-migration.vuejs.org/breaking-changes/v-model.html)                |                   \u{1F49A}\u{1F4A1}(\u203B)                    |
| [\`v-bind.sync\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/v-model.html)                                       |      [\u{1F49A}\u{1F527}][no-deprecated-v-bind-sync]       |
| [\`<template v-for>\`\u306E key](https://v3-migration.vuejs.org/breaking-changes/key-attribute.html)                          |     [\u{1F49A}][no-v-for-template-key-on-child]     |
| [\`v-if\`\u30FB\`v-for\` \u306E\u512A\u5148\u5EA6](https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html)                             |         [\u{1F49A}][no-use-v-if-with-v-for]         |
| [\`v-bind="object"\`\u304C\u9806\u5E8F\u306B\u5F71\u97FF](https://v3-migration.vuejs.org/breaking-changes/v-bind.html)                            |                      \u274C                      |
| [\`v-on:event.native\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html)            |   [\u{1F49A}][no-deprecated-v-on-native-modifier]   |
| [\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)            |                      \u274C                      |
| [SFC \u306E\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)            |   [\u{1F49A}][no-deprecated-functional-template]    |
| [\u975E\u540C\u671F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/async-components.html)                 |                      \u274C                      |
| [\`emits\`\u30AA\u30D7\u30B7\u30E7\u30F3](https://v3-migration.vuejs.org/breaking-changes/emits-option.html)                                  |        [\u{1F49A}\u{1F4A1}][require-explicit-emits]        |
| [\`render\`\u95A2\u6570\u306E\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/render-function-api.html)                          |                      \u274C                      |
| [\`$scopedSlots\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)                            | [\u{1F49A}\u{1F527}][no-deprecated-dollar-scopedslots-api] |
| [\`$slots\`\u306E\u95A2\u6570\u5316](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)                              |       [\u{1F49A}][require-slots-as-functions]       |
| [\`$listeners\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/listeners-removed)                                   |   [\u{1F49A}][no-deprecated-dollar-listeners-api]   |
| [\`$attrs\`\u306E\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html)                       |                      \u274C                      |
| [\u30AB\u30B9\u30BF\u30E0\u8981\u7D20\u306E\u6271\u3044](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html)                      |                      \u274C                      |
| [\`is\`\u306E\u8A18\u6CD5](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html#customized-built-in-elements) |     [\u{1F49A}][no-deprecated-html-element-is]      |
| \`unmounted\`                                                                                                             |  [\u{1F49A}\u{1F4A1}][no-deprecated-destroyed-lifecycle]   |
| \`beforeUnmount\`                                                                                                         |  [\u{1F49A}\u{1F4A1}][no-deprecated-destroyed-lifecycle]   |

[no-deprecated-destroyed-lifecycle]: https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html
[no-deprecated-dollar-listeners-api]: https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html
[no-deprecated-dollar-scopedslots-api]: https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html
[no-deprecated-functional-template]: https://eslint.vuejs.org/rules/no-deprecated-functional-template.html
[no-deprecated-html-element-is]: https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html
[no-deprecated-v-bind-sync]: https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html
[no-deprecated-v-on-native-modifier]: https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html
[no-v-for-template-key-on-child]: https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html
[require-slots-as-functions]: https://eslint.vuejs.org/rules/require-slots-as-functions.html
[require-explicit-emits]: https://eslint.vuejs.org/rules/require-explicit-emits.html
[no-use-v-if-with-v-for]: https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html
[vue/no-restricted-custom-event]: https://eslint.vuejs.org/rules/no-restricted-custom-event.html
[vue/no-restricted-props]: https://eslint.vuejs.org/rules/no-restricted-props.html

::right::

|                                                                                                                      |                                               |
| :------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------: |
| [\`default\`\u306E\`this\`](https://v3-migration.vuejs.org/breaking-changes/props-default-this.html)                         |    [\u{1F49A}][no-deprecated-props-default-this]     |
| [\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/custom-directives.html)             |                      \u274C                       |
| [\`data\`\u95A2\u6570](https://v3-migration.vuejs.org/breaking-changes/data-option.html)                                       | [\u{1F49A}\u{1F527}][no-deprecated-data-object-declaration] |
| [mixin \u306E\`data\`\u306E\u6271\u3044](https://v3-migration.vuejs.org/breaking-changes/data-option.html#mixin-merge-behavior-change) |                      \u274C                       |
| [\`:attr=false\`](https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html)                             |                      \u274C                       |
| [Transition \u30AF\u30E9\u30B9\u540D\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/transition.html)                           |                      \u274C                       |
| [\`<TransitionGroup>\`\u306E\u30EB\u30FC\u30C8\u8981\u7D20](https://v3-migration.vuejs.org/breaking-changes/transition-group.html)             |                      \u274C                       |
| [\u914D\u5217\u306E watch](https://v3-migration.vuejs.org/breaking-changes/watch.html)                                           |                      \u274C                       |
| \u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u7121\u3057\u306E\`<template>\`                                                                                     |            [\u{1F49A}][no-lone-template]             |
| [Vue \u30A2\u30D7\u30EA\u306E\u30EB\u30FC\u30C8](https://v3-migration.vuejs.org/breaking-changes/mount-changes.html)                             |                      \u274C                       |
| [\`hook:\`\u30A4\u30D9\u30F3\u30C8](https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html)                       |                      \u274C                       |
| [\`v-on\`\u30AD\u30FC\u4FEE\u98FE\u5B50](https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html)                           |  [\u{1F49A}\u{1F527}][no-deprecated-v-on-number-modifiers]  |
| [\`$on\`\u30FB\`$off\`\u30FB\`$once\`](https://v3-migration.vuejs.org/breaking-changes/events-api.html)                            |        [\u{1F49A}][no-deprecated-events-api]         |
| [\u30D5\u30A3\u30EB\u30BF\u30FC](https://v3-migration.vuejs.org/breaking-changes/filters.html)                                           |          [\u{1F49A}][no-deprecated-filter]           |
| [Inline \u30C6\u30F3\u30D7\u30EC\u30FC\u30C8](https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html)                |      [\u{1F49A}][no-deprecated-inline-template]      |
| [\`$children\`](https://v3-migration.vuejs.org/breaking-changes/children.html)                                         |                      \u274C                       |
| [\`propsData\`](https://v3-migration.vuejs.org/breaking-changes/props-data.html)                                       |                      \u274C                       |
| \`$destroy()\`                                                                                                         |                      \u274C                       |
| \`Vue.set()\`\u30FB\`Vue.delete()\`                                                                                          |                      \u274C                       |

[no-deprecated-data-object-declaration]: https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html
[no-deprecated-events-api]: https://eslint.vuejs.org/rules/no-deprecated-events-api.html
[no-deprecated-filter]: https://eslint.vuejs.org/rules/no-deprecated-filter.html
[no-deprecated-inline-template]: https://eslint.vuejs.org/rules/no-deprecated-inline-template.html
[no-deprecated-props-default-this]: https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html
[no-deprecated-v-on-number-modifiers]: https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html
[no-lone-template]: https://eslint.vuejs.org/rules/no-lone-template.html

::bottom::

<div class="text-xs">

\u203B \u8A2D\u5B9A\u304C\u5FC5\u8981\u3067\u3059\u3002\u8A73\u7D30\u306F [vue/no-restricted-custom-event]\u3068[vue/no-restricted-props]\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002

</div>

<style>
  .slidev-layout td, .slidev-layout th {
    padding: 0.1rem;
    font-size: 0.7rem;
    line-height: 0.8rem;
  }
  .slidev-layout td code {
    padding: 0;
  }
</style>`,frontmatter:{hideInToc:!0,layout:"sub-2-cols",title:"Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B"},index:0,start:0,end:100},inline:{raw:`---
src: ./src/03_040.md
---
`,content:"",frontmatter:{},index:10,start:50,end:54},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_040.md",notesHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:g1,meta:{layout:"section",hideInToc:!0,title:"\u534A\u5206\u3057\u304B\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u306A\u3044\uFF1F<br>\u{1F914}",srcSequence:"./src/03_043.md",slide:{raw:null,title:"\u534A\u5206\u3057\u304B\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u306A\u3044\uFF1F<br>\u{1F914}",level:1,content:"# \u534A\u5206\u3057\u304B\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u306A\u3044\uFF1F<br>\u{1F914}",frontmatter:{layout:"section",hideInToc:!0,title:"\u534A\u5206\u3057\u304B\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u306A\u3044\uFF1F<br>\u{1F914}",srcSequence:"./src/03_043.md"},index:12,start:0,end:7,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_043.md",raw:`---
layout: section
hideInToc: true
---

# \u534A\u5206\u3057\u304B\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u306A\u3044\uFF1F<br>\u{1F914}
`,title:"\u534A\u5206\u3057\u304B\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u306A\u3044\uFF1F<br>\u{1F914}",level:1,content:"# \u534A\u5206\u3057\u304B\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u306A\u3044\uFF1F<br>\u{1F914}",frontmatter:{layout:"section",hideInToc:!0,title:"\u534A\u5206\u3057\u304B\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u306A\u3044\uFF1F<br>\u{1F914}"},index:0,start:0,end:7},inline:{raw:`---
src: ./src/03_043.md
---
`,content:"",frontmatter:{},index:11,start:54,end:58},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_043.md",notesHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:f1,meta:{layout:"section",hideInToc:!0,title:"\u307E\u3060\u307E\u3060\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u307E\u3059\uFF01<br>\u{1F606}",srcSequence:"./src/03_045.md",slide:{raw:null,title:"\u307E\u3060\u307E\u3060\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u307E\u3059\uFF01<br>\u{1F606}",level:1,content:"# \u307E\u3060\u307E\u3060\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u307E\u3059\uFF01<br>\u{1F606}",frontmatter:{layout:"section",hideInToc:!0,title:"\u307E\u3060\u307E\u3060\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u307E\u3059\uFF01<br>\u{1F606}",srcSequence:"./src/03_045.md"},index:13,start:0,end:7,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_045.md",raw:`---
layout: section
hideInToc: true
---

# \u307E\u3060\u307E\u3060\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u307E\u3059\uFF01<br>\u{1F606}
`,title:"\u307E\u3060\u307E\u3060\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u307E\u3059\uFF01<br>\u{1F606}",level:1,content:"# \u307E\u3060\u307E\u3060\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u307E\u3059\uFF01<br>\u{1F606}",frontmatter:{layout:"section",hideInToc:!0,title:"\u307E\u3060\u307E\u3060\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u307E\u3059\uFF01<br>\u{1F606}"},index:0,start:0,end:7},inline:{raw:`---
src: ./src/03_045.md
---
`,content:"",frontmatter:{},index:12,start:58,end:62},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_045.md",notesHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:w1,meta:{hideInToc:!0,layout:"sub-2-cols",title:"`$children`\u3001`$destroy()`\u3082\u30C1\u30A7\u30C3\u30AF\u3059\u308B",srcSequence:"./src/03_050.md",slide:{raw:null,title:"`$children`\u3001`$destroy()`\u3082\u30C1\u30A7\u30C3\u30AF\u3059\u308B",level:2,content:`## \`$children\`\u3001\`$destroy()\`\u3082\u30C1\u30A7\u30C3\u30AF\u3059\u308B

\u30D7\u30E9\u30B0\u30A4\u30F3\u3067\u306F\u306A\u304F ESLint \u672C\u4F53\u306B\u4ED8\u5C5E\u3057\u3066\u3044\u308B\u30EB\u30FC\u30EB\u306B\u3001  
\u4EFB\u610F\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u308B\u30EB\u30FC\u30EB\u304C\u3042\u308B\u306E\u3067\u3001\u305D\u308C\u3092\u4F7F\u7528\u3057\u3066\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u307E\u3059\u3002

<https://eslint.org/docs/latest/rules/no-restricted-properties>

::left::

\`\`\`js
module.exports = {
  // ...
  rules: {
    // ...
    "no-restricted-properties": [
      "error",
      {
        property: "$children",
        message: "\u5EC3\u6B62\u3055\u308C\u305F\u30D7\u30ED\u30D1\u30C6\u30A3\u3067\u3059",
      },
      {
        property: "$destroy",
        message: "\u5EC3\u6B62\u3055\u308C\u305F\u30E1\u30BD\u30C3\u30C9\u3067\u3059",
      },
    ],
    // ...
  },
  // ...
};
\`\`\`

::right::

![\`$children\`\u306E\u30C1\u30A7\u30C3\u30AF](/check-$children.png)

<img src="https://github.com/eslint.png" alt="ESLint" style="width: 150px; margin: auto;">`,frontmatter:{hideInToc:!0,layout:"sub-2-cols",title:"`$children`\u3001`$destroy()`\u3082\u30C1\u30A7\u30C3\u30AF\u3059\u308B",srcSequence:"./src/03_050.md"},index:14,start:0,end:42,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_050.md",raw:`---
hideInToc: true
layout: sub-2-cols
---

## \`$children\`\u3001\`$destroy()\`\u3082\u30C1\u30A7\u30C3\u30AF\u3059\u308B

\u30D7\u30E9\u30B0\u30A4\u30F3\u3067\u306F\u306A\u304F ESLint \u672C\u4F53\u306B\u4ED8\u5C5E\u3057\u3066\u3044\u308B\u30EB\u30FC\u30EB\u306B\u3001  
\u4EFB\u610F\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u308B\u30EB\u30FC\u30EB\u304C\u3042\u308B\u306E\u3067\u3001\u305D\u308C\u3092\u4F7F\u7528\u3057\u3066\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u307E\u3059\u3002

<https://eslint.org/docs/latest/rules/no-restricted-properties>

::left::

\`\`\`js
module.exports = {
  // ...
  rules: {
    // ...
    "no-restricted-properties": [
      "error",
      {
        property: "$children",
        message: "\u5EC3\u6B62\u3055\u308C\u305F\u30D7\u30ED\u30D1\u30C6\u30A3\u3067\u3059",
      },
      {
        property: "$destroy",
        message: "\u5EC3\u6B62\u3055\u308C\u305F\u30E1\u30BD\u30C3\u30C9\u3067\u3059",
      },
    ],
    // ...
  },
  // ...
};
\`\`\`

::right::

![\`$children\`\u306E\u30C1\u30A7\u30C3\u30AF](/check-$children.png)

<img src="https://github.com/eslint.png" alt="ESLint" style="width: 150px; margin: auto;">
`,title:"`$children`\u3001`$destroy()`\u3082\u30C1\u30A7\u30C3\u30AF\u3059\u308B",level:2,content:`## \`$children\`\u3001\`$destroy()\`\u3082\u30C1\u30A7\u30C3\u30AF\u3059\u308B

\u30D7\u30E9\u30B0\u30A4\u30F3\u3067\u306F\u306A\u304F ESLint \u672C\u4F53\u306B\u4ED8\u5C5E\u3057\u3066\u3044\u308B\u30EB\u30FC\u30EB\u306B\u3001  
\u4EFB\u610F\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u308B\u30EB\u30FC\u30EB\u304C\u3042\u308B\u306E\u3067\u3001\u305D\u308C\u3092\u4F7F\u7528\u3057\u3066\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u307E\u3059\u3002

<https://eslint.org/docs/latest/rules/no-restricted-properties>

::left::

\`\`\`js
module.exports = {
  // ...
  rules: {
    // ...
    "no-restricted-properties": [
      "error",
      {
        property: "$children",
        message: "\u5EC3\u6B62\u3055\u308C\u305F\u30D7\u30ED\u30D1\u30C6\u30A3\u3067\u3059",
      },
      {
        property: "$destroy",
        message: "\u5EC3\u6B62\u3055\u308C\u305F\u30E1\u30BD\u30C3\u30C9\u3067\u3059",
      },
    ],
    // ...
  },
  // ...
};
\`\`\`

::right::

![\`$children\`\u306E\u30C1\u30A7\u30C3\u30AF](/check-$children.png)

<img src="https://github.com/eslint.png" alt="ESLint" style="width: 150px; margin: auto;">`,frontmatter:{hideInToc:!0,layout:"sub-2-cols",title:"`$children`\u3001`$destroy()`\u3082\u30C1\u30A7\u30C3\u30AF\u3059\u308B"},index:0,start:0,end:42},inline:{raw:`---
src: ./src/03_050.md
---
`,content:"",frontmatter:{},index:13,start:62,end:66},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_050.md",notesHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:I1,meta:{hideInToc:!0,layout:"sub-2-cols",title:"`import Vue from 'vue'`\u3082\u30C1\u30A7\u30C3\u30AF\u3059\u308B",srcSequence:"./src/03_055.md",slide:{raw:null,title:"`import Vue from 'vue'`\u3082\u30C1\u30A7\u30C3\u30AF\u3059\u308B",level:2,content:`## \`import Vue from 'vue'\`\u3082\u30C1\u30A7\u30C3\u30AF\u3059\u308B

ESLint \u672C\u4F53\u306B\u4ED8\u5C5E\u3057\u3066\u3044\u308B\u30EB\u30FC\u30EB\u306B\u3001\u4EFB\u610F\u306E\`import\`\u3092\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u308B\u30EB\u30FC\u30EB\u304C\u3042\u308B\u306E\u3067\u3001  
\u305D\u308C\u3092\u4F7F\u7528\u3057\u3066\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u307E\u3059\u3002

<https://eslint.org/docs/latest/rules/no-restricted-imports>

::left::

\`\`\`js
module.exports = {
  // ...
  rules: {
    // ...
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "vue",
            importNames: ["default"],
            message: "\u540D\u524D\u4ED8\u304DImport\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
          },
        ],
      },
    ],
    // ...
  },
  // ...
};
\`\`\`

::right::

![no-restricted-imports](/no-restricted-imports.png)

<img src="https://github.com/eslint.png" alt="ESLint" style="width: 150px; padding-top: 71px; margin: auto;">`,frontmatter:{hideInToc:!0,layout:"sub-2-cols",title:"`import Vue from 'vue'`\u3082\u30C1\u30A7\u30C3\u30AF\u3059\u308B",srcSequence:"./src/03_055.md"},index:15,start:0,end:43,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_055.md",raw:`---
hideInToc: true
layout: sub-2-cols
---

## \`import Vue from 'vue'\`\u3082\u30C1\u30A7\u30C3\u30AF\u3059\u308B

ESLint \u672C\u4F53\u306B\u4ED8\u5C5E\u3057\u3066\u3044\u308B\u30EB\u30FC\u30EB\u306B\u3001\u4EFB\u610F\u306E\`import\`\u3092\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u308B\u30EB\u30FC\u30EB\u304C\u3042\u308B\u306E\u3067\u3001  
\u305D\u308C\u3092\u4F7F\u7528\u3057\u3066\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u307E\u3059\u3002

<https://eslint.org/docs/latest/rules/no-restricted-imports>

::left::

\`\`\`js
module.exports = {
  // ...
  rules: {
    // ...
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "vue",
            importNames: ["default"],
            message: "\u540D\u524D\u4ED8\u304DImport\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
          },
        ],
      },
    ],
    // ...
  },
  // ...
};
\`\`\`

::right::

![no-restricted-imports](/no-restricted-imports.png)

<img src="https://github.com/eslint.png" alt="ESLint" style="width: 150px; padding-top: 71px; margin: auto;">
`,title:"`import Vue from 'vue'`\u3082\u30C1\u30A7\u30C3\u30AF\u3059\u308B",level:2,content:`## \`import Vue from 'vue'\`\u3082\u30C1\u30A7\u30C3\u30AF\u3059\u308B

ESLint \u672C\u4F53\u306B\u4ED8\u5C5E\u3057\u3066\u3044\u308B\u30EB\u30FC\u30EB\u306B\u3001\u4EFB\u610F\u306E\`import\`\u3092\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u308B\u30EB\u30FC\u30EB\u304C\u3042\u308B\u306E\u3067\u3001  
\u305D\u308C\u3092\u4F7F\u7528\u3057\u3066\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u307E\u3059\u3002

<https://eslint.org/docs/latest/rules/no-restricted-imports>

::left::

\`\`\`js
module.exports = {
  // ...
  rules: {
    // ...
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "vue",
            importNames: ["default"],
            message: "\u540D\u524D\u4ED8\u304DImport\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
          },
        ],
      },
    ],
    // ...
  },
  // ...
};
\`\`\`

::right::

![no-restricted-imports](/no-restricted-imports.png)

<img src="https://github.com/eslint.png" alt="ESLint" style="width: 150px; padding-top: 71px; margin: auto;">`,frontmatter:{hideInToc:!0,layout:"sub-2-cols",title:"`import Vue from 'vue'`\u3082\u30C1\u30A7\u30C3\u30AF\u3059\u308B"},index:0,start:0,end:43},inline:{raw:`---
src: ./src/03_055.md
---
`,content:"",frontmatter:{},index:14,start:66,end:70},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_055.md",notesHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:q1,meta:{hideInToc:!0,layout:"sub-2-cols",clicks:1,title:"Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B",srcSequence:"./src/03_060.md",slide:{raw:null,title:"Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B",level:2,content:`## Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B

\u{1F49A}, \u{1F499}: eslint-plugin-vue, ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u53EF\u80FD / \u{1F527}: \u81EA\u52D5\u4FEE\u6B63\u53EF\u80FD / \u{1F4A1}: \u30A8\u30C7\u30A3\u30BF\u4E0A\u3067\u306E\u63D0\u6848

::left::

<highlight-table highlight-rows="7, 9, 11, 13, 17, 18" :on="$slidev.nav.clicks === 1">

|                                                                                                                         |                                              |
| :---------------------------------------------------------------------------------------------------------------------- | :------------------------------------------: |
| [createApp()\u7B49](https://v3-migration.vuejs.org/breaking-changes/global-api.html)                                        |         [\u{1F499}][no-restricted-imports]          |
| [\u540D\u524D\u4ED8\u304D Export](https://v3-migration.vuejs.org/breaking-changes/global-api-treeshaking.html)                          |         [\u{1F499}][no-restricted-imports]          |
| [\`v-model\`\u306E\`modelValue\`, \`emit('input')\`](https://v3-migration.vuejs.org/breaking-changes/v-model.html)                |                     \u{1F49A}\u{1F4A1}                     |
| [\`v-bind.sync\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/v-model.html)                                       |      [\u{1F49A}\u{1F527}][no-deprecated-v-bind-sync]       |
| [\`<template v-for>\`\u306E key](https://v3-migration.vuejs.org/breaking-changes/key-attribute.html)                          |     [\u{1F49A}][no-v-for-template-key-on-child]     |
| [\`v-if\`\u30FB\`v-for\` \u306E\u512A\u5148\u5EA6](https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html)                             |         [\u{1F49A}][no-use-v-if-with-v-for]         |
| [\`v-bind="object"\`\u304C\u9806\u5E8F\u306B\u5F71\u97FF](https://v3-migration.vuejs.org/breaking-changes/v-bind.html)                            |                      \u274C                      |
| [\`v-on:event.native\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html)            |   [\u{1F49A}][no-deprecated-v-on-native-modifier]   |
| [\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)            |                      \u274C                      |
| [SFC \u306E\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)            |   [\u{1F49A}][no-deprecated-functional-template]    |
| [\u975E\u540C\u671F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/async-components.html)                 |                      \u274C                      |
| [\`emits\`\u30AA\u30D7\u30B7\u30E7\u30F3](https://v3-migration.vuejs.org/breaking-changes/emits-option.html)                                  |        [\u{1F49A}\u{1F4A1}][require-explicit-emits]        |
| [\`render\`\u95A2\u6570\u306E\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/render-function-api.html)                          |                      \u274C                      |
| [\`$scopedSlots\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)                            | [\u{1F49A}\u{1F527}][no-deprecated-dollar-scopedslots-api] |
| [\`$slots\`\u306E\u95A2\u6570\u5316](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)                              |       [\u{1F49A}][require-slots-as-functions]       |
| [\`$listeners\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/listeners-removed)                                   |   [\u{1F49A}][no-deprecated-dollar-listeners-api]   |
| [\`$attrs\`\u306E\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html)                       |                      \u274C                      |
| [\u30AB\u30B9\u30BF\u30E0\u8981\u7D20\u306E\u6271\u3044](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html)                      |                      \u274C                      |
| [\`is\`\u306E\u8A18\u6CD5](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html#customized-built-in-elements) |     [\u{1F49A}][no-deprecated-html-element-is]      |
| \`unmounted\`                                                                                                             |  [\u{1F49A}\u{1F4A1}][no-deprecated-destroyed-lifecycle]   |
| \`beforeUnmount\`                                                                                                         |  [\u{1F49A}\u{1F4A1}][no-deprecated-destroyed-lifecycle]   |

</highlight-table>

[no-deprecated-destroyed-lifecycle]: https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html
[no-deprecated-dollar-listeners-api]: https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html
[no-deprecated-dollar-scopedslots-api]: https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html
[no-deprecated-functional-template]: https://eslint.vuejs.org/rules/no-deprecated-functional-template.html
[no-deprecated-html-element-is]: https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html
[no-deprecated-v-bind-sync]: https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html
[no-deprecated-v-on-native-modifier]: https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html
[no-v-for-template-key-on-child]: https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html
[require-slots-as-functions]: https://eslint.vuejs.org/rules/require-slots-as-functions.html
[require-explicit-emits]: https://eslint.vuejs.org/rules/require-explicit-emits.html
[no-use-v-if-with-v-for]: https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html
[no-restricted-custom-event]: https://eslint.vuejs.org/rules/no-restricted-custom-event.html
[no-restricted-props]: https://eslint.vuejs.org/rules/no-restricted-props.html
[no-restricted-imports]: https://eslint.org/docs/latest/rules/no-restricted-imports

::right::

<highlight-table highlight-rows="2, 4-8, 10, 11, 17" :on="$slidev.nav.clicks === 1">

|                                                                                                                      |                                               |
| :------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------: |
| [\`default\`\u306E\`this\`](https://v3-migration.vuejs.org/breaking-changes/props-default-this.html)                         |    [\u{1F49A}][no-deprecated-props-default-this]     |
| [\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/custom-directives.html)             |                      \u274C                       |
| [\`data\`\u95A2\u6570](https://v3-migration.vuejs.org/breaking-changes/data-option.html)                                       | [\u{1F49A}\u{1F527}][no-deprecated-data-object-declaration] |
| [mixin \u306E\`data\`\u306E\u6271\u3044](https://v3-migration.vuejs.org/breaking-changes/data-option.html#mixin-merge-behavior-change) |                      \u274C                       |
| [\`:attr=false\`](https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html)                             |                      \u274C                       |
| [Transition \u30AF\u30E9\u30B9\u540D\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/transition.html)                           |                      \u274C                       |
| [\`<TransitionGroup>\`\u306E\u30EB\u30FC\u30C8\u8981\u7D20](https://v3-migration.vuejs.org/breaking-changes/transition-group.html)             |                      \u274C                       |
| [\u914D\u5217\u306E watch](https://v3-migration.vuejs.org/breaking-changes/watch.html)                                           |                      \u274C                       |
| \u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u7121\u3057\u306E\`<template>\`                                                                                     |            [\u{1F49A}][no-lone-template]             |
| [Vue \u30A2\u30D7\u30EA\u306E\u30EB\u30FC\u30C8](https://v3-migration.vuejs.org/breaking-changes/mount-changes.html)                             |                      \u274C                       |
| [\`hook:\`\u30A4\u30D9\u30F3\u30C8](https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html)                       |                      \u274C                       |
| [\`v-on\`\u30AD\u30FC\u4FEE\u98FE\u5B50](https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html)                           |  [\u{1F49A}\u{1F527}][no-deprecated-v-on-number-modifiers]  |
| [\`$on\`\u30FB\`$off\`\u30FB\`$once\`](https://v3-migration.vuejs.org/breaking-changes/events-api.html)                            |        [\u{1F49A}][no-deprecated-events-api]         |
| [\u30D5\u30A3\u30EB\u30BF\u30FC](https://v3-migration.vuejs.org/breaking-changes/filters.html)                                           |          [\u{1F49A}][no-deprecated-filter]           |
| [Inline \u30C6\u30F3\u30D7\u30EC\u30FC\u30C8](https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html)                |      [\u{1F49A}][no-deprecated-inline-template]      |
| [\`$children\`](https://v3-migration.vuejs.org/breaking-changes/children.html)                                         |        [\u{1F499}][no-restricted-properties]         |
| [\`propsData\`](https://v3-migration.vuejs.org/breaking-changes/props-data.html)                                       |                      \u274C                       |
| \`$destroy()\`                                                                                                         |        [\u{1F499}][no-restricted-properties]         |
| \`Vue.set()\`\u30FB\`Vue.delete()\`                                                                                          |          [\u{1F499}][no-restricted-imports]          |

</highlight-table>

[no-deprecated-data-object-declaration]: https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html
[no-deprecated-events-api]: https://eslint.vuejs.org/rules/no-deprecated-events-api.html
[no-deprecated-filter]: https://eslint.vuejs.org/rules/no-deprecated-filter.html
[no-deprecated-inline-template]: https://eslint.vuejs.org/rules/no-deprecated-inline-template.html
[no-deprecated-props-default-this]: https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html
[no-deprecated-v-on-number-modifiers]: https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html
[no-lone-template]: https://eslint.vuejs.org/rules/no-lone-template.html
[no-restricted-properties]: https://eslint.org/docs/latest/rules/no-restricted-properties

<div class="text-xs">

25 / 40 \u534A\u5206\u4EE5\u4E0A\u304C\u30C1\u30A7\u30C3\u30AF\u53EF\u80FD

</div>

<style>
  .slidev-layout td, .slidev-layout th {
    padding: 0.1rem;
    font-size: 0.7rem;
    line-height: 0.8rem;
  }
  .slidev-layout td code {
    padding: 0;
  }
  tr {
    transition: opacity 200ms ease-in-out;
  }
</style>`,frontmatter:{hideInToc:!0,layout:"sub-2-cols",clicks:1,title:"Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B",srcSequence:"./src/03_060.md"},index:16,start:0,end:112,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_060.md",raw:`---
hideInToc: true
layout: sub-2-cols
clicks: 1
---

## Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B

\u{1F49A}, \u{1F499}: eslint-plugin-vue, ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u53EF\u80FD / \u{1F527}: \u81EA\u52D5\u4FEE\u6B63\u53EF\u80FD / \u{1F4A1}: \u30A8\u30C7\u30A3\u30BF\u4E0A\u3067\u306E\u63D0\u6848

::left::

<highlight-table highlight-rows="7, 9, 11, 13, 17, 18" :on="$slidev.nav.clicks === 1">

|                                                                                                                         |                                              |
| :---------------------------------------------------------------------------------------------------------------------- | :------------------------------------------: |
| [createApp()\u7B49](https://v3-migration.vuejs.org/breaking-changes/global-api.html)                                        |         [\u{1F499}][no-restricted-imports]          |
| [\u540D\u524D\u4ED8\u304D Export](https://v3-migration.vuejs.org/breaking-changes/global-api-treeshaking.html)                          |         [\u{1F499}][no-restricted-imports]          |
| [\`v-model\`\u306E\`modelValue\`, \`emit('input')\`](https://v3-migration.vuejs.org/breaking-changes/v-model.html)                |                     \u{1F49A}\u{1F4A1}                     |
| [\`v-bind.sync\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/v-model.html)                                       |      [\u{1F49A}\u{1F527}][no-deprecated-v-bind-sync]       |
| [\`<template v-for>\`\u306E key](https://v3-migration.vuejs.org/breaking-changes/key-attribute.html)                          |     [\u{1F49A}][no-v-for-template-key-on-child]     |
| [\`v-if\`\u30FB\`v-for\` \u306E\u512A\u5148\u5EA6](https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html)                             |         [\u{1F49A}][no-use-v-if-with-v-for]         |
| [\`v-bind="object"\`\u304C\u9806\u5E8F\u306B\u5F71\u97FF](https://v3-migration.vuejs.org/breaking-changes/v-bind.html)                            |                      \u274C                      |
| [\`v-on:event.native\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html)            |   [\u{1F49A}][no-deprecated-v-on-native-modifier]   |
| [\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)            |                      \u274C                      |
| [SFC \u306E\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)            |   [\u{1F49A}][no-deprecated-functional-template]    |
| [\u975E\u540C\u671F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/async-components.html)                 |                      \u274C                      |
| [\`emits\`\u30AA\u30D7\u30B7\u30E7\u30F3](https://v3-migration.vuejs.org/breaking-changes/emits-option.html)                                  |        [\u{1F49A}\u{1F4A1}][require-explicit-emits]        |
| [\`render\`\u95A2\u6570\u306E\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/render-function-api.html)                          |                      \u274C                      |
| [\`$scopedSlots\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)                            | [\u{1F49A}\u{1F527}][no-deprecated-dollar-scopedslots-api] |
| [\`$slots\`\u306E\u95A2\u6570\u5316](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)                              |       [\u{1F49A}][require-slots-as-functions]       |
| [\`$listeners\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/listeners-removed)                                   |   [\u{1F49A}][no-deprecated-dollar-listeners-api]   |
| [\`$attrs\`\u306E\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html)                       |                      \u274C                      |
| [\u30AB\u30B9\u30BF\u30E0\u8981\u7D20\u306E\u6271\u3044](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html)                      |                      \u274C                      |
| [\`is\`\u306E\u8A18\u6CD5](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html#customized-built-in-elements) |     [\u{1F49A}][no-deprecated-html-element-is]      |
| \`unmounted\`                                                                                                             |  [\u{1F49A}\u{1F4A1}][no-deprecated-destroyed-lifecycle]   |
| \`beforeUnmount\`                                                                                                         |  [\u{1F49A}\u{1F4A1}][no-deprecated-destroyed-lifecycle]   |

</highlight-table>

[no-deprecated-destroyed-lifecycle]: https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html
[no-deprecated-dollar-listeners-api]: https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html
[no-deprecated-dollar-scopedslots-api]: https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html
[no-deprecated-functional-template]: https://eslint.vuejs.org/rules/no-deprecated-functional-template.html
[no-deprecated-html-element-is]: https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html
[no-deprecated-v-bind-sync]: https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html
[no-deprecated-v-on-native-modifier]: https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html
[no-v-for-template-key-on-child]: https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html
[require-slots-as-functions]: https://eslint.vuejs.org/rules/require-slots-as-functions.html
[require-explicit-emits]: https://eslint.vuejs.org/rules/require-explicit-emits.html
[no-use-v-if-with-v-for]: https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html
[no-restricted-custom-event]: https://eslint.vuejs.org/rules/no-restricted-custom-event.html
[no-restricted-props]: https://eslint.vuejs.org/rules/no-restricted-props.html
[no-restricted-imports]: https://eslint.org/docs/latest/rules/no-restricted-imports

::right::

<highlight-table highlight-rows="2, 4-8, 10, 11, 17" :on="$slidev.nav.clicks === 1">

|                                                                                                                      |                                               |
| :------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------: |
| [\`default\`\u306E\`this\`](https://v3-migration.vuejs.org/breaking-changes/props-default-this.html)                         |    [\u{1F49A}][no-deprecated-props-default-this]     |
| [\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/custom-directives.html)             |                      \u274C                       |
| [\`data\`\u95A2\u6570](https://v3-migration.vuejs.org/breaking-changes/data-option.html)                                       | [\u{1F49A}\u{1F527}][no-deprecated-data-object-declaration] |
| [mixin \u306E\`data\`\u306E\u6271\u3044](https://v3-migration.vuejs.org/breaking-changes/data-option.html#mixin-merge-behavior-change) |                      \u274C                       |
| [\`:attr=false\`](https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html)                             |                      \u274C                       |
| [Transition \u30AF\u30E9\u30B9\u540D\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/transition.html)                           |                      \u274C                       |
| [\`<TransitionGroup>\`\u306E\u30EB\u30FC\u30C8\u8981\u7D20](https://v3-migration.vuejs.org/breaking-changes/transition-group.html)             |                      \u274C                       |
| [\u914D\u5217\u306E watch](https://v3-migration.vuejs.org/breaking-changes/watch.html)                                           |                      \u274C                       |
| \u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u7121\u3057\u306E\`<template>\`                                                                                     |            [\u{1F49A}][no-lone-template]             |
| [Vue \u30A2\u30D7\u30EA\u306E\u30EB\u30FC\u30C8](https://v3-migration.vuejs.org/breaking-changes/mount-changes.html)                             |                      \u274C                       |
| [\`hook:\`\u30A4\u30D9\u30F3\u30C8](https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html)                       |                      \u274C                       |
| [\`v-on\`\u30AD\u30FC\u4FEE\u98FE\u5B50](https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html)                           |  [\u{1F49A}\u{1F527}][no-deprecated-v-on-number-modifiers]  |
| [\`$on\`\u30FB\`$off\`\u30FB\`$once\`](https://v3-migration.vuejs.org/breaking-changes/events-api.html)                            |        [\u{1F49A}][no-deprecated-events-api]         |
| [\u30D5\u30A3\u30EB\u30BF\u30FC](https://v3-migration.vuejs.org/breaking-changes/filters.html)                                           |          [\u{1F49A}][no-deprecated-filter]           |
| [Inline \u30C6\u30F3\u30D7\u30EC\u30FC\u30C8](https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html)                |      [\u{1F49A}][no-deprecated-inline-template]      |
| [\`$children\`](https://v3-migration.vuejs.org/breaking-changes/children.html)                                         |        [\u{1F499}][no-restricted-properties]         |
| [\`propsData\`](https://v3-migration.vuejs.org/breaking-changes/props-data.html)                                       |                      \u274C                       |
| \`$destroy()\`                                                                                                         |        [\u{1F499}][no-restricted-properties]         |
| \`Vue.set()\`\u30FB\`Vue.delete()\`                                                                                          |          [\u{1F499}][no-restricted-imports]          |

</highlight-table>

[no-deprecated-data-object-declaration]: https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html
[no-deprecated-events-api]: https://eslint.vuejs.org/rules/no-deprecated-events-api.html
[no-deprecated-filter]: https://eslint.vuejs.org/rules/no-deprecated-filter.html
[no-deprecated-inline-template]: https://eslint.vuejs.org/rules/no-deprecated-inline-template.html
[no-deprecated-props-default-this]: https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html
[no-deprecated-v-on-number-modifiers]: https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html
[no-lone-template]: https://eslint.vuejs.org/rules/no-lone-template.html
[no-restricted-properties]: https://eslint.org/docs/latest/rules/no-restricted-properties

<div class="text-xs">

25 / 40 \u534A\u5206\u4EE5\u4E0A\u304C\u30C1\u30A7\u30C3\u30AF\u53EF\u80FD

</div>

<style>
  .slidev-layout td, .slidev-layout th {
    padding: 0.1rem;
    font-size: 0.7rem;
    line-height: 0.8rem;
  }
  .slidev-layout td code {
    padding: 0;
  }
  tr {
    transition: opacity 200ms ease-in-out;
  }
</style>
`,title:"Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B",level:2,content:`## Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B

\u{1F49A}, \u{1F499}: eslint-plugin-vue, ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u53EF\u80FD / \u{1F527}: \u81EA\u52D5\u4FEE\u6B63\u53EF\u80FD / \u{1F4A1}: \u30A8\u30C7\u30A3\u30BF\u4E0A\u3067\u306E\u63D0\u6848

::left::

<highlight-table highlight-rows="7, 9, 11, 13, 17, 18" :on="$slidev.nav.clicks === 1">

|                                                                                                                         |                                              |
| :---------------------------------------------------------------------------------------------------------------------- | :------------------------------------------: |
| [createApp()\u7B49](https://v3-migration.vuejs.org/breaking-changes/global-api.html)                                        |         [\u{1F499}][no-restricted-imports]          |
| [\u540D\u524D\u4ED8\u304D Export](https://v3-migration.vuejs.org/breaking-changes/global-api-treeshaking.html)                          |         [\u{1F499}][no-restricted-imports]          |
| [\`v-model\`\u306E\`modelValue\`, \`emit('input')\`](https://v3-migration.vuejs.org/breaking-changes/v-model.html)                |                     \u{1F49A}\u{1F4A1}                     |
| [\`v-bind.sync\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/v-model.html)                                       |      [\u{1F49A}\u{1F527}][no-deprecated-v-bind-sync]       |
| [\`<template v-for>\`\u306E key](https://v3-migration.vuejs.org/breaking-changes/key-attribute.html)                          |     [\u{1F49A}][no-v-for-template-key-on-child]     |
| [\`v-if\`\u30FB\`v-for\` \u306E\u512A\u5148\u5EA6](https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html)                             |         [\u{1F49A}][no-use-v-if-with-v-for]         |
| [\`v-bind="object"\`\u304C\u9806\u5E8F\u306B\u5F71\u97FF](https://v3-migration.vuejs.org/breaking-changes/v-bind.html)                            |                      \u274C                      |
| [\`v-on:event.native\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html)            |   [\u{1F49A}][no-deprecated-v-on-native-modifier]   |
| [\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)            |                      \u274C                      |
| [SFC \u306E\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)            |   [\u{1F49A}][no-deprecated-functional-template]    |
| [\u975E\u540C\u671F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/async-components.html)                 |                      \u274C                      |
| [\`emits\`\u30AA\u30D7\u30B7\u30E7\u30F3](https://v3-migration.vuejs.org/breaking-changes/emits-option.html)                                  |        [\u{1F49A}\u{1F4A1}][require-explicit-emits]        |
| [\`render\`\u95A2\u6570\u306E\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/render-function-api.html)                          |                      \u274C                      |
| [\`$scopedSlots\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)                            | [\u{1F49A}\u{1F527}][no-deprecated-dollar-scopedslots-api] |
| [\`$slots\`\u306E\u95A2\u6570\u5316](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)                              |       [\u{1F49A}][require-slots-as-functions]       |
| [\`$listeners\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/listeners-removed)                                   |   [\u{1F49A}][no-deprecated-dollar-listeners-api]   |
| [\`$attrs\`\u306E\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html)                       |                      \u274C                      |
| [\u30AB\u30B9\u30BF\u30E0\u8981\u7D20\u306E\u6271\u3044](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html)                      |                      \u274C                      |
| [\`is\`\u306E\u8A18\u6CD5](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html#customized-built-in-elements) |     [\u{1F49A}][no-deprecated-html-element-is]      |
| \`unmounted\`                                                                                                             |  [\u{1F49A}\u{1F4A1}][no-deprecated-destroyed-lifecycle]   |
| \`beforeUnmount\`                                                                                                         |  [\u{1F49A}\u{1F4A1}][no-deprecated-destroyed-lifecycle]   |

</highlight-table>

[no-deprecated-destroyed-lifecycle]: https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html
[no-deprecated-dollar-listeners-api]: https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html
[no-deprecated-dollar-scopedslots-api]: https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html
[no-deprecated-functional-template]: https://eslint.vuejs.org/rules/no-deprecated-functional-template.html
[no-deprecated-html-element-is]: https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html
[no-deprecated-v-bind-sync]: https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html
[no-deprecated-v-on-native-modifier]: https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html
[no-v-for-template-key-on-child]: https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html
[require-slots-as-functions]: https://eslint.vuejs.org/rules/require-slots-as-functions.html
[require-explicit-emits]: https://eslint.vuejs.org/rules/require-explicit-emits.html
[no-use-v-if-with-v-for]: https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html
[no-restricted-custom-event]: https://eslint.vuejs.org/rules/no-restricted-custom-event.html
[no-restricted-props]: https://eslint.vuejs.org/rules/no-restricted-props.html
[no-restricted-imports]: https://eslint.org/docs/latest/rules/no-restricted-imports

::right::

<highlight-table highlight-rows="2, 4-8, 10, 11, 17" :on="$slidev.nav.clicks === 1">

|                                                                                                                      |                                               |
| :------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------: |
| [\`default\`\u306E\`this\`](https://v3-migration.vuejs.org/breaking-changes/props-default-this.html)                         |    [\u{1F49A}][no-deprecated-props-default-this]     |
| [\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/custom-directives.html)             |                      \u274C                       |
| [\`data\`\u95A2\u6570](https://v3-migration.vuejs.org/breaking-changes/data-option.html)                                       | [\u{1F49A}\u{1F527}][no-deprecated-data-object-declaration] |
| [mixin \u306E\`data\`\u306E\u6271\u3044](https://v3-migration.vuejs.org/breaking-changes/data-option.html#mixin-merge-behavior-change) |                      \u274C                       |
| [\`:attr=false\`](https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html)                             |                      \u274C                       |
| [Transition \u30AF\u30E9\u30B9\u540D\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/transition.html)                           |                      \u274C                       |
| [\`<TransitionGroup>\`\u306E\u30EB\u30FC\u30C8\u8981\u7D20](https://v3-migration.vuejs.org/breaking-changes/transition-group.html)             |                      \u274C                       |
| [\u914D\u5217\u306E watch](https://v3-migration.vuejs.org/breaking-changes/watch.html)                                           |                      \u274C                       |
| \u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u7121\u3057\u306E\`<template>\`                                                                                     |            [\u{1F49A}][no-lone-template]             |
| [Vue \u30A2\u30D7\u30EA\u306E\u30EB\u30FC\u30C8](https://v3-migration.vuejs.org/breaking-changes/mount-changes.html)                             |                      \u274C                       |
| [\`hook:\`\u30A4\u30D9\u30F3\u30C8](https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html)                       |                      \u274C                       |
| [\`v-on\`\u30AD\u30FC\u4FEE\u98FE\u5B50](https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html)                           |  [\u{1F49A}\u{1F527}][no-deprecated-v-on-number-modifiers]  |
| [\`$on\`\u30FB\`$off\`\u30FB\`$once\`](https://v3-migration.vuejs.org/breaking-changes/events-api.html)                            |        [\u{1F49A}][no-deprecated-events-api]         |
| [\u30D5\u30A3\u30EB\u30BF\u30FC](https://v3-migration.vuejs.org/breaking-changes/filters.html)                                           |          [\u{1F49A}][no-deprecated-filter]           |
| [Inline \u30C6\u30F3\u30D7\u30EC\u30FC\u30C8](https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html)                |      [\u{1F49A}][no-deprecated-inline-template]      |
| [\`$children\`](https://v3-migration.vuejs.org/breaking-changes/children.html)                                         |        [\u{1F499}][no-restricted-properties]         |
| [\`propsData\`](https://v3-migration.vuejs.org/breaking-changes/props-data.html)                                       |                      \u274C                       |
| \`$destroy()\`                                                                                                         |        [\u{1F499}][no-restricted-properties]         |
| \`Vue.set()\`\u30FB\`Vue.delete()\`                                                                                          |          [\u{1F499}][no-restricted-imports]          |

</highlight-table>

[no-deprecated-data-object-declaration]: https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html
[no-deprecated-events-api]: https://eslint.vuejs.org/rules/no-deprecated-events-api.html
[no-deprecated-filter]: https://eslint.vuejs.org/rules/no-deprecated-filter.html
[no-deprecated-inline-template]: https://eslint.vuejs.org/rules/no-deprecated-inline-template.html
[no-deprecated-props-default-this]: https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html
[no-deprecated-v-on-number-modifiers]: https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html
[no-lone-template]: https://eslint.vuejs.org/rules/no-lone-template.html
[no-restricted-properties]: https://eslint.org/docs/latest/rules/no-restricted-properties

<div class="text-xs">

25 / 40 \u534A\u5206\u4EE5\u4E0A\u304C\u30C1\u30A7\u30C3\u30AF\u53EF\u80FD

</div>

<style>
  .slidev-layout td, .slidev-layout th {
    padding: 0.1rem;
    font-size: 0.7rem;
    line-height: 0.8rem;
  }
  .slidev-layout td code {
    padding: 0;
  }
  tr {
    transition: opacity 200ms ease-in-out;
  }
</style>`,frontmatter:{hideInToc:!0,layout:"sub-2-cols",clicks:1,title:"Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B"},index:0,start:0,end:112},inline:{raw:`---
src: ./src/03_060.md
---
`,content:"",frontmatter:{},index:15,start:70,end:74},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_060.md",notesHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:U1,meta:{layout:"section",hideInToc:!0,title:"\u307E\u3060\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u307E\u3059\uFF01<br>\u{1F609}",srcSequence:"./src/03_065.md",slide:{raw:null,title:"\u307E\u3060\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u307E\u3059\uFF01<br>\u{1F609}",level:1,content:"# \u307E\u3060\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u307E\u3059\uFF01<br>\u{1F609}",frontmatter:{layout:"section",hideInToc:!0,title:"\u307E\u3060\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u307E\u3059\uFF01<br>\u{1F609}",srcSequence:"./src/03_065.md"},index:17,start:0,end:7,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_065.md",raw:`---
layout: section
hideInToc: true
---

# \u307E\u3060\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u307E\u3059\uFF01<br>\u{1F609}
`,title:"\u307E\u3060\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u307E\u3059\uFF01<br>\u{1F609}",level:1,content:"# \u307E\u3060\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u307E\u3059\uFF01<br>\u{1F609}",frontmatter:{layout:"section",hideInToc:!0,title:"\u307E\u3060\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u307E\u3059\uFF01<br>\u{1F609}"},index:0,start:0,end:7},inline:{raw:`---
src: ./src/03_065.md
---
`,content:"",frontmatter:{},index:16,start:74,end:78},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_065.md",notesHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:Z1,meta:{hideInToc:!0,layout:"sub-2-cols",title:"eslint-plugin-vue-scoped-css \u3082\u5C0E\u5165\u3059\u308B",srcSequence:"./src/03_070.md",slide:{raw:null,title:"eslint-plugin-vue-scoped-css \u3082\u5C0E\u5165\u3059\u308B",level:2,content:`## eslint-plugin-vue-scoped-css \u3082\u5C0E\u5165\u3059\u308B

SFC \u306E\u30B9\u30B3\u30FC\u30D7\u4ED8\u304D CSS \u3092\u30C1\u30A7\u30C3\u30AF\u3059\u308B ESLint \u30D7\u30E9\u30B0\u30A4\u30F3\u3002  
<https://github.com/future-architect/eslint-plugin-vue-scoped-css>

::left::

- [\u672A\u4F7F\u7528\u30BB\u30EC\u30AF\u30BF\u3092\u30C1\u30A7\u30C3\u30AF](https://future-architect.github.io/eslint-plugin-vue-scoped-css/rules/no-unused-selector.html)\u3067\u304D\u305F\u308A\u3059\u308B\u30D7\u30E9\u30B0\u30A4\u30F3
- [\u30D5\u30E5\u30FC\u30C1\u30E3\u30FC\uFF08\u5F0A\u793E\uFF09\u306E OSS \u30EA\u30DD\u30B8\u30C8\u30EA \u{1F962}](https://github.com/future-architect/)\u3067\u7BA1\u7406
- \u5143\u3005\u306F\u793E\u5185\u3067\u958B\u767A\u904B\u7528\u3055\u308C\u3066\u3044\u305F\u30C1\u30A7\u30C3\u30AF\u30EB\u30FC\u30EB\u306E\u4E00\u90E8\u3092 OSS \u5316\u3057\u305F\u3082\u306E
- 23,000 \u30C0\u30A6\u30F3\u30ED\u30FC\u30C9 / \u9031 \u7A0B\u5EA6\u306B\u306F\u5229\u7528\u3055\u308C\u3066\u3044\u308B (2022 \u5E74 9 \u6708\u306E\u60C5\u5831)

<div class="image-wrapper">

[![Future](/FUTURE-logo.svg)](https://www.future.co.jp/)

</div>

::right::

![eslint-plugin-vue-scoped-css](/eslint-plugin-vue-scoped-css.png)

<style>
  .image-wrapper {
    width: 200px;
    margin-left: auto;
    margin-top: 67px;
  }
</style>`,frontmatter:{hideInToc:!0,layout:"sub-2-cols",title:"eslint-plugin-vue-scoped-css \u3082\u5C0E\u5165\u3059\u308B",srcSequence:"./src/03_070.md"},index:18,start:0,end:35,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_070.md",raw:`---
hideInToc: true
layout: sub-2-cols
---

## eslint-plugin-vue-scoped-css \u3082\u5C0E\u5165\u3059\u308B

SFC \u306E\u30B9\u30B3\u30FC\u30D7\u4ED8\u304D CSS \u3092\u30C1\u30A7\u30C3\u30AF\u3059\u308B ESLint \u30D7\u30E9\u30B0\u30A4\u30F3\u3002  
<https://github.com/future-architect/eslint-plugin-vue-scoped-css>

::left::

- [\u672A\u4F7F\u7528\u30BB\u30EC\u30AF\u30BF\u3092\u30C1\u30A7\u30C3\u30AF](https://future-architect.github.io/eslint-plugin-vue-scoped-css/rules/no-unused-selector.html)\u3067\u304D\u305F\u308A\u3059\u308B\u30D7\u30E9\u30B0\u30A4\u30F3
- [\u30D5\u30E5\u30FC\u30C1\u30E3\u30FC\uFF08\u5F0A\u793E\uFF09\u306E OSS \u30EA\u30DD\u30B8\u30C8\u30EA \u{1F962}](https://github.com/future-architect/)\u3067\u7BA1\u7406
- \u5143\u3005\u306F\u793E\u5185\u3067\u958B\u767A\u904B\u7528\u3055\u308C\u3066\u3044\u305F\u30C1\u30A7\u30C3\u30AF\u30EB\u30FC\u30EB\u306E\u4E00\u90E8\u3092 OSS \u5316\u3057\u305F\u3082\u306E
- 23,000 \u30C0\u30A6\u30F3\u30ED\u30FC\u30C9 / \u9031 \u7A0B\u5EA6\u306B\u306F\u5229\u7528\u3055\u308C\u3066\u3044\u308B (2022 \u5E74 9 \u6708\u306E\u60C5\u5831)

<div class="image-wrapper">

[![Future](/FUTURE-logo.svg)](https://www.future.co.jp/)

</div>

::right::

![eslint-plugin-vue-scoped-css](/eslint-plugin-vue-scoped-css.png)

<style>
  .image-wrapper {
    width: 200px;
    margin-left: auto;
    margin-top: 67px;
  }
</style>
`,title:"eslint-plugin-vue-scoped-css \u3082\u5C0E\u5165\u3059\u308B",level:2,content:`## eslint-plugin-vue-scoped-css \u3082\u5C0E\u5165\u3059\u308B

SFC \u306E\u30B9\u30B3\u30FC\u30D7\u4ED8\u304D CSS \u3092\u30C1\u30A7\u30C3\u30AF\u3059\u308B ESLint \u30D7\u30E9\u30B0\u30A4\u30F3\u3002  
<https://github.com/future-architect/eslint-plugin-vue-scoped-css>

::left::

- [\u672A\u4F7F\u7528\u30BB\u30EC\u30AF\u30BF\u3092\u30C1\u30A7\u30C3\u30AF](https://future-architect.github.io/eslint-plugin-vue-scoped-css/rules/no-unused-selector.html)\u3067\u304D\u305F\u308A\u3059\u308B\u30D7\u30E9\u30B0\u30A4\u30F3
- [\u30D5\u30E5\u30FC\u30C1\u30E3\u30FC\uFF08\u5F0A\u793E\uFF09\u306E OSS \u30EA\u30DD\u30B8\u30C8\u30EA \u{1F962}](https://github.com/future-architect/)\u3067\u7BA1\u7406
- \u5143\u3005\u306F\u793E\u5185\u3067\u958B\u767A\u904B\u7528\u3055\u308C\u3066\u3044\u305F\u30C1\u30A7\u30C3\u30AF\u30EB\u30FC\u30EB\u306E\u4E00\u90E8\u3092 OSS \u5316\u3057\u305F\u3082\u306E
- 23,000 \u30C0\u30A6\u30F3\u30ED\u30FC\u30C9 / \u9031 \u7A0B\u5EA6\u306B\u306F\u5229\u7528\u3055\u308C\u3066\u3044\u308B (2022 \u5E74 9 \u6708\u306E\u60C5\u5831)

<div class="image-wrapper">

[![Future](/FUTURE-logo.svg)](https://www.future.co.jp/)

</div>

::right::

![eslint-plugin-vue-scoped-css](/eslint-plugin-vue-scoped-css.png)

<style>
  .image-wrapper {
    width: 200px;
    margin-left: auto;
    margin-top: 67px;
  }
</style>`,frontmatter:{hideInToc:!0,layout:"sub-2-cols",title:"eslint-plugin-vue-scoped-css \u3082\u5C0E\u5165\u3059\u308B"},index:0,start:0,end:35},inline:{raw:`---
src: ./src/03_070.md
---
`,content:"",frontmatter:{},index:17,start:78,end:82},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_070.md",notesHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:rk,meta:{hideInToc:!0,layout:"sub-2-cols",clicks:1,title:"Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B",srcSequence:"./src/03_080.md",slide:{raw:null,title:"Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B",level:2,content:`## Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B

\u{1F49A}, \u{1F499}, \u{1F9E1}: eslint-plugin-vue, ESLint, **eslint-plugin-vue-scoped-css** \u3067\u30C1\u30A7\u30C3\u30AF\u53EF\u80FD  
\u{1F527}: \u81EA\u52D5\u4FEE\u6B63\u53EF\u80FD / \u{1F4A1}: \u30A8\u30C7\u30A3\u30BF\u4E0A\u3067\u306E\u63D0\u6848

::left::

<highlight-table highlight-rows="7, 9, 11, 13, 17, 18" :on="$slidev.nav.clicks === 1">

|                                                                                                                         |                                              |
| :---------------------------------------------------------------------------------------------------------------------- | :------------------------------------------: |
| [createApp()\u7B49](https://v3-migration.vuejs.org/breaking-changes/global-api.html)                                        |         [\u{1F499}][no-restricted-imports]          |
| [\u540D\u524D\u4ED8\u304D Export](https://v3-migration.vuejs.org/breaking-changes/global-api-treeshaking.html)                          |         [\u{1F499}][no-restricted-imports]          |
| [\`v-model\`\u306E\`modelValue\`, \`emit('input')\`](https://v3-migration.vuejs.org/breaking-changes/v-model.html)                |                     \u{1F49A}\u{1F4A1}                     |
| [\`v-bind.sync\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/v-model.html)                                       |      [\u{1F49A}\u{1F527}][no-deprecated-v-bind-sync]       |
| [\`<template v-for>\`\u306E key](https://v3-migration.vuejs.org/breaking-changes/key-attribute.html)                          |     [\u{1F49A}][no-v-for-template-key-on-child]     |
| [\`v-if\`\u30FB\`v-for\` \u306E\u512A\u5148\u5EA6](https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html)                             |         [\u{1F49A}][no-use-v-if-with-v-for]         |
| [\`v-bind="object"\`\u304C\u9806\u5E8F\u306B\u5F71\u97FF](https://v3-migration.vuejs.org/breaking-changes/v-bind.html)                            |                      \u274C                      |
| [\`v-on:event.native\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html)            |   [\u{1F49A}][no-deprecated-v-on-native-modifier]   |
| [\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)            |                      \u274C                      |
| [SFC \u306E\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)            |   [\u{1F49A}][no-deprecated-functional-template]    |
| [\u975E\u540C\u671F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/async-components.html)                 |                      \u274C                      |
| [\`emits\`\u30AA\u30D7\u30B7\u30E7\u30F3](https://v3-migration.vuejs.org/breaking-changes/emits-option.html)                                  |        [\u{1F49A}\u{1F4A1}][require-explicit-emits]        |
| [\`render\`\u95A2\u6570\u306E\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/render-function-api.html)                          |                      \u274C                      |
| [\`$scopedSlots\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)                            | [\u{1F49A}\u{1F527}][no-deprecated-dollar-scopedslots-api] |
| [\`$slots\`\u306E\u95A2\u6570\u5316](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)                              |       [\u{1F49A}][require-slots-as-functions]       |
| [\`$listeners\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/listeners-removed)                                   |   [\u{1F49A}][no-deprecated-dollar-listeners-api]   |
| [\`$attrs\`\u306E\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html)                       |                      \u274C                      |
| [\u30AB\u30B9\u30BF\u30E0\u8981\u7D20\u306E\u6271\u3044](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html)                      |                      \u274C                      |
| [\`is\`\u306E\u8A18\u6CD5](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html#customized-built-in-elements) |     [\u{1F49A}][no-deprecated-html-element-is]      |
| \`unmounted\`                                                                                                             |  [\u{1F49A}\u{1F4A1}][no-deprecated-destroyed-lifecycle]   |
| \`beforeUnmount\`                                                                                                         |  [\u{1F49A}\u{1F4A1}][no-deprecated-destroyed-lifecycle]   |

</highlight-table>

[no-deprecated-destroyed-lifecycle]: https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html
[no-deprecated-dollar-listeners-api]: https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html
[no-deprecated-dollar-scopedslots-api]: https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html
[no-deprecated-functional-template]: https://eslint.vuejs.org/rules/no-deprecated-functional-template.html
[no-deprecated-html-element-is]: https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html
[no-deprecated-v-bind-sync]: https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html
[no-deprecated-v-on-native-modifier]: https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html
[no-v-for-template-key-on-child]: https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html
[require-slots-as-functions]: https://eslint.vuejs.org/rules/require-slots-as-functions.html
[require-explicit-emits]: https://eslint.vuejs.org/rules/require-explicit-emits.html
[no-use-v-if-with-v-for]: https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html
[no-restricted-custom-event]: https://eslint.vuejs.org/rules/no-restricted-custom-event.html
[no-restricted-props]: https://eslint.vuejs.org/rules/no-restricted-props.html
[no-restricted-imports]: https://eslint.org/docs/latest/rules/no-restricted-imports

::right::

<highlight-table highlight-rows="2, 4, 5, 7, 8, 10, 11, 17" :on="$slidev.nav.clicks === 1">

|                                                                                                                      |                                               |
| :------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------: |
| [\`default\`\u306E\`this\`](https://v3-migration.vuejs.org/breaking-changes/props-default-this.html)                         |    [\u{1F49A}][no-deprecated-props-default-this]     |
| [\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/custom-directives.html)             |                      \u274C                       |
| [\`data\`\u95A2\u6570](https://v3-migration.vuejs.org/breaking-changes/data-option.html)                                       | [\u{1F49A}\u{1F527}][no-deprecated-data-object-declaration] |
| [mixin \u306E\`data\`\u306E\u6271\u3044](https://v3-migration.vuejs.org/breaking-changes/data-option.html#mixin-merge-behavior-change) |                      \u274C                       |
| [\`:attr=false\`](https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html)                             |                      \u274C                       |
| [Transition \u30AF\u30E9\u30B9\u540D\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/transition.html)                           |   [\u{1F9E1}][no-deprecated-v-enter-v-leave-class]   |
| [\`<TransitionGroup>\`\u306E\u30EB\u30FC\u30C8\u8981\u7D20](https://v3-migration.vuejs.org/breaking-changes/transition-group.html)             |                      \u274C                       |
| [\u914D\u5217\u306E watch](https://v3-migration.vuejs.org/breaking-changes/watch.html)                                           |                      \u274C                       |
| \u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u7121\u3057\u306E\`<template>\`                                                                                     |            [\u{1F49A}][no-lone-template]             |
| [Vue \u30A2\u30D7\u30EA\u306E\u30EB\u30FC\u30C8](https://v3-migration.vuejs.org/breaking-changes/mount-changes.html)                             |                      \u274C                       |
| [\`hook:\`\u30A4\u30D9\u30F3\u30C8](https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html)                       |                      \u274C                       |
| [\`v-on\`\u30AD\u30FC\u4FEE\u98FE\u5B50](https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html)                           |  [\u{1F49A}\u{1F527}][no-deprecated-v-on-number-modifiers]  |
| [\`$on\`\u30FB\`$off\`\u30FB\`$once\`](https://v3-migration.vuejs.org/breaking-changes/events-api.html)                            |        [\u{1F49A}][no-deprecated-events-api]         |
| [\u30D5\u30A3\u30EB\u30BF\u30FC](https://v3-migration.vuejs.org/breaking-changes/filters.html)                                           |          [\u{1F49A}][no-deprecated-filter]           |
| [Inline \u30C6\u30F3\u30D7\u30EC\u30FC\u30C8](https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html)                |      [\u{1F49A}][no-deprecated-inline-template]      |
| [\`$children\`](https://v3-migration.vuejs.org/breaking-changes/children.html)                                         |        [\u{1F499}][no-restricted-properties]         |
| [\`propsData\`](https://v3-migration.vuejs.org/breaking-changes/props-data.html)                                       |                      \u274C                       |
| \`$destroy()\`                                                                                                         |        [\u{1F499}][no-restricted-properties]         |
| \`Vue.set()\`\u30FB\`Vue.delete()\`                                                                                          |          [\u{1F499}][no-restricted-imports]          |

</highlight-table>

[no-deprecated-data-object-declaration]: https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html
[no-deprecated-events-api]: https://eslint.vuejs.org/rules/no-deprecated-events-api.html
[no-deprecated-filter]: https://eslint.vuejs.org/rules/no-deprecated-filter.html
[no-deprecated-inline-template]: https://eslint.vuejs.org/rules/no-deprecated-inline-template.html
[no-deprecated-props-default-this]: https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html
[no-deprecated-v-on-number-modifiers]: https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html
[no-lone-template]: https://eslint.vuejs.org/rules/no-lone-template.html
[no-restricted-properties]: https://eslint.org/docs/latest/rules/no-restricted-properties
[no-deprecated-v-enter-v-leave-class]: https://future-architect.github.io/eslint-plugin-vue-scoped-css/rules/no-deprecated-v-enter-v-leave-class.html

<div class="text-xs">

26 / 40 \u304C\u30C1\u30A7\u30C3\u30AF\u53EF\u80FD

</div>

<style>
  .slidev-layout td, .slidev-layout th {
    padding: 0.1rem;
    font-size: 0.7rem;
    line-height: 0.8rem;
  }
  .slidev-layout td code {
    padding: 0;
  }
  tr {
    transition: opacity 200ms ease-in-out;
  }
</style>`,frontmatter:{hideInToc:!0,layout:"sub-2-cols",clicks:1,title:"Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B",srcSequence:"./src/03_080.md"},index:19,start:0,end:114,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_080.md",raw:`---
hideInToc: true
layout: sub-2-cols
clicks: 1
---

## Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B

\u{1F49A}, \u{1F499}, \u{1F9E1}: eslint-plugin-vue, ESLint, **eslint-plugin-vue-scoped-css** \u3067\u30C1\u30A7\u30C3\u30AF\u53EF\u80FD  
\u{1F527}: \u81EA\u52D5\u4FEE\u6B63\u53EF\u80FD / \u{1F4A1}: \u30A8\u30C7\u30A3\u30BF\u4E0A\u3067\u306E\u63D0\u6848

::left::

<highlight-table highlight-rows="7, 9, 11, 13, 17, 18" :on="$slidev.nav.clicks === 1">

|                                                                                                                         |                                              |
| :---------------------------------------------------------------------------------------------------------------------- | :------------------------------------------: |
| [createApp()\u7B49](https://v3-migration.vuejs.org/breaking-changes/global-api.html)                                        |         [\u{1F499}][no-restricted-imports]          |
| [\u540D\u524D\u4ED8\u304D Export](https://v3-migration.vuejs.org/breaking-changes/global-api-treeshaking.html)                          |         [\u{1F499}][no-restricted-imports]          |
| [\`v-model\`\u306E\`modelValue\`, \`emit('input')\`](https://v3-migration.vuejs.org/breaking-changes/v-model.html)                |                     \u{1F49A}\u{1F4A1}                     |
| [\`v-bind.sync\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/v-model.html)                                       |      [\u{1F49A}\u{1F527}][no-deprecated-v-bind-sync]       |
| [\`<template v-for>\`\u306E key](https://v3-migration.vuejs.org/breaking-changes/key-attribute.html)                          |     [\u{1F49A}][no-v-for-template-key-on-child]     |
| [\`v-if\`\u30FB\`v-for\` \u306E\u512A\u5148\u5EA6](https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html)                             |         [\u{1F49A}][no-use-v-if-with-v-for]         |
| [\`v-bind="object"\`\u304C\u9806\u5E8F\u306B\u5F71\u97FF](https://v3-migration.vuejs.org/breaking-changes/v-bind.html)                            |                      \u274C                      |
| [\`v-on:event.native\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html)            |   [\u{1F49A}][no-deprecated-v-on-native-modifier]   |
| [\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)            |                      \u274C                      |
| [SFC \u306E\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)            |   [\u{1F49A}][no-deprecated-functional-template]    |
| [\u975E\u540C\u671F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/async-components.html)                 |                      \u274C                      |
| [\`emits\`\u30AA\u30D7\u30B7\u30E7\u30F3](https://v3-migration.vuejs.org/breaking-changes/emits-option.html)                                  |        [\u{1F49A}\u{1F4A1}][require-explicit-emits]        |
| [\`render\`\u95A2\u6570\u306E\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/render-function-api.html)                          |                      \u274C                      |
| [\`$scopedSlots\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)                            | [\u{1F49A}\u{1F527}][no-deprecated-dollar-scopedslots-api] |
| [\`$slots\`\u306E\u95A2\u6570\u5316](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)                              |       [\u{1F49A}][require-slots-as-functions]       |
| [\`$listeners\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/listeners-removed)                                   |   [\u{1F49A}][no-deprecated-dollar-listeners-api]   |
| [\`$attrs\`\u306E\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html)                       |                      \u274C                      |
| [\u30AB\u30B9\u30BF\u30E0\u8981\u7D20\u306E\u6271\u3044](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html)                      |                      \u274C                      |
| [\`is\`\u306E\u8A18\u6CD5](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html#customized-built-in-elements) |     [\u{1F49A}][no-deprecated-html-element-is]      |
| \`unmounted\`                                                                                                             |  [\u{1F49A}\u{1F4A1}][no-deprecated-destroyed-lifecycle]   |
| \`beforeUnmount\`                                                                                                         |  [\u{1F49A}\u{1F4A1}][no-deprecated-destroyed-lifecycle]   |

</highlight-table>

[no-deprecated-destroyed-lifecycle]: https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html
[no-deprecated-dollar-listeners-api]: https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html
[no-deprecated-dollar-scopedslots-api]: https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html
[no-deprecated-functional-template]: https://eslint.vuejs.org/rules/no-deprecated-functional-template.html
[no-deprecated-html-element-is]: https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html
[no-deprecated-v-bind-sync]: https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html
[no-deprecated-v-on-native-modifier]: https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html
[no-v-for-template-key-on-child]: https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html
[require-slots-as-functions]: https://eslint.vuejs.org/rules/require-slots-as-functions.html
[require-explicit-emits]: https://eslint.vuejs.org/rules/require-explicit-emits.html
[no-use-v-if-with-v-for]: https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html
[no-restricted-custom-event]: https://eslint.vuejs.org/rules/no-restricted-custom-event.html
[no-restricted-props]: https://eslint.vuejs.org/rules/no-restricted-props.html
[no-restricted-imports]: https://eslint.org/docs/latest/rules/no-restricted-imports

::right::

<highlight-table highlight-rows="2, 4, 5, 7, 8, 10, 11, 17" :on="$slidev.nav.clicks === 1">

|                                                                                                                      |                                               |
| :------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------: |
| [\`default\`\u306E\`this\`](https://v3-migration.vuejs.org/breaking-changes/props-default-this.html)                         |    [\u{1F49A}][no-deprecated-props-default-this]     |
| [\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/custom-directives.html)             |                      \u274C                       |
| [\`data\`\u95A2\u6570](https://v3-migration.vuejs.org/breaking-changes/data-option.html)                                       | [\u{1F49A}\u{1F527}][no-deprecated-data-object-declaration] |
| [mixin \u306E\`data\`\u306E\u6271\u3044](https://v3-migration.vuejs.org/breaking-changes/data-option.html#mixin-merge-behavior-change) |                      \u274C                       |
| [\`:attr=false\`](https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html)                             |                      \u274C                       |
| [Transition \u30AF\u30E9\u30B9\u540D\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/transition.html)                           |   [\u{1F9E1}][no-deprecated-v-enter-v-leave-class]   |
| [\`<TransitionGroup>\`\u306E\u30EB\u30FC\u30C8\u8981\u7D20](https://v3-migration.vuejs.org/breaking-changes/transition-group.html)             |                      \u274C                       |
| [\u914D\u5217\u306E watch](https://v3-migration.vuejs.org/breaking-changes/watch.html)                                           |                      \u274C                       |
| \u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u7121\u3057\u306E\`<template>\`                                                                                     |            [\u{1F49A}][no-lone-template]             |
| [Vue \u30A2\u30D7\u30EA\u306E\u30EB\u30FC\u30C8](https://v3-migration.vuejs.org/breaking-changes/mount-changes.html)                             |                      \u274C                       |
| [\`hook:\`\u30A4\u30D9\u30F3\u30C8](https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html)                       |                      \u274C                       |
| [\`v-on\`\u30AD\u30FC\u4FEE\u98FE\u5B50](https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html)                           |  [\u{1F49A}\u{1F527}][no-deprecated-v-on-number-modifiers]  |
| [\`$on\`\u30FB\`$off\`\u30FB\`$once\`](https://v3-migration.vuejs.org/breaking-changes/events-api.html)                            |        [\u{1F49A}][no-deprecated-events-api]         |
| [\u30D5\u30A3\u30EB\u30BF\u30FC](https://v3-migration.vuejs.org/breaking-changes/filters.html)                                           |          [\u{1F49A}][no-deprecated-filter]           |
| [Inline \u30C6\u30F3\u30D7\u30EC\u30FC\u30C8](https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html)                |      [\u{1F49A}][no-deprecated-inline-template]      |
| [\`$children\`](https://v3-migration.vuejs.org/breaking-changes/children.html)                                         |        [\u{1F499}][no-restricted-properties]         |
| [\`propsData\`](https://v3-migration.vuejs.org/breaking-changes/props-data.html)                                       |                      \u274C                       |
| \`$destroy()\`                                                                                                         |        [\u{1F499}][no-restricted-properties]         |
| \`Vue.set()\`\u30FB\`Vue.delete()\`                                                                                          |          [\u{1F499}][no-restricted-imports]          |

</highlight-table>

[no-deprecated-data-object-declaration]: https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html
[no-deprecated-events-api]: https://eslint.vuejs.org/rules/no-deprecated-events-api.html
[no-deprecated-filter]: https://eslint.vuejs.org/rules/no-deprecated-filter.html
[no-deprecated-inline-template]: https://eslint.vuejs.org/rules/no-deprecated-inline-template.html
[no-deprecated-props-default-this]: https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html
[no-deprecated-v-on-number-modifiers]: https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html
[no-lone-template]: https://eslint.vuejs.org/rules/no-lone-template.html
[no-restricted-properties]: https://eslint.org/docs/latest/rules/no-restricted-properties
[no-deprecated-v-enter-v-leave-class]: https://future-architect.github.io/eslint-plugin-vue-scoped-css/rules/no-deprecated-v-enter-v-leave-class.html

<div class="text-xs">

26 / 40 \u304C\u30C1\u30A7\u30C3\u30AF\u53EF\u80FD

</div>

<style>
  .slidev-layout td, .slidev-layout th {
    padding: 0.1rem;
    font-size: 0.7rem;
    line-height: 0.8rem;
  }
  .slidev-layout td code {
    padding: 0;
  }
  tr {
    transition: opacity 200ms ease-in-out;
  }
</style>
`,title:"Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B",level:2,content:`## Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B

\u{1F49A}, \u{1F499}, \u{1F9E1}: eslint-plugin-vue, ESLint, **eslint-plugin-vue-scoped-css** \u3067\u30C1\u30A7\u30C3\u30AF\u53EF\u80FD  
\u{1F527}: \u81EA\u52D5\u4FEE\u6B63\u53EF\u80FD / \u{1F4A1}: \u30A8\u30C7\u30A3\u30BF\u4E0A\u3067\u306E\u63D0\u6848

::left::

<highlight-table highlight-rows="7, 9, 11, 13, 17, 18" :on="$slidev.nav.clicks === 1">

|                                                                                                                         |                                              |
| :---------------------------------------------------------------------------------------------------------------------- | :------------------------------------------: |
| [createApp()\u7B49](https://v3-migration.vuejs.org/breaking-changes/global-api.html)                                        |         [\u{1F499}][no-restricted-imports]          |
| [\u540D\u524D\u4ED8\u304D Export](https://v3-migration.vuejs.org/breaking-changes/global-api-treeshaking.html)                          |         [\u{1F499}][no-restricted-imports]          |
| [\`v-model\`\u306E\`modelValue\`, \`emit('input')\`](https://v3-migration.vuejs.org/breaking-changes/v-model.html)                |                     \u{1F49A}\u{1F4A1}                     |
| [\`v-bind.sync\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/v-model.html)                                       |      [\u{1F49A}\u{1F527}][no-deprecated-v-bind-sync]       |
| [\`<template v-for>\`\u306E key](https://v3-migration.vuejs.org/breaking-changes/key-attribute.html)                          |     [\u{1F49A}][no-v-for-template-key-on-child]     |
| [\`v-if\`\u30FB\`v-for\` \u306E\u512A\u5148\u5EA6](https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html)                             |         [\u{1F49A}][no-use-v-if-with-v-for]         |
| [\`v-bind="object"\`\u304C\u9806\u5E8F\u306B\u5F71\u97FF](https://v3-migration.vuejs.org/breaking-changes/v-bind.html)                            |                      \u274C                      |
| [\`v-on:event.native\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html)            |   [\u{1F49A}][no-deprecated-v-on-native-modifier]   |
| [\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)            |                      \u274C                      |
| [SFC \u306E\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)            |   [\u{1F49A}][no-deprecated-functional-template]    |
| [\u975E\u540C\u671F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/async-components.html)                 |                      \u274C                      |
| [\`emits\`\u30AA\u30D7\u30B7\u30E7\u30F3](https://v3-migration.vuejs.org/breaking-changes/emits-option.html)                                  |        [\u{1F49A}\u{1F4A1}][require-explicit-emits]        |
| [\`render\`\u95A2\u6570\u306E\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/render-function-api.html)                          |                      \u274C                      |
| [\`$scopedSlots\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)                            | [\u{1F49A}\u{1F527}][no-deprecated-dollar-scopedslots-api] |
| [\`$slots\`\u306E\u95A2\u6570\u5316](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)                              |       [\u{1F49A}][require-slots-as-functions]       |
| [\`$listeners\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/listeners-removed)                                   |   [\u{1F49A}][no-deprecated-dollar-listeners-api]   |
| [\`$attrs\`\u306E\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html)                       |                      \u274C                      |
| [\u30AB\u30B9\u30BF\u30E0\u8981\u7D20\u306E\u6271\u3044](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html)                      |                      \u274C                      |
| [\`is\`\u306E\u8A18\u6CD5](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html#customized-built-in-elements) |     [\u{1F49A}][no-deprecated-html-element-is]      |
| \`unmounted\`                                                                                                             |  [\u{1F49A}\u{1F4A1}][no-deprecated-destroyed-lifecycle]   |
| \`beforeUnmount\`                                                                                                         |  [\u{1F49A}\u{1F4A1}][no-deprecated-destroyed-lifecycle]   |

</highlight-table>

[no-deprecated-destroyed-lifecycle]: https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html
[no-deprecated-dollar-listeners-api]: https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html
[no-deprecated-dollar-scopedslots-api]: https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html
[no-deprecated-functional-template]: https://eslint.vuejs.org/rules/no-deprecated-functional-template.html
[no-deprecated-html-element-is]: https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html
[no-deprecated-v-bind-sync]: https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html
[no-deprecated-v-on-native-modifier]: https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html
[no-v-for-template-key-on-child]: https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html
[require-slots-as-functions]: https://eslint.vuejs.org/rules/require-slots-as-functions.html
[require-explicit-emits]: https://eslint.vuejs.org/rules/require-explicit-emits.html
[no-use-v-if-with-v-for]: https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html
[no-restricted-custom-event]: https://eslint.vuejs.org/rules/no-restricted-custom-event.html
[no-restricted-props]: https://eslint.vuejs.org/rules/no-restricted-props.html
[no-restricted-imports]: https://eslint.org/docs/latest/rules/no-restricted-imports

::right::

<highlight-table highlight-rows="2, 4, 5, 7, 8, 10, 11, 17" :on="$slidev.nav.clicks === 1">

|                                                                                                                      |                                               |
| :------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------: |
| [\`default\`\u306E\`this\`](https://v3-migration.vuejs.org/breaking-changes/props-default-this.html)                         |    [\u{1F49A}][no-deprecated-props-default-this]     |
| [\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/custom-directives.html)             |                      \u274C                       |
| [\`data\`\u95A2\u6570](https://v3-migration.vuejs.org/breaking-changes/data-option.html)                                       | [\u{1F49A}\u{1F527}][no-deprecated-data-object-declaration] |
| [mixin \u306E\`data\`\u306E\u6271\u3044](https://v3-migration.vuejs.org/breaking-changes/data-option.html#mixin-merge-behavior-change) |                      \u274C                       |
| [\`:attr=false\`](https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html)                             |                      \u274C                       |
| [Transition \u30AF\u30E9\u30B9\u540D\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/transition.html)                           |   [\u{1F9E1}][no-deprecated-v-enter-v-leave-class]   |
| [\`<TransitionGroup>\`\u306E\u30EB\u30FC\u30C8\u8981\u7D20](https://v3-migration.vuejs.org/breaking-changes/transition-group.html)             |                      \u274C                       |
| [\u914D\u5217\u306E watch](https://v3-migration.vuejs.org/breaking-changes/watch.html)                                           |                      \u274C                       |
| \u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u7121\u3057\u306E\`<template>\`                                                                                     |            [\u{1F49A}][no-lone-template]             |
| [Vue \u30A2\u30D7\u30EA\u306E\u30EB\u30FC\u30C8](https://v3-migration.vuejs.org/breaking-changes/mount-changes.html)                             |                      \u274C                       |
| [\`hook:\`\u30A4\u30D9\u30F3\u30C8](https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html)                       |                      \u274C                       |
| [\`v-on\`\u30AD\u30FC\u4FEE\u98FE\u5B50](https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html)                           |  [\u{1F49A}\u{1F527}][no-deprecated-v-on-number-modifiers]  |
| [\`$on\`\u30FB\`$off\`\u30FB\`$once\`](https://v3-migration.vuejs.org/breaking-changes/events-api.html)                            |        [\u{1F49A}][no-deprecated-events-api]         |
| [\u30D5\u30A3\u30EB\u30BF\u30FC](https://v3-migration.vuejs.org/breaking-changes/filters.html)                                           |          [\u{1F49A}][no-deprecated-filter]           |
| [Inline \u30C6\u30F3\u30D7\u30EC\u30FC\u30C8](https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html)                |      [\u{1F49A}][no-deprecated-inline-template]      |
| [\`$children\`](https://v3-migration.vuejs.org/breaking-changes/children.html)                                         |        [\u{1F499}][no-restricted-properties]         |
| [\`propsData\`](https://v3-migration.vuejs.org/breaking-changes/props-data.html)                                       |                      \u274C                       |
| \`$destroy()\`                                                                                                         |        [\u{1F499}][no-restricted-properties]         |
| \`Vue.set()\`\u30FB\`Vue.delete()\`                                                                                          |          [\u{1F499}][no-restricted-imports]          |

</highlight-table>

[no-deprecated-data-object-declaration]: https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html
[no-deprecated-events-api]: https://eslint.vuejs.org/rules/no-deprecated-events-api.html
[no-deprecated-filter]: https://eslint.vuejs.org/rules/no-deprecated-filter.html
[no-deprecated-inline-template]: https://eslint.vuejs.org/rules/no-deprecated-inline-template.html
[no-deprecated-props-default-this]: https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html
[no-deprecated-v-on-number-modifiers]: https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html
[no-lone-template]: https://eslint.vuejs.org/rules/no-lone-template.html
[no-restricted-properties]: https://eslint.org/docs/latest/rules/no-restricted-properties
[no-deprecated-v-enter-v-leave-class]: https://future-architect.github.io/eslint-plugin-vue-scoped-css/rules/no-deprecated-v-enter-v-leave-class.html

<div class="text-xs">

26 / 40 \u304C\u30C1\u30A7\u30C3\u30AF\u53EF\u80FD

</div>

<style>
  .slidev-layout td, .slidev-layout th {
    padding: 0.1rem;
    font-size: 0.7rem;
    line-height: 0.8rem;
  }
  .slidev-layout td code {
    padding: 0;
  }
  tr {
    transition: opacity 200ms ease-in-out;
  }
</style>`,frontmatter:{hideInToc:!0,layout:"sub-2-cols",clicks:1,title:"Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B"},index:0,start:0,end:114},inline:{raw:`---
src: ./src/03_080.md
---
`,content:"",frontmatter:{},index:18,start:82,end:86},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_080.md",notesHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:uk,meta:{hideInToc:!0,title:"eslint-plugin-\u793E\u5185\u7528 \u306B\u8FFD\u52A0\u30C1\u30A7\u30C3\u30AF\u3092\u5B9F\u88C5",srcSequence:"./src/03_090.md",slide:{raw:null,title:"eslint-plugin-\u793E\u5185\u7528 \u306B\u8FFD\u52A0\u30C1\u30A7\u30C3\u30AF\u3092\u5B9F\u88C5",level:2,content:`## eslint-plugin-\u793E\u5185\u7528 \u306B\u8FFD\u52A0\u30C1\u30A7\u30C3\u30AF\u3092\u5B9F\u88C5

[\u30D5\u30E5\u30FC\u30C1\u30E3\u30FC](https://www.future.co.jp/)\uFF08\u5F0A\u793E\uFF09\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u4F7F\u7528\u3059\u308B\u305F\u3081\u3060\u3051\u306B\u793E\u5185\u3067\u958B\u767A\u30FB\u904B\u7528\u3055\u308C\u3066\u3044\u308B ESLint \u30D7\u30E9\u30B0\u30A4\u30F3

- \u3053\u3053\u304B\u3089\u3001eslint-plugin-vue \u306B\u30C1\u30A7\u30C3\u30AF\u30EB\u30FC\u30EB\u3092\u8F38\u51FA\u3059\u308B\u3053\u3068\u3082\u3042\u308B
  - [vue/no-undef-properties](https://eslint.vuejs.org/rules/no-undef-properties.html) \uFF08\u672A\u5B9A\u7FA9\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u30C1\u30A7\u30C3\u30AF\u3059\u308B\u30EB\u30FC\u30EB\uFF09,  
    [vue/no-unused-refs](https://eslint.vuejs.org/rules/no-unused-refs.html) \uFF08\u672A\u4F7F\u7528\u306E\`ref="..."\`\u3092\u30C1\u30A7\u30C3\u30AF\u3059\u308B\u30EB\u30FC\u30EB\uFF09\u306A\u3069

[![Future](/FUTURE-logo.svg)](https://www.future.co.jp/)

<style>
  img {
    width: 300px;
    position: absolute;
    right: 50px;
    bottom: 50px;
  }
</style>`,frontmatter:{hideInToc:!0,title:"eslint-plugin-\u793E\u5185\u7528 \u306B\u8FFD\u52A0\u30C1\u30A7\u30C3\u30AF\u3092\u5B9F\u88C5",srcSequence:"./src/03_090.md"},index:20,start:0,end:23,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_090.md",raw:`---
hideInToc: true
---

## eslint-plugin-\u793E\u5185\u7528 \u306B\u8FFD\u52A0\u30C1\u30A7\u30C3\u30AF\u3092\u5B9F\u88C5

[\u30D5\u30E5\u30FC\u30C1\u30E3\u30FC](https://www.future.co.jp/)\uFF08\u5F0A\u793E\uFF09\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u4F7F\u7528\u3059\u308B\u305F\u3081\u3060\u3051\u306B\u793E\u5185\u3067\u958B\u767A\u30FB\u904B\u7528\u3055\u308C\u3066\u3044\u308B ESLint \u30D7\u30E9\u30B0\u30A4\u30F3

- \u3053\u3053\u304B\u3089\u3001eslint-plugin-vue \u306B\u30C1\u30A7\u30C3\u30AF\u30EB\u30FC\u30EB\u3092\u8F38\u51FA\u3059\u308B\u3053\u3068\u3082\u3042\u308B
  - [vue/no-undef-properties](https://eslint.vuejs.org/rules/no-undef-properties.html) \uFF08\u672A\u5B9A\u7FA9\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u30C1\u30A7\u30C3\u30AF\u3059\u308B\u30EB\u30FC\u30EB\uFF09,  
    [vue/no-unused-refs](https://eslint.vuejs.org/rules/no-unused-refs.html) \uFF08\u672A\u4F7F\u7528\u306E\`ref="..."\`\u3092\u30C1\u30A7\u30C3\u30AF\u3059\u308B\u30EB\u30FC\u30EB\uFF09\u306A\u3069

[![Future](/FUTURE-logo.svg)](https://www.future.co.jp/)

<style>
  img {
    width: 300px;
    position: absolute;
    right: 50px;
    bottom: 50px;
  }
</style>
`,title:"eslint-plugin-\u793E\u5185\u7528 \u306B\u8FFD\u52A0\u30C1\u30A7\u30C3\u30AF\u3092\u5B9F\u88C5",level:2,content:`## eslint-plugin-\u793E\u5185\u7528 \u306B\u8FFD\u52A0\u30C1\u30A7\u30C3\u30AF\u3092\u5B9F\u88C5

[\u30D5\u30E5\u30FC\u30C1\u30E3\u30FC](https://www.future.co.jp/)\uFF08\u5F0A\u793E\uFF09\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u4F7F\u7528\u3059\u308B\u305F\u3081\u3060\u3051\u306B\u793E\u5185\u3067\u958B\u767A\u30FB\u904B\u7528\u3055\u308C\u3066\u3044\u308B ESLint \u30D7\u30E9\u30B0\u30A4\u30F3

- \u3053\u3053\u304B\u3089\u3001eslint-plugin-vue \u306B\u30C1\u30A7\u30C3\u30AF\u30EB\u30FC\u30EB\u3092\u8F38\u51FA\u3059\u308B\u3053\u3068\u3082\u3042\u308B
  - [vue/no-undef-properties](https://eslint.vuejs.org/rules/no-undef-properties.html) \uFF08\u672A\u5B9A\u7FA9\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u30C1\u30A7\u30C3\u30AF\u3059\u308B\u30EB\u30FC\u30EB\uFF09,  
    [vue/no-unused-refs](https://eslint.vuejs.org/rules/no-unused-refs.html) \uFF08\u672A\u4F7F\u7528\u306E\`ref="..."\`\u3092\u30C1\u30A7\u30C3\u30AF\u3059\u308B\u30EB\u30FC\u30EB\uFF09\u306A\u3069

[![Future](/FUTURE-logo.svg)](https://www.future.co.jp/)

<style>
  img {
    width: 300px;
    position: absolute;
    right: 50px;
    bottom: 50px;
  }
</style>`,frontmatter:{hideInToc:!0,title:"eslint-plugin-\u793E\u5185\u7528 \u306B\u8FFD\u52A0\u30C1\u30A7\u30C3\u30AF\u3092\u5B9F\u88C5"},index:0,start:0,end:23},inline:{raw:`---
src: ./src/03_090.md
---
`,content:"",frontmatter:{},index:19,start:86,end:90},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_090.md",notesHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:vk,meta:{hideInToc:!0,layout:"sub-2-cols",clicks:1,title:"Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B",srcSequence:"./src/03_100.md",slide:{raw:null,title:"Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B",level:2,content:`## Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B

\u{1F49A}, \u{1F499}, \u{1F9E1}, \u{1F496}: eslint-plugin-vue, ESLint, eslint-plugin-vue-scoped-css, **\u793E\u5185\u7528\u30D7\u30E9\u30B0\u30A4\u30F3** \u3067\u30C1\u30A7\u30C3\u30AF\u53EF\u80FD  
\u{1F527}: \u81EA\u52D5\u4FEE\u6B63\u53EF\u80FD / \u{1F4A1}: \u30A8\u30C7\u30A3\u30BF\u4E0A\u3067\u306E\u63D0\u6848 / \u{1F507}: **\u793E\u5185\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u306F\u5F71\u97FF\u306A\u3057**

::left::

<highlight-table highlight-rows="17" :on="$slidev.nav.clicks === 1">

|                                                                                                                         |                                              |
| :---------------------------------------------------------------------------------------------------------------------- | :------------------------------------------: |
| [createApp()\u7B49](https://v3-migration.vuejs.org/breaking-changes/global-api.html)                                        |         [\u{1F499}][no-restricted-imports]          |
| [\u540D\u524D\u4ED8\u304D Export](https://v3-migration.vuejs.org/breaking-changes/global-api-treeshaking.html)                          |         [\u{1F499}][no-restricted-imports]          |
| [\`v-model\`\u306E\`modelValue\`, \`emit('input')\`](https://v3-migration.vuejs.org/breaking-changes/v-model.html)                |                     \u{1F49A}\u{1F4A1}                     |
| [\`v-bind.sync\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/v-model.html)                                       |      [\u{1F49A}\u{1F527}][no-deprecated-v-bind-sync]       |
| [\`<template v-for>\`\u306E key](https://v3-migration.vuejs.org/breaking-changes/key-attribute.html)                          |     [\u{1F49A}][no-v-for-template-key-on-child]     |
| [\`v-if\`\u30FB\`v-for\` \u306E\u512A\u5148\u5EA6](https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html)                             |         [\u{1F49A}][no-use-v-if-with-v-for]         |
| [\`v-bind="object"\`\u304C\u9806\u5E8F\u306B\u5F71\u97FF](https://v3-migration.vuejs.org/breaking-changes/v-bind.html)                            |                      \u{1F496}                      |
| [\`v-on:event.native\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html)            |   [\u{1F49A}][no-deprecated-v-on-native-modifier]   |
| [\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)            |                      \u{1F507}                      |
| [SFC \u306E\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)            |   [\u{1F49A}][no-deprecated-functional-template]    |
| [\u975E\u540C\u671F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/async-components.html)                 |                      \u{1F507}                      |
| [\`emits\`\u30AA\u30D7\u30B7\u30E7\u30F3](https://v3-migration.vuejs.org/breaking-changes/emits-option.html)                                  |        [\u{1F49A}\u{1F4A1}][require-explicit-emits]        |
| [\`render\`\u95A2\u6570\u306E\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/render-function-api.html)                          |                      \u{1F496}                      |
| [\`$scopedSlots\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)                            | [\u{1F49A}\u{1F527}][no-deprecated-dollar-scopedslots-api] |
| [\`$slots\`\u306E\u95A2\u6570\u5316](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)                              |       [\u{1F49A}][require-slots-as-functions]       |
| [\`$listeners\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/listeners-removed)                                   |   [\u{1F49A}][no-deprecated-dollar-listeners-api]   |
| [\`$attrs\`\u306E\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html)                       |                      \u274C                      |
| [\u30AB\u30B9\u30BF\u30E0\u8981\u7D20\u306E\u6271\u3044](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html)                      |                      \u{1F507}                      |
| [\`is\`\u306E\u8A18\u6CD5](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html#customized-built-in-elements) |     [\u{1F49A}][no-deprecated-html-element-is]      |
| \`unmounted\`                                                                                                             |  [\u{1F49A}\u{1F4A1}][no-deprecated-destroyed-lifecycle]   |
| \`beforeUnmount\`                                                                                                         |  [\u{1F49A}\u{1F4A1}][no-deprecated-destroyed-lifecycle]   |

</highlight-table>

[no-deprecated-destroyed-lifecycle]: https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html
[no-deprecated-dollar-listeners-api]: https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html
[no-deprecated-dollar-scopedslots-api]: https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html
[no-deprecated-functional-template]: https://eslint.vuejs.org/rules/no-deprecated-functional-template.html
[no-deprecated-html-element-is]: https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html
[no-deprecated-v-bind-sync]: https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html
[no-deprecated-v-on-native-modifier]: https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html
[no-v-for-template-key-on-child]: https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html
[require-slots-as-functions]: https://eslint.vuejs.org/rules/require-slots-as-functions.html
[require-explicit-emits]: https://eslint.vuejs.org/rules/require-explicit-emits.html
[no-use-v-if-with-v-for]: https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html
[no-restricted-custom-event]: https://eslint.vuejs.org/rules/no-restricted-custom-event.html
[no-restricted-props]: https://eslint.vuejs.org/rules/no-restricted-props.html
[no-restricted-imports]: https://eslint.org/docs/latest/rules/no-restricted-imports

::right::

<highlight-table highlight-rows="2, 7, 8, 10, 11" :on="$slidev.nav.clicks === 1">

|                                                                                                                      |                                               |
| :------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------: |
| [\`default\`\u306E\`this\`](https://v3-migration.vuejs.org/breaking-changes/props-default-this.html)                         |    [\u{1F49A}][no-deprecated-props-default-this]     |
| [\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/custom-directives.html)             |                      \u274C                       |
| [\`data\`\u95A2\u6570](https://v3-migration.vuejs.org/breaking-changes/data-option.html)                                       | [\u{1F49A}\u{1F527}][no-deprecated-data-object-declaration] |
| [mixin \u306E\`data\`\u306E\u6271\u3044](https://v3-migration.vuejs.org/breaking-changes/data-option.html#mixin-merge-behavior-change) |                      \u{1F507}                       |
| [\`:attr=false\`](https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html)                             |                      \u{1F507}                       |
| [Transition \u30AF\u30E9\u30B9\u540D\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/transition.html)                           |   [\u{1F9E1}][no-deprecated-v-enter-v-leave-class]   |
| [\`<TransitionGroup>\`\u306E\u30EB\u30FC\u30C8\u8981\u7D20](https://v3-migration.vuejs.org/breaking-changes/transition-group.html)             |                      \u274C                       |
| [\u914D\u5217\u306E watch](https://v3-migration.vuejs.org/breaking-changes/watch.html)                                           |                      \u274C                       |
| \u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u7121\u3057\u306E\`<template>\`                                                                                     |            [\u{1F49A}][no-lone-template]             |
| [Vue \u30A2\u30D7\u30EA\u306E\u30EB\u30FC\u30C8](https://v3-migration.vuejs.org/breaking-changes/mount-changes.html)                             |                      \u274C                       |
| [\`hook:\`\u30A4\u30D9\u30F3\u30C8](https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html)                       |                      \u274C                       |
| [\`v-on\`\u30AD\u30FC\u4FEE\u98FE\u5B50](https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html)                           |  [\u{1F49A}\u{1F527}][no-deprecated-v-on-number-modifiers]  |
| [\`$on\`\u30FB\`$off\`\u30FB\`$once\`](https://v3-migration.vuejs.org/breaking-changes/events-api.html)                            |        [\u{1F49A}][no-deprecated-events-api]         |
| [\u30D5\u30A3\u30EB\u30BF\u30FC](https://v3-migration.vuejs.org/breaking-changes/filters.html)                                           |        [\u{1F49A}][no-deprecated-filter] \u{1F496}\u{1F527}        |
| [Inline \u30C6\u30F3\u30D7\u30EC\u30FC\u30C8](https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html)                |      [\u{1F49A}][no-deprecated-inline-template]      |
| [\`$children\`](https://v3-migration.vuejs.org/breaking-changes/children.html)                                         |        [\u{1F499}][no-restricted-properties]         |
| [\`propsData\`](https://v3-migration.vuejs.org/breaking-changes/props-data.html)                                       |                      \u{1F507}                       |
| \`$destroy()\`                                                                                                         |        [\u{1F499}][no-restricted-properties]         |
| \`Vue.set()\`\u30FB\`Vue.delete()\`                                                                                          |          [\u{1F499}][no-restricted-imports]          |

</highlight-table>

[no-deprecated-data-object-declaration]: https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html
[no-deprecated-events-api]: https://eslint.vuejs.org/rules/no-deprecated-events-api.html
[no-deprecated-filter]: https://eslint.vuejs.org/rules/no-deprecated-filter.html
[no-deprecated-inline-template]: https://eslint.vuejs.org/rules/no-deprecated-inline-template.html
[no-deprecated-props-default-this]: https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html
[no-deprecated-v-on-number-modifiers]: https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html
[no-lone-template]: https://eslint.vuejs.org/rules/no-lone-template.html
[no-restricted-properties]: https://eslint.org/docs/latest/rules/no-restricted-properties
[no-deprecated-v-enter-v-leave-class]: https://future-architect.github.io/eslint-plugin-vue-scoped-css/rules/no-deprecated-v-enter-v-leave-class.html

<div class="text-xs">

\u306E\u3053\u308A 6 \u9805\u76EE

</div>

<style>
  .slidev-layout td, .slidev-layout th {
    padding: 0.1rem;
    font-size: 0.7rem;
    line-height: 0.8rem;
  }
  .slidev-layout td code {
    padding: 0;
  }
  tr {
    transition: opacity 200ms ease-in-out;
  }
</style>`,frontmatter:{hideInToc:!0,layout:"sub-2-cols",clicks:1,title:"Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B",srcSequence:"./src/03_100.md"},index:21,start:0,end:114,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_100.md",raw:`---
hideInToc: true
layout: sub-2-cols
clicks: 1
---

## Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B

\u{1F49A}, \u{1F499}, \u{1F9E1}, \u{1F496}: eslint-plugin-vue, ESLint, eslint-plugin-vue-scoped-css, **\u793E\u5185\u7528\u30D7\u30E9\u30B0\u30A4\u30F3** \u3067\u30C1\u30A7\u30C3\u30AF\u53EF\u80FD  
\u{1F527}: \u81EA\u52D5\u4FEE\u6B63\u53EF\u80FD / \u{1F4A1}: \u30A8\u30C7\u30A3\u30BF\u4E0A\u3067\u306E\u63D0\u6848 / \u{1F507}: **\u793E\u5185\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u306F\u5F71\u97FF\u306A\u3057**

::left::

<highlight-table highlight-rows="17" :on="$slidev.nav.clicks === 1">

|                                                                                                                         |                                              |
| :---------------------------------------------------------------------------------------------------------------------- | :------------------------------------------: |
| [createApp()\u7B49](https://v3-migration.vuejs.org/breaking-changes/global-api.html)                                        |         [\u{1F499}][no-restricted-imports]          |
| [\u540D\u524D\u4ED8\u304D Export](https://v3-migration.vuejs.org/breaking-changes/global-api-treeshaking.html)                          |         [\u{1F499}][no-restricted-imports]          |
| [\`v-model\`\u306E\`modelValue\`, \`emit('input')\`](https://v3-migration.vuejs.org/breaking-changes/v-model.html)                |                     \u{1F49A}\u{1F4A1}                     |
| [\`v-bind.sync\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/v-model.html)                                       |      [\u{1F49A}\u{1F527}][no-deprecated-v-bind-sync]       |
| [\`<template v-for>\`\u306E key](https://v3-migration.vuejs.org/breaking-changes/key-attribute.html)                          |     [\u{1F49A}][no-v-for-template-key-on-child]     |
| [\`v-if\`\u30FB\`v-for\` \u306E\u512A\u5148\u5EA6](https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html)                             |         [\u{1F49A}][no-use-v-if-with-v-for]         |
| [\`v-bind="object"\`\u304C\u9806\u5E8F\u306B\u5F71\u97FF](https://v3-migration.vuejs.org/breaking-changes/v-bind.html)                            |                      \u{1F496}                      |
| [\`v-on:event.native\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html)            |   [\u{1F49A}][no-deprecated-v-on-native-modifier]   |
| [\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)            |                      \u{1F507}                      |
| [SFC \u306E\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)            |   [\u{1F49A}][no-deprecated-functional-template]    |
| [\u975E\u540C\u671F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/async-components.html)                 |                      \u{1F507}                      |
| [\`emits\`\u30AA\u30D7\u30B7\u30E7\u30F3](https://v3-migration.vuejs.org/breaking-changes/emits-option.html)                                  |        [\u{1F49A}\u{1F4A1}][require-explicit-emits]        |
| [\`render\`\u95A2\u6570\u306E\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/render-function-api.html)                          |                      \u{1F496}                      |
| [\`$scopedSlots\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)                            | [\u{1F49A}\u{1F527}][no-deprecated-dollar-scopedslots-api] |
| [\`$slots\`\u306E\u95A2\u6570\u5316](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)                              |       [\u{1F49A}][require-slots-as-functions]       |
| [\`$listeners\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/listeners-removed)                                   |   [\u{1F49A}][no-deprecated-dollar-listeners-api]   |
| [\`$attrs\`\u306E\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html)                       |                      \u274C                      |
| [\u30AB\u30B9\u30BF\u30E0\u8981\u7D20\u306E\u6271\u3044](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html)                      |                      \u{1F507}                      |
| [\`is\`\u306E\u8A18\u6CD5](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html#customized-built-in-elements) |     [\u{1F49A}][no-deprecated-html-element-is]      |
| \`unmounted\`                                                                                                             |  [\u{1F49A}\u{1F4A1}][no-deprecated-destroyed-lifecycle]   |
| \`beforeUnmount\`                                                                                                         |  [\u{1F49A}\u{1F4A1}][no-deprecated-destroyed-lifecycle]   |

</highlight-table>

[no-deprecated-destroyed-lifecycle]: https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html
[no-deprecated-dollar-listeners-api]: https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html
[no-deprecated-dollar-scopedslots-api]: https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html
[no-deprecated-functional-template]: https://eslint.vuejs.org/rules/no-deprecated-functional-template.html
[no-deprecated-html-element-is]: https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html
[no-deprecated-v-bind-sync]: https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html
[no-deprecated-v-on-native-modifier]: https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html
[no-v-for-template-key-on-child]: https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html
[require-slots-as-functions]: https://eslint.vuejs.org/rules/require-slots-as-functions.html
[require-explicit-emits]: https://eslint.vuejs.org/rules/require-explicit-emits.html
[no-use-v-if-with-v-for]: https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html
[no-restricted-custom-event]: https://eslint.vuejs.org/rules/no-restricted-custom-event.html
[no-restricted-props]: https://eslint.vuejs.org/rules/no-restricted-props.html
[no-restricted-imports]: https://eslint.org/docs/latest/rules/no-restricted-imports

::right::

<highlight-table highlight-rows="2, 7, 8, 10, 11" :on="$slidev.nav.clicks === 1">

|                                                                                                                      |                                               |
| :------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------: |
| [\`default\`\u306E\`this\`](https://v3-migration.vuejs.org/breaking-changes/props-default-this.html)                         |    [\u{1F49A}][no-deprecated-props-default-this]     |
| [\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/custom-directives.html)             |                      \u274C                       |
| [\`data\`\u95A2\u6570](https://v3-migration.vuejs.org/breaking-changes/data-option.html)                                       | [\u{1F49A}\u{1F527}][no-deprecated-data-object-declaration] |
| [mixin \u306E\`data\`\u306E\u6271\u3044](https://v3-migration.vuejs.org/breaking-changes/data-option.html#mixin-merge-behavior-change) |                      \u{1F507}                       |
| [\`:attr=false\`](https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html)                             |                      \u{1F507}                       |
| [Transition \u30AF\u30E9\u30B9\u540D\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/transition.html)                           |   [\u{1F9E1}][no-deprecated-v-enter-v-leave-class]   |
| [\`<TransitionGroup>\`\u306E\u30EB\u30FC\u30C8\u8981\u7D20](https://v3-migration.vuejs.org/breaking-changes/transition-group.html)             |                      \u274C                       |
| [\u914D\u5217\u306E watch](https://v3-migration.vuejs.org/breaking-changes/watch.html)                                           |                      \u274C                       |
| \u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u7121\u3057\u306E\`<template>\`                                                                                     |            [\u{1F49A}][no-lone-template]             |
| [Vue \u30A2\u30D7\u30EA\u306E\u30EB\u30FC\u30C8](https://v3-migration.vuejs.org/breaking-changes/mount-changes.html)                             |                      \u274C                       |
| [\`hook:\`\u30A4\u30D9\u30F3\u30C8](https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html)                       |                      \u274C                       |
| [\`v-on\`\u30AD\u30FC\u4FEE\u98FE\u5B50](https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html)                           |  [\u{1F49A}\u{1F527}][no-deprecated-v-on-number-modifiers]  |
| [\`$on\`\u30FB\`$off\`\u30FB\`$once\`](https://v3-migration.vuejs.org/breaking-changes/events-api.html)                            |        [\u{1F49A}][no-deprecated-events-api]         |
| [\u30D5\u30A3\u30EB\u30BF\u30FC](https://v3-migration.vuejs.org/breaking-changes/filters.html)                                           |        [\u{1F49A}][no-deprecated-filter] \u{1F496}\u{1F527}        |
| [Inline \u30C6\u30F3\u30D7\u30EC\u30FC\u30C8](https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html)                |      [\u{1F49A}][no-deprecated-inline-template]      |
| [\`$children\`](https://v3-migration.vuejs.org/breaking-changes/children.html)                                         |        [\u{1F499}][no-restricted-properties]         |
| [\`propsData\`](https://v3-migration.vuejs.org/breaking-changes/props-data.html)                                       |                      \u{1F507}                       |
| \`$destroy()\`                                                                                                         |        [\u{1F499}][no-restricted-properties]         |
| \`Vue.set()\`\u30FB\`Vue.delete()\`                                                                                          |          [\u{1F499}][no-restricted-imports]          |

</highlight-table>

[no-deprecated-data-object-declaration]: https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html
[no-deprecated-events-api]: https://eslint.vuejs.org/rules/no-deprecated-events-api.html
[no-deprecated-filter]: https://eslint.vuejs.org/rules/no-deprecated-filter.html
[no-deprecated-inline-template]: https://eslint.vuejs.org/rules/no-deprecated-inline-template.html
[no-deprecated-props-default-this]: https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html
[no-deprecated-v-on-number-modifiers]: https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html
[no-lone-template]: https://eslint.vuejs.org/rules/no-lone-template.html
[no-restricted-properties]: https://eslint.org/docs/latest/rules/no-restricted-properties
[no-deprecated-v-enter-v-leave-class]: https://future-architect.github.io/eslint-plugin-vue-scoped-css/rules/no-deprecated-v-enter-v-leave-class.html

<div class="text-xs">

\u306E\u3053\u308A 6 \u9805\u76EE

</div>

<style>
  .slidev-layout td, .slidev-layout th {
    padding: 0.1rem;
    font-size: 0.7rem;
    line-height: 0.8rem;
  }
  .slidev-layout td code {
    padding: 0;
  }
  tr {
    transition: opacity 200ms ease-in-out;
  }
</style>
`,title:"Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B",level:2,content:`## Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B

\u{1F49A}, \u{1F499}, \u{1F9E1}, \u{1F496}: eslint-plugin-vue, ESLint, eslint-plugin-vue-scoped-css, **\u793E\u5185\u7528\u30D7\u30E9\u30B0\u30A4\u30F3** \u3067\u30C1\u30A7\u30C3\u30AF\u53EF\u80FD  
\u{1F527}: \u81EA\u52D5\u4FEE\u6B63\u53EF\u80FD / \u{1F4A1}: \u30A8\u30C7\u30A3\u30BF\u4E0A\u3067\u306E\u63D0\u6848 / \u{1F507}: **\u793E\u5185\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u306F\u5F71\u97FF\u306A\u3057**

::left::

<highlight-table highlight-rows="17" :on="$slidev.nav.clicks === 1">

|                                                                                                                         |                                              |
| :---------------------------------------------------------------------------------------------------------------------- | :------------------------------------------: |
| [createApp()\u7B49](https://v3-migration.vuejs.org/breaking-changes/global-api.html)                                        |         [\u{1F499}][no-restricted-imports]          |
| [\u540D\u524D\u4ED8\u304D Export](https://v3-migration.vuejs.org/breaking-changes/global-api-treeshaking.html)                          |         [\u{1F499}][no-restricted-imports]          |
| [\`v-model\`\u306E\`modelValue\`, \`emit('input')\`](https://v3-migration.vuejs.org/breaking-changes/v-model.html)                |                     \u{1F49A}\u{1F4A1}                     |
| [\`v-bind.sync\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/v-model.html)                                       |      [\u{1F49A}\u{1F527}][no-deprecated-v-bind-sync]       |
| [\`<template v-for>\`\u306E key](https://v3-migration.vuejs.org/breaking-changes/key-attribute.html)                          |     [\u{1F49A}][no-v-for-template-key-on-child]     |
| [\`v-if\`\u30FB\`v-for\` \u306E\u512A\u5148\u5EA6](https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html)                             |         [\u{1F49A}][no-use-v-if-with-v-for]         |
| [\`v-bind="object"\`\u304C\u9806\u5E8F\u306B\u5F71\u97FF](https://v3-migration.vuejs.org/breaking-changes/v-bind.html)                            |                      \u{1F496}                      |
| [\`v-on:event.native\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html)            |   [\u{1F49A}][no-deprecated-v-on-native-modifier]   |
| [\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)            |                      \u{1F507}                      |
| [SFC \u306E\u95A2\u6570\u578B\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/functional-components.html)            |   [\u{1F49A}][no-deprecated-functional-template]    |
| [\u975E\u540C\u671F\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/async-components.html)                 |                      \u{1F507}                      |
| [\`emits\`\u30AA\u30D7\u30B7\u30E7\u30F3](https://v3-migration.vuejs.org/breaking-changes/emits-option.html)                                  |        [\u{1F49A}\u{1F4A1}][require-explicit-emits]        |
| [\`render\`\u95A2\u6570\u306E\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/render-function-api.html)                          |                      \u{1F496}                      |
| [\`$scopedSlots\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)                            | [\u{1F49A}\u{1F527}][no-deprecated-dollar-scopedslots-api] |
| [\`$slots\`\u306E\u95A2\u6570\u5316](https://v3-migration.vuejs.org/breaking-changes/slots-unification.html)                              |       [\u{1F49A}][require-slots-as-functions]       |
| [\`$listeners\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/listeners-removed)                                   |   [\u{1F49A}][no-deprecated-dollar-listeners-api]   |
| [\`$attrs\`\u306E\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html)                       |                      \u274C                      |
| [\u30AB\u30B9\u30BF\u30E0\u8981\u7D20\u306E\u6271\u3044](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html)                      |                      \u{1F507}                      |
| [\`is\`\u306E\u8A18\u6CD5](https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html#customized-built-in-elements) |     [\u{1F49A}][no-deprecated-html-element-is]      |
| \`unmounted\`                                                                                                             |  [\u{1F49A}\u{1F4A1}][no-deprecated-destroyed-lifecycle]   |
| \`beforeUnmount\`                                                                                                         |  [\u{1F49A}\u{1F4A1}][no-deprecated-destroyed-lifecycle]   |

</highlight-table>

[no-deprecated-destroyed-lifecycle]: https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html
[no-deprecated-dollar-listeners-api]: https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html
[no-deprecated-dollar-scopedslots-api]: https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html
[no-deprecated-functional-template]: https://eslint.vuejs.org/rules/no-deprecated-functional-template.html
[no-deprecated-html-element-is]: https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html
[no-deprecated-v-bind-sync]: https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html
[no-deprecated-v-on-native-modifier]: https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html
[no-v-for-template-key-on-child]: https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html
[require-slots-as-functions]: https://eslint.vuejs.org/rules/require-slots-as-functions.html
[require-explicit-emits]: https://eslint.vuejs.org/rules/require-explicit-emits.html
[no-use-v-if-with-v-for]: https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html
[no-restricted-custom-event]: https://eslint.vuejs.org/rules/no-restricted-custom-event.html
[no-restricted-props]: https://eslint.vuejs.org/rules/no-restricted-props.html
[no-restricted-imports]: https://eslint.org/docs/latest/rules/no-restricted-imports

::right::

<highlight-table highlight-rows="2, 7, 8, 10, 11" :on="$slidev.nav.clicks === 1">

|                                                                                                                      |                                               |
| :------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------: |
| [\`default\`\u306E\`this\`](https://v3-migration.vuejs.org/breaking-changes/props-default-this.html)                         |    [\u{1F49A}][no-deprecated-props-default-this]     |
| [\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/custom-directives.html)             |                      \u274C                       |
| [\`data\`\u95A2\u6570](https://v3-migration.vuejs.org/breaking-changes/data-option.html)                                       | [\u{1F49A}\u{1F527}][no-deprecated-data-object-declaration] |
| [mixin \u306E\`data\`\u306E\u6271\u3044](https://v3-migration.vuejs.org/breaking-changes/data-option.html#mixin-merge-behavior-change) |                      \u{1F507}                       |
| [\`:attr=false\`](https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html)                             |                      \u{1F507}                       |
| [Transition \u30AF\u30E9\u30B9\u540D\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/transition.html)                           |   [\u{1F9E1}][no-deprecated-v-enter-v-leave-class]   |
| [\`<TransitionGroup>\`\u306E\u30EB\u30FC\u30C8\u8981\u7D20](https://v3-migration.vuejs.org/breaking-changes/transition-group.html)             |                      \u274C                       |
| [\u914D\u5217\u306E watch](https://v3-migration.vuejs.org/breaking-changes/watch.html)                                           |                      \u274C                       |
| \u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u7121\u3057\u306E\`<template>\`                                                                                     |            [\u{1F49A}][no-lone-template]             |
| [Vue \u30A2\u30D7\u30EA\u306E\u30EB\u30FC\u30C8](https://v3-migration.vuejs.org/breaking-changes/mount-changes.html)                             |                      \u274C                       |
| [\`hook:\`\u30A4\u30D9\u30F3\u30C8](https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html)                       |                      \u274C                       |
| [\`v-on\`\u30AD\u30FC\u4FEE\u98FE\u5B50](https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html)                           |  [\u{1F49A}\u{1F527}][no-deprecated-v-on-number-modifiers]  |
| [\`$on\`\u30FB\`$off\`\u30FB\`$once\`](https://v3-migration.vuejs.org/breaking-changes/events-api.html)                            |        [\u{1F49A}][no-deprecated-events-api]         |
| [\u30D5\u30A3\u30EB\u30BF\u30FC](https://v3-migration.vuejs.org/breaking-changes/filters.html)                                           |        [\u{1F49A}][no-deprecated-filter] \u{1F496}\u{1F527}        |
| [Inline \u30C6\u30F3\u30D7\u30EC\u30FC\u30C8](https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html)                |      [\u{1F49A}][no-deprecated-inline-template]      |
| [\`$children\`](https://v3-migration.vuejs.org/breaking-changes/children.html)                                         |        [\u{1F499}][no-restricted-properties]         |
| [\`propsData\`](https://v3-migration.vuejs.org/breaking-changes/props-data.html)                                       |                      \u{1F507}                       |
| \`$destroy()\`                                                                                                         |        [\u{1F499}][no-restricted-properties]         |
| \`Vue.set()\`\u30FB\`Vue.delete()\`                                                                                          |          [\u{1F499}][no-restricted-imports]          |

</highlight-table>

[no-deprecated-data-object-declaration]: https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html
[no-deprecated-events-api]: https://eslint.vuejs.org/rules/no-deprecated-events-api.html
[no-deprecated-filter]: https://eslint.vuejs.org/rules/no-deprecated-filter.html
[no-deprecated-inline-template]: https://eslint.vuejs.org/rules/no-deprecated-inline-template.html
[no-deprecated-props-default-this]: https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html
[no-deprecated-v-on-number-modifiers]: https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html
[no-lone-template]: https://eslint.vuejs.org/rules/no-lone-template.html
[no-restricted-properties]: https://eslint.org/docs/latest/rules/no-restricted-properties
[no-deprecated-v-enter-v-leave-class]: https://future-architect.github.io/eslint-plugin-vue-scoped-css/rules/no-deprecated-v-enter-v-leave-class.html

<div class="text-xs">

\u306E\u3053\u308A 6 \u9805\u76EE

</div>

<style>
  .slidev-layout td, .slidev-layout th {
    padding: 0.1rem;
    font-size: 0.7rem;
    line-height: 0.8rem;
  }
  .slidev-layout td code {
    padding: 0;
  }
  tr {
    transition: opacity 200ms ease-in-out;
  }
</style>`,frontmatter:{hideInToc:!0,layout:"sub-2-cols",clicks:1,title:"Vue3 \u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B"},index:0,start:0,end:114},inline:{raw:`---
src: ./src/03_100.md
---
`,content:"",frontmatter:{},index:20,start:90,end:94},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_100.md",notesHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:Sk,meta:{hideInToc:!0,layout:"sub-2-cols",title:"\u30D5\u30A3\u30EB\u30BF\u30FC\u5EC3\u6B62\u306B\u4F34\u3046\u5BFE\u5FDC\u306B\u3064\u3044\u3066",srcSequence:"./src/03_110.md",slide:{raw:null,title:"\u30D5\u30A3\u30EB\u30BF\u30FC\u5EC3\u6B62\u306B\u4F34\u3046\u5BFE\u5FDC\u306B\u3064\u3044\u3066",level:2,content:`## \u30D5\u30A3\u30EB\u30BF\u30FC\u5EC3\u6B62\u306B\u4F34\u3046\u5BFE\u5FDC\u306B\u3064\u3044\u3066

\u30D5\u30A3\u30EB\u30BF\u30FC\u5EC3\u6B62\u306B\u4F34\u3063\u3066\u3001\u793E\u5185\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u3067\u306F\u95A2\u6570\u547C\u3073\u51FA\u3057\u306B\u7F6E\u304D\u63DB\u3048\u308B\u65B9\u91DD\u3068\u3057\u307E\u3057\u305F\u3002  
\u3057\u304B\u3057\u3001eslint-plugin-vue \u3067\u3082[\u30D5\u30A3\u30EB\u30BF\u30FC\u306E\u4F7F\u7528\u7B87\u6240\u3092\u691C\u51FA](https://eslint.vuejs.org/rules/no-deprecated-filter.html)\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u304C*\u81EA\u52D5\u7684\u306B\u4FEE\u6B63\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093*\u3002  
\u30D5\u30A3\u30EB\u30BF\u30FC\u306F\u304B\u306A\u308A\u591A\u304F\u306E\u7B87\u6240\u3067\u4F7F\u7528\u3057\u3066\u3044\u305F\u305F\u3081\u3001**\u793E\u5185\u7528 ESLint \u30D7\u30E9\u30B0\u30A4\u30F3\u306B\u81EA\u52D5\u4FEE\u6B63\u3092\u6301\u3064\u30EB\u30FC\u30EB\u3092\u8FFD\u52A0**\u3057\u3066\u5BFE\u5FDC\u3057\u307E\u3057\u305F\u3002

::left::

\`\`\`js
module.exports = {
  // ...
  rules: {
    // ...
    "internal/no-vue-filter": [
      "error",
      {
        /* \u30D5\u30A3\u30EB\u30BF\u30FC\u540D: \u4FEE\u6B63\u5F8C\u306E\u95A2\u6570\u60C5\u5831 */
        formatNum: { method: "$util.formatNum" },
        className: {
          method: "$util.getClassName",
          argumentIndex: 1,
        },
        // ...
      },
    ],
    // ...
  },
  // ...
};
\`\`\`

::right::

Before:

![no-vue-filter before](/no-vue-filter-before.png)

After:

![no-vue-filter after](/no-vue-filter-after.png)`,frontmatter:{hideInToc:!0,layout:"sub-2-cols",title:"\u30D5\u30A3\u30EB\u30BF\u30FC\u5EC3\u6B62\u306B\u4F34\u3046\u5BFE\u5FDC\u306B\u3064\u3044\u3066",srcSequence:"./src/03_110.md"},index:22,start:0,end:46,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_110.md",raw:`---
hideInToc: true
layout: sub-2-cols
---

## \u30D5\u30A3\u30EB\u30BF\u30FC\u5EC3\u6B62\u306B\u4F34\u3046\u5BFE\u5FDC\u306B\u3064\u3044\u3066

\u30D5\u30A3\u30EB\u30BF\u30FC\u5EC3\u6B62\u306B\u4F34\u3063\u3066\u3001\u793E\u5185\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u3067\u306F\u95A2\u6570\u547C\u3073\u51FA\u3057\u306B\u7F6E\u304D\u63DB\u3048\u308B\u65B9\u91DD\u3068\u3057\u307E\u3057\u305F\u3002  
\u3057\u304B\u3057\u3001eslint-plugin-vue \u3067\u3082[\u30D5\u30A3\u30EB\u30BF\u30FC\u306E\u4F7F\u7528\u7B87\u6240\u3092\u691C\u51FA](https://eslint.vuejs.org/rules/no-deprecated-filter.html)\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u304C*\u81EA\u52D5\u7684\u306B\u4FEE\u6B63\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093*\u3002  
\u30D5\u30A3\u30EB\u30BF\u30FC\u306F\u304B\u306A\u308A\u591A\u304F\u306E\u7B87\u6240\u3067\u4F7F\u7528\u3057\u3066\u3044\u305F\u305F\u3081\u3001**\u793E\u5185\u7528 ESLint \u30D7\u30E9\u30B0\u30A4\u30F3\u306B\u81EA\u52D5\u4FEE\u6B63\u3092\u6301\u3064\u30EB\u30FC\u30EB\u3092\u8FFD\u52A0**\u3057\u3066\u5BFE\u5FDC\u3057\u307E\u3057\u305F\u3002

::left::

\`\`\`js
module.exports = {
  // ...
  rules: {
    // ...
    "internal/no-vue-filter": [
      "error",
      {
        /* \u30D5\u30A3\u30EB\u30BF\u30FC\u540D: \u4FEE\u6B63\u5F8C\u306E\u95A2\u6570\u60C5\u5831 */
        formatNum: { method: "$util.formatNum" },
        className: {
          method: "$util.getClassName",
          argumentIndex: 1,
        },
        // ...
      },
    ],
    // ...
  },
  // ...
};
\`\`\`

::right::

Before:

![no-vue-filter before](/no-vue-filter-before.png)

After:

![no-vue-filter after](/no-vue-filter-after.png)
`,title:"\u30D5\u30A3\u30EB\u30BF\u30FC\u5EC3\u6B62\u306B\u4F34\u3046\u5BFE\u5FDC\u306B\u3064\u3044\u3066",level:2,content:`## \u30D5\u30A3\u30EB\u30BF\u30FC\u5EC3\u6B62\u306B\u4F34\u3046\u5BFE\u5FDC\u306B\u3064\u3044\u3066

\u30D5\u30A3\u30EB\u30BF\u30FC\u5EC3\u6B62\u306B\u4F34\u3063\u3066\u3001\u793E\u5185\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u3067\u306F\u95A2\u6570\u547C\u3073\u51FA\u3057\u306B\u7F6E\u304D\u63DB\u3048\u308B\u65B9\u91DD\u3068\u3057\u307E\u3057\u305F\u3002  
\u3057\u304B\u3057\u3001eslint-plugin-vue \u3067\u3082[\u30D5\u30A3\u30EB\u30BF\u30FC\u306E\u4F7F\u7528\u7B87\u6240\u3092\u691C\u51FA](https://eslint.vuejs.org/rules/no-deprecated-filter.html)\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u304C*\u81EA\u52D5\u7684\u306B\u4FEE\u6B63\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093*\u3002  
\u30D5\u30A3\u30EB\u30BF\u30FC\u306F\u304B\u306A\u308A\u591A\u304F\u306E\u7B87\u6240\u3067\u4F7F\u7528\u3057\u3066\u3044\u305F\u305F\u3081\u3001**\u793E\u5185\u7528 ESLint \u30D7\u30E9\u30B0\u30A4\u30F3\u306B\u81EA\u52D5\u4FEE\u6B63\u3092\u6301\u3064\u30EB\u30FC\u30EB\u3092\u8FFD\u52A0**\u3057\u3066\u5BFE\u5FDC\u3057\u307E\u3057\u305F\u3002

::left::

\`\`\`js
module.exports = {
  // ...
  rules: {
    // ...
    "internal/no-vue-filter": [
      "error",
      {
        /* \u30D5\u30A3\u30EB\u30BF\u30FC\u540D: \u4FEE\u6B63\u5F8C\u306E\u95A2\u6570\u60C5\u5831 */
        formatNum: { method: "$util.formatNum" },
        className: {
          method: "$util.getClassName",
          argumentIndex: 1,
        },
        // ...
      },
    ],
    // ...
  },
  // ...
};
\`\`\`

::right::

Before:

![no-vue-filter before](/no-vue-filter-before.png)

After:

![no-vue-filter after](/no-vue-filter-after.png)`,frontmatter:{hideInToc:!0,layout:"sub-2-cols",title:"\u30D5\u30A3\u30EB\u30BF\u30FC\u5EC3\u6B62\u306B\u4F34\u3046\u5BFE\u5FDC\u306B\u3064\u3044\u3066"},index:0,start:0,end:46},inline:{raw:`---
src: ./src/03_110.md
---
`,content:"",frontmatter:{},index:21,start:94,end:98},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_110.md",notesHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:Ck,meta:{layout:"section",hideInToc:!0,title:"\u6B8B\u308A 6 \u9805\u76EE\u306F\u3069\u3046\u3057\u305F\uFF1F<br>\u{1F914}",srcSequence:"./src/03_115.md",slide:{raw:null,title:"\u6B8B\u308A 6 \u9805\u76EE\u306F\u3069\u3046\u3057\u305F\uFF1F<br>\u{1F914}",level:1,content:"# \u6B8B\u308A 6 \u9805\u76EE\u306F\u3069\u3046\u3057\u305F\uFF1F<br>\u{1F914}",frontmatter:{layout:"section",hideInToc:!0,title:"\u6B8B\u308A 6 \u9805\u76EE\u306F\u3069\u3046\u3057\u305F\uFF1F<br>\u{1F914}",srcSequence:"./src/03_115.md"},index:23,start:0,end:7,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_115.md",raw:`---
layout: section
hideInToc: true
---

# \u6B8B\u308A 6 \u9805\u76EE\u306F\u3069\u3046\u3057\u305F\uFF1F<br>\u{1F914}
`,title:"\u6B8B\u308A 6 \u9805\u76EE\u306F\u3069\u3046\u3057\u305F\uFF1F<br>\u{1F914}",level:1,content:"# \u6B8B\u308A 6 \u9805\u76EE\u306F\u3069\u3046\u3057\u305F\uFF1F<br>\u{1F914}",frontmatter:{layout:"section",hideInToc:!0,title:"\u6B8B\u308A 6 \u9805\u76EE\u306F\u3069\u3046\u3057\u305F\uFF1F<br>\u{1F914}"},index:0,start:0,end:7},inline:{raw:`---
src: ./src/03_115.md
---
`,content:"",frontmatter:{},index:22,start:98,end:102},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_115.md",notesHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:Ok,meta:{hideInToc:!0,layout:"sub-2-cols",title:"\u6B8B\u308A\u306F\u3069\u3046\u3057\u305F\uFF1F",srcSequence:"./src/03_120.md",slide:{raw:null,title:"\u6B8B\u308A\u306F\u3069\u3046\u3057\u305F\uFF1F",level:2,content:`## \u6B8B\u308A\u306F\u3069\u3046\u3057\u305F\uFF1F

\u6B8B\u308A\u306E 6 \u9805\u76EE\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u5BFE\u5FDC\u3057\u307E\u3057\u305F\u3002  
\u3069\u308C\u3082\u3059\u3050\u306B\u898B\u3064\u3051\u3089\u308C\u3059\u3050\u4FEE\u6B63\u3067\u304D\u305F\u306E\u3067\u3001ESLint \u30EB\u30FC\u30EB\u3092\u4F7F\u7528\u3057\u307E\u305B\u3093\u3067\u3057\u305F\u3002  
\uFF08\u4ECA\u5F8C\u8FFD\u52A0\u3059\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002\uFF09

<div class="text-sm">

- [\`$attrs\`\u306E\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html)  
  ... \u5168\u3066\`$listeners\`\u3068\u4F75\u7528\u3057\u3066\u3044\u305F\u305F\u3081[\`$listeners\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/listeners-removed)\u306E\u5BFE\u5FDC\u3092\u3057\u3066\u4F5C\u696D\u7D42\u4E86\u3002
- [\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/custom-directives.html)  
  ... \u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u306F\u30D5\u30A1\u30A4\u30EB\u69CB\u6210\u3068\u3057\u3066\u307E\u3068\u3081\u3066\u3044\u305F\u306E\u3067\u898B\u3064\u3051\u308B\u305F\u3081\u306E\u5DE5\u592B\u306F\u4E0D\u8981\u3002\u4FEE\u6B63\u3057\u3066\u5BFE\u5FDC\u3002
- [\`<TransitionGroup>\`\u306E\u30EB\u30FC\u30C8\u8981\u7D20](https://v3-migration.vuejs.org/breaking-changes/transition-group.html)  
  ... \u3080\u3057\u308D\u5909\u66F4\u5F8C\u306E\u52D5\u4F5C\u3092\u597D\u3093\u3060\u305F\u3081\u52D5\u4F5C\u78BA\u8A8D\u3092\u3057\u3066\u4F5C\u696D\u7D42\u4E86\u3002
- [\u914D\u5217\u306E watch](https://v3-migration.vuejs.org/breaking-changes/watch.html)  
  ... \u4E00\u7B87\u6240\u914D\u5217\u306B\u5BFE\u3059\u308B watch \u3092\u767A\u898B\u3002\u305D\u3082\u305D\u3082 watch \u306F\u3042\u307E\u308A\u4F7F\u7528\u3057\u3066\u3044\u306A\u304B\u3063\u305F\u3002
- [Vue \u30A2\u30D7\u30EA\u306E\u30EB\u30FC\u30C8](https://v3-migration.vuejs.org/breaking-changes/mount-changes.html)  
  ... \u5404\u30A2\u30D7\u30EA\u3067 1 \u7B87\u6240\u4FEE\u6B63\u3002
- [\`hook:\`\u30A4\u30D9\u30F3\u30C8](https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html)  
  ... \u5168\u3066\`$once\`\u3068\u4F75\u7528\u3057\u3066\u3044\u305F\u305F\u3081[\`$on\`\u30FB\`$off\`\u30FB\`$once\`](https://v3-migration.vuejs.org/breaking-changes/events-api.html)\u306E\u5BFE\u5FDC\u3092\u3057\u3066\u4F5C\u696D\u7D42\u4E86\u3002

</div>

<style>
  .slidev-layout code {
    padding: 0;
  }
</style>`,frontmatter:{hideInToc:!0,layout:"sub-2-cols",title:"\u6B8B\u308A\u306F\u3069\u3046\u3057\u305F\uFF1F",srcSequence:"./src/03_120.md"},index:24,start:0,end:34,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_120.md",raw:`---
hideInToc: true
layout: sub-2-cols
---

## \u6B8B\u308A\u306F\u3069\u3046\u3057\u305F\uFF1F

\u6B8B\u308A\u306E 6 \u9805\u76EE\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u5BFE\u5FDC\u3057\u307E\u3057\u305F\u3002  
\u3069\u308C\u3082\u3059\u3050\u306B\u898B\u3064\u3051\u3089\u308C\u3059\u3050\u4FEE\u6B63\u3067\u304D\u305F\u306E\u3067\u3001ESLint \u30EB\u30FC\u30EB\u3092\u4F7F\u7528\u3057\u307E\u305B\u3093\u3067\u3057\u305F\u3002  
\uFF08\u4ECA\u5F8C\u8FFD\u52A0\u3059\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002\uFF09

<div class="text-sm">

- [\`$attrs\`\u306E\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html)  
  ... \u5168\u3066\`$listeners\`\u3068\u4F75\u7528\u3057\u3066\u3044\u305F\u305F\u3081[\`$listeners\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/listeners-removed)\u306E\u5BFE\u5FDC\u3092\u3057\u3066\u4F5C\u696D\u7D42\u4E86\u3002
- [\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/custom-directives.html)  
  ... \u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u306F\u30D5\u30A1\u30A4\u30EB\u69CB\u6210\u3068\u3057\u3066\u307E\u3068\u3081\u3066\u3044\u305F\u306E\u3067\u898B\u3064\u3051\u308B\u305F\u3081\u306E\u5DE5\u592B\u306F\u4E0D\u8981\u3002\u4FEE\u6B63\u3057\u3066\u5BFE\u5FDC\u3002
- [\`<TransitionGroup>\`\u306E\u30EB\u30FC\u30C8\u8981\u7D20](https://v3-migration.vuejs.org/breaking-changes/transition-group.html)  
  ... \u3080\u3057\u308D\u5909\u66F4\u5F8C\u306E\u52D5\u4F5C\u3092\u597D\u3093\u3060\u305F\u3081\u52D5\u4F5C\u78BA\u8A8D\u3092\u3057\u3066\u4F5C\u696D\u7D42\u4E86\u3002
- [\u914D\u5217\u306E watch](https://v3-migration.vuejs.org/breaking-changes/watch.html)  
  ... \u4E00\u7B87\u6240\u914D\u5217\u306B\u5BFE\u3059\u308B watch \u3092\u767A\u898B\u3002\u305D\u3082\u305D\u3082 watch \u306F\u3042\u307E\u308A\u4F7F\u7528\u3057\u3066\u3044\u306A\u304B\u3063\u305F\u3002
- [Vue \u30A2\u30D7\u30EA\u306E\u30EB\u30FC\u30C8](https://v3-migration.vuejs.org/breaking-changes/mount-changes.html)  
  ... \u5404\u30A2\u30D7\u30EA\u3067 1 \u7B87\u6240\u4FEE\u6B63\u3002
- [\`hook:\`\u30A4\u30D9\u30F3\u30C8](https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html)  
  ... \u5168\u3066\`$once\`\u3068\u4F75\u7528\u3057\u3066\u3044\u305F\u305F\u3081[\`$on\`\u30FB\`$off\`\u30FB\`$once\`](https://v3-migration.vuejs.org/breaking-changes/events-api.html)\u306E\u5BFE\u5FDC\u3092\u3057\u3066\u4F5C\u696D\u7D42\u4E86\u3002

</div>

<style>
  .slidev-layout code {
    padding: 0;
  }
</style>
`,title:"\u6B8B\u308A\u306F\u3069\u3046\u3057\u305F\uFF1F",level:2,content:`## \u6B8B\u308A\u306F\u3069\u3046\u3057\u305F\uFF1F

\u6B8B\u308A\u306E 6 \u9805\u76EE\u306F\u4EE5\u4E0B\u306E\u3088\u3046\u306B\u5BFE\u5FDC\u3057\u307E\u3057\u305F\u3002  
\u3069\u308C\u3082\u3059\u3050\u306B\u898B\u3064\u3051\u3089\u308C\u3059\u3050\u4FEE\u6B63\u3067\u304D\u305F\u306E\u3067\u3001ESLint \u30EB\u30FC\u30EB\u3092\u4F7F\u7528\u3057\u307E\u305B\u3093\u3067\u3057\u305F\u3002  
\uFF08\u4ECA\u5F8C\u8FFD\u52A0\u3059\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002\uFF09

<div class="text-sm">

- [\`$attrs\`\u306E\u5909\u66F4](https://v3-migration.vuejs.org/breaking-changes/attrs-includes-class-style.html)  
  ... \u5168\u3066\`$listeners\`\u3068\u4F75\u7528\u3057\u3066\u3044\u305F\u305F\u3081[\`$listeners\`\u5EC3\u6B62](https://v3-migration.vuejs.org/breaking-changes/listeners-removed)\u306E\u5BFE\u5FDC\u3092\u3057\u3066\u4F5C\u696D\u7D42\u4E86\u3002
- [\u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u5B9A\u7FA9\u65B9\u6CD5](https://v3-migration.vuejs.org/breaking-changes/custom-directives.html)  
  ... \u30AB\u30B9\u30BF\u30E0\u30C7\u30A3\u30EC\u30AF\u30C6\u30A3\u30D6\u306F\u30D5\u30A1\u30A4\u30EB\u69CB\u6210\u3068\u3057\u3066\u307E\u3068\u3081\u3066\u3044\u305F\u306E\u3067\u898B\u3064\u3051\u308B\u305F\u3081\u306E\u5DE5\u592B\u306F\u4E0D\u8981\u3002\u4FEE\u6B63\u3057\u3066\u5BFE\u5FDC\u3002
- [\`<TransitionGroup>\`\u306E\u30EB\u30FC\u30C8\u8981\u7D20](https://v3-migration.vuejs.org/breaking-changes/transition-group.html)  
  ... \u3080\u3057\u308D\u5909\u66F4\u5F8C\u306E\u52D5\u4F5C\u3092\u597D\u3093\u3060\u305F\u3081\u52D5\u4F5C\u78BA\u8A8D\u3092\u3057\u3066\u4F5C\u696D\u7D42\u4E86\u3002
- [\u914D\u5217\u306E watch](https://v3-migration.vuejs.org/breaking-changes/watch.html)  
  ... \u4E00\u7B87\u6240\u914D\u5217\u306B\u5BFE\u3059\u308B watch \u3092\u767A\u898B\u3002\u305D\u3082\u305D\u3082 watch \u306F\u3042\u307E\u308A\u4F7F\u7528\u3057\u3066\u3044\u306A\u304B\u3063\u305F\u3002
- [Vue \u30A2\u30D7\u30EA\u306E\u30EB\u30FC\u30C8](https://v3-migration.vuejs.org/breaking-changes/mount-changes.html)  
  ... \u5404\u30A2\u30D7\u30EA\u3067 1 \u7B87\u6240\u4FEE\u6B63\u3002
- [\`hook:\`\u30A4\u30D9\u30F3\u30C8](https://v3-migration.vuejs.org/breaking-changes/vnode-lifecycle-events.html)  
  ... \u5168\u3066\`$once\`\u3068\u4F75\u7528\u3057\u3066\u3044\u305F\u305F\u3081[\`$on\`\u30FB\`$off\`\u30FB\`$once\`](https://v3-migration.vuejs.org/breaking-changes/events-api.html)\u306E\u5BFE\u5FDC\u3092\u3057\u3066\u4F5C\u696D\u7D42\u4E86\u3002

</div>

<style>
  .slidev-layout code {
    padding: 0;
  }
</style>`,frontmatter:{hideInToc:!0,layout:"sub-2-cols",title:"\u6B8B\u308A\u306F\u3069\u3046\u3057\u305F\uFF1F"},index:0,start:0,end:34},inline:{raw:`---
src: ./src/03_120.md
---
`,content:"",frontmatter:{},index:23,start:102,end:106},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_120.md",notesHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:Rk,meta:{hideInToc:!0,layout:"sub-2-cols",title:"Vue3 \u4EE5\u5916\u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B",srcSequence:"./src/03_900.md",slide:{raw:null,title:"Vue3 \u4EE5\u5916\u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B",level:2,content:`## Vue3 \u4EE5\u5916\u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B

Vue3 \u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u30E9\u30A4\u30D6\u30E9\u30EA\u3078\u306E\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u306B\u4F34\u3046 Breaking Changes \u3084\u3001Vue3 \u4EE5\u524D\u306B\u975E\u63A8\u5968\u306B\u306F\u306A\u3063\u3066\u3044\u3066\u3001Vue3 \u3067\u524A\u9664\u3055\u308C\u305F\u6A5F\u80FD\u7B49\u3082 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002

\u{1F49A}, \u{1F9E1}, \u{1F310}: eslint-plugin-vue, eslint-plugin-vue-scoped-css, [@intlify/eslint-plugin-vue-i18n](https://eslint-plugin-vue-i18n.intlify.dev/) \u3067\u30C1\u30A7\u30C3\u30AF\u53EF\u80FD  
\u{1F527}: \u81EA\u52D5\u4FEE\u6B63\u53EF\u80FD

|                                                             |                                            |
| :---------------------------------------------------------- | :----------------------------------------: |
| \`scope="..."\`\u306E\u5EC3\u6B62(Vue.js 2.5.0+)\u3001\`v-slot\`\u3092\u4F7F\u7528          |   [\u{1F49A}\u{1F527}][no-deprecated-scope-attribute]    |
| \`slot="..."\`\u306E\u5EC3\u6B62(Vue.js 2.6.0+)\u3001\`v-slot\`\u3092\u4F7F\u7528           |    [\u{1F49A}\u{1F527}][no-deprecated-slot-attribute]    |
| \`slot-scope="..."\`\u306E\u5EC3\u6B62(Vue.js 2.6.0+)\u3001\`v-slot\`\u3092\u4F7F\u7528     | [\u{1F49A}\u{1F527}][no-deprecated-slot-scope-attribute] |
| \`slot-scope="..."\`\u306E\u5EC3\u6B62(Vue.js 2.6.0+)\u3001\`v-slot\`\u3092\u4F7F\u7528     | [\u{1F49A}\u{1F527}][no-deprecated-slot-scope-attribute] |
| \u53E4\u3044 Deep \u30BB\u30EC\u30AF\u30BF\u30FC\`>>>\`\u306E\u4EE3\u308F\u308A\u306B\`::v-deep\`\u3092\u4F7F\u7528         |   [\u{1F9E1}\u{1F527}][no-deprecated-deep-combinator]    |
| \`::v-deep\`\u306E\u4EE3\u308F\u308A\u306B\u3001\`:deep()\`\u307E\u305F\u306F\`::v-deep()\`\u3092\u4F7F\u7528     |      [\u{1F9E1}\u{1F527}][require-v-deep-argument]       |
| vue-i18n \u306E\`<i18n>\`\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u4EE3\u308F\u308A\u306B\`<i18n-t>\`\u3092\u4F7F\u7528 |    [\u{1F310}\u{1F527}][no-deprecated-i18n-component]    |
| vue-i18n \u306E\`place\`\u5C5E\u6027\u5EC3\u6B62                                  |    [\u{1F310}][no-deprecated-i18n-place-attr]     |
| vue-i18n \u306E\`place\`Prop \u5EC3\u6B62                                 |    [\u{1F310}][no-deprecated-i18n-places-prop]    |
| vue-i18n \u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u69CB\u6587\u306E\u5909\u66F4                             |         [\u{1F310}][valid-message-syntax]         |

[no-deprecated-scope-attribute]: https://eslint.vuejs.org/rules/no-deprecated-scope-attribute.html
[no-deprecated-slot-attribute]: https://eslint.vuejs.org/rules/no-deprecated-slot-attribute.html
[no-deprecated-slot-scope-attribute]: https://eslint.vuejs.org/rules/no-deprecated-slot-scope-attribute.html
[no-deprecated-deep-combinator]: https://future-architect.github.io/eslint-plugin-vue-scoped-css/rules/no-deprecated-deep-combinator.html
[require-v-deep-argument]: https://future-architect.github.io/eslint-plugin-vue-scoped-css/rules/require-v-deep-argument.html
[no-deprecated-i18n-component]: https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-i18n-component.html
[no-deprecated-i18n-place-attr]: https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-i18n-place-attr.html
[no-deprecated-i18n-places-prop]: https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-i18n-places-prop.html
[valid-message-syntax]: https://eslint-plugin-vue-i18n.intlify.dev/rules/valid-message-syntax.html

<style>
  .slidev-layout td, .slidev-layout th {
    padding: 0.1rem;
    font-size: 0.7rem;
    line-height: 0.8rem;
  }
  .slidev-layout td code {
    padding: 0;
  }
</style>`,frontmatter:{hideInToc:!0,layout:"sub-2-cols",title:"Vue3 \u4EE5\u5916\u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B",srcSequence:"./src/03_900.md"},index:25,start:0,end:46,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_900.md",raw:`---
hideInToc: true
layout: sub-2-cols
---

## Vue3 \u4EE5\u5916\u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B

Vue3 \u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u30E9\u30A4\u30D6\u30E9\u30EA\u3078\u306E\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u306B\u4F34\u3046 Breaking Changes \u3084\u3001Vue3 \u4EE5\u524D\u306B\u975E\u63A8\u5968\u306B\u306F\u306A\u3063\u3066\u3044\u3066\u3001Vue3 \u3067\u524A\u9664\u3055\u308C\u305F\u6A5F\u80FD\u7B49\u3082 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002

\u{1F49A}, \u{1F9E1}, \u{1F310}: eslint-plugin-vue, eslint-plugin-vue-scoped-css, [@intlify/eslint-plugin-vue-i18n](https://eslint-plugin-vue-i18n.intlify.dev/) \u3067\u30C1\u30A7\u30C3\u30AF\u53EF\u80FD  
\u{1F527}: \u81EA\u52D5\u4FEE\u6B63\u53EF\u80FD

|                                                             |                                            |
| :---------------------------------------------------------- | :----------------------------------------: |
| \`scope="..."\`\u306E\u5EC3\u6B62(Vue.js 2.5.0+)\u3001\`v-slot\`\u3092\u4F7F\u7528          |   [\u{1F49A}\u{1F527}][no-deprecated-scope-attribute]    |
| \`slot="..."\`\u306E\u5EC3\u6B62(Vue.js 2.6.0+)\u3001\`v-slot\`\u3092\u4F7F\u7528           |    [\u{1F49A}\u{1F527}][no-deprecated-slot-attribute]    |
| \`slot-scope="..."\`\u306E\u5EC3\u6B62(Vue.js 2.6.0+)\u3001\`v-slot\`\u3092\u4F7F\u7528     | [\u{1F49A}\u{1F527}][no-deprecated-slot-scope-attribute] |
| \`slot-scope="..."\`\u306E\u5EC3\u6B62(Vue.js 2.6.0+)\u3001\`v-slot\`\u3092\u4F7F\u7528     | [\u{1F49A}\u{1F527}][no-deprecated-slot-scope-attribute] |
| \u53E4\u3044 Deep \u30BB\u30EC\u30AF\u30BF\u30FC\`>>>\`\u306E\u4EE3\u308F\u308A\u306B\`::v-deep\`\u3092\u4F7F\u7528         |   [\u{1F9E1}\u{1F527}][no-deprecated-deep-combinator]    |
| \`::v-deep\`\u306E\u4EE3\u308F\u308A\u306B\u3001\`:deep()\`\u307E\u305F\u306F\`::v-deep()\`\u3092\u4F7F\u7528     |      [\u{1F9E1}\u{1F527}][require-v-deep-argument]       |
| vue-i18n \u306E\`<i18n>\`\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u4EE3\u308F\u308A\u306B\`<i18n-t>\`\u3092\u4F7F\u7528 |    [\u{1F310}\u{1F527}][no-deprecated-i18n-component]    |
| vue-i18n \u306E\`place\`\u5C5E\u6027\u5EC3\u6B62                                  |    [\u{1F310}][no-deprecated-i18n-place-attr]     |
| vue-i18n \u306E\`place\`Prop \u5EC3\u6B62                                 |    [\u{1F310}][no-deprecated-i18n-places-prop]    |
| vue-i18n \u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u69CB\u6587\u306E\u5909\u66F4                             |         [\u{1F310}][valid-message-syntax]         |

[no-deprecated-scope-attribute]: https://eslint.vuejs.org/rules/no-deprecated-scope-attribute.html
[no-deprecated-slot-attribute]: https://eslint.vuejs.org/rules/no-deprecated-slot-attribute.html
[no-deprecated-slot-scope-attribute]: https://eslint.vuejs.org/rules/no-deprecated-slot-scope-attribute.html
[no-deprecated-deep-combinator]: https://future-architect.github.io/eslint-plugin-vue-scoped-css/rules/no-deprecated-deep-combinator.html
[require-v-deep-argument]: https://future-architect.github.io/eslint-plugin-vue-scoped-css/rules/require-v-deep-argument.html
[no-deprecated-i18n-component]: https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-i18n-component.html
[no-deprecated-i18n-place-attr]: https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-i18n-place-attr.html
[no-deprecated-i18n-places-prop]: https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-i18n-places-prop.html
[valid-message-syntax]: https://eslint-plugin-vue-i18n.intlify.dev/rules/valid-message-syntax.html

<style>
  .slidev-layout td, .slidev-layout th {
    padding: 0.1rem;
    font-size: 0.7rem;
    line-height: 0.8rem;
  }
  .slidev-layout td code {
    padding: 0;
  }
</style>
`,title:"Vue3 \u4EE5\u5916\u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B",level:2,content:`## Vue3 \u4EE5\u5916\u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B

Vue3 \u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u30E9\u30A4\u30D6\u30E9\u30EA\u3078\u306E\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u306B\u4F34\u3046 Breaking Changes \u3084\u3001Vue3 \u4EE5\u524D\u306B\u975E\u63A8\u5968\u306B\u306F\u306A\u3063\u3066\u3044\u3066\u3001Vue3 \u3067\u524A\u9664\u3055\u308C\u305F\u6A5F\u80FD\u7B49\u3082 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002

\u{1F49A}, \u{1F9E1}, \u{1F310}: eslint-plugin-vue, eslint-plugin-vue-scoped-css, [@intlify/eslint-plugin-vue-i18n](https://eslint-plugin-vue-i18n.intlify.dev/) \u3067\u30C1\u30A7\u30C3\u30AF\u53EF\u80FD  
\u{1F527}: \u81EA\u52D5\u4FEE\u6B63\u53EF\u80FD

|                                                             |                                            |
| :---------------------------------------------------------- | :----------------------------------------: |
| \`scope="..."\`\u306E\u5EC3\u6B62(Vue.js 2.5.0+)\u3001\`v-slot\`\u3092\u4F7F\u7528          |   [\u{1F49A}\u{1F527}][no-deprecated-scope-attribute]    |
| \`slot="..."\`\u306E\u5EC3\u6B62(Vue.js 2.6.0+)\u3001\`v-slot\`\u3092\u4F7F\u7528           |    [\u{1F49A}\u{1F527}][no-deprecated-slot-attribute]    |
| \`slot-scope="..."\`\u306E\u5EC3\u6B62(Vue.js 2.6.0+)\u3001\`v-slot\`\u3092\u4F7F\u7528     | [\u{1F49A}\u{1F527}][no-deprecated-slot-scope-attribute] |
| \`slot-scope="..."\`\u306E\u5EC3\u6B62(Vue.js 2.6.0+)\u3001\`v-slot\`\u3092\u4F7F\u7528     | [\u{1F49A}\u{1F527}][no-deprecated-slot-scope-attribute] |
| \u53E4\u3044 Deep \u30BB\u30EC\u30AF\u30BF\u30FC\`>>>\`\u306E\u4EE3\u308F\u308A\u306B\`::v-deep\`\u3092\u4F7F\u7528         |   [\u{1F9E1}\u{1F527}][no-deprecated-deep-combinator]    |
| \`::v-deep\`\u306E\u4EE3\u308F\u308A\u306B\u3001\`:deep()\`\u307E\u305F\u306F\`::v-deep()\`\u3092\u4F7F\u7528     |      [\u{1F9E1}\u{1F527}][require-v-deep-argument]       |
| vue-i18n \u306E\`<i18n>\`\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u4EE3\u308F\u308A\u306B\`<i18n-t>\`\u3092\u4F7F\u7528 |    [\u{1F310}\u{1F527}][no-deprecated-i18n-component]    |
| vue-i18n \u306E\`place\`\u5C5E\u6027\u5EC3\u6B62                                  |    [\u{1F310}][no-deprecated-i18n-place-attr]     |
| vue-i18n \u306E\`place\`Prop \u5EC3\u6B62                                 |    [\u{1F310}][no-deprecated-i18n-places-prop]    |
| vue-i18n \u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u69CB\u6587\u306E\u5909\u66F4                             |         [\u{1F310}][valid-message-syntax]         |

[no-deprecated-scope-attribute]: https://eslint.vuejs.org/rules/no-deprecated-scope-attribute.html
[no-deprecated-slot-attribute]: https://eslint.vuejs.org/rules/no-deprecated-slot-attribute.html
[no-deprecated-slot-scope-attribute]: https://eslint.vuejs.org/rules/no-deprecated-slot-scope-attribute.html
[no-deprecated-deep-combinator]: https://future-architect.github.io/eslint-plugin-vue-scoped-css/rules/no-deprecated-deep-combinator.html
[require-v-deep-argument]: https://future-architect.github.io/eslint-plugin-vue-scoped-css/rules/require-v-deep-argument.html
[no-deprecated-i18n-component]: https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-i18n-component.html
[no-deprecated-i18n-place-attr]: https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-i18n-place-attr.html
[no-deprecated-i18n-places-prop]: https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-i18n-places-prop.html
[valid-message-syntax]: https://eslint-plugin-vue-i18n.intlify.dev/rules/valid-message-syntax.html

<style>
  .slidev-layout td, .slidev-layout th {
    padding: 0.1rem;
    font-size: 0.7rem;
    line-height: 0.8rem;
  }
  .slidev-layout td code {
    padding: 0;
  }
</style>`,frontmatter:{hideInToc:!0,layout:"sub-2-cols",title:"Vue3 \u4EE5\u5916\u306E Breaking Changes \u3092 ESLint \u3067\u30C1\u30A7\u30C3\u30AF\u3059\u308B"},index:0,start:0,end:46},inline:{raw:`---
src: ./src/03_900.md
---
`,content:"",frontmatter:{},index:24,start:106,end:110},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/03_900.md",notesHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:Nk,meta:{layout:"section",title:"Vue3 \u79FB\u884C\u306B ESLint \u3092\u4F7F\u3046\u30E1\u30EA\u30C3\u30C8",srcSequence:"./src/04_010.md",slide:{raw:null,title:"Vue3 \u79FB\u884C\u306B ESLint \u3092\u4F7F\u3046\u30E1\u30EA\u30C3\u30C8",level:1,content:"# Vue3 \u79FB\u884C\u306B<br> ESLint \u3092\u4F7F\u3046\u30E1\u30EA\u30C3\u30C8",frontmatter:{layout:"section",title:"Vue3 \u79FB\u884C\u306B ESLint \u3092\u4F7F\u3046\u30E1\u30EA\u30C3\u30C8",srcSequence:"./src/04_010.md"},index:26,start:0,end:7,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/04_010.md",raw:`---
layout: section
title: "Vue3 \u79FB\u884C\u306B ESLint \u3092\u4F7F\u3046\u30E1\u30EA\u30C3\u30C8"
---

# Vue3 \u79FB\u884C\u306B<br> ESLint \u3092\u4F7F\u3046\u30E1\u30EA\u30C3\u30C8
`,title:"Vue3 \u79FB\u884C\u306B ESLint \u3092\u4F7F\u3046\u30E1\u30EA\u30C3\u30C8",level:1,content:"# Vue3 \u79FB\u884C\u306B<br> ESLint \u3092\u4F7F\u3046\u30E1\u30EA\u30C3\u30C8",frontmatter:{layout:"section",title:"Vue3 \u79FB\u884C\u306B ESLint \u3092\u4F7F\u3046\u30E1\u30EA\u30C3\u30C8"},index:0,start:0,end:7},inline:{raw:`---
src: ./src/04_010.md
---
`,content:"",frontmatter:{},index:25,start:110,end:114},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/04_010.md",notesHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:zk,meta:{hideInToc:!0,title:"Vue3 \u4F5C\u696D\u306B ESLint \u3092\u4F7F\u3046\u30E1\u30EA\u30C3\u30C8",srcSequence:"./src/04_020.md",slide:{raw:null,title:"Vue3 \u4F5C\u696D\u306B ESLint \u3092\u4F7F\u3046\u30E1\u30EA\u30C3\u30C8",level:2,content:`## Vue3 \u4F5C\u696D\u306B ESLint \u3092\u4F7F\u3046\u30E1\u30EA\u30C3\u30C8

<v-clicks>

- **\u81EA\u52D5\u5316**

  - \u79FB\u884C\u304C\u5FC5\u8981\u306A\u7B87\u6240\u3092\u81EA\u52D5\u3067\u30C1\u30A7\u30C3\u30AF\u30FB\u4FEE\u6B63\u3067\u304D\u308B

  - \u79FB\u884C\u304C\u5FC5\u8981\u306A\u7B87\u6240\u3092\u30A8\u30C7\u30A3\u30BF\u4E0A\u3067\u78BA\u8A8D\u3067\u304D\u308B

- **\u7D99\u7D9A\u7684\u306B\u4F7F\u3048\u308B**

  - Shareable Config \u3092\u4F5C\u6210\u3057\u3066\u304A\u3051\u3070\u3001\u5225\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u3082\u3059\u3050\u306B\u4F7F\u3048\u308B

  - _\u79FB\u884C\u5F8C\u306B\u65B0\u3057\u304F Vue2 \u3067\u3057\u304B\u52D5\u304B\u306A\u3044\u30B3\u30FC\u30C9\u3092\u66F8\u304B\u308C\u306A\u3044_

</v-clicks>`,frontmatter:{hideInToc:!0,title:"Vue3 \u4F5C\u696D\u306B ESLint \u3092\u4F7F\u3046\u30E1\u30EA\u30C3\u30C8",srcSequence:"./src/04_020.md"},index:27,start:0,end:22,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/04_020.md",raw:`---
hideInToc: true
---

## Vue3 \u4F5C\u696D\u306B ESLint \u3092\u4F7F\u3046\u30E1\u30EA\u30C3\u30C8

<v-clicks>

- **\u81EA\u52D5\u5316**

  - \u79FB\u884C\u304C\u5FC5\u8981\u306A\u7B87\u6240\u3092\u81EA\u52D5\u3067\u30C1\u30A7\u30C3\u30AF\u30FB\u4FEE\u6B63\u3067\u304D\u308B

  - \u79FB\u884C\u304C\u5FC5\u8981\u306A\u7B87\u6240\u3092\u30A8\u30C7\u30A3\u30BF\u4E0A\u3067\u78BA\u8A8D\u3067\u304D\u308B

- **\u7D99\u7D9A\u7684\u306B\u4F7F\u3048\u308B**

  - Shareable Config \u3092\u4F5C\u6210\u3057\u3066\u304A\u3051\u3070\u3001\u5225\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u3082\u3059\u3050\u306B\u4F7F\u3048\u308B

  - _\u79FB\u884C\u5F8C\u306B\u65B0\u3057\u304F Vue2 \u3067\u3057\u304B\u52D5\u304B\u306A\u3044\u30B3\u30FC\u30C9\u3092\u66F8\u304B\u308C\u306A\u3044_

</v-clicks>
`,title:"Vue3 \u4F5C\u696D\u306B ESLint \u3092\u4F7F\u3046\u30E1\u30EA\u30C3\u30C8",level:2,content:`## Vue3 \u4F5C\u696D\u306B ESLint \u3092\u4F7F\u3046\u30E1\u30EA\u30C3\u30C8

<v-clicks>

- **\u81EA\u52D5\u5316**

  - \u79FB\u884C\u304C\u5FC5\u8981\u306A\u7B87\u6240\u3092\u81EA\u52D5\u3067\u30C1\u30A7\u30C3\u30AF\u30FB\u4FEE\u6B63\u3067\u304D\u308B

  - \u79FB\u884C\u304C\u5FC5\u8981\u306A\u7B87\u6240\u3092\u30A8\u30C7\u30A3\u30BF\u4E0A\u3067\u78BA\u8A8D\u3067\u304D\u308B

- **\u7D99\u7D9A\u7684\u306B\u4F7F\u3048\u308B**

  - Shareable Config \u3092\u4F5C\u6210\u3057\u3066\u304A\u3051\u3070\u3001\u5225\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u3082\u3059\u3050\u306B\u4F7F\u3048\u308B

  - _\u79FB\u884C\u5F8C\u306B\u65B0\u3057\u304F Vue2 \u3067\u3057\u304B\u52D5\u304B\u306A\u3044\u30B3\u30FC\u30C9\u3092\u66F8\u304B\u308C\u306A\u3044_

</v-clicks>`,frontmatter:{hideInToc:!0,title:"Vue3 \u4F5C\u696D\u306B ESLint \u3092\u4F7F\u3046\u30E1\u30EA\u30C3\u30C8"},index:0,start:0,end:22},inline:{raw:`---
src: ./src/04_020.md
---
`,content:"",frontmatter:{},index:26,start:114,end:118},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/04_020.md",notesHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:Jk,meta:{hideInToc:!0,title:"\u79FB\u884C\u5F8C\u306B\u65B0\u3057\u304F Vue2 \u3067\u3057\u304B\u52D5\u304B\u306A\u3044\u30B3\u30FC\u30C9\u3092\u66F8\u304B\u308C\u306A\u3044",srcSequence:"./src/04_030.md",slide:{raw:null,title:"\u79FB\u884C\u5F8C\u306B\u65B0\u3057\u304F Vue2 \u3067\u3057\u304B\u52D5\u304B\u306A\u3044\u30B3\u30FC\u30C9\u3092\u66F8\u304B\u308C\u306A\u3044",level:2,content:`## \u79FB\u884C\u5F8C\u306B\u65B0\u3057\u304F Vue2 \u3067\u3057\u304B\u52D5\u304B\u306A\u3044\u30B3\u30FC\u30C9\u3092\u66F8\u304B\u308C\u306A\u3044

\u4F8B\u3048\u3070\u3001

- \u30C1\u30FC\u30E0\u30E1\u30F3\u30D0\u30FC

  - Vue3 \u79FB\u884C\u5F8C\u306B Vue2 \u3067\u3053\u308C\u307E\u3067\u958B\u767A\u3057\u3066\u304D\u305F\u30E1\u30F3\u30D0\u30FC\u304C\u3046\u3063\u304B\u308A\u30D5\u30A3\u30EB\u30BF\u3092\u4F7F\u304A\u3046\u3068\u3057\u3066  
    \u30D3\u30C3\u30C8\u8AD6\u7406\u548C\u3092\u3057\u3066\u3057\u307E\u3046\u3001\u306A\u3069\u3092\u9632\u3052\u308B
  - Vue \u521D\u5FC3\u8005\u306A\u65B0\u898F\u30E1\u30F3\u30D0\u30FC\u304C\u3001\u30CD\u30C3\u30C8\u8A18\u4E8B\u3092\u53C2\u8003\u306B\u66F8\u3044\u305F Vue2 \u3067\u3057\u304B\u52D5\u304B\u306A\u3044\u30B3\u30FC\u30C9\u3092  
    \u305D\u306E\u307E\u307E\u4F7F\u3063\u3066\u3057\u307E\u3046\u3001\u306A\u3069\u3092\u9632\u3052\u308B

- \u5171\u901A\u30E9\u30A4\u30D6\u30E9\u30EA\u306E 2 \u30D0\u30FC\u30B8\u30E7\u30F3\u7BA1\u7406

  - \u5171\u901A\u30E9\u30A4\u30D6\u30E9\u30EA\u306E Vue2 \u7528\u30D0\u30FC\u30B8\u30E7\u30F3\u3067\u8FFD\u52A0\u3057\u305F\u6A5F\u80FD\u3092 Vue3 \u7528\u306B\u30DE\u30FC\u30B8\u3059\u308B\u3068\u304D  
    \u81EA\u52D5\u3067\u30C1\u30A7\u30C3\u30AF\u30FB\u4FEE\u6B63\u3055\u308C\u308B

<div style="position: relative;">

![branch](/branch.png)

</div>

<style>
  img {
    position: absolute;
    height: 100px;
    right: 0;
    top: -30px;
  }
</style>`,frontmatter:{hideInToc:!0,title:"\u79FB\u884C\u5F8C\u306B\u65B0\u3057\u304F Vue2 \u3067\u3057\u304B\u52D5\u304B\u306A\u3044\u30B3\u30FC\u30C9\u3092\u66F8\u304B\u308C\u306A\u3044",srcSequence:"./src/04_030.md"},index:28,start:0,end:35,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/04_030.md",raw:`---
hideInToc: true
---

## \u79FB\u884C\u5F8C\u306B\u65B0\u3057\u304F Vue2 \u3067\u3057\u304B\u52D5\u304B\u306A\u3044\u30B3\u30FC\u30C9\u3092\u66F8\u304B\u308C\u306A\u3044

\u4F8B\u3048\u3070\u3001

- \u30C1\u30FC\u30E0\u30E1\u30F3\u30D0\u30FC

  - Vue3 \u79FB\u884C\u5F8C\u306B Vue2 \u3067\u3053\u308C\u307E\u3067\u958B\u767A\u3057\u3066\u304D\u305F\u30E1\u30F3\u30D0\u30FC\u304C\u3046\u3063\u304B\u308A\u30D5\u30A3\u30EB\u30BF\u3092\u4F7F\u304A\u3046\u3068\u3057\u3066  
    \u30D3\u30C3\u30C8\u8AD6\u7406\u548C\u3092\u3057\u3066\u3057\u307E\u3046\u3001\u306A\u3069\u3092\u9632\u3052\u308B
  - Vue \u521D\u5FC3\u8005\u306A\u65B0\u898F\u30E1\u30F3\u30D0\u30FC\u304C\u3001\u30CD\u30C3\u30C8\u8A18\u4E8B\u3092\u53C2\u8003\u306B\u66F8\u3044\u305F Vue2 \u3067\u3057\u304B\u52D5\u304B\u306A\u3044\u30B3\u30FC\u30C9\u3092  
    \u305D\u306E\u307E\u307E\u4F7F\u3063\u3066\u3057\u307E\u3046\u3001\u306A\u3069\u3092\u9632\u3052\u308B

- \u5171\u901A\u30E9\u30A4\u30D6\u30E9\u30EA\u306E 2 \u30D0\u30FC\u30B8\u30E7\u30F3\u7BA1\u7406

  - \u5171\u901A\u30E9\u30A4\u30D6\u30E9\u30EA\u306E Vue2 \u7528\u30D0\u30FC\u30B8\u30E7\u30F3\u3067\u8FFD\u52A0\u3057\u305F\u6A5F\u80FD\u3092 Vue3 \u7528\u306B\u30DE\u30FC\u30B8\u3059\u308B\u3068\u304D  
    \u81EA\u52D5\u3067\u30C1\u30A7\u30C3\u30AF\u30FB\u4FEE\u6B63\u3055\u308C\u308B

<div style="position: relative;">

![branch](/branch.png)

</div>

<style>
  img {
    position: absolute;
    height: 100px;
    right: 0;
    top: -30px;
  }
</style>
`,title:"\u79FB\u884C\u5F8C\u306B\u65B0\u3057\u304F Vue2 \u3067\u3057\u304B\u52D5\u304B\u306A\u3044\u30B3\u30FC\u30C9\u3092\u66F8\u304B\u308C\u306A\u3044",level:2,content:`## \u79FB\u884C\u5F8C\u306B\u65B0\u3057\u304F Vue2 \u3067\u3057\u304B\u52D5\u304B\u306A\u3044\u30B3\u30FC\u30C9\u3092\u66F8\u304B\u308C\u306A\u3044

\u4F8B\u3048\u3070\u3001

- \u30C1\u30FC\u30E0\u30E1\u30F3\u30D0\u30FC

  - Vue3 \u79FB\u884C\u5F8C\u306B Vue2 \u3067\u3053\u308C\u307E\u3067\u958B\u767A\u3057\u3066\u304D\u305F\u30E1\u30F3\u30D0\u30FC\u304C\u3046\u3063\u304B\u308A\u30D5\u30A3\u30EB\u30BF\u3092\u4F7F\u304A\u3046\u3068\u3057\u3066  
    \u30D3\u30C3\u30C8\u8AD6\u7406\u548C\u3092\u3057\u3066\u3057\u307E\u3046\u3001\u306A\u3069\u3092\u9632\u3052\u308B
  - Vue \u521D\u5FC3\u8005\u306A\u65B0\u898F\u30E1\u30F3\u30D0\u30FC\u304C\u3001\u30CD\u30C3\u30C8\u8A18\u4E8B\u3092\u53C2\u8003\u306B\u66F8\u3044\u305F Vue2 \u3067\u3057\u304B\u52D5\u304B\u306A\u3044\u30B3\u30FC\u30C9\u3092  
    \u305D\u306E\u307E\u307E\u4F7F\u3063\u3066\u3057\u307E\u3046\u3001\u306A\u3069\u3092\u9632\u3052\u308B

- \u5171\u901A\u30E9\u30A4\u30D6\u30E9\u30EA\u306E 2 \u30D0\u30FC\u30B8\u30E7\u30F3\u7BA1\u7406

  - \u5171\u901A\u30E9\u30A4\u30D6\u30E9\u30EA\u306E Vue2 \u7528\u30D0\u30FC\u30B8\u30E7\u30F3\u3067\u8FFD\u52A0\u3057\u305F\u6A5F\u80FD\u3092 Vue3 \u7528\u306B\u30DE\u30FC\u30B8\u3059\u308B\u3068\u304D  
    \u81EA\u52D5\u3067\u30C1\u30A7\u30C3\u30AF\u30FB\u4FEE\u6B63\u3055\u308C\u308B

<div style="position: relative;">

![branch](/branch.png)

</div>

<style>
  img {
    position: absolute;
    height: 100px;
    right: 0;
    top: -30px;
  }
</style>`,frontmatter:{hideInToc:!0,title:"\u79FB\u884C\u5F8C\u306B\u65B0\u3057\u304F Vue2 \u3067\u3057\u304B\u52D5\u304B\u306A\u3044\u30B3\u30FC\u30C9\u3092\u66F8\u304B\u308C\u306A\u3044"},index:0,start:0,end:35},inline:{raw:`---
src: ./src/04_030.md
---
`,content:"",frontmatter:{},index:27,start:118,end:122},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/04_030.md",notesHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:o2,meta:{hideInToc:!0,layout:"sub-2-cols",title:"Vue3 \u79FB\u884C\u306B ESLint \u3092\u4F7F\u3046\u30C7\u30E1\u30EA\u30C3\u30C8",srcSequence:"./src/04_040.md",slide:{raw:null,title:"Vue3 \u79FB\u884C\u306B ESLint \u3092\u4F7F\u3046\u30C7\u30E1\u30EA\u30C3\u30C8",level:2,content:`## Vue3 \u79FB\u884C\u306B ESLint \u3092\u4F7F\u3046\u30C7\u30E1\u30EA\u30C3\u30C8

::left::

- \u30D7\u30E9\u30B0\u30A4\u30F3\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u306F\u30AB\u30B9\u30BF\u30E0\u30EB\u30FC\u30EB\u3092\u81EA\u4F5C\u3057\u306A\u3044\u3068\u3044\u3051\u306A\u3044\u304B\u3082\u3057\u308C\u306A\u3044

- \u305D\u3093\u306A\u306B\u7C21\u5358\u306B\uFF08\u793E\u5185\u7528\uFF09ESLint \u30D7\u30E9\u30B0\u30A4\u30F3\u30FB\u30AB\u30B9\u30BF\u30E0\u30EB\u30FC\u30EB\u4F5C\u308C\u306A\u3044\uFF08\uFF1F\uFF09

  - [\u516C\u5F0F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8](https://eslint.org/docs/latest/developer-guide/working-with-rules)\u3092\u8AAD\u3093\u3067\u307F\u308B
  - eslint-plugin-vue \u306E [200 \u3092\u8D85\u3048\u308B\u30EB\u30FC\u30EB](https://eslint.vuejs.org/rules/)\u306E\u5B9F\u88C5\u3092\u53C2\u8003\u306B\u3057\u3066\u307F\u308B
  - [\u300Ceslint \u30AB\u30B9\u30BF\u30E0\u30EB\u30FC\u30EB\u300D\u3067\u691C\u7D22](https://www.google.com/search?q=eslint+%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E3%83%AB%E3%83%BC%E3%83%AB&rlz=1C5CHFA_enJP928JP928&ei=I9YWY7CBF-u32roP5-y32Ak&ved=0ahUKEwjwnvWns__5AhXrm1YBHWf2DZsQ4dUDCA4&uact=5&oq=eslint+%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E3%83%AB%E3%83%BC%E3%83%AB&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEOgoIABBHENYEELADOgsIABCABBAEECUQIDoFCAAQogQ6BwgAEB4QogQ6BQghEKABSgQIQRgASgQIRhgAUK0JWJ7OAWC6zwFoA3ABeAGAAesBiAH9FJIBBjAuMTUuM5gBAKABAcgBCsABAQ&sclient=gws-wiz)\u3057\u3066\u307F\u308B
  - [ESLint \u306E Discord](https://eslint.org/chat)\u306E Japanese \u30C1\u30E3\u30F3\u30CD\u30EB\u3067\u805E\u3044\u3066\u307F\u308B

- ESLint \u306F\u79FB\u884C\u30C4\u30FC\u30EB\u3067\u306F\u306A\u3044\u306E\u3067\u3001\u79FB\u884C\u30C4\u30FC\u30EB\u306B\u6BD4\u3079\u308C\u3070\u5F31\u3044\u70B9\u3082\u3042\u308B

::right::

<p class="image-wrapper">
  <img src="/eslint-plugin-vue-rules.png" alt="eslint-plugin-vue">
  <img src="/eslint-custom-rule-with-google.png" alt="\u300Ceslint \u30AB\u30B9\u30BF\u30E0\u30EB\u30FC\u30EB\u300D\u3067\u691C\u7D22" class="eslint-custom-rule-with-google">
</p>

<style>
  .image-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
  }
  img {
    position: absolute;
  }
  .eslint-custom-rule-with-google {
    bottom: 0;
    left: 100px;
  }
</style>`,frontmatter:{hideInToc:!0,layout:"sub-2-cols",title:"Vue3 \u79FB\u884C\u306B ESLint \u3092\u4F7F\u3046\u30C7\u30E1\u30EA\u30C3\u30C8",srcSequence:"./src/04_040.md"},index:29,start:0,end:42,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/04_040.md",raw:`---
hideInToc: true
layout: sub-2-cols
---

## Vue3 \u79FB\u884C\u306B ESLint \u3092\u4F7F\u3046\u30C7\u30E1\u30EA\u30C3\u30C8

::left::

- \u30D7\u30E9\u30B0\u30A4\u30F3\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u306F\u30AB\u30B9\u30BF\u30E0\u30EB\u30FC\u30EB\u3092\u81EA\u4F5C\u3057\u306A\u3044\u3068\u3044\u3051\u306A\u3044\u304B\u3082\u3057\u308C\u306A\u3044

- \u305D\u3093\u306A\u306B\u7C21\u5358\u306B\uFF08\u793E\u5185\u7528\uFF09ESLint \u30D7\u30E9\u30B0\u30A4\u30F3\u30FB\u30AB\u30B9\u30BF\u30E0\u30EB\u30FC\u30EB\u4F5C\u308C\u306A\u3044\uFF08\uFF1F\uFF09

  - [\u516C\u5F0F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8](https://eslint.org/docs/latest/developer-guide/working-with-rules)\u3092\u8AAD\u3093\u3067\u307F\u308B
  - eslint-plugin-vue \u306E [200 \u3092\u8D85\u3048\u308B\u30EB\u30FC\u30EB](https://eslint.vuejs.org/rules/)\u306E\u5B9F\u88C5\u3092\u53C2\u8003\u306B\u3057\u3066\u307F\u308B
  - [\u300Ceslint \u30AB\u30B9\u30BF\u30E0\u30EB\u30FC\u30EB\u300D\u3067\u691C\u7D22](https://www.google.com/search?q=eslint+%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E3%83%AB%E3%83%BC%E3%83%AB&rlz=1C5CHFA_enJP928JP928&ei=I9YWY7CBF-u32roP5-y32Ak&ved=0ahUKEwjwnvWns__5AhXrm1YBHWf2DZsQ4dUDCA4&uact=5&oq=eslint+%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E3%83%AB%E3%83%BC%E3%83%AB&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEOgoIABBHENYEELADOgsIABCABBAEECUQIDoFCAAQogQ6BwgAEB4QogQ6BQghEKABSgQIQRgASgQIRhgAUK0JWJ7OAWC6zwFoA3ABeAGAAesBiAH9FJIBBjAuMTUuM5gBAKABAcgBCsABAQ&sclient=gws-wiz)\u3057\u3066\u307F\u308B
  - [ESLint \u306E Discord](https://eslint.org/chat)\u306E Japanese \u30C1\u30E3\u30F3\u30CD\u30EB\u3067\u805E\u3044\u3066\u307F\u308B

- ESLint \u306F\u79FB\u884C\u30C4\u30FC\u30EB\u3067\u306F\u306A\u3044\u306E\u3067\u3001\u79FB\u884C\u30C4\u30FC\u30EB\u306B\u6BD4\u3079\u308C\u3070\u5F31\u3044\u70B9\u3082\u3042\u308B

::right::

<p class="image-wrapper">
  <img src="/eslint-plugin-vue-rules.png" alt="eslint-plugin-vue">
  <img src="/eslint-custom-rule-with-google.png" alt="\u300Ceslint \u30AB\u30B9\u30BF\u30E0\u30EB\u30FC\u30EB\u300D\u3067\u691C\u7D22" class="eslint-custom-rule-with-google">
</p>

<style>
  .image-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
  }
  img {
    position: absolute;
  }
  .eslint-custom-rule-with-google {
    bottom: 0;
    left: 100px;
  }
</style>
`,title:"Vue3 \u79FB\u884C\u306B ESLint \u3092\u4F7F\u3046\u30C7\u30E1\u30EA\u30C3\u30C8",level:2,content:`## Vue3 \u79FB\u884C\u306B ESLint \u3092\u4F7F\u3046\u30C7\u30E1\u30EA\u30C3\u30C8

::left::

- \u30D7\u30E9\u30B0\u30A4\u30F3\u304C\u5B58\u5728\u3057\u306A\u3044\u5834\u5408\u306F\u30AB\u30B9\u30BF\u30E0\u30EB\u30FC\u30EB\u3092\u81EA\u4F5C\u3057\u306A\u3044\u3068\u3044\u3051\u306A\u3044\u304B\u3082\u3057\u308C\u306A\u3044

- \u305D\u3093\u306A\u306B\u7C21\u5358\u306B\uFF08\u793E\u5185\u7528\uFF09ESLint \u30D7\u30E9\u30B0\u30A4\u30F3\u30FB\u30AB\u30B9\u30BF\u30E0\u30EB\u30FC\u30EB\u4F5C\u308C\u306A\u3044\uFF08\uFF1F\uFF09

  - [\u516C\u5F0F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8](https://eslint.org/docs/latest/developer-guide/working-with-rules)\u3092\u8AAD\u3093\u3067\u307F\u308B
  - eslint-plugin-vue \u306E [200 \u3092\u8D85\u3048\u308B\u30EB\u30FC\u30EB](https://eslint.vuejs.org/rules/)\u306E\u5B9F\u88C5\u3092\u53C2\u8003\u306B\u3057\u3066\u307F\u308B
  - [\u300Ceslint \u30AB\u30B9\u30BF\u30E0\u30EB\u30FC\u30EB\u300D\u3067\u691C\u7D22](https://www.google.com/search?q=eslint+%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E3%83%AB%E3%83%BC%E3%83%AB&rlz=1C5CHFA_enJP928JP928&ei=I9YWY7CBF-u32roP5-y32Ak&ved=0ahUKEwjwnvWns__5AhXrm1YBHWf2DZsQ4dUDCA4&uact=5&oq=eslint+%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E3%83%AB%E3%83%BC%E3%83%AB&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEOgoIABBHENYEELADOgsIABCABBAEECUQIDoFCAAQogQ6BwgAEB4QogQ6BQghEKABSgQIQRgASgQIRhgAUK0JWJ7OAWC6zwFoA3ABeAGAAesBiAH9FJIBBjAuMTUuM5gBAKABAcgBCsABAQ&sclient=gws-wiz)\u3057\u3066\u307F\u308B
  - [ESLint \u306E Discord](https://eslint.org/chat)\u306E Japanese \u30C1\u30E3\u30F3\u30CD\u30EB\u3067\u805E\u3044\u3066\u307F\u308B

- ESLint \u306F\u79FB\u884C\u30C4\u30FC\u30EB\u3067\u306F\u306A\u3044\u306E\u3067\u3001\u79FB\u884C\u30C4\u30FC\u30EB\u306B\u6BD4\u3079\u308C\u3070\u5F31\u3044\u70B9\u3082\u3042\u308B

::right::

<p class="image-wrapper">
  <img src="/eslint-plugin-vue-rules.png" alt="eslint-plugin-vue">
  <img src="/eslint-custom-rule-with-google.png" alt="\u300Ceslint \u30AB\u30B9\u30BF\u30E0\u30EB\u30FC\u30EB\u300D\u3067\u691C\u7D22" class="eslint-custom-rule-with-google">
</p>

<style>
  .image-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
  }
  img {
    position: absolute;
  }
  .eslint-custom-rule-with-google {
    bottom: 0;
    left: 100px;
  }
</style>`,frontmatter:{hideInToc:!0,layout:"sub-2-cols",title:"Vue3 \u79FB\u884C\u306B ESLint \u3092\u4F7F\u3046\u30C7\u30E1\u30EA\u30C3\u30C8"},index:0,start:0,end:42},inline:{raw:`---
src: ./src/04_040.md
---
`,content:"",frontmatter:{},index:28,start:122,end:126},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/04_040.md",notesHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:l2,meta:{layout:"section",title:"\u307E\u3068\u3081",srcSequence:"./src/05_010.md",slide:{raw:null,title:"\u307E\u3068\u3081",level:1,content:"# \u307E\u3068\u3081",frontmatter:{layout:"section",title:"\u307E\u3068\u3081",srcSequence:"./src/05_010.md"},index:30,start:0,end:7,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/05_010.md",raw:`---
layout: section
title: "\u307E\u3068\u3081"
---

# \u307E\u3068\u3081
`,title:"\u307E\u3068\u3081",level:1,content:"# \u307E\u3068\u3081",frontmatter:{layout:"section",title:"\u307E\u3068\u3081"},index:0,start:0,end:7},inline:{raw:`---
src: ./src/05_010.md
---
`,content:"",frontmatter:{},index:29,start:126,end:130},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/05_010.md",notesHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:p2,meta:{hideInToc:!0,title:"\u307E\u3068\u3081",srcSequence:"./src/05_020.md",slide:{raw:null,title:"\u307E\u3068\u3081",level:2,content:`## \u307E\u3068\u3081

<v-clicks>

- Vue3 \u79FB\u884C\u306F**\u4E00\u56DE\u306E\u4F5C\u696D\u3067\u7D42\u308F\u308A\u3067\u306F\u3042\u308A\u307E\u305B\u3093**\u3002

  - \u4F5C\u3063\u3066\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u6570\u3060\u3051\u79FB\u884C\u4F5C\u696D\u304C\u5FC5\u8981
  - Vue2 \u7528\u3068 Vue3 \u7528\u306E\u4E21\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u5171\u901A\u30E9\u30A4\u30D6\u30E9\u30EA\u306E\u30DE\u30FC\u30B8\u7BA1\u7406
  - \u958B\u767A\u30E1\u30F3\u30D0\u30FC\u3078\u306E Vue2 \u2194\uFE0E Vue3 \u306E\u9055\u3044\u306E\u5468\u77E5

**\u7D99\u7D9A\u7684\u306B\u79FB\u884C\u3059\u308B\u305F\u3081\u306E\u30C4\u30FC\u30EB\u304C\u5FC5\u8981\u3067\u3059\uFF01**

- ESLint \u3092\u4F7F\u7528\u3057\u3066\u79FB\u884C\u304C\u5FC5\u8981\u306A\u7B87\u6240\u3092\u81EA\u52D5\u3067\u30C1\u30A7\u30C3\u30AF\u30FB\u4FEE\u6B63\u3067\u304D\u307E\u3059\u3002

  - OSS \u306E\u30D7\u30E9\u30B0\u30A4\u30F3\u3067 Vue3 \u306E Breaking Changes \u306E **65%**(26/40) \u7A0B\u5EA6\u306E\u9805\u76EE\u306F\u30AB\u30D0\u30FC\u3067\u304D\u308B<br>\uFF08\u5F0A\u793E\u306E\u5834\u5408\u3001\u5F71\u97FF\u306A\u3057\u306E\u9805\u76EE\u3092\u9664\u3051\u3070 76%(26/34)\uFF09
    - \u79FB\u884C\u4F5C\u696D\u30B3\u30B9\u30C8\u306E\u611F\u899A\u5024\u3067\u306F 95%\u3050\u3089\u3044\u306F\u81EA\u52D5\u3067\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u3066\u3044\u308B\u3068\u601D\u3044\u307E\u3059
  - \u30ED\u30FC\u30AB\u30EB\u30EB\u30FC\u30EB\u3092\u6C7A\u3081\u3066\u500B\u5225\u306B\u7279\u5316\u3057\u305F\u30AB\u30B9\u30BF\u30E0\u30EB\u30FC\u30EB\u3092\u5B9F\u88C5\u3059\u308C\u3070\u3001  
    **\u307B\u3068\u3093\u3069\u81EA\u52D5\u3067\u79FB\u884C\u3067\u304D\u308B\u53EF\u80FD\u6027**\u304C\u3042\u308B

</v-clicks>`,frontmatter:{hideInToc:!0,title:"\u307E\u3068\u3081",srcSequence:"./src/05_020.md"},index:31,start:0,end:25,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/05_020.md",raw:`---
hideInToc: true
---

## \u307E\u3068\u3081

<v-clicks>

- Vue3 \u79FB\u884C\u306F**\u4E00\u56DE\u306E\u4F5C\u696D\u3067\u7D42\u308F\u308A\u3067\u306F\u3042\u308A\u307E\u305B\u3093**\u3002

  - \u4F5C\u3063\u3066\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u6570\u3060\u3051\u79FB\u884C\u4F5C\u696D\u304C\u5FC5\u8981
  - Vue2 \u7528\u3068 Vue3 \u7528\u306E\u4E21\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u5171\u901A\u30E9\u30A4\u30D6\u30E9\u30EA\u306E\u30DE\u30FC\u30B8\u7BA1\u7406
  - \u958B\u767A\u30E1\u30F3\u30D0\u30FC\u3078\u306E Vue2 \u2194\uFE0E Vue3 \u306E\u9055\u3044\u306E\u5468\u77E5

**\u7D99\u7D9A\u7684\u306B\u79FB\u884C\u3059\u308B\u305F\u3081\u306E\u30C4\u30FC\u30EB\u304C\u5FC5\u8981\u3067\u3059\uFF01**

- ESLint \u3092\u4F7F\u7528\u3057\u3066\u79FB\u884C\u304C\u5FC5\u8981\u306A\u7B87\u6240\u3092\u81EA\u52D5\u3067\u30C1\u30A7\u30C3\u30AF\u30FB\u4FEE\u6B63\u3067\u304D\u307E\u3059\u3002

  - OSS \u306E\u30D7\u30E9\u30B0\u30A4\u30F3\u3067 Vue3 \u306E Breaking Changes \u306E **65%**(26/40) \u7A0B\u5EA6\u306E\u9805\u76EE\u306F\u30AB\u30D0\u30FC\u3067\u304D\u308B<br>\uFF08\u5F0A\u793E\u306E\u5834\u5408\u3001\u5F71\u97FF\u306A\u3057\u306E\u9805\u76EE\u3092\u9664\u3051\u3070 76%(26/34)\uFF09
    - \u79FB\u884C\u4F5C\u696D\u30B3\u30B9\u30C8\u306E\u611F\u899A\u5024\u3067\u306F 95%\u3050\u3089\u3044\u306F\u81EA\u52D5\u3067\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u3066\u3044\u308B\u3068\u601D\u3044\u307E\u3059
  - \u30ED\u30FC\u30AB\u30EB\u30EB\u30FC\u30EB\u3092\u6C7A\u3081\u3066\u500B\u5225\u306B\u7279\u5316\u3057\u305F\u30AB\u30B9\u30BF\u30E0\u30EB\u30FC\u30EB\u3092\u5B9F\u88C5\u3059\u308C\u3070\u3001  
    **\u307B\u3068\u3093\u3069\u81EA\u52D5\u3067\u79FB\u884C\u3067\u304D\u308B\u53EF\u80FD\u6027**\u304C\u3042\u308B

</v-clicks>
`,title:"\u307E\u3068\u3081",level:2,content:`## \u307E\u3068\u3081

<v-clicks>

- Vue3 \u79FB\u884C\u306F**\u4E00\u56DE\u306E\u4F5C\u696D\u3067\u7D42\u308F\u308A\u3067\u306F\u3042\u308A\u307E\u305B\u3093**\u3002

  - \u4F5C\u3063\u3066\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u6570\u3060\u3051\u79FB\u884C\u4F5C\u696D\u304C\u5FC5\u8981
  - Vue2 \u7528\u3068 Vue3 \u7528\u306E\u4E21\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u5171\u901A\u30E9\u30A4\u30D6\u30E9\u30EA\u306E\u30DE\u30FC\u30B8\u7BA1\u7406
  - \u958B\u767A\u30E1\u30F3\u30D0\u30FC\u3078\u306E Vue2 \u2194\uFE0E Vue3 \u306E\u9055\u3044\u306E\u5468\u77E5

**\u7D99\u7D9A\u7684\u306B\u79FB\u884C\u3059\u308B\u305F\u3081\u306E\u30C4\u30FC\u30EB\u304C\u5FC5\u8981\u3067\u3059\uFF01**

- ESLint \u3092\u4F7F\u7528\u3057\u3066\u79FB\u884C\u304C\u5FC5\u8981\u306A\u7B87\u6240\u3092\u81EA\u52D5\u3067\u30C1\u30A7\u30C3\u30AF\u30FB\u4FEE\u6B63\u3067\u304D\u307E\u3059\u3002

  - OSS \u306E\u30D7\u30E9\u30B0\u30A4\u30F3\u3067 Vue3 \u306E Breaking Changes \u306E **65%**(26/40) \u7A0B\u5EA6\u306E\u9805\u76EE\u306F\u30AB\u30D0\u30FC\u3067\u304D\u308B<br>\uFF08\u5F0A\u793E\u306E\u5834\u5408\u3001\u5F71\u97FF\u306A\u3057\u306E\u9805\u76EE\u3092\u9664\u3051\u3070 76%(26/34)\uFF09
    - \u79FB\u884C\u4F5C\u696D\u30B3\u30B9\u30C8\u306E\u611F\u899A\u5024\u3067\u306F 95%\u3050\u3089\u3044\u306F\u81EA\u52D5\u3067\u30C1\u30A7\u30C3\u30AF\u3067\u304D\u3066\u3044\u308B\u3068\u601D\u3044\u307E\u3059
  - \u30ED\u30FC\u30AB\u30EB\u30EB\u30FC\u30EB\u3092\u6C7A\u3081\u3066\u500B\u5225\u306B\u7279\u5316\u3057\u305F\u30AB\u30B9\u30BF\u30E0\u30EB\u30FC\u30EB\u3092\u5B9F\u88C5\u3059\u308C\u3070\u3001  
    **\u307B\u3068\u3093\u3069\u81EA\u52D5\u3067\u79FB\u884C\u3067\u304D\u308B\u53EF\u80FD\u6027**\u304C\u3042\u308B

</v-clicks>`,frontmatter:{hideInToc:!0,title:"\u307E\u3068\u3081"},index:0,start:0,end:25},inline:{raw:`---
src: ./src/05_020.md
---
`,content:"",frontmatter:{},index:30,start:130,end:134},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/05_020.md",notesHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:g2,meta:{layout:"section",hideInToc:!0,title:'<span class="gradient">ESLint <span class="gradient-off">\u3068</span> eslint-plugin-vue <span class="gradient-off">\u3067</span><br>\u7D99\u7D9A\u7684<span class="gradient-off">\u306A</span> Vue3 <span class="gradient-off">\u79FB\u884C\u3092<br>\u5B9F\u73FE\u3057\u307E\u3057\u3087\u3046<br>\u{1F929}</span></span>',srcSequence:"./src/05_030.md",slide:{raw:null,title:'<span class="gradient">ESLint <span class="gradient-off">\u3068</span> eslint-plugin-vue <span class="gradient-off">\u3067</span><br>\u7D99\u7D9A\u7684<span class="gradient-off">\u306A</span> Vue3 <span class="gradient-off">\u79FB\u884C\u3092<br>\u5B9F\u73FE\u3057\u307E\u3057\u3087\u3046<br>\u{1F929}</span></span>',level:1,content:'# <span class="gradient">ESLint <span class="gradient-off">\u3068</span> eslint-plugin-vue <span class="gradient-off">\u3067</span><br>\u7D99\u7D9A\u7684<span class="gradient-off">\u306A</span> Vue3 <span class="gradient-off">\u79FB\u884C\u3092<br>\u5B9F\u73FE\u3057\u307E\u3057\u3087\u3046<br>\u{1F929}</span></span>',frontmatter:{layout:"section",hideInToc:!0,title:'<span class="gradient">ESLint <span class="gradient-off">\u3068</span> eslint-plugin-vue <span class="gradient-off">\u3067</span><br>\u7D99\u7D9A\u7684<span class="gradient-off">\u306A</span> Vue3 <span class="gradient-off">\u79FB\u884C\u3092<br>\u5B9F\u73FE\u3057\u307E\u3057\u3087\u3046<br>\u{1F929}</span></span>',srcSequence:"./src/05_030.md"},index:32,start:0,end:7,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/05_030.md",raw:`---
layout: section
hideInToc: true
---

# <span class="gradient">ESLint <span class="gradient-off">\u3068</span> eslint-plugin-vue <span class="gradient-off">\u3067</span><br>\u7D99\u7D9A\u7684<span class="gradient-off">\u306A</span> Vue3 <span class="gradient-off">\u79FB\u884C\u3092<br>\u5B9F\u73FE\u3057\u307E\u3057\u3087\u3046<br>\u{1F929}</span></span>
`,title:'<span class="gradient">ESLint <span class="gradient-off">\u3068</span> eslint-plugin-vue <span class="gradient-off">\u3067</span><br>\u7D99\u7D9A\u7684<span class="gradient-off">\u306A</span> Vue3 <span class="gradient-off">\u79FB\u884C\u3092<br>\u5B9F\u73FE\u3057\u307E\u3057\u3087\u3046<br>\u{1F929}</span></span>',level:1,content:'# <span class="gradient">ESLint <span class="gradient-off">\u3068</span> eslint-plugin-vue <span class="gradient-off">\u3067</span><br>\u7D99\u7D9A\u7684<span class="gradient-off">\u306A</span> Vue3 <span class="gradient-off">\u79FB\u884C\u3092<br>\u5B9F\u73FE\u3057\u307E\u3057\u3087\u3046<br>\u{1F929}</span></span>',frontmatter:{layout:"section",hideInToc:!0,title:'<span class="gradient">ESLint <span class="gradient-off">\u3068</span> eslint-plugin-vue <span class="gradient-off">\u3067</span><br>\u7D99\u7D9A\u7684<span class="gradient-off">\u306A</span> Vue3 <span class="gradient-off">\u79FB\u884C\u3092<br>\u5B9F\u73FE\u3057\u307E\u3057\u3087\u3046<br>\u{1F929}</span></span>'},index:0,start:0,end:7},inline:{raw:`---
src: ./src/05_030.md
---
`,content:"",frontmatter:{},index:31,start:134,end:138},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/05_030.md",notesHTML:"",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:x2,meta:{layout:"center",class:"text-center",hideInToc:!0,preload:!1,title:"\u5BA3\u4F1D",srcSequence:"./src/88-010-cm.md",slide:{raw:null,title:"\u5BA3\u4F1D",level:1,content:`<div
  v-motion-x
  :initial="{ x: -80 }"
  :enter="{ x: 0 }">

![Future](/ic_FUTURE_Type2.png)

# \u5BA3\u4F1D

</div>

<style>
  .slidev-layout {
    color: #555;
    background: #fff;
  }
  img {
    width: 400px;
  }
</style>`,frontmatter:{layout:"center",class:"text-center",hideInToc:!0,preload:!1,title:"\u5BA3\u4F1D",srcSequence:"./src/88-010-cm.md"},index:33,start:0,end:28,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/88-010-cm.md",raw:`---
layout: center
class: text-center
hideInToc: true
preload: false
---

<div
  v-motion-x
  :initial="{ x: -80 }"
  :enter="{ x: 0 }">

![Future](/ic_FUTURE_Type2.png)

# \u5BA3\u4F1D

</div>

<style>
  .slidev-layout {
    color: #555;
    background: #fff;
  }
  img {
    width: 400px;
  }
</style>
`,title:"\u5BA3\u4F1D",level:1,content:`<div
  v-motion-x
  :initial="{ x: -80 }"
  :enter="{ x: 0 }">

![Future](/ic_FUTURE_Type2.png)

# \u5BA3\u4F1D

</div>

<style>
  .slidev-layout {
    color: #555;
    background: #fff;
  }
  img {
    width: 400px;
  }
</style>`,frontmatter:{layout:"center",class:"text-center",hideInToc:!0,preload:!1,title:"\u5BA3\u4F1D"},index:0,start:0,end:28},inline:{raw:`---
src: ./src/88-010-cm.md
---
`,content:"",frontmatter:{},index:32,start:138,end:142},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/88-010-cm.md",notesHTML:"",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:T2,meta:{class:"text-center",hideInToc:!0,srcSequence:"./src/88-020.md",slide:{raw:null,content:`\u30D7\u30E9\u30C1\u30CA\u30B9\u30DD\u30F3\u30B5\u30FC\u3057\u3066\u307E\u3059\u3002

<https://vuefes.jp/2022/sponsors#future>

<img src="/platinum.jpg" alt="\u30D7\u30E9\u30C1\u30CA\u30B9\u30DD\u30F3\u30B5\u30FC" style="width: calc(100% - 112px); position: absolute;">

<div class="ribbon">

\u8A73\u3057\u304F\u306F\u30B9\u30DD\u30F3\u30B5\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002

</div>

<style>
  .slidev-layout {
    color: #555;
    background: #fff;
  }
  .ribbon {
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fffe;
  }
</style>`,frontmatter:{class:"text-center",hideInToc:!0,srcSequence:"./src/88-020.md"},index:34,start:0,end:35,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/88-020.md",raw:`---
class: text-center
hideInToc: true
---

\u30D7\u30E9\u30C1\u30CA\u30B9\u30DD\u30F3\u30B5\u30FC\u3057\u3066\u307E\u3059\u3002

<https://vuefes.jp/2022/sponsors#future>

<img src="/platinum.jpg" alt="\u30D7\u30E9\u30C1\u30CA\u30B9\u30DD\u30F3\u30B5\u30FC" style="width: calc(100% - 112px); position: absolute;">

<div class="ribbon">

\u8A73\u3057\u304F\u306F\u30B9\u30DD\u30F3\u30B5\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002

</div>

<style>
  .slidev-layout {
    color: #555;
    background: #fff;
  }
  .ribbon {
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fffe;
  }
</style>
`,content:`\u30D7\u30E9\u30C1\u30CA\u30B9\u30DD\u30F3\u30B5\u30FC\u3057\u3066\u307E\u3059\u3002

<https://vuefes.jp/2022/sponsors#future>

<img src="/platinum.jpg" alt="\u30D7\u30E9\u30C1\u30CA\u30B9\u30DD\u30F3\u30B5\u30FC" style="width: calc(100% - 112px); position: absolute;">

<div class="ribbon">

\u8A73\u3057\u304F\u306F\u30B9\u30DD\u30F3\u30B5\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002

</div>

<style>
  .slidev-layout {
    color: #555;
    background: #fff;
  }
  .ribbon {
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fffe;
  }
</style>`,frontmatter:{class:"text-center",hideInToc:!0},index:0,start:0,end:35},inline:{raw:`---
src: ./src/88-020.md
---
`,content:"",frontmatter:{},index:33,start:142,end:146},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/88-020.md",notesHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:O2,meta:{layout:"section",class:"text-center",hideInToc:!0,title:"\u30A8\u30F3\u30B8\u30CB\u30A2\u30FB\u30B9\u30DA\u30B7\u30E3\u30EA\u30B9\u30C8<br>\u52DF\u96C6\u3057\u3066\u307E\u3059<br>\u2193",srcSequence:"./src/88-030.md",slide:{raw:null,title:"\u30A8\u30F3\u30B8\u30CB\u30A2\u30FB\u30B9\u30DA\u30B7\u30E3\u30EA\u30B9\u30C8<br>\u52DF\u96C6\u3057\u3066\u307E\u3059<br>\u2193",level:1,content:`# \u30A8\u30F3\u30B8\u30CB\u30A2\u30FB\u30B9\u30DA\u30B7\u30E3\u30EA\u30B9\u30C8<br>\u52DF\u96C6\u3057\u3066\u307E\u3059<br>\u2193

# <https://www.future.co.jp/recruit/>

<style>
  .slidev-layout {
    color: #555;
    background: #fff;
  }
</style>`,frontmatter:{layout:"section",class:"text-center",hideInToc:!0,title:"\u30A8\u30F3\u30B8\u30CB\u30A2\u30FB\u30B9\u30DA\u30B7\u30E3\u30EA\u30B9\u30C8<br>\u52DF\u96C6\u3057\u3066\u307E\u3059<br>\u2193",srcSequence:"./src/88-030.md"},index:35,start:0,end:17,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/88-030.md",raw:`---
layout: section
class: text-center
hideInToc: true
---

# \u30A8\u30F3\u30B8\u30CB\u30A2\u30FB\u30B9\u30DA\u30B7\u30E3\u30EA\u30B9\u30C8<br>\u52DF\u96C6\u3057\u3066\u307E\u3059<br>\u2193

# <https://www.future.co.jp/recruit/>

<style>
  .slidev-layout {
    color: #555;
    background: #fff;
  }
</style>
`,title:"\u30A8\u30F3\u30B8\u30CB\u30A2\u30FB\u30B9\u30DA\u30B7\u30E3\u30EA\u30B9\u30C8<br>\u52DF\u96C6\u3057\u3066\u307E\u3059<br>\u2193",level:1,content:`# \u30A8\u30F3\u30B8\u30CB\u30A2\u30FB\u30B9\u30DA\u30B7\u30E3\u30EA\u30B9\u30C8<br>\u52DF\u96C6\u3057\u3066\u307E\u3059<br>\u2193

# <https://www.future.co.jp/recruit/>

<style>
  .slidev-layout {
    color: #555;
    background: #fff;
  }
</style>`,frontmatter:{layout:"section",class:"text-center",hideInToc:!0,title:"\u30A8\u30F3\u30B8\u30CB\u30A2\u30FB\u30B9\u30DA\u30B7\u30E3\u30EA\u30B9\u30C8<br>\u52DF\u96C6\u3057\u3066\u307E\u3059<br>\u2193"},index:0,start:0,end:17},inline:{raw:`---
src: ./src/88-030.md
---
`,content:"",frontmatter:{},index:34,start:146,end:150},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/88-030.md",notesHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:q2,meta:{layout:"center",class:"text-center big-title",hideInToc:!0,preload:!1,srcSequence:"./src/99-last.md",slide:{raw:null,content:`<h1 class="gradient">Thank you for your attention</h1>

<div class="ribbon">
<div
  v-motion-x
  :initial="{ x: -80 }"
  :enter="{ x: 0 }">
<div class="gradient" style="    display: inline-block;">

[Support me \u2764](https://github.com/sponsors/ota-meshi) <span class="gradient-off">or follow me!!</span>  
<span class="gradient-off">GitHub:</span> <https://github.com/ota-meshi>  
<span class="gradient-off">Twitter:</span> <https://twitter.com/omoteota>  
<span class="gradient-off">Qiita:</span> <https://qiita.com/ota-meshi>

</div>
</div>
</div>

<style>
  .ribbon {
    position: absolute;
    bottom: 32px;
    right: -347px;
    transform: rotate(-25deg);
    background-color: #ddd5;
    width: 100%;
    font-size: 1rem;
  }
</style>`,frontmatter:{layout:"center",class:"text-center big-title",hideInToc:!0,preload:!1,srcSequence:"./src/99-last.md"},index:36,start:0,end:37,source:{filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/99-last.md",raw:`---
layout: center
class: text-center big-title
hideInToc: true
preload: false
---

<h1 class="gradient">Thank you for your attention</h1>

<div class="ribbon">
<div
  v-motion-x
  :initial="{ x: -80 }"
  :enter="{ x: 0 }">
<div class="gradient" style="    display: inline-block;">

[Support me \u2764](https://github.com/sponsors/ota-meshi) <span class="gradient-off">or follow me!!</span>  
<span class="gradient-off">GitHub:</span> <https://github.com/ota-meshi>  
<span class="gradient-off">Twitter:</span> <https://twitter.com/omoteota>  
<span class="gradient-off">Qiita:</span> <https://qiita.com/ota-meshi>

</div>
</div>
</div>

<style>
  .ribbon {
    position: absolute;
    bottom: 32px;
    right: -347px;
    transform: rotate(-25deg);
    background-color: #ddd5;
    width: 100%;
    font-size: 1rem;
  }
</style>
`,content:`<h1 class="gradient">Thank you for your attention</h1>

<div class="ribbon">
<div
  v-motion-x
  :initial="{ x: -80 }"
  :enter="{ x: 0 }">
<div class="gradient" style="    display: inline-block;">

[Support me \u2764](https://github.com/sponsors/ota-meshi) <span class="gradient-off">or follow me!!</span>  
<span class="gradient-off">GitHub:</span> <https://github.com/ota-meshi>  
<span class="gradient-off">Twitter:</span> <https://twitter.com/omoteota>  
<span class="gradient-off">Qiita:</span> <https://qiita.com/ota-meshi>

</div>
</div>
</div>

<style>
  .ribbon {
    position: absolute;
    bottom: 32px;
    right: -347px;
    transform: rotate(-25deg);
    background-color: #ddd5;
    width: 100%;
    font-size: 1rem;
  }
</style>`,frontmatter:{layout:"center",class:"text-center big-title",hideInToc:!0,preload:!1},index:0,start:0,end:37},inline:{raw:`---
src: ./src/99-last.md
---

<!-- prettier-ignore-end -->
`,content:"",frontmatter:{},note:"prettier-ignore-end",index:35,start:150,end:156},filepath:"/Users/runner/work/vue-fes-japan-online-2022-slide/vue-fes-japan-online-2022-slide/src/99-last.md",notesHTML:"",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",component:Ny,meta:{layout:"end"}}];const Ue=N2,U2=[{name:"play",path:"/",component:Oy,children:[...Ue]},{name:"print",path:"/print",component:My},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>ms(()=>import("./Presenter.f6828b23.js"),["assets/Presenter.f6828b23.js","assets/Presenter.55f76449.css","assets/DrawingControls.1a5b435c.js"]),beforeEnter:e=>{if(!$n.remote||$n.remote===e.query.password)return!0;if($n.remote&&e.query.password===void 0){const t=prompt("Enter password");if($n.remote===t)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],bt=Ev({history:Nf("/vue-fes-japan-online-2022-slide/"),routes:U2});function H2(e,t,{mode:s="replace"}={}){return A({get(){const r=bt.currentRoute.value.query[e];return r==null?t!=null?t:null:Array.isArray(r)?r.filter(Boolean):r},set(r){Ye(()=>{bt[_(s)]({query:{...bt.currentRoute.value.query,[e]:r}})})}})}const jd=H(0);Ye(()=>{bt.afterEach(async()=>{await Ye(),jd.value+=1})});const en=A(()=>bt.currentRoute.value),In=A(()=>en.value.query.print!==void 0),z2=A(()=>en.value.query.print==="clicks"),Kt=A(()=>en.value.query.embedded!==void 0),qt=A(()=>en.value.path.startsWith("/presenter")),Os=A(()=>In.value&&!z2.value),hi=A(()=>en.value.query.password),K2=A(()=>!qt.value&&(!je.remote||hi.value===je.remote)),Ja=H2("clicks","0"),xd=A(()=>Ue.length-1),W2=A(()=>en.value.path),He=A(()=>parseInt(W2.value.split(/\//g).slice(-1)[0])||1);A(()=>uo(He.value));const mt=A(()=>Ue.find(e=>e.path===`${He.value}`));A(()=>{var e,t,s;return(s=(t=(e=mt.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:s.id});A(()=>{var e,t;return(t=(e=mt.value)==null?void 0:e.meta)==null?void 0:t.layout});const Bo=A(()=>Ue.find(e=>e.path===`${Math.min(Ue.length,He.value+1)}`)),G2=A(()=>{var e,t;return jd.value,((t=(e=mt.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),It=A({get(){if(Os.value)return 99999;let e=+(Ja.value||0);return isNaN(e)&&(e=0),e},set(e){Ja.value=e.toString()}}),Mr=A(()=>{var e,t,s;return+((s=(t=(e=mt.value)==null?void 0:e.meta)==null?void 0:t.clicks)!=null?s:G2.value.length)}),Q2=A(()=>He.value<Ue.length-1||It.value<Mr.value),Y2=A(()=>He.value>1||It.value>0),Z2=A(()=>Ue.filter(e=>{var t,s;return(s=(t=e.meta)==null?void 0:t.slide)==null?void 0:s.title}).reduce((e,t)=>(al(e,t),e),[])),J2=A(()=>cl(Z2.value,mt.value));A(()=>ul(J2.value));function dn(){Mr.value<=It.value?Ws():It.value+=1}async function pn(){It.value<=0?await Gs():It.value-=1}function uo(e){return qt.value?`/presenter/${e}`:`/${e}`}function Ws(){const e=Math.min(Ue.length,He.value+1);return cs(e)}async function Gs(e=!0){const t=Math.max(1,He.value-1);await cs(t),e&&Mr.value&&bt.replace({query:{...en.value.query,clicks:Mr.value}})}function cs(e,t){return bt.push({path:uo(e),query:{...en.value.query,clicks:t}})}function X2(e){const t=H(0),{direction:s,distanceX:r,distanceY:o}=yf(e,{onSwipeStart(i){i.pointerType==="touch"&&(zs.value||(t.value=ni()))},onSwipeEnd(i){if(i.pointerType!=="touch"||!t.value||zs.value)return;const l=Math.abs(r.value),a=Math.abs(o.value);l/window.innerWidth>.3||l>100?s.value===Qt.LEFT?dn():pn():(a/window.innerHeight>.4||a>200)&&(s.value===Qt.DOWN?Gs():Ws())}})}async function gi(){const{saveAs:e}=await ms(()=>import("./FileSaver.min.4f92ed14.js").then(function(t){return t.F}),[]);e(Pu(je.download)?je.download:je.exportFilename?`${je.exportFilename}.pdf`:"/vue-fes-japan-online-2022-slide/slidev-exported.pdf",`${je.title}.pdf`)}async function ej(e){var t,s;if(e==null){const r=(s=(t=mt.value)==null?void 0:t.meta)==null?void 0:s.slide;if(!(r!=null&&r.filepath))return!1;e=`${r.filepath}:${r.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function al(e,t,s=1){var o,i,l,a,c;const r=(i=(o=t.meta)==null?void 0:o.slide)==null?void 0:i.level;r&&r>s&&e.length>0?al(e[e.length-1].children,t,s+1):e.push({children:[],level:s,path:t.path,hideInToc:Boolean((l=t.meta)==null?void 0:l.hideInToc),title:(c=(a=t.meta)==null?void 0:a.slide)==null?void 0:c.title})}function cl(e,t,s=!1,r){return e.map(o=>{const i={...o,active:o.path===(t==null?void 0:t.path),hasActiveParent:s};return i.children.length>0&&(i.children=cl(i.children,t,i.active||i.hasActiveParent,i)),r&&(i.active||i.activeParent)&&(r.activeParent=!0),i})}function ul(e,t=1){return e.filter(s=>!s.hideInToc).map(s=>({...s,children:ul(s.children,t+1)}))}function tj(){const e=je.titleTemplate.replace("%s",je.title||"Slidev");Qg({title:e}),rm(`${e} - shared`),am(`${e} - drawings`);function t(){qt.value&&(aa("page",+He.value),aa("clicks",It.value))}bt.afterEach(t),ce(It,t),om(s=>{(+s.page!=+He.value||It.value!==s.clicks)&&bt.replace({path:uo(s.page),query:{...bt.currentRoute.value.query,clicks:s.clicks||0}})})}const nj=be({__name:"App",setup(e){return M(z),tj(),(t,s)=>{const r=os("RouterView"),o=os("StarportCarrier");return y(),T(W,null,[Q(r),Q(o)],64)}}});var sj=({app:e})=>{const t=e.directive("motion"),s={};for(const[r,o]of Object.entries(t))s[r]=(...i)=>{In.value||o(...i)};e.directive("motion-x",s)};function Io(e){return e!==null&&typeof e=="object"}function mi(e,t,s=".",r){if(!Io(t))return mi(e,{},s,r);const o=Object.assign({},t);for(const i in e){if(i==="__proto__"||i==="constructor")continue;const l=e[i];l!=null&&(r&&r(o,i,l,s)||(Array.isArray(l)&&Array.isArray(o[i])?o[i]=l.concat(o[i]):Io(l)&&Io(o[i])?o[i]=mi(l,o[i],(s?`${s}.`:"")+i.toString(),r):o[i]=l))}return o}function rj(e){return(...t)=>t.reduce((s,r)=>mi(s,r,"",e),{})}const oj=rj();var Xa;const wd=typeof window!="undefined",ij=Object.prototype.toString,lj=e=>typeof e=="number",aj=e=>typeof e=="string",fi=e=>ij.call(e)==="[object Object]",ns=()=>{};wd&&((Xa=window==null?void 0:window.navigator)==null?void 0:Xa.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function cj(e){return typeof e=="function"?e():_(e)}function uj(e){return e}function $d(e){return Fc()?(Lc(e),!0):!1}function dj(e,t=!0){fn()?ps(e):t?e():Ye(e)}function pj(e){fn()&&zi(e)}function Rr(e){var t;const s=cj(e);return(t=s==null?void 0:s.$el)!=null?t:s}const Ed=wd?window:void 0;function $t(...e){let t,s,r,o;if(aj(e[0])?([s,r,o]=e,t=Ed):[t,s,r,o]=e,!t)return ns;let i=ns;const l=ce(()=>Rr(t),c=>{i(),c&&(c.addEventListener(s,r,o),i=()=>{c.removeEventListener(s,r,o),i=ns})},{immediate:!0,flush:"post"}),a=()=>{l(),i()};return $d(a),a}function hj(e,t=!1){const s=H(),r=()=>s.value=Boolean(e());return r(),dj(r,t),s}const vi=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},bi="__vueuse_ssr_handlers__";vi[bi]=vi[bi]||{};vi[bi];function gj(e,t,s={}){const{root:r,rootMargin:o="0px",threshold:i=.1,window:l=Ed}=s,a=hj(()=>l&&"IntersectionObserver"in l);let c=ns;const d=a.value?ce(()=>({el:Rr(e),root:Rr(r)}),({el:h,root:g})=>{if(c(),!h)return;const m=new IntersectionObserver(t,{root:g,rootMargin:o,threshold:i});m.observe(h),c=()=>{m.disconnect(),c=ns}},{immediate:!0,flush:"post"}):ns,p=()=>{c(),d()};return $d(p),{isSupported:a,stop:p}}var ec;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(ec||(ec={}));var mj=Object.defineProperty,tc=Object.getOwnPropertySymbols,fj=Object.prototype.hasOwnProperty,vj=Object.prototype.propertyIsEnumerable,nc=(e,t,s)=>t in e?mj(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,bj=(e,t)=>{for(var s in t||(t={}))fj.call(t,s)&&nc(e,s,t[s]);if(tc)for(var s of tc(t))vj.call(t,s)&&nc(e,s,t[s]);return e};const yj={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};bj({linear:uj},yj);const Sd=1/60*1e3,_j=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),Ad=typeof window!="undefined"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(_j()),Sd);function kj(e){let t=[],s=[],r=0,o=!1,i=!1;const l=new WeakSet,a={schedule:(c,d=!1,p=!1)=>{const h=p&&o,g=h?t:s;return d&&l.add(c),g.indexOf(c)===-1&&(g.push(c),h&&o&&(r=t.length)),c},cancel:c=>{const d=s.indexOf(c);d!==-1&&s.splice(d,1),l.delete(c)},process:c=>{if(o){i=!0;return}if(o=!0,[t,s]=[s,t],s.length=0,r=t.length,r)for(let d=0;d<r;d++){const p=t[d];p(c),l.has(p)&&(a.schedule(p),e())}o=!1,i&&(i=!1,a.process(c))}};return a}const jj=40;let yi=!0,Qs=!1,_i=!1;const ss={delta:0,timestamp:0},nr=["read","update","preRender","render","postRender"],po=nr.reduce((e,t)=>(e[t]=kj(()=>Qs=!0),e),{}),ki=nr.reduce((e,t)=>{const s=po[t];return e[t]=(r,o=!1,i=!1)=>(Qs||$j(),s.schedule(r,o,i)),e},{}),xj=nr.reduce((e,t)=>(e[t]=po[t].cancel,e),{});nr.reduce((e,t)=>(e[t]=()=>po[t].process(ss),e),{});const wj=e=>po[e].process(ss),Cd=e=>{Qs=!1,ss.delta=yi?Sd:Math.max(Math.min(e-ss.timestamp,jj),1),ss.timestamp=e,_i=!0,nr.forEach(wj),_i=!1,Qs&&(yi=!1,Ad(Cd))},$j=()=>{Qs=!0,yi=!0,_i||Ad(Cd)},Td=()=>ss;function Bd(e,t){var s={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(s[r[o]]=e[r[o]]);return s}var Ej=function(){},sc=function(){};const ji=(e,t,s)=>Math.min(Math.max(s,e),t),Po=.001,Sj=.01,rc=10,Aj=.05,Cj=1;function Tj({duration:e=800,bounce:t=.25,velocity:s=0,mass:r=1}){let o,i;Ej(e<=rc*1e3);let l=1-t;l=ji(Aj,Cj,l),e=ji(Sj,rc,e/1e3),l<1?(o=d=>{const p=d*l,h=p*e,g=p-s,m=xi(d,l),v=Math.exp(-h);return Po-g/m*v},i=d=>{const h=d*l*e,g=h*s+s,m=Math.pow(l,2)*Math.pow(d,2)*e,v=Math.exp(-h),k=xi(Math.pow(d,2),l);return(-o(d)+Po>0?-1:1)*((g-m)*v)/k}):(o=d=>{const p=Math.exp(-d*e),h=(d-s)*e+1;return-Po+p*h},i=d=>{const p=Math.exp(-d*e),h=(s-d)*(e*e);return p*h});const a=5/e,c=Ij(o,i,a);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const d=Math.pow(c,2)*r;return{stiffness:d,damping:l*2*Math.sqrt(r*d),duration:e}}}const Bj=12;function Ij(e,t,s){let r=s;for(let o=1;o<Bj;o++)r=r-e(r)/t(r);return r}function xi(e,t){return e*Math.sqrt(1-t*t)}const Pj=["duration","bounce"],Oj=["stiffness","damping","mass"];function oc(e,t){return t.some(s=>e[s]!==void 0)}function Vj(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!oc(e,Oj)&&oc(e,Pj)){const s=Tj(e);t=Object.assign(Object.assign(Object.assign({},t),s),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function dl(e){var{from:t=0,to:s=1,restSpeed:r=2,restDelta:o}=e,i=Bd(e,["from","to","restSpeed","restDelta"]);const l={done:!1,value:t};let{stiffness:a,damping:c,mass:d,velocity:p,duration:h,isResolvedFromDuration:g}=Vj(i),m=ic,v=ic;function k(){const j=p?-(p/1e3):0,E=s-t,x=c/(2*Math.sqrt(a*d)),$=Math.sqrt(a/d)/1e3;if(o===void 0&&(o=Math.min(Math.abs(s-t)/100,.4)),x<1){const C=xi($,x);m=D=>{const P=Math.exp(-x*$*D);return s-P*((j+x*$*E)/C*Math.sin(C*D)+E*Math.cos(C*D))},v=D=>{const P=Math.exp(-x*$*D);return x*$*P*(Math.sin(C*D)*(j+x*$*E)/C+E*Math.cos(C*D))-P*(Math.cos(C*D)*(j+x*$*E)-C*E*Math.sin(C*D))}}else if(x===1)m=C=>s-Math.exp(-$*C)*(E+(j+$*E)*C);else{const C=$*Math.sqrt(x*x-1);m=D=>{const P=Math.exp(-x*$*D),K=Math.min(C*D,300);return s-P*((j+x*$*E)*Math.sinh(K)+C*E*Math.cosh(K))/C}}}return k(),{next:j=>{const E=m(j);if(g)l.done=j>=h;else{const x=v(j)*1e3,$=Math.abs(x)<=r,C=Math.abs(s-E)<=o;l.done=$&&C}return l.value=l.done?s:E,l},flipTarget:()=>{p=-p,[t,s]=[s,t],k()}}}dl.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const ic=e=>0,Id=(e,t,s)=>{const r=t-e;return r===0?1:(s-e)/r},pl=(e,t,s)=>-s*e+s*t+e,Pd=(e,t)=>s=>Math.max(Math.min(s,t),e),Vs=e=>e%1?Number(e.toFixed(5)):e,Ys=/(-)?([\d]*\.?[\d])+/g,wi=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Fj=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function sr(e){return typeof e=="string"}const rr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Fs=Object.assign(Object.assign({},rr),{transform:Pd(0,1)}),gr=Object.assign(Object.assign({},rr),{default:1}),hl=e=>({test:t=>sr(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),yn=hl("deg"),Ls=hl("%"),ie=hl("px"),lc=Object.assign(Object.assign({},Ls),{parse:e=>Ls.parse(e)/100,transform:e=>Ls.transform(e*100)}),gl=(e,t)=>s=>Boolean(sr(s)&&Fj.test(s)&&s.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(s,t)),Od=(e,t,s)=>r=>{if(!sr(r))return r;const[o,i,l,a]=r.match(Ys);return{[e]:parseFloat(o),[t]:parseFloat(i),[s]:parseFloat(l),alpha:a!==void 0?parseFloat(a):1}},Sn={test:gl("hsl","hue"),parse:Od("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:s,alpha:r=1})=>"hsla("+Math.round(e)+", "+Ls.transform(Vs(t))+", "+Ls.transform(Vs(s))+", "+Vs(Fs.transform(r))+")"},Lj=Pd(0,255),Oo=Object.assign(Object.assign({},rr),{transform:e=>Math.round(Lj(e))}),ln={test:gl("rgb","red"),parse:Od("red","green","blue"),transform:({red:e,green:t,blue:s,alpha:r=1})=>"rgba("+Oo.transform(e)+", "+Oo.transform(t)+", "+Oo.transform(s)+", "+Vs(Fs.transform(r))+")"};function Dj(e){let t="",s="",r="",o="";return e.length>5?(t=e.substr(1,2),s=e.substr(3,2),r=e.substr(5,2),o=e.substr(7,2)):(t=e.substr(1,1),s=e.substr(2,1),r=e.substr(3,1),o=e.substr(4,1),t+=t,s+=s,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(s,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const $i={test:gl("#"),parse:Dj,transform:ln.transform},ut={test:e=>ln.test(e)||$i.test(e)||Sn.test(e),parse:e=>ln.test(e)?ln.parse(e):Sn.test(e)?Sn.parse(e):$i.parse(e),transform:e=>sr(e)?e:e.hasOwnProperty("red")?ln.transform(e):Sn.transform(e)},Vd="${c}",Fd="${n}";function Mj(e){var t,s,r,o;return isNaN(e)&&sr(e)&&((s=(t=e.match(Ys))===null||t===void 0?void 0:t.length)!==null&&s!==void 0?s:0)+((o=(r=e.match(wi))===null||r===void 0?void 0:r.length)!==null&&o!==void 0?o:0)>0}function Ld(e){typeof e=="number"&&(e=`${e}`);const t=[];let s=0;const r=e.match(wi);r&&(s=r.length,e=e.replace(wi,Vd),t.push(...r.map(ut.parse)));const o=e.match(Ys);return o&&(e=e.replace(Ys,Fd),t.push(...o.map(rr.parse))),{values:t,numColors:s,tokenised:e}}function Dd(e){return Ld(e).values}function Md(e){const{values:t,numColors:s,tokenised:r}=Ld(e),o=t.length;return i=>{let l=r;for(let a=0;a<o;a++)l=l.replace(a<s?Vd:Fd,a<s?ut.transform(i[a]):Vs(i[a]));return l}}const Rj=e=>typeof e=="number"?0:e;function qj(e){const t=Dd(e);return Md(e)(t.map(Rj))}const or={test:Mj,parse:Dd,createTransformer:Md,getAnimatableNone:qj},Nj=new Set(["brightness","contrast","saturate","opacity"]);function Uj(e){let[t,s]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=s.match(Ys)||[];if(!r)return e;const o=s.replace(r,"");let i=Nj.has(t)?1:0;return r!==s&&(i*=100),t+"("+i+o+")"}const Hj=/([a-z-]*)\(.*?\)/g,Ei=Object.assign(Object.assign({},or),{getAnimatableNone:e=>{const t=e.match(Hj);return t?t.map(Uj).join(" "):e}});function Vo(e,t,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?e+(t-e)*6*s:s<1/2?t:s<2/3?e+(t-e)*(2/3-s)*6:e}function ac({hue:e,saturation:t,lightness:s,alpha:r}){e/=360,t/=100,s/=100;let o=0,i=0,l=0;if(!t)o=i=l=s;else{const a=s<.5?s*(1+t):s+t-s*t,c=2*s-a;o=Vo(c,a,e+1/3),i=Vo(c,a,e),l=Vo(c,a,e-1/3)}return{red:Math.round(o*255),green:Math.round(i*255),blue:Math.round(l*255),alpha:r}}const zj=(e,t,s)=>{const r=e*e,o=t*t;return Math.sqrt(Math.max(0,s*(o-r)+r))},Kj=[$i,ln,Sn],cc=e=>Kj.find(t=>t.test(e)),Rd=(e,t)=>{let s=cc(e),r=cc(t),o=s.parse(e),i=r.parse(t);s===Sn&&(o=ac(o),s=ln),r===Sn&&(i=ac(i),r=ln);const l=Object.assign({},o);return a=>{for(const c in l)c!=="alpha"&&(l[c]=zj(o[c],i[c],a));return l.alpha=pl(o.alpha,i.alpha,a),s.transform(l)}},Wj=e=>typeof e=="number",Gj=(e,t)=>s=>t(e(s)),qd=(...e)=>e.reduce(Gj);function Nd(e,t){return Wj(e)?s=>pl(e,t,s):ut.test(e)?Rd(e,t):Hd(e,t)}const Ud=(e,t)=>{const s=[...e],r=s.length,o=e.map((i,l)=>Nd(i,t[l]));return i=>{for(let l=0;l<r;l++)s[l]=o[l](i);return s}},Qj=(e,t)=>{const s=Object.assign(Object.assign({},e),t),r={};for(const o in s)e[o]!==void 0&&t[o]!==void 0&&(r[o]=Nd(e[o],t[o]));return o=>{for(const i in r)s[i]=r[i](o);return s}};function uc(e){const t=or.parse(e),s=t.length;let r=0,o=0,i=0;for(let l=0;l<s;l++)r||typeof t[l]=="number"?r++:t[l].hue!==void 0?i++:o++;return{parsed:t,numNumbers:r,numRGB:o,numHSL:i}}const Hd=(e,t)=>{const s=or.createTransformer(t),r=uc(e),o=uc(t);return r.numHSL===o.numHSL&&r.numRGB===o.numRGB&&r.numNumbers>=o.numNumbers?qd(Ud(r.parsed,o.parsed),s):l=>`${l>0?t:e}`},Yj=(e,t)=>s=>pl(e,t,s);function Zj(e){if(typeof e=="number")return Yj;if(typeof e=="string")return ut.test(e)?Rd:Hd;if(Array.isArray(e))return Ud;if(typeof e=="object")return Qj}function Jj(e,t,s){const r=[],o=s||Zj(e[0]),i=e.length-1;for(let l=0;l<i;l++){let a=o(e[l],e[l+1]);if(t){const c=Array.isArray(t)?t[l]:t;a=qd(c,a)}r.push(a)}return r}function Xj([e,t],[s]){return r=>s(Id(e,t,r))}function ex(e,t){const s=e.length,r=s-1;return o=>{let i=0,l=!1;if(o<=e[0]?l=!0:o>=e[r]&&(i=r-1,l=!0),!l){let c=1;for(;c<s&&!(e[c]>o||c===r);c++);i=c-1}const a=Id(e[i],e[i+1],o);return t[i](a)}}function zd(e,t,{clamp:s=!0,ease:r,mixer:o}={}){const i=e.length;sc(i===t.length),sc(!r||!Array.isArray(r)||r.length===i-1),e[0]>e[i-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const l=Jj(t,r,o),a=i===2?Xj(e,l):ex(e,l);return s?c=>a(ji(e[0],e[i-1],c)):a}const ho=e=>t=>1-e(1-t),ml=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,tx=e=>t=>Math.pow(t,e),Kd=e=>t=>t*t*((e+1)*t-e),nx=e=>{const t=Kd(e);return s=>(s*=2)<1?.5*t(s):.5*(2-Math.pow(2,-10*(s-1)))},Wd=1.525,sx=4/11,rx=8/11,ox=9/10,Gd=e=>e,fl=tx(2),ix=ho(fl),Qd=ml(fl),Yd=e=>1-Math.sin(Math.acos(e)),Zd=ho(Yd),lx=ml(Zd),vl=Kd(Wd),ax=ho(vl),cx=ml(vl),ux=nx(Wd),dx=4356/361,px=35442/1805,hx=16061/1805,qr=e=>{if(e===1||e===0)return e;const t=e*e;return e<sx?7.5625*t:e<rx?9.075*t-9.9*e+3.4:e<ox?dx*t-px*e+hx:10.8*e*e-20.52*e+10.72},gx=ho(qr),mx=e=>e<.5?.5*(1-qr(1-e*2)):.5*qr(e*2-1)+.5;function fx(e,t){return e.map(()=>t||Qd).splice(0,e.length-1)}function vx(e){const t=e.length;return e.map((s,r)=>r!==0?r/(t-1):0)}function bx(e,t){return e.map(s=>s*t)}function $r({from:e=0,to:t=1,ease:s,offset:r,duration:o=300}){const i={done:!1,value:e},l=Array.isArray(t)?t:[e,t],a=bx(r&&r.length===l.length?r:vx(l),o);function c(){return zd(a,l,{ease:Array.isArray(s)?s:fx(l,s)})}let d=c();return{next:p=>(i.value=d(p),i.done=p>=o,i),flipTarget:()=>{l.reverse(),d=c()}}}function yx({velocity:e=0,from:t=0,power:s=.8,timeConstant:r=350,restDelta:o=.5,modifyTarget:i}){const l={done:!1,value:t};let a=s*e;const c=t+a,d=i===void 0?c:i(c);return d!==c&&(a=d-t),{next:p=>{const h=-a*Math.exp(-p/r);return l.done=!(h>o||h<-o),l.value=l.done?d:d+h,l},flipTarget:()=>{}}}const dc={keyframes:$r,spring:dl,decay:yx};function _x(e){if(Array.isArray(e.to))return $r;if(dc[e.type])return dc[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?$r:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?dl:$r}function Jd(e,t,s=0){return e-t-s}function kx(e,t,s=0,r=!0){return r?Jd(t+-e,t,s):t-(e-t)+s}function jx(e,t,s,r){return r?e>=t+s:e<=-s}const xx=e=>{const t=({delta:s})=>e(s);return{start:()=>ki.update(t,!0),stop:()=>xj.update(t)}};function Xd(e){var t,s,{from:r,autoplay:o=!0,driver:i=xx,elapsed:l=0,repeat:a=0,repeatType:c="loop",repeatDelay:d=0,onPlay:p,onStop:h,onComplete:g,onRepeat:m,onUpdate:v}=e,k=Bd(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:j}=k,E,x=0,$=k.duration,C,D=!1,P=!0,K;const se=_x(k);!((s=(t=se).needsInterpolation)===null||s===void 0)&&s.call(t,r,j)&&(K=zd([0,100],[r,j],{clamp:!1}),r=0,j=100);const ve=se(Object.assign(Object.assign({},k),{from:r,to:j}));function pe(){x++,c==="reverse"?(P=x%2===0,l=kx(l,$,d,P)):(l=Jd(l,$,d),c==="mirror"&&ve.flipTarget()),D=!1,m&&m()}function ye(){E.stop(),g&&g()}function We(Ve){if(P||(Ve=-Ve),l+=Ve,!D){const Te=ve.next(Math.max(0,l));C=Te.value,K&&(C=K(C)),D=P?Te.done:l<=0}v==null||v(C),D&&(x===0&&($!=null||($=l)),x<a?jx(l,$,d,P)&&pe():ye())}function qe(){p==null||p(),E=i(We),E.start()}return o&&qe(),{stop:()=>{h==null||h(),E.stop()}}}function ep(e,t){return t?e*(1e3/t):0}function wx({from:e=0,velocity:t=0,min:s,max:r,power:o=.8,timeConstant:i=750,bounceStiffness:l=500,bounceDamping:a=10,restDelta:c=1,modifyTarget:d,driver:p,onUpdate:h,onComplete:g,onStop:m}){let v;function k($){return s!==void 0&&$<s||r!==void 0&&$>r}function j($){return s===void 0?r:r===void 0||Math.abs(s-$)<Math.abs(r-$)?s:r}function E($){v==null||v.stop(),v=Xd(Object.assign(Object.assign({},$),{driver:p,onUpdate:C=>{var D;h==null||h(C),(D=$.onUpdate)===null||D===void 0||D.call($,C)},onComplete:g,onStop:m}))}function x($){E(Object.assign({type:"spring",stiffness:l,damping:a,restDelta:c},$))}if(k(e))x({from:e,velocity:t,to:j(e)});else{let $=o*t+e;typeof d!="undefined"&&($=d($));const C=j($),D=C===s?-1:1;let P,K;const se=ve=>{P=K,K=ve,t=ep(ve-P,Td().delta),(D===1&&ve>C||D===-1&&ve<C)&&x({from:ve,to:C,velocity:t})};E({type:"decay",from:e,velocity:t,timeConstant:i,power:o,restDelta:c,modifyTarget:d,onUpdate:k($)?se:void 0})}return{stop:()=>v==null?void 0:v.stop()}}const tp=(e,t)=>1-3*t+3*e,np=(e,t)=>3*t-6*e,sp=e=>3*e,Nr=(e,t,s)=>((tp(t,s)*e+np(t,s))*e+sp(t))*e,rp=(e,t,s)=>3*tp(t,s)*e*e+2*np(t,s)*e+sp(t),$x=1e-7,Ex=10;function Sx(e,t,s,r,o){let i,l,a=0;do l=t+(s-t)/2,i=Nr(l,r,o)-e,i>0?s=l:t=l;while(Math.abs(i)>$x&&++a<Ex);return l}const Ax=8,Cx=.001;function Tx(e,t,s,r){for(let o=0;o<Ax;++o){const i=rp(t,s,r);if(i===0)return t;t-=(Nr(t,s,r)-e)/i}return t}const Er=11,mr=1/(Er-1);function Bx(e,t,s,r){if(e===t&&s===r)return Gd;const o=new Float32Array(Er);for(let l=0;l<Er;++l)o[l]=Nr(l*mr,e,s);function i(l){let a=0,c=1;const d=Er-1;for(;c!==d&&o[c]<=l;++c)a+=mr;--c;const p=(l-o[c])/(o[c+1]-o[c]),h=a+p*mr,g=rp(h,e,s);return g>=Cx?Tx(l,h,e,s):g===0?h:Sx(l,a,a+mr,e,s)}return l=>l===0||l===1?l:Nr(i(l),t,r)}const Fo={};class Ix{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,s,r){if(!!this.subscriptions.size)for(const o of this.subscriptions)o(t,s,r)}clear(){this.subscriptions.clear()}}const pc=e=>!isNaN(parseFloat(e));class Px{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new Ix,this.canTrackVelocity=!1,this.updateAndNotify=s=>{this.prev=this.current,this.current=s;const{delta:r,timestamp:o}=Td();this.lastUpdated!==o&&(this.timeDelta=r,this.lastUpdated=o),ki.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>ki.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{this.canTrackVelocity||(this.canTrackVelocity=pc(this.current)),s!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=pc(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?ep(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(s=>{const{stop:r}=t(s);this.stopAnimation=r}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function Ox(e){return new Px(e)}const{isArray:Vx}=Array;function Fx(){const e=H({}),t=r=>{const o=i=>{!e.value[i]||(e.value[i].stop(),e.value[i].destroy(),delete e.value[i])};r?Vx(r)?r.forEach(o):o(r):Object.keys(e.value).forEach(o)},s=(r,o,i)=>{if(e.value[r])return e.value[r];const l=Ox(o);return l.onChange(a=>i[r]=a),e.value[r]=l,l};return pj(t),{motionValues:e,get:s,stop:t}}const Lx=e=>Array.isArray(e),_n=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Lo=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),Dx=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Do=()=>({type:"keyframes",ease:"linear",duration:300}),Mx=e=>({type:"keyframes",duration:800,values:e}),hc={default:Dx,x:_n,y:_n,z:_n,rotate:_n,rotateX:_n,rotateY:_n,rotateZ:_n,scaleX:Lo,scaleY:Lo,scale:Lo,backgroundColor:Do,color:Do,opacity:Do},op=(e,t)=>{let s;return Lx(t)?s=Mx:s=hc[e]||hc.default,{to:t,...s(t)}},gc={...rr,transform:Math.round},ip={color:ut,backgroundColor:ut,outlineColor:ut,fill:ut,stroke:ut,borderColor:ut,borderTopColor:ut,borderRightColor:ut,borderBottomColor:ut,borderLeftColor:ut,borderWidth:ie,borderTopWidth:ie,borderRightWidth:ie,borderBottomWidth:ie,borderLeftWidth:ie,borderRadius:ie,radius:ie,borderTopLeftRadius:ie,borderTopRightRadius:ie,borderBottomRightRadius:ie,borderBottomLeftRadius:ie,width:ie,maxWidth:ie,height:ie,maxHeight:ie,size:ie,top:ie,right:ie,bottom:ie,left:ie,padding:ie,paddingTop:ie,paddingRight:ie,paddingBottom:ie,paddingLeft:ie,margin:ie,marginTop:ie,marginRight:ie,marginBottom:ie,marginLeft:ie,rotate:yn,rotateX:yn,rotateY:yn,rotateZ:yn,scale:gr,scaleX:gr,scaleY:gr,scaleZ:gr,skew:yn,skewX:yn,skewY:yn,distance:ie,translateX:ie,translateY:ie,translateZ:ie,x:ie,y:ie,z:ie,perspective:ie,transformPerspective:ie,opacity:Fs,originX:lc,originY:lc,originZ:ie,zIndex:gc,filter:Ei,WebkitFilter:Ei,fillOpacity:Fs,strokeOpacity:Fs,numOctaves:gc},bl=e=>ip[e],lp=(e,t)=>t&&typeof e=="number"&&t.transform?t.transform(e):e;function Rx(e,t){let s=bl(e);return s!==Ei&&(s=or),s.getAnimatableNone?s.getAnimatableNone(t):void 0}const qx={linear:Gd,easeIn:fl,easeInOut:Qd,easeOut:ix,circIn:Yd,circInOut:lx,circOut:Zd,backIn:vl,backInOut:cx,backOut:ax,anticipate:ux,bounceIn:gx,bounceInOut:mx,bounceOut:qr},mc=e=>{if(Array.isArray(e)){const[t,s,r,o]=e;return Bx(t,s,r,o)}else if(typeof e=="string")return qx[e];return e},Nx=e=>Array.isArray(e)&&typeof e[0]!="number",fc=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&or.test(t)&&!t.startsWith("url("));function Ux(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function Hx({ease:e,times:t,delay:s,...r}){const o={...r};return t&&(o.offset=t),e&&(o.ease=Nx(e)?e.map(mc):mc(e)),s&&(o.elapsed=-s),o}function zx(e,t,s){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),Ux(t),Kx(e)||(e={...e,...op(s,t.to)}),{...t,...Hx(e)}}function Kx({delay:e,repeat:t,repeatType:s,repeatDelay:r,from:o,...i}){return!!Object.keys(i).length}function Wx(e,t){return e[t]||e.default||e}function Gx(e,t,s,r,o){const i=Wx(r,e);let l=i.from===null||i.from===void 0?t.get():i.from;const a=fc(e,s);l==="none"&&a&&typeof s=="string"&&(l=Rx(e,s));const c=fc(e,l);function d(h){const g={from:l,to:s,velocity:r.velocity?r.velocity:t.getVelocity(),onUpdate:m=>t.set(m)};return i.type==="inertia"||i.type==="decay"?wx({...g,...i}):Xd({...zx(i,g,e),onUpdate:m=>{g.onUpdate(m),i.onUpdate&&i.onUpdate(m)},onComplete:()=>{r.onComplete&&r.onComplete(),o&&o(),h&&h()}})}function p(h){return t.set(s),r.onComplete&&r.onComplete(),o&&o(),h&&h(),{stop:()=>{}}}return!c||!a||i.type===!1?p:d}function Qx(){const{motionValues:e,stop:t,get:s}=Fx();return{motionValues:e,stop:t,push:(o,i,l,a={},c)=>{const d=l[o],p=s(o,d,l);if(a&&a.immediate){p.set(i);return}const h=Gx(o,p,i,a,c);p.start(h)}}}function Yx(e,t={},{motionValues:s,push:r,stop:o}=Qx()){const i=_(t),l=H(!1);ce(s,h=>{l.value=Object.values(h).filter(g=>g.isAnimating()).length>0},{immediate:!0,deep:!0});const a=h=>{if(!i||!i[h])throw new Error(`The variant ${h} does not exist.`);return i[h]},c=h=>(typeof h=="string"&&(h=a(h)),Promise.all(Object.entries(h).map(([g,m])=>{if(g!=="transition")return new Promise(v=>r(g,m,e,h.transition||op(g,h[g]),v))}).filter(Boolean)));return{isAnimating:l,apply:c,set:h=>{const g=fi(h)?h:a(h);Object.entries(g).forEach(([m,v])=>{m!=="transition"&&r(m,v,e,{immediate:!0})})},leave:async h=>{let g;if(i&&(i.leave&&(g=i.leave),!i.leave&&i.initial&&(g=i.initial)),!g){h();return}await c(g),h()},stop:o}}const yl=typeof window!="undefined",Zx=()=>yl&&window.onpointerdown===null,Jx=()=>yl&&window.ontouchstart===null,Xx=()=>yl&&window.onmousedown===null;function ew({target:e,state:t,variants:s,apply:r}){const o=_(s),i=H(!1),l=H(!1),a=H(!1),c=A(()=>{let p=[];return o&&(o.hovered&&(p=[...p,...Object.keys(o.hovered)]),o.tapped&&(p=[...p,...Object.keys(o.tapped)]),o.focused&&(p=[...p,...Object.keys(o.focused)])),p}),d=A(()=>{const p={};Object.assign(p,t.value),i.value&&o.hovered&&Object.assign(p,o.hovered),l.value&&o.tapped&&Object.assign(p,o.tapped),a.value&&o.focused&&Object.assign(p,o.focused);for(const h in p)c.value.includes(h)||delete p[h];return p});o.hovered&&($t(e,"mouseenter",()=>i.value=!0),$t(e,"mouseleave",()=>{i.value=!1,l.value=!1}),$t(e,"mouseout",()=>{i.value=!1,l.value=!1})),o.tapped&&(Xx()&&($t(e,"mousedown",()=>l.value=!0),$t(e,"mouseup",()=>l.value=!1)),Zx()&&($t(e,"pointerdown",()=>l.value=!0),$t(e,"pointerup",()=>l.value=!1)),Jx()&&($t(e,"touchstart",()=>l.value=!0),$t(e,"touchend",()=>l.value=!1))),o.focused&&($t(e,"focus",()=>a.value=!0),$t(e,"blur",()=>a.value=!1)),ce(d,r)}function tw({set:e,target:t,apply:s,variants:r,variant:o}){const i=_(r);ce(()=>t,()=>{!i||(i.initial&&e("initial"),i.enter&&(o.value="enter"))},{immediate:!0,flush:"pre"})}function nw({state:e,apply:t}){ce(e,s=>{s&&t(s)},{immediate:!0})}function sw({target:e,variants:t,variant:s}){const r=_(t);r&&(r.visible||r.visibleOnce)&&gj(e,([{isIntersecting:o}])=>{r.visible?o?s.value="visible":s.value="initial":r.visibleOnce&&(o&&s.value!=="visibleOnce"?s.value="visibleOnce":s.value||(s.value="initial"))})}function rw(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&tw(e),t.syncVariants&&nw(e),t.visibilityHooks&&sw(e),t.eventListeners&&ew(e)}function ap(e={}){const t=Ie({...e}),s=H({});return ce(t,()=>{const r={};for(const[o,i]of Object.entries(t)){const l=bl(o),a=lp(i,l);r[o]=a}s.value=r},{immediate:!0,deep:!0}),{state:t,style:s}}function _l(e,t){ce(()=>Rr(e),s=>{!s||t(s)},{immediate:!0})}const ow={x:"translateX",y:"translateY",z:"translateZ"};function cp(e={},t=!0){const s=Ie({...e}),r=H("");return ce(s,o=>{let i="",l=!1;t&&(o.x||o.y||o.z)&&(i+=`translate3d(${[o.x||0,o.y||0,o.z||0].map(ie.transform).join(",")}) `,l=!0);for(const[a,c]of Object.entries(o)){if(t&&(a==="x"||a==="y"||a==="z"))continue;const d=bl(a),p=lp(c,d);i+=`${ow[a]||a}(${p}) `}t&&!l&&(i+="translateZ(0px) "),r.value=i.trim()},{immediate:!0,deep:!0}),{state:s,transform:r}}const iw=["","X","Y","Z"],lw=["perspective","translate","scale","rotate","skew"],up=["transformPerspective","x","y","z"];lw.forEach(e=>{iw.forEach(t=>{const s=e+t;up.push(s)})});const aw=new Set(up);function kl(e){return aw.has(e)}const cw=new Set(["originX","originY","originZ"]);function dp(e){return cw.has(e)}function uw(e){const t={},s={};return Object.entries(e).forEach(([r,o])=>{kl(r)||dp(r)?t[r]=o:s[r]=o}),{transform:t,style:s}}function pp(e){const{transform:t,style:s}=uw(e),{transform:r}=cp(t),{style:o}=ap(s);return r.value&&(o.value.transform=r.value),o.value}function dw(e,t){let s,r;const{state:o,style:i}=ap();return _l(e,l=>{r=l;for(const a of Object.keys(ip))l.style[a]===null||l.style[a]===""||kl(a)||dp(a)||(o[a]=l.style[a]);s&&Object.entries(s).forEach(([a,c])=>l.style[a]=c),t&&t(o)}),ce(i,l=>{if(!r){s=l;return}for(const a in l)r.style[a]=l[a]},{immediate:!0}),{style:o}}function pw(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const s=r=>r.endsWith("px")||r.endsWith("deg")?parseFloat(r):isNaN(Number(r))?Number(r):r;return t.reduce((r,o)=>{if(!o)return r;const[i,l]=o.split("("),c=l.split(",").map(p=>s(p.endsWith(")")?p.replace(")",""):p.trim())),d=c.length===1?c[0]:c;return{...r,[i]:d}},{})}function hw(e,t){Object.entries(pw(t)).forEach(([s,r])=>{const o=["x","y","z"];if(s==="translate3d"){if(r===0){o.forEach(i=>e[i]=0);return}r.forEach((i,l)=>e[o[l]]=i);return}if(r=parseFloat(r),s==="translateX"){e.x=r;return}if(s==="translateY"){e.y=r;return}if(s==="translateZ"){e.z=r;return}e[s]=r})}function gw(e,t){let s,r;const{state:o,transform:i}=cp();return _l(e,l=>{r=l,l.style.transform&&hw(o,l.style.transform),s&&(l.style.transform=s),t&&t(o)}),ce(i,l=>{if(!r){s=l;return}r.style.transform=l},{immediate:!0}),{transform:o}}function mw(e,t){const s=Ie({}),r=l=>Object.entries(l).forEach(([a,c])=>s[a]=c),{style:o}=dw(e,r),{transform:i}=gw(e,r);return ce(s,l=>{Object.entries(l).forEach(([a,c])=>{const d=kl(a)?i:o;d[a]&&d[a]===c||(d[a]=c)})},{immediate:!0,deep:!0}),_l(e,()=>t&&r(t)),{motionProperties:s,style:o,transform:i}}function fw(e={}){const t=_(e),s=H();return{state:A(()=>{if(!!s.value)return t[s.value]}),variant:s}}function hp(e,t={},s){const{motionProperties:r}=mw(e),{variant:o,state:i}=fw(t),l=Yx(r,t),a={target:e,variant:o,variants:t,state:i,motionProperties:r,...l};return rw(a,s),a}const vw=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],bw=(e,t)=>{const s=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};s&&(s.variants&&fi(s.variants)&&(t.value={...t.value,...s.variants}),vw.forEach(r=>{if(r==="delay"){if(s&&s[r]&&lj(s[r])){const o=s[r];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:o,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:o,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:o,...t.value.visibleOnce.transition}))}return}r==="visible-once"&&(r="visibleOnce"),s&&s[r]&&fi(s[r])&&(t.value[r]=s[r])}))},Mo=e=>({created:(s,r,o)=>{const i=r.value&&typeof r.value=="string"?r.value:o.key;i&&Fo[i]&&Fo[i].stop();const l=H(e||{});typeof r.value=="object"&&(l.value=r.value),bw(o,l);const a=hp(s,l);s.motionInstance=a,i&&(Fo[i]=a)},getSSRProps(s,r){let{initial:o}=s.value||r&&(r==null?void 0:r.props)||{};o=_(o);const i=oj((e==null?void 0:e.initial)||{},o||{});return!i||Object.keys(i).length===0?void 0:{style:pp(i)}}}),yw={initial:{opacity:0},enter:{opacity:1}},_w={initial:{opacity:0},visible:{opacity:1}},kw={initial:{opacity:0},visibleOnce:{opacity:1}},jw={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},xw={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},ww={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},$w={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Ew={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Sw={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Aw={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Cw={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Tw={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Bw={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Iw={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Pw={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Ow={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Vw={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Fw={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Lw={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},Dw={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},Mw={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},Rw={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},qw={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},Nw={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},Uw={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},Hw={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},zw={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},Kw={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},Ww={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},Gw={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Si={__proto__:null,fade:yw,fadeVisible:_w,fadeVisibleOnce:kw,pop:jw,popVisible:xw,popVisibleOnce:ww,rollBottom:Ow,rollLeft:$w,rollRight:Aw,rollTop:Bw,rollVisibleBottom:Vw,rollVisibleLeft:Ew,rollVisibleRight:Cw,rollVisibleTop:Iw,rollVisibleOnceBottom:Fw,rollVisibleOnceLeft:Sw,rollVisibleOnceRight:Tw,rollVisibleOnceTop:Pw,slideBottom:Kw,slideLeft:Lw,slideRight:Rw,slideTop:Uw,slideVisibleBottom:Ww,slideVisibleLeft:Dw,slideVisibleRight:qw,slideVisibleTop:Hw,slideVisibleOnceBottom:Gw,slideVisibleOnceLeft:Mw,slideVisibleOnceRight:Nw,slideVisibleOnceTop:zw},Qw=be({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var a;const t=gg(),s=Ie({});if(!e.is&&!t.default)return()=>nt("div",{});const r=A(()=>{let c;return e.preset&&(c=Si[e.preset]),c}),o=A(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),i=A(()=>{const c={...o.value,...r.value||{},...e.variants||{}};return e.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(e.delay)),c}),l=A(()=>{if(!e.is)return;let c=e.is;return typeof l.value=="string"&&!$p(c)&&(c=os(c)),c});if(((a=process==null?void 0:process.env)==null?void 0:a.NODE_ENV)==="development"||(process==null?void 0:process.dev)){const c=d=>{var p;(p=d.variants)!=null&&p.initial&&d.set("initial"),setTimeout(()=>{var h,g,m;(h=d.variants)!=null&&h.enter&&d.apply("enter"),(g=d.variants)!=null&&g.visible&&d.apply("visible"),(m=d.variants)!=null&&m.visibleOnce&&d.apply("visibleOnce")},10)};Hi(()=>Object.entries(s).forEach(([d,p])=>c(p)))}return{slots:t,component:l,motionConfig:i,instances:s}},render({slots:e,motionConfig:t,instances:s,component:r}){var a;const o=pp(t.initial||{}),i=(c,d)=>(c.props||(c.props={}),c.props.style=o,c.props.onVnodeMounted=({el:p})=>{const h=hp(p,t);s[d]=h},c);if(r){const c=nt(r,void 0,e);return i(c,0),c}return(((a=e.default)==null?void 0:a.call(e))||[]).map((c,d)=>i(c,d))}});function Yw(e){const t="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",s="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",r=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,o=>`-${o}`).toLowerCase().replace(/\s+/g,"-").replace(r,o=>s.charAt(t.indexOf(o))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const Zw={install(e,t){if(e.directive("motion",Mo()),e.component("Motion",Qw),!t||t&&!t.excludePresets)for(const s in Si){const r=Si[s];e.directive(`motion-${Yw(s)}`,Mo(r))}if(t&&t.directives)for(const s in t.directives){const r=t.directives[s];r.initial,e.directive(`motion-${s}`,Mo(r))}}},jl="vue-starport-injection",gp="vue-starport-options",Jw={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},mp={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var Xw=Object.defineProperty,Ur=Object.getOwnPropertySymbols,fp=Object.prototype.hasOwnProperty,vp=Object.prototype.propertyIsEnumerable,vc=(e,t,s)=>t in e?Xw(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,e8=(e,t)=>{for(var s in t||(t={}))fp.call(t,s)&&vc(e,s,t[s]);if(Ur)for(var s of Ur(t))vp.call(t,s)&&vc(e,s,t[s]);return e},bc=(e,t)=>{var s={};for(var r in e)fp.call(e,r)&&t.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&Ur)for(var r of Ur(e))t.indexOf(r)<0&&vp.call(e,r)&&(s[r]=e[r]);return s};const t8=be({name:"StarportProxy",props:e8({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},mp),setup(e,t){const s=M(jl),r=A(()=>s.getInstance(e.port,e.component)),o=H(),i=r.value.generateId(),l=H(!1);return r.value.isVisible||(r.value.land(),l.value=!0),ps(async()=>{r.value.el||(r.value.el=o.value,await Ye(),l.value=!0,r.value.rect.update())}),no(async()=>{r.value.rect.update(),r.value.liftOff(),r.value.el=void 0,l.value=!1,!r.value.options.keepAlive&&(await Ye(),await Ye(),!r.value.el&&s.dispose(r.value.port))}),ce(()=>e,async()=>{r.value.props&&await Ye();const a=e,{props:c}=a,d=bc(a,["props"]);r.value.props=c||{},r.value.setLocalOptions(d)},{deep:!0,immediate:!0}),()=>{const a=e,{initialProps:c,mountedProps:d}=a,p=bc(a,["initialProps","mountedProps"]),h=Pr(p,(l.value?d:c)||{});return nt("div",Pr(h,{id:i,ref:o,"data-starport-proxy":r.value.componentId,"data-starport-landed":r.value.isLanded?"true":void 0,"data-starport-floating":r.value.isLanded?void 0:"true"}),t.slots.default?nt(t.slots.default):void 0)}}});var n8=Object.defineProperty,s8=Object.defineProperties,r8=Object.getOwnPropertyDescriptors,yc=Object.getOwnPropertySymbols,o8=Object.prototype.hasOwnProperty,i8=Object.prototype.propertyIsEnumerable,_c=(e,t,s)=>t in e?n8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,l8=(e,t)=>{for(var s in t||(t={}))o8.call(t,s)&&_c(e,s,t[s]);if(yc)for(var s of yc(t))i8.call(t,s)&&_c(e,s,t[s]);return e},a8=(e,t)=>s8(e,r8(t));const c8=be({name:"Starport",inheritAttrs:!0,props:mp,setup(e,t){const s=H(!1);return ps(()=>{s.value=!0}),()=>{var l,a;const r=(a=(l=t.slots).default)==null?void 0:a.call(l);if(!r)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(r.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${r.length}`);const o=r[0];let i=o.type;return(!gm(i)||mn(i))&&(i={render(){return r}}),nt(t8,a8(l8({},e),{key:e.port,component:Yr(i),props:o.props}))}}});function u8(e){const t=Ie({height:0,width:0,left:0,top:0,update:r,listen:i,pause:l,margin:"0px",padding:"0px"}),s=jt?document.documentElement||document.body:void 0;function r(){if(!jt)return;const a=Yt(e);if(!a)return;const{height:c,width:d,left:p,top:h}=a.getBoundingClientRect(),g=window.getComputedStyle(a),m=g.margin,v=g.padding;Object.assign(t,{height:c,width:d,left:p,top:s.scrollTop+h,margin:m,padding:v})}const o=Du(r,{immediate:!1});function i(){!jt||(r(),o.resume())}function l(){o.pause()}return t}let d8=(e,t=21)=>(s=t)=>{let r="",o=s;for(;o--;)r+=e[Math.random()*e.length|0];return r};const kc=d8("abcdefghijklmnopqrstuvwxyz",5);function jc(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function p8(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var h8=Object.defineProperty,xc=Object.getOwnPropertySymbols,g8=Object.prototype.hasOwnProperty,m8=Object.prototype.propertyIsEnumerable,wc=(e,t,s)=>t in e?h8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ro=(e,t)=>{for(var s in t||(t={}))g8.call(t,s)&&wc(e,s,t[s]);if(xc)for(var s of xc(t))m8.call(t,s)&&wc(e,s,t[s]);return e};function f8(e,t,s={}){const r=p8(t),o=jc(r)||kc(),i=H(),l=H(null),a=H(!1),c=H(!1),d=Pp(!0),p=H({}),h=A(()=>Ro(Ro(Ro({},Jw),s),p.value)),g=H(0);let m;d.run(()=>{m=u8(i),ce(i,async E=>{E&&(c.value=!0),await Ye(),i.value||(c.value=!1)})});const v=jc(e);function k(){return`starport-${o}-${v}-${kc()}`}const j=k();return Ie({el:i,id:j,port:e,props:l,rect:m,scope:d,isLanded:a,isVisible:c,options:h,liftOffTime:g,component:t,componentName:r,componentId:o,generateId:k,setLocalOptions(E={}){p.value=JSON.parse(JSON.stringify(E))},elRef(){return i},liftOff(){!a.value||(a.value=!1,g.value=Date.now(),m.listen())},land(){a.value||(a.value=!0,m.pause())}})}function v8(e){const t=Ie(new Map);function s(o,i){let l=t.get(o);return l||(l=f8(o,i,e),t.set(o,l)),l.component=i,l}function r(o){var i;(i=t.get(o))==null||i.scope.stop(),t.delete(o)}return{portMap:t,dispose:r,getInstance:s}}var b8=Object.defineProperty,y8=Object.defineProperties,_8=Object.getOwnPropertyDescriptors,$c=Object.getOwnPropertySymbols,k8=Object.prototype.hasOwnProperty,j8=Object.prototype.propertyIsEnumerable,Ec=(e,t,s)=>t in e?b8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,x8=(e,t)=>{for(var s in t||(t={}))k8.call(t,s)&&Ec(e,s,t[s]);if($c)for(var s of $c(t))j8.call(t,s)&&Ec(e,s,t[s]);return e},w8=(e,t)=>y8(e,_8(t));const $8=be({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=M(jl);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const s=A(()=>t.getInstance(e.port,e.component)),r=A(()=>{var l;return((l=s.value.el)==null?void 0:l.id)||s.value.id}),o=A(()=>{const l=Date.now()-s.value.liftOffTime,a=Math.max(0,s.value.options.duration-l),c=s.value.rect,d={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!s.value.isVisible||!s.value.el?w8(x8({},d),{zIndex:-1,display:"none"}):(s.value.isLanded?d.display="none":Object.assign(d,{transitionProperty:"all",transitionDuration:`${a}ms`,transitionTimingFunction:s.value.options.easing}),d)}),i={};return()=>{const l=!!(s.value.isLanded&&s.value.el);return nt("div",{style:o.value,"data-starport-craft":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true",onTransitionend:s.value.land},nt(rg,{to:l?`#${r.value}`:"body",disabled:!l},nt(s.value.component,Pr(i,s.value.props))))}}}),E8=be({name:"StarportCarrier",setup(e,{slots:t}){const s=v8(M(gp,{}));return fn().appContext.app.provide(jl,s),()=>{var o;return[(o=t.default)==null?void 0:o.call(t),Array.from(s.portMap.entries()).map(([i,{component:l}])=>nt($8,{key:i,port:i,component:l}))]}}});function S8(e={}){return{install(t){t.provide(gp,e),t.component("Starport",c8),t.component("StarportCarrier",E8)}}}function A8(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(Zw),e.app.use(S8({keepAlive:!0})),sj(e)}function pt(e,t,s){var r,o;return(o=((r=e.instance)==null?void 0:r.$).provides[t])!=null?o:s}function C8(){return{install(e){e.directive("click",{name:"v-click",mounted(t,s){var p,h,g,m;if(Os.value||((p=pt(s,yr))==null?void 0:p.value))return;const r=pt(s,zn),o=pt(s,br),i=pt(s,ti),l=s.modifiers.hide!==!1&&s.modifiers.hide!=null,a=s.modifiers.fade!==!1&&s.modifiers.fade!=null,c=((h=r==null?void 0:r.value)==null?void 0:h.length)||0,d=a?Xg:jo;if(r&&!((g=r==null?void 0:r.value)!=null&&g.includes(t))&&r.value.push(t),s.value===null&&(s.value=r==null?void 0:r.value.length),!(i!=null&&i.value.has(s.value)))i==null||i.value.set(s.value,[t]);else if(!((m=i==null?void 0:i.value.get(s.value))!=null&&m.includes(t))){const v=(i==null?void 0:i.value.get(s.value))||[];i==null||i.value.set(s.value,[t].concat(v))}t==null||t.classList.toggle(qn,!0),o&&ce(o,()=>{var E;const v=(E=o==null?void 0:o.value)!=null?E:0,k=s.value!=null?v>=s.value:v>c;t.classList.contains(xo)||t.classList.toggle(d,!k),l!==!1&&l!==void 0&&t.classList.toggle(d,k),t.classList.toggle(ks,!1);const j=i==null?void 0:i.value.get(v);j==null||j.forEach((x,$)=>{x.classList.toggle(pr,!1),$===j.length-1?x.classList.toggle(ks,!0):x.classList.toggle(pr,!0)}),t.classList.contains(ks)||t.classList.toggle(pr,k)},{immediate:!0})},unmounted(t,s){t==null||t.classList.toggle(qn,!1);const r=pt(s,zn);r!=null&&r.value&&la(r.value,t)}}),e.directive("after",{name:"v-after",mounted(t,s){var a,c;if(Os.value||((a=pt(s,yr))==null?void 0:a.value))return;const r=pt(s,zn),o=pt(s,br),i=pt(s,ti),l=r==null?void 0:r.value.length;s.value===void 0&&(s.value=r==null?void 0:r.value.length),i!=null&&i.value.has(s.value)?(c=i==null?void 0:i.value.get(s.value))==null||c.push(t):i==null||i.value.set(s.value,[t]),t==null||t.classList.toggle(qn,!0),o&&ce(o,()=>{var p,h,g;const d=((p=o.value)!=null?p:0)>=((g=(h=s.value)!=null?h:l)!=null?g:0);t.classList.contains(xo)||t.classList.toggle(jo,!d),t.classList.toggle(ks,!1),t.classList.contains(ks)||t.classList.toggle(pr,d)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(qn,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,s){var l,a,c;if(Os.value||((l=pt(s,yr))==null?void 0:l.value))return;const r=pt(s,zn),o=pt(s,br),i=((a=r==null?void 0:r.value)==null?void 0:a.length)||0;r&&!((c=r==null?void 0:r.value)!=null&&c.includes(t))&&r.value.push(t),t==null||t.classList.toggle(qn,!0),o&&ce(o,()=>{var h;const d=(h=o==null?void 0:o.value)!=null?h:0,p=s.value!=null?d>=s.value:d>i;t.classList.toggle(jo,p),t.classList.toggle(xo,p)},{immediate:!0})},unmounted(t,s){t==null||t.classList.toggle(qn,!1);const r=pt(s,zn);r!=null&&r.value&&la(r.value,t)}})}}}function T8(e,t){const s=pd(e),r=hd(t,s.currentRoute,s.currentPage);return{nav:{...s,...r,downloadPDF:gi,next:dn,nextSlide:Ws,openInEditor:ej,prev:pn,prevSlide:Gs},configs:je,themeConfigs:A(()=>je.themeConfig)}}function B8(){return{install(e){const t=T8(en,It);e.provide(z,Ie(t))}}}const vs=Dg(nj);vs.use(bt);vs.use(Wg());vs.use(C8());vs.use(B8());A8({app:vs,router:bt});vs.mount("#app");export{Es as $,id as A,le as B,xe as C,it as D,Cb as E,W as F,It as G,Mr as H,Q2 as I,Bo as J,wo as K,zs as L,Co as M,Tu as N,Py as O,nl as P,Ty as Q,He as R,sl as S,xd as T,Db as U,ze as V,Ke as W,Vt as X,I8 as Y,Re as Z,Le as _,n as a,hr as a0,gs as a1,di as a2,ib as a3,lb as a4,ab as a5,ub as a6,hs as a7,$u as a8,F8 as a9,Ut as aa,lt as ab,b0 as ac,En as ad,Au as ae,db as af,no as ag,A as b,T as c,be as d,z as e,mt as f,G as g,_ as h,M as i,yb as j,X2 as k,je as l,Qg as m,Oe as n,y as o,ps as p,Ie as q,H as r,P8 as s,Pn as t,O8 as u,V8 as v,ce as w,Q as x,st as y,V as z};
