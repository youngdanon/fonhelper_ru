(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(19),l=c.n(a),r=(c(24),c(2)),i=(c(25),c(26),c(4)),o=c.n(i),u=c(0);function j(e){var t=Object(n.useState)([]),c=Object(r.a)(t,2),s=c[0],a=c[1],l=e.eventId;return Object(n.useEffect)((function(){o()({method:"get",url:"/api/event_blocks_info/",params:{event_id:l}}).then((function(e){a(e.data)}));var e=setInterval((function(){o()({method:"get",url:"/api/event_blocks_info/",params:{event_id:l}}).then((function(e){a(e.data)}))}),2500);return function(){return clearInterval(e)}}),[]),Object(u.jsxs)("div",{className:"blockLog-table",children:[s.map((function(e){return Object(u.jsxs)("div",{className:"row log",children:[Object(u.jsx)("div",{className:"log-item score col-4 col-lg-3 text-muted",children:e.comment}),Object(u.jsx)("div",{className:"log-item score col-2 col-lg-1",children:e.score}),Object(u.jsx)("div",{className:"log-item time col-2 col-lg-1",children:e.time}),e.param?Object(u.jsxs)("div",{className:"log-item param col-2 col-lg-2",children:[" ",Object(u.jsx)("b",{children:e.factor})," (",e.param,")"]}):Object(u.jsx)("div",{className:"log-item factor col-2 col-lg-2",children:Object(u.jsx)("b",{children:e.factor})}),Object(u.jsx)("div",{className:"log-item value col-2 col-lg-1",children:e.value})]})})),s.length?"":Object(u.jsx)("span",{className:"warning",children:"\u041d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043e\u043a \u043f\u043e \u0434\u0430\u043d\u043d\u043e\u043c\u0443 \u0441\u043e\u0431\u044b\u0442\u0438\u044e"})]})}c(9),c(46);function d(e){var t=e.props.event,c=e.props.k2value,s=Object(n.useState)(!1),a=Object(r.a)(s,2),l=a[0],i=a[1],o=Object(n.useState)("closed"),d=Object(r.a)(o,2),b=d[0],O=d[1];return Object(u.jsxs)("div",{className:"shadow-sm rounded line row "+(c<=t.k2?"k2-alert":""),onClick:function(){i(!l),O(l?"closed":"opened")},children:[Object(u.jsx)("div",{className:"col-md-12 col-lg-7 event-name level-"+t.level,children:Object(u.jsx)("h6",{children:t.name})}),Object(u.jsx)("div",{className:"col-md-12 col-lg-5 counters",children:t.counters.map((function(e){return Object(u.jsx)("div",{className:"counter",children:e?Object(u.jsx)("p",{children:Object(u.jsx)("b",{children:e})}):Object(u.jsx)("p",{className:"text-muted",children:e})})}))}),l?Object(u.jsx)("div",{className:b,children:Object(u.jsx)(j,{eventId:t.id,level:t.level})}):""]},t.id)}function b(e){var t=e.liveEvents;return Object(u.jsx)("div",{className:"shadow-lg rounded table-header",children:Object(u.jsxs)("div",{className:"line row",children:[Object(u.jsx)("div",{className:"col-md-12 col-lg-7 event-name",children:Object(u.jsxs)("h6",{children:["\u0421\u043e\u0431\u044b\u0442\u0438\u0439 \u043d\u0430\u0439\u0434\u0435\u043d\u043e: ",t.length]})}),Object(u.jsx)("div",{className:"col-md-12 col-lg-5 counters",children:["1","X","2","1X","X2","12","\u04241","\u04242","\u0422\u0411","\u0422\u041c","F"].map((function(e){return Object(u.jsx)("div",{className:"shadow-sm rounded-pill counter",children:e})}))})]})})}var O=s.a.createContext();function m(e){var t=Object(n.useContext)(O),c=t.unselectSport,s=t.selectSport,a=e.sport.id,l=e.sport.name,i=Object(n.useState)(!0),o=Object(r.a)(i,2),j=o[0],d=o[1];return Object(u.jsx)("span",{className:"shadow-lg rounded selector "+(j?"selected":"unselected"),onClick:function(){d(!j),j?c(a):s(a)},children:l},a)}function v(){var e=Object(n.useContext)(O),t=e.countersFilterUpdate,c=e.repeatsFilterUpdate,s=Object(n.useState)(0),a=Object(r.a)(s,2),l=a[0],i=a[1],o=Object(n.useState)(1),j=Object(r.a)(o,2),d=j[0],b=j[1];return Object(u.jsxs)("div",{className:"blocks-filters row",children:[Object(u.jsxs)("div",{className:"filter-item col-12 col-md-5 col-lg-5 row",children:[Object(u.jsx)("div",{className:"description col-7 col-md-12 col-lg-7",children:"\u041c\u0438\u043d. \u043a\u043e\u043b-\u0432\u043e \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043e\u043a:"}),Object(u.jsx)("div",{className:"value col-5 col-md-12 col-lg-5",children:Object(u.jsx)("input",{type:"number",value:l,onChange:function(e){return i(e.target.value)}})})]}),Object(u.jsxs)("div",{className:"filter-item col-12 col-md-5 col-lg-5 row",children:[Object(u.jsx)("div",{className:"description col-7 col-md-12 col-lg-7",children:"\u041a\u043e\u043b-\u0432\u043e \u043a\u043e\u0442\u0438\u0440. \u043f\u043e\u0434\u0440\u044f\u0434:"}),Object(u.jsx)("div",{className:"value col-5 col-md-12 col-lg-5",children:Object(u.jsx)("input",{type:"number",value:d,onChange:function(e){return b(e.target.value)}})})]}),Object(u.jsx)("div",{className:"filter-item submit-block col-12 col-md-2",children:Object(u.jsx)("button",{className:"btn btn-outline-success",type:"button",onClick:function(){return function(e,n){t(e),c(n)}(l,d)},children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c"})})]})}function h(e){var t=e.sportFilters;return Object(u.jsxs)("div",{className:"filters",children:[Object(u.jsx)(v,{}),Object(u.jsx)("div",{className:"shadow rounded sport-filters",children:t.map((function(e){return Object(u.jsx)(m,{sport:e})}))})]})}function f(e){var t=Object(n.useState)([]),c=Object(r.a)(t,2),s=c[0],a=c[1],l=Object(n.useState)([]),i=Object(r.a)(l,2),j=i[0],m=i[1],v=Object(n.useState)(0),f=Object(r.a)(v,2),p=f[0],x=f[1],g=Object(n.useState)(1),N=Object(r.a)(g,2),S=N[0],w=N[1];Object(n.useEffect)((function(){o()({method:"get",url:"api/sports/"}).then((function(e){m(e.data);var t=[];e.data.map((function(e){t.push(e.id)})),a(t)}))}),[]);var k=Object(n.useState)([]),C=Object(r.a)(k,2),E=C[0],F=C[1];return Object(n.useEffect)((function(){o()({method:"get",url:"/api/live_events/",params:{sports:s.join(),k1:p}}).then((function(e){F(e.data)}));var e=setInterval((function(){o()({method:"get",url:"/api/live_events/",params:{sports:s.join(),k1:p}}).then((function(e){F(e.data)}))}),2500);return function(){return clearInterval(e)}}),[s,p]),Object(u.jsxs)("div",{className:"events-table",children:[Object(u.jsx)("h1",{children:"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f:"}),Object(u.jsx)(O.Provider,{value:{unselectSport:function(e){a(s.filter((function(t){return t!==e})))},selectSport:function(e){a(s.concat(e))},countersFilterUpdate:function(e){x(e)},repeatsFilterUpdate:function(e){w(e)}},children:Object(u.jsx)(h,{sportFilters:j})}),Object(u.jsx)(b,{liveEvents:E}),Object(u.jsx)("div",{className:"table-body",children:E.map((function(e){return Object(u.jsx)(d,{props:{event:e,k2value:S}})}))})]})}function p(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),l=Object(r.a)(a,2),i=l[0],j=l[1],d=Object(n.useState)(!1),b=Object(r.a)(d,2),m=b[0],v=b[1],h=Object(n.useState)(!1),f=Object(r.a)(h,2),p=f[0],x=f[1],g=Object(n.useState)("\u041b\u043e\u0433\u0438\u043d \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),N=Object(r.a)(g,2),S=N[0],w=N[1],k=Object(n.useState)("\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),C=Object(r.a)(k,2),E=C[0],F=C[1],_=Object(n.useState)(""),y=Object(r.a)(_,2),I=y[0],P=y[1],T=Object(n.useState)(!1),B=Object(r.a)(T,2),U=B[0],L=B[1],X=Object(n.useContext)(O).auth;function G(e){switch(e.target.name){case"login":v(!0);break;case"password":x(!0)}}return Object(n.useEffect)((function(){L(!(S||E))}),[S,E]),Object(u.jsxs)("div",{className:"login-form",children:[Object(u.jsx)("h1",{children:"\u0412\u0445\u043e\u0434"}),Object(u.jsx)("h4",{className:"text-muted",children:"\u0414\u043b\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u043c \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(u.jsxs)("div",{className:"login form-item",children:[m&&S&&Object(u.jsx)("div",{className:"error",children:S}),Object(u.jsx)("input",{onChange:function(e){return function(e){e.target.value?w(""):w("\u041b\u043e\u0433\u0438\u043d \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),s(e.target.value)}(e)},value:c,onBlur:function(e){return G(e)},name:"login",type:"text",placeholder:"\u041b\u043e\u0433\u0438\u043d"})]}),Object(u.jsxs)("div",{className:"password form-item",children:[p&&E&&Object(u.jsx)("div",{className:"error",children:E}),Object(u.jsx)("input",{onChange:function(e){return function(e){e.target.value?F(""):F("\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),j(e.target.value)}(e)},value:i,onBlur:function(e){return G(e)},name:"password",type:"text",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"})]}),I?Object(u.jsxs)("div",{className:"error",children:[I," "]}):"",Object(u.jsx)("button",{onClick:function(){o()({method:"POST",url:"/api/login/",data:{login:c,password:i}}).then((function(e){e.data?X(e.data):(s(""),j(""),P("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"))}))},type:"submit",disabled:!U,children:"\u0412\u043e\u0439\u0442\u0438"})]})}var x=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){o()({method:"GET",url:"/api/is_auth/"}).then((function(e){s(e.data.status)}))}),[]),Object(n.useEffect)((function(){o()({method:"GET",url:"/api/is_auth/"}).then((function(e){s(e.data.status)}))}),[c]),Object(u.jsx)("div",{className:"col-md-12 col-lg-11 wrapper",children:Object(u.jsx)(O.Provider,{value:{auth:function(e){s(e)}},children:c?Object(u.jsx)(f,{}):Object(u.jsx)(p,{})})})},g=function(e){e&&e instanceof Function&&c.e(4).then(c.bind(null,50)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,l=t.getTTFB;c(e),n(e),s(e),a(e),l(e)}))};l.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),g()}},[[47,1,2]]]);
//# sourceMappingURL=main.de0107ce.chunk.js.map