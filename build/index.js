module.exports=function(r){var e={};function t(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return r[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=r,t.c=e,t.d=function(r,e,n){t.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:n})},t.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,e){if(1&e&&(r=t(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var o in r)t.d(n,o,function(e){return r[e]}.bind(null,o));return n},t.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(e,"a",e),e},t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},t.p="",t(t.s=0)}([function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},o=function(){return function(r,e){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return function(r,e){var t=[],n=!0,o=!1,u=void 0;try{for(var i,c=r[Symbol.iterator]();!(n=(i=c.next()).done)&&(t.push(i.value),!e||t.length!==e);n=!0);}catch(r){o=!0,u=r}finally{try{!n&&c.return&&c.return()}finally{if(o)throw u}}return t}(r,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function u(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function i(r){return r.reduce(function(r,e){return n({},r,u({},e,e))},{})}e.createActions=function(r){return function r(e,t){if("string"==typeof t)return e?e+"/"+t:t;return Object.entries(t).reduce(function(t,i){var c=o(i,2),f=c[0],a=c[1];if(f===a)return n({},t,u({},f,r(e,a)));var l=f;return e&&(l=e+"/"+f),n({},t,u({},f,r(l,a)))},{})}(null,r)},e.keyMirror=i,e.standardActions=function(){return i(["BEGIN","PROGRESS","SUCCESS","FAILURE","CANCEL"])}}]);
//# sourceMappingURL=index.js.map