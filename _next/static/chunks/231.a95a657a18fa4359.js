(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[231],{2231:function(e,t,n){"use strict";n.r(t),n.d(t,{ArticleShower:function(){return d}});var i=n(1527),o=n(959),r=n(5472);async function a(){return new Promise(e=>(0,r.setImmediate)(e))}var c=n(3107),s=n(462),l=n(4039),u=n.n(l);function f(e){let{HTMLContent:t,loading:n}=e;return(0,i.jsx)(s.Z,{loading:n,paragraph:{rows:15},children:(0,i.jsx)("article",{className:u().ArticleShower,dangerouslySetInnerHTML:{__html:t}})})}function d(e){let{HTMLContent:t}=e,{loading:r,highlightedHtml:s}=function(e){let[t,i]=(0,o.useState)(!0),[r,c]=(0,o.useState)(null),s=(0,o.useCallback)(async()=>{let t=document.createElement("div");t.innerHTML=e??"";let{hljs:i}=await Promise.all([n.e(152),n.e(572)]).then(n.bind(n,1572)),o=Array.from(t.querySelectorAll("pre"));return await Promise.all(o.map(async e=>{let t=e.querySelectorAll("code");t.forEach(e=>i.highlightElement(e)),await a()})),t.innerHTML},[e]);return(0,o.useEffect)(()=>{i(!0),c(null),"string"==typeof e&&s().then(e=>c(e)).finally(()=>i(!1))},[s,e]),{loading:t,highlightedHtml:r}}(t);return(0,c.h)([t]),(0,i.jsx)(f,{HTMLContent:s??"",loading:r})}},3107:function(e,t,n){"use strict";n.d(t,{h:function(){return o}});var i=n(959);function o(e){let t="mathjax-typeset";(0,i.useEffect)(()=>{let e=document.querySelector("#"+t);null!==e&&e.remove(),function(e,t){let n=document.createElement("script");void 0!==t&&Object.keys(t).forEach(e=>{n.setAttribute(e,t[e])}),n.innerHTML=e,document.body.appendChild(n)}("MathJax.typesetPromise()",{id:t})},[e])}},4039:function(e){e.exports={ArticleShower:"Style_ArticleShower__56iSd"}},5213:function(e,t,n){var i=n(9303);"undefined"!=typeof __nccwpck_require__&&(__nccwpck_require__.ab="//"),({189:function(){!function(e,t){"use strict";if(!e.setImmediate){var n,o,r,a,c,s=1,l={},u=!1,f=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);(d=d&&d.setTimeout?d:e,"[object process]"===({}).toString.call(e.process))?c=function(e){i.nextTick(function(){p(e)})}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?(n="setImmediate$"+Math.random()+"$",o=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(n)&&p(+t.data.slice(n.length))},e.addEventListener?e.addEventListener("message",o,!1):e.attachEvent("onmessage",o),c=function(t){e.postMessage(n+t,"*")}):e.MessageChannel?((r=new MessageChannel).port1.onmessage=function(e){p(e.data)},c=function(e){r.port2.postMessage(e)}):f&&"onreadystatechange"in f.createElement("script")?(a=f.documentElement,c=function(e){var t=f.createElement("script");t.onreadystatechange=function(){p(e),t.onreadystatechange=null,a.removeChild(t),t=null},a.appendChild(t)}):c=function(e){setTimeout(p,0,e)},d.setImmediate=function(e){"function"!=typeof e&&(e=Function(""+e));for(var t=Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var i={callback:e,args:t};return l[s]=i,c(s),s++},d.clearImmediate=m}function m(e){delete l[e]}function p(e){if(u)setTimeout(p,0,e);else{var t=l[e];if(t){u=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{m(e),u=!1}}}}}("undefined"==typeof self?void 0===n.g?this:n.g:self)}})[189](),e.exports={}},5472:function(e,t,n){!function(){var t={845:function(e,t,i){var o=void 0!==n.g&&n.g||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;function a(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new a(r.call(setTimeout,o,arguments),clearTimeout)},t.setInterval=function(){return new a(r.call(setInterval,o,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},a.prototype.unref=a.prototype.ref=function(){},a.prototype.close=function(){this._clearFn.call(o,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},i(505),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==n.g&&n.g.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==n.g&&n.g.clearImmediate||this&&this.clearImmediate},505:function(e){"use strict";e.exports=n(5213)}},i={};function o(e){var n=i[e];if(void 0!==n)return n.exports;var r=i[e]={exports:{}},a=!0;try{t[e].call(r.exports,r,r.exports,o),a=!1}finally{a&&delete i[e]}return r.exports}o.ab="//";var r=o(845);e.exports=r}()}}]);