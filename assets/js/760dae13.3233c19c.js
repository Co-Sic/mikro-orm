(window.webpackJsonp=window.webpackJsonp||[]).push([[528],{1253:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),p=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(t),d=r,f=s["".concat(c,".").concat(d)]||s[d]||u[d]||i;return t?a.a.createElement(f,o(o({ref:n},b),{},{components:t})):a.a.createElement(f,o({ref:n},b))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<i;b++)c[b]=t[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},598:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),i=(t(0),t(1253)),c={id:"knex.knex.foreignconstraintbuilder",title:"Interface: ForeignConstraintBuilder",sidebar_label:"ForeignConstraintBuilder",hide_title:!0},o={unversionedId:"api/interfaces/knex.knex.foreignconstraintbuilder",id:"version-4.4/api/interfaces/knex.knex.foreignconstraintbuilder",isDocsHomePage:!1,title:"Interface: ForeignConstraintBuilder",description:"Interface: ForeignConstraintBuilder",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.foreignconstraintbuilder.md",slug:"/api/interfaces/knex.knex.foreignconstraintbuilder",permalink:"/docs/api/interfaces/knex.knex.foreignconstraintbuilder",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.foreignconstraintbuilder.md",version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1611917607,sidebar_label:"ForeignConstraintBuilder",sidebar:"version-4.4/API",previous:{title:"Interface: EnumOptions",permalink:"/docs/api/interfaces/knex.knex.enumoptions"},next:{title:"Interface: FunctionHelper",permalink:"/docs/api/interfaces/knex.knex.functionhelper"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"references",id:"references",children:[]}]}],b={toc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-foreignconstraintbuilder"},"Interface: ForeignConstraintBuilder"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/knex"}),"knex"),".",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/knex.knex-1"}),"Knex"),".ForeignConstraintBuilder"),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"ForeignConstraintBuilder"))),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"references"},"references"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"references"),"(",Object(i.b)("inlineCode",{parentName:"p"},"columnName"),": ",Object(i.b)("em",{parentName:"p"},"string"),"): ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.referencingcolumnbuilder"}),Object(i.b)("em",{parentName:"a"},"ReferencingColumnBuilder"))),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"columnName")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"string"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.referencingcolumnbuilder"}),Object(i.b)("em",{parentName:"a"},"ReferencingColumnBuilder"))),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1816"))}p.isMDXComponent=!0}}]);