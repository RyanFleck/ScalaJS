!function(t){var e={};function a(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=e,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(s,n,function(e){return t[e]}.bind(null,n));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=1)}([function(t,e){let a;(function(){"use strict";Object.freeze({assumingES6:!0,productionMode:!0,linkerVersion:"1.0.1",fileLevelThis:this});const t=Math.imul,e=Math.clz32;let s;class n{constructor(t){this.pb=t}toString(){return String.fromCharCode(this.pb)}}function r(t,e){return c(t,e,0)}var c=function t(e,a,s){const n=new e.Sa(a[s]);if(s<a.length-1){e=e.ra,s+=1;const r=n.g;for(let n=0;n<r.length;n++)r[n]=t(e,a,s)}return n};function i(t){switch(typeof t){case"string":return m(Ae);case"number":return b(t)?m(t<<24>>24===t?xe:t<<16>>16===t?Ce:Se):m(je);case"boolean":return m(te);case"undefined":return m(at);default:return null===t?t.hc():t instanceof Ve?m(Ee):t instanceof n?m(ee):t&&t.$classData?m(t.$classData):null}}function o(t){switch(typeof t){case"string":return"java.lang.String";case"number":return b(t)?t<<24>>24===t?"java.lang.Byte":t<<16>>16===t?"java.lang.Short":"java.lang.Integer":"java.lang.Float";case"boolean":return"java.lang.Boolean";case"undefined":return"java.lang.Void";default:return null===t?t.hc():t instanceof Ve?"java.lang.Long":t instanceof n?"java.lang.Character":t&&t.$classData?t.$classData.name:null.W.name}}function l(t){return void 0===t?"undefined":t.toString()}function u(t){switch(typeof t){case"string":return Ie(t);case"number":return t=+t,K(Q(),t);case"boolean":return t?1231:1237;case"undefined":return 0;default:return t&&t.$classData||null===t?t.V():t instanceof n?w(t):f(t)}}let h=0;const d=new WeakMap;function f(t){switch(typeof t){case"string":case"number":case"bigint":case"boolean":case"undefined":return u(t);default:if(null===t)return 0;{let e=d.get(t);return void 0===e&&(h=e=h+1|0,d.set(t,e)),e}}}function b(t){return"number"==typeof t&&(0|t)===t&&1/t!=-1/0}const p=new n(0);function w(t){return null===t?0:t.pb}function m(t){return t.Pa||(t.Pa=new R(t)),t.Pa}function $(t,e,a,s){var n=new y;return n.J={},n.mb=t,n.qa=e,n.Ua=s,n.name=a,n.isPrimitive=!0,n.isInstance=function(){return!1},n}function v(t,e,a,s,n){var r=new y;const c=function(t){for(const e in t)return e}(t);return r.J=a,r.qa="L"+e+";",r.Ua=n||function(t,e){return!!(t&&t.$classData&&t.$classData.w===e&&t.$classData.v.J[c])},r.name=e,r.isInterface=!1,r.isInstance=s||function(t){return!!(t&&t.$classData&&t.$classData.J[c])},r}function g(t){return t.Oa||(t.Oa=(new y).ic(t)),t.Oa}class y{constructor(){this.Sa=void 0,this.v=this.ra=this.J=null,this.w=0,this.mb=null,this.qa="",this.Ua=this.Oa=this.Pa=void 0,this.name="",this.isJSClass=this.isArrayClass=this.isInterface=this.isPrimitive=!1,this.isInstance=void 0}ic(t){const e="longZero"===t.mb?s:t.mb;class a extends F{constructor(t){if(super(),"number"==typeof t){this.g=Array(t);for(let a=0;a<t;a++)this.g[a]=e}else this.g=t}}a.prototype.$classData=this;const n="["+t.qa,r=t.v||t,c=t.w+1;return this.Sa=a,this.J={a:1,Va:1,b:1},this.ra=t,this.v=r,this.w=c,this.name=this.qa=n,this.isArrayClass=!0,this.isInstance=function(t){return r.Ua(t,c)},this}isAssignableFrom(t){return this.isPrimitive||t.isPrimitive?this===t:this.isInstance(t===Ae?"":t!==te&&(t===xe||t===Ce||t===Se||t===je||t===De?0:t===Ee?s:t===ee?p:t===at?void 0:{$classData:t}))}checkCast(){}getSuperclass(){return this.Rc?m(this.Rc):null}getComponentType(){return this.ra?m(this.ra):null}newArrayOfThisClass(t){let e=this;for(let a=0;a<t.length;a++)e=g(e);return r(e,t)}}function x(t,e){return!(!t||!t.$classData||t.$classData.w!==e||t.$classData.v!==A)}function D(t,e){return!(!t||!t.$classData||t.$classData.w!==e||t.$classData.v!==B)}function j(t,e){return!(!t||!t.$classData||t.$classData.w!==e||t.$classData.v!==L)}function S(t,e){return!(!t||!t.$classData||t.$classData.w!==e||t.$classData.v!==q)}function E(t,e){return!(!t||!t.$classData||t.$classData.w!==e||t.$classData.v!==V)}function k(t,e){return!(!t||!t.$classData||t.$classData.w!==e||t.$classData.v!==O)}function C(t,e){return!(!t||!t.$classData||t.$classData.w!==e||t.$classData.v!==z)}function I(t,e){return!(!t||!t.$classData||t.$classData.w!==e||t.$classData.v!==M)}const A=$(!1,"Z","boolean",x),B=$(0,"C","char",D),L=$(0,"B","byte",j),q=$(0,"S","short",S),V=$(0,"I","int",E),O=$("longZero","J","long",k),z=$(0,"F","float",C),M=$(0,"D","double",I);class F{V(){return f(this)}u(){return o(this)+"@"+(+(this.V()>>>0)).toString(16)}toString(){return this.u()}}function P(t,e){if(t=t&&t.$classData){const a=t.w||0;return!(a<e)&&(a>e||!t.v.isPrimitive)}return!1}const J=v({a:0},"java.lang.Object",{a:1},(function(t){return null!==t}),P);F.prototype.$classData=J;class T extends F{sayHello(){Ca("Hello, JavaScript!\n")}}const H=v({Yb:0},"com.rcf.simple.repl.Evaluate$",{Yb:1,a:1});T.prototype.$classData=H;let N=void 0;class R extends F{constructor(t){super(),this.W=t}u(){return(this.W.isInterface?"interface ":this.W.isPrimitive?"":"class ")+this.W.name}}const G=v({qc:0},"java.lang.Class",{qc:1,a:1});function K(t,e){const a=0|e;return a===e&&-1/0!=1/e?a:(t.ub[0]=e,(t=new Ve(0|t.ua[t.wb],0|t.ua[t.vb])).Q^t.U)}R.prototype.$classData=G;class U extends F{constructor(){super(),this.ub=this.ua=this.ia=null,this.Wa=!1,this.wb=this.vb=0,Z=this,this.ia=new ArrayBuffer(8),this.ua=new Int32Array(this.ia,0,2),new Float32Array(this.ia,0,2),this.ub=new Float64Array(this.ia,0,1),this.ua[0]=16909060,this.vb=(this.Wa=1==(0|new Int8Array(this.ia,0,8)[0]))?0:1,this.wb=this.Wa?1:0}}const W=v({tc:0},"java.lang.FloatingPointBits$",{tc:1,a:1});U.prototype.$classData=W;let Z=void 0;function Q(){return Z||(Z=new U),Z}class X extends F{constructor(){super(),this.zb=null,_=this,this.zb=new Ia(!1),new Ia(!0)}}const Y=v({Gc:0},"java.lang.System$Streams$",{Gc:1,a:1});X.prototype.$classData=Y;let _=void 0;function tt(){return _||(_=new X),_}function et(t){return!!(t&&t.$classData&&1===t.$classData.w&&t.$classData.v.J.Bb)}v({Hc:0},"java.lang.System$SystemProperties$",{Hc:1,a:1}),v({Mc:0},"java.lang.Utils$",{Mc:1,a:1}),v({Nc:0},"java.lang.Utils$Cache$",{Nc:1,a:1});const at=v({Bb:0},"java.lang.Void",{Bb:1,a:1},t=>void 0===t);function st(){ct||(ct=new nt);var t=ct;return 0==(67108864&t.P)&&0==(67108864&t.P)&&(0==(33554432&t.P)&&0==(33554432&t.P)&&(t.ob=window,t.P|=33554432),t.nb=t.ob.document,t.P|=67108864),t.nb}v({Oc:0},"java.lang.reflect.Array$",{Oc:1,a:1}),v({Pc:0},"java.util.Arrays$",{Pc:1,a:1});class nt extends F{constructor(){super(),this.nb=this.ob=null,this.P=0}}const rt=v({bc:0},"org.scalajs.dom.package$",{bc:1,a:1});nt.prototype.$classData=rt;let ct=void 0;function it(t,e,a,s,n){const r=e.y;if(0!=(0|a.length)&&(r.c=""+r.c+a),(t=t.e()).h())for(a=t.j(),r.c=""+r.c+a;t.h();)r.c=""+r.c+s,a=t.j(),r.c=""+r.c+a;return 0!=(0|n.length)&&(r.c=""+r.c+n),e}v({$d:0},"scala.runtime.BoxesRunTime$",{$d:1,a:1});class ot extends F{}const lt=v({ce:0},"scala.runtime.ScalaRunTime$",{ce:1,a:1});ot.prototype.$classData=lt;let ut=void 0;function ht(t,e){if(null===e)return 0;if("number"==typeof e){if((e=2147483647<(t=+e)?2147483647:-2147483648>t?-2147483648:0|t)===t)t=e;else{var a=e=zt();if(-0x8000000000000000>t)a.pa=-2147483648,a=0;else if(0x8000000000000000<=t)a.pa=2147483647,a=-1;else{const e=0|t,s=t/4294967296|0;a.pa=0>t&&0!==e?-1+s|0:s,a=e}e=e.pa,zt(),t=(0>e?-(4294967296*+((0!==a?~e:0|-e)>>>0)+ +((0|-a)>>>0)):4294967296*e+ +(a>>>0))===t?a^e:K(Q(),t)}return t}return e instanceof Ve?(t=(e=new Ve((t=null===e?s:e).Q,t.U)).Q,t=(e=e.U)===t>>31?t:t^e):u(e)}class dt extends F{}const ft=v({de:0},"scala.runtime.Statics$",{de:1,a:1});dt.prototype.$classData=ft;let bt=void 0;function pt(){return bt||(bt=new dt),bt}v({ee:0},"scala.runtime.Statics$PFMarker$",{ee:1,a:1});class wt extends F{}const mt=v({Zd:0},"scala.scalajs.runtime.package$",{Zd:1,a:1});wt.prototype.$classData=mt;let $t=void 0;class vt extends F{constructor(t){super(),this.Eb=t}u(){return"DynamicVariable("+this.Eb+")"}}const gt=v({Vc:0},"scala.util.DynamicVariable",{Vc:1,a:1});function yt(e,a){return a=t(-862048943,a),a=t(461845907,a<<15|a>>>17|0),-430675100+t(5,(e^=a)<<13|e>>>19|0)|0}function xt(e){return e=t(-2048144789,e^(e>>>16|0)),(e=t(-1028477387,e^(e>>>13|0)))^(e>>>16|0)}vt.prototype.$classData=gt;class Dt extends F{}function jt(t,e){const a=st().createElement("p");a.textContent=e,t.appendChild(a)}class St extends F{}const Et=v({cc:0},"tutorial.webapp.TutorialApp$",{cc:1,a:1});St.prototype.$classData=Et;let kt=void 0;function Ct(){kt||(kt=new St)}v({pc:0},"java.lang.Character$",{pc:1,a:1,b:1}),v({vc:0},"java.lang.Integer$",{vc:1,a:1,b:1});class It extends F{}function At(t,e){t.Ab=e,t.Ic=null,t.Jc=!0,t.Kc=!0,t.rb()}v({Dc:0},"java.lang.String$",{Dc:1,a:1,b:1});class Bt extends Error{constructor(){super(),this.Ic=this.Ab=null,this.Kc=this.Jc=!1}ta(){return this.Ab}rb(){"[object Error]"!==Object.prototype.toString.call(this)&&void 0!==Error.captureStackTrace&&Error.captureStackTrace(this)}u(){const t=o(this),e=this.ta();return null===e?t:t+": "+e}V(){return F.prototype.V.call(this)}get message(){var t=this.ta();return null===t?"":t}get name(){return o(this)}toString(){return this.u()}}function Lt(t,a){if(0==(-2097152&a))a=""+(4294967296*a+ +(t>>>0));else{var s=(32+e(1e9)|0)-(0!==a?e(a):32+e(t)|0)|0,n=s,r=0==(32&n)?1e9<<n:0;n=0==(32&n)?5e8>>>(31-n|0)|0|0<<n:1e9<<n;var c=t,i=a;for(t=a=0;0<=s&&0!=(-2097152&i);){var o=c,l=i;const e=r,u=n;(l===u?(-2147483648^o)>=(-2147483648^e):(-2147483648^l)>=(-2147483648^u))&&(o=i,l=n,o=(-2147483648^(i=c-r|0))>(-2147483648^c)?(o-l|0)-1|0:o-l|0,c=i,i=o,32>s?a|=1<<s:t|=1<<s),s=-1+s|0,r=r>>>1|0|n<<31,n=o=n>>>1|0}(0===(s=i)?-1147483648<=(-2147483648^c):-2147483648<=(-2147483648^s))&&(r=(n=(s=4294967296*i+ +(c>>>0))/1e9)/4294967296|0,t=(-2147483648^(n=a+(0|n)|0))<(-2147483648^a)?1+(t+r|0)|0:t+r|0,a=n,c=s%1e9|0),a=""+(4294967296*t+ +(a>>>0))+"000000000".substring(0|(s=""+c).length)+s}return a}class qt extends F{constructor(){super(),this.pa=0}}const Vt=v({ec:0},"org.scalajs.linker.runtime.RuntimeLong$",{ec:1,a:1,b:1});qt.prototype.$classData=Vt;let Ot=void 0;function zt(){return Ot||(Ot=new qt),Ot}function Mt(t,e,a,r,c){var o;if((o=!!(t=i(e)).W.isArrayClass)&&(o=!!i(a).W.isAssignableFrom(t.W)),o)if((e=e.g)!==(a=a.g)||0>r||(0+c|0)<r)for(t=0;t<c;t=t+1|0)a[r+t|0]=e[0+t|0];else for(t=c-1|0;0<=t;t=t-1|0)a[r+t|0]=e[0+t|0];else for(t=0,c=0+c|0;t<c;){ut||(ut=new ot);var l=a;o=r,ut||(ut=new ot);var u=e;if(P(u,1)||E(u,1)||I(u,1)||k(u,1)||C(u,1))u=u.g[t];else if(D(u,1))u=new n(u.g[t]);else{if(!(j(u,1)||S(u,1)||x(u,1)||et(u))){if(null===u)throw new Ue;throw new ta(u)}u=u.g[t]}if(P(l,1))l.g[o]=u;else if(E(l,1))l.g[o]=0|u;else if(I(l,1))l.g[o]=+u;else if(k(l,1))l.g[o]=null===u?s:u;else if(C(l,1))l.g[o]=+u;else if(D(l,1))l.g[o]=w(u);else if(j(l,1))l.g[o]=0|u;else if(S(l,1))l.g[o]=0|u;else if(x(l,1))l.g[o]=!!u;else{if(!et(l)){if(null===l)throw new Ue;throw new ta(l)}l.g[o]=void 0}t=1+t|0,r=1+r|0}}class Ft extends F{}const Pt=v({Sc:0},"scala.Array$",{Sc:1,a:1,b:1});Ft.prototype.$classData=Pt;let Jt=void 0;function Tt(){return Jt||(Jt=new Ft),Jt}class Ht extends F{constructor(){super(),this.Cb=null,Rt=this,this.Cb=new vt(tt().zb),tt()}}const Nt=v({Tc:0},"scala.Console$",{Tc:1,a:1,je:1});Ht.prototype.$classData=Nt;let Rt=void 0;v({zd:0},"scala.collection.immutable.List$$anon$1",{zd:1,a:1,I:1});class Gt extends F{u(){return"<function0>"}}class Kt extends F{constructor(t){super(),this.kb=t}u(){return""+this.kb}}const Ut=v({ae:0},"scala.runtime.IntRef",{ae:1,a:1,b:1});Kt.prototype.$classData=Ut;class Wt extends F{constructor(t){super(),this.lb=t}u(){return""+this.lb}}const Zt=v({be:0},"scala.runtime.ObjectRef",{be:1,a:1,b:1});Wt.prototype.$classData=Zt;class Qt extends Dt{constructor(){super(),this.za=0,Yt=this,this.za=Ie("Seq"),Ie("Map"),Ie("Set")}}const Xt=v({Wc:0},"scala.util.hashing.MurmurHash3$",{Wc:1,ke:1,a:1});Qt.prototype.$classData=Xt;let Yt=void 0;function _t(){return Yt||(Yt=new Qt),Yt}const te=v({mc:0},"java.lang.Boolean",{mc:1,a:1,b:1,K:1},t=>"boolean"==typeof t),ee=v({oc:0},"java.lang.Character",{oc:1,a:1,b:1,K:1},t=>t instanceof n);class ae extends Bt{}const se=v({C:0},"java.lang.Exception",{C:1,F:1,a:1,b:1});function ne(t,e){if(0>e)return 1;var a=t.k();if(0<=a)return a===e?0:a<e?-1:1;for(a=0,t=t.e();t.h();){if(a===e)return t.h()?1:0;t.j(),a=1+a|0}return a-e|0}ae.prototype.$classData=se;class re extends F{constructor(){super(),this.ka=null,ie=this,this.ka=new aa}R(t){return t.e()}}const ce=v({bd:0},"scala.collection.Iterator$",{bd:1,a:1,S:1,b:1});re.prototype.$classData=ce;let ie=void 0;function oe(){return ie||(ie=new re),ie}class le extends F{R(t){return function(t,e){return e&&e.$classData&&e.$classData.J.T?e:e&&e.$classData&&e.$classData.J.o?new La(new ve((a=e,()=>a.e()))):(t=Fe(He(),e),Ha(new Na,t));var a}(this,t)}}const ue=v({hd:0},"scala.collection.View$",{hd:1,a:1,S:1,b:1});le.prototype.$classData=ue;let he=void 0;class de extends F{constructor(t,e){super(),this.ud=t,this.vd=e}q(){return this.ud}n(){return this.vd}}const fe=v({td:0},"scala.collection.immutable.LazyList$State$Cons",{td:1,a:1,sd:1,b:1});de.prototype.$classData=fe;class be extends F{Ta(){throw new Ye("head of empty lazy list")}n(){throw Ze("tail of empty lazy list")}q(){this.Ta()}}const pe=v({wd:0},"scala.collection.immutable.LazyList$State$Empty$",{wd:1,a:1,sd:1,b:1});be.prototype.$classData=pe;let we=void 0;function me(){return we||(we=new be),we}function $e(t){return(0,t.Xd)()}class ve extends Gt{constructor(t){super(),this.Xd=t}}const ge=v({Wd:0},"scala.scalajs.runtime.AnonFunction0",{Wd:1,oe:1,a:1,fe:1});ve.prototype.$classData=ge,v({Yd:0},"scala.scalajs.runtime.AnonFunction1",{Yd:1,pe:1,a:1,I:1});class ye extends F{}const xe=v({nc:0},"java.lang.Byte",{nc:1,ea:1,a:1,b:1,K:1},t=>"number"==typeof t&&t<<24>>24===t&&1/t!=-1/0),De=v({rc:0},"java.lang.Double",{rc:1,ea:1,a:1,b:1,K:1},t=>"number"==typeof t),je=v({sc:0},"java.lang.Float",{sc:1,ea:1,a:1,b:1,K:1},t=>"number"==typeof t),Se=v({uc:0},"java.lang.Integer",{uc:1,ea:1,a:1,b:1,K:1},t=>b(t)),Ee=v({zc:0},"java.lang.Long",{zc:1,ea:1,a:1,b:1,K:1},t=>t instanceof Ve);class ke extends ae{}const Ce=v({Cc:0},"java.lang.Short",{Cc:1,ea:1,a:1,b:1,K:1},t=>"number"==typeof t&&t<<16>>16===t&&1/t!=-1/0);function Ie(e){let a=0,s=1,n=(0|e.length)-1|0;for(;0<=n;)a=a+t(65535&(0|e.charCodeAt(n)),s)|0,s=t(31,s),n=-1+n|0;return a}const Ae=v({fc:0},"java.lang.String",{fc:1,a:1,b:1,K:1,tb:1},t=>"string"==typeof t);function Be(t){return t.c="",t}class Le extends F{constructor(){super(),this.c=null}u(){return this.c}i(){return 0|this.c.length}}const qe=v({Ec:0},"java.lang.StringBuilder",{Ec:1,a:1,tb:1,jc:1,b:1});Le.prototype.$classData=qe;class Ve extends It{constructor(t,e){super(),this.Q=t,this.U=e}V(){return this.Q^this.U}u(){zt();var t=this.Q,e=this.U;return e===t>>31?""+t:0>e?"-"+Lt(0|-t,0!==t?~e:0|-e):Lt(t,e)}}const Oe=v({dc:0},"org.scalajs.linker.runtime.RuntimeLong",{dc:1,ea:1,a:1,b:1,K:1});Ve.prototype.$classData=Oe;class ze extends F{e(){return this}d(){return!this.h()}qb(t){{let e=0;for(;e<t&&this.h();)this.j(),e=1+e|0}return this}u(){return"<iterator>"}Ra(t,e,a,s){return it(this,t,e,a,s)}k(){return-1}}class Me extends F{constructor(){super(),this.Hb=null}R(t){return this.Hb.R(t)}}function Fe(t,e){return e instanceof ss?e:0===e.k()?t.fb:new ss(new ve((a=e,()=>function t(e,a){if(a.h()){const e=a.j();return new de(e,new ss(new ve(((e,a)=>()=>t(He(),a))(0,a))))}return me()}(He(),a.e()))));var a}class Pe extends F{constructor(){super(),this.fb=null,Te=this,this.fb=es(new ss(new ve(()=>me())))}R(t){return Fe(this,t)}}const Je=v({qd:0},"scala.collection.immutable.LazyList$",{qd:1,a:1,fa:1,S:1,b:1});Pe.prototype.$classData=Je;let Te=void 0;function He(){return Te||(Te=new Pe),Te}v({Gd:0},"scala.collection.immutable.WrappedString$",{Gd:1,a:1,me:1,le:1,b:1}),v({Nd:0},"scala.collection.mutable.Builder$$anon$1",{Nd:1,a:1,ib:1,Na:1,Ma:1});class Ne extends ye{constructor(){super()}}function Re(t,e){return At(t,e),t}v({kc:0},"java.lang.ArithmeticException",{kc:1,L:1,C:1,F:1,a:1,b:1}),v({xb:0},"java.lang.IllegalArgumentException",{xb:1,L:1,C:1,F:1,a:1,b:1});class Ge extends ke{}const Ke=v({yb:0},"java.lang.IndexOutOfBoundsException",{yb:1,L:1,C:1,F:1,a:1,b:1});Ge.prototype.$classData=Ke,v({xc:0},"java.lang.JSConsoleBasedPrintStream$DummyOutputStream",{xc:1,ac:1,a:1,Zb:1,lc:1,$b:1});class Ue extends ke{constructor(){super(),At(this,null)}}const We=v({Ac:0},"java.lang.NullPointerException",{Ac:1,L:1,C:1,F:1,a:1,b:1});function Ze(t){var e=new Qe;return At(e,t),e}Ue.prototype.$classData=We;class Qe extends ke{}const Xe=v({Lc:0},"java.lang.UnsupportedOperationException",{Lc:1,L:1,C:1,F:1,a:1,b:1});Qe.prototype.$classData=Xe;class Ye extends ke{constructor(t){super(),At(this,t)}}const _e=v({Qc:0},"java.util.NoSuchElementException",{Qc:1,L:1,C:1,F:1,a:1,b:1});Ye.prototype.$classData=_e;class ta extends ke{constructor(t){super(),this.Db=null,this.Za=!1,this.xa=t,At(this,null)}ta(){if(!this.Za&&!this.Za){if(null===this.xa)var t="null";else try{t=l(this.xa)+" (of class "+o(this.xa)+")"}catch(e){if($t||($t=new wt),null===(e instanceof Bt?e:new Ea(e)))throw e;t="an instance of class "+o(this.xa)}this.Db=t,this.Za=!0}return this.Db}}const ea=v({Uc:0},"scala.MatchError",{Uc:1,L:1,C:1,F:1,a:1,b:1});ta.prototype.$classData=ea,v({gc:0},"scala.Tuple2",{gc:1,a:1,ie:1,ya:1,G:1,b:1});class aa extends ze{h(){return!1}k(){return 0}j(){throw new Ye("next on empty iterator")}}const sa=v({cd:0},"scala.collection.Iterator$$anon$19",{cd:1,Aa:1,a:1,Ca:1,l:1,m:1});function na(t,e){if(0>e)throw Re(new Ge,""+e);if((t=t.B(e)).d())throw Re(new Ge,""+e);return t.q()}aa.prototype.$classData=sa;class ra extends ze{constructor(t){super(),this.Ea=t}h(){return!this.Ea.d()}j(){const t=this.Ea.q();return this.Ea=this.Ea.H(),t}}const ca=v({fd:0},"scala.collection.StrictOptimizedLinearSeqOps$$anon$1",{fd:1,Aa:1,a:1,Ca:1,l:1,m:1});ra.prototype.$classData=ca,v({nd:0},"scala.collection.immutable.IndexedSeq$",{nd:1,dd:1,a:1,fa:1,S:1,b:1});class ia extends ze{constructor(t){super(),this.na=t}h(){return!this.na.d()}j(){if(this.na.d())return oe().ka.j();{const t=as(this.na).q();return this.na=as(this.na).n(),t}}}const oa=v({rd:0},"scala.collection.immutable.LazyList$LazyIterator",{rd:1,Aa:1,a:1,Ca:1,l:1,m:1});ia.prototype.$classData=oa;class la extends F{constructor(){super(),ha=this}R(t){return t instanceof cs?t:0===t.k()?ds():vs(t instanceof ys?t:gs(new ys,t))}}const ua=v({yd:0},"scala.collection.immutable.List$",{yd:1,a:1,cb:1,fa:1,S:1,b:1});la.prototype.$classData=ua;let ha=void 0;v({Cd:0},"scala.collection.immutable.Vector$",{Cd:1,a:1,cb:1,fa:1,S:1,b:1});class da extends F{R(t){var e=t.k();if(0<=e){var a=r(g(J),[16<e?e:16]);t=t.e();const s=-1+e|0;if(!(0>=e)){let e=0;for(;a.g[e]=t.j(),e!==s;)e=1+e|0}(t=new js).M=a,t.f=e,a=t}else if(a=new js,e=r(g(J),[16]),a.M=e,a.f=0,t instanceof js)Ds(a,a.f+t.f|0),Mt(Tt(),t.M,a.M,a.f,t.f),a.f=a.f+t.f|0;else for(e=t.e();e.h();)a.Qa(e.j());return a}}const fa=v({Jd:0},"scala.collection.mutable.ArrayBuffer$",{Jd:1,a:1,cb:1,fa:1,S:1,b:1});da.prototype.$classData=fa;let ba=void 0;function pa(){return ba||(ba=new da),ba}class wa extends Me{constructor(){super(),this.Hb=pa()}}const ma=v({Pd:0},"scala.collection.mutable.IndexedSeq$",{Pd:1,dd:1,a:1,fa:1,S:1,b:1});wa.prototype.$classData=ma;let $a=void 0;class va extends F{R(t){return gs(new ys,t)}}const ga=v({Sd:0},"scala.collection.mutable.ListBuffer$",{Sd:1,a:1,cb:1,fa:1,S:1,b:1});va.prototype.$classData=ga;let ya=void 0;v({Bc:0},"java.lang.NumberFormatException",{Bc:1,xb:1,L:1,C:1,F:1,a:1,b:1}),v({Fc:0},"java.lang.StringIndexOutOfBoundsException",{Fc:1,yb:1,L:1,C:1,F:1,a:1,b:1});class xa extends F{ha(){return this.E()}sb(t){return this.da().R(t)}q(){return this.e().j()}B(t){return this.sa(Va(new Oa,this,t))}H(){if(this.d()){var t=new Qe;throw At(t,null),t}return this.B(1)}d(){return!this.e().h()}Ra(t,e,a,s){return it(this,t,e,a,s)}k(){return-1}sa(t){return this.sb(t)}}class Da extends ze{constructor(t){super(),this.aa=0,this.ad=t,this.ja=0,this.aa=t.i()}k(){return this.aa}h(){return 0<this.aa}j(){if(this.h()){const t=this.ad.p(this.ja);return this.ja=1+this.ja|0,this.aa=-1+this.aa|0,t}return oe().ka.j()}qb(t){return 0<t&&(this.ja=this.ja+t|0,t=this.aa-t|0,this.aa=0>t?0:t),this}}const ja=v({$c:0},"scala.collection.IndexedSeqView$IndexedSeqViewIterator",{$c:1,Aa:1,a:1,Ca:1,l:1,m:1,b:1});Da.prototype.$classData=ja,v({Dd:0},"scala.collection.immutable.VectorBuilder",{Dd:1,a:1,Vb:1,ib:1,Na:1,Ma:1,Rb:1}),v({Ed:0},"scala.collection.immutable.VectorIterator",{Ed:1,Aa:1,a:1,Ca:1,l:1,m:1,Rb:1});class Sa extends Ne{constructor(){super()}}class Ea extends ke{constructor(t){super(),this.jb=t,At(this,null)}ta(){return l(this.jb)}rb(){}wa(){return"JavaScriptException"}Xa(){return 1}Ya(t){if(0!==t)throw pt(),Re(new Ge,""+t);return t=this.jb}V(){_t();var t=this.Xa();if(0===t)t=Ie(this.wa());else{var e=yt(-889275714,Ie(this.wa()));let a=0;for(;a<t;){const t=this.Ya(a);e=yt(e,ht(pt(),t)),a=1+a|0}t=xt(e^t)}return t}}const ka=v({Vd:0},"scala.scalajs.js.JavaScriptException",{Vd:1,L:1,C:1,F:1,a:1,b:1,ya:1,G:1});function Ca(t){var e;for(Rt||(Rt=new Ht),e=Rt.Cb.Eb;""!==t;){const s=0|t.indexOf("\n");if(0>s)e.va=""+e.va+t,t="";else{var a=""+e.va+t.substring(0,s);"undefined"!=typeof console&&(e.yc&&console.error?console.error(a):console.log(a)),e.va="",t=t.substring(1+s|0)}}}Ea.prototype.$classData=ka;class Ia extends Sa{constructor(t){super(),this.yc=t,this.va=""}}const Aa=v({wc:0},"java.lang.JSConsoleBasedPrintStream",{wc:1,he:1,ge:1,ac:1,a:1,Zb:1,lc:1,$b:1,jc:1});Ia.prototype.$classData=Aa;class Ba extends xa{da(){return he||(he=new le),he}u(){return this.ha()+"(<not computed>)"}E(){return"View"}}class La extends Ba{constructor(t){super(),this.kd=t}e(){return $e(this.kd)}}const qa=v({jd:0},"scala.collection.View$$anon$1",{jd:1,Z:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,T:1,b:1});function Va(t,e,a){return t.eb=e,t.Kb=a,t.Ga=0<a?a:0,t}La.prototype.$classData=qa;class Oa extends Ba{constructor(){super(),this.eb=null,this.Ga=this.Kb=0}e(){return this.eb.e().qb(this.Kb)}k(){var t=this.eb.k();return 0<=t?0<(t=t-this.Ga|0)?t:0:-1}d(){return!this.e().h()}}const za=v({db:0},"scala.collection.View$Drop",{db:1,Z:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,T:1,b:1});Oa.prototype.$classData=za;class Ma extends xa{V(){var t=_t();if(this&&this.$classData&&this.$classData.J.Ba)t:{var e=t.za;switch(t=this.i()){case 0:t=xt(0^e);break t;case 1:t=e,e=this.p(0),t=xt(1^yt(t,ht(pt(),e)));break t;default:var a=this.p(0),s=ht(pt(),a);a=e=yt(e,s);var n=this.p(1),r=(n=ht(pt(),n))-s|0;for(s=2;s<t;){e=yt(e,n);var c=this.p(s);if(r!==((c=ht(pt(),c))-n|0)){for(e=yt(e,c),s=1+s|0;s<t;)a=this.p(s),e=yt(e,ht(pt(),a)),s=1+s|0;t=xt(e^t);break t}n=c,s=1+s|0}t=xt(yt(yt(a,r),n))}}else if(this instanceof cs){s=0,n=t=t.za,e=a=c=r=0;for(var i=this;!i.d();){var o=i.q();switch(i=i.H(),n=yt(n,o=ht(pt(),o)),r){case 0:e=o,r=1;break;case 1:c=o-a|0,r=2;break;case 2:c!==(o-a|0)&&(r=3)}a=o,s=1+s|0}2===r?(s=c,t=xt(yt(yt(yt(t,e),s),a))):t=xt(n^s)}else t:if(e=t.za,t=this.e(),t.h())if(a=t.j(),t.h()){for(s=t.j(),a=e=yt(e,r=ht(pt(),a)),r=(n=ht(pt(),s))-r|0,s=2;t.h();){if(e=yt(e,n),c=t.j(),r!==((c=ht(pt(),c))-n|0)){for(e=yt(e,c),s=1+s|0;t.h();)a=t.j(),e=yt(e,ht(pt(),a)),s=1+s|0;t=xt(e^s);break t}n=c,s=1+s|0}t=xt(yt(yt(a,r),n))}else t=xt(1^yt(e,ht(pt(),a)));else t=xt(0^e);return t}u(){var t=this.ha()+"(";return this.d()?t+")":this.Ra(fs(),t,", ",")").y.c}z(t){return ne(this,t)}d(){return 0===this.z(0)}}class Fa extends Ba{ca(t){return Pa(new Ja,this,t)}E(){return"SeqView"}z(t){return ne(this,t)}d(){return 0===this.z(0)}B(t){return this.ca(t)}}function Pa(t,e,a){return t.bb=e,Va(t,e,a),t}class Ja extends Oa{constructor(){super(),this.bb=null}ca(t){return Pa(new Ja,this,t)}E(){return"SeqView"}z(t){return ne(this,t)}d(){return 0===this.z(0)}i(){const t=this.bb.i()-this.Ga|0;return 0<t?t:0}p(t){return this.bb.p(t+this.Ga|0)}B(t){return this.ca(t)}}const Ta=v({Ib:0},"scala.collection.SeqView$Drop",{Ib:1,db:1,Z:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,T:1,b:1,la:1,x:1});function Ha(t,e){return t.ga=e,t}Ja.prototype.$classData=Ta;class Na extends Fa{constructor(){super(),this.ga=null}p(t){return this.ga.p(t)}i(){return this.ga.i()}e(){return this.ga.e()}k(){return this.ga.k()}d(){return this.ga.d()}}const Ra=v({Jb:0},"scala.collection.SeqView$Id",{Jb:1,$a:1,Z:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,T:1,b:1,la:1,x:1});Na.prototype.$classData=Ra;class Ga extends Fa{e(){return new Da(this)}E(){return"IndexedSeqView"}z(t){const e=this.i();return e===t?0:e<t?-1:1}k(){return this.i()}ca(t){return new Ka(this,t)}B(t){return new Ka(this,t)}}class Ka extends Ja{constructor(t,e){super(),Pa(this,t,e)}e(){return new Da(this)}E(){return"IndexedSeqView"}z(t){const e=this.i();return e===t?0:e<t?-1:1}k(){return this.i()}ca(t){return new Ka(this,t)}B(t){return new Ka(this,t)}}const Ua=v({Yc:0},"scala.collection.IndexedSeqView$Drop",{Yc:1,Ib:1,db:1,Z:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,T:1,b:1,la:1,x:1,ab:1,$:1});Ka.prototype.$classData=Ua;class Wa extends Na{constructor(t){super(),Ha(this,t)}e(){return new Da(this)}E(){return"IndexedSeqView"}z(t){const e=this.i();return e===t?0:e<t?-1:1}k(){return this.i()}ca(t){return new Ka(this,t)}B(t){return new Ka(this,t)}}const Za=v({Zc:0},"scala.collection.IndexedSeqView$Id",{Zc:1,Jb:1,$a:1,Z:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,T:1,b:1,la:1,x:1,ab:1,$:1});Wa.prototype.$classData=Za;class Qa extends Ma{}class Xa extends Ga{constructor(t,e){super(),this.Ld=t,this.hb=e}i(){return this.hb}p(t){if(t<this.hb)return this.Ld.g[t];throw Re(new Ge,t+" is out of bounds (min 0, max "+(-1+this.hb|0)+")")}ha(){return"ArrayBufferView"}}const Ya=v({Kd:0},"scala.collection.mutable.ArrayBufferView",{Kd:1,Xc:1,$a:1,Z:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,T:1,b:1,la:1,x:1,ab:1,$:1});Xa.prototype.$classData=Ya,v({gd:0},"scala.collection.StringView",{gd:1,Xc:1,$a:1,Z:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,T:1,b:1,la:1,x:1,ab:1,$:1,ya:1,G:1});class _a extends Ma{}function ts(t,e,a,s,n){if(e.c=""+e.c+a,t.D){if(!t.d()){let n;if(a=as(t).q(),e.c=""+e.c+a,a=t,n=as(t).n(),a!==n&&(!n.D||as(a)!==as(n))&&(a=n,n.D&&!n.d()))for(n=as(n).n();a!==n&&n.D&&!n.d()&&as(a)!==as(n);){e.c=""+e.c+s;var r=as(a).q();e.c=""+e.c+r,a=as(a).n(),n=as(n).n(),n.D&&!n.d()&&(n=as(n).n())}if(!n.D||n.d()){for(;a!==n;)e.c=""+e.c+s,t=as(a).q(),e.c=""+e.c+t,a=as(a).n();a.D||(e.c=""+e.c+s,e.c+="<not computed>")}else{for(r=t,t=0;;){var c=r;const e=n;if(c===e||as(c)===as(e))break;r=as(r).n(),n=as(n).n(),t=1+t|0}for(((r=a)===(c=n)||as(r)===as(c))&&0<t&&(e.c=""+e.c+s,t=as(a).q(),e.c=""+e.c+t,a=as(a).n());(t=a)!==(r=n)&&as(t)!==as(r);)e.c=""+e.c+s,t=as(a).q(),e.c=""+e.c+t,a=as(a).n();e.c=""+e.c+s,e.c+="<cycle>"}}}else e.c+="<not computed>";return e.c=""+e.c+n,e}function es(t){let e=t,a=t;for(e.d()||(e=as(e).n());a!==e&&!e.d()&&(e=as(e).n(),!e.d())&&(e=as(e).n(),e!==a);)a=as(a).n();return t}function as(t){if(!t.gb&&!t.gb){const e=$e(t.Mb);t.D=!0,t.Mb=null,t.Nb=e,t.gb=!0}return t.Nb}class ss extends Qa{constructor(t){super(),this.Nb=null,this.gb=!1,this.Mb=t,this.D=!1}E(){return"LinearSeq"}i(){{var t=this;let e=0;for(;!t.d();)e=1+e|0,t=t.H();t=e}return t}z(t){if(0>t)t=1;else t:for(var e=this,a=0;;){if(a===t){t=e.d()?0:1;break t}if(e.d()){t=-1;break t}a=1+a|0,e=e.H()}return t}p(t){return na(this,t)}d(){return as(this)===me()}k(){return this.D&&this.d()?0:-1}q(){return as(this).q()}e(){return this.D&&this.d()?oe().ka:new ia(this)}ha(){return"LazyList"}Ra(t,e,a,s){return es(this),ts(this,t.y,e,a,s),t}u(){var t=new Le;return Be(t),t.c="LazyList",ts(this,t,"(",", ",")").c}B(t){return 0>=t?this:this.D&&this.d()?He().fb:(He(),e=t,new ss(new ve((a=new Wt(this),s=new Kt(e),()=>{let t=a.lb,e=s.kb;for(;0<e&&!t.d();)t=as(t).n(),a.lb=t,e=-1+e|0,s.kb=e;return as(t)}))));var e,a,s}H(){return as(this).n()}da(){return He()}}const ns=v({pd:0},"scala.collection.immutable.LazyList",{pd:1,Ia:1,Y:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,ba:1,X:1,I:1,x:1,G:1,Ka:1,Ja:1,La:1,Ob:1,Fb:1,Gb:1,Pb:1,b:1});ss.prototype.$classData=ns,v({Fd:0},"scala.collection.immutable.WrappedString",{Fd:1,Ia:1,Y:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,ba:1,X:1,I:1,x:1,G:1,Ka:1,Ja:1,La:1,md:1,Ba:1,$:1,od:1,b:1});class rs extends _a{}class cs extends Qa{e(){return new ra(this)}E(){return"LinearSeq"}p(t){return na(this,t)}d(){return this===ds()}i(){let t=this,e=0;for(;!t.d();)e=1+e|0,t=t.H();return e}z(t){if(0>t)t=1;else t:for(var e=this,a=0;;){if(a===t){t=e.d()?0:1;break t}if(e.d()){t=-1;break t}a=1+a|0,e=e.H()}return t}ha(){return"List"}B(t){t:for(var e=this;!(0>=t||e.d());)t=-1+t|0,e=e.H();return e}da(){return ha||(ha=new la),ha}}v({Bd:0},"scala.collection.immutable.Vector",{Bd:1,Ia:1,Y:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,ba:1,X:1,I:1,x:1,G:1,Ka:1,Ja:1,La:1,md:1,Ba:1,$:1,od:1,Qb:1,Fa:1,Da:1,Rb:1,Ha:1,b:1});class is extends cs{constructor(t,e){super(),this.Lb=t,this.ma=e}q(){return this.Lb}wa(){return"::"}Xa(){return 2}Ya(t){switch(t){case 0:return this.Lb;case 1:return this.ma;default:throw pt(),Re(new Ge,""+t)}}H(){return this.ma}}const os=v({ld:0},"scala.collection.immutable.$colon$colon",{ld:1,xd:1,Ia:1,Y:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,ba:1,X:1,I:1,x:1,G:1,Ka:1,Ja:1,La:1,Ob:1,Fb:1,Gb:1,Pb:1,ed:1,Fa:1,Da:1,Qb:1,Ha:1,b:1,ya:1});is.prototype.$classData=os;class ls extends cs{constructor(){super(),hs=this,ds(),ds()}Ta(){throw new Ye("head of empty list")}k(){return 0}e(){return oe().ka}wa(){return"Nil"}Xa(){return 0}Ya(t){throw pt(),Re(new Ge,""+t)}H(){throw Ze("tail of empty list")}q(){this.Ta()}}const us=v({Ad:0},"scala.collection.immutable.Nil$",{Ad:1,xd:1,Ia:1,Y:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,ba:1,X:1,I:1,x:1,G:1,Ka:1,Ja:1,La:1,Ob:1,Fb:1,Gb:1,Pb:1,ed:1,Fa:1,Da:1,Qb:1,Ha:1,b:1,ya:1});ls.prototype.$classData=us;let hs=void 0;function ds(){return hs||(hs=new ls),hs}function fs(){var t=new ps;return t.y=Be(new Le),t}function bs(t,e){if(e instanceof ps){var a=t.y;a.c=""+a.c+e.y}else{var s=e.k();if(0!==s)for(a=t.y,0<s&&a.i(),e=e.e();e.h();)s=w(e.j()),s=String.fromCharCode(s),a.c=""+a.c+s}return t}class ps extends _a{constructor(){super(),this.y=null}E(){return"IndexedSeq"}e(){const t=new Wa(this);return new Da(t)}B(t){return this.sa(new Ka(this,t))}z(t){const e=this.y.i();return e===t?0:e<t?-1:1}i(){return this.y.i()}k(){return this.y.i()}u(){return this.y.c}da(){return $a||($a=new wa),$a}Qa(t){{const e=this.y;t=String.fromCharCode(w(t)),e.c=""+e.c+t}}sa(t){return bs(fs(),t)}sb(t){return bs(fs(),t)}p(t){return new n(65535&(0|this.y.c.charCodeAt(t)))}}const ws=v({Ud:0},"scala.collection.mutable.StringBuilder",{Ud:1,Sb:1,Y:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,ba:1,X:1,I:1,x:1,G:1,Wb:1,Ub:1,Xb:1,Tb:1,Va:1,Vb:1,ib:1,Na:1,Ma:1,Od:1,Ba:1,$:1,Qd:1,tb:1,b:1});function ms(t){const e=gs(new ys,t);t.N=e.N,t.O=e.O,t.oa=!1}function $s(t,e){t.oa&&ms(t),e=new is(e,ds()),0===t.A?t.N=e:t.O.ma=e,t.O=e,t.A=1+t.A|0}function vs(t){return t.oa=!t.d(),t.N}function gs(t,e){if((e=e.e()).h()){t.oa&&ms(t);var a=new is(e.j(),ds());for(0===t.A?t.N=a:t.O.ma=a,t.O=a,t.A=1+t.A|0;e.h();)a=new is(e.j(),ds()),t.O.ma=a,t.O=a,t.A=1+t.A|0}return t}ps.prototype.$classData=ws;class ys extends rs{constructor(){super(),this.O=this.N=null,this.oa=!1,this.A=0,this.N=ds(),this.O=null,this.oa=!1,this.A=0}e(){return this.N.e()}p(t){return na(this.N,t)}i(){return this.A}k(){return this.A}d(){return 0===this.A}E(){return"ListBuffer"}Qa(t){$s(this,t)}da(){return ya||(ya=new va),ya}}const xs=v({Rd:0},"scala.collection.mutable.ListBuffer",{Rd:1,Hd:1,Sb:1,Y:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,ba:1,X:1,I:1,x:1,G:1,Wb:1,Ub:1,Xb:1,Tb:1,Va:1,Md:1,Na:1,Ma:1,Td:1,Fa:1,Da:1,Vb:1,ib:1,Ha:1,b:1});function Ds(t,e){pa();var a=t.M,s=a.g.length,n=s>>31,c=e>>31;if(!(c===n?(-2147483648^e)<=(-2147483648^s):c<n)){for(c=new Ve(s,n),s=t.f,n=c.Q<<1,n=(c=(0===(c=c.Q>>>31|0|c.U<<1)?-2147483632<(-2147483648^n):0<c)?new Ve(n,c):new Ve(16,0)).Q,c=c.U;;){const t=e>>31,a=n,s=c;if(!(t===s?(-2147483648^e)>(-2147483648^a):t>s))break;c=n>>>31|0|c<<1,n<<=1}if(0===(e=c)?-1<(-2147483648^n):0<e){if(2147483647===s)throw $t||($t=new wt),At(t=new ae,"Collections can not have more than 2147483647 elements"),t instanceof Ea?t.jb:t;n=2147483647}e=n,e=r(g(J),[e]),Mt(Tt(),a,e,0,s),a=e}t.M=a}ys.prototype.$classData=xs;class js extends rs{constructor(){super(),this.M=null,this.f=0}e(){return new Da(new Xa(this.M,this.f))}B(t){return this.sa(new Ka(this,t))}z(t){const e=this.f;return e===t?0:e<t?-1:1}k(){return this.f}p(t){const e=1+t|0;if(0>t)throw Re(new Ge,t+" is out of bounds (min 0, max "+(-1+this.f|0)+")");if(e>this.f)throw Re(new Ge,e+" is out of bounds (min 0, max "+(-1+this.f|0)+")");return this.M.g[t]}i(){return this.f}E(){return"ArrayBuffer"}Qa(t){var e=this.f;Ds(this,1+this.f|0),this.f=1+this.f|0;{const a=1+e|0;if(0>e)throw Re(new Ge,e+" is out of bounds (min 0, max "+(-1+this.f|0)+")");if(a>this.f)throw Re(new Ge,a+" is out of bounds (min 0, max "+(-1+this.f|0)+")");this.M.g[e]=t}}da(){return pa()}}const Ss=v({Id:0},"scala.collection.mutable.ArrayBuffer",{Id:1,Hd:1,Sb:1,Y:1,r:1,a:1,o:1,l:1,t:1,m:1,s:1,ba:1,X:1,I:1,x:1,G:1,Wb:1,Ub:1,Xb:1,Tb:1,Va:1,Md:1,Na:1,Ma:1,Td:1,ne:1,Od:1,Ba:1,$:1,Qd:1,Fa:1,Da:1,Ha:1,b:1});js.prototype.$classData=Ss,s=new Ve(0,0),N||(N=new T),a=N,new(g(Ae).Sa)([]),Ct(),Ca("Hello ScalaJS! Iteration 4.\n"),st().addEventListener("DOMContentLoaded",()=>{!function(){Ct();var t=new ys;if(null===st().getElementById("scala-webapp")){var e=st().createElement("div");e.id="scala-webapp",st().body.appendChild(e)}for((e=st().createElement("h1")).textContent="ScalaJS Experiments",$s(t,e),(e=st().createElement("p")).textContent="This web-page was generated using Scala, which was compiled to JavaScript with ScalaJS.",$s(t,e),$s(t,e=st().createElement("hr")),(e=st().createElement("h3")).textContent="Directing Text to Evaluation Class",$s(t,e),$s(t,e=st().createElement("hr")),(e=st().createElement("h3")).textContent="Appending Elements to the DOM",$s(t,e),(e=st().createElement("button")).textContent="Add paragraph",e.addEventListener("click",()=>{Ct();{var t=1;const e=st().getElementsByTagName("p"),a=(0|e.length)-1|0;if(!(0>a)){let s=0;for(;;){const n=e[s].textContent;if(0<=(0|n.length)&&"Button clicked"===n.substring(0,14)&&(t=1+t|0),s===a)break;s=1+s|0}}}jt(st().getElementById("append-test"),"Button clicked "+t+(2>t?" time!":" times!"))}),$s(t,e),(e=st().createElement("div")).id="append-test",$s(t,e),$s(t,e=st().createElement("hr")),t=t.N.e();t.h();)e=t.j(),st().getElementById("scala-webapp").appendChild(e);jt(st().getElementById("scala-webapp"),"All elements above generated using ScalaJS")}()})}).call(this)},function(t,e,a){"use strict";a.r(e);var s=a(0);console.log("Webpack'd scripts loaded."),s.ScalaEval.sayHello()}]);