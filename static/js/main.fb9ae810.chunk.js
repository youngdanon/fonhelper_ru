(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{21:function(e,n,t){},40:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var c=t(2),s=t.n(c),l=t(16),a=t.n(l),i=(t(21),t(7)),r=(t.p,t(6)),d=t.n(r),o=(t(40),t(41),t(0));function j(e){var n=e.eventToRender;return Object(o.jsxs)("div",{className:"line row",children:[Object(o.jsx)("div",{className:"col-md-12 col-lg-7 event-name level-"+n.level,children:Object(o.jsx)("h6",{children:n.name})}),Object(o.jsx)("div",{className:"col-md-12 col-lg-5 counters",children:n.counters.map((function(e){return Object(o.jsx)("div",{className:"counter",children:Object(o.jsx)("p",{children:e})})}))})]},n.id)}var u=function(){var e=Object(c.useState)([]),n=Object(i.a)(e,2),t=n[0],s=n[1],l=Object(c.useState)([]),a=Object(i.a)(l,2);return a[0],a[1],Object(c.useEffect)((function(){d()({method:"get",url:"/api/live_events/"}).then((function(e){s(e.data)}));var e=setInterval((function(){d()({method:"get",url:"/api/live_events/"}).then((function(e){s(e.data)}))}),2500);return function(){return clearInterval(e)}}),[]),console.log(t),Object(o.jsxs)("div",{className:"col-md-12 col-lg-11 wrapper",children:[Object(o.jsx)("h1",{children:"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f:"}),Object(o.jsxs)("div",{className:"events-table",children:[Object(o.jsx)("div",{className:"table-header",children:Object(o.jsxs)("div",{className:"line row",children:[Object(o.jsx)("div",{className:"col-md-12 col-lg-7 event-name",children:Object(o.jsxs)("h6",{children:["\u0421\u043e\u0431\u044b\u0442\u0438\u0439 \u043d\u0430\u0439\u0434\u0435\u043d\u043e: ",t.length]})}),Object(o.jsx)("div",{className:"col-md-12 col-lg-5 counters",children:["1","X","2","1X","X2","12","\u04241","\u04242","\u0422\u0411","\u0422\u041c","F"].map((function(e){return Object(o.jsx)("div",{className:"counter",children:e})}))})]})}),Object(o.jsx)("div",{className:"table-body",children:t.map((function(e){return Object(o.jsx)(j,{eventToRender:e})}))})]})]})},b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,44)).then((function(n){var t=n.getCLS,c=n.getFID,s=n.getFCP,l=n.getLCP,a=n.getTTFB;t(e),c(e),s(e),l(e),a(e)}))};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),b()}},[[43,1,2]]]);
//# sourceMappingURL=main.fb9ae810.chunk.js.map