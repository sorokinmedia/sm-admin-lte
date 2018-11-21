"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react"),React__default=_interopDefault(React),reactRouterDom=require("react-router-dom"),lodash=require("lodash");function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var ReactPropTypesSecret="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ReactPropTypesSecret_1=ReactPropTypesSecret;function emptyFunction(){}var factoryWithThrowingShims=function(){function e(e,t,a,r,n,l){if(l!==ReactPropTypesSecret_1){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}var a={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return a.checkPropTypes=emptyFunction,a.PropTypes=a},propTypes=createCommonjsModule(function(e){e.exports=factoryWithThrowingShims()});function Footer(e){return e.isShow?React__default.createElement("footer",{className:"main-footer"},e.children):null}function HeaderAuth(e){return React__default.createElement("ul",{className:"nav navbar-nav"},React__default.createElement("li",null,React__default.createElement(reactRouterDom.Link,{to:"/auth/login"},"Войти")),React__default.createElement("li",null,React__default.createElement(reactRouterDom.Link,{to:"/auth/signup"},"Регистрация")))}function HeaderDropdown(e){var t=e.items,a=e.title,r=e.icon,n=e.name,l=e.count,c=e.countIcon;return React__default.createElement("li",{className:"notifications-menu dropdown"},React__default.createElement("a",{href:"#",className:"dropdown-toggle","data-toggle":"dropdown",id:n},React__default.createElement("i",{className:r,title:a}),void 0!==l&&React__default.createElement("span",{className:c},l)),React__default.createElement("ul",{className:"dropdown-menu","aria-labelledby":n},React__default.createElement("li",null,React__default.createElement("ul",{className:"menu"},t.map(function(e){var t=e.href,a=e.title,r=e.icon;return React__default.createElement("li",{key:t},React__default.createElement(reactRouterDom.Link,{to:t},r&&React__default.createElement("i",{className:r}),a))})))))}function HeaderUserProfile(e){var t=e.userName,a=e.avatar;return React__default.createElement("li",{className:"user user-menu dropdown"},React__default.createElement("a",{href:"#",className:"dropdown-toggle","data-toggle":"dropdown"},React__default.createElement("span",{className:"hidden-xs"},t),React__default.createElement("img",{className:"user-image",src:a,alt:t})),React__default.createElement("ul",{className:"dropdown-menu"},React__default.createElement("li",{className:"user-header dropdown-header"},React__default.createElement("img",{className:"image-circle",src:a,alt:t}),React__default.createElement("p",null,t)),React__default.createElement("li",{className:"user-footer dropdown-header"},React__default.createElement("div",{className:"pull-left"},React__default.createElement(reactRouterDom.Link,{className:"btn btn-default btn-flat",to:"/user/profile/index"},"Профиль")),React__default.createElement("div",{className:"pull-right"},React__default.createElement("a",{className:"btn btn-default btn-flat",href:"/user/default/logout",onClick:e.handleLogout},"Выйти")))))}Footer.propTypes={children:propTypes.node,isShow:propTypes.bool},HeaderDropdown.propTypes={items:propTypes.array.isRequired,title:propTypes.string,icon:propTypes.string.isRequired,name:propTypes.string,count:propTypes.number,countIcon:propTypes.string},HeaderUserProfile.propTypes={handleLogout:propTypes.func,userName:propTypes.string,avatar:propTypes.string};var classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},createClass=function(){function r(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,a){return t&&r(e.prototype,t),a&&r(e,a),e}}(),_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},toConsumableArray=function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)},ProjectSearch=function(e){function t(){classCallCheck(this,t);var a=possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));a.searchHandler=function(e){var t=e.target.elements.input.value;e.preventDefault(),a.setState({searchRequested:!0,projectId:t}),a.props.searchResult(t)};var e={searchRequested:!(a.hideMessages=function(){a.setState({noResult:!1})}),projectId:null,redirect:null};return a.state=_extends({},e),a.initialState=_extends({},e),a}return inherits(t,e),createClass(t,[{key:"componentDidMount",value:function(){document.addEventListener("click",this.hideMessages,!1)}},{key:"componentWillReceiveProps",value:function(e){var t=e.searchProject,a=this.state,r=a.projectId;a.searchRequested&&void 0!==t.data&&(this.setState({searchRequested:!1,projectId:null}),t.data&&this.setState({redirect:"/project/project/view?id="+r}))}},{key:"componentDidUpdate",value:function(){var e=this.state.redirect,t=location;!t.pathname+t.search!==e&&e&&this.setState(_extends({},this.initialState))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.hideMessages,!1)}},{key:"render",value:function(){var e=this.state.redirect,t=this.props.searchProject;return React__default.createElement("div",{className:"header-search"},e?React__default.createElement(reactRouterDom.Redirect,{to:e}):"",React__default.createElement("form",{onSubmit:this.searchHandler},React__default.createElement("input",{className:"form-control",name:"input",placeholder:"Найти проект по ID"})),t.message&&100===t.serverStatus?React__default.createElement("div",{className:"header-search-message"},t.message):"")}}]),t}(React.Component);ProjectSearch.propTypes={isAuthorized:propTypes.bool,searchResult:propTypes.func,searchProject:propTypes.object};var Header=function(e){function a(e){classCallCheck(this,a);var t=possibleConstructorReturn(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.handleLogout=function(e){e.preventDefault(),t.props.logout()},t.renderHeaderItems=function(e){return e.map(function(e){var t=e.name,a=e.render,r=e.className,n=e.dropdown;return n?React__default.createElement(HeaderDropdown,_extends({},n,{key:t})):React__default.createElement("li",{key:t,className:r},a())})},t.state={},t}return inherits(a,e),createClass(a,[{key:"render",value:function(){var e=this.props.setup,t=e.isShow,a=(e.site,e.search),r=e.dropdown,n=e.logo,l=e.logoMini,c=e.userProfileLink;if(!t)return null;var o=this.props,s=o.menuItemsAfter,u=void 0===s?[]:s,i=o.menuItemsBefore,p=void 0===i?[]:i,d=o.userName,m=o.avatar,f=o.className,_=o.isAuthorized;return React__default.createElement("header",{className:"main-header "+f},React__default.createElement(reactRouterDom.Link,{to:"/",className:"logo"},React__default.createElement("span",{className:"logo-mini"},React__default.createElement("img",{src:l,alt:"Cabinet"})),React__default.createElement("span",{className:"logo-lg"},React__default.createElement("img",{src:n,alt:"Cabinet",id:"logo"}))),React__default.createElement("nav",{className:"navbar navbar-static-top"},React__default.createElement("a",{href:"#",className:"sidebar-toggle","data-toggle":"push-menu",role:"button"},React__default.createElement("span",{className:"sr-only"},"Toggle navigation")),_&&a?React__default.createElement(ProjectSearch,{searchResult:this.props.searchResult,searchProject:this.props.searchProject}):"",React__default.createElement("div",{className:"navbar-custom-menu pull-right"},_?React__default.createElement("ul",{className:"nav navbar-nav"},this.renderHeaderItems(p),React__default.createElement(HeaderUserProfile,{userName:d,avatar:m,handleLogout:this.handleLogout,userProfileLink:c}),r&&this.renderHeaderItems(u)):React__default.createElement(HeaderAuth,null))))}}]),a}(React.Component);Header.propTypes={menuItemsAfter:propTypes.array,menuItemsBefore:propTypes.array,setup:propTypes.object,searchResult:propTypes.func,logout:propTypes.func,searchProject:propTypes.object,userName:propTypes.string,avatar:propTypes.string,className:propTypes.string,isAuthorized:propTypes.bool};var iconLink=function(e,t){var a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return React__default.createElement("a",_extends({href:e},a),React__default.createElement("i",{className:t}))},LinkRouter=function(e,t){var a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return React__default.createElement(reactRouterDom.Link,_extends({to:e},a),React__default.createElement("i",{className:t}))};function adminItems(e){return[{name:"userlist",render:function(){return iconLink("/user/default/index","fa fa-users text-black")}},{name:"backend",render:function(){return iconLink("course"!==e?"http://backend.sorokin.kosmoz.online":"","fa fa-cogs text-black")}}]}function supportItems(){return[{name:"billing",render:function(){return LinkRouter("/billing/default/index#orders","fa fa-dollar")}}]}function getMenuItemsBefore(e){var t=e.notifications,a=e.role,r=e.header,n=r.site,l=r.links,c=l.all,o=void 0===c?"/notificator/default/index":c,s=l.setup,u=void 0===s?"/user/profile/notifications":s,i=e.is_support,p="Администратор"===a,d=[{name:"notifications",dropdown:{title:"Непрочитанных уведомлений "+t,icon:"fa fa-bell-o",count:t,countIcon:"label label-warning",items:[{title:"Все уведомления",href:o,icon:"fa fa-envelope-o text-green"},{title:"Настройка уведомлений",href:u,icon:"fa fa-sliders text-green"}],name:"notifications"}},{name:"billing",site:"course",dropdown:{icon:"fa fa-dollar",items:[{title:"Ваш счет",href:"/billing",icon:"fa fa-money text-green"}],name:"billing"}}].filter(function(e){return e.site!==n});return[].concat(toConsumableArray(p?adminItems(n):[]),toConsumableArray(i?supportItems():""),toConsumableArray(d))}function getMenuItemsAfter(){return[{name:"support",dropdown:{title:"Тех. поддержка",icon:"fa fa-question-circle-o",items:[{href:"/user/ticket/index",title:"Мои тикеты"}],name:"support"}},{name:"folders",render:function(){return iconLink("#","fa fa-gears",{"data-toggle":"control-sidebar"})}}]}function getCookie(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0}var menuDecorator=function(a,r){return function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return inherits(t,e),createClass(t,[{key:"render",value:function(){var e=this.props.menus,t=r.menuId;return e.includes(t)?React__default.createElement(a,this.props):null}}]),t}(React__default.Component)};function SidebarLink(e){e.path,e.to;var t=e.className;return React__default.createElement(reactRouterDom.Link,_extends({},e,{className:t}),e.children)}function CourseAdminMenu(e){var t=getCookie("auth_token_main"),a=React__default.createElement("li",null,React__default.createElement(SidebarLink,{to:"/user/default/index",onClick:e.onLink,match:e.match.path},React__default.createElement("i",{className:"fa fa-users text-green"}),React__default.createElement("span",null,"Пользователи")));return React__default.createElement("ul",{className:"sidebar-menu tree"},React__default.createElement("li",{className:"header"},React__default.createElement("span",null,React__default.createElement("span",null,"Админ меню"))),t?"":a,React__default.createElement("li",null,React__default.createElement("a",{href:"https://backend.101kurs.com",target:"_blank",rel:"noopener noreferrer"},React__default.createElement("i",{className:"fa fa-cogs text-green"}),React__default.createElement("span",null,"Бэкенд"))))}SidebarLink.propTypes={className:propTypes.string,to:propTypes.string,path:propTypes.string,children:propTypes.node},CourseAdminMenu.propTypes={isUserViewCourse:propTypes.string,match:propTypes.object,back:propTypes.func,onLink:propTypes.func};var CourseAdminMenu$1=menuDecorator(CourseAdminMenu,{menuId:"admin"});function CourseLearnerMenu(e){return React__default.createElement("ul",{className:"sidebar-menu tree"},React__default.createElement("li",{className:"header"},React__default.createElement("span",null,React__default.createElement("span",null,"Меню ученика "))),React__default.createElement("li",null,React__default.createElement(SidebarLink,{to:"/learner/course/my",onClick:e.onLink,match:e.match.path},React__default.createElement("i",{className:"fa fa-graduation-cap"}),React__default.createElement("span",null,"Мои курсы"),e.courseCount?React__default.createElement("span",{className:"pull-right-container"},React__default.createElement("small",{className:"label pull-right bg-green"},e.myCourseCount)):"")),React__default.createElement("li",null,React__default.createElement(SidebarLink,{to:"/learner/product/index",onClick:e.onLink,match:e.match.path},React__default.createElement("i",{className:"fa fa-book"}),React__default.createElement("span",null,"Все товары"),e.courseCount?React__default.createElement("span",{className:"pull-right-container"},React__default.createElement("small",{className:"label pull-right bg-primary"},e.courseCount)):"")))}CourseLearnerMenu.propTypes={isUserViewCourse:propTypes.bool,match:propTypes.object,myCourseCount:propTypes.number,courseCount:propTypes.number,back:propTypes.func,onLink:propTypes.func};var CourseLearnerMenu$1=menuDecorator(CourseLearnerMenu,{menuId:"learner"});function CourseSupportMenu(e){return React__default.createElement("ul",{className:"sidebar-menu tree"},React__default.createElement("li",{className:"header"},React__default.createElement("span",null,React__default.createElement("span",null,"Саппорт меню"))),React__default.createElement("li",null,React__default.createElement(SidebarLink,{to:"/support/dashboard/",onClick:e.onLink,match:e.match.path},React__default.createElement("i",{className:"fa fa-dashboard text-green"}),React__default.createElement("span",null,"Главный экран"))))}CourseSupportMenu.propTypes={isUserViewCourse:propTypes.bool,match:propTypes.object,back:propTypes.func,onLink:propTypes.func};var CourseSupportMenu$1=menuDecorator(CourseSupportMenu,{menuId:"support"});function CourseMenu(e){e.isUserViewCourse;var t=e.leftMenu,a=e.match,r=e.onLink,n=e.back,l=e.sidebar;return React__default.createElement(React.Fragment,null,React__default.createElement(CourseAdminMenu$1,{menus:t.data.menus,match:a,onLink:r,back:n}),React__default.createElement(CourseSupportMenu$1,{menus:t.data.menus,match:a,onLink:r}),React__default.createElement(CourseLearnerMenu$1,{courseCount:l.courseCount,myCourseCount:l.myCourseCount,menus:t.data.menus,match:a,onLink:r}))}function AdminMenu(e){var t=this,a=getCookie("auth_token_main");return React__default.createElement(React.Fragment,null,a?React__default.createElement("ul",{className:"sidebar-menu tree"},React__default.createElement("li",null,React__default.createElement("a",{className:"hovered",onClick:function(){return t.props.back()}},React__default.createElement("i",{className:"fa fa-undo text-green"}),React__default.createElement("span",null,"Вернуться в основного")))):"",React__default.createElement("ul",{className:"sidebar-menu tree"},React__default.createElement("li",{className:"header"},"Админ меню"),React__default.createElement("li",null,React__default.createElement("a",{href:"https://backend.sorokin.space",target:"_blank",rel:"noopener noreferrer"},React__default.createElement("i",{className:"fa fa-cogs text-green"}),React__default.createElement("span",null,"Бэкенд"))),React__default.createElement("li",null,React__default.createElement(SidebarLink,{to:"/user/default/index",onClick:e.onLink,match:e.match.path},React__default.createElement("i",{className:"fa fa-users text-green"}),React__default.createElement("span",null,"Пользователи")))))}CourseMenu.propTypes={leftMenu:propTypes.object.isRequired,onLink:propTypes.func.isRequired,back:propTypes.func.isRequired,match:propTypes.object.isRequired,isUserViewCourse:propTypes.string,sidebar:propTypes.shape({courseCount:propTypes.number,myCourseCount:propTypes.number})},CourseMenu.defaultProps={},AdminMenu.propTypes={match:propTypes.object,onLink:propTypes.func};var AdminMenu$1=menuDecorator(AdminMenu,{menuId:"admin"});function AnalyticMenu(e){return React__default.createElement("ul",{className:"sidebar-menu tree"},React__default.createElement("li",{className:"header"},"Основное меню"),React__default.createElement("li",null,React__default.createElement(reactRouterDom.NavLink,{to:"/",onClick:e.onLink},React__default.createElement("i",{className:"fa fa-home text-green"}),React__default.createElement("span",{className:"main-link"},"Главная"))),React__default.createElement("li",null,React__default.createElement(reactRouterDom.NavLink,{to:"/sites/site/index",onClick:e.onLink},React__default.createElement("i",{className:"fa fa-sitemap text-green"}),React__default.createElement("span",null,"Рабочие сайты "))),React__default.createElement("li",null,React__default.createElement(reactRouterDom.NavLink,{to:"/project/default/index",onClick:e.onLink},React__default.createElement("i",{className:"fa fa-dashboard text-green"}),React__default.createElement("span",null,"Все проекты"))),React__default.createElement("li",null,React__default.createElement(reactRouterDom.NavLink,{to:"/project/finished",onClick:e.onLink},React__default.createElement("i",{className:"fa fa-flag text-green"}),React__default.createElement("span",null,"Финишированные проекты"))))}AnalyticMenu.propTypes={onLink:propTypes.func};var AnalyticMenu$1=menuDecorator(AnalyticMenu,{menuId:"analytic"});function AnalyticToolsMenu(e){return React__default.createElement("ul",{className:"sidebar-menu tree"},React__default.createElement("li",{className:"header"},"Интсрументы"),React__default.createElement("li",null,React__default.createElement(reactRouterDom.NavLink,{to:"/sites/site/find-semantic-item",onClick:e.onLink},React__default.createElement("i",{className:"fa fa-table text-green"}),React__default.createElement("span",null,"Найти блок семантики"))),React__default.createElement("li",null,React__default.createElement(reactRouterDom.NavLink,{to:"/project/default/find-project",onClick:e.onLink},React__default.createElement("i",{className:"fa fa-product-hunt text-green"}),React__default.createElement("span",null,"Найти проект по WHO"))),React__default.createElement("li",null,React__default.createElement(reactRouterDom.NavLink,{to:"/project/default/find-project-by-name",onClick:e.onLink},React__default.createElement("i",{className:"fa fa-product-hunt text-green"}),React__default.createElement("span",null,"Найти проект по названию"))))}AnalyticToolsMenu.propTypes={onLink:propTypes.func};var AnalyticToolsMenu$1=menuDecorator(AnalyticToolsMenu,{menuId:"analytic_tools"});function ManagerMenu(t){var e=t.sites;return React__default.createElement("ul",{className:"sidebar-menu tree"},React__default.createElement("li",{className:"header"},"Меню руководителя"),React__default.createElement("li",null,React__default.createElement(reactRouterDom.NavLink,{to:"/manager/costs",onClick:t.onLink},React__default.createElement("i",{className:"fa fa-money text-aqua"}),React__default.createElement("span",null,"ЗП аналитики"))),React__default.createElement("li",null,React__default.createElement(reactRouterDom.NavLink,{to:"/manager/project/index",onClick:t.onLink},React__default.createElement("i",{className:"fa fa-line-chart text-green"}),React__default.createElement("span",null,"Общие данные"))),e?React__default.createElement("ul",{className:"sidebar-menu tree"},e.map(function(e){return React__default.createElement("li",{key:e.id},React__default.createElement(reactRouterDom.NavLink,{to:"/manager/project/single?site_id="+e.id,onClick:t.onLink},React__default.createElement("i",{className:"fa fa-globe text-green"}),React__default.createElement("span",null,e.name)))})):"")}ManagerMenu.propTypes={sites:propTypes.array,onLink:propTypes.func};var ManagerMenu$1=menuDecorator(ManagerMenu,{menuId:"manager"});function MonetizerMenu(e){return React__default.createElement("ul",{className:"sidebar-menu tree"},React__default.createElement("li",{className:"header"},"Меню монетизатора"),React__default.createElement("li",null,React__default.createElement(reactRouterDom.NavLink,{to:"/ads",onClick:e.onLink},React__default.createElement("i",{className:"fa fa-object-ungroup text-blue"}),React__default.createElement("span",null,"Работа с рекламой"))))}MonetizerMenu.propTypes={onLink:propTypes.func};var MonetizerMenu$1=menuDecorator(MonetizerMenu,{menuId:"monetizer"});function SpaceMenu(e){var t=e.leftMenu,a=e.match,r=e.onLink;return React__default.createElement(React.Fragment,null,React__default.createElement(AdminMenu$1,{menus:t.data.menus,onLink:r,match:a}),React__default.createElement(AnalyticMenu$1,{menus:t.data.menus,onLink:r,match:a}),React__default.createElement(AnalyticToolsMenu$1,{menus:t.data.menus,onLink:r,match:a}),React__default.createElement(ManagerMenu$1,{menus:t.data.menus,sites:t.data.sites,onLink:r,match:a}),React__default.createElement(MonetizerMenu$1,{menus:t.data.menus,onLink:r,match:a}))}SpaceMenu.propTypes={leftMenu:propTypes.object.isRequired,onLink:propTypes.func.isRequired,match:propTypes.object.isRequired},SpaceMenu.defaultProps={};var Sidebar=function(e){function t(e){classCallCheck(this,t);var c=possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return c.onLink=function(){document.documentElement.scrollTop=0},c.menu=function(){var e=c.props,t=e.leftMenu,a=e.sidebar,r=e.match,n=e.back,l=getCookie("auth_token_main");switch(a.menu){case"course":return React__default.createElement(React.Fragment,null,l?React__default.createElement("ul",{className:"sidebar-menu tree"},React__default.createElement("li",{className:"header"},React__default.createElement("span",null,React__default.createElement("span",null,"Админ меню"))),React__default.createElement("li",null,React__default.createElement("a",{className:"hovered",onClick:function(){return n()}},React__default.createElement("i",{className:"fa fa-undo text-green"}),React__default.createElement("span",null,"На основного")))):"",React__default.createElement(CourseMenu,{sidebar:a,onLink:c.onLink,match:r,back:n,leftMenu:t}));case"space":return React__default.createElement(SpaceMenu,{leftMenu:t,match:r,onLink:c.onLink});default:return React__default.createElement("div",null,"default")}},c.asideRef=React__default.createRef(),c}return inherits(t,e),createClass(t,[{key:"componentDidUpdate",value:function(){if(this.asideRef){var e=this.asideRef.clientHeight;document.querySelector(".content-wrapper").style.minHeight=e+"px"}}},{key:"render",value:function(){if(!this.props.sidebar.isShow)return null;var e=this.props,t=e.avatar,a=e.userName,r=e.leftMenu;return lodash.get(r,"data")?React__default.createElement("aside",{className:"main-sidebar",ref:this.asideRef},React__default.createElement("section",{className:"sidebar"},React__default.createElement("div",{className:"user-panel",style:{color:"#fff"}},React__default.createElement("div",{className:"pull-left image"},React__default.createElement("img",{src:t,className:"img-circle",alt:a})),React__default.createElement("div",{className:"pull-left info"},React__default.createElement("p",null,a),React__default.createElement("a",{href:"#"},React__default.createElement("i",{className:"fa fa-circle text-success"}),"Online"))),this.menu())):null}}]),t}(React.Component);function SidebarRight(e){return e.isShow?React__default.createElement("aside",{className:"control-sidebar control-sidebar-dark"},React__default.createElement("ul",{className:"nav nav-tabs nav-justified control-sidebar-tabs"},React__default.createElement("li",{className:"active"},React__default.createElement("a",{href:"#control-sidebar-folders-tab","data-toggle":"tab"},React__default.createElement("i",{className:"fa fa-folder"})))),React__default.createElement("div",{className:"tab-content"},React__default.createElement("h3",{className:"control-sidebar-heading"},React__default.createElement(reactRouterDom.Link,{to:"/user/project-folder/index",onClick:e.handleClick},"Управление папками")))):null}function styleInject(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===a&&r.firstChild?r.insertBefore(n,r.firstChild):r.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}Sidebar.displayName="Sidebar",Sidebar.propTypes={avatar:propTypes.string,site:propTypes.string,back:propTypes.func,leftMenu:propTypes.object,sidebar:propTypes.shape({isShow:propTypes.bool,menu:propTypes.string}),match:propTypes.object,userName:propTypes.string},SidebarRight.propTypes={handleClick:propTypes.func.isRequired,isShow:propTypes.bool};var css=".wrapper {\n\theight: auto;\n\tmin-height: 100%\n}\n.app-wrapper {\n\toverflow: hidden\n}\n";styleInject(css);var AppWrapper=function(e){function g(){var e,t,a;classCallCheck(this,g);for(var r=arguments.length,n=Array(r),l=0;l<r;l++)n[l]=arguments[l];return(t=a=possibleConstructorReturn(this,(e=g.__proto__||Object.getPrototypeOf(g)).call.apply(e,[this].concat(n)))).handleClick=function(){document.querySelector('[data-toggle="control-sidebar"]').click()},possibleConstructorReturn(a,t)}return inherits(g,e),createClass(g,[{key:"render",value:function(){var e=this.props,t=e.userData,a=e.match,r=e.header,n=e.footer,l=e.sidebar,c=e.sidebarRight,o=e.appWrapper.style,s=t.data,u=void 0===s?{}:s,i=t.error,p=u.notifications,d=u.avatar,m=void 0===d?"https://www.gravatar.com/avatar/dc36f5a91f271af325184ece55b5dbd5?r=g&s=45":d,f=u.username,_=u.is_support,R=u.jivosite,h=u.role,E="Администратор"===h,y=getMenuItemsBefore({notifications:p,role:h,header:r,is_support:_}),b=getMenuItemsAfter();return g.displayName=g.displayName||g.name||"AppWrapper",React__default.createElement("div",{className:"app-wrapper "+this.props.wrapClass,style:{style:o}},React__default.createElement("div",{className:"wrapper"},React__default.createElement(Header,{avatar:m,className:"class-name",setup:r,logout:this.props.logout,menuItemsBefore:y,menuItemsAfter:b,isAuthorized:!i,isAdmin:E,searchResult:this.props.searchResult,searchProject:this.props.searchProject,userName:f}),React__default.createElement(Sidebar,{sidebar:this.props.sidebar,avatar:m,userName:f,match:a,back:this.props.backIntoMainUser,courseMenu:this.props.courseMenu,leftMenu:this.props.leftMenu}),React__default.createElement("section",{className:"content-wrapper"},this.props.children),React__default.createElement(Footer,{isShow:n.isShow},React__default.createElement("div",{className:"pull-left"},React__default.createElement("div",{className:"ft_copy"},"© Sorokin.Media 2017-2018")),React__default.createElement("div",{className:"pull-right"},React__default.createElement("div",{className:"ft_logo"},React__default.createElement("img",{src:n.footerLogo,alt:"Cabinet"}))),R?function(){var e=document,t=window;function a(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="//code.jivosite.com/script/widget/m7KxeJ82jO";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}"complete"==e.readyState?a():t.attachEvent?t.attachEvent("onload",a):t.addEventListener("load",a,!1)}():null),React__default.createElement(SidebarRight,{handleClick:this.handleClick,isShow:c}),l&&React__default.createElement("div",{className:"control-sidebar-bg"})))}}]),g}(React.Component);AppWrapper.propTypes={userData:propTypes.object.isRequired,match:propTypes.object,searchProject:propTypes.object,leftMenu:propTypes.object,wrapClass:propTypes.string,children:propTypes.node,courseMenu:propTypes.bool,header:propTypes.object,sidebar:propTypes.object,sidebarRight:propTypes.bool,appWrapper:propTypes.object,footer:propTypes.shape({footerLogo:propTypes.string,isShow:propTypes.bool}),backIntoMainUser:propTypes.func,logout:propTypes.func,searchResult:propTypes.func},AppWrapper.defaultProps={searchProject:{},wrapClass:"",searchResult:function(){},courseMenu:!1,header:!1,sidebar:!1,sidebarRight:!1,footer:!1,appWrapper:{style:{paddingTop:"15px"}}},exports.AppWrapper=AppWrapper,exports.Header=Header,exports.Sidebar=Sidebar,exports.SidebarRight=SidebarRight,exports.Footer=Footer;
