(function(){
'use strict';Object.freeze({assumingES6:!0,productionMode:!0,linkerVersion:"1.0.1",fileLevelThis:this});const f=Math.imul,aa=Math.clz32;let l;function ba(a){for(const b in a)return b}class m{constructor(a){this.pb=a}toString(){return String.fromCharCode(this.pb)}}function p(a,b){return ca(a,b,0)}var ca=function da(a,b,c){const h=new a.Sa(b[c]);if(c<b.length-1){a=a.ra;c+=1;const e=h.g;for(let k=0;k<e.length;k++)e[k]=da(a,b,c)}return h};
function ea(a){switch(typeof a){case "string":return q(fa);case "number":return ha(a)?a<<24>>24===a?q(ia):a<<16>>16===a?q(ja):q(ka):q(la);case "boolean":return q(ma);case "undefined":return q(na);default:return null===a?a.gc():a instanceof r?q(oa):a instanceof m?q(pa):a&&a.$classData?q(a.$classData):null}}
function t(a){switch(typeof a){case "string":return"java.lang.String";case "number":return ha(a)?a<<24>>24===a?"java.lang.Byte":a<<16>>16===a?"java.lang.Short":"java.lang.Integer":"java.lang.Float";case "boolean":return"java.lang.Boolean";case "undefined":return"java.lang.Void";default:return null===a?a.gc():a instanceof r?"java.lang.Long":a instanceof m?"java.lang.Character":a&&a.$classData?a.$classData.name:null.W.name}}function qa(a){return void 0===a?"undefined":a.toString()}
function ra(a){switch(typeof a){case "string":return u(a);case "number":return a=+a,a=sa(ta(),a);case "boolean":return a?1231:1237;case "undefined":return 0;default:return a&&a.$classData||null===a?a.V():a instanceof m?v(a):ua(a)}}let va=0;const wa=new WeakMap;function ua(a){switch(typeof a){case "string":case "number":case "bigint":case "boolean":case "undefined":return ra(a);default:if(null===a)return 0;{let b=wa.get(a);void 0===b&&(va=b=va+1|0,wa.set(a,b));return b}}}
function ha(a){return"number"===typeof a&&(a|0)===a&&1/a!==1/-0}const xa=new m(0);function v(a){return null===a?0:a.pb}function q(a){a.Pa||(a.Pa=new ya(a));return a.Pa}function w(a,b,c,d){var h=new za;h.J={};h.mb=a;h.qa=b;h.Ua=d;h.name=c;h.isPrimitive=!0;h.isInstance=function(){return!1};return h}
function x(a,b,c,d,h){var e=new za;const k=ba(a);e.J=c;e.qa="L"+b+";";e.Ua=h||function(g,n){return!!(g&&g.$classData&&g.$classData.w===n&&g.$classData.v.J[k])};e.name=b;e.isInterface=!1;e.isInstance=d||function(g){return!!(g&&g.$classData&&g.$classData.J[k])};return e}function y(a){a.Oa||(a.Oa=(new za).hc(a));return a.Oa}
class za{constructor(){this.Sa=void 0;this.v=this.ra=this.J=null;this.w=0;this.mb=null;this.qa="";this.Ua=this.Oa=this.Pa=void 0;this.name="";this.isJSClass=this.isArrayClass=this.isInterface=this.isPrimitive=!1;this.isInstance=void 0}hc(a){const b="longZero"===a.mb?l:a.mb;class c extends z{constructor(k){super();if("number"===typeof k){this.g=Array(k);for(let g=0;g<k;g++)this.g[g]=b}else this.g=k}}c.prototype.$classData=this;const d="["+a.qa,h=a.v||a,e=a.w+1;this.Sa=c;this.J={a:1,Va:1,b:1};this.ra=
a;this.v=h;this.w=e;this.name=this.qa=d;this.isArrayClass=!0;this.isInstance=function(k){return h.Ua(k,e)};return this}["isAssignableFrom"](a){return this.isPrimitive||a.isPrimitive?this===a:this.isInstance(a===fa?"":a===ma?!1:a===ia||a===ja||a===ka||a===la||a===Aa?0:a===oa?l:a===pa?xa:a===na?void 0:{$classData:a})}["checkCast"](){}["getSuperclass"](){return this.Qc?q(this.Qc):null}["getComponentType"](){return this.ra?q(this.ra):null}["newArrayOfThisClass"](a){let b=this;for(let c=0;c<a.length;c++)b=
y(b);return p(b,a)}}function Ba(a,b){return!(!a||!a.$classData||a.$classData.w!==b||a.$classData.v!==Ca)}function Da(a,b){return!(!a||!a.$classData||a.$classData.w!==b||a.$classData.v!==Ea)}function Fa(a,b){return!(!a||!a.$classData||a.$classData.w!==b||a.$classData.v!==Ga)}function Ha(a,b){return!(!a||!a.$classData||a.$classData.w!==b||a.$classData.v!==Ia)}function Ja(a,b){return!(!a||!a.$classData||a.$classData.w!==b||a.$classData.v!==Ka)}
function La(a,b){return!(!a||!a.$classData||a.$classData.w!==b||a.$classData.v!==Ma)}function Na(a,b){return!(!a||!a.$classData||a.$classData.w!==b||a.$classData.v!==Oa)}function Pa(a,b){return!(!a||!a.$classData||a.$classData.w!==b||a.$classData.v!==Qa)}const Ca=w(!1,"Z","boolean",Ba),Ea=w(0,"C","char",Da),Ga=w(0,"B","byte",Fa),Ia=w(0,"S","short",Ha),Ka=w(0,"I","int",Ja),Ma=w("longZero","J","long",La),Oa=w(0,"F","float",Na),Qa=w(0,"D","double",Pa);
class z{V(){return ua(this)}u(){const a=t(this),b=this.V();return a+"@"+(+(b>>>0)).toString(16)}["toString"](){return this.u()}}function Ra(a,b){if(a=a&&a.$classData){const c=a.w||0;return!(c<b)&&(c>b||!a.v.isPrimitive)}return!1}const A=x({a:0},"java.lang.Object",{a:1},function(a){return null!==a},Ra);z.prototype.$classData=A;class ya extends z{constructor(a){super();this.W=a}u(){return(this.W.isInterface?"interface ":this.W.isPrimitive?"":"class ")+this.W.name}}
const Sa=x({pc:0},"java.lang.Class",{pc:1,a:1});ya.prototype.$classData=Sa;function sa(a,b){const c=b|0;if(c===b&&-Infinity!==1/b)return c;a.ub[0]=b;a=new r(a.ua[a.wb]|0,a.ua[a.vb]|0);return a.Q^a.U}
class Ta extends z{constructor(){super();this.ub=this.ua=this.ia=null;this.Wa=!1;this.wb=this.vb=0;B=this;this.ia=new ArrayBuffer(8);this.ua=new Int32Array(this.ia,0,2);new Float32Array(this.ia,0,2);this.ub=new Float64Array(this.ia,0,1);this.ua[0]=16909060;this.vb=(this.Wa=1===((new Int8Array(this.ia,0,8))[0]|0))?0:1;this.wb=this.Wa?1:0}}const Ua=x({sc:0},"java.lang.FloatingPointBits$",{sc:1,a:1});Ta.prototype.$classData=Ua;let B=void 0;function ta(){B||(B=new Ta);return B}
class Va extends z{constructor(){super();this.zb=null;C=this;this.zb=new Wa(!1);new Wa(!0)}}const Xa=x({Fc:0},"java.lang.System$Streams$",{Fc:1,a:1});Va.prototype.$classData=Xa;let C=void 0;function Ya(){C||(C=new Va);return C}x({Gc:0},"java.lang.System$SystemProperties$",{Gc:1,a:1});x({Lc:0},"java.lang.Utils$",{Lc:1,a:1});x({Mc:0},"java.lang.Utils$Cache$",{Mc:1,a:1});function Za(a){return!!(a&&a.$classData&&1===a.$classData.w&&a.$classData.v.J.Bb)}
const na=x({Bb:0},"java.lang.Void",{Bb:1,a:1},a=>void 0===a);x({Nc:0},"java.lang.reflect.Array$",{Nc:1,a:1});x({Oc:0},"java.util.Arrays$",{Oc:1,a:1});function D(){$a||($a=new ab);var a=$a;0===(67108864&a.P)&&0===(67108864&a.P)&&(0===(33554432&a.P)&&0===(33554432&a.P)&&(a.ob=window,a.P|=33554432),a.nb=a.ob.document,a.P|=67108864);return a.nb}class ab extends z{constructor(){super();this.nb=this.ob=null;this.P=0}}const bb=x({ac:0},"org.scalajs.dom.package$",{ac:1,a:1});ab.prototype.$classData=bb;
let $a=void 0;function cb(a,b,c,d,h){const e=b.y;0!==(c.length|0)&&(e.c=""+e.c+c);a=a.e();if(a.h())for(c=a.j(),e.c=""+e.c+c;a.h();)e.c=""+e.c+d,c=a.j(),e.c=""+e.c+c;0!==(h.length|0)&&(e.c=""+e.c+h);return b}x({Zd:0},"scala.runtime.BoxesRunTime$",{Zd:1,a:1});class db extends z{}const eb=x({be:0},"scala.runtime.ScalaRunTime$",{be:1,a:1});db.prototype.$classData=eb;let E=void 0;
function F(a,b){if(null===b)return 0;if("number"===typeof b){a=+b;b=2147483647<a?2147483647:-2147483648>a?-2147483648:a|0;if(b===a)a=b;else{b=fb();var c=b;if(-9223372036854775808>a)c.pa=-2147483648,c=0;else if(0x7fffffffffffffff<=a)c.pa=2147483647,c=-1;else{{const d=a|0,h=a/4294967296|0;c.pa=0>a&&0!==d?-1+h|0:h;c=d}}b=b.pa;fb();a=(0>b?-(4294967296*+((0!==c?~b:-b|0)>>>0)+ +((-c|0)>>>0)):4294967296*b+ +(c>>>0))===a?c^b:sa(ta(),a)}return a}return b instanceof r?(a=null===b?l:b,b=new r(a.Q,a.U),a=b.Q,
b=b.U,a=b===a>>31?a:a^b):ra(b)}class gb extends z{}const hb=x({ce:0},"scala.runtime.Statics$",{ce:1,a:1});gb.prototype.$classData=hb;let ib=void 0;function G(){ib||(ib=new gb);return ib}x({de:0},"scala.runtime.Statics$PFMarker$",{de:1,a:1});class jb extends z{}const kb=x({Yd:0},"scala.scalajs.runtime.package$",{Yd:1,a:1});jb.prototype.$classData=kb;let H=void 0;class lb extends z{constructor(a){super();this.Eb=a}u(){return"DynamicVariable("+this.Eb+")"}}
const mb=x({Uc:0},"scala.util.DynamicVariable",{Uc:1,a:1});lb.prototype.$classData=mb;function I(a,b){b=f(-862048943,b);b=f(461845907,b<<15|b>>>17|0);a^=b;return-430675100+f(5,a<<13|a>>>19|0)|0}function J(a){a=f(-2048144789,a^(a>>>16|0));a=f(-1028477387,a^(a>>>13|0));return a^(a>>>16|0)}class nb extends z{}
function ob(){pb();var a=new K;if(null===D().getElementById("scala-webapp")){var b=D().createElement("div");b.id="scala-webapp";D().body.appendChild(b)}b=D().createElement("h1");b.textContent="ScalaJS Experiments";L(a,b);b=D().createElement("p");b.textContent="This web-page was generated using Scala, which was compiled to JavaScript with ScalaJS.";L(a,b);b=D().createElement("hr");L(a,b);b=D().createElement("h3");b.textContent="Directing Text to Evaluation Class";L(a,b);b=D().createElement("hr");L(a,
b);b=D().createElement("h3");b.textContent="Appending Elements to the DOM";L(a,b);b=D().createElement("button");b.textContent="Add paragraph";b.addEventListener("click",()=>{pb();{var c=1;const d=D().getElementsByTagName("p"),h=-1+(d.length|0)|0;if(!(0>h)){let e=0;for(;;){const k=d[e].textContent;0<=(k.length|0)&&"Button clicked"===k.substring(0,14)&&(c=1+c|0);if(e===h)break;e=1+e|0}}}qb(D().getElementById("append-test"),"Button clicked "+c+(2>c?" time!":" times!"))});L(a,b);b=D().createElement("div");
b.id="append-test";L(a,b);b=D().createElement("hr");L(a,b);for(a=a.N.e();a.h();)b=a.j(),D().getElementById("scala-webapp").appendChild(b);qb(D().getElementById("scala-webapp"),"All elements above generated using ScalaJS")}function qb(a,b){const c=D().createElement("p");c.textContent=b;a.appendChild(c)}class rb extends z{}const sb=x({bc:0},"tutorial.webapp.TutorialApp$",{bc:1,a:1});rb.prototype.$classData=sb;let tb=void 0;function pb(){tb||(tb=new rb)}x({oc:0},"java.lang.Character$",{oc:1,a:1,b:1});
x({uc:0},"java.lang.Integer$",{uc:1,a:1,b:1});class ub extends z{}x({Cc:0},"java.lang.String$",{Cc:1,a:1,b:1});function M(a,b){a.Ab=b;a.Hc=null;a.Ic=!0;a.Jc=!0;a.rb()}
class vb extends Error{constructor(){super();this.Hc=this.Ab=null;this.Jc=this.Ic=!1}ta(){return this.Ab}rb(){"[object Error]"!==Object.prototype.toString.call(this)&&void 0!==Error.captureStackTrace&&Error.captureStackTrace(this)}u(){const a=t(this),b=this.ta();return null===b?a:a+": "+b}V(){return z.prototype.V.call(this)}get ["message"](){var a=this.ta();return a=null===a?"":a}get ["name"](){return t(this)}["toString"](){return this.u()}}
function wb(a,b){if(0===(-2097152&b))b=""+(4294967296*b+ +(a>>>0));else{var c=(32+aa(1E9)|0)-(0!==b?aa(b):32+aa(a)|0)|0,d=c,h=0===(32&d)?1E9<<d:0;d=0===(32&d)?5E8>>>(31-d|0)|0|0<<d:1E9<<d;var e=a,k=b;for(a=b=0;0<=c&&0!==(-2097152&k);){var g=e,n=k;const Zc=h,Hb=d;if(n===Hb?(-2147483648^g)>=(-2147483648^Zc):(-2147483648^n)>=(-2147483648^Hb))g=k,n=d,k=e-h|0,g=(-2147483648^k)>(-2147483648^e)?-1+(g-n|0)|0:g-n|0,e=k,k=g,32>c?b|=1<<c:a|=1<<c;c=-1+c|0;g=d>>>1|0;h=h>>>1|0|d<<31;d=g}c=k;if(0===c?-1147483648<=
(-2147483648^e):-2147483648<=(-2147483648^c))c=4294967296*k+ +(e>>>0),d=c/1E9,h=d/4294967296|0,d=b+(d|0)|0,a=(-2147483648^d)<(-2147483648^b)?1+(a+h|0)|0:a+h|0,b=d,e=c%1E9|0;c=""+e;b=""+(4294967296*a+ +(b>>>0))+"000000000".substring(c.length|0)+c}return b}class xb extends z{constructor(){super();this.pa=0}}const yb=x({dc:0},"org.scalajs.linker.runtime.RuntimeLong$",{dc:1,a:1,b:1});xb.prototype.$classData=yb;let zb=void 0;function fb(){zb||(zb=new xb);return zb}
function Ab(a,b,c,d,h){a=ea(b);var e;if(e=!!a.W.isArrayClass)e=!!ea(c).W.isAssignableFrom(a.W);if(e)if(b=b.g,c=c.g,b!==c||0>d||(0+h|0)<d)for(a=0;a<h;a=a+1|0)c[d+a|0]=b[0+a|0];else for(a=h-1|0;0<=a;a=a-1|0)c[d+a|0]=b[0+a|0];else for(a=0,h=0+h|0;a<h;){E||(E=new db);var k=c;e=d;E||(E=new db);var g=b;if(Ra(g,1)||Ja(g,1)||Pa(g,1)||La(g,1)||Na(g,1))g=g.g[a];else if(Da(g,1))g=new m(g.g[a]);else if(Fa(g,1)||Ha(g,1)||Ba(g,1)||Za(g))g=g.g[a];else{if(null===g)throw new Bb;throw new Cb(g);}if(Ra(k,1))k.g[e]=
g;else if(Ja(k,1))k.g[e]=g|0;else if(Pa(k,1))k.g[e]=+g;else if(La(k,1))k.g[e]=null===g?l:g;else if(Na(k,1))k.g[e]=+g;else if(Da(k,1))k.g[e]=v(g);else if(Fa(k,1))k.g[e]=g|0;else if(Ha(k,1))k.g[e]=g|0;else if(Ba(k,1))k.g[e]=!!g;else if(Za(k))k.g[e]=void 0;else{if(null===k)throw new Bb;throw new Cb(k);}a=1+a|0;d=1+d|0}}class Db extends z{}const Eb=x({Rc:0},"scala.Array$",{Rc:1,a:1,b:1});Db.prototype.$classData=Eb;let Fb=void 0;function Gb(){Fb||(Fb=new Db);return Fb}
class Ib extends z{constructor(){super();this.Cb=null;N=this;this.Cb=new lb(Ya().zb);Ya()}}const Jb=x({Sc:0},"scala.Console$",{Sc:1,a:1,ie:1});Ib.prototype.$classData=Jb;let N=void 0;x({yd:0},"scala.collection.immutable.List$$anon$1",{yd:1,a:1,I:1});class Kb extends z{u(){return"\x3cfunction0\x3e"}}class Lb extends z{constructor(a){super();this.kb=a}u(){return""+this.kb}}const Mb=x({$d:0},"scala.runtime.IntRef",{$d:1,a:1,b:1});Lb.prototype.$classData=Mb;
class Nb extends z{constructor(a){super();this.lb=a}u(){return""+this.lb}}const Ob=x({ae:0},"scala.runtime.ObjectRef",{ae:1,a:1,b:1});Nb.prototype.$classData=Ob;class Pb extends nb{constructor(){super();this.za=0;O=this;this.za=u("Seq");u("Map");u("Set")}}const Qb=x({Vc:0},"scala.util.hashing.MurmurHash3$",{Vc:1,je:1,a:1});Pb.prototype.$classData=Qb;let O=void 0;function Rb(){O||(O=new Pb);return O}
const ma=x({lc:0},"java.lang.Boolean",{lc:1,a:1,b:1,K:1},a=>"boolean"===typeof a),pa=x({nc:0},"java.lang.Character",{nc:1,a:1,b:1,K:1},a=>a instanceof m);class Sb extends vb{}const Tb=x({C:0},"java.lang.Exception",{C:1,F:1,a:1,b:1});Sb.prototype.$classData=Tb;function Ub(a,b){if(0>b)return 1;var c=a.k();if(0<=c)return c===b?0:c<b?-1:1;c=0;for(a=a.e();a.h();){if(c===b)return a.h()?1:0;a.j();c=1+c|0}return c-b|0}
class Vb extends z{constructor(){super();this.ka=null;Wb=this;this.ka=new Xb}R(a){return a.e()}}const Yb=x({ad:0},"scala.collection.Iterator$",{ad:1,a:1,S:1,b:1});Vb.prototype.$classData=Yb;let Wb=void 0;function Zb(){Wb||(Wb=new Vb);return Wb}function $b(a,b){if(b&&b.$classData&&b.$classData.J.T)return b;if(b&&b.$classData&&b.$classData.J.o)return new ac(new P(((c,d)=>()=>d.e())(a,b)));a=bc(Q(),b);return cc(new dc,a)}class ec extends z{R(a){return $b(this,a)}}
const fc=x({gd:0},"scala.collection.View$",{gd:1,a:1,S:1,b:1});ec.prototype.$classData=fc;let gc=void 0;class hc extends z{constructor(a,b){super();this.td=a;this.ud=b}q(){return this.td}n(){return this.ud}}const ic=x({sd:0},"scala.collection.immutable.LazyList$State$Cons",{sd:1,a:1,rd:1,b:1});hc.prototype.$classData=ic;class jc extends z{Ta(){throw new kc("head of empty lazy list");}n(){throw lc("tail of empty lazy list");}q(){this.Ta()}}
const mc=x({vd:0},"scala.collection.immutable.LazyList$State$Empty$",{vd:1,a:1,rd:1,b:1});jc.prototype.$classData=mc;let nc=void 0;function oc(){nc||(nc=new jc);return nc}function pc(a){return(0,a.Wd)()}class P extends Kb{constructor(a){super();this.Wd=a}}const qc=x({Vd:0},"scala.scalajs.runtime.AnonFunction0",{Vd:1,ne:1,a:1,ee:1});P.prototype.$classData=qc;x({Xd:0},"scala.scalajs.runtime.AnonFunction1",{Xd:1,oe:1,a:1,I:1});class rc extends z{}
const ia=x({mc:0},"java.lang.Byte",{mc:1,ea:1,a:1,b:1,K:1},a=>"number"===typeof a&&a<<24>>24===a&&1/a!==1/-0),Aa=x({qc:0},"java.lang.Double",{qc:1,ea:1,a:1,b:1,K:1},a=>"number"===typeof a),la=x({rc:0},"java.lang.Float",{rc:1,ea:1,a:1,b:1,K:1},a=>"number"===typeof a),ka=x({tc:0},"java.lang.Integer",{tc:1,ea:1,a:1,b:1,K:1},a=>ha(a)),oa=x({yc:0},"java.lang.Long",{yc:1,ea:1,a:1,b:1,K:1},a=>a instanceof r);class R extends Sb{}
const ja=x({Bc:0},"java.lang.Short",{Bc:1,ea:1,a:1,b:1,K:1},a=>"number"===typeof a&&a<<16>>16===a&&1/a!==1/-0);function u(a){let b=0,c=1,d=-1+(a.length|0)|0;for(;0<=d;)b=b+f(65535&(a.charCodeAt(d)|0),c)|0,c=f(31,c),d=-1+d|0;return b}const fa=x({ec:0},"java.lang.String",{ec:1,a:1,b:1,K:1,tb:1},a=>"string"===typeof a);function sc(a){a.c="";return a}class tc extends z{constructor(){super();this.c=null}u(){return this.c}i(){return this.c.length|0}}
const uc=x({Dc:0},"java.lang.StringBuilder",{Dc:1,a:1,tb:1,ic:1,b:1});tc.prototype.$classData=uc;class r extends ub{constructor(a,b){super();this.Q=a;this.U=b}V(){return this.Q^this.U}u(){fb();var a=this.Q,b=this.U;return b===a>>31?""+a:0>b?"-"+wb(-a|0,0!==a?~b:-b|0):wb(a,b)}}const vc=x({cc:0},"org.scalajs.linker.runtime.RuntimeLong",{cc:1,ea:1,a:1,b:1,K:1});r.prototype.$classData=vc;
class wc extends z{e(){return this}d(){return!this.h()}qb(a){{let b=0;for(;b<a&&this.h();)this.j(),b=1+b|0}return this}u(){return"\x3citerator\x3e"}Ra(a,b,c,d){return cb(this,a,b,c,d)}k(){return-1}}class xc extends z{constructor(){super();this.Hb=null}R(a){return this.Hb.R(a)}}function bc(a,b){return b instanceof S?b:0===b.k()?a.fb:new S(new P(((c,d)=>()=>yc(Q(),d.e()))(a,b)))}
function zc(a,b,c){return new S(new P(((d,h,e)=>()=>{let k=h.lb,g=e.kb;for(;0<g&&!k.d();)k=T(k).n(),h.lb=k,g=-1+g|0,e.kb=g;return T(k)})(a,new Nb(b),new Lb(c))))}function yc(a,b){if(b.h()){const c=b.j();return new hc(c,new S(new P(((d,h)=>()=>yc(Q(),h))(a,b))))}return oc()}class Ac extends z{constructor(){super();this.fb=null;Bc=this;this.fb=Cc(new S(new P((()=>()=>oc())(this))))}R(a){return bc(this,a)}}const Dc=x({pd:0},"scala.collection.immutable.LazyList$",{pd:1,a:1,fa:1,S:1,b:1});
Ac.prototype.$classData=Dc;let Bc=void 0;function Q(){Bc||(Bc=new Ac);return Bc}x({Fd:0},"scala.collection.immutable.WrappedString$",{Fd:1,a:1,le:1,ke:1,b:1});x({Md:0},"scala.collection.mutable.Builder$$anon$1",{Md:1,a:1,ib:1,Na:1,Ma:1});class Ec extends rc{constructor(){super()}}x({jc:0},"java.lang.ArithmeticException",{jc:1,L:1,C:1,F:1,a:1,b:1});x({xb:0},"java.lang.IllegalArgumentException",{xb:1,L:1,C:1,F:1,a:1,b:1});function U(a,b){M(a,b);return a}class V extends R{}
const Fc=x({yb:0},"java.lang.IndexOutOfBoundsException",{yb:1,L:1,C:1,F:1,a:1,b:1});V.prototype.$classData=Fc;x({wc:0},"java.lang.JSConsoleBasedPrintStream$DummyOutputStream",{wc:1,$b:1,a:1,Yb:1,kc:1,Zb:1});class Bb extends R{constructor(){super();M(this,null)}}const Gc=x({zc:0},"java.lang.NullPointerException",{zc:1,L:1,C:1,F:1,a:1,b:1});Bb.prototype.$classData=Gc;function lc(a){var b=new Hc;M(b,a);return b}class Hc extends R{}
const Ic=x({Kc:0},"java.lang.UnsupportedOperationException",{Kc:1,L:1,C:1,F:1,a:1,b:1});Hc.prototype.$classData=Ic;class kc extends R{constructor(a){super();M(this,a)}}const Jc=x({Pc:0},"java.util.NoSuchElementException",{Pc:1,L:1,C:1,F:1,a:1,b:1});kc.prototype.$classData=Jc;
class Cb extends R{constructor(a){super();this.Db=null;this.Za=!1;this.xa=a;M(this,null)}ta(){if(!this.Za&&!this.Za){if(null===this.xa)var a="null";else try{a=qa(this.xa)+" (of class "+t(this.xa)+")"}catch(b){if(H||(H=new jb),null!==(b instanceof vb?b:new Kc(b)))a="an instance of class "+t(this.xa);else throw b;}this.Db=a;this.Za=!0}return this.Db}}const Lc=x({Tc:0},"scala.MatchError",{Tc:1,L:1,C:1,F:1,a:1,b:1});Cb.prototype.$classData=Lc;x({fc:0},"scala.Tuple2",{fc:1,a:1,he:1,ya:1,G:1,b:1});
class Xb extends wc{h(){return!1}k(){return 0}j(){throw new kc("next on empty iterator");}}const Mc=x({bd:0},"scala.collection.Iterator$$anon$19",{bd:1,Aa:1,a:1,Ca:1,l:1,m:1});Xb.prototype.$classData=Mc;function Nc(a,b){if(0>b)throw U(new V,""+b);a=a.B(b);if(a.d())throw U(new V,""+b);return a.q()}class Oc extends wc{constructor(a){super();this.Ea=a}h(){return!this.Ea.d()}j(){const a=this.Ea.q();this.Ea=this.Ea.H();return a}}
const Pc=x({ed:0},"scala.collection.StrictOptimizedLinearSeqOps$$anon$1",{ed:1,Aa:1,a:1,Ca:1,l:1,m:1});Oc.prototype.$classData=Pc;x({md:0},"scala.collection.immutable.IndexedSeq$",{md:1,cd:1,a:1,fa:1,S:1,b:1});class Qc extends wc{constructor(a){super();this.na=a}h(){return!this.na.d()}j(){if(this.na.d())return Zb().ka.j();{const a=T(this.na).q();this.na=T(this.na).n();return a}}}const Rc=x({qd:0},"scala.collection.immutable.LazyList$LazyIterator",{qd:1,Aa:1,a:1,Ca:1,l:1,m:1});
Qc.prototype.$classData=Rc;class Sc extends z{constructor(){super();Tc=this}R(a){return a instanceof Uc?a:0===a.k()?W():a instanceof K?Vc(a):Vc(Wc(new K,a))}}const Xc=x({xd:0},"scala.collection.immutable.List$",{xd:1,a:1,cb:1,fa:1,S:1,b:1});Sc.prototype.$classData=Xc;let Tc=void 0;x({Bd:0},"scala.collection.immutable.Vector$",{Bd:1,a:1,cb:1,fa:1,S:1,b:1});
class Yc extends z{R(a){var b=a.k();if(0<=b){var c=p(y(A),[16<b?b:16]);a=a.e();const d=-1+b|0;if(!(0>=b)){let h=0;for(;;){c.g[h]=a.j();if(h===d)break;h=1+h|0}}a=new $c;a.M=c;a.f=b;c=a}else if(c=new $c,b=p(y(A),[16]),c.M=b,c.f=0,a instanceof $c)ad(c,c.f+a.f|0),Ab(Gb(),a.M,c.M,c.f,a.f),c.f=c.f+a.f|0;else for(b=a.e();b.h();)c.Qa(b.j());return c}}const bd=x({Id:0},"scala.collection.mutable.ArrayBuffer$",{Id:1,a:1,cb:1,fa:1,S:1,b:1});Yc.prototype.$classData=bd;let cd=void 0;
function dd(){cd||(cd=new Yc);return cd}class ed extends xc{constructor(){super();this.Hb=dd()}}const fd=x({Od:0},"scala.collection.mutable.IndexedSeq$",{Od:1,cd:1,a:1,fa:1,S:1,b:1});ed.prototype.$classData=fd;let gd=void 0;class hd extends z{R(a){return Wc(new K,a)}}const id=x({Rd:0},"scala.collection.mutable.ListBuffer$",{Rd:1,a:1,cb:1,fa:1,S:1,b:1});hd.prototype.$classData=id;let jd=void 0;x({Ac:0},"java.lang.NumberFormatException",{Ac:1,xb:1,L:1,C:1,F:1,a:1,b:1});
x({Ec:0},"java.lang.StringIndexOutOfBoundsException",{Ec:1,yb:1,L:1,C:1,F:1,a:1,b:1});class kd extends z{ha(){return this.E()}sb(a){return this.da().R(a)}q(){return this.e().j()}B(a){return this.sa(ld(new md,this,a))}H(){if(this.d()){var a=new Hc;M(a,null);throw a;}return this.B(1)}d(){return!this.e().h()}Ra(a,b,c,d){return cb(this,a,b,c,d)}k(){return-1}sa(a){return this.sb(a)}}
class X extends wc{constructor(a){super();this.aa=0;this.$c=a;this.ja=0;this.aa=a.i()}k(){return this.aa}h(){return 0<this.aa}j(){if(this.h()){const a=this.$c.p(this.ja);this.ja=1+this.ja|0;this.aa=-1+this.aa|0;return a}return Zb().ka.j()}qb(a){0<a&&(this.ja=this.ja+a|0,a=this.aa-a|0,this.aa=0>a?0:a);return this}}const nd=x({Zc:0},"scala.collection.IndexedSeqView$IndexedSeqViewIterator",{Zc:1,Aa:1,a:1,Ca:1,l:1,m:1,b:1});X.prototype.$classData=nd;
x({Cd:0},"scala.collection.immutable.VectorBuilder",{Cd:1,a:1,Vb:1,ib:1,Na:1,Ma:1,Rb:1});x({Dd:0},"scala.collection.immutable.VectorIterator",{Dd:1,Aa:1,a:1,Ca:1,l:1,m:1,Rb:1});class od extends Ec{constructor(){super()}}
class Kc extends R{constructor(a){super();this.jb=a;M(this,null)}ta(){return qa(this.jb)}rb(){}wa(){return"JavaScriptException"}Xa(){return 1}Ya(a){if(0===a)a=this.jb;else throw G(),U(new V,""+a);return a}V(){Rb();var a=this.Xa();if(0===a)a=u(this.wa());else{{var b=I(-889275714,u(this.wa()));let c=0;for(;c<a;){const d=this.Ya(c);b=I(b,F(G(),d));c=1+c|0}a=J(b^a)}}return a}}const pd=x({Ud:0},"scala.scalajs.js.JavaScriptException",{Ud:1,L:1,C:1,F:1,a:1,b:1,ya:1,G:1});Kc.prototype.$classData=pd;
class Wa extends od{constructor(a){super();this.xc=a;this.va=""}}const qd=x({vc:0},"java.lang.JSConsoleBasedPrintStream",{vc:1,ge:1,fe:1,$b:1,a:1,Yb:1,kc:1,Zb:1,ic:1});Wa.prototype.$classData=qd;class rd extends kd{da(){gc||(gc=new ec);return gc}u(){return this.ha()+"(\x3cnot computed\x3e)"}E(){return"View"}}class ac extends rd{constructor(a){super();this.jd=a}e(){return pc(this.jd)}}const sd=x({hd:0},"scala.collection.View$$anon$1",{hd:1,Z:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,T:1,b:1});
ac.prototype.$classData=sd;function ld(a,b,c){a.eb=b;a.Kb=c;a.Ga=0<c?c:0;return a}class md extends rd{constructor(){super();this.eb=null;this.Ga=this.Kb=0}e(){return this.eb.e().qb(this.Kb)}k(){var a=this.eb.k();return 0<=a?(a=a-this.Ga|0,0<a?a:0):-1}d(){return!this.e().h()}}const td=x({db:0},"scala.collection.View$Drop",{db:1,Z:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,T:1,b:1});md.prototype.$classData=td;
class ud extends kd{V(){var a=Rb();if(this&&this.$classData&&this.$classData.J.Ba)a:{var b=a.za;a=this.i();switch(a){case 0:a=J(b^0);break a;case 1:a=b;b=this.p(0);a=J(I(a,F(G(),b))^1);break a;default:var c=this.p(0),d=F(G(),c);c=b=I(b,d);var h=this.p(1);h=F(G(),h);var e=h-d|0;for(d=2;d<a;){b=I(b,h);var k=this.p(d);k=F(G(),k);if(e!==(k-h|0)){b=I(b,k);for(d=1+d|0;d<a;)c=this.p(d),b=I(b,F(G(),c)),d=1+d|0;a=J(b^a);break a}h=k;d=1+d|0}a=J(I(I(c,e),h))}}else if(this instanceof Uc){a=a.za;d=0;h=a;b=c=k=
e=0;for(var g=this;!g.d();){var n=g.q();g=g.H();n=F(G(),n);h=I(h,n);switch(e){case 0:b=n;e=1;break;case 1:k=n-c|0;e=2;break;case 2:k!==(n-c|0)&&(e=3)}c=n;d=1+d|0}2===e?(d=k,a=J(I(I(I(a,b),d),c))):a=J(h^d)}else a:if(b=a.za,a=this.e(),a.h())if(c=a.j(),a.h()){d=a.j();e=F(G(),c);c=b=I(b,e);h=F(G(),d);e=h-e|0;for(d=2;a.h();){b=I(b,h);k=a.j();k=F(G(),k);if(e!==(k-h|0)){b=I(b,k);for(d=1+d|0;a.h();)c=a.j(),b=I(b,F(G(),c)),d=1+d|0;a=J(b^d);break a}h=k;d=1+d|0}a=J(I(I(c,e),h))}else a=J(I(b,F(G(),c))^1);else a=
J(b^0);return a}u(){var a=this.ha()+"(";return this.d()?""+a+")":this.Ra(vd(),a,", ",")").y.c}z(a){return Ub(this,a)}d(){return 0===this.z(0)}}class wd extends rd{ca(a){return xd(new yd,this,a)}E(){return"SeqView"}z(a){return Ub(this,a)}d(){return 0===this.z(0)}B(a){return this.ca(a)}}function xd(a,b,c){a.bb=b;ld(a,b,c);return a}
class yd extends md{constructor(){super();this.bb=null}ca(a){return xd(new yd,this,a)}E(){return"SeqView"}z(a){return Ub(this,a)}d(){return 0===this.z(0)}i(){const a=this.bb.i()-this.Ga|0;return 0<a?a:0}p(a){return this.bb.p(a+this.Ga|0)}B(a){return this.ca(a)}}const zd=x({Ib:0},"scala.collection.SeqView$Drop",{Ib:1,db:1,Z:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,T:1,b:1,la:1,x:1});yd.prototype.$classData=zd;function cc(a,b){a.ga=b;return a}
class dc extends wd{constructor(){super();this.ga=null}p(a){return this.ga.p(a)}i(){return this.ga.i()}e(){return this.ga.e()}k(){return this.ga.k()}d(){return this.ga.d()}}const Ad=x({Jb:0},"scala.collection.SeqView$Id",{Jb:1,$a:1,Z:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,T:1,b:1,la:1,x:1});dc.prototype.$classData=Ad;class Bd extends wd{e(){return new X(this)}E(){return"IndexedSeqView"}z(a){const b=this.i();return b===a?0:b<a?-1:1}k(){return this.i()}ca(a){return new Y(this,a)}B(a){return new Y(this,a)}}
class Y extends yd{constructor(a,b){super();xd(this,a,b)}e(){return new X(this)}E(){return"IndexedSeqView"}z(a){const b=this.i();return b===a?0:b<a?-1:1}k(){return this.i()}ca(a){return new Y(this,a)}B(a){return new Y(this,a)}}const Cd=x({Xc:0},"scala.collection.IndexedSeqView$Drop",{Xc:1,Ib:1,db:1,Z:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,T:1,b:1,la:1,x:1,ab:1,$:1});Y.prototype.$classData=Cd;
class Dd extends dc{constructor(a){super();cc(this,a)}e(){return new X(this)}E(){return"IndexedSeqView"}z(a){const b=this.i();return b===a?0:b<a?-1:1}k(){return this.i()}ca(a){return new Y(this,a)}B(a){return new Y(this,a)}}const Ed=x({Yc:0},"scala.collection.IndexedSeqView$Id",{Yc:1,Jb:1,$a:1,Z:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,T:1,b:1,la:1,x:1,ab:1,$:1});Dd.prototype.$classData=Ed;class Fd extends ud{}
class Gd extends Bd{constructor(a,b){super();this.Kd=a;this.hb=b}i(){return this.hb}p(a){if(a<this.hb)return this.Kd.g[a];throw U(new V,a+" is out of bounds (min 0, max "+(-1+this.hb|0)+")");}ha(){return"ArrayBufferView"}}const Hd=x({Jd:0},"scala.collection.mutable.ArrayBufferView",{Jd:1,Wc:1,$a:1,Z:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,T:1,b:1,la:1,x:1,ab:1,$:1});Gd.prototype.$classData=Hd;
x({fd:0},"scala.collection.StringView",{fd:1,Wc:1,$a:1,Z:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,T:1,b:1,la:1,x:1,ab:1,$:1,ya:1,G:1});class Id extends ud{}
function Jd(a,b,c,d,h){b.c=""+b.c+c;if(!a.D)b.c+="\x3cnot computed\x3e";else if(!a.d()){c=T(a).q();b.c=""+b.c+c;c=a;let g;g=T(a).n();if(c!==g&&(!g.D||T(c)!==T(g))&&(c=g,g.D&&!g.d()))for(g=T(g).n();c!==g&&g.D&&!g.d()&&T(c)!==T(g);){b.c=""+b.c+d;var e=T(c).q();b.c=""+b.c+e;c=T(c).n();g=T(g).n();g.D&&!g.d()&&(g=T(g).n())}if(!g.D||g.d()){for(;c!==g;)b.c=""+b.c+d,a=T(c).q(),b.c=""+b.c+a,c=T(c).n();c.D||(b.c=""+b.c+d,b.c+="\x3cnot computed\x3e")}else{e=a;for(a=0;;){var k=e;const n=g;if(k!==n&&T(k)!==T(n))e=
T(e).n(),g=T(g).n(),a=1+a|0;else break}e=c;k=g;(e===k||T(e)===T(k))&&0<a&&(b.c=""+b.c+d,a=T(c).q(),b.c=""+b.c+a,c=T(c).n());for(;;)if(a=c,e=g,a!==e&&T(a)!==T(e))b.c=""+b.c+d,a=T(c).q(),b.c=""+b.c+a,c=T(c).n();else break;b.c=""+b.c+d;b.c+="\x3ccycle\x3e"}}b.c=""+b.c+h;return b}function Cc(a){let b=a,c=a;for(b.d()||(b=T(b).n());c!==b&&!b.d();){b=T(b).n();if(b.d())break;b=T(b).n();if(b===c)break;c=T(c).n()}return a}
function T(a){if(!a.gb&&!a.gb){const b=pc(a.Mb);a.D=!0;a.Mb=null;a.Nb=b;a.gb=!0}return a.Nb}
class S extends Fd{constructor(a){super();this.Nb=null;this.gb=!1;this.Mb=a;this.D=!1}E(){return"LinearSeq"}i(){{var a=this;let b=0;for(;!a.d();)b=1+b|0,a=a.H();a=b}return a}z(a){if(0>a)a=1;else a:for(var b=this,c=0;;){if(c===a){a=b.d()?0:1;break a}if(b.d()){a=-1;break a}c=1+c|0;b=b.H()}return a}p(a){return Nc(this,a)}d(){return T(this)===oc()}k(){return this.D&&this.d()?0:-1}q(){return T(this).q()}e(){return this.D&&this.d()?Zb().ka:new Qc(this)}ha(){return"LazyList"}Ra(a,b,c,d){Cc(this);Jd(this,
a.y,b,c,d);return a}u(){var a=new tc;sc(a);a.c="LazyList";return Jd(this,a,"(",", ",")").c}B(a){return 0>=a?this:this.D&&this.d()?Q().fb:zc(Q(),this,a)}H(){return T(this).n()}da(){return Q()}}const Kd=x({od:0},"scala.collection.immutable.LazyList",{od:1,Ia:1,Y:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,ba:1,X:1,I:1,x:1,G:1,Ka:1,Ja:1,La:1,Ob:1,Fb:1,Gb:1,Pb:1,b:1});S.prototype.$classData=Kd;
x({Ed:0},"scala.collection.immutable.WrappedString",{Ed:1,Ia:1,Y:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,ba:1,X:1,I:1,x:1,G:1,Ka:1,Ja:1,La:1,ld:1,Ba:1,$:1,nd:1,b:1});class Ld extends Id{}
class Uc extends Fd{e(){return new Oc(this)}E(){return"LinearSeq"}p(a){return Nc(this,a)}d(){return this===W()}i(){let a=this,b=0;for(;!a.d();)b=1+b|0,a=a.H();return b}z(a){if(0>a)a=1;else a:for(var b=this,c=0;;){if(c===a){a=b.d()?0:1;break a}if(b.d()){a=-1;break a}c=1+c|0;b=b.H()}return a}ha(){return"List"}B(a){a:for(var b=this;;){if(0>=a||b.d())break a;a=-1+a|0;b=b.H()}return b}da(){Tc||(Tc=new Sc);return Tc}}
x({Ad:0},"scala.collection.immutable.Vector",{Ad:1,Ia:1,Y:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,ba:1,X:1,I:1,x:1,G:1,Ka:1,Ja:1,La:1,ld:1,Ba:1,$:1,nd:1,Qb:1,Fa:1,Da:1,Rb:1,Ha:1,b:1});class Md extends Uc{constructor(a,b){super();this.Lb=a;this.ma=b}q(){return this.Lb}wa(){return"::"}Xa(){return 2}Ya(a){switch(a){case 0:return this.Lb;case 1:return this.ma;default:throw G(),U(new V,""+a);}}H(){return this.ma}}
const Nd=x({kd:0},"scala.collection.immutable.$colon$colon",{kd:1,wd:1,Ia:1,Y:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,ba:1,X:1,I:1,x:1,G:1,Ka:1,Ja:1,La:1,Ob:1,Fb:1,Gb:1,Pb:1,dd:1,Fa:1,Da:1,Qb:1,Ha:1,b:1,ya:1});Md.prototype.$classData=Nd;class Od extends Uc{constructor(){super();Pd=this;W();W()}Ta(){throw new kc("head of empty list");}k(){return 0}e(){return Zb().ka}wa(){return"Nil"}Xa(){return 0}Ya(a){G();throw U(new V,""+a);}H(){throw lc("tail of empty list");}q(){this.Ta()}}
const Qd=x({zd:0},"scala.collection.immutable.Nil$",{zd:1,wd:1,Ia:1,Y:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,ba:1,X:1,I:1,x:1,G:1,Ka:1,Ja:1,La:1,Ob:1,Fb:1,Gb:1,Pb:1,dd:1,Fa:1,Da:1,Qb:1,Ha:1,b:1,ya:1});Od.prototype.$classData=Qd;let Pd=void 0;function W(){Pd||(Pd=new Od);return Pd}function vd(){var a=new Rd;a.y=sc(new tc);return a}
function Sd(a,b){if(b instanceof Rd){var c=a.y;c.c=""+c.c+b.y}else{var d=b.k();if(0!==d)for(c=a.y,0<d&&c.i(),b=b.e();b.h();)d=v(b.j()),d=String.fromCharCode(d),c.c=""+c.c+d}return a}
class Rd extends Id{constructor(){super();this.y=null}E(){return"IndexedSeq"}e(){const a=new Dd(this);return new X(a)}B(a){return this.sa(new Y(this,a))}z(a){const b=this.y.i();return b===a?0:b<a?-1:1}i(){return this.y.i()}k(){return this.y.i()}u(){return this.y.c}da(){gd||(gd=new ed);return gd}Qa(a){{const b=this.y;a=String.fromCharCode(v(a));b.c=""+b.c+a}}sa(a){return Sd(vd(),a)}sb(a){return Sd(vd(),a)}p(a){return new m(65535&(this.y.c.charCodeAt(a)|0))}}
const Td=x({Td:0},"scala.collection.mutable.StringBuilder",{Td:1,Sb:1,Y:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,ba:1,X:1,I:1,x:1,G:1,Wb:1,Ub:1,Xb:1,Tb:1,Va:1,Vb:1,ib:1,Na:1,Ma:1,Nd:1,Ba:1,$:1,Pd:1,tb:1,b:1});Rd.prototype.$classData=Td;function Ud(a){const b=Wc(new K,a);a.N=b.N;a.O=b.O;a.oa=!1}function L(a,b){a.oa&&Ud(a);b=new Md(b,W());0===a.A?a.N=b:a.O.ma=b;a.O=b;a.A=1+a.A|0}function Vc(a){a.oa=!a.d();return a.N}
function Wc(a,b){b=b.e();if(b.h()){a.oa&&Ud(a);var c=new Md(b.j(),W());0===a.A?a.N=c:a.O.ma=c;a.O=c;for(a.A=1+a.A|0;b.h();)c=new Md(b.j(),W()),a.O.ma=c,a.O=c,a.A=1+a.A|0}return a}class K extends Ld{constructor(){super();this.O=this.N=null;this.oa=!1;this.A=0;this.N=W();this.O=null;this.oa=!1;this.A=0}e(){return this.N.e()}p(a){return Nc(this.N,a)}i(){return this.A}k(){return this.A}d(){return 0===this.A}E(){return"ListBuffer"}Qa(a){L(this,a)}da(){jd||(jd=new hd);return jd}}
const Vd=x({Qd:0},"scala.collection.mutable.ListBuffer",{Qd:1,Gd:1,Sb:1,Y:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,ba:1,X:1,I:1,x:1,G:1,Wb:1,Ub:1,Xb:1,Tb:1,Va:1,Ld:1,Na:1,Ma:1,Sd:1,Fa:1,Da:1,Vb:1,ib:1,Ha:1,b:1});K.prototype.$classData=Vd;
function ad(a,b){dd();var c=a.M,d=c.g.length,h=d>>31,e=b>>31;if(!(e===h?(-2147483648^b)<=(-2147483648^d):e<h)){e=new r(d,h);d=a.f;h=e.Q<<1;e=e.Q>>>31|0|e.U<<1;e=(0===e?-2147483632<(-2147483648^h):0<e)?new r(h,e):new r(16,0);h=e.Q;for(e=e.U;;){const k=b>>31,g=h,n=e;if(k===n?(-2147483648^b)>(-2147483648^g):k>n)e=h>>>31|0|e<<1,h<<=1;else break}b=e;if(0===b?-1<(-2147483648^h):0<b){if(2147483647===d)throw H||(H=new jb),a=new Sb,M(a,"Collections can not have more than 2147483647 elements"),a instanceof
Kc?a.jb:a;h=2147483647}b=h;b=p(y(A),[b]);Ab(Gb(),c,b,0,d);c=b}a.M=c}
class $c extends Ld{constructor(){super();this.M=null;this.f=0}e(){return new X(new Gd(this.M,this.f))}B(a){return this.sa(new Y(this,a))}z(a){const b=this.f;return b===a?0:b<a?-1:1}k(){return this.f}p(a){const b=1+a|0;if(0>a)throw U(new V,a+" is out of bounds (min 0, max "+(-1+this.f|0)+")");if(b>this.f)throw U(new V,b+" is out of bounds (min 0, max "+(-1+this.f|0)+")");return this.M.g[a]}i(){return this.f}E(){return"ArrayBuffer"}Qa(a){var b=this.f;ad(this,1+this.f|0);this.f=1+this.f|0;{const c=
1+b|0;if(0>b)throw U(new V,b+" is out of bounds (min 0, max "+(-1+this.f|0)+")");if(c>this.f)throw U(new V,c+" is out of bounds (min 0, max "+(-1+this.f|0)+")");this.M.g[b]=a}}da(){return dd()}}const Wd=x({Hd:0},"scala.collection.mutable.ArrayBuffer",{Hd:1,Gd:1,Sb:1,Y:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,ba:1,X:1,I:1,x:1,G:1,Wb:1,Ub:1,Xb:1,Tb:1,Va:1,Ld:1,Na:1,Ma:1,Sd:1,me:1,Nd:1,Ba:1,$:1,Pd:1,Fa:1,Da:1,Ha:1,b:1});$c.prototype.$classData=Wd;l=new r(0,0);new (y(fa).Sa)([]);pb();
{var Z;N||(N=new Ib);Z=N.Cb.Eb;let a="Hello ScalaJS! Iteration 4.\n";for(;""!==a;){const b=a.indexOf("\n")|0;if(0>b)Z.va=""+Z.va+a,a="";else{var Xd=""+Z.va+a.substring(0,b);"undefined"!==typeof console&&(Z.xc&&console.error?console.error(Xd):console.log(Xd));Z.va="";a=a.substring(1+b|0)}}}D().addEventListener("DOMContentLoaded",()=>{ob()});
}).call(this);
//# sourceMappingURL=scalajs-opt.js.map
