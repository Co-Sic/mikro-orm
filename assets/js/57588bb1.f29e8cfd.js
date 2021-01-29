(window.webpackJsonp=window.webpackJsonp||[]).push([[378],{1253:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),u=l(r),s=n,m=u["".concat(o,".").concat(s)]||u[s]||d[s]||i;return r?a.a.createElement(m,c(c({ref:t},p),{},{components:r})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=s;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},447:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),i=(r(0),r(1253)),o={id:"core.iconfiguration",title:"Interface: IConfiguration",sidebar_label:"IConfiguration",hide_title:!0},c={unversionedId:"api/interfaces/core.iconfiguration",id:"version-4.4/api/interfaces/core.iconfiguration",isDocsHomePage:!1,title:"Interface: IConfiguration",description:"Interface: IConfiguration",source:"@site/versioned_docs/version-4.4/api/interfaces/core.iconfiguration.md",slug:"/api/interfaces/core.iconfiguration",permalink:"/docs/api/interfaces/core.iconfiguration",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/core.iconfiguration.md",version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1611917607,sidebar_label:"IConfiguration",sidebar:"version-4.4/API",previous:{title:"Interface: Highlighter",permalink:"/docs/api/interfaces/core.highlighter"},next:{title:"Interface: IDatabaseDriver<C>",permalink:"/docs/api/interfaces/core.idatabasedriver"}},b=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"get",id:"get",children:[]}]}],p={toc:b};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-iconfiguration"},"Interface: IConfiguration"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/modules/core"}),"core"),".IConfiguration"),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"IConfiguration"))),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"get"},"get"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"get"),"(",Object(i.b)("inlineCode",{parentName:"p"},"key"),": ",Object(i.b)("em",{parentName:"p"},"string"),", ",Object(i.b)("inlineCode",{parentName:"p"},"defaultValue?"),": ",Object(i.b)("em",{parentName:"p"},"any"),"): ",Object(i.b)("em",{parentName:"p"},"any")),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"key")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"string"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"defaultValue?")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"any"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"any")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/metadata/MetadataProvider.ts#L6"}),"packages/core/src/metadata/MetadataProvider.ts:6")))}l.isMDXComponent=!0}}]);