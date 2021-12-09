(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(19),l=c.n(s),r=(c(25),c(2)),i=(c(26),c(27),c(4)),o=c.n(i),j=c(0);function u(e){var t=Object(n.useState)([]),c=Object(r.a)(t,2),a=c[0],s=c[1],l=e.eventId;return Object(n.useEffect)((function(){o()({method:"get",url:"/api/event_blocks_info/",params:{event_id:l}}).then((function(e){s(e.data)}));var e=setInterval((function(){o()({method:"get",url:"/api/event_blocks_info/",params:{event_id:l}}).then((function(e){s(e.data)}))}),2500);return function(){return clearInterval(e)}}),[]),Object(j.jsxs)("div",{className:"blockLog-table",children:[a.map((function(e){return Object(j.jsxs)("div",{className:"row log",children:[Object(j.jsx)("div",{className:"log-item score col-4 col-lg-3 text-muted",children:e.comment}),Object(j.jsx)("div",{className:"log-item score col-2 col-lg-1",children:e.score}),Object(j.jsx)("div",{className:"log-item time col-2 col-lg-1",children:e.time}),e.param?Object(j.jsxs)("div",{className:"log-item param col-2 col-lg-2",children:[" ",Object(j.jsx)("b",{children:e.factor})," (",e.param,")"]}):Object(j.jsx)("div",{className:"log-item factor col-2 col-lg-2",children:Object(j.jsx)("b",{children:e.factor})}),Object(j.jsx)("div",{className:"log-item value col-2 col-lg-1",children:e.value})]})})),a.length?"":Object(j.jsx)("span",{className:"warning",children:"\u041d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043e\u043a \u043f\u043e \u0434\u0430\u043d\u043d\u043e\u043c\u0443 \u0441\u043e\u0431\u044b\u0442\u0438\u044e"})]})}c(9);var d=c(20);function b(e){var t=e.props.event,c=e.props.k2value,a=Object(n.useState)(!1),s=Object(r.a)(a,2),l=s[0],i=s[1],o=Object(n.useState)("closed"),b=Object(r.a)(o,2),O=b[0],m=b[1],v=Object(d.a)("/static/media/alert.mp3"),h=Object(r.a)(v,1)[0];return Object(j.jsxs)("div",{className:"line row "+(c<=t.k2?"k2-alert":""),onClick:function(){i(!l),m(l?"closed":"opened")},children:[c<=t.k2?h:"",Object(j.jsx)("div",{className:"col-md-12 col-lg-7 event-name level-"+t.level,children:Object(j.jsx)("h6",{children:t.name})}),Object(j.jsx)("div",{className:"col-md-12 col-lg-5 counters",children:t.counters.map((function(e){return Object(j.jsx)("div",{className:"counter",children:e?Object(j.jsx)("p",{children:Object(j.jsx)("b",{children:e})}):Object(j.jsx)("p",{className:"text-muted",children:e})})}))}),l?Object(j.jsx)("div",{className:O,children:Object(j.jsx)(u,{eventId:t.id,level:t.level})}):""]},t.id)}function O(e){var t=e.liveEvents;return Object(j.jsx)("div",{className:"table-header",children:Object(j.jsxs)("div",{className:"line row",children:[Object(j.jsx)("div",{className:"col-md-12 col-lg-7 event-name",children:Object(j.jsxs)("h6",{children:["\u0421\u043e\u0431\u044b\u0442\u0438\u0439 \u043d\u0430\u0439\u0434\u0435\u043d\u043e: ",t.length]})}),Object(j.jsx)("div",{className:"col-md-12 col-lg-5 counters",children:["1","X","2","1X","X2","12","\u04241","\u04242","\u0422\u0411","\u0422\u041c","F"].map((function(e){return Object(j.jsx)("div",{className:"counter",children:e})}))})]})})}var m=a.a.createContext();function v(e){var t=Object(n.useContext)(m),c=t.unselectSport,a=t.selectSport,s=e.sport.id,l=e.sport.name,i=Object(n.useState)(!0),o=Object(r.a)(i,2),u=o[0],d=o[1];return Object(j.jsx)("span",{className:"selector "+(u?"selected":"unselected"),onClick:function(){d(!u),u?c(s):a(s)},children:l},s)}function h(){var e=Object(n.useContext)(m),t=e.countersFilterUpdate,c=e.repeatsFilterUpdate,a=Object(n.useState)(0),s=Object(r.a)(a,2),l=s[0],i=s[1],o=Object(n.useState)(1),u=Object(r.a)(o,2),d=u[0],b=u[1];return Object(j.jsxs)("div",{className:"blocks-filters row",children:[Object(j.jsxs)("div",{className:"filter-item col-12 col-md-5 col-lg-5 row",children:[Object(j.jsx)("div",{className:"description col-7 col-md-12 col-lg-7",children:"\u041c\u0438\u043d. \u043a\u043e\u043b-\u0432\u043e \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043e\u043a:"}),Object(j.jsx)("div",{className:"value col-5 col-md-12 col-lg-5",children:Object(j.jsx)("input",{type:"number",value:l,onChange:function(e){return i(e.target.value)}})})]}),Object(j.jsxs)("div",{className:"filter-item col-12 col-md-5 col-lg-5 row",children:[Object(j.jsx)("div",{className:"description col-7 col-md-12 col-lg-7",children:"\u041a\u043e\u043b-\u0432\u043e \u043a\u043e\u0442\u0438\u0440. \u043f\u043e\u0434\u0440\u044f\u0434:"}),Object(j.jsx)("div",{className:"value col-5 col-md-12 col-lg-5",children:Object(j.jsx)("input",{type:"number",value:d,onChange:function(e){return b(e.target.value)}})})]}),Object(j.jsx)("div",{className:"filter-item submit-block col-12 col-md-2",children:Object(j.jsx)("button",{type:"button",onClick:function(){return function(e,n){t(e),c(n)}(l,d)},children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c"})})]})}function f(e){var t=e.sportFilters;return Object(j.jsxs)("div",{className:"filters",children:[Object(j.jsx)(h,{}),Object(j.jsx)("div",{className:"sport-filters",children:t.map((function(e){return Object(j.jsx)(v,{sport:e})}))})]})}function p(e){var t=Object(n.useState)([]),c=Object(r.a)(t,2),a=c[0],s=c[1],l=Object(n.useState)([]),i=Object(r.a)(l,2),u=i[0],d=i[1],v=Object(n.useState)(0),h=Object(r.a)(v,2),p=h[0],x=h[1],g=Object(n.useState)(1),N=Object(r.a)(g,2),S=N[0],k=N[1];Object(n.useEffect)((function(){o()({method:"get",url:"api/sports/"}).then((function(e){d(e.data);var t=[];e.data.map((function(e){t.push(e.id)})),s(t)}))}),[]);var w=Object(n.useState)([]),C=Object(r.a)(w,2),E=C[0],F=C[1];return Object(n.useEffect)((function(){o()({method:"get",url:"/api/live_events/",params:{sports:a.join(),k1:p}}).then((function(e){F(e.data)}));var e=setInterval((function(){o()({method:"get",url:"/api/live_events/",params:{sports:a.join(),k1:p}}).then((function(e){F(e.data)}))}),2500);return function(){return clearInterval(e)}}),[a,p]),Object(j.jsxs)("div",{className:"events-table",children:[Object(j.jsx)("h1",{children:"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f:"}),Object(j.jsx)(m.Provider,{value:{unselectSport:function(e){s(a.filter((function(t){return t!==e})))},selectSport:function(e){s(a.concat(e))},countersFilterUpdate:function(e){x(e)},repeatsFilterUpdate:function(e){k(e)}},children:Object(j.jsx)(f,{sportFilters:u})}),Object(j.jsx)(O,{liveEvents:E}),Object(j.jsx)("div",{className:"table-body",children:E.map((function(e){return Object(j.jsx)(b,{props:{event:e,k2value:S}})}))})]})}function x(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),l=Object(r.a)(s,2),i=l[0],u=l[1],d=Object(n.useState)(!1),b=Object(r.a)(d,2),O=b[0],v=b[1],h=Object(n.useState)(!1),f=Object(r.a)(h,2),p=f[0],x=f[1],g=Object(n.useState)("\u041b\u043e\u0433\u0438\u043d \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),N=Object(r.a)(g,2),S=N[0],k=N[1],w=Object(n.useState)("\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),C=Object(r.a)(w,2),E=C[0],F=C[1],_=Object(n.useState)(""),y=Object(r.a)(_,2),I=y[0],P=y[1],T=Object(n.useState)(!1),B=Object(r.a)(T,2),U=B[0],L=B[1],X=Object(n.useContext)(m).auth;function G(e){switch(e.target.name){case"login":v(!0);break;case"password":x(!0)}}return Object(n.useEffect)((function(){L(!(S||E))}),[S,E]),Object(j.jsxs)("div",{className:"login-form",children:[Object(j.jsx)("h1",{children:"\u0412\u0445\u043e\u0434"}),Object(j.jsx)("h4",{className:"text-muted",children:"\u0414\u043b\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u043c \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(j.jsxs)("div",{className:"login form-item",children:[O&&S&&Object(j.jsx)("div",{className:"error",children:S}),Object(j.jsx)("input",{onChange:function(e){return function(e){e.target.value?k(""):k("\u041b\u043e\u0433\u0438\u043d \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),a(e.target.value)}(e)},value:c,onBlur:function(e){return G(e)},name:"login",type:"text",placeholder:"\u041b\u043e\u0433\u0438\u043d"})]}),Object(j.jsxs)("div",{className:"password form-item",children:[p&&E&&Object(j.jsx)("div",{className:"error",children:E}),Object(j.jsx)("input",{onChange:function(e){return function(e){e.target.value?F(""):F("\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),u(e.target.value)}(e)},value:i,onBlur:function(e){return G(e)},name:"password",type:"text",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"})]}),I?Object(j.jsx)("div",{className:"error",children:E}):"",Object(j.jsx)("button",{onClick:function(){o()({method:"POST",url:"/api/login/",data:{login:c,password:i}}).then((function(e){e.data.status?X(e.data.status):(a(""),u(""),P("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"))}))},type:"submit",disabled:!U,children:"\u0412\u043e\u0439\u0442\u0438"})]})}var g=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){o()({method:"GET",url:"/api/is_auth/"}).then((function(e){a(e.data.status)}))}),[]),Object(n.useEffect)((function(){o()({method:"GET",url:"/api/is_auth/"}).then((function(e){a(e.data.status)}))}),[c]),Object(j.jsx)("div",{className:"col-md-12 col-lg-11 wrapper",children:Object(j.jsx)(m.Provider,{value:{auth:function(e){a(e)}},children:c?Object(j.jsx)(p,{}):Object(j.jsx)(x,{})})})},N=function(e){e&&e instanceof Function&&c.e(4).then(c.bind(null,50)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,l=t.getTTFB;c(e),n(e),a(e),s(e),l(e)}))};l.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),N()}},[[47,1,2]]]);
//# sourceMappingURL=main.47fd0e0d.chunk.js.map