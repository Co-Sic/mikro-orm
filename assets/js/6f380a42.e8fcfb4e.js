(window.webpackJsonp=window.webpackJsonp||[]).push([[468],{1140:function(e,a,t){"use strict";t.d(a,"a",(function(){return o})),t.d(a,"b",(function(){return O}));var b=t(0),n=t.n(b);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);a&&(b=b.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,b)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,b,n=function(e,a){if(null==e)return{};var t,b,n={},r=Object.keys(e);for(b=0;b<r.length;b++)t=r[b],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(b=0;b<r.length;b++)t=r[b],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=n.a.createContext({}),p=function(e){var a=n.a.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},o=function(e){var a=p(e.components);return n.a.createElement(i.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},d=n.a.forwardRef((function(e,a){var t=e.components,b=e.mdxType,r=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),o=p(t),d=b,O=o["".concat(c,".").concat(d)]||o[d]||m[d]||r;return t?n.a.createElement(O,s(s({ref:a},i),{},{components:t})):n.a.createElement(O,s({ref:a},i))}));function O(e,a){var t=arguments,b=a&&a.mdxType;if("string"==typeof e||b){var r=t.length,c=new Array(r);c[0]=d;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:b,c[1]=s;for(var i=2;i<r;i++)c[i]=t[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},538:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return l})),t.d(a,"default",(function(){return p}));var b=t(3),n=t(7),r=(t(0),t(1140)),c={id:"databaseschema",title:"Class: DatabaseSchema",sidebar_label:"DatabaseSchema"},s={unversionedId:"api/classes/databaseschema",id:"version-4.2/api/classes/databaseschema",isDocsHomePage:!1,title:"Class: DatabaseSchema",description:"Hierarchy",source:"@site/versioned_docs/version-4.2/api/classes/databaseschema.md",slug:"/api/classes/databaseschema",permalink:"/docs/4.2/api/classes/databaseschema",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/classes/databaseschema.md",version:"4.2",lastUpdatedBy:"Jason Wilson",lastUpdatedAt:1611480035,sidebar_label:"DatabaseSchema",sidebar:"version-4.2/API",previous:{title:"Class: DatabaseObjectNotFoundException",permalink:"/docs/4.2/api/classes/databaseobjectnotfoundexception"},next:{title:"Class: DatabaseTable",permalink:"/docs/4.2/api/classes/databasetable"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"tables",id:"tables",children:[]}]},{value:"Methods",id:"methods",children:[{value:"addTable",id:"addtable",children:[]},{value:"getTable",id:"gettable",children:[]},{value:"getTables",id:"gettables",children:[]},{value:"create",id:"create",children:[]}]}],i={toc:l};function p(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(b.a)({},i,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"DatabaseSchema"))),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("h3",{id:"tables"},"tables"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Private")," ",Object(r.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(r.b)("strong",{parentName:"p"},"tables"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/databasetable"}),"DatabaseTable"),"[] = []"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/knex/src/schema/DatabaseSchema.ts#L9"}),"packages/knex/src/schema/DatabaseSchema.ts:9"))),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"addtable"},"addTable"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"addTable"),"(",Object(r.b)("inlineCode",{parentName:"p"},"name"),": string, ",Object(r.b)("inlineCode",{parentName:"p"},"schema"),": string ","|"," undefined): ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/databasetable"}),"DatabaseTable")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/knex/src/schema/DatabaseSchema.ts#L11"}),"packages/knex/src/schema/DatabaseSchema.ts:11"))),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"name")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"schema")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string ","|"," undefined")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/databasetable"}),"DatabaseTable")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"gettable"},"getTable"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getTable"),"(",Object(r.b)("inlineCode",{parentName:"p"},"name"),": string): ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/databasetable"}),"DatabaseTable")," ","|"," undefined"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/knex/src/schema/DatabaseSchema.ts#L22"}),"packages/knex/src/schema/DatabaseSchema.ts:22"))),Object(r.b)("h4",{id:"parameters-1"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"name")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/databasetable"}),"DatabaseTable")," ","|"," undefined"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"gettables"},"getTables"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getTables"),"(): ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/databasetable"}),"DatabaseTable"),"[]"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/knex/src/schema/DatabaseSchema.ts#L18"}),"packages/knex/src/schema/DatabaseSchema.ts:18"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/databasetable"}),"DatabaseTable"),"[]"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"create"},"create"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Static"),Object(r.b)("strong",{parentName:"p"},"create"),"(",Object(r.b)("inlineCode",{parentName:"p"},"connection"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/abstractsqlconnection"}),"AbstractSqlConnection"),", ",Object(r.b)("inlineCode",{parentName:"p"},"helper"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/schemahelper"}),"SchemaHelper"),", ",Object(r.b)("inlineCode",{parentName:"p"},"config"),": Configuration): Promise","<",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/databaseschema"}),"DatabaseSchema"),">"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/knex/src/schema/DatabaseSchema.ts#L26"}),"packages/knex/src/schema/DatabaseSchema.ts:26"))),Object(r.b)("h4",{id:"parameters-2"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"connection")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/4.2/api/classes/abstractsqlconnection"}),"AbstractSqlConnection"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"helper")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/4.2/api/classes/schemahelper"}),"SchemaHelper"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"config")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Configuration")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/4.2/api/classes/databaseschema"}),"DatabaseSchema"),">"))}p.isMDXComponent=!0}}]);