parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"iVJL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={defaultLocale:"en",supportedLocales:["en"],resourceUrl:"./{locale}.json"};exports.default=e;
},{}],"+m5z":[function(require,module,exports) {
"use strict";var e=o(require("./modules/localizationSettings"));function o(e){return e&&e.__esModule?e:{default:e}}var t=window.TrelloPowerUp.iframe({localization:e.default});document.getElementById("update").addEventListener("click",function(e){e.preventDefault();var o=document.getElementById("roomName");t.set("board","shared","roomName",o.value).then(function(){t.closePopup()})}),t.render(function(){t.localizeNode(document.body),t.sizeTo(document.body)});
},{"./modules/localizationSettings":"iVJL"}]},{},["+m5z"], null)
//# sourceMappingURL=settings.37f3c8e0.js.map