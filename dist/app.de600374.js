parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"A2T1":[function(require,module,exports) {
function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}var o=function(t){return t>=10?t:"0".concat(t)},i=function(){var t=new Date;return t.getHours()>0&&t.getHours()<11?"morning":t.getHours()>=11&&t.getHours()<17?"noon":t.getHours()>=17&&t.getHours()<21?"evening":"night"},r=function(t){return t[0]+t.slice(1).toLowerCase()},c=function(){function n(e){t(this,n),this.image=document.querySelector("#featured-image"),this.src=e}return e(n,[{key:"setImageSrc",value:function(t){this.src=t,this.image.setAttribute("src",this.src)}},{key:"onLoad",value:function(t){this.image.addEventListener("load",t)}}]),n}(),a=function(){function n(){t(this,n),this.time=document.querySelector("#time"),this.start=this.start.bind(this)}return e(n,[{key:"start",value:function(){var t=new Date,n=t.getHours();this.time.textContent="".concat(o(n),":").concat(o(t.getMinutes()),":").concat(o(t.getSeconds())),setInterval(this.start,1e3)}}]),n}(),u=function(){function n(){t(this,n),this.locationText=document.querySelector("#location"),this.city=""}return e(n,[{key:"setCity",value:function(t){this.city=t}},{key:"updateText",value:function(){this.city?this.locationText.textContent="".concat(this.city.split(" ").map(r).join(" ")):this.locationText.textContent="Namaste!"}}]),n}(),s=function(){var t="https://source.unsplash.com/random/".concat(window.innerWidth,"x").concat(window.innerHeight-4,"?").concat(i()),n=new u,e=new a,o=new c(t);o.onLoad(function(){n.updateText(),e.start()});var r=function(){return o.setImageSrc(t)};navigator.geolocation?navigator.geolocation.getCurrentPosition(function(e){var o=e.coords.latitude,i=e.coords.longitude,c=function(t){var n=t.timeout,e=new AbortController;return setTimeout(function(){return e.abort()},n),e}({timeout:4e3});fetch("https://cors-anywhere.herokuapp.com/https://geocode.xyz/".concat(o,",").concat(i,"?geoit=json"),{signal:c.signal}).then(function(t){return t.json()}).then(function(e){var o=e.city;t+=",".concat(o.toLowerCase()),n.setCity(o),r()}).catch(r)},function(){return r()}):r()};window.addEventListener("load",s);
},{}]},{},["A2T1"], null)
//# sourceMappingURL=https://shlokd.github.io/location-aware-clock/app.de600374.js.map