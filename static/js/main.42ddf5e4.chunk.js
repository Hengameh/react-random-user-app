(this["webpackJsonpuser-list"]=this["webpackJsonpuser-list"]||[]).push([[0],{41:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(2),c=s.n(n),r=s(13),i=s.n(r),o=s(14),l=s(15),u=s(3),d=s(18),h=s(17),m=s(16),j=s.n(m);s(41);var g=function(e){var t=e.user,s=e.onClick;return Object(a.jsxs)("li",{className:"".concat(t.username," user"),children:[Object(a.jsx)("div",{className:"image-container",children:Object(a.jsx)("img",{className:"profile-image shadow",src:t.profileImage,alt:t.lastName})}),Object(a.jsxs)("div",{className:"user-info",children:[Object(a.jsxs)("h3",{className:"user-name",children:["female"===t.gender?Object(a.jsx)("i",{className:"".concat(t.gender," fa fa-female")}):Object(a.jsx)("i",{className:"".concat(t.gender," fa fa-male")}),t.name," ",t.lastName," "]}),Object(a.jsx)("i",{className:"email",children:t.email}),Object(a.jsxs)("span",{className:"location",children:[t.city,", ",t.state,", ",t.country," ",Object(a.jsx)("span",{style:{color:"red"},children:"US"===t.nationality?Object(a.jsx)("img",{className:"country-flag",src:"http://www.geonames.org/flags/x/us.gif",alt:"nationality - US Flag"}):""})]})]}),Object(a.jsxs)("button",{className:"delete-btn fa fa-trash",onClick:function(){s(t.id)},children:[" ",Object(a.jsx)("span",{className:"content",children:"Delete"})]}),Object(a.jsx)("hr",{className:"horizental-line"})]},t.id)};s(42);var f=function(){return Object(a.jsxs)("div",{id:"Footer",children:["Background Photo by"," ",Object(a.jsx)("a",{href:"https://unsplash.com/@augustinewong?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Augustine Wong"})," ","on"," ",Object(a.jsx)("a",{href:"https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]})},b=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={users:[],isLoading:!0,errorMessage:""},a.handleClickDelete=a.handleClickDelete.bind(Object(u.a)(a)),a}return Object(l.a)(s,[{key:"handleClickDelete",value:function(e){var t=this.state.users.filter((function(t){return t.id!==e}));this.setState({users:t})}},{key:"componentDidMount",value:function(){this.getUserList()}},{key:"getUserList",value:function(){var e=this;j.a.get("https://randomuser.me/api/?results=25").then((function(e){return e.data.results.map((function(e){return{id:"".concat(e.login.uuid),name:"".concat(e.name.first),lastName:"".concat(e.name.last),gender:"".concat(e.gender),username:"".concat(e.login.username),country:"".concat(e.location.country),nationality:"".concat(e.nat),city:"".concat(e.location.city),state:"".concat(e.location.state),email:"".concat(e.email),profileImage:"".concat(e.picture.large)}}))})).then((function(t){e.setState({users:t,isLoading:!1})})).catch((function(){e.setState({isLoading:!1,errorMessage:"Encountered Server Error. Please refresh your page..."})}))}},{key:"render",value:function(){var e=this,t=this.state,s=t.isLoading,n=t.users;return Object(a.jsxs)("div",{className:"user-list-app",children:[Object(a.jsxs)("header",{children:[Object(a.jsx)("h1",{children:"Manage your list of random users"}),Object(a.jsxs)("h2",{children:["There are ",n.length," users available..."]}),Object(a.jsxs)("p",{className:"paragraph",children:["Please feel free to delete any user you want from the list below.",Object(a.jsx)("br",{}),"Then refresh the page to start over."]})]}),Object(a.jsx)("ul",{className:"grid-container fade-in",children:s?Object(a.jsxs)("div",{className:"loading message",children:[Object(a.jsx)("div",{className:"spinning-circle"}),"Please wait, the page still loading..."]}):n.map((function(t){return Object(a.jsx)(g,{user:t,onClick:e.handleClickDelete},t.id)}))}),this.state.errorMessage&&Object(a.jsxs)("div",{className:"error message",children:[Object(a.jsx)("div",{className:"spinning-circle"}),"The server encounter an issue and is unable to complete your request."]}),!s&&0===this.state.users.length&&Object(a.jsx)("div",{className:"list-empty message",children:"Your list is empty. Please refresh..."}),Object(a.jsx)(f,{})]})}}]),s}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.42ddf5e4.chunk.js.map