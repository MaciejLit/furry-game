!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=2)}([function(t,n){t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var o=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[e].concat(i).concat([o]).join("\n")}return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),n.push(a))}},n}},function(t,n,e){var r={},o=function(t){var n;return function(){return void 0===n&&(n=t.apply(this,arguments)),n}}(function(){return window&&document&&document.all&&!window.atob}),i=function(t){var n={};return function(t){if("function"==typeof t)return t();if(void 0===n[t]){var e=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}}(),a=null,s=0,u=[],c=e(6);function f(t,n){for(var e=0;e<t.length;e++){var o=t[e],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(v(o.parts[a],n))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(v(o.parts[a],n));r[o.id]={id:o.id,refs:1,parts:s}}}}function l(t,n){for(var e=[],r={},o=0;o<t.length;o++){var i=t[o],a=n.base?i[0]+n.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):e.push(r[a]={id:a,parts:[s]})}return e}function d(t,n){var e=i(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===t.insertAt)r?r.nextSibling?e.insertBefore(n,r.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),u.push(n);else if("bottom"===t.insertAt)e.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(t.insertInto+" "+t.insertAt.before);e.insertBefore(n,o)}}function p(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=u.indexOf(t);n>=0&&u.splice(n,1)}function h(t){var n=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),b(n,t.attrs),d(t,n),n}function b(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function v(t,n){var e,r,o,i;if(n.transform&&t.css){if(!(i=n.transform(t.css)))return function(){};t.css=i}if(n.singleton){var u=s++;e=a||(a=h(n)),r=y.bind(null,e,u,!1),o=y.bind(null,e,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(t){var n=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(n,t.attrs),d(t,n),n}(n),r=function(t,n,e){var r=e.css,o=e.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=c(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,n),o=function(){p(e),e.href&&URL.revokeObjectURL(e.href)}):(e=h(n),r=function(t,n){var e=n.css,r=n.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,e),o=function(){p(e)});return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=o()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=l(t,n);return f(e,n),function(t){for(var o=[],i=0;i<e.length;i++){var a=e[i];(s=r[a.id]).refs--,o.push(s)}t&&f(l(t,n),n);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete r[s.id]}}}};var g=function(){var t=[];return function(n,e){return t[n]=e,t.filter(Boolean).join("\n")}}();function y(t,n,e,r){var o=e?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(n,o);else{var i=document.createTextNode(o),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(i,a[n]):t.appendChild(i)}}},function(t,n,e){e(3),e(4),e(7),console.log("Działam"),document.addEventListener("DOMContentLoaded",function(){var t=new function(){this.board=document.getElementById("board").querySelectorAll("div"),this.furry=new function(){this.x=0,this.y=0,this.direction="right"},this.coin=new function(){this.x=Math.floor(10*Math.random()),this.y=Math.floor(10*Math.random())},this.score=0,this.index=function(t,n){return t+10*n},this.showFurry=function(){this.board[this.index(this.furry.x,this.furry.y)].classList.add("furry")},this.showCoin=function(){this.board[this.index(this.coin.x,this.coin.y)].classList.add("coin")},this.startGame=function(){setInterval(function(){console.log("Hura z setIntervala")},250)}};t.showCoin(),t.showFurry(),t.startGame()})},function(t,n){alert("działam")},function(t,n,e){var r=e(5);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(r,o);r.locals&&(t.exports=r.locals)},function(t,n,e){(t.exports=e(0)(!1)).push([t.i,"\r\n",""])},function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,r=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var o,i=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,n,e){var r=e(8);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(r,o);r.locals&&(t.exports=r.locals)},function(t,n,e){(t.exports=e(0)(!1)).push([t.i,'* {\n  box-sizing: border-box; }\n\nbody {\n  margin: 0;\n  padding: 0; }\n\nsection#score {\n  width: 100%; }\n\n#board {\n  width: 640px;\n  height: 640px;\n  margin: 1em auto; }\n\n#board > div {\n  border: 1px solid black;\n  float: left;\n  width: 64px;\n  height: 64px; }\n\nsection#score div {\n  width: 10em;\n  height: 3em;\n  text-align: center;\n  padding: 0.5em;\n  background-color: rgba(211, 211, 211, 0.75);\n  border: 1px solid lightgray;\n  border-radius: 1px;\n  box-shadow: 1px 1px 5px 1px lightgray;\n  margin: 1em auto; }\n\n.furry {\n  background-image: url("https://marcin-barylka.github.io/js-furry-solution/images/furry.png");\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.coin {\n  background-image: url("https://marcin-barylka.github.io/js-furry-solution/images/coin.png");\n  background-repeat: no-repeat;\n  background-size: cover; }\n\nsection#over {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  padding: 10px;\n  background-color: rgba(255, 255, 0, 0.75); }\n\nsection#over pre {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  font-size: 10px;\n  font-weight: bolder;\n  color: brown; }\n\n.invisible {\n  display: none; }\n',""])}]);