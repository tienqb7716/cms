/*! For license information please see view.js.LICENSE.txt */
!function(){var e={8174:function(e,t){"use strict";t.parse=function(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var i={},o=t||{},s=e.split(n),c=o.decode||r,u=0;u<s.length;u++){var p=s[u],f=p.indexOf("=");if(!(f<0)){var l=p.substr(0,f).trim(),d=p.substr(++f,p.length).trim();'"'==d[0]&&(d=d.slice(1,-1)),null==i[l]&&(i[l]=a(d,c))}}return i},t.serialize=function(e,t,r){var n=r||{},a=n.encode||i;if("function"!=typeof a)throw new TypeError("option encode is invalid");if(!o.test(e))throw new TypeError("argument name is invalid");var s=a(t);if(s&&!o.test(s))throw new TypeError("argument val is invalid");var c=e+"="+s;if(null!=n.maxAge){var u=n.maxAge-0;if(isNaN(u)||!isFinite(u))throw new TypeError("option maxAge is invalid");c+="; Max-Age="+Math.floor(u)}if(n.domain){if(!o.test(n.domain))throw new TypeError("option domain is invalid");c+="; Domain="+n.domain}if(n.path){if(!o.test(n.path))throw new TypeError("option path is invalid");c+="; Path="+n.path}if(n.expires){if("function"!=typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");c+="; Expires="+n.expires.toUTCString()}n.httpOnly&&(c+="; HttpOnly");n.secure&&(c+="; Secure");if(n.sameSite){switch("string"==typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"strict":c+="; SameSite=Strict";break;case"none":c+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return c};var r=decodeURIComponent,i=encodeURIComponent,n=/; */,o=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function a(e,t){try{return t(e)}catch(t){return e}}},12704:function(e,t,r){"use strict";r.d(t,{B$:function(){return i},fh:function(){return n}});const i="jp-visit-counter",n=15552e3},84178:function(e,t,r){"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&window.Jetpack_Block_Assets_Base_Url.url&&(r.p=window.Jetpack_Block_Assets_Base_Url.url)}},t={};function r(i){var n=t[i];if(void 0!==n)return n.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,r),o.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../"}(),function(){"use strict";r(84178)}(),function(){"use strict";var e=r(8174),t=r(12704);window&&window.addEventListener("load",(function(){var r;0!==Array.from(document.querySelectorAll(".wp-block-jetpack-repeat-visitor")).length&&(r=+(e.parse(document.cookie)[t.B$]||0)+1,document.cookie=e.serialize(t.B$,r,{path:window.location.pathname,maxAge:t.fh}))}))}()}();