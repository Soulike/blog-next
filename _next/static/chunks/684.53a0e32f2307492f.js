(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[684],{9684:function(e,t,n){"use strict";n.r(t),n.d(t,{ArticleShower:function(){return w}});var r=n(4051),i=n.n(r),o=n(5893),a=n(7294),c=n(9806);var u=n(1743),s=n(602);function f(e,t,n,r,i,o,a){try{var c=e[o](a),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(r,i)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){f(o,r,i,a,c,"next",e)}function c(e){f(o,r,i,a,c,"throw",e)}a(void 0)}))}}function d(){return m.apply(this,arguments)}function m(){return(m=l(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){return(0,s.setImmediate)(e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=n(1080),v=n(3750),h=n.n(v);function y(e){var t=e.HTMLContent,n=e.loading;return(0,o.jsx)(p.Z,{active:!0,loading:n,paragraph:{rows:15},children:(0,o.jsx)("article",{className:h().ArticleShower,dangerouslySetInnerHTML:{__html:t}})})}function g(e,t,n,r,i,o,a){try{var c=e[o](a),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(r,i)}function _(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){g(o,r,i,a,c,"next",e)}function c(e){g(o,r,i,a,c,"throw",e)}a(void 0)}))}}function w(e){var t=(0,a.useState)(document.createElement("div")),n=t[0],r=t[1],s=(0,a.useState)(!0),f=s[0],l=s[1],m=e.HTMLContent,p=(0,a.useContext)(c.K);return(0,a.useEffect)((function(){var e=function(){var e=_(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=document.createElement("div")).innerHTML=m,e.next=4,p;case 4:return n=e.sent,e.next=7,Promise.all(Array.from(t.querySelectorAll("pre")).map(function(){var e=_(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.querySelectorAll("code").forEach((function(e){n.highlightElement(e)})),e.next=3,d();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 7:r(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();l(!0),e().finally((function(){return l(!1)}))}),[m,p]),(0,u.h)([m]),(0,o.jsx)(y,{HTMLContent:n.innerHTML,loading:f})}},1743:function(e,t,n){"use strict";n.d(t,{h:function(){return i}});var r=n(7294);n(4051);function i(e){var t="mathjax-typeset";(0,r.useEffect)((function(){var e=document.querySelector("#"+t);null!==e&&e.remove(),function(e,t){var n=document.createElement("script");void 0!==t&&Object.keys(t).forEach((function(e){n.setAttribute(e,t[e])})),n.innerHTML=e,document.body.appendChild(n)}("MathJax.typesetPromise()",{id:t})}),[e])}},3750:function(e){e.exports={ArticleShower:"Style_ArticleShower__56iSd"}},9647:function(e,t,n){var r=n(3454);!function(){var t={619:function(){!function(e,t){"use strict";if(!e.setImmediate){var n,i=1,o={},a=!1,c=e.document,u=Object.getPrototypeOf&&Object.getPrototypeOf(e);u=u&&u.setTimeout?u:e,"[object process]"==={}.toString.call(e.process)?n=function(e){r.nextTick((function(){l(e)}))}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",r=function(n){n.source===e&&"string"===typeof n.data&&0===n.data.indexOf(t)&&l(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",r,!1):e.attachEvent("onmessage",r),n=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){l(e.data)},n=function(t){e.port2.postMessage(t)}}():c&&"onreadystatechange"in c.createElement("script")?function(){var e=c.documentElement;n=function(t){var n=c.createElement("script");n.onreadystatechange=function(){l(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():n=function(e){setTimeout(l,0,e)},u.setImmediate=function(e){"function"!==typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];var a={callback:e,args:t};return o[i]=a,n(i),i++},u.clearImmediate=s}function s(e){delete o[e]}function f(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(undefined,n)}}function l(e){if(a)setTimeout(l,0,e);else{var t=o[e];if(t){a=!0;try{f(t)}finally{s(e),a=!1}}}}}("undefined"===typeof self?"undefined"===typeof n.g?this:n.g:self)}};"undefined"!==typeof __nccwpck_require__&&(__nccwpck_require__.ab="//");t[619](),e.exports={}}()},602:function(e,t,n){!function(){var t={832:function(e,t,r){var i="undefined"!==typeof n.g&&n.g||"undefined"!==typeof self&&self||window,o=Function.prototype.apply;function a(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new a(o.call(setTimeout,i,arguments),clearTimeout)},t.setInterval=function(){return new a(o.call(setInterval,i,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},a.prototype.unref=a.prototype.ref=function(){},a.prototype.close=function(){this._clearFn.call(i,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},r(505),t.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof n.g&&n.g.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof n.g&&n.g.clearImmediate||this&&this.clearImmediate},505:function(e){"use strict";e.exports=n(9647)}},r={};function i(e){var n=r[e];if(void 0!==n)return n.exports;var o=r[e]={exports:{}},a=!0;try{t[e].call(o.exports,o,o.exports,i),a=!1}finally{a&&delete r[e]}return o.exports}i.ab="//";var o=i(832);e.exports=o}()}}]);