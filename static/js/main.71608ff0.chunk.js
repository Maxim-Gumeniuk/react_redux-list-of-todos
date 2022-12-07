(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n,a=c(7),s=c.n(a),r=c(3),i=c(5),l=c(12),o=c(13),d=function(e){return{type:"currentTodo/SET",payload:e}},u=function(){return{type:"currentTodo/REMOVE"}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},b=c(2);!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(n||(n={}));var h={query:"",status:n.ALL},f=function(e){return{type:"filter/STATUS",payload:e}},O=function(e){return{type:"filter/QUERY",payload:e}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/STATUS":return Object(b.a)(Object(b.a)({},e),{},{status:t.payload});case"filter/QUERY":return Object(b.a)(Object(b.a)({},e),{},{query:t.payload});default:return e}},x=function(e){return{type:"todos/ADD",payload:e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/ADD"===t.type?t.payload:e},v=Object(i.combineReducers)({currentTodo:j,filter:m,todos:p}),y=Object(i.createStore)(v,Object(l.composeWithDevTools)(Object(i.applyMiddleware)(o.a))),N=c(8),g=c(6),T=c(4),E=c.n(T),L=c(1),w=(c(23),c(24),c(14)),C=c.n(w),k=r.b,A=r.c,S=c(0),D=function(){var e=k(),t=A((function(e){return e.todos})),c=A((function(e){return e.currentTodo})),a=A((function(e){return e.filter.status})),s=A((function(e){return e.filter.query})),r=Object(L.useMemo)((function(){var e=t.filter((function(e){switch(a){case n.ACTIVE:return!e.completed;case n.COMPLETED:return e.completed;case n.ALL:default:return e}}));return s&&(e=e.filter((function(e){return e.title.toLowerCase().includes(s.toLowerCase())}))),e}),[t,a,s]);return 0===r.length?Object(S.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}):Object(S.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"#"}),Object(S.jsx)("th",{children:Object(S.jsx)("span",{className:"icon",children:Object(S.jsx)("i",{className:"fas fa-check"})})}),Object(S.jsx)("th",{children:"Title"}),Object(S.jsx)("th",{children:" "})]})}),Object(S.jsx)("tbody",{children:r.map((function(t){return Object(S.jsxs)("tr",{"data-cy":"todo",className:t.id===(null===c||void 0===c?void 0:c.id)?"has-background-info-light":"",children:[Object(S.jsx)("td",{className:"is-vcentered",children:t.id}),Object(S.jsx)("td",{className:"is-vcentered",children:t.completed&&Object(S.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(S.jsx)("i",{className:"fas fa-check"})})}),Object(S.jsx)("td",{className:"is-vcentered is-expanded",children:Object(S.jsx)("p",{className:C()({"has-text-danger":!t.completed,"has-text-success":t.completed}),children:t.title})}),Object(S.jsx)("td",{className:"has-text-right is-vcentered",children:Object(S.jsx)("button",{"data-cy":"selectButton",className:"button","aria-label":"Select todo button",type:"button",onClick:function(){return function(t){e(d(t))}(t)},children:Object(S.jsx)("span",{className:"icon",children:Object(S.jsx)("i",{className:"far fa-eye"})})})})]},t.id)}))})]})},M=function(){var e=k(),t=A((function(e){return e.filter.status})),c=A((function(e){return e.filter.query})),a=function(t){e(O(t))};return Object(S.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(S.jsx)("p",{className:"control",children:Object(S.jsx)("span",{className:"select",children:Object(S.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(t){return function(t){switch(t){case n.ACTIVE:return e(f(n.ACTIVE));case n.COMPLETED:return e(f(n.COMPLETED));case n.ALL:default:return e(f(n.ALL))}}(t.target.value)},children:[Object(S.jsx)("option",{value:n.ALL,children:"All"}),Object(S.jsx)("option",{value:n.ACTIVE,children:"Active"}),Object(S.jsx)("option",{value:n.COMPLETED,children:"Completed"})]})})}),Object(S.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(S.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(e){return a(e.target.value)}}),Object(S.jsx)("span",{className:"icon is-left",children:Object(S.jsx)("i",{className:"fas fa-magnifying-glass"})}),c&&Object(S.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(S.jsx)("button",{"data-cy":"clearSearchButton",type:"button","aria-label":"Clear search",className:"delete",onClick:function(){return a("")}})})]})]})};function I(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var P=function(){return I("/todos")},V=(c(26),function(){return Object(S.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(S.jsx)("div",{className:"Loader__content"})})}),R=function(){var e=k(),t=A((function(e){return e.currentTodo})),c=Object(L.useState)(null),n=Object(g.a)(c,2),a=n[0],s=n[1],r=Object(L.useState)(!0),i=Object(g.a)(r,2),l=i[0],o=i[1],d=function(){var e=Object(N.a)(E.a.mark((function e(t){var c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I("/users/".concat(t));case 3:c=e.sent,s(c),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s(null);case 10:return e.prev=10,o(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(L.useEffect)((function(){t&&d(t.userId)}),[t]),Object(S.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(S.jsx)("div",{className:"modal-background"}),l?Object(S.jsx)(V,{}):Object(S.jsxs)("div",{className:"modal-card",children:[Object(S.jsxs)("header",{className:"modal-card-head",children:[Object(S.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(S.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close","aria-label":"modal-close",onClick:function(){return e(u())}})]}),Object(S.jsxs)("div",{className:"modal-card-body",children:[Object(S.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(S.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(S.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(S.jsx)("strong",{className:"has-text-danger",children:"Planned"}),a&&Object(S.jsxs)(S.Fragment,{children:[" by ",Object(S.jsx)("a",{href:"mailto:".concat(a.email),children:a.name})]})]})]})]})]})},_=function(){var e=Object(r.b)(),t=A((function(e){return e.currentTodo})),c=Object(L.useState)(!1),n=Object(g.a)(c,2),a=n[0],s=n[1];function i(){return(i=Object(N.a)(E.a.mark((function t(){var c;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P();case 3:c=t.sent,e(x(c)),t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(0),new Error;case 10:return t.prev=10,s(!0),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})))).apply(this,arguments)}return Object(L.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:"section",children:Object(S.jsx)("div",{className:"container",children:Object(S.jsx)("div",{className:"box",children:a?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("h1",{className:"title",children:"Todos:"}),Object(S.jsx)("div",{className:"block",children:Object(S.jsx)(M,{})}),Object(S.jsx)("div",{className:"block",children:Object(S.jsx)(D,{})})]}):Object(S.jsx)(V,{})})})}),t&&Object(S.jsx)(R,{})]})},q=function(){return Object(S.jsx)(r.a,{store:y,children:Object(S.jsx)(_,{})})};s.a.render(Object(S.jsx)(q,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.71608ff0.chunk.js.map