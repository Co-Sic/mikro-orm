(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{1026:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return O}));var a=t(0),b=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,b=function(e,n){if(null==e)return{};var t,a,b={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(b[t]=e[t]);return b}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(b[t]=e[t])}return b}var p=b.a.createContext({}),o=function(e){var n=b.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=o(e.components);return b.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return b.a.createElement(b.a.Fragment,{},n)}},m=b.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=o(t),m=a,O=s["".concat(c,".").concat(m)]||s[m]||d[m]||i;return t?b.a.createElement(O,r(r({ref:n},p),{},{components:t})):b.a.createElement(O,r({ref:n},p))}));function O(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=m;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,c[1]=r;for(var p=2;p<i;p++)c[p]=t[p];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},379:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return r})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return o}));var a=t(3),b=t(8),i=(t(0),t(1026)),c={id:"knex.knex-1.mysql2connectionconfig",title:"Interface: MySql2ConnectionConfig",sidebar_label:"MySql2ConnectionConfig",custom_edit_url:null,hide_title:!0},r={unversionedId:"api/interfaces/knex.knex-1.mysql2connectionconfig",id:"version-4.5/api/interfaces/knex.knex-1.mysql2connectionconfig",isDocsHomePage:!1,title:"Interface: MySql2ConnectionConfig",description:"Interface: MySql2ConnectionConfig",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.mysql2connectionconfig.md",slug:"/api/interfaces/knex.knex-1.mysql2connectionconfig",permalink:"/docs/api/interfaces/knex.knex-1.mysql2connectionconfig",editUrl:null,version:"4.5",lastUpdatedBy:"PlatinBae",lastUpdatedAt:1619440269,formattedLastUpdatedAt:"4/26/2021",sidebar_label:"MySql2ConnectionConfig",sidebar:"version-4.5/API",previous:{title:"Interface: MultikeyForeignConstraintBuilder",permalink:"/docs/api/interfaces/knex.knex-1.multikeyforeignconstraintbuilder"},next:{title:"Interface: MySqlAlterColumnBuilder",permalink:"/docs/api/interfaces/knex.knex-1.mysqlaltercolumnbuilder"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"authPlugins",id:"authplugins",children:[]},{value:"authSwitchHandler",id:"authswitchhandler",children:[]},{value:"bigNumberStrings",id:"bignumberstrings",children:[]},{value:"charset",id:"charset",children:[]},{value:"charsetNumber",id:"charsetnumber",children:[]},{value:"compress",id:"compress",children:[]},{value:"connectAttributes",id:"connectattributes",children:[]},{value:"connectTimeout",id:"connecttimeout",children:[]},{value:"database",id:"database",children:[]},{value:"dateStrings",id:"datestrings",children:[]},{value:"debug",id:"debug",children:[]},{value:"decimalNumbers",id:"decimalnumbers",children:[]},{value:"enableKeepAlive",id:"enablekeepalive",children:[]},{value:"flags",id:"flags",children:[]},{value:"host",id:"host",children:[]},{value:"insecureAuth",id:"insecureauth",children:[]},{value:"keepAliveInitialDelay",id:"keepaliveinitialdelay",children:[]},{value:"localAddress",id:"localaddress",children:[]},{value:"maxPreparedStatements",id:"maxpreparedstatements",children:[]},{value:"multipleStatements",id:"multiplestatements",children:[]},{value:"namedPlaceholders",id:"namedplaceholders",children:[]},{value:"nestTables",id:"nesttables",children:[]},{value:"password",id:"password",children:[]},{value:"passwordSha1",id:"passwordsha1",children:[]},{value:"port",id:"port",children:[]},{value:"queryFormat",id:"queryformat",children:[]},{value:"rowsAsArray",id:"rowsasarray",children:[]},{value:"socketPath",id:"socketpath",children:[]},{value:"ssl",id:"ssl",children:[]},{value:"stream",id:"stream",children:[]},{value:"stringifyObjects",id:"stringifyobjects",children:[]},{value:"supportBigNumbers",id:"supportbignumbers",children:[]},{value:"timezone",id:"timezone",children:[]},{value:"trace",id:"trace",children:[]},{value:"typeCast",id:"typecast",children:[]},{value:"uri",id:"uri",children:[]},{value:"user",id:"user",children:[]}]},{value:"Methods",id:"methods",children:[{value:"expirationChecker",id:"expirationchecker",children:[]}]}],p={toc:l};function o(e){var n=e.components,t=Object(b.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-mysql2connectionconfig"},"Interface: MySql2ConnectionConfig"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".MySql2ConnectionConfig"),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig"},Object(i.b)("em",{parentName:"a"},"MySqlConnectionConfig"))),Object(i.b)("p",{parentName:"li"},"\u21b3 ",Object(i.b)("strong",{parentName:"p"},"MySql2ConnectionConfig")))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"authplugins"},"authPlugins"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"authPlugins"),": ",Object(i.b)("em",{parentName:"p"},"object")),Object(i.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2014"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"authswitchhandler"},"authSwitchHandler"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"authSwitchHandler"),": (",Object(i.b)("inlineCode",{parentName:"p"},"data"),": ",Object(i.b)("em",{parentName:"p"},"any"),", ",Object(i.b)("inlineCode",{parentName:"p"},"callback"),": () => ",Object(i.b)("em",{parentName:"p"},"void"),") => ",Object(i.b)("em",{parentName:"p"},"any")),Object(i.b)("h4",{id:"type-declaration-1"},"Type declaration:"),Object(i.b)("p",null,"\u25b8 (",Object(i.b)("inlineCode",{parentName:"p"},"data"),": ",Object(i.b)("em",{parentName:"p"},"any"),", ",Object(i.b)("inlineCode",{parentName:"p"},"callback"),": () => ",Object(i.b)("em",{parentName:"p"},"void"),"): ",Object(i.b)("em",{parentName:"p"},"any")),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"data")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"any"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"callback")),Object(i.b)("td",{parentName:"tr",align:"left"},"() => ",Object(i.b)("em",{parentName:"td"},"void"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"any")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2015"),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2015"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"bignumberstrings"},"bigNumberStrings"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"bigNumberStrings"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Inherited from: ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig"},"MySqlConnectionConfig"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig#bignumberstrings"},"bigNumberStrings")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2000"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"charset"},"charset"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"charset"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Inherited from: ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig"},"MySqlConnectionConfig"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig#charset"},"charset")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1992"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"charsetnumber"},"charsetNumber"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"charsetNumber"),": ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2016"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"compress"},"compress"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"compress"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2017"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"connectattributes"},"connectAttributes"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"connectAttributes"),": ",Object(i.b)("em",{parentName:"p"},"object")),Object(i.b)("h4",{id:"type-declaration-2"},"Type declaration:"),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2018"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"connecttimeout"},"connectTimeout"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"connectTimeout"),": ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"Inherited from: ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig"},"MySqlConnectionConfig"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig#connecttimeout"},"connectTimeout")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1994"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"database"},"database"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"database"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Inherited from: ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig"},"MySqlConnectionConfig"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig#database"},"database")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1991"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"datestrings"},"dateStrings"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"dateStrings"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Inherited from: ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig"},"MySqlConnectionConfig"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig#datestrings"},"dateStrings")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2001"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"debug"},"debug"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"debug"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Inherited from: ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig"},"MySqlConnectionConfig"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig#debug"},"debug")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2002"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"decimalnumbers"},"decimalNumbers"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"decimalNumbers"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Inherited from: ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig"},"MySqlConnectionConfig"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig#decimalnumbers"},"decimalNumbers")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2007"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"enablekeepalive"},"enableKeepAlive"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"enableKeepAlive"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2019"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"flags"},"flags"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"flags"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Inherited from: ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig"},"MySqlConnectionConfig"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig#flags"},"flags")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2005"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"host"},"host"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"host"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Inherited from: ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig"},"MySqlConnectionConfig"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig#host"},"host")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1985"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"insecureauth"},"insecureAuth"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"insecureAuth"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Inherited from: ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig"},"MySqlConnectionConfig"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig#insecureauth"},"insecureAuth")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1996"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"keepaliveinitialdelay"},"keepAliveInitialDelay"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"keepAliveInitialDelay"),": ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2020"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"localaddress"},"localAddress"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"localAddress"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Inherited from: ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig"},"MySqlConnectionConfig"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig#localaddress"},"localAddress")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1987"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"maxpreparedstatements"},"maxPreparedStatements"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"maxPreparedStatements"),": ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2021"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"multiplestatements"},"multipleStatements"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"multipleStatements"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Inherited from: ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig"},"MySqlConnectionConfig"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig#multiplestatements"},"multipleStatements")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2004"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"namedplaceholders"},"namedPlaceholders"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"namedPlaceholders"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2022"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"nesttables"},"nestTables"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"nestTables"),": ",Object(i.b)("em",{parentName:"p"},"string")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2023"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"password"},"password"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"password"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Inherited from: ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig"},"MySqlConnectionConfig"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig#password"},"password")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1990"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"passwordsha1"},"passwordSha1"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"passwordSha1"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2024"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"port"},"port"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"port"),": ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"Inherited from: ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig"},"MySqlConnectionConfig"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig#port"},"port")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1986"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"queryformat"},"queryFormat"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"queryFormat"),": (",Object(i.b)("inlineCode",{parentName:"p"},"query"),": ",Object(i.b)("em",{parentName:"p"},"string"),", ",Object(i.b)("inlineCode",{parentName:"p"},"values"),": ",Object(i.b)("em",{parentName:"p"},"any"),") => ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("h4",{id:"type-declaration-3"},"Type declaration:"),Object(i.b)("p",null,"\u25b8 (",Object(i.b)("inlineCode",{parentName:"p"},"query"),": ",Object(i.b)("em",{parentName:"p"},"string"),", ",Object(i.b)("inlineCode",{parentName:"p"},"values"),": ",Object(i.b)("em",{parentName:"p"},"any"),"): ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("h4",{id:"parameters-1"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"query")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"string"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"values")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"any"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1998"),Object(i.b)("p",null,"Inherited from: ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig"},"MySqlConnectionConfig"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig#queryformat"},"queryFormat")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1998"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"rowsasarray"},"rowsAsArray"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"rowsAsArray"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2025"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"socketpath"},"socketPath"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"socketPath"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Inherited from: ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig"},"MySqlConnectionConfig"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig#socketpath"},"socketPath")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1988"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"ssl"},"ssl"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"ssl"),": ",Object(i.b)("em",{parentName:"p"},"string")," ","|"," ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mariasslconfiguration"},Object(i.b)("em",{parentName:"a"},"MariaSslConfiguration"))),Object(i.b)("p",null,"Inherited from: ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig"},"MySqlConnectionConfig"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig#ssl"},"ssl")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2006"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"stream"},"stream"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"stream"),": ",Object(i.b)("em",{parentName:"p"},"boolean")," ","|"," (",Object(i.b)("inlineCode",{parentName:"p"},"opts"),": ",Object(i.b)("em",{parentName:"p"},"any"),") => ",Object(i.b)("em",{parentName:"p"},"Stream")," ","|"," ",Object(i.b)("em",{parentName:"p"},"Stream")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2026"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"stringifyobjects"},"stringifyObjects"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"stringifyObjects"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Inherited from: ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig"},"MySqlConnectionConfig"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig#stringifyobjects"},"stringifyObjects")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1995"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"supportbignumbers"},"supportBigNumbers"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"supportBigNumbers"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Inherited from: ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig"},"MySqlConnectionConfig"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig#supportbignumbers"},"supportBigNumbers")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1999"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"timezone"},"timezone"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"timezone"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Inherited from: ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig"},"MySqlConnectionConfig"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig#timezone"},"timezone")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1993"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"trace"},"trace"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"trace"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Inherited from: ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig"},"MySqlConnectionConfig"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig#trace"},"trace")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2003"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"typecast"},"typeCast"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"typeCast"),": ",Object(i.b)("em",{parentName:"p"},"any")),Object(i.b)("p",null,"Inherited from: ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig"},"MySqlConnectionConfig"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig#typecast"},"typeCast")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1997"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"uri"},"uri"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"uri"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2027"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"user"},"user"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"user"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Inherited from: ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig"},"MySqlConnectionConfig"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig#user"},"user")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1989"),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"expirationchecker"},"expirationChecker"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional"),Object(i.b)("strong",{parentName:"p"},"expirationChecker"),"(): ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Inherited from: ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig"},"MySqlConnectionConfig")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2008"))}o.isMDXComponent=!0}}]);