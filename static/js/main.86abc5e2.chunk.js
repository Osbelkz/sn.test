(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,n){e.exports=n(203)},102:function(e,t,n){},15:function(e,t,n){e.exports={pagination:"Pagination_pagination__axw63",pagination__pages:"Pagination_pagination__pages__1AjSN",pagination__btn:"Pagination_pagination__btn__1tOGL",pagination__btn_active:"Pagination_pagination__btn_active__yBZ7o",pagination__space:"Pagination_pagination__space__2AOaO"}},19:function(e,t,n){e.exports={loginContainer:"Login_loginContainer__2XEeo",loginWrapper:"Login_loginWrapper__2N1X_",loginForm:"Login_loginForm__1OCug",loginForm__button:"Login_loginForm__button__3oojF",loginForm__field:"Login_loginForm__field__2jphf",loginForm__rememberMe:"Login_loginForm__rememberMe__2RAMu",formSummaryError:"Login_formSummaryError__7uTS4"}},198:function(e,t,n){},203:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);n(102),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o,i=n(12),c=n(4),u=n(1),s=n(7),l=n(22),_={posts:[{id:Object(s.uuid)(),message:"It's my first post",likeCounter:333},{id:Object(s.uuid)(),message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",likeCounter:356}],profile:null,status:"",updateProfileTextError:""},m=n(72),d={dialogs:[{id:Object(s.uuid)(),name:"Diko"},{id:Object(s.uuid)(),name:"Almaz"},{id:Object(s.uuid)(),name:"Erzhan"},{id:Object(s.uuid)(),name:"Banzai"}],messages:[{id:Object(s.uuid)(),message:"Hi"},{id:Object(s.uuid)(),message:"How are you l"},{id:Object(s.uuid)(),message:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took "},{id:Object(s.uuid)(),message:"Yo"}]},p=n(2),f=n.n(p),E=n(5),g=n(8);!function(e){e.FOLLOW="Users/FOLLOW",e.UNFOLLOW="Users/UNFOLLOW",e.SET_USERS="Users/SET_USERS",e.SET_CURRENT_PAGE="Users/SET_CURRENT_PAGE",e.SET_TOTAL_COUNT="Users/SET_TOTAL_COUNT",e.TOGGLE_IS_FETCHING="Users/TOGGLE_IS_FETCHING",e.TOGGLE_IS_FOLLOWING_PROGRESS="Users/TOGGLE_IS_FOLLOWING_PROGRESS"}(o||(o={}));var b,v=function(e){return function(t){return{type:e,payload:t}}},O=v(o.FOLLOW),h=v(o.UNFOLLOW),S=v(o.SET_USERS),T=v(o.SET_CURRENT_PAGE),w=v(o.SET_TOTAL_COUNT),C=v(o.TOGGLE_IS_FETCHING),j=v(o.TOGGLE_IS_FOLLOWING_PROGRESS),P=function(e,t){return function(){var n=Object(E.a)(f.a.mark((function n(a){var r;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(C({isFetching:!0})),a(T({currentPage:e})),n.next=4,g.e.getUsers(e,t);case 4:r=n.sent,a(C({isFetching:!1})),a(S({users:r.items})),a(w({totalUsersCount:r.totalCount}));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},U=function(){var e=Object(E.a)(f.a.mark((function e(t,n,a,r){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(j({isFetching:!0,userId:n})),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&t(r({userId:n})),t(j({isFetching:!1,userId:n}));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),N=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(u.a)(Object(u.a)({},e),a):e}))},I={users:[],pageSize:10,totalUsersCount:0,currentPage:2,isFetching:!0,followingInProgress:[]};!function(e){e.SET_AUTH_USER_DATA="Auth/SET_AUTH_USER_DATA",e.GET_CAPTCHA_URL_SUCCESS="Auth/GET_CAPTCHA_URL_SUCCESS",e.SET_AUTH_ERROR_TEXT="Auth/SET_AUTH_ERROR_TEXT"}(b||(b={}));var L,y=function(e){return function(t){return{type:e,payload:t}}},A=y(b.SET_AUTH_USER_DATA),R=y(b.GET_CAPTCHA_URL_SUCCESS),F=y(b.SET_AUTH_ERROR_TEXT),k=function(){return function(){var e=Object(E.a)(f.a.mark((function e(t){var n,a,r,o,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.b.getAuthUserData();case 2:n=e.sent,a=n.data,r=a.email,o=a.id,i=a.login,n.resultCode===g.a.Success&&t(A({email:r,id:o,login:i,isAuth:!0}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(){return function(){var e=Object(E.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.d.getCaptchUrl();case 2:n=e.sent,t(R({captchaUrl:n.data.url}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D={id:null,login:null,email:null,isAuth:!1,captchaUrl:null,error:""},G=n(36),H=n(206);!function(e){e.SET_INITIALIZED_SUCCESS="App/SET_INITIALIZED_SUCCESS"}(L||(L={}));var W=function(){return{type:L.SET_INITIALIZED_SUCCESS}},M={initialized:!1},z=n(98),B=Object(i.c)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.a.ADD_POST:return Object(u.a)(Object(u.a)({},e),{},{posts:[Object(u.a)(Object(u.a)({id:Object(s.uuid)()},t.payload),{},{likeCounter:0})].concat(Object(c.a)(e.posts))});case l.a.ADD_LIKE:return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.payload.postId?Object(u.a)(Object(u.a)({},e),{},{likeCounter:e.likeCounter+1}):e}))});case l.a.DELETE_POST:return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.payload.postId}))});case l.a.SET_USER_PROFILE:case l.a.SET_USER_STATUS:return Object(u.a)(Object(u.a)({},e),t.payload);case l.a.UPDATE_PROFILE:return Object(u.a)(Object(u.a)({},e),{},{profile:Object(u.a)(Object(u.a)({},e.profile),t.payload)});case l.a.SET_USER_PHOTO:return Object(u.a)(Object(u.a)({},e),{},{profile:Object(u.a)(Object(u.a)({},e.profile),{},{photos:t.payload})});default:return e}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.a.ADD_MESSAGE:return Object(u.a)(Object(u.a)({},e),{},{messages:[].concat(Object(c.a)(e.messages),[Object(u.a)({id:Object(s.uuid)()},t.payload)])});default:return e}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.FOLLOW:return Object(u.a)(Object(u.a)({},e),{},{users:N(e.users,t.payload.userId,"id",{followed:!0})});case o.UNFOLLOW:return Object(u.a)(Object(u.a)({},e),{},{users:N(e.users,t.payload.userId,"id",{followed:!1})});case o.SET_USERS:return Object(u.a)(Object(u.a)({},e),{},{users:Object(c.a)(t.payload.users)});case o.SET_CURRENT_PAGE:case o.SET_TOTAL_COUNT:case o.TOGGLE_IS_FETCHING:return Object(u.a)(Object(u.a)({},e),t.payload);case o.TOGGLE_IS_FOLLOWING_PROGRESS:return Object(u.a)(Object(u.a)({},e),{},{followingInProgress:t.payload.isFetching?[].concat(Object(c.a)(e.followingInProgress),[t.payload.userId]):e.followingInProgress.filter((function(e){return e!==t.payload.userId}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.SET_AUTH_USER_DATA:case b.GET_CAPTCHA_URL_SUCCESS:case b.SET_AUTH_ERROR_TEXT:return Object(u.a)(Object(u.a)({},e),t.payload);default:return e}},form:H.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L.SET_INITIALIZED_SUCCESS:return Object(u.a)(Object(u.a)({},e),{},{initialized:!0});default:return e}}}),X=Object(z.a)({reducer:B,middleware:function(e){return e().prepend(G.a)}}),q=X;window.store=X;var Z=n(46),K=n.n(Z),Y=n(18),V=(n(198),n(6));var J=function(){return r.a.createElement("div",null,"News")};var $=function(){return r.a.createElement("div",null,"Music")},Q=n(30),ee=n.n(Q),te=n(44);var ne=function(){return r.a.createElement(te.a,null,r.a.createElement("div",{className:ee.a.settings},"Settings",r.a.createElement("div",{className:ee.a.block},r.a.createElement("div",{className:ee.a.block__row},r.a.createElement("div",{className:ee.a.block__element}),r.a.createElement("div",{className:ee.a.block__content})))))},ae=n(9),re=n(50),oe=n.n(re),ie=n(29),ce=n(15),ue=n.n(ce),se=function(e){var t=e.currentPage,n=e.itemsOnPage,a=e.totalItems,o=e.changePageNumber,i=Math.ceil(a/n),c=t-2,u=t+2,s=[];c<=0&&(c=1),u>=i&&(u=i);for(var l=c;l<=u;l++)s.push(l);return r.a.createElement("div",{className:ue.a.pagination},r.a.createElement("button",{className:ue.a.pagination__btn,disabled:1===t,onClick:function(){t>1&&o(t-1)}},"\xab"),r.a.createElement("div",{className:ue.a.pagination__pages},t>3&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"".concat(ue.a.pagination__btn," ").concat(1===t?ue.a.pagination__btn_active:""),onClick:function(){return o(1)}},1),r.a.createElement("div",{className:ue.a.pagination__space},"...")),s.map((function(e){return r.a.createElement("button",{key:e,className:"".concat(ue.a.pagination__btn," ").concat(e===t?ue.a.pagination__btn_active:""),onClick:function(){return o(e)}},e)})),t<i-4&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:ue.a.pagination__space},"..."),r.a.createElement("button",{className:"".concat(ue.a.pagination__btn," ").concat(i===t?ue.a.pagination__btn_active:""),onClick:function(){return o(i)}},i))),r.a.createElement("button",{className:ue.a.pagination__btn,disabled:t===i,onClick:function(){t<i&&o(t+1)}},"\xbb"))},le=n(24),_e=n.n(le),me=n(83),de=n.n(me),pe=function(e){var t=e.userData,n=e.followingInProgress,a=e.follow,o=e.unfollow;return r.a.createElement("div",{className:_e.a.userCard,key:t.id},r.a.createElement("div",{className:_e.a.userCard__authorPhoto},r.a.createElement(Y.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!==t.photos.small?t.photos.small:de.a,alt:""})),r.a.createElement("div",null,t.followed?r.a.createElement("button",{className:_e.a.followBtn,disabled:n.some((function(e){return e===t.id})),onClick:function(){return o(t.id)}},"unfollow"):r.a.createElement("button",{className:_e.a.followBtn,disabled:n.some((function(e){return e===t.id})),onClick:function(){return a(t.id)}},"follow"))),r.a.createElement("div",{className:_e.a.userCard__body},r.a.createElement("div",null,t.id),r.a.createElement("div",{className:_e.a.userCard__body_header},t.name),r.a.createElement("div",{className:_e.a.userCard__body_text},t.status)))},fe=function(e){var t=e.unfollow,n=e.follow,a=e.followingInProgress,o=e.onPageNumberChanged,i=e.pageSize,c=e.totalUsersCount,u=e.currentPage,s=e.isFetching,l=e.users;return r.a.createElement(te.a,null,r.a.createElement("div",{className:oe.a.usersPage},r.a.createElement("div",{className:oe.a.pageButton},r.a.createElement(se,{currentPage:u,itemsOnPage:i,totalItems:c,changePageNumber:o})),s?r.a.createElement(ie.a,null):r.a.createElement("div",null,l.map((function(e){return r.a.createElement(pe,{userData:e,key:e.id,follow:n,unfollow:t,followingInProgress:a})})),r.a.createElement("div",{className:oe.a.pageButton},r.a.createElement(se,{currentPage:u,itemsOnPage:i,totalItems:c,changePageNumber:o})))))},Ee=function(){var e=Object(ae.b)(),t=Object(ae.c)((function(e){return e.usersPage})),n=t.users,o=t.pageSize,i=t.totalUsersCount,c=t.currentPage,u=t.isFetching,s=t.followingInProgress;Object(a.useEffect)((function(){e(P(c,o))}),[o,c]);var l=Object(a.useCallback)((function(t){e(P(t,o))}),[o]),_=Object(a.useCallback)((function(t){e(function(e){return function(t){U(t,e,g.e.follow.bind(g.e),O)}}(t))}),[]),m=Object(a.useCallback)((function(t){e(function(e){return function(t){U(t,e,g.e.unfollow.bind(g.e),h)}}(t))}),[]);return r.a.createElement(fe,{onPageNumberChanged:l,followingInProgress:s,currentPage:c,isFetching:u,totalUsersCount:i,users:n,pageSize:o,follow:_,unfollow:m})},ge=n(19),be=n.n(ge),ve=n(62),Oe=n(49),he=function(e){var t,n,a,o,i,c,u=Object(ve.a)(),s=u.register,l=u.handleSubmit,_=u.errors,m=l((function(t){var n=t.email,a=t.password,r=t.rememberMe,o=t.captcha;e.onSubmit({email:n,password:a,rememberMe:r,captcha:o})}));return console.log("login form"),r.a.createElement("form",{onSubmit:m,className:be.a.loginForm},r.a.createElement("div",{className:be.a.loginForm__field},r.a.createElement(Oe.a,{name:"email",label:"Login",errorText:null===(t=_.email)||void 0===t?void 0:t.message,errorCondition:!!(null===(n=_.email)||void 0===n?void 0:n.message),ref:s({required:{value:!0,message:"required"},pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"Invalid email"}})})),r.a.createElement("div",{className:be.a.loginForm__field},r.a.createElement(Oe.a,{type:"password",label:"Password",name:"password",errorText:null===(a=_.password)||void 0===a?void 0:a.message,errorCondition:!!(null===(o=_.password)||void 0===o?void 0:o.message),ref:s({required:{value:!0,message:"required"},minLength:{value:7,message:"min length 7"}})})),e.error&&r.a.createElement("div",{className:be.a.formSummaryError},e.error),e.captchaUrl&&r.a.createElement("div",null,r.a.createElement("img",{src:e.captchaUrl,alt:""})),e.captchaUrl&&r.a.createElement("div",null,r.a.createElement(Oe.a,{placeholder:"Type captcha",ref:s({required:{value:!0,message:"required"}}),errorText:null===(i=_.captcha)||void 0===i?void 0:i.message,errorCondition:!!(null===(c=_.captcha)||void 0===c?void 0:c.message),name:"captcha"})),r.a.createElement("div",{className:be.a.loginForm__rememberMe},r.a.createElement("input",{type:"checkbox",name:"rememberMe",ref:s}),r.a.createElement("label",{htmlFor:"rememberMe"},"remember me")),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:be.a.loginForm__button},"Login")))},Se=function(){var e=Object(ae.b)(),t=Object(ae.c)((function(e){return e.auth})),n=t.isAuth,o=t.captchaUrl,i=t.error,c=Object(a.useCallback)((function(t){e(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3?arguments[3]:void 0;return function(){var r=Object(E.a)(f.a.mark((function r(o){var i,c;return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o(F({error:""})),r.next=3,g.b.login(e,t,n,a);case 3:(i=r.sent).resultCode===g.a.Success?o(k()):(10===i.resultCode&&o(x()),c=i.messages.length>0?i.messages[0]:"Some error",o(F({error:c})));case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}(t.email,t.password,t.rememberMe,t.captcha))}),[]);return n?r.a.createElement(V.a,{to:"/profile"}):r.a.createElement("div",{className:be.a.loginContainer},r.a.createElement("div",{className:be.a.loginWrapper},r.a.createElement("h2",null,"Login"),r.a.createElement(he,{error:i,captchaUrl:o,onSubmit:c})))},Te=n(25),we=n.n(Te),Ce=n(60),je=n.n(Ce),Pe=n(48),Ue=n(61),Ne=n.n(Ue),Ie=n(90),Le=n.n(Ie),ye=n(91),Ae=n.n(ye),Re=function(e){var t=e.btnType,n=Object(Pe.a)(e,["btnType"]);return r.a.createElement("button",Object.assign({className:Ne.a.button},n),r.a.createElement("img",{className:Ne.a.button__img,src:"login"===t?Le.a:Ae.a,alt:""}))},Fe=function(){var e=Object(ae.b)(),t=Object(ae.c)((function(e){return e.auth})),n=t.isAuth,o=t.login,i=Object(a.useCallback)((function(){e(function(){var e=Object(E.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.b.logout();case 2:e.sent.resultCode===g.a.Success&&t(A({isAuth:!1,login:null,email:null,id:null,captchaUrl:null}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]);return r.a.createElement("div",{className:je.a.login__info},n?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,o),r.a.createElement(Re,{btnType:"logout",onClick:i},"Logout")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Login"),r.a.createElement(Re,{btnType:"login"},r.a.createElement(Y.b,{className:je.a.login,to:"/login"}))))},ke=function(e){var t=e.navItems;return r.a.createElement("nav",{className:we.a.nav},r.a.createElement(Fe,null),r.a.createElement("div",{className:we.a.nav__items},t.map((function(e){return r.a.createElement(Y.b,{to:e.pathTo,key:e.id,className:we.a.item,activeClassName:we.a.active},r.a.createElement("div",{className:we.a.item__icon},r.a.createElement("img",{src:e.icon,alt:""})),r.a.createElement("div",{className:we.a.item__name},e.navName))}))))},xe=n(92),De=n.n(xe),Ge=n(93),He=n.n(Ge),We=n(94),Me=n.n(We),ze=n(95),Be=n.n(ze),Xe=n(96),qe=n.n(Xe),Ze=n(97),Ke=n.n(Ze),Ye=[{id:Object(s.uuid)(),pathTo:"/profile",icon:De.a,navName:"PROFILE"},{id:Object(s.uuid)(),pathTo:"/messages",icon:He.a,navName:"MESSAGES"},{id:Object(s.uuid)(),pathTo:"/users",icon:Me.a,navName:"USERS"},{id:Object(s.uuid)(),pathTo:"/news",icon:Be.a,navName:"NEWS"},{id:Object(s.uuid)(),pathTo:"/music",icon:qe.a,navName:"MUSIC"},{id:Object(s.uuid)(),pathTo:"/settings",icon:Ke.a,navName:"SETTINGS"}],Ve=function(){return r.a.createElement(ke,{navItems:Ye})},Je=function(e){var t=e.children;return Object(ae.c)((function(e){return e.auth.isAuth}))?r.a.createElement(r.a.Fragment,null,t):r.a.createElement(V.a,{to:"/login"})},$e=r.a.lazy((function(){return n.e(4).then(n.bind(null,232))})),Qe=r.a.lazy((function(){return Promise.all([n.e(5),n.e(3)]).then(n.bind(null,231))})),et=function(){var e=Object(ae.b)(),t=Object(ae.c)((function(e){return e.app.initialized}));Object(a.useEffect)((function(){return e((function(e){var t=e(k());Promise.all([t]).then((function(){e(W())}))})),window.addEventListener("unhandledrejection",n),function(){window.removeEventListener("unhandledrejection",n)}}));var n=function(e){alert("some error occured"),console.error(e)};return t?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(Ve,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(V.d,null,r.a.createElement(V.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(ie.a,null)},r.a.createElement(Je,null,r.a.createElement(Qe,null)))}}),r.a.createElement(V.b,{path:"/messages",render:function(){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(ie.a,null)},r.a.createElement(Je,null,r.a.createElement($e,null)))}}),r.a.createElement(V.b,{path:"/users",component:Ee}),r.a.createElement(V.b,{path:"/news",component:J}),r.a.createElement(V.b,{path:"/music",component:$}),r.a.createElement(V.b,{path:"/settings",component:ne}),r.a.createElement(V.b,{path:"/login",component:Se}),r.a.createElement(V.b,{path:"/",render:function(){return r.a.createElement(V.a,{to:"profile"})}})))):r.a.createElement(ie.a,null)};K.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y.a,null,r.a.createElement(ae.a,{store:q},r.a.createElement(et,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},22:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return _})),n.d(t,"f",(function(){return E})),n.d(t,"e",(function(){return g})),n.d(t,"i",(function(){return b})),n.d(t,"g",(function(){return v})),n.d(t,"h",(function(){return O}));var a,r=n(2),o=n.n(r),i=n(5),c=n(8);!function(e){e.ADD_POST="Profile/ADD-POST",e.ADD_LIKE="Profile/ADD-LIKE",e.DELETE_POST="Profile/DELETE_POST",e.SET_USER_PROFILE="Profile/SET_USER_PROFILE",e.SET_USER_STATUS="Profile/SET_USER_STATUS",e.SET_USER_PHOTO="Profile/SET_USER_PHOTO",e.UPDATE_PROFILE="Profile/UPDATE_PROFILE"}(a||(a={}));var u=function(e){return function(t){return{type:e,payload:t}}},s=u(a.ADD_POST),l=u(a.ADD_LIKE),_=u(a.DELETE_POST),m=u(a.SET_USER_PROFILE),d=u(a.SET_USER_STATUS),p=u(a.SET_USER_PHOTO),f=u(a.UPDATE_PROFILE),E=function(e){return function(){var t=Object(i.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.c.getProfile(e);case 2:a=t.sent,n(m({profile:a}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(i.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.c.getStatus(e);case 2:a=t.sent,n(d({status:a}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(i.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.c.updateStatus(e);case 2:0===t.sent.resultCode&&n(d({status:e}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(i.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.c.savePhoto(e);case 2:0===(a=t.sent).resultCode&&n(p(a.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(i.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.c.updateProfile(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},24:function(e,t,n){e.exports={userCard:"User_userCard__1UrXa",userCard__authorPhoto:"User_userCard__authorPhoto__3XZ-U",userCard__body_header:"User_userCard__body_header__2uRYE",userCard__body_text:"User_userCard__body_text__1xpkd",followBtn:"User_followBtn__Wt2fL"}},25:function(e,t,n){e.exports={nav:"Nav_nav__gGHbY",nav__items:"Nav_nav__items__19iZi",item:"Nav_item__1iOrL",active:"Nav_active__3HRda",item__icon:"Nav_item__icon__17QVF",item__name:"Nav_item__name__5TzBU"}},29:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a),o=n(89),i=n.n(o);function c(){return r.a.createElement("div",{className:i.a.ldsFacebook},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}},30:function(e,t,n){e.exports={block:"Settings_block__1gfy1",block__row:"Settings_block__row__3hXC9",block__element:"Settings_block__element__2d0ze",block__content:"Settings_block__content__1y-rT"}},31:function(e,t,n){e.exports={input:"FormInput_input__IFXDs",input__label:"FormInput_input__label__1RUpY",input__elem:"FormInput_input__elem__3J9Kq",input__error:"FormInput_input__error__5yCmM",inputs__error_text:"FormInput_inputs__error_text__1d2rs"}},44:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(88),i=n.n(o);t.a=function(e){return r.a.createElement("div",{className:i.a.wrapper},e.children)}},49:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(48),r=n(0),o=n.n(r),i=n(31),c=n.n(i),u=o.a.memo(o.a.forwardRef((function(e,t){var n=e.label,r=e.errorCondition,i=e.errorText,u=Object(a.a)(e,["label","errorCondition","errorText"]);return o.a.createElement("div",{className:c.a.input},o.a.createElement("p",{className:c.a.input__label},n),o.a.createElement("input",Object.assign({className:"".concat(c.a.input__elem," ").concat(r?c.a.input__error:""),ref:t},u)),r?o.a.createElement("div",{className:c.a.inputs__error_text},i):null)})))},50:function(e,t,n){e.exports={usersPage:"Users_usersPage__1fI9W"}},60:function(e,t,n){e.exports={login__info:"LoginNav_login__info__1Y7tk"}},61:function(e,t,n){e.exports={button:"LogoutButton_button__2_TrE",button__img:"LogoutButton_button__img__IVXVe"}},72:function(e,t,n){"use strict";var a;n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o})),function(e){e.ADD_MESSAGE="Dialogs/ADD-MESSAGE"}(a||(a={}));var r,o=(r=a.ADD_MESSAGE,function(e){return{type:r,payload:e}})},8:function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return a}));var a,r=n(84),o=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"api-key":"2dece0c4-7aed-430e-aeba-9f10430f969a"}}),i={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return o.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollow:function(e){return o.delete("follow/".concat(e))},follow:function(e){return o.post("follow/".concat(e))}},c={getProfile:function(e){return o.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return o.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return o.put("profile/status",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),o.put("profile/photo",t).then((function(e){return e.data}))},updateProfile:function(e){return o.put("profile",e)}},u={getAuthUserData:function(){return o.get("auth/me/").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return o.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a}).then((function(e){return e.data}))},logout:function(){return o.delete("auth/login").then((function(e){return e.data}))}},s={getCaptchUrl:function(){return o.get("security/get-captcha-url")}};!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error",e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(a||(a={}))},83:function(e,t,n){e.exports=n.p+"static/media/userDefaultPhoto.f8a15e74.png"},88:function(e,t,n){e.exports={wrapper:"Wrapper_wrapper__3qo1w"}},89:function(e,t,n){e.exports={ldsFacebook:"Preloader_ldsFacebook__3PKgV"}},90:function(e,t,n){e.exports=n.p+"static/media/File-Import-Outline.f41b3872.svg"},91:function(e,t,n){e.exports=n.p+"static/media/File-Export-Outline.dbbedafc.svg"},92:function(e,t,n){e.exports=n.p+"static/media/Profile-Outline.ae74fdec.svg"},93:function(e,t,n){e.exports=n.p+"static/media/Chat-Outline.8256a581.svg"},94:function(e,t,n){e.exports=n.p+"static/media/Profile-GroupFriend-Outline.ef43f0c0.svg"},95:function(e,t,n){e.exports=n.p+"static/media/Documents-Outline.9384302f.svg"},96:function(e,t,n){e.exports=n.p+"static/media/Play-Outline.837b9fa1.svg"},97:function(e,t,n){e.exports=n.p+"static/media/Setting-Outline.b175e07d.svg"}},[[100,1,2]]]);
//# sourceMappingURL=main.86abc5e2.chunk.js.map