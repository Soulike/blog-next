(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[364],{23364:function(e,t,n){"use strict";n.r(t),n.d(t,{ArticleShower:function(){return g}});var r=n(85893),i=n(67294),o=n(47568),a=n(34051),u=n.n(a),c=n(57),s=n(602);function l(){return f.apply(this,arguments)}function f(){return(f=(0,o.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){return(0,s.setImmediate)(e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var d=n(24716),p=n(41080),m=n(20046),h=n.n(m);function v(e){var t=e.HTMLContent,n=e.loading;return(0,r.jsx)(p.Z,{loading:n,paragraph:{rows:15},children:(0,r.jsx)("article",{className:h().ArticleShower,dangerouslySetInnerHTML:{__html:t}})})}function g(e){var t=e.HTMLContent,n=function(e){var t=(0,i.useContext)(c.K),n=(0,i.useState)(!0),r=n[0],a=n[1],s=(0,i.useState)(null),f=s[0],d=s[1];return(0,i.useEffect)((function(){if(a(!0),d(null),"string"===typeof e){var n=function(){var n=(0,o.Z)(u().mark((function n(){var r,i,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(r=document.createElement("div")).innerHTML=e,n.next=4,t;case 4:return i=n.sent,a=Array.from(r.querySelectorAll("pre")),n.next=8,Promise.all(a.map(function(){var e=(0,o.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.querySelectorAll("code").forEach((function(e){return i.highlightElement(e)})),e.next=4,l();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 8:return n.abrupt("return",r.innerHTML);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n().then((function(e){return d(e)})).finally((function(){return a(!1)}))}}),[t,e]),{loading:r,highlightedHtml:f}}(t),a=n.loading,s=n.highlightedHtml;return(0,d.h)([t]),(0,r.jsx)(v,{HTMLContent:null!==s&&void 0!==s?s:"",loading:a})}},24716:function(e,t,n){"use strict";n.d(t,{h:function(){return i}});var r=n(67294);n(34051);function i(e){var t="mathjax-typeset";(0,r.useEffect)((function(){var e=document.querySelector("#"+t);null!==e&&e.remove(),function(e,t){var n=document.createElement("script");void 0!==t&&Object.keys(t).forEach((function(e){n.setAttribute(e,t[e])})),n.innerHTML=e,document.body.appendChild(n)}("MathJax.typesetPromise()",{id:t})}),[e])}},20046:function(e){e.exports={ArticleShower:"Style_ArticleShower__56iSd"}},99647:function(e,t,n){var r=n(83454);!function(){var t={66:function(){!function(e,t){"use strict";if(!e.setImmediate){var n,i=1,o={},a=!1,u=e.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(e);c=c&&c.setTimeout?c:e,"[object process]"==={}.toString.call(e.process)?n=function(e){r.nextTick((function(){f(e)}))}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",r=function(n){n.source===e&&"string"===typeof n.data&&0===n.data.indexOf(t)&&f(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",r,!1):e.attachEvent("onmessage",r),n=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){f(e.data)},n=function(t){e.port2.postMessage(t)}}():u&&"onreadystatechange"in u.createElement("script")?function(){var e=u.documentElement;n=function(t){var n=u.createElement("script");n.onreadystatechange=function(){f(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():n=function(e){setTimeout(f,0,e)},c.setImmediate=function(e){"function"!==typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];var a={callback:e,args:t};return o[i]=a,n(i),i++},c.clearImmediate=s}function s(e){delete o[e]}function l(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(undefined,n)}}function f(e){if(a)setTimeout(f,0,e);else{var t=o[e];if(t){a=!0;try{l(t)}finally{s(e),a=!1}}}}}("undefined"===typeof self?"undefined"===typeof n.g?this:n.g:self)}};"undefined"!==typeof __nccwpck_require__&&(__nccwpck_require__.ab="//");t[66](),e.exports={}}()},602:function(e,t,n){!function(){var t={372:function(e,t,r){var i="undefined"!==typeof n.g&&n.g||"undefined"!==typeof self&&self||window,o=Function.prototype.apply;function a(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new a(o.call(setTimeout,i,arguments),clearTimeout)},t.setInterval=function(){return new a(o.call(setInterval,i,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},a.prototype.unref=a.prototype.ref=function(){},a.prototype.close=function(){this._clearFn.call(i,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},r(505),t.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof n.g&&n.g.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof n.g&&n.g.clearImmediate||this&&this.clearImmediate},505:function(e){"use strict";e.exports=n(99647)}},r={};function i(e){var n=r[e];if(void 0!==n)return n.exports;var o=r[e]={exports:{}},a=!0;try{t[e].call(o.exports,o,o.exports,i),a=!1}finally{a&&delete r[e]}return o.exports}i.ab="//";var o=i(372);e.exports=o}()}}]);