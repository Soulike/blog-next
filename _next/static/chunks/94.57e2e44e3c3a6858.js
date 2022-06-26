(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[94],{1080:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(4942),a=r(7462),c=r(1002),l=r(7294),i=r(4184),s=r.n(i),o=function(e){var t=e.prefixCls,r=e.className,n=e.width,c=e.style;return l.createElement("h3",{className:s()(t,r),style:(0,a.Z)({width:n},c)})},u=r(4902),f=function(e){var t=function(t){var r=e.width,n=e.rows,a=void 0===n?2:n;return Array.isArray(r)?r[t]:a-1===t?r:void 0},r=e.prefixCls,n=e.className,a=e.style,c=e.rows,i=(0,u.Z)(Array(c)).map((function(e,r){return l.createElement("li",{key:r,style:{width:t(r)}})}));return l.createElement("ul",{className:s()(r,n),style:a},i)},v=r(3124),m=function(e){var t,r,c=e.prefixCls,i=e.className,o=e.style,u=e.size,f=e.shape,v=s()((t={},(0,n.Z)(t,"".concat(c,"-lg"),"large"===u),(0,n.Z)(t,"".concat(c,"-sm"),"small"===u),t)),m=s()((r={},(0,n.Z)(r,"".concat(c,"-circle"),"circle"===f),(0,n.Z)(r,"".concat(c,"-square"),"square"===f),(0,n.Z)(r,"".concat(c,"-round"),"round"===f),r)),d="number"===typeof u?{width:u,height:u,lineHeight:"".concat(u,"px")}:{};return l.createElement("span",{className:s()(c,v,m,i),style:(0,a.Z)((0,a.Z)({},d),o)})},d=r(8423),p=function(e){var t=e.prefixCls,r=e.className,c=e.active,i=(0,l.useContext(v.E_).getPrefixCls)("skeleton",t),o=(0,d.Z)(e,["prefixCls","className"]),u=s()(i,"".concat(i,"-element"),(0,n.Z)({},"".concat(i,"-active"),c),r);return l.createElement("div",{className:u},l.createElement(m,(0,a.Z)({prefixCls:"".concat(i,"-avatar")},o)))};p.defaultProps={size:"default",shape:"circle"};var h=p,x=function(e){var t,r=e.prefixCls,c=e.className,i=e.active,o=e.block,u=void 0!==o&&o,f=(0,l.useContext(v.E_).getPrefixCls)("skeleton",r),p=(0,d.Z)(e,["prefixCls"]),h=s()(f,"".concat(f,"-element"),(t={},(0,n.Z)(t,"".concat(f,"-active"),i),(0,n.Z)(t,"".concat(f,"-block"),u),t),c);return l.createElement("div",{className:h},l.createElement(m,(0,a.Z)({prefixCls:"".concat(f,"-button")},p)))};x.defaultProps={size:"default"};var y=x,Z=function(e){var t,r=e.prefixCls,c=e.className,i=e.active,o=e.block,u=(0,l.useContext(v.E_).getPrefixCls)("skeleton",r),f=(0,d.Z)(e,["prefixCls"]),p=s()(u,"".concat(u,"-element"),(t={},(0,n.Z)(t,"".concat(u,"-active"),i),(0,n.Z)(t,"".concat(u,"-block"),o),t),c);return l.createElement("div",{className:p},l.createElement(m,(0,a.Z)({prefixCls:"".concat(u,"-input")},f)))};Z.defaultProps={size:"default"};var g=Z,C=function(e){var t=e.prefixCls,r=e.className,n=e.style,a=(0,l.useContext(v.E_).getPrefixCls)("skeleton",t),c=s()(a,"".concat(a,"-element"),r);return l.createElement("div",{className:c},l.createElement("div",{className:s()("".concat(a,"-image"),r),style:n},l.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(a,"-image-svg")},l.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:"".concat(a,"-image-path")}))))};function w(e){return e&&"object"===(0,c.Z)(e)?e:{}}var E=function(e){var t=e.prefixCls,r=e.loading,c=e.className,i=e.style,u=e.children,d=e.avatar,p=e.title,h=e.paragraph,x=e.active,y=e.round,Z=l.useContext(v.E_),g=Z.getPrefixCls,C=Z.direction,E=g("skeleton",t);if(r||!("loading"in e)){var b,N,_,k=!!d,A=!!p,q=!!h;if(k){var j=(0,a.Z)((0,a.Z)({prefixCls:"".concat(E,"-avatar")},function(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}(A,q)),w(d));N=l.createElement("div",{className:"".concat(E,"-header")},l.createElement(m,(0,a.Z)({},j)))}if(A||q){var S,P;if(A){var z=(0,a.Z)((0,a.Z)({prefixCls:"".concat(E,"-title")},function(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}(k,q)),w(p));S=l.createElement(o,(0,a.Z)({},z))}if(q){var M=(0,a.Z)((0,a.Z)({prefixCls:"".concat(E,"-paragraph")},function(e,t){var r={};return e&&t||(r.width="61%"),r.rows=!e&&t?3:2,r}(k,A)),w(h));P=l.createElement(f,(0,a.Z)({},M))}_=l.createElement("div",{className:"".concat(E,"-content")},S,P)}var H=s()(E,(b={},(0,n.Z)(b,"".concat(E,"-with-avatar"),k),(0,n.Z)(b,"".concat(E,"-active"),x),(0,n.Z)(b,"".concat(E,"-rtl"),"rtl"===C),(0,n.Z)(b,"".concat(E,"-round"),y),b),c);return l.createElement("div",{className:H,style:i},N,_)}return"undefined"!==typeof u?u:null};E.defaultProps={avatar:!1,title:!0,paragraph:!0},E.Button=y,E.Avatar=h,E.Input=g,E.Image=C;var b=E},9094:function(e,t,r){"use strict";r.r(t),r.d(t,{About:function(){return Z}});var n=r(4051),a=r.n(n),c=r(5893),l=r(9008),i=r.n(l),s=r(7294),o=r(1663),u=r(1949),f=r(1080),v=r(5524),m=r(784),d=r.n(m);function p(e){var t=e.loading,r=e.aboutHtml;return(0,c.jsx)("div",{className:d().About,children:(0,c.jsxs)(f.Z,{loading:t,active:!0,title:!0,paragraph:{rows:20},children:[(0,c.jsx)("header",{className:d().header,children:(0,c.jsx)("h1",{className:d().title,children:"\u5173\u4e8e"})}),(0,c.jsx)(v.q,{HTMLContent:r})]})})}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function x(e,t,r,n,a,c,l){try{var i=e[c](l),s=i.value}catch(o){return void r(o)}i.done?t(s):Promise.resolve(s).then(n,a)}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,c=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(c.push(n.value),!t||c.length!==t);l=!0);}catch(s){i=!0,a=s}finally{try{l||null==r.return||r.return()}finally{if(i)throw a}}return c}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(){var e=(0,s.useState)(""),t=e[0],r=e[1],n=(0,s.useState)(!0),l=n[0],f=n[1],v=(0,u.Z)();return(0,s.useEffect)((function(){var e=function(){var e,t=(e=a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Wx.get();case 2:return t=e.sent,e.abrupt("return",null===t?"":t.about);case 4:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var c=e.apply(t,r);function l(e){x(c,n,a,l,i,"next",e)}function i(e){x(c,n,a,l,i,"throw",e)}l(void 0)}))});return function(){return t.apply(this,arguments)}}();f(!0),Promise.all([v,e()]).then((function(e){var t=y(e,2),n=t[0],a=t[1];r(n.makeHtml(a))})).finally((function(){return f(!1)}))}),[v]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i(),{children:(0,c.jsx)("title",{children:"\u5173\u4e8e - Soulike \u7684\u535a\u5ba2"})}),(0,c.jsx)(p,{aboutHtml:t,loading:l})]})}},5524:function(e,t,r){"use strict";r.d(t,{q:function(){return l}});var n=r(5152),a=r.n(n),c=r.e(684).then(r.bind(r,9684)).then((function(e){return e.ArticleShower})),l=a()((function(){return c}),{ssr:!1})},1949:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(7294),a=r(8465);function c(){return(0,n.useContext)(a.s)}},784:function(e){e.exports={About:"Style_About___8doS",header:"Style_header__pVW3F",title:"Style_title__voJi8"}}}]);