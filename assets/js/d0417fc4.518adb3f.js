(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19283],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return k},kt:function(){return N}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),m=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},k=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),s=m(a),N=r,u=s["".concat(d,".").concat(N)]||s[N]||o[N]||l;return a?n.createElement(u,p(p({ref:t},k),{},{components:a})):n.createElement(u,p({ref:t},k))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var m=2;m<l;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},2234:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return d},default:function(){return k}});var n=a(74034),r=a(79973),l=(a(67294),a(3905)),p={id:"knex.knex-1.table",title:"Interface: Table<TRecord, TResult>",sidebar_label:"Table",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/interfaces/knex.knex-1.table",id:"version-4.5/api/interfaces/knex.knex-1.table",isDocsHomePage:!1,title:"Interface: Table<TRecord, TResult\\>",description:"knex.Knex.Table",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.table.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.knex-1.table",permalink:"/docs/api/interfaces/knex.knex-1.table",editUrl:null,version:"4.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1621931266,formattedLastUpdatedAt:"5/25/2021",sidebar_label:"Table",frontMatter:{id:"knex.knex-1.table",title:"Interface: Table<TRecord, TResult>",sidebar_label:"Table",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Interface: StringTagSupport",permalink:"/docs/api/interfaces/knex.knex-1.stringtagsupport"},next:{title:"Interface: TableBuilder",permalink:"/docs/api/interfaces/knex.knex-1.tablebuilder"}},d=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Callable",id:"callable",children:[]}],m={toc:d};function k(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".Table"),(0,l.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TRecord")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"any"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TResult")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"any"))))),(0,l.kt)("h2",{id:"callable"},"Callable"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"Table"),"<TTable, TRecord2, TResult2",">","(",(0,l.kt)("inlineCode",{parentName:"p"},"tableName"),": TTable, ",(0,l.kt)("inlineCode",{parentName:"p"},"options?"),": PgTableOptions): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord2, TResult2",">"),(0,l.kt)("h4",{id:"type-parameters-1"},"Type parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TTable")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"never")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TRecord2")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#tabletype"},(0,l.kt)("em",{parentName:"a"},"TableType")),"<TTable",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TResult2")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"ReplaceBase"),"<TResult, ",(0,l.kt)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#resolvetabletype"},(0,l.kt)("em",{parentName:"a"},"ResolveTableType")),"<TRecord2, ",(0,l.kt)("em",{parentName:"td"},"base"),">",">")))),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"tableName")),(0,l.kt)("td",{parentName:"tr",align:"left"},"TTable")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"options?")),(0,l.kt)("td",{parentName:"tr",align:"left"},"PgTableOptions")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord2, TResult2",">"),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:987"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"Table"),"<TRecord2, TResult2",">","(",(0,l.kt)("inlineCode",{parentName:"p"},"tableName"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#tabledescriptor"},(0,l.kt)("em",{parentName:"a"},"TableDescriptor"))," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.aliasdict"},(0,l.kt)("em",{parentName:"a"},"AliasDict")),", ",(0,l.kt)("inlineCode",{parentName:"p"},"options?"),": PgTableOptions): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord2, TResult2",">"),(0,l.kt)("h4",{id:"type-parameters-2"},"Type parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TRecord2")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"unknown"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TResult2")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"ReplaceBase"),"<TResult, TRecord2",">")))),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"tableName")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#tabledescriptor"},(0,l.kt)("em",{parentName:"a"},"TableDescriptor"))," ","|"," ",(0,l.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.aliasdict"},(0,l.kt)("em",{parentName:"a"},"AliasDict")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"options?")),(0,l.kt)("td",{parentName:"tr",align:"left"},"PgTableOptions")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord2, TResult2",">"),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:995"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"Table"),"<TRecord2, TResult2",">","(",(0,l.kt)("inlineCode",{parentName:"p"},"callback"),": Function, ",(0,l.kt)("inlineCode",{parentName:"p"},"options?"),": PgTableOptions): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord2, TResult2",">"),(0,l.kt)("h4",{id:"type-parameters-3"},"Type parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TRecord2")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"unknown"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TResult2")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"ReplaceBase"),"<TResult, TRecord2",">")))),(0,l.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"callback")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Function")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"options?")),(0,l.kt)("td",{parentName:"tr",align:"left"},"PgTableOptions")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord2, TResult2",">"),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1002"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"Table"),"<TRecord2, TResult2",">","(",(0,l.kt)("inlineCode",{parentName:"p"},"raw"),": ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.raw"},(0,l.kt)("em",{parentName:"a"},"Raw")),"<any",">",", ",(0,l.kt)("inlineCode",{parentName:"p"},"options?"),": PgTableOptions): ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord2, TResult2",">"),(0,l.kt)("h4",{id:"type-parameters-4"},"Type parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TRecord2")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"unknown"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"TResult2")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"},"ReplaceBase"),"<TResult, TRecord2",">")))),(0,l.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"raw")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.raw"},(0,l.kt)("em",{parentName:"a"},"Raw")),"<any",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"options?")),(0,l.kt)("td",{parentName:"tr",align:"left"},"PgTableOptions")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,l.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord2, TResult2",">"),(0,l.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1009"))}k.isMDXComponent=!0}}]);