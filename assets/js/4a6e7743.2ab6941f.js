(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{1026:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return O}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),l=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=l(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,b=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(t),s=r,O=m["".concat(b,".").concat(s)]||m[s]||d[s]||i;return t?a.a.createElement(O,o(o({ref:n},c),{},{components:t})):a.a.createElement(O,o({ref:n},c))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,b=new Array(i);b[0]=s;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,b[1]=o;for(var c=2;c<i;c++)b[c]=t[c];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},342:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return b})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(8),i=(t(0),t(1026)),b={id:"knex.knex-1.mssqlconnectionconfig",title:"Interface: MsSqlConnectionConfig",sidebar_label:"MsSqlConnectionConfig",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/interfaces/knex.knex-1.mssqlconnectionconfig",id:"version-4.5/api/interfaces/knex.knex-1.mssqlconnectionconfig",isDocsHomePage:!1,title:"Interface: MsSqlConnectionConfig",description:"Interface: MsSqlConnectionConfig",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.mssqlconnectionconfig.md",slug:"/api/interfaces/knex.knex-1.mssqlconnectionconfig",permalink:"/docs/api/interfaces/knex.knex-1.mssqlconnectionconfig",editUrl:null,version:"4.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1618818414,formattedLastUpdatedAt:"4/19/2021",sidebar_label:"MsSqlConnectionConfig",sidebar:"version-4.5/API",previous:{title:"Interface: MigratorConfig",permalink:"/docs/api/interfaces/knex.knex-1.migratorconfig"},next:{title:"Interface: MultikeyForeignConstraintBuilder",permalink:"/docs/api/interfaces/knex.knex-1.multikeyforeignconstraintbuilder"}},p=[{value:"Properties",id:"properties",children:[{value:"connectionTimeout",id:"connectiontimeout",children:[]},{value:"database",id:"database",children:[]},{value:"domain",id:"domain",children:[]},{value:"driver",id:"driver",children:[]},{value:"options",id:"options",children:[]},{value:"parseJSON",id:"parsejson",children:[]},{value:"password",id:"password",children:[]},{value:"pool",id:"pool",children:[]},{value:"port",id:"port",children:[]},{value:"requestTimeout",id:"requesttimeout",children:[]},{value:"server",id:"server",children:[]},{value:"stream",id:"stream",children:[]},{value:"user",id:"user",children:[]}]},{value:"Methods",id:"methods",children:[{value:"expirationChecker",id:"expirationchecker",children:[]}]}],c={toc:p};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-mssqlconnectionconfig"},"Interface: MsSqlConnectionConfig"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".MsSqlConnectionConfig"),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"connectiontimeout"},"connectionTimeout"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"connectionTimeout"),": ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1913"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"database"},"database"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"database"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1912"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"domain"},"domain"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"domain"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1911"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"driver"},"driver"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"driver"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1906"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"options"},"options"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"options"),": ",Object(i.b)("em",{parentName:"p"},"Readonly"),"<{ ",Object(i.b)("inlineCode",{parentName:"p"},"abortTransactionOnError?"),": ",Object(i.b)("em",{parentName:"p"},"boolean")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"appName?"),": ",Object(i.b)("em",{parentName:"p"},"string")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"enableArithAbort?"),": ",Object(i.b)("em",{parentName:"p"},"boolean")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"encrypt?"),": ",Object(i.b)("em",{parentName:"p"},"boolean")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"instanceName?"),": ",Object(i.b)("em",{parentName:"p"},"string")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"isolationLevel?"),": ",Object(i.b)("em",{parentName:"p"},"READ_UNCOMMITTED")," ","|"," ",Object(i.b)("em",{parentName:"p"},"READ_COMMITTED")," ","|"," ",Object(i.b)("em",{parentName:"p"},"REPEATABLE_READ")," ","|"," ",Object(i.b)("em",{parentName:"p"},"SERIALIZABLE")," ","|"," ",Object(i.b)("em",{parentName:"p"},"SNAPSHOT")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"maxRetriesOnTransientErrors?"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"multiSubnetFailover?"),": ",Object(i.b)("em",{parentName:"p"},"boolean")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"packetSize?"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"tdsVersion?"),": ",Object(i.b)("em",{parentName:"p"},"string")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"trustedConnection?"),": ",Object(i.b)("em",{parentName:"p"},"boolean")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"useUTC?"),": ",Object(i.b)("em",{parentName:"p"},"boolean"),"  }",">"),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1918"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"parsejson"},"parseJSON"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"parseJSON"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1916"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"password"},"password"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"password"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1908"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"pool"},"pool"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"pool"),": ",Object(i.b)("em",{parentName:"p"},"Readonly"),"<{ ",Object(i.b)("inlineCode",{parentName:"p"},"Promise?"),": ",Object(i.b)("em",{parentName:"p"},"any")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"acquireTimeoutMillis?"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"autostart?"),": ",Object(i.b)("em",{parentName:"p"},"boolean")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"evictionRunIntervalMillis?"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"fifo?"),": ",Object(i.b)("em",{parentName:"p"},"boolean")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"idleTimeoutMillis?"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"max?"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"maxWaitingClients?"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"min?"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"numTestsPerRun?"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"priorityRange?"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"softIdleTimeoutMillis?"),": ",Object(i.b)("em",{parentName:"p"},"number")," ; ",Object(i.b)("inlineCode",{parentName:"p"},"testOnBorrow?"),": ",Object(i.b)("em",{parentName:"p"},"boolean"),"  }",">"),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1932"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"port"},"port"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"port"),": ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1910"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"requesttimeout"},"requestTimeout"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"requestTimeout"),": ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1914"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"server"},"server"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"server"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1909"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"stream"},"stream"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"stream"),": ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1915"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"user"},"user"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"user"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1907"),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"expirationchecker"},"expirationChecker"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional"),Object(i.b)("strong",{parentName:"p"},"expirationChecker"),"(): ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1917"))}l.isMDXComponent=!0}}]);