(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{2047:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return l(7942)}])},9567:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let l=a.default,n={loading:e=>{let{error:t,isLoading:l,pastDelay:r}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n=r({},n,e)),n=r({},n,t);let i=n.loader,s=()=>null!=i?i().then(u):Promise.resolve(u(()=>null));return(n.loadableGenerated&&delete(n=r({},n,n.loadableGenerated)).loadableGenerated,"boolean"!=typeof n.ssr||n.ssr)?l(r({},n,{loader:s})):(delete n.webpack,delete n.modules,o(l,n))},t.noSSR=o;var r=l(5321).Z,n=l(1322).Z,a=(n(l(959)),n(l(6532)));function u(e){return{default:(null==e?void 0:e.default)||e}}function o(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9820:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,l(1322).Z)(l(959));let n=r.default.createContext(null);t.LoadableContext=n},6532:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(5321).Z,n=(0,l(1322).Z)(l(959)),a=l(9820);let u=[],o=[],i=!1;function s(e){let t=e(),l={loading:!0,loaded:null,error:null};return l.promise=t.then(e=>(l.loading=!1,l.loaded=e,e)).catch(e=>{throw l.loading=!1,l.error=e,e}),l}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=r({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let l=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),r=null;function u(){if(!r){let t=new d(e,l);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!i){let e=l.webpack?l.webpack():l.modules;e&&o.push(t=>{for(let l of e)if(-1!==t.indexOf(l))return u()})}function s(e,t){!function(){u();let e=n.default.useContext(a.LoadableContext);e&&Array.isArray(l.modules)&&l.modules.forEach(t=>{e(t)})}();let o=n.default.useSyncExternalStore(r.subscribe,r.getCurrentValue,r.getCurrentValue);return n.default.useImperativeHandle(t,()=>({retry:r.retry}),[]),n.default.useMemo(()=>{var t;return o.loading||o.error?n.default.createElement(l.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:r.retry}):o.loaded?n.default.createElement((t=o.loaded)&&t.default?t.default:t,e):null},[e,o])}return s.preload=()=>u(),s.displayName="LoadableComponent",n.default.forwardRef(s)}(s,e)}function f(e,t){let l=[];for(;e.length;){let r=e.pop();l.push(r(t))}return Promise.all(l).then(()=>{if(e.length)return f(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{f(u).then(e,t)}),c.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let l=()=>(i=!0,t());f(o,e).then(l,l)})},window.__NEXT_PRELOADREADY=c.preloadReady,t.default=c},7942:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return i}});var r=l(1527),n=l(3819),a=l.n(n);let u=Promise.all([l.e(744),l.e(418)]).then(l.bind(l,418)).then(e=>{let{About:t}=e;return t}),o=a()(()=>u,{ssr:!1});function i(){return(0,r.jsx)(o,{})}},3819:function(e,t,l){e.exports=l(9567)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=2047)}),_N_E=e.O()}]);