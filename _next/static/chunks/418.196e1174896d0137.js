(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[418],{418:function(e,t,n){"use strict";n.r(t),n.d(t,{About:function(){return _}});var l=n(1527),u=n(3644),i=n.n(u),r=n(959),s=n(4067),a=n(8618),o=n(462),c=n(7433),d=n(5570),h=n.n(d);function f(e){let{loading:t,aboutHtml:n}=e;return(0,l.jsx)("div",{className:h().About,children:(0,l.jsxs)(o.Z,{loading:t,active:!0,title:!0,paragraph:{rows:20},children:[(0,l.jsx)("header",{className:h().header,children:(0,l.jsx)("h1",{className:h().title,children:"关于"})}),(0,l.jsx)(c.q,{HTMLContent:n})]})})}function _(){let{loading:e,about:t}=function(){let[e,t]=(0,r.useState)(null),[n,l]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{l(!0),s.Wx.get().then(e=>{null!==e&&t(e.about)}).finally(()=>l(!1))},[]),{loading:n,about:e}}(),{loading:n,html:u}=(0,a.Z)(t??void 0);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i(),{children:(0,l.jsx)("title",{children:"关于 - Soulike 的博客"})}),(0,l.jsx)(f,{aboutHtml:u??"",loading:e||n})]})}},7433:function(e,t,n){"use strict";n.d(t,{q:function(){return r}});var l=n(3819),u=n.n(l);let i=n.e(231).then(n.bind(n,2231)).then(e=>{let{ArticleShower:t}=e;return t}),r=u()(()=>i,{ssr:!1})},8618:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var l=n(959);function u(e){let[t,u]=(0,l.useState)(!0),[i,r]=(0,l.useState)(null);return(0,l.useEffect)(()=>{u(!0),r(null),void 0!==e&&Promise.all([n.e(832),n.e(211)]).then(n.bind(n,2211)).then(t=>{let{markdownConverter:n}=t,l=n.makeHtml(e);r(l)}).finally(()=>u(!1))},[e]),{loading:t,html:i}}},5570:function(e){e.exports={About:"Style_About___8doS",header:"Style_header__pVW3F",title:"Style_title__voJi8"}}}]);