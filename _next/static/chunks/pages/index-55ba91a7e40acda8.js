(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(62038)}])},90638:function(e,t,n){"use strict";var r=n(96856).Z,u=n(50337).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=a.default,o={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};r(e,Promise)?o.loader=function(){return e}:"function"===typeof e?o.loader=e:"object"===typeof e&&(o=u({},o,e));!1;(o=u({},o,t)).loadableGenerated&&delete(o=u({},o,o.loadableGenerated)).loadableGenerated;if("boolean"===typeof o.ssr&&!o.suspense){if(!o.ssr)return delete o.ssr,i(n,o);delete o.ssr}return n(o)},t.noSSR=i;o(n(67294));var a=o(n(14302));function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},16319:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var u=((r=n(67294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=u},14302:function(e,t,n){"use strict";var r=n(79658).Z,u=n(7222).Z,a=n(50337).Z,o=n(49961).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,l=(i=n(67294))&&i.__esModule?i:{default:i},s=n(16319);var d=n(67294).useSyncExternalStore,f=[],c=[],_=!1;function p(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var h=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return u(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;if(t.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var u=this;this._timeout=setTimeout((function(){u._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a(o(a({},this._state),{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading}),e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function y(e){return function(e,t){var n=function(){if(!i){var t=new h(e,u);i={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return i.promise()},r=function(){n();var e=l.default.useContext(s.LoadableContext);e&&Array.isArray(u.modules)&&u.modules.forEach((function(t){e(t)}))},u=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);u.suspense&&(u.lazy=l.default.lazy(u.loader));var i=null;if(!_){var f=u.webpack?u.webpack():u.modules;f&&c.push((function(e){var t=!0,r=!1,u=void 0;try{for(var a,o=f[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var i=a.value;if(-1!==e.indexOf(i))return n()}}catch(l){r=!0,u=l}finally{try{t||null==o.return||o.return()}finally{if(r)throw u}}}))}var p=u.suspense?function(e,t){return r(),l.default.createElement(u.lazy,o(a({},e),{ref:t}))}:function(e,t){r();var n=d(i.subscribe,i.getCurrentValue,i.getCurrentValue);return l.default.useImperativeHandle(t,(function(){return{retry:i.retry}}),[]),l.default.useMemo((function(){return n.loading||n.error?l.default.createElement(u.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:i.retry}):n.loaded?l.default.createElement(function(e){return e&&e.__esModule?e.default:e}(n.loaded),e):null}),[e,n])};return p.preload=function(){return n()},p.displayName="LoadableComponent",l.default.forwardRef(p)}(p,e)}function v(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return v(e,t)}))}y.preloadAll=function(){return new Promise((function(e,t){v(f).then(e,t)}))},y.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return _=!0,t()};v(c,e).then(n,n)}))},window.__NEXT_PRELOADREADY=y.preloadReady;var m=y;t.default=m},62038:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(85893),u=n(5152),a=n.n(u),o=n(11163),i=n(67294);var l=n.e(468).then(n.bind(n,87468)).then((function(e){return e.Index})),s=a()((function(){return l}),{ssr:!1});function d(){return function(){var e=(0,i.useState)(!1),t=e[0],n=e[1],r=(0,o.useRouter)();return(0,i.useEffect)((function(){r.isReady&&(window.location.pathname===r.pathname?n(!0):(n(!1),r.replace("".concat(window.location.pathname))))}),[r]),t}()?(0,r.jsx)(s,{}):null}},5152:function(e,t,n){e.exports=n(90638)}},function(e){e.O(0,[774,888,179],(function(){return t=48312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);