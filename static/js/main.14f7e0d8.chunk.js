(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(19),l=c.n(a),r=(c(25),c(26),c(27),c(2)),i=c(4),o=c.n(i),j=c(0);function u(e){var t=Object(n.useState)([]),c=Object(r.a)(t,2),s=c[0],a=c[1],l=e.eventId;return Object(n.useEffect)((function(){o()({method:"get",url:"/api/event_blocks_info/",params:{event_id:l}}).then((function(e){a(e.data)}));var e=setInterval((function(){o()({method:"get",url:"/api/event_blocks_info/",params:{event_id:l}}).then((function(e){a(e.data)}))}),2500);return function(){return clearInterval(e)}}),[]),Object(j.jsxs)("div",{className:"blockLog-table",children:[s.map((function(e){return Object(j.jsxs)("div",{className:"row log",children:[Object(j.jsx)("div",{className:"log-item score col-4 col-lg-3 text-muted",children:e.comment}),Object(j.jsx)("div",{className:"log-item score col-2 col-lg-1",children:e.score}),Object(j.jsx)("div",{className:"log-item time col-2 col-lg-1",children:e.time}),e.param?Object(j.jsxs)("div",{className:"log-item param col-2 col-lg-2",children:[" ",Object(j.jsx)("b",{children:e.factor})," (",e.param,")"]}):Object(j.jsx)("div",{className:"log-item factor col-2 col-lg-2",children:Object(j.jsx)("b",{children:e.factor})}),Object(j.jsx)("div",{className:"log-item value col-2 col-lg-1",children:e.value})]})})),s.length?"":Object(j.jsx)("span",{className:"warning",children:"\u041d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043e\u043a \u043f\u043e \u0434\u0430\u043d\u043d\u043e\u043c\u0443 \u0441\u043e\u0431\u044b\u0442\u0438\u044e"})]})}c(9);var d=c(20);function b(e){var t=e.props.event,c=e.props.k2value,s=Object(n.useState)(!1),a=Object(r.a)(s,2),l=a[0],i=a[1],o=Object(n.useState)("closed"),b=Object(r.a)(o,2),m=b[0],O=b[1],v=Object(d.a)("../../../../static/media/alert.mp3"),p=Object(r.a)(v,1)[0];return Object(j.jsxs)("div",{className:"line row "+(c<=t.k2?"k2-alert":""),onClick:function(){i(!l),O(l?"closed":"opened")},children:[c<=t.k2?p:"",Object(j.jsx)("div",{className:"col-md-12 col-lg-7 event-name level-"+t.level,children:Object(j.jsx)("h6",{children:t.name})}),Object(j.jsx)("div",{className:"col-md-12 col-lg-5 counters",children:t.counters.map((function(e){return Object(j.jsx)("div",{className:"counter",children:e?Object(j.jsx)("p",{children:Object(j.jsx)("b",{children:e})}):Object(j.jsx)("p",{className:"text-muted",children:e})})}))}),l?Object(j.jsx)("div",{className:m,children:Object(j.jsx)(u,{eventId:t.id,level:t.level})}):""]},t.id)}function m(e){var t=e.liveEvents;return Object(j.jsx)("div",{className:"table-header",children:Object(j.jsxs)("div",{className:"line row",children:[Object(j.jsx)("div",{className:"col-md-12 col-lg-7 event-name",children:Object(j.jsxs)("h6",{children:["\u0421\u043e\u0431\u044b\u0442\u0438\u0439 \u043d\u0430\u0439\u0434\u0435\u043d\u043e: ",t.length]})}),Object(j.jsx)("div",{className:"col-md-12 col-lg-5 counters",children:["1","X","2","1X","X2","12","\u04241","\u04242","\u0422\u0411","\u0422\u041c","F"].map((function(e){return Object(j.jsx)("div",{className:"counter",children:e})}))})]})})}var O=s.a.createContext();function v(e){var t=Object(n.useContext)(O),c=t.unselectSport,s=t.selectSport,a=e.sport.id,l=e.sport.name,i=Object(n.useState)(!0),o=Object(r.a)(i,2),u=o[0],d=o[1];return Object(j.jsx)("span",{className:"selector "+(u?"selected":"unselected"),onClick:function(){d(!u),u?c(a):s(a)},children:l},a)}function p(){var e=Object(n.useContext)(O),t=e.countersFilterUpdate,c=e.repeatsFilterUpdate,s=Object(n.useState)(0),a=Object(r.a)(s,2),l=a[0],i=a[1],o=Object(n.useState)(1),u=Object(r.a)(o,2),d=u[0],b=u[1];return Object(j.jsxs)("div",{className:"blocks-filters row",children:[Object(j.jsxs)("div",{className:"counters-filter col-12 col-lg-5",children:[Object(j.jsx)("label",{className:"text-muted",children:" \u041c\u0438\u043d \u043a\u043e\u043b-\u0432\u043e \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043e\u043a:"}),Object(j.jsx)("input",{type:"number",value:l,onChange:function(e){return i(e.target.value)}})]}),Object(j.jsxs)("div",{className:"repeats-filter col-12 col-lg-5",children:[Object(j.jsx)("label",{className:"text-muted",children:" \u041a\u043e\u043b-\u0432\u043e \u043a\u043e\u0442\u0438\u0440. \u043f\u043e\u0434\u0440\u044f\u0434:"}),Object(j.jsx)("input",{type:"number",value:d,onChange:function(e){return b(e.target.value)}})]}),Object(j.jsx)("div",{className:"submit-button col-12 col-lg-2",children:Object(j.jsx)("button",{type:"button",className:"btn btn-primary btn-sm",onClick:function(){return function(e,n){t(e),c(n)}(l,d)},children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c"})})]})}function h(e){var t=e.sportFilters;return Object(j.jsxs)("div",{className:"filters",children:[Object(j.jsx)("div",{className:"blockLog-filters",children:Object(j.jsx)(p,{})}),Object(j.jsx)("div",{className:"sport-filters",children:t.map((function(e){return Object(j.jsx)(v,{sport:e})}))})]})}function f(e){var t=Object(n.useState)([]),c=Object(r.a)(t,2),s=c[0],a=c[1],l=Object(n.useState)([]),i=Object(r.a)(l,2),u=i[0],d=i[1],v=Object(n.useState)(0),p=Object(r.a)(v,2),f=p[0],x=p[1],g=Object(n.useState)(1),N=Object(r.a)(g,2),k=N[0],S=N[1];Object(n.useEffect)((function(){o()({method:"get",url:"api/sports/"}).then((function(e){d(e.data);var t=[];e.data.map((function(e){t.push(e.id)})),a(t)}))}),[]);var C=Object(n.useState)([]),F=Object(r.a)(C,2),w=F[0],y=F[1];return Object(n.useEffect)((function(){o()({method:"get",url:"/api/live_events/",params:{sports:s.join(),k1:f}}).then((function(e){y(e.data)}));var e=setInterval((function(){o()({method:"get",url:"/api/live_events/",params:{sports:s.join(),k1:f}}).then((function(e){y(e.data)}))}),2500);return function(){return clearInterval(e)}}),[s,f]),Object(j.jsxs)("div",{className:"events-table",children:[Object(j.jsx)(O.Provider,{value:{unselectSport:function(e){a(s.filter((function(t){return t!==e})))},selectSport:function(e){a(s.concat(e))},countersFilterUpdate:function(e){x(e)},repeatsFilterUpdate:function(e){S(e)}},children:Object(j.jsx)(h,{sportFilters:u})}),Object(j.jsx)(m,{liveEvents:w}),Object(j.jsx)("div",{className:"table-body",children:w.map((function(e){return Object(j.jsx)(b,{props:{event:e,k2value:k}})}))})]})}var x=function(){return Object(j.jsxs)("div",{className:"col-md-12 col-lg-11 wrapper",children:[Object(j.jsx)("iframe",{src:"/static/media/silence.mp3",allow:"autoplay",id:"audio",style:"display: none"}),Object(j.jsx)("h1",{children:"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f:"}),Object(j.jsx)(f,{})]})},g=function(e){e&&e instanceof Function&&c.e(4).then(c.bind(null,50)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,l=t.getTTFB;c(e),n(e),s(e),a(e),l(e)}))};l.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),g()}},[[47,1,2]]]);
//# sourceMappingURL=main.14f7e0d8.chunk.js.map