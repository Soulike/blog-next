(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[518],{56518:function(e,n,t){"use strict";t.r(n),t.d(n,{Article:function(){return Q}});var o=t(85893),i=t(9008),r=t.n(i),c=t(11163),a=t(67294),l=t(4101);var s=t(37273);function u(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var f=function(){function e(n,t,o,i,r,c,a,l){u(this,e),this.id=n,this.title=t,this.content=o,this.category=i,this.publicationTime=r,this.modificationTime=c,this.pageViews=a,this.isVisible=l}return e.from=function(n){return new e(n.id,n.title,n.content,n.category,n.publicationTime,n.modificationTime,n.pageViews,n.isVisible)},e}(),d=function(){function e(n,t){u(this,e),this.id=n,this.name=t}return e.from=function(n){return new e(n.id,n.name)},e}(),m=t(24019),p=t(40666),h=t(41080),v=t(9982),y=t(87462),g=t(97685),x=t(4942),b=t(89739),Z=t(8751),E=t(4340),w=t(18429),C=t(97937),N=t(21640),S=t(11475),j=t(78860),_=t(45605),T=t(94184),k=t.n(T),M=t(62874),I=t(53124);var O=t(96159),A=t(15671),D=t(43144),H=t(32531),L=t(73568),P=function(e){(0,H.Z)(t,e);var n=(0,L.Z)(t);function t(){var e;return(0,A.Z)(this,t),(e=n.apply(this,arguments)).state={error:void 0,info:{componentStack:""}},e}return(0,D.Z)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({error:e,info:n})}},{key:"render",value:function(){var e=this.props,n=e.message,t=e.description,o=e.children,i=this.state,r=i.error,c=i.info,l=c&&c.componentStack?c.componentStack:null,s="undefined"===typeof n?(r||"").toString():n,u="undefined"===typeof t?l:t;return r?a.createElement(Y,{type:"error",message:s,description:a.createElement("pre",null,u)}):o}}]),t}(a.Component),V=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]])}return t},q={success:b.Z,info:j.Z,error:E.Z,warning:N.Z},R={success:Z.Z,info:_.Z,error:w.Z,warning:S.Z},W=function(e){var n=e.description,t=e.icon,o=e.prefixCls,i=e.type,r=(n?R:q)[i]||null;return t?(0,O.wm)(t,a.createElement("span",{className:"".concat(o,"-icon")},t),(function(){return{className:k()("".concat(o,"-icon"),(0,x.Z)({},t.props.className,t.props.className))}})):a.createElement(r,{className:"".concat(o,"-icon")})},B=function(e){var n=e.isClosable,t=e.closeText,o=e.prefixCls,i=e.closeIcon,r=e.handleClose;return n?a.createElement("button",{type:"button",onClick:r,className:"".concat(o,"-close-icon"),tabIndex:0},t?a.createElement("span",{className:"".concat(o,"-close-text")},t):i):null},F=function(e){var n,t=e.description,o=e.prefixCls,i=e.message,r=e.banner,c=e.className,l=void 0===c?"":c,s=e.style,u=e.onMouseEnter,f=e.onMouseLeave,d=e.onClick,m=e.afterClose,p=e.showIcon,h=e.closable,v=e.closeText,b=e.closeIcon,Z=void 0===b?a.createElement(C.Z,null):b,E=e.action,w=V(e,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),N=a.useState(!1),S=(0,g.Z)(N,2),j=S[0],_=S[1],T=a.useRef(),O=a.useContext(I.E_),A=O.getPrefixCls,D=O.direction,H=A("alert",o),L=function(e){var n;_(!0),null===(n=w.onClose)||void 0===n||n.call(w,e)},P=!!v||h,q=function(){var e=w.type;return void 0!==e?e:r?"warning":"info"}(),R=!(!r||void 0!==p)||p,F=k()(H,"".concat(H,"-").concat(q),(n={},(0,x.Z)(n,"".concat(H,"-with-description"),!!t),(0,x.Z)(n,"".concat(H,"-no-icon"),!R),(0,x.Z)(n,"".concat(H,"-banner"),!!r),(0,x.Z)(n,"".concat(H,"-rtl"),"rtl"===D),n),l),Y=function(e){return Object.keys(e).reduce((function(n,t){return!t.startsWith("data-")&&!t.startsWith("aria-")&&"role"!==t||t.startsWith("data-__")||(n[t]=e[t]),n}),{})}(w);return a.createElement(M.Z,{visible:!j,motionName:"".concat(H,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(e){return{maxHeight:e.offsetHeight}},onLeaveEnd:m},(function(e){var n=e.className,o=e.style;return a.createElement("div",(0,y.Z)({ref:T,"data-show":!j,className:k()(F,n),style:(0,y.Z)((0,y.Z)({},s),o),onMouseEnter:u,onMouseLeave:f,onClick:d,role:"alert"},Y),R?a.createElement(W,{description:t,icon:w.icon,prefixCls:H,type:q}):null,a.createElement("div",{className:"".concat(H,"-content")},i?a.createElement("div",{className:"".concat(H,"-message")},i):null,t?a.createElement("div",{className:"".concat(H,"-description")},t):null),E?a.createElement("div",{className:"".concat(H,"-action")},E):null,a.createElement(B,{isClosable:!!P,closeText:v,prefixCls:H,closeIcon:Z,handleClose:L}))}))};F.ErrorBoundary=P;var Y=F,z=t(22260),G=t(78947),J=t.n(G);function K(e){var n=e.title,t=e.contentHtml,i=e.publicationTime,r=e.modificationTime,c=e.category,a=e.loading,l=new Date(i),s=new Date(r),u=(new Date).getTime()-s.getTime();return(0,o.jsx)("div",{className:J().Article,children:(0,o.jsxs)(h.Z,{loading:a,active:!0,title:!0,paragraph:{rows:20},children:[(0,o.jsxs)("header",{className:J().header,children:[(0,o.jsx)("h1",{className:J().title,children:n}),(0,o.jsxs)("div",{className:J().info,children:[(0,o.jsxs)(v.Z,{color:"purple",children:[(0,o.jsx)(m.Z,{className:J().icon}),(0,o.jsx)("span",{children:"".concat(l.getFullYear(),"-").concat((l.getMonth()+1).toString().padStart(2,"0"),"-").concat(l.getDate().toString().padStart(2,"0"))})]}),(0,o.jsxs)(v.Z,{color:"blue",children:[(0,o.jsx)(p.Z,{className:J().icon}),(0,o.jsx)("span",{children:c?c.name:""})]})]})]}),u>2592e6?(0,o.jsx)(Y,{className:J().alert,type:"warning",banner:!0,message:"\u672c\u6587\u6700\u540e\u7f16\u8f91\u4e8e ".concat(Math.floor(u/864e5)," \u5929\u524d\uff0c\u53ef\u80fd\u5df2\u4e0d\u5177\u6709\u65f6\u6548\u6027\uff0c\u8bf7\u8c28\u614e\u9605\u8bfb")}):null,(0,o.jsx)(z.q,{HTMLContent:t})]})})}function Q(){var e=(0,c.useRouter)(),n=(0,a.useMemo)((function(){return new f(0,"","",0,"","",0,!0)}),[]),t=(0,a.useMemo)((function(){return new d(0,"")}),[]),i=function(e){var n=(0,a.useState)(!0),t=n[0],o=n[1],i=(0,a.useState)(null),r=i[0],c=i[1];return(0,a.useEffect)((function(){c(null),o(!0),"number"===typeof e&&l.d2.getById(e).then((function(e){return c(e)})).finally((function(){return o(!1)}))}),[e]),{loading:t,article:r}}((0,a.useMemo)((function(){if(e.isReady){var n=e.query.id;if("string"===typeof n)return Number.parseInt(n)}}),[e.isReady,e.query])),u=i.loading,m=i.article;(0,a.useEffect)((function(){u||null!==m||e.replace("/404")}),[m,u,e]);var p=(0,s.Z)(null===m||void 0===m?void 0:m.content),h=p.loading,v=p.html,y=function(e){var n=(0,a.useState)(!0),t=n[0],o=n[1],i=(0,a.useState)(null),r=i[0],c=i[1];return(0,a.useEffect)((function(){c(null),o(!0),"number"===typeof e&&l.WD.getById(e).then((function(e){return c(e)})).finally((function(){return o(!1)}))}),[e]),{loading:t,category:r}}(null===m||void 0===m?void 0:m.category),g=y.loading,x=y.category,b=(0,a.useMemo)((function(){return u||g||h}),[u,g,h]),Z=(0,a.useMemo)((function(){return null!==m&&void 0!==m?m:n}),[m,n]),E=Z.title,w=Z.publicationTime,C=Z.modificationTime;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r(),{children:b?null:(0,o.jsx)("title",{children:"".concat(E," - Soulike \u7684\u535a\u5ba2")})}),(0,o.jsx)(K,{title:E,contentHtml:null!==v&&void 0!==v?v:"",publicationTime:w,modificationTime:C,loading:b,category:null!==x&&void 0!==x?x:t})]})}},22260:function(e,n,t){"use strict";t.d(n,{q:function(){return c}});var o=t(5152),i=t.n(o),r=t.e(364).then(t.bind(t,23364)).then((function(e){return e.ArticleShower})),c=i()((function(){return r}),{ssr:!1})},37273:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var o=t(67294);function i(e){var n=(0,o.useState)(!0),i=n[0],r=n[1],c=(0,o.useState)(null),a=c[0],l=c[1];return(0,o.useEffect)((function(){r(!0),l(null),void 0!==e&&Promise.all([t.e(787),t.e(50)]).then(t.bind(t,81050)).then((function(n){var t=n.markdownConverter.makeHtml(e);l(t)})).finally((function(){return r(!1)}))}),[e]),{loading:i,html:a}}},78947:function(e){e.exports={Article:"Style_Article__HIvpd",header:"Style_header__E2ixV",title:"Style_title__6x3uL",info:"Style_info__Z9MC_",alert:"Style_alert__ZAsDj"}},11163:function(e,n,t){e.exports=t(90387)}}]);