(window.webpackJsonp=window.webpackJsonp||[]).push([[877],{1256:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=n.a.createContext({}),l=function(e){var t=n.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=l(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),o=l(a),j=r,m=o["".concat(c,".").concat(j)]||o[j]||O[j]||b;return a?n.a.createElement(m,i(i({ref:t},d),{},{components:a})):n.a.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=j;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var d=2;d<b;d++)c[d]=a[d];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},946:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return l}));var r=a(3),n=a(7),b=(a(0),a(1256)),c={id:"criterianodefactory",title:"Class: CriteriaNodeFactory",sidebar_label:"CriteriaNodeFactory"},i={unversionedId:"api/classes/criterianodefactory",id:"version-4.3/api/classes/criterianodefactory",isDocsHomePage:!1,title:"Class: CriteriaNodeFactory",description:"Hierarchy",source:"@site/versioned_docs/version-4.3/api/classes/criterianodefactory.md",slug:"/api/classes/criterianodefactory",permalink:"/docs/4.3/api/classes/criterianodefactory",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/classes/criterianodefactory.md",version:"4.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1612454294,sidebar_label:"CriteriaNodeFactory",sidebar:"version-4.3/API",previous:{title:"Class: CriteriaNode",permalink:"/docs/4.3/api/classes/criterianode"},next:{title:"Class: DatabaseDriver<C>",permalink:"/docs/4.3/api/classes/databasedriver"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"createArrayNode",id:"createarraynode",children:[]},{value:"createNode",id:"createnode",children:[]},{value:"createObjectItemNode",id:"createobjectitemnode",children:[]},{value:"createObjectNode",id:"createobjectnode",children:[]},{value:"createScalarNode",id:"createscalarnode",children:[]}]}],d={toc:p};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"CriteriaNodeFactory"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"createarraynode"},"createArrayNode"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"createArrayNode"),"(",Object(b.b)("inlineCode",{parentName:"p"},"metadata"),": MetadataStorage, ",Object(b.b)("inlineCode",{parentName:"p"},"entityName"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"payload"),": any[], ",Object(b.b)("inlineCode",{parentName:"p"},"parent?"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/icriterianode"}),"ICriteriaNode"),", ",Object(b.b)("inlineCode",{parentName:"p"},"key?"),": string): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/icriterianode"}),"ICriteriaNode")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/query/CriteriaNodeFactory.ts#L32"}),"packages/knex/src/query/CriteriaNodeFactory.ts:32"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"metadata")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"MetadataStorage")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"entityName")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"payload")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any[]")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"parent?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api/interfaces/icriterianode"}),"ICriteriaNode"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"key?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/icriterianode"}),"ICriteriaNode")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"createnode"},"createNode"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"createNode"),"(",Object(b.b)("inlineCode",{parentName:"p"},"metadata"),": MetadataStorage, ",Object(b.b)("inlineCode",{parentName:"p"},"entityName"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"payload"),": any, ",Object(b.b)("inlineCode",{parentName:"p"},"parent?"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/icriterianode"}),"ICriteriaNode"),", ",Object(b.b)("inlineCode",{parentName:"p"},"key?"),": string): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/icriterianode"}),"ICriteriaNode")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/query/CriteriaNodeFactory.ts#L10"}),"packages/knex/src/query/CriteriaNodeFactory.ts:10"))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"metadata")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"MetadataStorage")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"entityName")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"payload")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"parent?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api/interfaces/icriterianode"}),"ICriteriaNode"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"key?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/icriterianode"}),"ICriteriaNode")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"createobjectitemnode"},"createObjectItemNode"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"createObjectItemNode"),"(",Object(b.b)("inlineCode",{parentName:"p"},"metadata"),": MetadataStorage, ",Object(b.b)("inlineCode",{parentName:"p"},"entityName"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"node"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/icriterianode"}),"ICriteriaNode"),", ",Object(b.b)("inlineCode",{parentName:"p"},"payload"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api#dictionary"}),"Dictionary"),", ",Object(b.b)("inlineCode",{parentName:"p"},"item"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"meta?"),": EntityMetadata): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/icriterianode"}),"ICriteriaNode")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/query/CriteriaNodeFactory.ts#L55"}),"packages/knex/src/query/CriteriaNodeFactory.ts:55"))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"metadata")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"MetadataStorage")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"entityName")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"node")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api/interfaces/icriterianode"}),"ICriteriaNode"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"payload")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api#dictionary"}),"Dictionary"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"item")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"meta?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"EntityMetadata")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/icriterianode"}),"ICriteriaNode")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"createobjectnode"},"createObjectNode"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"createObjectNode"),"(",Object(b.b)("inlineCode",{parentName:"p"},"metadata"),": MetadataStorage, ",Object(b.b)("inlineCode",{parentName:"p"},"entityName"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"payload"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api#dictionary"}),"Dictionary"),", ",Object(b.b)("inlineCode",{parentName:"p"},"parent?"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/icriterianode"}),"ICriteriaNode"),", ",Object(b.b)("inlineCode",{parentName:"p"},"key?"),": string): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/icriterianode"}),"ICriteriaNode")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/query/CriteriaNodeFactory.ts#L39"}),"packages/knex/src/query/CriteriaNodeFactory.ts:39"))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"metadata")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"MetadataStorage")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"entityName")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"payload")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api#dictionary"}),"Dictionary"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"parent?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api/interfaces/icriterianode"}),"ICriteriaNode"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"key?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/icriterianode"}),"ICriteriaNode")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"createscalarnode"},"createScalarNode"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"createScalarNode"),"(",Object(b.b)("inlineCode",{parentName:"p"},"metadata"),": MetadataStorage, ",Object(b.b)("inlineCode",{parentName:"p"},"entityName"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"payload"),": any, ",Object(b.b)("inlineCode",{parentName:"p"},"parent?"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/icriterianode"}),"ICriteriaNode"),", ",Object(b.b)("inlineCode",{parentName:"p"},"key?"),": string): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/icriterianode"}),"ICriteriaNode")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/query/CriteriaNodeFactory.ts#L25"}),"packages/knex/src/query/CriteriaNodeFactory.ts:25"))),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"metadata")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"MetadataStorage")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"entityName")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"payload")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"parent?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api/interfaces/icriterianode"}),"ICriteriaNode"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"key?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/icriterianode"}),"ICriteriaNode")))}l.isMDXComponent=!0}}]);