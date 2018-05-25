/*
 FlexSearch v0.2.68
 Copyright 2018 Thomas Wilkerling
 Released under the Apache 2.0 Licence
 https://github.com/nextapps-de/flexsearch
*/
'use strict';(function(d,x,p){var t;(t=p.define)&&t.amd?t([],function(){return x}):(t=p.modules)?t[d.toLowerCase()]=x:"undefined"!==typeof module?module.exports=x:p[d]=x})("FlexSearch",function(){function d(a){"string"!==typeof a||v[a]||(a=D[a]);a||(a=y);this.id=a.id||I++;this.init(a);x(this,"index",function(){return this.a});x(this,"length",function(){return Object.keys(this.a).length})}function x(a,b,c){Object.defineProperty(a,b,{get:c})}function p(a){return new RegExp(a,"g")}function t(a,b,c){if("undefined"===
typeof c){for(c=0;c<b.length;c+=2)a=a.replace(b[c],b[c+1]);return a}return a.replace(b,c)}function A(a,b,c,e,m,k,f){if("undefined"===typeof b[c]){var g=m?(9-(f||6))*k+(f||6)*m:k;b[c]=g;g>=f&&(a=a[g+.5|0],a=a[c]||(a[c]=[]),a[a.length]=e)}return g||b[c]}function B(a,b){if(a)for(var c=Object.keys(a),e=0,m=c.length;e<m;e++){var k=c[e],f=a[k];if(f)for(var g=0,h=f.length;g<h;g++)if(f[g]===b){1===h?delete a[k]:f.splice(g,1);break}else"object"===typeof f[g]&&B(f[g],b)}}function E(a){var b=[];if(!a)return b;
for(var c=0,e=0,m=0,k="",f=a.length,g=0;g<f;g++){var h=a[g];"a"===h||"e"===h||"i"===h||"o"===h||"u"===h||"y"===h?c++:e++;" "!==h&&(k+=h);if(" "===h||c>=(8<f?2:1)&&2<=e||2<=c&&e>=(8<f?2:1)||g===f-1)k&&(b[m]&&2<k.length&&m++,b[m]=b[m]?b[m]+k:k," "===h&&m++,k=""),e=c=0}return b}function J(a,b){a=a.length-b.length;return 0>a?1:0<a?-1:0}function K(a,b){a=a.length-b.length;return 0>a?-1:0<a?1:0}function L(a,b,c){var e=[],m=[],k=a.length;if(1<k){a.sort(K);for(var f=u(),g=a[0],h=g.length,z=0;z<h;)f[g[z++]]=
1;for(var q,d=0,n=1;n<k;){var l=!1,p=n===k-1;m=[];g=a[n];h=g.length;for(z=-1;z<h;){var r=f[q=g[++z]];if(r===n){if(p&&(e[d++]=q,b&&d===b))return e;l=!0;f[q]=n+1}else c&&(r=m[r]||(m[r]=[]),r[r.length]=q)}if(!l&&!c)break;n++}if(c&&(b||(b=1E3),d=e.length,h=m.length,d<b&&h))for(n=h-1;0<=n;n--)if(q=m[n])for(z=0;z<q.length;z++)if(e[d++]=q[z],b&&d===b)return e}else k&&(e=a[0],b&&e.length>b&&(e=e.slice(0,b)));return e}function u(a){if(a){for(var b=Array(a),c=0;c<a;c++)b[c]=u();return b}return Object.create(null)}
var y={encode:"icase",mode:"forward",f:!1,cache:!1,async:!1,i:!1,threshold:0,depth:0},D={memory:{encode:"extra",mode:"strict",threshold:7},speed:{encode:"icase",mode:"strict",threshold:7,depth:2},match:{encode:"extra",mode:"full"},score:{encode:"extra",mode:"strict",threshold:5,depth:4},balance:{encode:"balance",mode:"ngram",threshold:6,depth:3},fastest:{encode:"icase",mode:"strict",threshold:9,depth:1}},C=[],I=0,F=p("[ -/]"),G=u(),H=u(),v=function(){for(var a=Object.getOwnPropertyNames({}.__proto__),
b=u(),c=0;c<a.length;c++)b[a[c]]=1;return b}();d.new=function(a){return new this(a)};d.create=function(a){return d.new(a)};d.registerMatcher=function(a){for(var b in a)a.hasOwnProperty(b)&&C.push(p(b),a[b]);return this};d.registerEncoder=function(a,b){v[a]||(w[a]=b);return this};d.registerLanguage=function(a,b){v[a]||(G[a]=b.filter,H[a]=b.stemmer);return this};d.encode=function(a,b){return v[a]?b:w[a].call(w,b)};d.prototype.init=function(a){this.h=[];a||(a=y);var b=a.profile;b=b&&!v[b]?D[b]:u();this.mode=
a.mode||b.mode||this.mode||y.mode;this.threshold=a.threshold||b.threshold||this.threshold||y.threshold;this.depth=a.depth||b.depth||this.depth||y.depth;this.f=a.suggest||this.f||y.f;this.c=(b=a.encode||b.encode)&&!v[b]&&w[b]||("function"===typeof b?b:this.c||!1);(b=a.matcher)&&this.addMatcher(b);if((b=a.filter)&&!v[b]){var c=G[b]||b,e=this.c,m=u();if(c)for(var k=0;k<c.length;k++){var f=e?e.call(w,c[k]):c[k];m[f]=String.fromCharCode(65E3-c.length+k)}this.filter=m}if((b=a.stemmer)&&!v[b]){a=H[b]||b;
b=this.c;c=[];if(a)for(var g in a)a.hasOwnProperty(g)&&(e=b?b.call(w,g):g,c.push(p("(?=.{"+(e.length+3)+",})"+e+"$"),b?b.call(w,a[g]):a[g]));this.stemmer=c}this.g=u(10);this.b=u();this.a=u();u();return this};d.prototype.encode=function(a){a&&C.length&&(a=t(a,C));a&&this.h.length&&(a=t(a,this.h));a&&this.c&&(a=this.c.call(w,a));a&&this.stemmer&&(a=t(a,this.stemmer));return a};d.prototype.addMatcher=function(a){var b=this.h,c;for(c in a)a.hasOwnProperty(c)&&b.push(p(c),a[c]);return this};d.prototype.add=
function(a,b,c){if("string"===typeof b&&b&&(a&&!v[a]||0===a))if(this.a[a]&&!c)this.update(a,b);else{b=this.encode(b);if(!b.length)return this;c=this.mode;b="function"===typeof c?c(b):"ngram"===c?E(b):b.split(F);var e=u();e._ctx=u();for(var m=this.threshold,k=this.depth,f=this.g,g=b.length,h=0;h<g;h++){var d=b[h];if(d){var q=d.length,p=(g-h)/g;switch(c){case "reverse":case "both":for(var n="",l=q-1;1<=l;l--)n=d[l]+n,A(f,e,n,a,(q-l)/q,p,m);case "forward":n="";for(l=0;l<q;l++)n+=d[l],A(f,e,n,a,1,p,m);
break;case "full":for(l=0;l<q;l++)for(var t=(q-l)/q,r=q;r>l;r--)n=d.substring(l,r),A(f,e,n,a,t,p,m);break;default:if(l=A(f,e,d,a,1,p,m),k&&1<g&&l>=m)for(q=e._ctx[d]||(e._ctx[d]=u()),d=this.b[d]||(this.b[d]=u(10)),l=h-k,r=h+k+1,0>l&&(l=0),r>g&&(r=g);l<r;l++)l!==h&&A(d,q,b[l],a,0,10-(l<h?h-l:l-h),m)}}}this.a[a]="1"}return this};d.prototype.update=function(a,b){this.a[a]&&b&&"string"===typeof b&&(this.remove(a),this.add(a,b,!0));return this};d.prototype.remove=function(a){if(this.a[a]&&!v[a]){for(var b=
0;10>b;b++)B(this.g[b],a);this.depth&&B(this.b,a);delete this.a[a]}return this};d.prototype.search=function(a,b,c){var e=[];if(a&&"object"===typeof a){c=a.callback||b;b=a.limit;var m=a.threshold;a=a.query}m=(m||this.threshold||0)|0;"function"===typeof b?(c=b,b=1E3):b||(b=1E3);if(c){var d=this;M(function(){c(d.search(a,b));d=null},1,"search-"+this.id);return null}if(!a||"string"!==typeof a)return e;var f=this.encode(a);if(!f.length)return e;var g=this.mode;f="function"===typeof g?g(f):"ngram"===g?
E(f):f.split(F);g=f.length;var h=!0,p=[],q=u();if(1<g)if(this.depth){var t=!0,n=f[0];q[n]="1"}else f.sort(J);var l;if(!t||(l=this.b)[n])for(var v=t?1:0;v<g;v++){var r=f[v];if(r&&!q[r]){for(var w,x=!1,y=[],A=0,B=9;B>=m;B--)if(w=(t?l[n]:this.g)[B][r])y[A++]=w,x=!0;if(x)p[p.length]=1<A?p.concat.apply([],y):y[0];else if(!this.f){h=!1;break}q[r]="1"}n=r}else h=!1;h&&(e=L(p,b,this.f));return e};d.prototype.reset=function(){this.destroy();return this.init()};d.prototype.destroy=function(){this.filter=this.stemmer=
this.g=this.b=this.a=null;return this};var w=Object.create({icase:function(a){return a.toLowerCase()},balance:function(){var a=[p("[-/]")," ",p("[^a-z0-9 ]"),"",p("\\s\\s+")," "];return function(b){b=t(b.toLowerCase(),a);for(var c="",e="",d="",k=0;k<b.length;k++){var f=b[k];if(f!==e)if(k&&"h"===f){if(d="a"===d||"e"===d||"i"===d||"o"===d||"u"===d||"y"===d,("a"===e||"e"===e||"i"===e||"o"===e||"u"===e||"y"===e)&&d||" "===e)c+=f}else c+=f;d=k===b.length-1?"":b[k+1];e=f}return c}}()}),M=null;return d}(!1),
this);