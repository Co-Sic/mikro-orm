(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{1256:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return j}));var r=a(0),b=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,b=function(e,t){if(null==e)return{};var a,r,b={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var l=b.a.createContext({}),p=function(e){var t=b.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},O=function(e){var t=p(e.components);return b.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},s=b.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),O=p(a),s=r,j=O["".concat(c,".").concat(s)]||O[s]||m[s]||n;return a?b.a.createElement(j,o(o({ref:t},l),{},{components:a})):b.a.createElement(j,o({ref:t},l))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<n;l++)c[l]=a[l];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},340:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var r=a(3),b=a(7),n=(a(0),a(1256)),c={id:"mikroorm",title:"Class: MikroORM<D>",sidebar_label:"MikroORM"},o={unversionedId:"api/classes/mikroorm",id:"version-4.3/api/classes/mikroorm",isDocsHomePage:!1,title:"Class: MikroORM<D>",description:"Helper class for bootstrapping the MikroORM.",source:"@site/versioned_docs/version-4.3/api/classes/mikroorm.md",slug:"/api/classes/mikroorm",permalink:"/docs/4.3/api/classes/mikroorm",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/classes/mikroorm.md",version:"4.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1612454294,sidebar_label:"MikroORM",sidebar:"version-4.3/API",previous:{title:"Class: Migrator",permalink:"/docs/4.3/api/classes/migrator"},next:{title:"Class: MongoConnection",permalink:"/docs/4.3/api/classes/mongoconnection"}},i=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"config",id:"config",children:[]},{value:"driver",id:"driver",children:[]},{value:"em",id:"em",children:[]},{value:"logger",id:"logger",children:[]},{value:"metadata",id:"metadata",children:[]}]},{value:"Methods",id:"methods",children:[{value:"close",id:"close",children:[]},{value:"connect",id:"connect",children:[]},{value:"getEntityGenerator",id:"getentitygenerator",children:[]},{value:"getMetadata",id:"getmetadata",children:[]},{value:"getMigrator",id:"getmigrator",children:[]},{value:"getSchemaGenerator",id:"getschemagenerator",children:[]},{value:"isConnected",id:"isconnected",children:[]},{value:"init",id:"init",children:[]}]}],l={toc:i};function p(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Helper class for bootstrapping the MikroORM."),Object(n.b)("h2",{id:"type-parameters"},"Type parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"D")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api/interfaces/idatabasedriver"}),"IDatabaseDriver")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"IDatabaseDriver")))),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"MikroORM"))),Object(n.b)("h2",{id:"constructors"},"Constructors"),Object(n.b)("h3",{id:"constructor"},"constructor"),Object(n.b)("p",null,"+"," ",Object(n.b)("strong",{parentName:"p"},"new MikroORM"),"(",Object(n.b)("inlineCode",{parentName:"p"},"options"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api#options"}),"Options"),"<","D> ","|"," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/configuration"}),"Configuration"),"<","D>): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/mikroorm"}),"MikroORM")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/MikroORM.ts#L47"}),"packages/core/src/MikroORM.ts:47"))),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"options")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api#options"}),"Options"),"<","D> ","|"," ",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api/classes/configuration"}),"Configuration"),"<","D>")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/mikroorm"}),"MikroORM")),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("h3",{id:"config"},"config"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"config"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/configuration"}),"Configuration"),"<","D>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/MikroORM.ts#L16"}),"packages/core/src/MikroORM.ts:16"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"driver"},"driver"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Private")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"driver"),": D"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/MikroORM.ts#L18"}),"packages/core/src/MikroORM.ts:18"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"em"},"em"),Object(n.b)("p",null,"\u2022  ",Object(n.b)("strong",{parentName:"p"},"em"),": D","[",Object(n.b)("em",{parentName:"p"},"typeof")," EntityManagerType]"," & ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/entitymanager"}),"EntityManager")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/MikroORM.ts#L15"}),"packages/core/src/MikroORM.ts:15"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"logger"},"logger"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Private")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"logger"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/logger"}),"Logger")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/MikroORM.ts#L19"}),"packages/core/src/MikroORM.ts:19"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"metadata"},"metadata"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Private")," ",Object(n.b)("strong",{parentName:"p"},"metadata"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/metadatastorage"}),"MetadataStorage")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/MikroORM.ts#L17"}),"packages/core/src/MikroORM.ts:17"))),Object(n.b)("h2",{id:"methods"},"Methods"),Object(n.b)("h3",{id:"close"},"close"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"close"),"(",Object(n.b)("inlineCode",{parentName:"p"},"force?"),": boolean): Promise","<","void>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/MikroORM.ts#L94"}),"packages/core/src/MikroORM.ts:94"))),Object(n.b)("p",null,"Closes the database connection."),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"force")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"false")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"connect"},"connect"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"connect"),"(): Promise","<","D>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/MikroORM.ts#L69"}),"packages/core/src/MikroORM.ts:69"))),Object(n.b)("p",null,"Connects to the database."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Promise","<","D>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getentitygenerator"},"getEntityGenerator"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getEntityGenerator"),"<","T>(): T"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/MikroORM.ts#L115"}),"packages/core/src/MikroORM.ts:115"))),Object(n.b)("p",null,"Gets the EntityGenerator."),Object(n.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api/interfaces/ientitygenerator"}),"IEntityGenerator")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"IEntityGenerator")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," T"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getmetadata"},"getMetadata"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getMetadata"),"(): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/metadatastorage"}),"MetadataStorage")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/MikroORM.ts#L101"}),"packages/core/src/MikroORM.ts:101"))),Object(n.b)("p",null,"Gets the MetadataStorage."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/metadatastorage"}),"MetadataStorage")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getmigrator"},"getMigrator"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getMigrator"),"<","T>(): T"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/MikroORM.ts#L124"}),"packages/core/src/MikroORM.ts:124"))),Object(n.b)("p",null,"Gets the Migrator."),Object(n.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api/interfaces/imigrator"}),"IMigrator")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"IMigrator")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," T"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getschemagenerator"},"getSchemaGenerator"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getSchemaGenerator"),"<","T>(): T"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/MikroORM.ts#L108"}),"packages/core/src/MikroORM.ts:108"))),Object(n.b)("p",null,"Gets the SchemaGenerator."),Object(n.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api/interfaces/ischemagenerator"}),"ISchemaGenerator")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ISchemaGenerator")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," T"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"isconnected"},"isConnected"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"isConnected"),"(): Promise","<","boolean>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/MikroORM.ts#L87"}),"packages/core/src/MikroORM.ts:87"))),Object(n.b)("p",null,"Checks whether the database connection is active."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Promise","<","boolean>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"init"},"init"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"init"),"<","D>(",Object(n.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api#options"}),"Options"),"<","D> ","|"," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/configuration"}),"Configuration"),"<","D>, ",Object(n.b)("inlineCode",{parentName:"p"},"connect?"),": boolean): Promise","<",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/mikroorm"}),"MikroORM"),"<","D>>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/MikroORM.ts#L25"}),"packages/core/src/MikroORM.ts:25"))),Object(n.b)("p",null,"Initialize the ORM, load entity metadata, create EntityManager and connect to the database.\nIf you omit the ",Object(n.b)("inlineCode",{parentName:"p"},"options")," parameter, your CLI config will be used."),Object(n.b)("h4",{id:"type-parameters-4"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"D")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api/interfaces/idatabasedriver"}),"IDatabaseDriver")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"IDatabaseDriver")))),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"options?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api#options"}),"Options"),"<","D> ","|"," ",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api/classes/configuration"}),"Configuration"),"<","D>"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"connect")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"true")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/mikroorm"}),"MikroORM"),"<","D>>"))}p.isMDXComponent=!0}}]);