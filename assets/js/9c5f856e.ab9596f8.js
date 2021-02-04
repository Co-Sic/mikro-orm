(window.webpackJsonp=window.webpackJsonp||[]).push([[707],{1256:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=r.a.createContext({}),l=function(e){var t=r.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=l(e.components);return r.a.createElement(m.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),o=l(a),j=n,d=o["".concat(c,".").concat(j)]||o[j]||O[j]||b;return a?r.a.createElement(d,i(i({ref:t},m),{},{components:a})):r.a.createElement(d,i({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=j;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var m=2;m<b;m++)c[m]=a[m];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},777:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),b=(a(0),a(1256)),c={id:"knex.knex.migrator",title:"Interface: Migrator",sidebar_label:"Migrator",hide_title:!0},i={unversionedId:"api/interfaces/knex.knex.migrator",id:"version-4.4/api/interfaces/knex.knex.migrator",isDocsHomePage:!1,title:"Interface: Migrator",description:"Interface: Migrator",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.migrator.md",slug:"/api/interfaces/knex.knex.migrator",permalink:"/docs/api/interfaces/knex.knex.migrator",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.migrator.md",version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1612454294,sidebar_label:"Migrator",sidebar:"version-4.4/API",previous:{title:"Interface: MigrationSource<TMigrationSpec>",permalink:"/docs/api/interfaces/knex.knex.migrationsource"},next:{title:"Interface: MigratorConfig",permalink:"/docs/api/interfaces/knex.knex.migratorconfig"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"currentVersion",id:"currentversion",children:[]},{value:"down",id:"down",children:[]},{value:"forceFreeMigrationsLock",id:"forcefreemigrationslock",children:[]},{value:"latest",id:"latest",children:[]},{value:"list",id:"list",children:[]},{value:"make",id:"make",children:[]},{value:"rollback",id:"rollback",children:[]},{value:"status",id:"status",children:[]},{value:"up",id:"up",children:[]}]}],m={toc:p};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"interface-migrator"},"Interface: Migrator"),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/modules/knex"}),"knex"),".",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/modules/knex.knex-1"}),"Knex"),".Migrator"),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Migrator"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"currentversion"},"currentVersion"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"currentVersion"),"(",Object(b.b)("inlineCode",{parentName:"p"},"config?"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.migratorconfig"}),Object(b.b)("em",{parentName:"a"},"MigratorConfig")),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"string"),">"),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"config?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/interfaces/knex.knex.migratorconfig"}),Object(b.b)("em",{parentName:"a"},"MigratorConfig")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"string"),">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2133"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"down"},"down"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"down"),"(",Object(b.b)("inlineCode",{parentName:"p"},"config?"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.migratorconfig"}),Object(b.b)("em",{parentName:"a"},"MigratorConfig")),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"any"),">"),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"config?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/interfaces/knex.knex.migratorconfig"}),Object(b.b)("em",{parentName:"a"},"MigratorConfig")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"any"),">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2136"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"forcefreemigrationslock"},"forceFreeMigrationsLock"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"forceFreeMigrationsLock"),"(",Object(b.b)("inlineCode",{parentName:"p"},"config?"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.migratorconfig"}),Object(b.b)("em",{parentName:"a"},"MigratorConfig")),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"any"),">"),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"config?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/interfaces/knex.knex.migratorconfig"}),Object(b.b)("em",{parentName:"a"},"MigratorConfig")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"any"),">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2137"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"latest"},"latest"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"latest"),"(",Object(b.b)("inlineCode",{parentName:"p"},"config?"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.migratorconfig"}),Object(b.b)("em",{parentName:"a"},"MigratorConfig")),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"any"),">"),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"config?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/interfaces/knex.knex.migratorconfig"}),Object(b.b)("em",{parentName:"a"},"MigratorConfig")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"any"),">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2130"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"list"},"list"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"list"),"(",Object(b.b)("inlineCode",{parentName:"p"},"config?"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.migratorconfig"}),Object(b.b)("em",{parentName:"a"},"MigratorConfig")),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"any"),">"),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"config?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/interfaces/knex.knex.migratorconfig"}),Object(b.b)("em",{parentName:"a"},"MigratorConfig")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"any"),">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2134"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"make"},"make"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"make"),"(",Object(b.b)("inlineCode",{parentName:"p"},"name"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"config?"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.migratorconfig"}),Object(b.b)("em",{parentName:"a"},"MigratorConfig")),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"string"),">"),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"name")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"config?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/interfaces/knex.knex.migratorconfig"}),Object(b.b)("em",{parentName:"a"},"MigratorConfig")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"string"),">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2129"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"rollback"},"rollback"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"rollback"),"(",Object(b.b)("inlineCode",{parentName:"p"},"config?"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.migratorconfig"}),Object(b.b)("em",{parentName:"a"},"MigratorConfig")),", ",Object(b.b)("inlineCode",{parentName:"p"},"all?"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"any"),">"),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"config?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/interfaces/knex.knex.migratorconfig"}),Object(b.b)("em",{parentName:"a"},"MigratorConfig")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"all?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"boolean"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"any"),">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2131"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"status"},"status"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"status"),"(",Object(b.b)("inlineCode",{parentName:"p"},"config?"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.migratorconfig"}),Object(b.b)("em",{parentName:"a"},"MigratorConfig")),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"number"),">"),Object(b.b)("h4",{id:"parameters-7"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"config?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/interfaces/knex.knex.migratorconfig"}),Object(b.b)("em",{parentName:"a"},"MigratorConfig")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"number"),">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2132"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"up"},"up"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"up"),"(",Object(b.b)("inlineCode",{parentName:"p"},"config?"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.migratorconfig"}),Object(b.b)("em",{parentName:"a"},"MigratorConfig")),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"any"),">"),Object(b.b)("h4",{id:"parameters-8"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"config?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/interfaces/knex.knex.migratorconfig"}),Object(b.b)("em",{parentName:"a"},"MigratorConfig")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"any"),">"),Object(b.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2135"))}l.isMDXComponent=!0}}]);