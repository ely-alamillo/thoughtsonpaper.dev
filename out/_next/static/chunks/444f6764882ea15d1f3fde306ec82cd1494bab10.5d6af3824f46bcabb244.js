(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"5Yp1":function(e,t,r){"use strict";var n=r("rePB"),o=r("q1tI"),a=r.n(o),u=r("lhkX"),l=r("17x9"),i=r.n(l);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=Object(o.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,o=e.size,u=void 0===o?24:o,l=f(e,["color","size"]);return(a.a.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.a.createElement("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})))}));c.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},c.displayName="Zap";var p=c;function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var v=Object(o.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,o=e.size,u=void 0===o?24:o,l=h(e,["color","size"]);return(a.a.createElement("svg",d({ref:t,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.a.createElement("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})))}));v.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},v.displayName="Moon";var m=v,y=r("YFqc"),g=r.n(y),b=a.a.createElement;function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=[{path:"/",name:"home"},{path:"/about",name:"about"},{path:"/uses",name:"uses"}];t.a=function(e){var t=e.children,r=e.isHomepage,n=e.secondaryPage,l=(e.noHead,"undefined"!==typeof localStorage&&localStorage.getItem("BLOG_THEME")),i=Object(o.useState)(l),s=i[0],f=i[1],c=Object(o.useState)(!1),d=c[0],h=c[1];Object(o.useEffect)((function(){l||window.matchMedia("(prefers-color-scheme: dark)").matches&&f("dark")}),[]),Object(o.useEffect)((function(){document.documentElement.setAttribute("data-theme",s),localStorage.setItem("BLOG_THEME",s),h(!0)}),[s]);var v=w(w({},r&&{md:12}),!r&&{md:8,mdOffset:2});return d?b(a.a.Fragment,null,b("div",{className:"top-menu"},b(u.Row,null,b(u.Col,{xs:10},b("ul",null,j.map((function(e){var t=e.path,r=e.name;return b("li",{key:r},b(g.a,{href:t,as:t},b("a",null,r)))})))),b(u.Col,{xs:2,style:{textAlign:"right"}},b("button",{className:"theme-switch-button",onClick:function(){f("dark"===s?"light":"dark")}},b("dark"===s?p:m,null))))),b(u.Grid,null,b(u.Row,null,b(u.Col,v,!n&&b("h1",{className:"blog-title",style:r&&{textAlign:"left"}},'thoughts on " paper "'),t))),b("footer",null,"\xa9 ",(new Date).getFullYear()," "," Ely Alamillo")):b("div",null)}},"68Vo":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return a.default&&a.default[e]?a.default[e]:e};var n,o=r("fRFl"),a=(n=o)&&n.__esModule?n:{default:n}},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("lwsE"),o=r("W8MJ"),a=r("7W2i"),u=r("a1gu"),l=r("Nsbk");function i(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=l(e);if(t){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u(this,r)}}var s=r("TqRt"),f=r("284h");t.__esModule=!0,t.default=void 0;var c,p=f(r("q1tI")),d=r("QmWs"),h=r("g/15"),v=s(r("nOHt")),m=r("elyg");function y(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var g=new Map,b=window.IntersectionObserver,O={};function w(){return c||(b?c=new b((function(e){e.forEach((function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(e.target),g.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var j=function(e){a(r,e);var t=i(r);function r(e){var o;return n(this,r),(o=t.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var t=null,r=null,n=null;return function(o,a){if(n&&o===t&&a===r)return n;var u=e(o,a);return t=o,r=a,n=u,u}}((function(e,t){return{href:(0,m.addBasePath)(y(e)),as:t?(0,m.addBasePath)(y(t)):t}})),o.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,n=t.target;if("A"!==r||!(n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=o.formatUrls(o.props.href,o.props.as),u=a.href,l=a.as;if(function(e){var t=(0,d.parse)(e,!1,!0),r=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(u)){var i=window.location.pathname;u=(0,d.resolve)(i,u),l=l?(0,d.resolve)(i,l):u,e.preventDefault();var s=o.props.scroll;null==s&&(s=l.indexOf("#")<0),v.default[o.props.replace?"replace":"push"](u,l,{shallow:o.props.shallow}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(r,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),r=t.href,n=t.as,o=(0,d.resolve)(e,r);return[o,n?(0,d.resolve)(e,n):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),O[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var r=w();return r?(r.observe(e),g.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}g.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();v.default.prefetch(t[0],t[1],e).catch((function(e){0})),O[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var a=p.Children.only(t),u={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(u.href=o||n),p.default.cloneElement(a,u)}}]),r}(p.Component);t.default=j},dKp5:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getColumnProps=p,t.default=d;var n=i(r("q1tI")),o=i(r("17x9")),a=i(r("izpJ")),u=i(r("68Vo")),l=r("hDLu");function i(e){return e&&e.__esModule?e:{default:e}}var s={xs:l.ColumnSizeType,sm:l.ColumnSizeType,md:l.ColumnSizeType,lg:l.ColumnSizeType,xl:l.ColumnSizeType,xsOffset:o.default.number,smOffset:o.default.number,mdOffset:o.default.number,lgOffset:o.default.number,xlOffset:o.default.number,first:l.ViewportSizeType,last:l.ViewportSizeType,className:o.default.string,tagName:o.default.string,children:o.default.node},f={xs:"col-xs",sm:"col-sm",md:"col-md",lg:"col-lg",xl:"col-xl",xsOffset:"col-xs-offset",smOffset:"col-sm-offset",mdOffset:"col-md-offset",lgOffset:"col-lg-offset",xlOffset:"col-xl-offset"};function c(e){var t=[];return e.className&&t.push(e.className),e.first&&t.push((0,u.default)("first-"+e.first)),e.last&&t.push((0,u.default)("last-"+e.last)),Object.keys(e).filter((function(e){return f[e]})).map((function(t){return(0,u.default)("number"===typeof(r=e[t])&&isFinite(r)&&Math.floor(r)===r?f[t]+"-"+e[t]:f[t]);var r})).concat(t)}function p(e){return(0,a.default)(s,e,c(e))}function d(e){var t=e.tagName,r=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["tagName"]);return n.default.createElement(t||"div",p(r))}d.propTypes=s},fRFl:function(e,t,r){},hDLu:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ViewportSizeType=t.ColumnSizeType=void 0;var n,o=r("17x9"),a=(n=o)&&n.__esModule?n:{default:n};t.ColumnSizeType=a.default.oneOfType([a.default.number,a.default.bool]),t.ViewportSizeType=a.default.oneOf(["xs","sm","md","lg","xl"])},hwMs:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var n=l(r("q1tI")),o=l(r("17x9")),a=l(r("izpJ")),u=l(r("68Vo"));function l(e){return e&&e.__esModule?e:{default:e}}var i={fluid:o.default.bool,className:o.default.string,tagName:o.default.string,children:o.default.node};function s(e){var t=(0,u.default)(e.fluid?"container-fluid":"container"),r=[e.className,t];return n.default.createElement(e.tagName||"div",(0,a.default)(i,e,r))}s.propTypes=i},izpJ:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){var n={};Object.keys(t).filter((function(t){return"children"===t||!e[t]})).forEach((function(e){return n[e]=t[e]}));var o=r.filter((function(e){return e})).join(" ");return Object.assign({},n,{className:o})}},lhkX:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getColumnProps=t.Col=t.getRowProps=t.Row=t.Grid=void 0;var n=r("v98U");Object.defineProperty(t,"getRowProps",{enumerable:!0,get:function(){return n.getRowProps}});var o=r("dKp5");Object.defineProperty(t,"getColumnProps",{enumerable:!0,get:function(){return o.getColumnProps}});var a=i(r("hwMs")),u=i(n),l=i(o);function i(e){return e&&e.__esModule?e:{default:e}}t.Grid=a.default,t.Row=u.default,t.Col=l.default},rePB:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},v98U:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getRowProps=c,t.default=p;var n=i(r("68Vo")),o=i(r("q1tI")),a=i(r("17x9")),u=i(r("izpJ")),l=r("hDLu");function i(e){return e&&e.__esModule?e:{default:e}}var s=["start","center","end","top","middle","bottom","around","between"],f={reverse:a.default.bool,start:l.ViewportSizeType,center:l.ViewportSizeType,end:l.ViewportSizeType,top:l.ViewportSizeType,middle:l.ViewportSizeType,bottom:l.ViewportSizeType,around:l.ViewportSizeType,between:l.ViewportSizeType,className:a.default.string,tagName:a.default.string,children:a.default.node};function c(e){return(0,u.default)(f,e,function(e){for(var t=[e.className,(0,n.default)("row")],r=0;r<s.length;++r){var o=s[r],a=e[o];a&&t.push((0,n.default)(o+"-"+a))}return e.reverse&&t.push((0,n.default)("reverse")),t}(e))}function p(e){return o.default.createElement(e.tagName||"div",c(e))}p.propTypes=f}}]);