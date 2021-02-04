(window.webpackJsonp=window.webpackJsonp||[]).push([[325],{1256:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return u}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),l=s(r),d=n,u=l["".concat(c,".").concat(d)]||l[d]||m[d]||a;return r?o.a.createElement(u,i(i({ref:t},b),{},{components:r})):o.a.createElement(u,i({ref:t},b))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<a;b++)c[b]=r[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},394:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(1256)),c={id:"mongoexceptionconverter",title:"Class: MongoExceptionConverter",sidebar_label:"MongoExceptionConverter"},i={unversionedId:"api/classes/mongoexceptionconverter",id:"version-4.3/api/classes/mongoexceptionconverter",isDocsHomePage:!1,title:"Class: MongoExceptionConverter",description:"Hierarchy",source:"@site/versioned_docs/version-4.3/api/classes/mongoexceptionconverter.md",slug:"/api/classes/mongoexceptionconverter",permalink:"/docs/4.3/api/classes/mongoexceptionconverter",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/classes/mongoexceptionconverter.md",version:"4.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1612454294,sidebar_label:"MongoExceptionConverter",sidebar:"version-4.3/API",previous:{title:"Class: MongoEntityRepository<T>",permalink:"/docs/4.3/api/classes/mongoentityrepository"},next:{title:"Class: MongoNamingStrategy",permalink:"/docs/4.3/api/classes/mongonamingstrategy"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"convertException",id:"convertexception",children:[]}]}],b={toc:p};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"ExceptionConverter"),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("strong",{parentName:"p"},"MongoExceptionConverter")))),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("h3",{id:"convertexception"},"convertException"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("strong",{parentName:"p"},"convertException"),"(",Object(a.b)("inlineCode",{parentName:"p"},"exception"),": ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/classes/driverexception#error"}),"Error")," & ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api#dictionary"}),"Dictionary"),"): DriverException"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Overrides void")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/mongodb/src/MongoExceptionConverter.ts#L9"}),"packages/mongodb/src/MongoExceptionConverter.ts:9"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"link"))," ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://gist.github.com/rluvaton/a97a8da46ab6541a3e5702e83b9d357b"}),"https://gist.github.com/rluvaton/a97a8da46ab6541a3e5702e83b9d357b")),Object(a.b)("h4",{id:"parameters"},"Parameters:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"exception")),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(a.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api/classes/driverexception#error"}),"Error")," & ",Object(a.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api#dictionary"}),"Dictionary"))))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," DriverException"))}s.isMDXComponent=!0}}]);