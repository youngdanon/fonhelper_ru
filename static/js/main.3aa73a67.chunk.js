(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(16),s=n.n(i),a=(n(21),n(22),n(23),n(6)),l=n(3),o=n.n(l),u=n(0);function d(e){e.eventToRender;return Object(u.jsx)("renderEventLog",{})}function j(e){var t=e.liveEvents;return Object(u.jsx)("div",{className:"table-header",children:Object(u.jsxs)("div",{className:"line row",children:[Object(u.jsx)("div",{className:"col-md-12 col-lg-7 event-name",children:Object(u.jsxs)("h6",{children:["\u0421\u043e\u0431\u044b\u0442\u0438\u0439 \u043d\u0430\u0439\u0434\u0435\u043d\u043e: ",t.length]})}),Object(u.jsx)("div",{className:"col-md-12 col-lg-5 counters",children:["1","X","2","1X","X2","12","\u04241","\u04242","\u0422\u0411","\u0422\u041c","F"].map((function(e){return Object(u.jsx)("div",{className:"counter",children:e})}))})]})})}function v(e){var t=Object(c.useState)([]),n=Object(a.a)(t,2),r=n[0],i=n[1];return Object(c.useEffect)((function(){o()({method:"get",url:"/api/live_events/"}).then((function(e){i(e.data)}));var e=setInterval((function(){o()({method:"get",url:"/api/live_events/"}).then((function(e){i(e.data)}))}),2500);return function(){return clearInterval(e)}}),[]),Object(u.jsxs)("div",{className:"events-table",children:[Object(u.jsx)(j,{liveEvents:r}),Object(u.jsx)("div",{className:"table-body",children:r.map((function(e){return Object(u.jsx)(d,{eventToRender:e})}))})]})}var b=function(){return Object(u.jsxs)("div",{className:"col-md-12 col-lg-11 wrapper",children:[Object(u.jsx)("h1",{children:"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f:"}),Object(u.jsx)(v,{})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),h()}},[[43,1,2]]]);
//# sourceMappingURL=main.3aa73a67.chunk.js.map